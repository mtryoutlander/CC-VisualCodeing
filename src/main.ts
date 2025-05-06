import * as Blockly from "blockly";
import "blockly/blocks"; // Make sure standard blocks are loaded
import { luaGenerator } from "blockly/lua";
import "./CCBlocks";

// Inject Blockly into the div
const workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox") as HTMLElement,
});

const toolbox = document.getElementById("toolbox") as HTMLElement;
const originalToolbox = toolbox; // Store the original toolbox as XML

// Generate Lua and download it
document.getElementById("generateButton")?.addEventListener("click", () => {
  const luaCode = luaGenerator.workspaceToCode(workspace);
  const blob = new Blob([luaCode], { type: "text/plain" });
  const a = document.createElement("a");
  a.download = "script.lua";
  a.href = URL.createObjectURL(blob);
  a.click();
});

// Search functionality
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();

  // If the search input is empty, reset the toolbox to its original state
  if (!query) {
    workspace.updateToolbox(originalToolbox); // Reset to the original toolbox
    return;
  }

  // Clone the original toolbox to filter it
  const filteredToolbox = originalToolbox.cloneNode(true) as HTMLElement;
  const categories = filteredToolbox.querySelectorAll("category");

  categories.forEach((category) => {
    const blocks = category.querySelectorAll("block");
    let hasVisibleBlock = false;

    blocks.forEach((block) => {
      const blockType = block.getAttribute("type") || "";
      if (blockType.toLowerCase().includes(query)) {
        hasVisibleBlock = true; // Keep the block if it matches the query
      } else {
        block.remove(); // Remove non-matching blocks
      }
    });

    // Remove the category if it has no visible blocks
    if (!hasVisibleBlock) {
      category.remove();
    }
  });

  // Update the workspace with the filtered toolbox
  workspace.updateToolbox(filteredToolbox);
});

