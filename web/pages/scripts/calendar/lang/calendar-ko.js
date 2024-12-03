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
("АПїдАП",
 "їщїдАП",
 "И­їдАП",
 "јцїдАП",
 "ёсїдАП",
 "±ЭїдАП",
 "ЕдїдАП",
 "АПїдАП");

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
("АП",
 "їщ",
 "И­",
 "јц",
 "ёс",
 "±Э",
 "Ед",
 "АП");

// full month names
Calendar._MN = new Array
("1їщ",
 "2їщ",
 "3їщ",
 "4їщ",
 "5їщ",
 "6їщ",
 "7їщ",
 "8їщ",
 "9їщ",
 "10їщ",
 "11їщ",
 "12їщ");

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
Calendar._TT["INFO"] = "calendar їЎ ґлЗШј­";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"\n"+
"ГЦЅЕ №цАьА» №ЮАёЅГ·Бёй http://www.dynarch.com/projects/calendar/ їЎ №ж№®ЗПјјїд\n" +
"\n"+
"GNU LGPL ¶уАМјѕЅє·О №иЖчµЛґПґЩ. \n"+
"¶уАМјѕЅєїЎ ґлЗС АЪјјЗС і»їлАє http://gnu.org/licenses/lgpl.html А» АРАёјјїд." +
"\n\n" +
"іЇВҐ ј±ЕГ:\n" +
"- ї¬µµё¦ ј±ЕГЗП·Бёй \xab, \xbb №цЖ°А» »зїлЗХґПґЩ\n" +
"- ґЮА» ј±ЕГЗП·Бёй " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " №цЖ°А» ґ©ёЈјјїд\n" +
"- °ијУ ґ©ёЈ°н АЦАёёй А§ °ЄµйА» єьёЈ°Ф ј±ЕГЗПЅЗ јц АЦЅАґПґЩ.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"ЅГ°Ј ј±ЕГ:\n" +
"- ё¶їмЅє·О ґ©ёЈёй ЅГ°ЈАМ Бх°ЎЗХґПґЩ\n" +
"- Shift Е°їН ЗФІІ ґ©ёЈёй °ЁјТЗХґПґЩ\n" +
"- ґ©ёҐ »уЕВїЎј­ ё¶їмЅєё¦ їтБчАМёй Б» ґх єьёЈ°Ф °ЄАМ єЇЗХґПґЩ.\n";

Calendar._TT["PREV_YEAR"] = "Бці­ ЗШ (±ж°Ф ґ©ёЈёй ёс·П)";
Calendar._TT["PREV_MONTH"] = "Бці­ ґЮ (±ж°Ф ґ©ёЈёй ёс·П)";
Calendar._TT["GO_TODAY"] = "їАґГ іЇВҐ·О";
Calendar._TT["NEXT_MONTH"] = "ґЩАЅ ґЮ (±ж°Ф ґ©ёЈёй ёс·П)";
Calendar._TT["NEXT_YEAR"] = "ґЩАЅ ЗШ (±ж°Ф ґ©ёЈёй ёс·П)";
Calendar._TT["SEL_DATE"] = "іЇВҐё¦ ј±ЕГЗПјјїд";
Calendar._TT["DRAG_TO_MOVE"] = "ё¶їмЅє µе·Ў±Ч·О АМµї ЗПјјїд";
Calendar._TT["PART_TODAY"] = " (їАґГ)";
Calendar._TT["MON_FIRST"] = "їщїдАПА» ЗС БЦАЗ ЅГАЫ їдАП·О";
Calendar._TT["SUN_FIRST"] = "АПїдАПА» ЗС БЦАЗ ЅГАЫ їдАП·О";
Calendar._TT["CLOSE"] = "ґЭ±в";
Calendar._TT["TODAY"] = "їАґГ";
Calendar._TT["TIME_PART"] = "(Shift-)Е¬ёЇ ¶ЗґВ µе·Ў±Ч ЗПјјїд";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%b/%e [%a]";

Calendar._TT["WK"] = "БЦ";
