import test from "ava";
import originalData from "../data.json";
import countries from "../index.js";

originalData.forEach((obj) => {
  test(`${obj.name}`, async (t) => {
    const outCode = countries.getCode(obj.name);
    const outName = countries.getName(obj.short);

    t.is(outCode, obj.short);
    t.is(outName, obj.name);
  });
});

test("All names and codes", async (t) => {
  const outCodes = countries.getCodes();
  const outNames = countries.getNames();

  t.is(outNames[0], "Afghanistan");
  t.is(outCodes[1], "AX");
});
