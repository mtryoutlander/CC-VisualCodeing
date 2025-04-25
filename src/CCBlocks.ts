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

// Turtle: Forward
Blockly.Blocks["turtle_forward"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.forward");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");  // the real function returns a boolean and string blockly has to ignore the string because it dose not support two outputs
    this.setColour(160);
    this.setTooltip("Moves the turtle forward and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:forward");
  },
};
luaGenerator.forBlock["turtle_forward"] = function () {
  return ["turtle.forward()\n", Order.NONE];
};
// Turtle: Back
Blockly.Blocks["turtle_back"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.back");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Moves the turtle backward and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:back");
  },
};
luaGenerator.forBlock["turtle_back"] = function () {
  return ["turtle.back()\n", Order.NONE];
};

// Turtle: Turn Left
Blockly.Blocks["turtle_turnLeft"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.turnLeft");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Turns the turtle to the left and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:turnLeft");
  },
};
luaGenerator.forBlock["turtle_turnLeft"] = function () {
  return ["turtle.turnLeft()\n", Order.NONE];
};

// Turtle: Turn Right
Blockly.Blocks["turtle_turnRight"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.turnRight");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Turns the turtle to the right and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:turnRight");
  },
};
luaGenerator.forBlock["turtle_turnRight"] = function () {
  return ["turtle.turnRight()\n", Order.NONE];
};

// Turtle: Up
Blockly.Blocks["turtle_up"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.up");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Moves the turtle up and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:up");
  },
};
luaGenerator.forBlock["turtle_up"] = function () {
  return ["turtle.up()\n", Order.NONE];
};

// Turtle: Down
Blockly.Blocks["turtle_down"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.down");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Moves the turtle down and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:down");
  },
};
luaGenerator.forBlock["turtle_down"] = function () {
  return ["turtle.down()\n", Order.NONE];
};

// Turtle: Select Slot
Blockly.Blocks["turtle_select"] = {
  init: function () {
    this.appendValueInput("SLOT")
      .setCheck("Number")
      .appendField("turtle.select slot");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip("Selects the specified slot in the turtle's inventory.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:select");
  },
};
luaGenerator.forBlock["turtle_select"] = function (block) {
  const slot = luaGenerator.valueToCode(block, "SLOT", Order.NONE) ;
  return [`turtle.select(${slot})\n`, Order.NONE];
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
  return ["turtle.getSelectedSlot()\n", Order.NONE];
};

// Turtle: Get Item Count
Blockly.Blocks["turtle_getItemCount"] = {
  init: function () {
    this.appendValueInput("SLOT")
      .setCheck("Number")
      .appendField("turtle.getItemCount slot");
    this.setOutput(true, "Number");
    this.setInputsInline(true); // Align inputs inline
    this.setColour(160);
    this.setTooltip("Gets the number of items in the specified slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getItemCount");
  },
};
luaGenerator.forBlock["turtle_getItemCount"] = function (block) {
  const slot = luaGenerator.valueToCode(block, "SLOT", Order.NONE);
  return [`turtle.getItemCount(${slot})\n`, Order.NONE];
};

// Turtle: Get Item Space
Blockly.Blocks["turtle_getItemSpace"] = {
  init: function () {
    this.appendValueInput("SLOT")
      .setCheck("Number")
      .appendField("turtle.getItemSpace slot");
    this.setOutput(true, "Number");
    this.setInputsInline(true); // Align inputs inline
    this.setColour(160);
    this.setTooltip("Gets the remaining space in the specified slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getItemSpace");
  },
};
luaGenerator.forBlock["turtle_getItemSpace"] = function (block) {
  const slot = luaGenerator.valueToCode(block, "SLOT", Order.NONE) ;
  return [`turtle.getItemSpace(${slot})\n`, Order.NONE];
};

// Turtle: Get Item Detail
Blockly.Blocks["turtle_getItemDetail"] = {
  init: function () {
    this.appendValueInput("SLOT")
      .setCheck("Number")
      .appendField("turtle.getItemDetail slot");
    this.setOutput(true, "Object");       // Allow the block to return an object (table)
    this.setInputsInline(true); // Align inputs inline
    this.setColour(160);
    this.setTooltip("Gets detailed information about the item in the specified slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getItemDetail");
  },
};
luaGenerator.forBlock["turtle_getItemDetail"] = function (block) {
  const slot = luaGenerator.valueToCode(block, "SLOT", Order.NONE);
  return [`turtle.getItemDetail(${slot})\n`, Order.NONE];
};

// Turtle: Equip Left
Blockly.Blocks["turtle_equipLeft"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.equipLeft");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Equips the item in the selected slot to the left side.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:equipLeft");
  },
};
luaGenerator.forBlock["turtle_equipLeft"] = function () {
  return ["turtle.equipLeft()\n", Order.NONE];
};

// Turtle: Equip Right
Blockly.Blocks["turtle_equipRight"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.equipRight");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Equips the item in the selected slot to the right side.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:equipRight");
  },
};
luaGenerator.forBlock["turtle_equipRight"] = function () {
  return ["turtle.equipRight()\n", Order.NONE];
};

// Turtle: Dig
Blockly.Blocks["turtle_dig"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.dig");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Digs the block in front of the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:dig");
  },
};
luaGenerator.forBlock["turtle_dig"] = function () {
  return ["turtle.dig()\n", Order.NONE];
};

// Turtle: Dig Up
Blockly.Blocks["turtle_digUp"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.digUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Digs the block above the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:digUp");
  },
};
luaGenerator.forBlock["turtle_digUp"] = function () {
  return ["turtle.digUp()\n", Order.NONE];
};

// Turtle: Dig Down
Blockly.Blocks["turtle_digDown"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.digDown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Digs the block below the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:digDown");
  },
};
luaGenerator.forBlock["turtle_digDown"] = function () {
  return ["turtle.digDown()\n", Order.NONE];
};

// Turtle: Place
Blockly.Blocks["turtle_place"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.place");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Places a block or item in front of the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:place");
  },
};
luaGenerator.forBlock["turtle_place"] = function () {
  return ["turtle.place()\n", Order.NONE];
};

// Turtle: Place Up
Blockly.Blocks["turtle_placeUp"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.placeUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Places a block or item above the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:placeUp");
  },
};
luaGenerator.forBlock["turtle_placeUp"] = function () {
  return ["turtle.placeUp()\n", Order.NONE];
};

// Turtle: Place Down
Blockly.Blocks["turtle_placeDown"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.placeDown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Places a block or item below the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:placeDown");
  },
};
luaGenerator.forBlock["turtle_placeDown"] = function () {
  return ["turtle.placeDown()\n", Order.NONE];
};

// Turtle: Drop
Blockly.Blocks["turtle_drop"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.drop");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Drops items from the selected slot in front of the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:drop");
  },
};
luaGenerator.forBlock["turtle_drop"] = function () {
  return ["turtle.drop()\n", Order.NONE];
};

// Turtle: Drop Up
Blockly.Blocks["turtle_dropUp"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.dropUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Drops items from the selected slot above the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:dropUp");
  },
};
luaGenerator.forBlock["turtle_dropUp"] = function () {
  return ["turtle.dropUp()\n", Order.NONE];
};

// Turtle: Drop Down
Blockly.Blocks["turtle_dropDown"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.dropDown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Drops items from the selected slot below the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:dropDown");
  },
};
luaGenerator.forBlock["turtle_dropDown"] = function () {
  return ["turtle.dropDown()\n", Order.NONE];
};

// Turtle: Detect
Blockly.Blocks["turtle_detect"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.detect");
    this.setOutput(true, "Boolean");
    this.setColour(160);
    this.setTooltip("Detects if there is a block in front of the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:detect");
  },
};
luaGenerator.forBlock["turtle_detect"] = function () {
  return ["turtle.detect()\n", Order.NONE];
};

// Turtle: Detect Up
Blockly.Blocks["turtle_detectUp"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.detectUp");
    this.setOutput(true, "Boolean");
    this.setColour(160);
    this.setTooltip("Detects if there is a block above the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:detectUp");
  },
};
luaGenerator.forBlock["turtle_detectUp"] = function () {
  return ["turtle.detectUp()\n", Order.NONE];
};

// Turtle: Detect Down
Blockly.Blocks["turtle_detectDown"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.detectDown");
    this.setOutput(true, "Boolean");
    this.setColour(160);
    this.setTooltip("Detects if there is a block below the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:detectDown");
  },
};
luaGenerator.forBlock["turtle_detectDown"] = function () {
  return ["turtle.detectDown()\n", Order.NONE];
};

// Turtle: Attack
Blockly.Blocks["turtle_attack"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.attack");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Attacks the entity in front of the turtle and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:attack");
  },
};
luaGenerator.forBlock["turtle_attack"] = function () {
  return ["turtle.attack()\n", Order.NONE];
};

// Turtle: Attack Up
Blockly.Blocks["turtle_attackUp"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.attackUp");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Attacks the entity above the turtle and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:attackUp");
  },
};
luaGenerator.forBlock["turtle_attackUp"] = function () {
  return ["turtle.attackUp()\n", Order.NONE];
};

// Turtle: Attack Down
Blockly.Blocks["turtle_attackDown"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.attackDown");
    this.setPreviousStatement(true, null); // Allow connection to a block above
    this.setNextStatement(true, null);     // Allow connection to a block below
    this.setOutput(true, "Boolean");       // Allow the block to return a boolean
    this.setColour(160);
    this.setTooltip("Attacks the entity below the turtle and returns true if successful.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:attackDown");
  },
};
luaGenerator.forBlock["turtle_attackDown"] = function () {
  return ["turtle.attackDown()\n", Order.NONE];
};

// Turtle: Compare
Blockly.Blocks["turtle_compare"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.compare");
    this.setOutput(true, "Boolean");
    this.setColour(160);
    this.setTooltip("Compares the block in front of the turtle with the item in the selected slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:compare");
  },
};
luaGenerator.forBlock["turtle_compare"] = function () {
  return ["turtle.compare()\n", Order.NONE];
};

// Turtle: Compare Up
Blockly.Blocks["turtle_compareUp"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.compareUp");
    this.setOutput(true, "Boolean");
    this.setColour(160);
    this.setTooltip("Compares the block above the turtle with the item in the selected slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:compareUp");
  },
};
luaGenerator.forBlock["turtle_compareUp"] = function () {
  return ["turtle.compareUp()\n", Order.NONE];
};

// Turtle: Compare Down
Blockly.Blocks["turtle_compareDown"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.compareDown");
    this.setOutput(true, "Boolean");
    this.setColour(160);
    this.setTooltip("Compares the block below the turtle with the item in the selected slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:compareDown");
  },
};
luaGenerator.forBlock["turtle_compareDown"] = function () {
  return ["turtle.compareDown()\n", Order.NONE];
};

// Turtle: Compare To
Blockly.Blocks["turtle_compareTo"] = {
  init: function () {
    this.appendValueInput("SLOT")
      .setCheck("Number")
      .appendField("turtle.compareTo slot");
    this.setOutput(true, "Boolean");
    this.setInputsInline(true); // Align inputs inline
    this.setColour(160);
    this.setTooltip("Compares the item in the selected slot with the item in the specified slot.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:compareTo");
  },
};
luaGenerator.forBlock["turtle_compareTo"] = function (block) {
  const slot = luaGenerator.valueToCode(block, "SLOT", Order.NONE) || "1";
  return [`turtle.compareTo(${slot})\n`, Order.NONE];
};

// Turtle: Suck
Blockly.Blocks["turtle_suck"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.suck");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Pulls an item from the inventory or block in front of the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:suck");
  },
};
luaGenerator.forBlock["turtle_suck"] = function () {
  return ["turtle.suck()\n", Order.NONE];
};

// Turtle: Suck Up
Blockly.Blocks["turtle_suckUp"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.suckUp");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Pulls an item from the inventory or block above the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:suckUp");
  },
};
luaGenerator.forBlock["turtle_suckUp"] = function () {
  return ["turtle.suckUp()\n", Order.NONE];
};

// Turtle: Suck Down
Blockly.Blocks["turtle_suckDown"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.suckDown");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip("Pulls an item from the inventory or block below the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:suckDown");
  },
};
luaGenerator.forBlock["turtle_suckDown"] = function () {
  return ["turtle.suckDown()\n", Order.NONE];
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
  const count = luaGenerator.valueToCode(block, "COUNT", Order.NONE) ;
  return [`turtle.refuel(${count})\n`, Order.NONE];
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
  const slot = luaGenerator.valueToCode(block, "SLOT", Order.NONE) ;
  const count = luaGenerator.valueToCode(block, "COUNT", Order.NONE) ;
  return `turtle.transferTo(${slot}, ${count})\n`;
};

// Turtle: Inspect
Blockly.Blocks["turtle_inspect"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.inspect");
    this.setOutput(true, "Object");       // Allow the block to return an object (table)
    this.setColour(160);
    this.setTooltip("Inspects the block in front of the turtle and returns its details.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:inspect");
  },
};
luaGenerator.forBlock["turtle_inspect"] = function () {
  return ["turtle.inspect()\n", Order.NONE];
};

// Turtle: Inspect Up
Blockly.Blocks["turtle_inspectUp"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.inspectUp");
    this.setOutput(true, "Object");       // Allow the block to return an object (table)
    this.setColour(160);
    this.setTooltip("Inspects the block above the turtle and returns its details.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:inspectUp");
  },
};
luaGenerator.forBlock["turtle_inspectUp"] = function () {
  return ["turtle.inspectUp()\n", Order.NONE];
};

// Turtle: Inspect Down
Blockly.Blocks["turtle_inspectDown"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.inspectDown");
    this.setOutput(true, "Object");       // Allow the block to return an object (table)
    this.setColour(160);
    this.setTooltip("Inspects the block below the turtle and returns its details.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:inspectDown");
  },
};
luaGenerator.forBlock["turtle_inspectDown"] = function () {
  return ["turtle.inspectDown()\n", Order.NONE];
};

// Turtle: Get Equipped Left
Blockly.Blocks["turtle_getEquippedLeft"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.getEquippedLeft");
    this.setOutput(true, "Object");
    this.setColour(160);
    this.setTooltip("Gets details about the item equipped on the left side of the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getEquippedLeft");
  },
};
luaGenerator.forBlock["turtle_getEquippedLeft"] = function () {
  return ["turtle.getEquippedLeft()\n", Order.NONE];
};

// Turtle: Get Equipped Right
Blockly.Blocks["turtle_getEquippedRight"] = {
  init: function () {
    this.appendDummyInput().appendField("turtle.getEquippedRight");
    this.setOutput(true, "Object");
    this.setColour(160);
    this.setTooltip("Gets details about the item equipped on the right side of the turtle.");
    this.setHelpUrl("https://tweaked.cc/module/turtle.html#v:getEquippedRight");
  },
};
luaGenerator.forBlock["turtle_getEquippedRight"] = function () {
  return ["turtle.getEquippedRight()\n", Order.NONE];
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
  return `os.sleep(${time})\n`;
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
  return [`term.write(${text})\n`,Order.NONE];
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
  return [`print(${text})\n`,Order.NONE];
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
  return `printError(${text})\n`;
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
  const replaceChar = luaGenerator.valueToCode(block, "replaceChar", Order.NONE) || null;
  const history = luaGenerator.valueToCode(block, "history", Order.NONE) || null;
  const completeFn = luaGenerator.valueToCode(block, "completeFn", Order.NONE) || null;
  const defaultValue = luaGenerator.valueToCode(block, "default", Order.NONE) || null
  return [`read(${replaceChar}, ${history}, ${completeFn}, ${defaultValue})\n`,Order.NONE];
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
