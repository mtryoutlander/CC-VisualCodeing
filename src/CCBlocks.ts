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

//#region Redstone

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


//#region Printer
//Printer: Write
Blockly.Blocks["printer_write"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("printer.write text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("Writes text to the current page in the printer.");
    this.setHelpUrl("https://tweaked.cc/module/printer.html#v:write");
  },
};
luaGenerator.forBlock["printer_write"] = function (block) {
  const text = luaGenerator.valueToCode(block, "TEXT", Order.NONE) || '""';
  return `printer.write(${text})\n`;
};

// Printer: Get Cursor Position
Blockly.Blocks["printer_getCursorPos"] = {
  init: function () {
    this.appendDummyInput().appendField("printer.getCursorPos");
    this.setOutput(true, "Object");
    this.setColour(200);
    this.setTooltip("Gets the current cursor position in the printer.");
    this.setHelpUrl("https://tweaked.cc/module/printer.html#v:getCursorPos");
  },
};
luaGenerator.forBlock["printer_getCursorPos"] = function () {
  return ["printer.getCursorPos()", Order.NONE];
};

// Printer: Set Cursor Position
Blockly.Blocks["printer_setCursorPos"] = {
  init: function () {
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField("printer.setCursorPos X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("Sets the cursor position in the printer.");
    this.setHelpUrl("https://tweaked.cc/module/printer.html#v:setCursorPos");
  },
};
luaGenerator.forBlock["printer_setCursorPos"] = function (block) {
  const x = luaGenerator.valueToCode(block, "X", Order.NONE) || "0";
  const y = luaGenerator.valueToCode(block, "Y", Order.NONE) || "0";
  return `printer.setCursorPos(${x}, ${y})\n`;
};

// Printer: Get Page Size
Blockly.Blocks["printer_getPageSize"] = {
  init: function () {
    this.appendDummyInput().appendField("printer.getPageSize");
    this.setOutput(true, "Object");
    this.setColour(200);
    this.setTooltip("Gets the size of the current page in the printer.");
    this.setHelpUrl("https://tweaked.cc/module/printer.html#v:getPageSize");
  },
};
luaGenerator.forBlock["printer_getPageSize"] = function () {
  return ["printer.getPageSize()", Order.NONE];
};

// Printer: New Page
Blockly.Blocks["printer_newPage"] = {
  init: function () {
    this.appendDummyInput().appendField("printer.newPage");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("Starts a new page in the printer.");
    this.setHelpUrl("https://tweaked.cc/module/printer.html#v:newPage");
  },
};
luaGenerator.forBlock["printer_newPage"] = function () {
  return "printer.newPage()\n";
};

// Printer: End Page
Blockly.Blocks["printer_endPage"] = {
  init: function () {
    this.appendDummyInput().appendField("printer.endPage");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("Ends the current page in the printer.");
    this.setHelpUrl("https://tweaked.cc/module/printer.html#v:endPage");
  },
};
luaGenerator.forBlock["printer_endPage"] = function () {
  return "printer.endPage()\n";
};

// Printer: Set Page Title
Blockly.Blocks["printer_setPageTitle"] = {
  init: function () {
    this.appendValueInput("TITLE")
      .setCheck("String")
      .appendField("printer.setPageTitle title");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
    this.setTooltip("Sets the title of the current page in the printer.");
    this.setHelpUrl("https://tweaked.cc/module/printer.html#v:setPageTitle");
  },
};
luaGenerator.forBlock["printer_setPageTitle"] = function (block) {
  const title = luaGenerator.valueToCode(block, "TITLE", Order.NONE) || '""';
  return `printer.setPageTitle(${title})\n`;
};

// Printer: Get Ink Level
Blockly.Blocks["printer_getInkLevel"] = {
  init: function () {
    this.appendDummyInput().appendField("printer.getInkLevel");
    this.setOutput(true, "Number");
    this.setColour(200);
    this.setTooltip("Gets the current ink level in the printer.");
    this.setHelpUrl("https://tweaked.cc/module/printer.html#v:getInkLevel");
  },
};
luaGenerator.forBlock["printer_getInkLevel"] = function () {
  return ["printer.getInkLevel()", Order.NONE];
};

// Printer: Get Paper Level
Blockly.Blocks["printer_getPaperLevel"] = {
  init: function () {
    this.appendDummyInput().appendField("printer.getPaperLevel");
    this.setOutput(true, "Number");
    this.setColour(200);
    this.setTooltip("Gets the current paper level in the printer.");
    this.setHelpUrl("https://tweaked.cc/module/printer.html#v:getPaperLevel");
  },
};
luaGenerator.forBlock["printer_getPaperLevel"] = function () {
  return ["printer.getPaperLevel()", Order.NONE];
};

//#endregion


//#region Disk

// Disk: Is Present
Blockly.Blocks["disk_isPresent"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.isPresent drive");
    this.setOutput(true, "Boolean");
    this.setColour(290);
    this.setTooltip("Checks if a disk is present in the specified drive.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:isPresent");
  },
};
luaGenerator.forBlock["disk_isPresent"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return [`disk.isPresent(${driveName})`, Order.NONE];
};

// Disk: Get Label
Blockly.Blocks["disk_getLabel"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.getLabel drive");
    this.setOutput(true, "String");
    this.setColour(290);
    this.setTooltip("Gets the label of the disk in the specified drive.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:getLabel");
  },
};
luaGenerator.forBlock["disk_getLabel"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return [`disk.getLabel(${driveName})`, Order.NONE];
};

// Disk: Set Label
Blockly.Blocks["disk_setLabel"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.setLabel drive");
    this.appendValueInput("LABEL")
      .setCheck("String")
      .appendField("label");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Sets the label of the disk in the specified drive.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:setLabel");
  },
};
luaGenerator.forBlock["disk_setLabel"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  const label = luaGenerator.valueToCode(block, "LABEL", Order.NONE) || '""';
  return `disk.setLabel(${driveName}, ${label})\n`;
};

// Disk: Has Data
Blockly.Blocks["disk_hasData"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.hasData drive");
    this.setOutput(true, "Boolean");
    this.setColour(290);
    this.setTooltip("Checks if the disk in the specified drive contains data.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:hasData");
  },
};
luaGenerator.forBlock["disk_hasData"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return [`disk.hasData(${driveName})`, Order.NONE];
};
// Disk: Get Mount Path
Blockly.Blocks["disk_getMountPath"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.getMountPath drive");
    this.setOutput(true, "String");
    this.setColour(290);
    this.setTooltip("Gets the mount path of the disk in the specified drive.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:getMountPath");
  },
};
luaGenerator.forBlock["disk_getMountPath"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return [`disk.getMountPath(${driveName})`, Order.NONE];
};

// Disk: Has Audio
Blockly.Blocks["disk_hasAudio"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.hasAudio drive");
    this.setOutput(true, "Boolean");
    this.setColour(290);
    this.setTooltip("Checks if the disk in the specified drive contains audio.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:hasAudio");
  },
};
luaGenerator.forBlock["disk_hasAudio"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return [`disk.hasAudio(${driveName})`, Order.NONE];
};

// Disk: Get Audio Title
Blockly.Blocks["disk_getAudioTitle"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.getAudioTitle drive");
    this.setOutput(true, "String");
    this.setColour(290);
    this.setTooltip("Gets the title of the audio on the disk in the specified drive.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:getAudioTitle");
  },
};
luaGenerator.forBlock["disk_getAudioTitle"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return [`disk.getAudioTitle(${driveName})`, Order.NONE];
};

// Disk: Play Audio
Blockly.Blocks["disk_playAudio"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.playAudio drive");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Plays the audio on the disk in the specified drive.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:playAudio");
  },
};
luaGenerator.forBlock["disk_playAudio"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return `disk.playAudio(${driveName})\n`;
};

// Disk: Stop Audio
Blockly.Blocks["disk_stopAudio"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.stopAudio drive");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Stops the audio playing from the disk in the specified drive.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:stopAudio");
  },
};
luaGenerator.forBlock["disk_stopAudio"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return `disk.stopAudio(${driveName})\n`;
};

// Disk: Eject
Blockly.Blocks["disk_eject"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.eject drive");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Ejects the disk from the specified drive.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:eject");
  },
};
luaGenerator.forBlock["disk_eject"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return `disk.eject(${driveName})\n`;
};

// Disk: Get ID
Blockly.Blocks["disk_getID"] = {
  init: function () {
    this.appendValueInput("DRIVENAME")
      .setCheck("String")
      .appendField("disk.getID drive");
    this.setOutput(true, "String");
    this.setColour(290);
    this.setTooltip("Gets the ID of the disk in the specified drive.");
    this.setHelpUrl("https://tweaked.cc/module/disk.html#v:getID");
  },
};
luaGenerator.forBlock["disk_getID"] = function (block) {
  const driveName = luaGenerator.valueToCode(block, "DRIVENAME", Order.NONE) || '""';
  return [`disk.getID(${driveName})`, Order.NONE];
};

//#endregion

//#region Monitor
// Monitor: Set Text Scale
Blockly.Blocks["monitor_setTextScale"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("monitor.setTextScale scale")
      .appendField(new Blockly.FieldDropdown([
        ["0.5", "0.5"],
        ["1.0", "1.0"],
        ["1.5", "1.5"],
        ["2.0", "2.0"],
        ["2.5", "2.5"],
        ["3.0", "3.0"],
        ["3.5", "3.5"],
        ["4.0", "4.0"],
        ["4.5", "4.5"],
        ["5.0", "5.0"]
      ]), "SCALE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Sets the text scale of the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:setTextScale");
  },
};
luaGenerator.forBlock["monitor_setTextScale"] = function (block) {
  const scale = block.getFieldValue("SCALE");
  return `monitor.setTextScale(${scale})\n`;
};
// Monitor: Get Text Scale
Blockly.Blocks["monitor_getTextScale"] = {
  init: function () {
    this.appendDummyInput().appendField("monitor.getTextScale");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip("Gets the current text scale of the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:getTextScale");
  },
};
luaGenerator.forBlock["monitor_getTextScale"] = function () {
  return ["monitor.getTextScale()", Order.NONE];
};

// Monitor: Write
Blockly.Blocks["monitor_write"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("monitor.write text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Writes text to the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:write");
  },
};
luaGenerator.forBlock["monitor_write"] = function (block) {
  const text = luaGenerator.valueToCode(block, "TEXT", Order.NONE) || '""';
  return `monitor.write(${text})\n`;
};

// Monitor: Scroll
Blockly.Blocks["monitor_scroll"] = {
  init: function () {
    this.appendValueInput("LINES")
      .setCheck("Number")
      .appendField("monitor.scroll lines");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Scrolls the monitor by the specified number of lines.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:scroll");
  },
};
luaGenerator.forBlock["monitor_scroll"] = function (block) {
  const lines = luaGenerator.valueToCode(block, "LINES", Order.NONE) || "0";
  return `monitor.scroll(${lines})\n`;
};

// Monitor: Get Cursor Position
Blockly.Blocks["monitor_getCursorPos"] = {
  init: function () {
    this.appendDummyInput().appendField("monitor.getCursorPos");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Gets the current cursor position on the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:getCursorPos");
  },
};
luaGenerator.forBlock["monitor_getCursorPos"] = function () {
  return ["monitor.getCursorPos()", Order.NONE];
};

// Monitor: Set Cursor Position
Blockly.Blocks["monitor_setCursorPos"] = {
  init: function () {
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField("monitor.setCursorPos X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Sets the cursor position on the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:setCursorPos");
  },
};
luaGenerator.forBlock["monitor_setCursorPos"] = function (block) {
  const x = luaGenerator.valueToCode(block, "X", Order.NONE) || "1";
  const y = luaGenerator.valueToCode(block, "Y", Order.NONE) || "1";
  return `monitor.setCursorPos(${x}, ${y})\n`;
};

// Monitor: Get Cursor Blink
Blockly.Blocks["monitor_getCursorBlink"] = {
  init: function () {
    this.appendDummyInput().appendField("monitor.getCursorBlink");
    this.setOutput(true, "Boolean");
    this.setColour(290);
    this.setTooltip("Gets whether the cursor is blinking on the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:getCursorBlink");
  },
};
luaGenerator.forBlock["monitor_getCursorBlink"] = function () {
  return ["monitor.getCursorBlink()", Order.NONE];
};

// Monitor: Set Cursor Blink
Blockly.Blocks["monitor_setCursorBlink"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("monitor.setCursorBlink state")
      .appendField(new Blockly.FieldDropdown([
        ["true", "true"],
        ["false", "false"]
      ]), "STATE");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Sets whether the cursor blinks on the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:setCursorBlink");
  },
};
luaGenerator.forBlock["monitor_setCursorBlink"] = function (block) {
  const state = block.getFieldValue("STATE");
  return `monitor.setCursorBlink(${state})\n`;
};

// Monitor: Get Size
Blockly.Blocks["monitor_getSize"] = {
  init: function () {
    this.appendDummyInput().appendField("monitor.getSize");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Gets the size of the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:getSize");
  },
};
luaGenerator.forBlock["monitor_getSize"] = function () {
  return ["monitor.getSize()", Order.NONE];
};

// Monitor: Clear
Blockly.Blocks["monitor_clear"] = {
  init: function () {
    this.appendDummyInput().appendField("monitor.clear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Clears the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:clear");
  },
};
luaGenerator.forBlock["monitor_clear"] = function () {
  return "monitor.clear()\n";
};

// Monitor: Clear Line
Blockly.Blocks["monitor_clearLine"] = {
  init: function () {
    this.appendDummyInput().appendField("monitor.clearLine");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Clears the current line on the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:clearLine");
  },
};
luaGenerator.forBlock["monitor_clearLine"] = function () {
  return "monitor.clearLine()\n";
};

// Monitor: Get Text Colour
Blockly.Blocks["monitor_getTextColour"] = {
  init: function () {
    this.appendDummyInput().appendField("monitor.getTextColour");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip("Gets the current text colour of the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:getTextColour");
  },
};
luaGenerator.forBlock["monitor_getTextColour"] = function () {
  return ["monitor.getTextColour()", Order.NONE];
};

// Monitor: Set Text Colour
Blockly.Blocks["monitor_setTextColour"] = {
  init: function () {
    this.appendValueInput("COLOUR")
      .setCheck("Number")
      .appendField("monitor.setTextColour colour");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Sets the text colour of the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:setTextColour");
  },
};
luaGenerator.forBlock["monitor_setTextColour"] = function (block) {
  const colour = luaGenerator.valueToCode(block, "COLOUR", Order.NONE) || "1";
  return `monitor.setTextColour(${colour})\n`;
};

// Monitor: Get Background Colour
Blockly.Blocks["monitor_getBackgroundColour"] = {
  init: function () {
    this.appendDummyInput().appendField("monitor.getBackgroundColour");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip("Gets the current background colour of the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:getBackgroundColour");
  },
};
luaGenerator.forBlock["monitor_getBackgroundColour"] = function () {
  return ["monitor.getBackgroundColour()", Order.NONE];
};

// Monitor: Set Background Colour
Blockly.Blocks["monitor_setBackgroundColour"] = {
  init: function () {
    this.appendValueInput("COLOUR")
      .setCheck("Number")
      .appendField("monitor.setBackgroundColour colour");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Sets the background colour of the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:setBackgroundColour");
  },
};
luaGenerator.forBlock["monitor_setBackgroundColour"] = function (block) {
  const colour = luaGenerator.valueToCode(block, "COLOUR", Order.NONE) || "1";
  return `monitor.setBackgroundColour(${colour})\n`;
};

// Monitor: Is Colour
Blockly.Blocks["monitor_isColour"] = {
  init: function () {
    this.appendDummyInput().appendField("monitor.isColour");
    this.setOutput(true, "Boolean");
    this.setColour(290);
    this.setTooltip("Checks if the monitor supports colour.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:isColour");
  },
};
luaGenerator.forBlock["monitor_isColour"] = function () {
  return ["monitor.isColour()", Order.NONE];
};

// Monitor: Blit
Blockly.Blocks["monitor_blit"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("monitor.blit text");
    this.appendValueInput("TEXT_COLOUR")
      .setCheck("Number")
      .appendField("text colour");
    this.appendValueInput("BACKGROUND_COLOUR")
      .setCheck("Number")
      .appendField("background colour");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Writes text to the monitor with specific text and background colours.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:blit");
  },
};
luaGenerator.forBlock["monitor_blit"] = function (block) {
  const text = luaGenerator.valueToCode(block, "TEXT", Order.NONE) || '""';
  const textColour = luaGenerator.valueToCode(block, "TEXT_COLOUR", Order.NONE) || '""';
  const backgroundColour = luaGenerator.valueToCode(block, "BACKGROUND_COLOUR", Order.NONE) || '""';
  return `monitor.blit(${text}, ${textColour}, ${backgroundColour})\n`;
};

// Monitor: Set Palette Colour
Blockly.Blocks["monitor_setPaletteColour"] = {
  init: function () {
    this.appendValueInput("COLOUR")
      .setCheck("Number")
      .appendField("monitor.setPaletteColour colour");
    this.appendValueInput("RGB")
      .setCheck("Object")
      .appendField("RGB");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip("Sets the palette colour of the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:setPaletteColour");
  },
};
luaGenerator.forBlock["monitor_setPaletteColour"] = function (block) {
  const colour = luaGenerator.valueToCode(block, "COLOUR", Order.NONE) || "1";
  const rgb = luaGenerator.valueToCode(block, "RGB", Order.NONE) || "{}";
  return `monitor.setPaletteColour(${colour}, ${rgb})\n`;
};

// Monitor: Get Palette Colour
Blockly.Blocks["monitor_getPaletteColour"] = {
  init: function () {
    this.appendValueInput("COLOUR")
      .setCheck("Number")
      .appendField("monitor.getPaletteColour colour");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Gets the palette colour of the monitor.");
    this.setHelpUrl("https://tweaked.cc/module/monitor.html#v:getPaletteColour");
  },
};
luaGenerator.forBlock["monitor_getPaletteColour"] = function (block) {
  const colour = luaGenerator.valueToCode(block, "COLOUR", Order.NONE) || "1";
  return [`monitor.getPaletteColour(${colour})`, Order.NONE];
};

//#endregion

//#region Color

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

// Color: Combine
Blockly.Blocks["color_combine"] = {
  init: function () {
    this.appendValueInput("COLOR1")
      .setCheck("Number")
      .appendField("color.combine color1");
    this.appendValueInput("COLOR2")
      .setCheck("Number")
      .appendField("color2");
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip("Combines two colors into a single color.");
    this.setHelpUrl("https://tweaked.cc/module/colors.html#v:combine");
  },
};
luaGenerator.forBlock["color_combine"] = function (block) {
  const color1 = luaGenerator.valueToCode(block, "COLOR1", Order.NONE) || "0";
  const color2 = luaGenerator.valueToCode(block, "COLOR2", Order.NONE) || "0";
  return [`colors.combine(${color1}, ${color2})`, Order.NONE];
};

// Color: Subtract
Blockly.Blocks["color_subtract"] = {
  init: function () {
    this.appendValueInput("COLOR1")
      .setCheck("Number")
      .appendField("color.subtract color1");
    this.appendValueInput("COLOR2")
      .setCheck("Number")
      .appendField("color2");
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip("Subtracts one color from another.");
    this.setHelpUrl("https://tweaked.cc/module/colors.html#v:subtract");
  },
};
luaGenerator.forBlock["color_subtract"] = function (block) {
  const color1 = luaGenerator.valueToCode(block, "COLOR1", Order.NONE) || "0";
  const color2 = luaGenerator.valueToCode(block, "COLOR2", Order.NONE) || "0";
  return [`colors.subtract(${color1}, ${color2})`, Order.NONE];
};

// Color: Test
Blockly.Blocks["color_test"] = {
  init: function () {
    this.appendValueInput("COLOR")
      .setCheck("Number")
      .appendField("color.test color");
    this.appendValueInput("MASK")
      .setCheck("Number")
      .appendField("mask");
    this.setOutput(true, "Boolean");
    this.setColour(65);
    this.setTooltip("Tests if a specific bit is set in a color.");
    this.setHelpUrl("https://tweaked.cc/module/colors.html#v:test");
  },
};
luaGenerator.forBlock["color_test"] = function (block) {
  const color = luaGenerator.valueToCode(block, "COLOR", Order.NONE) || "0";
  const mask = luaGenerator.valueToCode(block, "MASK", Order.NONE) || "0";
  return [`colors.test(${color}, ${mask})`, Order.NONE];
};

// Color: Pack RGB
Blockly.Blocks["color_packRGB"] = {
  init: function () {
    this.appendValueInput("R")
      .setCheck("Number")
      .appendField("color.packRGB R");
    this.appendValueInput("G")
      .setCheck("Number")
      .appendField("G");
    this.appendValueInput("B")
      .setCheck("Number")
      .appendField("B");
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip("Packs RGB values into a single color.");
    this.setHelpUrl("https://tweaked.cc/module/colors.html#v:packRGB");
  },
};
luaGenerator.forBlock["color_packRGB"] = function (block) {
  const r = luaGenerator.valueToCode(block, "R", Order.NONE) || "0";
  const g = luaGenerator.valueToCode(block, "G", Order.NONE) || "0";
  const b = luaGenerator.valueToCode(block, "B", Order.NONE) || "0";
  return [`colors.packRGB(${r}, ${g}, ${b})`, Order.NONE];
};

// Color: Unpack RGB
Blockly.Blocks["color_unpackRGB"] = {
  init: function () {
    this.appendValueInput("COLOR")
      .setCheck("Number")
      .appendField("color.unpackRGB color");
    this.setOutput(true, "Object");
    this.setColour(65);
    this.setTooltip("Unpacks a color into its RGB components.");
    this.setHelpUrl("https://tweaked.cc/module/colors.html#v:unpackRGB");
  },
};
luaGenerator.forBlock["color_unpackRGB"] = function (block) {
  const color = luaGenerator.valueToCode(block, "COLOR", Order.NONE) || "0";
  return [`colors.unpackRGB(${color})`, Order.NONE];
};

// Color: To Blit
Blockly.Blocks["color_toBlit"] = {
  init: function () {
    this.appendValueInput("COLOR")
      .setCheck("Number")
      .appendField("color.toBlit color");
    this.setOutput(true, "String");
    this.setColour(65);
    this.setTooltip("Converts a color to a blit string.");
    this.setHelpUrl("https://tweaked.cc/module/colors.html#v:toBlit");
  },
};
luaGenerator.forBlock["color_toBlit"] = function (block) {
  const color = luaGenerator.valueToCode(block, "COLOR", Order.NONE) || "0";
  return [`colors.toBlit(${color})`, Order.NONE];
};

// Color: From Blit
Blockly.Blocks["color_fromBlit"] = {
  init: function () {
    this.appendValueInput("BLIT")
      .setCheck("String")
      .appendField("color.fromBlit blit");
    this.setOutput(true, "Number");
    this.setColour(65);
    this.setTooltip("Converts a blit string to a color.");
    this.setHelpUrl("https://tweaked.cc/module/colors.html#v:fromBlit");
  },
};
luaGenerator.forBlock["color_fromBlit"] = function (block) {
  const blit = luaGenerator.valueToCode(block, "BLIT", Order.NONE) || '""';
  return [`colors.fromBlit(${blit})`, Order.NONE];
};

//#endregion


//#region Speaker

// Speaker: Instrument Selector
Blockly.Blocks["speaker_instrument"] = {
  init: function () {
    this.appendDummyInput()
      .appendField("instrument")
      .appendField(new Blockly.FieldDropdown([
        ["harp", "harp"],
        ["basedrum", "basedrum"],
        ["snare", "snare"],
        ["hat", "hat"],
        ["bass", "bass"],
        ["flute", "flute"],
        ["bell", "bell"],
        ["guitar", "guitar"],
        ["chime", "chime"],
        ["xylophone", "xylophone"],
        ["iron_xylophone", "iron_xylophone"],
        ["cow_bell", "cow_bell"],
        ["didgeridoo", "didgeridoo"],
        ["bit", "bit"],
        ["banjo", "banjo"],
        ["pling", "pling"]
      ]), "INSTRUMENT");
    this.setOutput(true, "String");
    this.setColour(120);
    this.setTooltip("Select an instrument and return its corresponding string.");
    this.setHelpUrl("https://tweaked.cc/peripheral/speaker.html#v:playNote"); // Add a relevant help URL if needed
  },
};
luaGenerator.forBlock["speaker_instrument"] = function (block) {
  const instrument = block.getFieldValue("INSTRUMENT");
  return [`"${instrument}"`, Order.NONE];
};

// Speaker: Play Note
Blockly.Blocks["speaker_playNote"] = {
  init: function () {
    this.appendValueInput("INSTRUMENT")
      .setCheck("String")
      .appendField("speaker.playNote instrument");
    this.appendValueInput("VOLUME")
      .setCheck("Number")
      .appendField("volume");
    this.appendValueInput("PITCH")
      .setCheck("Number")
      .appendField("pitch");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Plays a note on the speaker with the specified instrument, volume, and pitch.");
    this.setHelpUrl("https://tweaked.cc/module/speaker.html#v:playNote");
  },
};
luaGenerator.forBlock["speaker_playNote"] = function (block) {
  const instrument = luaGenerator.valueToCode(block, "INSTRUMENT", Order.NONE) || '""';
  const volume = luaGenerator.valueToCode(block, "VOLUME", Order.NONE) || "1";
  const pitch = luaGenerator.valueToCode(block, "PITCH", Order.NONE) || "1";
  return `speaker.playNote(${instrument}, ${volume}, ${pitch})\n`;
};

// Speaker: Play Sound
Blockly.Blocks["speaker_playSound"] = {
  init: function () {
    this.appendValueInput("SOUND")
      .setCheck("String")
      .appendField("speaker.playSound sound");
    this.appendValueInput("VOLUME")
      .setCheck("Number")
      .appendField("volume");
    this.appendValueInput("PITCH")
      .setCheck("Number")
      .appendField("pitch");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Plays a sound on the speaker with the specified sound, volume, and pitch.");
    this.setHelpUrl("https://tweaked.cc/module/speaker.html#v:playSound");
  },
};
luaGenerator.forBlock["speaker_playSound"] = function (block) {
  const sound = luaGenerator.valueToCode(block, "SOUND", Order.NONE) || '""';
  const volume = luaGenerator.valueToCode(block, "VOLUME", Order.NONE) || "1";
  const pitch = luaGenerator.valueToCode(block, "PITCH", Order.NONE) || "1";
  return `speaker.playSound(${sound}, ${volume}, ${pitch})\n`;
};

// Speaker: Play Audio
Blockly.Blocks["speaker_playAudio"] = {
  init: function () {
    this.appendValueInput("AUDIO")
      .setCheck("Object")
      .appendField("speaker.playAudio audio");
    this.appendValueInput("VOLUME")
      .setCheck("Number")
      .appendField("volume");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Plays an audio file on the speaker with the specified volume.");
    this.setHelpUrl("https://tweaked.cc/module/speaker.html#v:playAudio");
  },
};
luaGenerator.forBlock["speaker_playAudio"] = function (block) {
  const audio = luaGenerator.valueToCode(block, "AUDIO", Order.NONE) || "{}";
  const volume = luaGenerator.valueToCode(block, "VOLUME", Order.NONE) || "1";
  return `speaker.playAudio(${audio}, ${volume})\n`;
};

// Speaker: Stop
Blockly.Blocks["speaker_stop"] = {
  init: function () {
    this.appendDummyInput().appendField("speaker.stop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("Stops all sounds currently playing on the speaker.");
    this.setHelpUrl("https://tweaked.cc/module/speaker.html#v:stop");
  },
};
luaGenerator.forBlock["speaker_stop"] = function () {
  return "speaker.stop()\n";
};

//#endregion


//#region Computer

// Computer: Turn On
Blockly.Blocks["computer_turnOn"] = {
  init: function () {
    this.appendDummyInput().appendField("computer.turnOn");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Turns on the computer if it is off.");
    this.setHelpUrl("https://tweaked.cc/module/os.html#v:turnOn");
  },
};
luaGenerator.forBlock["computer_turnOn"] = function () {
  return "os.turnOn()\n";
};

// Computer: Shutdown
Blockly.Blocks["computer_shutdown"] = {
  init: function () {
    this.appendDummyInput().appendField("computer.shutdown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Shuts down the computer.");
    this.setHelpUrl("https://tweaked.cc/module/os.html#v:shutdown");
  },
};
luaGenerator.forBlock["computer_shutdown"] = function () {
  return "os.shutdown()\n";
};

// Computer: Reboot
Blockly.Blocks["computer_reboot"] = {
  init: function () {
    this.appendDummyInput().appendField("computer.reboot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Reboots the computer.");
    this.setHelpUrl("https://tweaked.cc/module/os.html#v:reboot");
  },
};
luaGenerator.forBlock["computer_reboot"] = function () {
  return "os.reboot()\n";
};

// Computer: Get ID
Blockly.Blocks["computer_getID"] = {
  init: function () {
    this.appendDummyInput().appendField("computer.getID");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Gets the ID of the computer.");
    this.setHelpUrl("https://tweaked.cc/module/os.html#v:getComputerID");
  },
};
luaGenerator.forBlock["computer_getID"] = function () {
  return ["os.getComputerID()", Order.NONE];
};

// Computer: Is On
Blockly.Blocks["computer_isOn"] = {
  init: function () {
    this.appendDummyInput().appendField("computer.isOn");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Checks if the computer is currently on.");
    this.setHelpUrl("https://tweaked.cc/module/os.html#v:isOn");
  },
};
luaGenerator.forBlock["computer_isOn"] = function () {
  return ["os.isOn()", Order.NONE];
};

// Computer: Get Label
Blockly.Blocks["computer_getLabel"] = {
  init: function () {
    this.appendDummyInput().appendField("computer.getLabel");
    this.setOutput(true, "String");
    this.setColour(230);
    this.setTooltip("Gets the label of the computer.");
    this.setHelpUrl("https://tweaked.cc/module/os.html#v:getComputerLabel");
  },
};
luaGenerator.forBlock["computer_getLabel"] = function () {
  return ["os.getComputerLabel()", Order.NONE];
};

//#endregion


//#region Vector

// Vector: New
Blockly.Blocks["vector_new"] = {
  init: function () {
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField("create vector with x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("y");
    this.appendValueInput("Z")
      .setCheck("Number")
      .appendField("z");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Creates a new vector and returns it as an object.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:new");
  },
};
luaGenerator.forBlock["vector_new"] = function (block) {
  const x = luaGenerator.valueToCode(block, "X", Order.NONE) || "0";
  const y = luaGenerator.valueToCode(block, "Y", Order.NONE) || "0";
  const z = luaGenerator.valueToCode(block, "Z", Order.NONE) || "0";
  return [`vector.new(${x}, ${y}, ${z})`, Order.NONE];
};

// Vector: Add
Blockly.Blocks["vector_add"] = {
  init: function () {
    this.appendValueInput("VECTOR1")
      .setCheck("Object")
      .appendField("add vector");
    this.appendValueInput("VECTOR2")
      .setCheck("Object")
      .appendField("to vector");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Adds two vectors and returns the result.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:add");
  },
};
luaGenerator.forBlock["vector_add"] = function (block) {
  const vector1 = luaGenerator.valueToCode(block, "VECTOR1", Order.NONE) || "nil";
  const vector2 = luaGenerator.valueToCode(block, "VECTOR2", Order.NONE) || "nil";
  return [`${vector1} + ${vector2}`, Order.NONE];
};

// Vector: Subtract
Blockly.Blocks["vector_sub"] = {
  init: function () {
    this.appendValueInput("VECTOR1")
      .setCheck("Object")
      .appendField("subtract vector");
    this.appendValueInput("VECTOR2")
      .setCheck("Object")
      .appendField("from vector");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Subtracts one vector from another and returns the result.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:sub");
  },
};
luaGenerator.forBlock["vector_sub"] = function (block) {
  const vector1 = luaGenerator.valueToCode(block, "VECTOR1", Order.NONE) || "nil";
  const vector2 = luaGenerator.valueToCode(block, "VECTOR2", Order.NONE) || "nil";
  return [`${vector1} - ${vector2}`, Order.NONE];
};

// Vector: Multiply
Blockly.Blocks["vector_mul"] = {
  init: function () {
    this.appendValueInput("VECTOR")
      .setCheck("Object")
      .appendField("multiply vector");
    this.appendValueInput("SCALAR")
      .setCheck("Number")
      .appendField("by scalar");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Multiplies a vector by a scalar and returns the result.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:mul");
  },
};
luaGenerator.forBlock["vector_mul"] = function (block) {
  const vector = luaGenerator.valueToCode(block, "VECTOR", Order.NONE) || "nil";
  const scalar = luaGenerator.valueToCode(block, "SCALAR", Order.NONE) || "1";
  return [`${vector} * ${scalar}`, Order.NONE];
};

// Vector: Divide
Blockly.Blocks["vector_div"] = {
  init: function () {
    this.appendValueInput("VECTOR")
      .setCheck("Object")
      .appendField("divide vector");
    this.appendValueInput("SCALAR")
      .setCheck("Number")
      .appendField("by scalar");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Divides a vector by a scalar and returns the result.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:div");
  },
};
luaGenerator.forBlock["vector_div"] = function (block) {
  const vector = luaGenerator.valueToCode(block, "VECTOR", Order.NONE) || "nil";
  const scalar = luaGenerator.valueToCode(block, "SCALAR", Order.NONE) || "1";
  return [`${vector} / ${scalar}`, Order.NONE];
};

// Vector: Negate
Blockly.Blocks["vector_unm"] = {
  init: function () {
    this.appendValueInput("VECTOR")
      .setCheck("Object")
      .appendField("negate vector");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Negates a vector and returns the result.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:unm");
  },
};
luaGenerator.forBlock["vector_unm"] = function (block) {
  const vector = luaGenerator.valueToCode(block, "VECTOR", Order.NONE) || "nil";
  return [`-${vector}`, Order.NONE];
};

// Vector: Dot Product
Blockly.Blocks["vector_dot"] = {
  init: function () {
    this.appendValueInput("VECTOR1")
      .setCheck("Object")
      .appendField("dot product of vector");
    this.appendValueInput("VECTOR2")
      .setCheck("Object")
      .appendField("and vector");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip("Calculates the dot product of two vectors.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:dot");
  },
};
luaGenerator.forBlock["vector_dot"] = function (block) {
  const vector1 = luaGenerator.valueToCode(block, "VECTOR1", Order.NONE) || "nil";
  const vector2 = luaGenerator.valueToCode(block, "VECTOR2", Order.NONE) || "nil";
  return [`${vector1}:dot(${vector2})`, Order.NONE];
};

// Vector: Cross Product
Blockly.Blocks["vector_cross"] = {
  init: function () {
    this.appendValueInput("VECTOR1")
      .setCheck("Object")
      .appendField("cross product of vector");
    this.appendValueInput("VECTOR2")
      .setCheck("Object")
      .appendField("and vector");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Calculates the cross product of two vectors.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:cross");
  },
};
luaGenerator.forBlock["vector_cross"] = function (block) {
  const vector1 = luaGenerator.valueToCode(block, "VECTOR1", Order.NONE) || "nil";
  const vector2 = luaGenerator.valueToCode(block, "VECTOR2", Order.NONE) || "nil";
  return [`${vector1}:cross(${vector2})`, Order.NONE];
};

// Vector: Length
Blockly.Blocks["vector_length"] = {
  init: function () {
    this.appendValueInput("VECTOR")
      .setCheck("Object")
      .appendField("length of vector");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip("Calculates the length of a vector.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:length");
  },
};
luaGenerator.forBlock["vector_length"] = function (block) {
  const vector = luaGenerator.valueToCode(block, "VECTOR", Order.NONE) || "nil";
  return [`${vector}:length()`, Order.NONE];
};

// Vector: Normalize
Blockly.Blocks["vector_normalise"] = {
  init: function () {
    this.appendValueInput("VECTOR")
      .setCheck("Object")
      .appendField("normalize vector");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Normalizes a vector and returns the result.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:normalize");
  },
};
luaGenerator.forBlock["vector_normalise"] = function (block) {
  const vector = luaGenerator.valueToCode(block, "VECTOR", Order.NONE) || "nil";
  return [`${vector}:normalize()`, Order.NONE];
};

// Vector: Round
Blockly.Blocks["vector_round"] = {
  init: function () {
    this.appendValueInput("VECTOR")
      .setCheck("Object")
      .appendField("round vector");
    this.setOutput(true, "Object");
    this.setColour(290);
    this.setTooltip("Rounds the components of a vector and returns the result.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:round");
  },
};
luaGenerator.forBlock["vector_round"] = function (block) {
  const vector = luaGenerator.valueToCode(block, "VECTOR", Order.NONE) || "nil";
  return [`${vector}:round()`, Order.NONE];
};

// Vector: To String
Blockly.Blocks["vector_tostring"] = {
  init: function () {
    this.appendValueInput("VECTOR")
      .setCheck("Object")
      .appendField("convert vector to string");
    this.setOutput(true, "String");
    this.setColour(290);
    this.setTooltip("Converts a vector to a string representation.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:tostring");
  },
};
luaGenerator.forBlock["vector_tostring"] = function (block) {
  const vector = luaGenerator.valueToCode(block, "VECTOR", Order.NONE) || "nil";
  return [`${vector}:tostring()`, Order.NONE];
};

// Vector: Equals
Blockly.Blocks["vector_equals"] = {
  init: function () {
    this.appendValueInput("VECTOR1")
      .setCheck("Object")
      .appendField("check if vector");
    this.appendValueInput("VECTOR2")
      .setCheck("Object")
      .appendField("equals vector");
    this.setOutput(true, "Boolean");
    this.setColour(290);
    this.setTooltip("Checks if two vectors are equal.");
    this.setHelpUrl("https://tweaked.cc/module/vector.html#v:equals");
  },
};
luaGenerator.forBlock["vector_equals"] = function (block) {
  const vector1 = luaGenerator.valueToCode(block, "VECTOR1", Order.NONE) || "nil";
  const vector2 = luaGenerator.valueToCode(block, "VECTOR2", Order.NONE) || "nil";
  return [`${vector1} == ${vector2}`, Order.NONE];
};

//#endregion

//#region Window

// Window: Create
Blockly.Blocks["Window_create"] = {
  init: function () {
    this.appendValueInput("PARENT")
      .setCheck("Object")
      .appendField("window.create parent");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField("x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("y");
    this.appendValueInput("WIDTH")
      .setCheck("Number")
      .appendField("width");
    this.appendValueInput("HEIGHT")
      .setCheck("Number")
      .appendField("height");
    this.appendValueInput("VISIBLE")
      .setCheck("Boolean")
      .appendField("visible");
    this.setOutput(true, "Object");
    this.setColour(230);
    this.setTooltip("Creates a new window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:create");
  },
};
luaGenerator.forBlock["Window_create"] = function (block) {
  const parent = luaGenerator.valueToCode(block, "PARENT", Order.NONE) || "nil";
  const x = luaGenerator.valueToCode(block, "X", Order.NONE) || "1";
  const y = luaGenerator.valueToCode(block, "Y", Order.NONE) || "1";
  const width = luaGenerator.valueToCode(block, "WIDTH", Order.NONE) || "1";
  const height = luaGenerator.valueToCode(block, "HEIGHT", Order.NONE) || "1";
  const visible = luaGenerator.valueToCode(block, "VISIBLE", Order.NONE) || "true";
  return [`window.create(${parent}, ${x}, ${y}, ${width}, ${height}, ${visible})`, Order.NONE];
};

// Window: Write
Blockly.Blocks["Window_write"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField(".write text");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Writes text to the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:write");
  },
};
luaGenerator.forBlock["Window_write"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const text = luaGenerator.valueToCode(block, "TEXT", Order.NONE) || '""';
  return `${window}.write(${text})\n`;
};

// Window: Blit
Blockly.Blocks["Window_blit"] = {
  init: function () {
    this.appendValueInput("TEXT")
      .setCheck("String")
      .appendField("window.blit text");
    this.appendValueInput("TEXT_COLOUR")
      .setCheck("String")
      .appendField("text colour");
    this.appendValueInput("BACKGROUND_COLOUR")
      .setCheck("String")
      .appendField("background colour");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Writes text to the window with specific text and background colours.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:blit");
  },
};
luaGenerator.forBlock["Window_blit"] = function (block) {
  const text = luaGenerator.valueToCode(block, "TEXT", Order.NONE) || '""';
  const textColour = luaGenerator.valueToCode(block, "TEXT_COLOUR", Order.NONE) || '""';
  const backgroundColour = luaGenerator.valueToCode(block, "BACKGROUND_COLOUR", Order.NONE) || '""';
  return `window.blit(${text}, ${textColour}, ${backgroundColour})\n`;
};

// Window: Clear
Blockly.Blocks["Window_clear"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".clear");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Clears the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:clear");
  },
};
luaGenerator.forBlock["Window_clear"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return `${window}.clear()\n`;
};

// Window: Clear Line
Blockly.Blocks["Window_clearLine"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".clearLine");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Clears the current line in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:clearLine");
  },
};
luaGenerator.forBlock["Window_clearLine"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return `${window}.clearLine()\n`;
};

// Window: Get Cursor Position
Blockly.Blocks["Window_getCursorPos"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".getCursorPos");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Gets the current cursor position in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:getCursorPos");
  },
};
luaGenerator.forBlock["Window_getCursorPos"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return [`${window}.getCursorPos()`, Order.NONE];
};

// Window: Set Cursor Position
Blockly.Blocks["Window_setCursorPos"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField(".setCursorPos X");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets the cursor position in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:setCursorPos");
  },
};
luaGenerator.forBlock["Window_setCursorPos"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const x = luaGenerator.valueToCode(block, "X", Order.NONE) || "1";
  const y = luaGenerator.valueToCode(block, "Y", Order.NONE) || "1";
  return `${window}.setCursorPos(${x}, ${y})\n`;
};

// Window: Scroll
Blockly.Blocks["Window_scroll"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("LINES")
      .setCheck("Number")
      .appendField(".scroll lines");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Scrolls the specified window by the given number of lines.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:scroll");
  },
};
luaGenerator.forBlock["Window_scroll"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const lines = luaGenerator.valueToCode(block, "LINES", Order.NONE) || "0";
  return `${window}.scroll(${lines})\n`;
};

// Window: Set Visible
Blockly.Blocks["Window_setVisible"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("VISIBLE")
      .setCheck("Boolean")
      .appendField(".setVisible visible");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets whether the specified window is visible.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:setVisible");
  },
};
luaGenerator.forBlock["Window_setVisible"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const visible = luaGenerator.valueToCode(block, "VISIBLE", Order.NONE) || "true";
  return `${window}.setVisible(${visible})\n`;
};

// Window: Redraw
Blockly.Blocks["Window_redraw"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".redraw");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Redraws the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:redraw");
  },
};
luaGenerator.forBlock["Window_redraw"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return `${window}.redraw()\n`;
};

// Window: Get Position
Blockly.Blocks["Window_getPosition"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".getPosition");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Gets the position of the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:getPosition");
  },
};
luaGenerator.forBlock["Window_getPosition"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return [`${window}.getPosition()`, Order.NONE];
};
// Window: Reposition
Blockly.Blocks["Window_reposition"] = {
  init: function () {
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField("window.reposition x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("y");
    this.appendValueInput("WIDTH")
      .setCheck("Number")
      .appendField("width");
    this.appendValueInput("HEIGHT")
      .setCheck("Number")
      .appendField("height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Repositions the window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:reposition");
  },
};
luaGenerator.forBlock["Window_reposition"] = function (block) {
  const x = luaGenerator.valueToCode(block, "X", Order.NONE) || "1";
  const y = luaGenerator.valueToCode(block, "Y", Order.NONE) || "1";
  const width = luaGenerator.valueToCode(block, "WIDTH", Order.NONE) || "1";
  const height = luaGenerator.valueToCode(block, "HEIGHT", Order.NONE) || "1";
  return `window.reposition(${x}, ${y}, ${width}, ${height})\n`;
};

// Window: Set Cursor Blink
Blockly.Blocks["Window_setCursorBlink"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("STATE")
      .setCheck("Boolean")
      .appendField(".setCursorBlink state");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets whether the cursor blinks in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:setCursorBlink");
  },
};
luaGenerator.forBlock["Window_setCursorBlink"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const state = luaGenerator.valueToCode(block, "STATE", Order.NONE) || "true";
  return `${window}.setCursorBlink(${state})\n`;
};

// Window: Get Cursor Blink
Blockly.Blocks["Window_getCursorBlink"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".getCursorBlink");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Gets whether the cursor is blinking in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:getCursorBlink");
  },
};
luaGenerator.forBlock["Window_getCursorBlink"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return [`${window}.getCursorBlink()`, Order.NONE];
};

// Window: Is Color
Blockly.Blocks["Window_isColor"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".isColor");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Checks if the specified window supports color.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:isColor");
  },
};
luaGenerator.forBlock["Window_isColor"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return [`${window}.isColor()`, Order.NONE];
};
// Window: Set Text Color
Blockly.Blocks["Window_setTextColor"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("COLOR")
      .setCheck("Number")
      .appendField(".setTextColor color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets the text color in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:setTextColor");
  },
};
luaGenerator.forBlock["Window_setTextColor"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const color = luaGenerator.valueToCode(block, "COLOR", Order.NONE) || "1";
  return `${window}.setTextColor(${color})\n`;
};

// Window: Set Palette Colour
Blockly.Blocks["Window_setPaletteColour"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("COLOR")
      .setCheck("Number")
      .appendField(".setPaletteColour color");
    this.appendValueInput("RGB")
      .setCheck("Object")
      .appendField("RGB");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets the palette color for the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:setPaletteColour");
  },
};
luaGenerator.forBlock["Window_setPaletteColour"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const color = luaGenerator.valueToCode(block, "COLOR", Order.NONE) || "1";
  const rgb = luaGenerator.valueToCode(block, "RGB", Order.NONE) || "{}";
  return `${window}.setPaletteColour(${color}, ${rgb})\n`;
};

// Window: Set Background Colour
Blockly.Blocks["Window_setBackgroundColour"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("COLOR")
      .setCheck("Number")
      .appendField(".setBackgroundColour color");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets the background color in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:setBackgroundColour");
  },
};
luaGenerator.forBlock["Window_setBackgroundColour"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const color = luaGenerator.valueToCode(block, "COLOR", Order.NONE) || "1";
  return `${window}.setBackgroundColour(${color})\n`;
};

// Window: Get Size
Blockly.Blocks["Window_getSize"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".getSize");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Gets the size of the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:getSize");
  },
};
luaGenerator.forBlock["Window_getSize"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return [`${window}.getSize()`, Order.NONE];
};

// Window: Scroll
Blockly.Blocks["Window_scroll"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("LINES")
      .setCheck("Number")
      .appendField(".scroll lines");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Scrolls the specified window by the given number of lines.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:scroll");
  },
};
luaGenerator.forBlock["Window_scroll"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const lines = luaGenerator.valueToCode(block, "LINES", Order.NONE) || "0";
  return `${window}.scroll(${lines})\n`;
};

// Window: Get Text Color
Blockly.Blocks["Window_getTextColor"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".getTextColor");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Gets the current text color in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:getTextColor");
  },
};
luaGenerator.forBlock["Window_getTextColor"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return [`${window}.getTextColor()`, Order.NONE];
};

// Window: Get Background Colour
Blockly.Blocks["Window_getBackgroundColour"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".getBackgroundColour");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("Gets the current background color in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:getBackgroundColour");
  },
};
luaGenerator.forBlock["Window_getBackgroundColour"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return [`${window}.getBackgroundColour()`, Order.NONE];
};

// Window: Set Visible
Blockly.Blocks["Window_setVisible"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("VISIBLE")
      .setCheck("Boolean")
      .appendField(".setVisible visible");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Sets whether the specified window is visible.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:setVisible");
  },
};
luaGenerator.forBlock["Window_setVisible"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const visible = luaGenerator.valueToCode(block, "VISIBLE", Order.NONE) || "true";
  return `${window}.setVisible(${visible})\n`;
};

// Window: Is Visible
Blockly.Blocks["Window_isVisible"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".isVisible");
    this.setOutput(true, "Boolean");
    this.setColour(230);
    this.setTooltip("Checks if the specified window is visible.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:isVisible");
  },
};
luaGenerator.forBlock["Window_isVisible"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return [`${window}.isVisible()`, Order.NONE];
};

// Window: Redraw
Blockly.Blocks["Window_redraw"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".redraw");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Redraws the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:redraw");
  },
};
luaGenerator.forBlock["Window_redraw"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return `${window}.redraw()\n`;
};

// Window: Restore Cursor
Blockly.Blocks["Window_restoreCursor"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".restoreCursor");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Restores the cursor to its previous position in the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:restoreCursor");
  },
};
luaGenerator.forBlock["Window_restoreCursor"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return `${window}.restoreCursor()\n`;
};

// Window: Get Position
Blockly.Blocks["Window_getPosition"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendDummyInput().appendField(".getPosition");
    this.setOutput(true, "Array");
    this.setColour(230);
    this.setTooltip("Gets the position of the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:getPosition");
  },
};
luaGenerator.forBlock["Window_getPosition"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  return [`${window}.getPosition()`, Order.NONE];
};

// Window: Reposition
Blockly.Blocks["Window_reposition"] = {
  init: function () {
    this.appendValueInput("WINDOW")
      .setCheck("Object")
      .appendField("window");
    this.appendValueInput("X")
      .setCheck("Number")
      .appendField(".reposition x");
    this.appendValueInput("Y")
      .setCheck("Number")
      .appendField("y");
    this.appendValueInput("WIDTH")
      .setCheck("Number")
      .appendField("width");
    this.appendValueInput("HEIGHT")
      .setCheck("Number")
      .appendField("height");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip("Repositions the specified window.");
    this.setHelpUrl("https://tweaked.cc/module/window.html#v:reposition");
  },
};
luaGenerator.forBlock["Window_reposition"] = function (block) {
  const window = luaGenerator.valueToCode(block, "WINDOW", Order.NONE) || "window";
  const x = luaGenerator.valueToCode(block, "X", Order.NONE) || "1";
  const y = luaGenerator.valueToCode(block, "Y", Order.NONE) || "1";
  const width = luaGenerator.valueToCode(block, "WIDTH", Order.NONE) || "1";
  const height = luaGenerator.valueToCode(block, "HEIGHT", Order.NONE) || "1";
  return `${window}.reposition(${x}, ${y}, ${width}, ${height})\n`;
};

//#endregion
