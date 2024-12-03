// ** I18N

// Calendar EN language
// Author: Mihai Bazon, <mihai_bazon@yahoo.com>
// Translation: Yourim Yi <yyi@yourim.net>
// Encoding: EUC-KR
// lang : ko
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names

Calendar._DN = new Array
("мќјмљ”мќј",
 "м›”мљ”мќј",
 "н™”мљ”мќј",
 "м€мљ”мќј",
 "лЄ©мљ”мќј",
 "кё€мљ”мќј",
 "н† мљ”мќј",
 "мќјмљ”мќј");

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
("мќј",
 "м›”",
 "н™”",
 "м€",
 "лЄ©",
 "кё€",
 "н† ",
 "мќј");

// full month names
Calendar._MN = new Array
("1м›”",
 "2м›”",
 "3м›”",
 "4м›”",
 "5м›”",
 "6м›”",
 "7м›”",
 "8м›”",
 "9м›”",
 "10м›”",
 "11м›”",
 "12м›”");

// short month names
Calendar._SMN = new Array
("1",
 "2",
 "3",
 "4",
 "5",
 "6",
 "7",
 "8",
 "9",
 "10",
 "11",
 "12");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "calendar м—ђ лЊЂн•ґм„њ";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"\n"+
"мµњм‹  лІ„м „мќ„ л°›мњјм‹њл ¤л©ґ http://www.dynarch.com/projects/calendar/ м—ђ л°©л¬ён•м„ёмљ”\n" +
"\n"+
"GNU LGPL лќјмќґм„јмЉ¤лЎњ л°°нЏ¬лђ©л‹€л‹¤. \n"+
"лќјмќґм„јмЉ¤м—ђ лЊЂн•њ мћђм„ён•њ л‚ґмљ©мќЂ http://gnu.org/licenses/lgpl.html мќ„ мќЅмњјм„ёмљ”." +
"\n\n" +
"л‚ м§њ м„ нѓќ:\n" +
"- м—°лЏ„лҐј м„ нѓќн•л ¤л©ґ \xab, \xbb лІ„нЉјмќ„ м‚¬мљ©н•©л‹€л‹¤\n" +
"- л‹¬мќ„ м„ нѓќн•л ¤л©ґ " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " лІ„нЉјмќ„ л€„лҐґм„ёмљ”\n" +
"- кі„м†Ќ л€„лҐґкі  мћ€мњјл©ґ мњ„ к°’л“¤мќ„ л№ лҐґкІЊ м„ нѓќн•м‹¤ м€ мћ€мЉµл‹€л‹¤.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"м‹њк°„ м„ нѓќ:\n" +
"- л§€мљ°мЉ¤лЎњ л€„лҐґл©ґ м‹њк°„мќґ м¦ќк°Ђн•©л‹€л‹¤\n" +
"- Shift н‚¤м™Ђ н•Ёк» л€„лҐґл©ґ к°ђм†Њн•©л‹€л‹¤\n" +
"- л€„лҐё мѓЃнѓњм—ђм„њ л§€мљ°мЉ¤лҐј м›Ђм§Ѓмќґл©ґ мўЂ лЌ” л№ лҐґкІЊ к°’мќґ ліЂн•©л‹€л‹¤.\n";

Calendar._TT["PREV_YEAR"] = "м§Ђл‚њ н•ґ (кёёкІЊ л€„лҐґл©ґ лЄ©лЎќ)";
Calendar._TT["PREV_MONTH"] = "м§Ђл‚њ л‹¬ (кёёкІЊ л€„лҐґл©ґ лЄ©лЎќ)";
Calendar._TT["GO_TODAY"] = "м¤лЉ л‚ м§њлЎњ";
Calendar._TT["NEXT_MONTH"] = "л‹¤мќЊ л‹¬ (кёёкІЊ л€„лҐґл©ґ лЄ©лЎќ)";
Calendar._TT["NEXT_YEAR"] = "л‹¤мќЊ н•ґ (кёёкІЊ л€„лҐґл©ґ лЄ©лЎќ)";
Calendar._TT["SEL_DATE"] = "л‚ м§њлҐј м„ нѓќн•м„ёмљ”";
Calendar._TT["DRAG_TO_MOVE"] = "л§€мљ°мЉ¤ л“њлћк·ёлЎњ мќґлЏ™ н•м„ёмљ”";
Calendar._TT["PART_TODAY"] = " (м¤лЉ)";
Calendar._TT["MON_FIRST"] = "м›”мљ”мќјмќ„ н•њ мЈјмќ м‹њмћ‘ мљ”мќјлЎњ";
Calendar._TT["SUN_FIRST"] = "мќјмљ”мќјмќ„ н•њ мЈјмќ м‹њмћ‘ мљ”мќјлЎњ";
Calendar._TT["CLOSE"] = "л‹«кё°";
Calendar._TT["TODAY"] = "м¤лЉ";
Calendar._TT["TIME_PART"] = "(Shift-)нЃґл¦­ лђлЉ” л“њлћк·ё н•м„ёмљ”";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%b/%e [%a]";

Calendar._TT["WK"] = "мЈј";
