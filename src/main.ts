import * as Blockly from "blockly";
import "blockly/blocks"; // Make sure standard blocks are loaded
import { luaGenerator } from "blockly/lua";
import "./CCBlocks";
import { log } from "console";

// Inject Blockly into the div
const workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox") as HTMLElement,
});

const toolbox = document.getElementById("toolbox") as HTMLElement;
var filteredToolbox = toolbox.cloneNode(true) as HTMLElement;

const modChecked = document.querySelectorAll('input[name="mod"]');

(window as any).modDropdown = function modDropdown() {
  const dropdown = document.getElementById("mods") as HTMLDivElement;
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
};
// Function to filter blocks based on selected mod
modChecked.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedMod = (document.querySelectorAll('input[name="mod"]:checked'));

    // Clone the original toolbox to filter it
    const clonedToolbox = toolbox.cloneNode(true) as HTMLElement;
    const categories = clonedToolbox.querySelectorAll("category");

    categories.forEach((category) => {
      const categoryName = category.getAttribute("name") || "";

      // Skip filtering for the "Variables" category
      if (categoryName === "Variables") {
        return;
      }
      const blocks = category.querySelectorAll("block");

      let hasVisibleBlock = false;

      blocks.forEach((block) => {
        const blockMod = block.getAttribute("data-mod") || "";
        let matched = false;
        selectedMod.forEach(element => {
          const x = element as HTMLInputElement;
          if (blockMod === x.value) {
            hasVisibleBlock = true; // Keep the block if its mod matches the selected mod
            matched = true;
          }

        });

        if (!matched) {
          block.remove(); // Remove blocks not belonging to the selected mod
        }
      });

      // Remove the category if it has no visible blocks
      if (!hasVisibleBlock) {
        category.remove();
      }
    });

    // Update the workspace with the filtered toolbox
    workspace.updateToolbox(clonedToolbox);
    filteredToolbox = clonedToolbox; // Store the filtered toolbox
  });
});
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
    workspace.updateToolbox(filteredToolbox); // Reset to the original toolbox
    return;
  }

  // Clone the original toolbox to filter it
  const clonedToolbox = filteredToolbox.cloneNode(true) as HTMLElement;
  const categories = clonedToolbox.querySelectorAll("category");

  categories.forEach((category) => {
    const categoryName = category.getAttribute("name") || "";

    // Skip filtering for the "Variables" category
    if (categoryName === "Variables") {
      return;
    }
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
  workspace.updateToolbox(clonedToolbox);
});
//code viewer
const generateCodeButton = document.getElementById("generateCodeButton") as HTMLButtonElement;
const codeViewer = document.getElementById("codeViewer") as HTMLTextAreaElement;

generateCodeButton.addEventListener("click", () => {
  const code = luaGenerator.workspaceToCode(workspace);
  codeViewer.value = code; // Display the generated Lua code
});

//craft os emulator
const runCodeButton = document.getElementById("runCodeButton") as HTMLButtonElement;
const craftosEmulator = document.getElementById("craftosEmulator") as HTMLIFrameElement;

runCodeButton.addEventListener("click", () => {
  const code = luaGenerator.workspaceToCode(workspace);

  // Send the Lua code to the CraftOS-PC emulator
  craftosEmulator.contentWindow?.postMessage(
    {
      type: "run",
      code: code,
    },
    "*"
  );
});