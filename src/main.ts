import * as Blockly from "blockly";
import 'blockly/blocks'; // Make sure standard blocks are loaded
import { luaGenerator } from "blockly/lua";
import "./CCBlocks";

// Inject Blockly into the div
const workspace = Blockly.inject("blocklyDiv", {
  toolbox: document.getElementById("toolbox") as HTMLElement,
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
