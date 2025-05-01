import * as Blockly from "blockly";
import { luaGenerator, Order } from "blockly/lua";

//#region Turtle
// Turtle: Craft
Blockly.Blocks["turtle_craft"] = {
  init: function () {
    this.appendValueInput("COUNT")
      .setCheck("Number")
      .appendField("turtle.craft count");
    this.setOutput(true, "Boolean");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null); // Allow connection to a block below
    this.setInputsInline(true); // Align inputs inline
    this.setColour(160);
    this.setTooltip("Attempts to craft the specified number of items and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:craft");
  },
};
luaGenerator.forBlock["turtle_craft"] = function (block) {
  const count = luaGenerator.valueToCode(block, "COUNT", Order.NONE) || "0";
  return `turtle.craft(${count})\n`;
};
// Turtle: Move
Blockly.Blocks["turtle_move"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.move")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "forward"],
        ["back", "back"],
        ["up", "up"],
        ["down", "down"]
      ]), "DIRECTION");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setColour(160);
    this.setTooltip("Moves the turtle in the selected direction and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_move"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  return `turtle.${direction}()\n`;
};
// Turtle: Turn
Blockly.Blocks["turtle_turn"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.turn")
      .appendField(new Blockly.FieldDropdown([
        ["left", "turnLeft"],
        ["right", "turnRight"]
      ]), "DIRECTION");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setColour(160);
    this.setTooltip("Turns the turtle in the selected direction and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_turn"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  return `turtle.${direction}()\n`;
};

// Turtle: Select Slot
Blockly.Blocks["turtle_select"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.select slot")
      .appendField(new Blockly.FieldDropdown([
        ["selected", ""],
        ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"],
        ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"],
        ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"],
        ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"]
      ]), "SLOT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip("Selects the specified slot in the turtle's inventory.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:select");
  },
};
luaGenerator.forBlock["turtle_select"] = function (block) {
  const slot = block.getFieldValue("SLOT");
  return slot ? `turtle.select(${slot})\n` : "turtle.select()\n";
};

// Turtle: Get Selected Slot
Blockly.Blocks["turtle_getSelectedSlot"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.getSelectedSlot");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Gets the currently selected slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getSelectedSlot");
  },
};
luaGenerator.forBlock["turtle_getSelectedSlot"] = function () {
  return ["turtle.getSelectedSlot()", Order.NONE];
};

// Turtle: Get Item Count
Blockly.Blocks["turtle_getItemCount"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.getItemCount slot")
      .appendField(new Blockly.FieldDropdown([
        ["selected", ""],
        ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"],
        ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"],
        ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"],
        ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"]
      ]), "SLOT");
    this.setOutput(true, "Number");
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip("Gets the number of items in the specified slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getItemCount");
  },
};
luaGenerator.forBlock["turtle_getItemCount"] = function (block) {
  const slot = block.getFieldValue("SLOT");
  return [slot ? `turtle.getItemCount(${slot})` : "turtle.getItemCount()", Order.NONE];
};

// Turtle: Get Item Space
Blockly.Blocks["turtle_getItemSpace"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.getItemSpace slot")
      .appendField(new Blockly.FieldDropdown([
        ["selected", ""],
        ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"],
        ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"],
        ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"],
        ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"]
      ]), "SLOT");
    this.setOutput(true, "Number");
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip("Gets the remaining space in the specified slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getItemSpace");
  },
};
luaGenerator.forBlock["turtle_getItemSpace"] = function (block) {
  const slot = block.getFieldValue("SLOT");
  return [slot ? `turtle.getItemSpace(${slot})` : "turtle.getItemSpace()", Order.NONE];
};

// Turtle: Get Item Detail
Blockly.Blocks["turtle_getItemDetail"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.getItemDetail slot")
      .appendField(new Blockly.FieldDropdown([
        ["selected", ""],
        ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"],
        ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"],
        ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"],
        ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"]
      ]), "SLOT");
    this.setOutput(true, "Object");
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip("Gets detailed information about the item in the specified slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getItemDetail");
  },
};
luaGenerator.forBlock["turtle_getItemDetail"] = function (block) {
  const slot = block.getFieldValue("SLOT");
  return [slot ? `turtle.getItemDetail(${slot})` : "turtle.getItemDetail()", Order.NONE];
};

// Turtle: Equip
Blockly.Blocks["turtle_equip"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.equip")
      .appendField(new Blockly.FieldDropdown([
        ["left", "equipLeft"],
        ["right", "equipRight"]
      ]), "SIDE");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Equips the item in the selected slot to the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_equip"] = function (block) {
  const side = block.getFieldValue("SIDE");
  return `turtle.${side}()\n`;
};

// Turtle: Dig
Blockly.Blocks["turtle_dig"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.dig")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "dig"],
        ["up", "digUp"],
        ["down", "digDown"]
      ]), "DIRECTION")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["left", "Left"],
        ["right", "Right"]
      ]), "SIDE");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setColour(160);
    this.setTooltip("Digs a block in the selected direction and optionally on the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_dig"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  const side = block.getFieldValue("SIDE");
  return `turtle.${direction}(${side})\n`;
};

// Turtle: Place
Blockly.Blocks["turtle_place"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.place")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "place"],
        ["up", "placeUp"],
        ["down", "placeDown"]
      ]), "DIRECTION");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setColour(160);
    this.setTooltip("Places a block or item in the selected direction and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_place"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  return `turtle.${direction}()\n`;
};

// Turtle: Drop
Blockly.Blocks["turtle_drop"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.drop")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "drop"],
        ["up", "dropUp"],
        ["down", "dropDown"]
      ]), "DIRECTION");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setColour(160);
    this.setTooltip("Drops items in the selected direction and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_drop"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  return `turtle.${direction}()\n`;
};

// Turtle: Detect
Blockly.Blocks["turtle_detect"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.detect")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "detect"],
        ["up", "detectUp"],
        ["down", "detectDown"]
      ]), "DIRECTION");
    this.setOutput(true, "Boolean"); // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Detects if there is a block in the selected direction.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_detect"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  return [`turtle.${direction}()`, Order.NONE];
};

// Turtle: Attack
Blockly.Blocks["turtle_attack"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.attack")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "attack"],
        ["up", "attackUp"],
        ["down", "attackDown"]
      ]), "DIRECTION");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setColour(160);
    this.setTooltip("Attacks an entity in the selected direction and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_attack"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  return `turtle.${direction}()\n`;
};
// Turtle: Compare
Blockly.Blocks["turtle_compare"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.compare")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "compare"],
        ["up", "compareUp"],
        ["down", "compareDown"]
      ]), "DIRECTION");
    this.setOutput(true, "Boolean"); // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Compares the block in the selected direction with the item in the selected slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_compare"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  return [`turtle.${direction}()`, Order.NONE];
};

// Turtle: Compare To
Blockly.Blocks["turtle_compareTo"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.compareTo slot")
      .appendField(new Blockly.FieldDropdown([
        ["selected", ""],
        ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"],
        ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"],
        ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"],
        ["13", "13"], ["14", "14"], ["15", "15"], ["16", "16"]
      ]), "SLOT");
    this.setOutput(true, "Boolean");
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip("Compares the item in the selected slot with the item in the specified slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:compareTo");
  },
};
luaGenerator.forBlock["turtle_compareTo"] = function (block) {
  const slot = block.getFieldValue("SLOT");
  return [slot ? `turtle.compareTo(${slot})` : "turtle.compareTo()", Order.NONE];
};
// Turtle: Suck
Blockly.Blocks["turtle_suck"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.suck")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "suck"],
        ["up", "suckUp"],
        ["down", "suckDown"]
      ]), "DIRECTION");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setColour(160);
    this.setTooltip("Pulls an item from the inventory or block in the selected direction.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_suck"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  return `turtle.${direction}()\n`;
};

// Turtle: Get Fuel Level
Blockly.Blocks["turtle_getFuelLevel"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.getFuelLevel");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Gets the current fuel level of the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getFuelLevel");
  },
};
luaGenerator.forBlock["turtle_getFuelLevel"] = function () {
  return ["turtle.getFuelLevel()", Order.NONE];
};

// Turtle: Refuel
Blockly.Blocks["turtle_refuel"] = {
  init: function () {
    this.appendValueInput("COUNT")
      .setCheck("Number")
      .appendField("turtle.refuel count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true); // Align inputs inline
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Refuels the turtle using the specified number of items.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:refuel");
  },
};
luaGenerator.forBlock["turtle_refuel"] = function (block) {
  const count = luaGenerator.valueToCode(block, "COUNT", Order.NONE);
  return `turtle.refuel(${count})\n`;
};

// Turtle: Transfer To
Blockly.Blocks["turtle_transferTo"] = {
  init: function () {
    this.appendValueInput("SLOT")
      .setCheck("Number")
      .appendField("turtle.transferTo slot");
    this.appendValueInput("COUNT")
      .setCheck("Number")
      .appendField("count");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true); // Align inputs inline
    this.setColour(160);
    this.setTooltip("Transfers the specified number of items from the selected slot to the specified slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:transferTo");
  },
};
luaGenerator.forBlock["turtle_transferTo"] = function (block) {
  const slot = luaGenerator.valueToCode(block, "SLOT", Order.NONE);
  const count = luaGenerator.valueToCode(block, "COUNT", Order.NONE);
  return `turtle.transferTo(${slot}, ${count})\n`;
};
// Turtle: Inspect
Blockly.Blocks["turtle_inspect"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.inspect")
      .appendField(new Blockly.FieldDropdown([
        ["forward", "inspect"],
        ["up", "inspectUp"],
        ["down", "inspectDown"]
      ]), "DIRECTION");
    this.setOutput(true, "Object"); // Allow the block to return an object (table)
    this.setColour(160);
    this.setTooltip("Inspects the block in the selected direction and returns its details.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_inspect"] = function (block) {
  const direction = block.getFieldValue("DIRECTION");
  return `turtle.${direction}()\n`;
};
// Turtle: Get Equipped
Blockly.Blocks["turtle_getEquipped"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("turtle.getEquipped")
      .appendField(new Blockly.FieldDropdown([
        ["left", "getEquippedLeft"],
        ["right", "getEquippedRight"]
      ]), "SIDE");
    this.setOutput(true, "Object"); // Allow the block to return an object (table)
    this.setColour(160);
    this.setTooltip("Gets details about the item equipped on the selected side of the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html");
  },
};

luaGenerator.forBlock["turtle_getEquipped"] = function (block) {
  const side = block.getFieldValue("SIDE");
  return [`turtle.${side}()`, Order.NONE];
};

//#endregion

//#region General

// General: Sleep
Blockly.Blocks["G_sleep"] = {
  init: function () {
    this.appendValueInput("TIME")
      .setCheck("Number")
      .appendField("sleep for");
    this.appendDummyInput().appendField("seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(120);
    this.setTooltip("Pauses execution for the specified number of seconds.");
    this.setHelpUrl("https://tweaked.cc/module/os.html#v:sleep");
  },
};
luaGenerator.forBlock["G_sleep"] = function (block) {
  const time = luaGenerator.valueToCode(block, "TIME", Order.NONE) || "0";
  return [`os.sleep(${time})`, Order.NONE];
};

// General: Write
Blockly.Blocks["G_write"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("write");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("Writes text to the terminal without a newline.");
    this.setHelpUrl("https://tweaked.cc/module/term.html#v:write");
  },
};
luaGenerator.forBlock["G_write"] = function (block) {
  const text = luaGenerator.valueToCode(block, "TEXT", Order.NONE) || '""';
  return [`term.write(${text})`, Order.NONE];
};

// General: Print
Blockly.Blocks["G_print"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("print");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("Prints text to the terminal with a newline.");
    this.setHelpUrl("https://tweaked.cc/module/_G.html#v:print");
  },
};
luaGenerator.forBlock["G_print"] = function (block) {
  const text = luaGenerator.valueToCode(block, "TEXT", Order.NONE) || '""';
  return [`print(${text})`, Order.NONE];
};

// General: Print Error
Blockly.Blocks["G_printError"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("print error");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(120);
    this.setTooltip("Prints an error message to the terminal.");
    this.setHelpUrl("https://tweaked.cc/module/_G.html#v:printError");
  },
};
luaGenerator.forBlock["G_printError"] = function (block) {
  const text = luaGenerator.valueToCode(block, "TEXT", Order.NONE) || '""';
  return [`printError(${text})`, Order.NONE];
};

// General: Read
Blockly.Blocks["G_read"] = {
  init: function () {
    this.appendValueInput("replaceChar")
      .appendField("replace Character");
    this.appendValueInput("history")
      .setCheck("String")
      .appendField("history");
    this.appendValueInput("completeFn")
      .setCheck("Object")
      .appendField("complete function");
    this.appendValueInput("default")
      .setCheck("Function")
      .appendField("default value");
    this.setOutput(true, "String");
    this.setColour(120);
    this.setTooltip("Reads a line of input from the terminal.");
    this.setHelpUrl("https://tweaked.cc/module/_G.html#v:read");
  },
};
luaGenerator.forBlock["G_read"] = function (block) {
  const replaceChar = luaGenerator.valueToCode(block, "replaceChar", Order.NONE) || "nil";
  const history = luaGenerator.valueToCode(block, "history", Order.NONE) || "nil";
  const completeFn = luaGenerator.valueToCode(block, "completeFn", Order.NONE) || "nil";
  const defaultValue = luaGenerator.valueToCode(block, "default", Order.NONE) || "nil";
  return [`read(${replaceChar}, ${history}, ${completeFn}, ${defaultValue})`, Order.NONE];
};

// General: Host
Blockly.Blocks["G__Host"] = {
  init: function () {
    this.appendDummyInput().appendField("_HOST");
    this.setOutput(true, "String");
    this.setColour(120);
    this.setTooltip("Returns the current host environment.");
    this.setHelpUrl("https://tweaked.cc/module/_G.html#v:_HOST");
  },
};
luaGenerator.forBlock["G__Host"] = function () {
  return ["_HOST", Order.NONE];
};

// General: CC Default Setting
Blockly.Blocks["G__CC_DEFAULT_SETTING"] = {
  init: function () {
    this.appendDummyInput().appendField("_CC_DEFAULT_SETTINGS");
    this.setOutput(true, "String");
    this.setColour(120);
    this.setTooltip("Returns the default settings for ComputerCraft.");
    this.setHelpUrl("https://tweaked.cc/module/_G.html#v:_CC_DEFAULT_SETTINGS");
  },
};
luaGenerator.forBlock["G__CC_DEFAULT_SETTING"] = function () {
  return ["_CC_DEFAULT_SETTINGS", Order.NONE];
};

//#endregion

//#region redstone

// Redstone: Get Sides
Blockly.Blocks["redstone_getSides"] = {
  init: function () {
    this.appendDummyInput().appendField("redstone.getSides");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Gets a list of all sides that can be used for redstone.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:getSides");
  },
};
luaGenerator.forBlock["redstone_getSides"] = function () {
  return ["redstone.getSides()", Order.NONE];
};
// Redstone: Set Output
Blockly.Blocks["redstone_setOutput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.setOutput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE")
      .appendField("state")
      .appendField(new Blockly.FieldDropdown([
        ["on", "true"],
        ["off", "false"]
      ]), "STATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets the redstone output on the specified side to on or off.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:setOutput");
  },
};
luaGenerator.forBlock["redstone_setOutput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  const state = block.getFieldValue("STATE");
  return `redstone.setOutput(${side}, ${state})\n`;
};
// Redstone: Get Output
Blockly.Blocks["redstone_getOutput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.getOutput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Gets the redstone output state on the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:getOutput");
  },
};
luaGenerator.forBlock["redstone_getOutput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  return [`redstone.getOutput(${side})`, Order.NONE];
};
// Redstone: Get Input
Blockly.Blocks["redstone_getInput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.getInput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Gets the redstone input state on the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:getInput");
  },
};
luaGenerator.forBlock["redstone_getInput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  return [`redstone.getInput(${side})`, Order.NONE];
};
// Redstone: Set Analog Output
Blockly.Blocks["redstone_setAnalogOutput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.setAnalogOutput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE")
      .appendField("strength")
      .appendField(new Blockly.FieldDropdown([
        ["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"],
        ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"],
        ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"], ["14", "14"], ["15", "15"]
      ]), "STRENGTH");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets the analog redstone output on the specified side with the given strength (0-15).");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:setAnalogOutput");
  },
};
luaGenerator.forBlock["redstone_setAnalogOutput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  const strength = block.getFieldValue("STRENGTH");
  return `redstone.setAnalogOutput(${side}, ${strength})\n`;
};

// Redstone: Get Analog Output
Blockly.Blocks["redstone_getAnalogOutput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.getAnalogOutput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Gets the analog redstone output on the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:getAnalogOutput");
  },
};
luaGenerator.forBlock["redstone_getAnalogOutput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  return [`redstone.getAnalogOutput(${side})`, Order.NONE];
};
// Redstone: Get Analog Input
Blockly.Blocks["redstone_getAnalogInput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.getAnalogInput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Gets the analog redstone input on the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:getAnalogInput");
  },
};
luaGenerator.forBlock["redstone_getAnalogInput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  return [`redstone.getAnalogInput(${side})`, Order.NONE];
};
// Redstone: Set Bundled Output
Blockly.Blocks["redstone_setBundledOutput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.setBundledOutput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE");
    this.appendValueInput("VALUE")
      .setCheck("Number")
      .appendField("value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets the bundled redstone output on the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:setBundledOutput");
  },
};
luaGenerator.forBlock["redstone_setBundledOutput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  const value = luaGenerator.valueToCode(block, "VALUE", Order.NONE) || "0";
  return `redstone.setBundledOutput(${side}, ${value})\n`;
};

// Redstone: Get Bundled Output
Blockly.Blocks["redstone_getBundledOutput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.getBundledOutput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Gets the bundled redstone output on the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:getBundledOutput");
  },
};
luaGenerator.forBlock["redstone_getBundledOutput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  return [`redstone.getBundledOutput(${side})`, Order.NONE];
};
// Redstone: Get Bundled Input
Blockly.Blocks["redstone_getBundledInput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.getBundledInput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Gets the bundled redstone input on the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:getBundledInput");
  },
};
luaGenerator.forBlock["redstone_getBundledInput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  return [`redstone.getBundledInput(${side})`, Order.NONE];
};

// Redstone: Test Bundled Input
Blockly.Blocks["redstone_testBundledInput"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("redstone.testBundledInput")
      .appendField("side")
      .appendField(new Blockly.FieldDropdown([
        ["top", '"top"'],
        ["bottom", '"bottom"'],
        ["left", '"left"'],
        ["right", '"right"'],
        ["front", '"front"'],
        ["back", '"back"']
      ]), "SIDE");
    this.appendValueInput("MASK")
      .setCheck("Number")
      .appendField("mask");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Tests if a specific bit is set in the bundled redstone input on the specified side.");
    this.setHelpUrl("https://tweaked.cc/module/redstone.html#v:testBundledInput");
  },
};
luaGenerator.forBlock["redstone_testBundledInput"] = function (block) {
  const side = block.getFieldValue("SIDE");
  const mask = luaGenerator.valueToCode(block, "MASK", Order.NONE) || "0";
  return [`redstone.testBundledInput(${side}, ${mask})`, Order.NONE];
};
//#endregion

// Color Selector Block
Blockly.Blocks["color_selector"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("color")
      .appendField(new Blockly.FieldDropdown([
        ["white", "white"],
        ["orange", "orange"],
        ["magenta", "magenta"],
        ["light blue", "light_blue"],
        ["yellow", "yellow"],
        ["lime", "lime"],
        ["pink", "pink"],
        ["gray", "gray"],
        ["light gray", "light_gray"],
        ["cyan", "cyan"],
        ["purple", "purple"],
        ["blue", "blue"],
        ["brown", "brown"],
        ["green", "green"],
        ["red", "red"],
        ["black", "black"],
      ]), "COLOR");
    this.setOutput(true, "Number");
    this.setColour(65); // Set the block color
    this.setTooltip("Select a color and return its corresponding number.");
    this.setHelpUrl(""); // Add a relevant help URL if needed
  },
};
luaGenerator.forBlock["color_selector"] = function (block) {
  const color = block.getFieldValue("COLOR");
  return [`colors.${color}`, Order.NONE];
};