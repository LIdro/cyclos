// ** I18N

// Calendar BG language
// Author: Mihai Bazon, <mihai_bazon@yahoo.com>
// Translator: Valentin Sheiretsky, <valio@valio.eu.org>
// Encoding: Windows-1251
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
Calendar._DN = new Array
("РќРµРґРµР»СЏ",
 "РџРѕРЅРµРґРµР»РЅРёРє",
 "Р’С‚РѕСЂРЅРёРє",
 "РЎСЂСЏРґР°",
 "Р§РµС‚РІСЉСЂС‚СЉРє",
 "РџРµС‚СЉРє",
 "РЎСЉР±РѕС‚Р°",
 "РќРµРґРµР»СЏ");

// Please note that the following array of short day names (and the same goes
// for short month names, _SMN) isn't absolutely necessary.  We give it here
// for exemplification on how one can customize the short day names, but if
// they are simply the first N letters of the full name you can simply say:
//
//   Calendar._SDN_len = N; // short day name length
//   Calendar._SMN_len = N; // short month name length
//
// If N = 3 then this is not needed either since we assume a value of 3 if not
// present, to be compatible with translation files that were written before
// this feature.

// short day names
Calendar._SDN = new Array
("РќРµРґ",
 "РџРѕРЅ",
 "Р’С‚Рѕ",
 "РЎСЂСЏ",
 "Р§РµС‚",
 "РџРµС‚",
 "РЎСЉР±",
 "РќРµРґ");

// full month names
Calendar._MN = new Array
("РЇРЅСѓР°СЂРё",
 "Р¤РµРІСЂСѓР°СЂРё",
 "РњР°СЂС‚",
 "РђРїСЂРёР»",
 "РњР°Р№",
 "Р®РЅРё",
 "Р®Р»Рё",
 "РђРІРіСѓСЃС‚",
 "РЎРµРїС‚РµРјРІСЂРё",
 "РћРєС‚РѕРјРІСЂРё",
 "РќРѕРµРјРІСЂРё",
 "Р”РµРєРµРјРІСЂРё");

// short month names
Calendar._SMN = new Array
("РЇРЅСѓ",
 "Р¤РµРІ",
 "РњР°СЂ",
 "РђРїСЂ",
 "РњР°Р№",
 "Р®РЅРё",
 "Р®Р»Рё",
 "РђРІРі",
 "РЎРµРї",
 "РћРєС‚",
 "РќРѕРµ",
 "Р”РµРє");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "РРЅС„РѕСЂРјР°С†РёСЏ Р·Р° РєР°Р»РµРЅРґР°СЂР°";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"Date selection:\n" +
"- Use the \xab, \xbb buttons to select year\n" +
"- Use the " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " buttons to select month\n" +
"- Hold mouse button on any of the above buttons for faster selection.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Time selection:\n" +
"- Click on any of the time parts to increase it\n" +
"- or Shift-click to decrease it\n" +
"- or click and drag for faster selection.";

Calendar._TT["PREV_YEAR"] = "РџСЂРµРґРЅР° РіРѕРґРёРЅР° (Р·Р°РґСЂСЉР¶С‚Рµ Р·Р° РјРµРЅСЋ)";
Calendar._TT["PREV_MONTH"] = "РџСЂРµРґРµРЅ РјРµСЃРµС† (Р·Р°РґСЂСЉР¶С‚Рµ Р·Р° РјРµРЅСЋ)";
Calendar._TT["GO_TODAY"] = "РР·Р±РµСЂРµС‚Рµ РґРЅРµСЃ";
Calendar._TT["NEXT_MONTH"] = "РЎР»РµРґРІР°С‰ РјРµСЃРµС† (Р·Р°РґСЂСЉР¶С‚Рµ Р·Р° РјРµРЅСЋ)";
Calendar._TT["NEXT_YEAR"] = "РЎР»РµРґРІР°С‰Р° РіРѕРґРёРЅР° (Р·Р°РґСЂСЉР¶С‚Рµ Р·Р° РјРµРЅСЋ)";
Calendar._TT["SEL_DATE"] = "РР·Р±РµСЂРµС‚Рµ РґР°С‚Р°";
Calendar._TT["DRAG_TO_MOVE"] = "РџСЂРµРјРµСЃС‚РІР°РЅРµ";
Calendar._TT["PART_TODAY"] = " (РґРЅРµСЃ)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "%s РєР°С‚Рѕ РїСЉСЂРІРё РґРµРЅ";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "Р—Р°С‚РІРѕСЂРµС‚Рµ";
Calendar._TT["TODAY"] = "Р”РЅРµСЃ";
Calendar._TT["TIME_PART"] = "(Shift-)Click РёР»Рё drag Р·Р° РґР° РїСЂРѕРјРµРЅРёС‚Рµ СЃС‚РѕР№РЅРѕСЃС‚С‚Р°";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%A - %e %B %Y";

Calendar._TT["WK"] = "РЎРµРґРј";
Calendar._TT["TIME"] = "Р§Р°СЃ:";
