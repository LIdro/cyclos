// ** I18N

// Calendar ZH language
// Author: muziq, <muziq@sina.com>
// Encoding: GB2312 or GBK
// Distributed under the same terms as the calendar itself.

// full day names
Calendar._DN = new Array
("РЗЖЪИХ",
 "РЗЖЪТ»",
 "РЗЖЪ¶ю",
 "РЗЖЪИэ",
 "РЗЖЪЛД",
 "РЗЖЪОе",
 "РЗЖЪБщ",
 "РЗЖЪИХ");

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
("ИХ",
 "Т»",
 "¶ю",
 "Иэ",
 "ЛД",
 "Ое",
 "Бщ",
 "ИХ");

// full month names
Calendar._MN = new Array
("Т»ФВ",
 "¶юФВ",
 "ИэФВ",
 "ЛДФВ",
 "ОеФВ",
 "БщФВ",
 "ЖЯФВ",
 "°ЛФВ",
 "ѕЕФВ",
 "К®ФВ",
 "К®Т»ФВ",
 "К®¶юФВ");

// short month names
Calendar._SMN = new Array
("Т»ФВ",
 "¶юФВ",
 "ИэФВ",
 "ЛДФВ",
 "ОеФВ",
 "БщФВ",
 "ЖЯФВ",
 "°ЛФВ",
 "ѕЕФВ",
 "К®ФВ",
 "К®Т»ФВ",
 "К®¶юФВ");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "°пЦъ";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
"For latest version visit: http://www.dynarch.com/projects/calendar/\n" +
"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
"\n\n" +
"СЎФсИХЖЪ:\n" +
"- µг»ч \xab, \xbb °ґЕҐСЎФсДк·Э\n" +
"- µг»ч " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " °ґЕҐСЎФсФВ·Э\n" +
"- і¤°ґТФЙП°ґЕҐїЙґУІЛµҐЦРїмЛЩСЎФсДк·Э»тФВ·Э";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"СЎФсК±јд:\n" +
"- µг»чРЎК±»т·ЦЦУїЙК№ёДКэЦµјУТ»\n" +
"- °ґЧЎShiftјьµг»чРЎК±»т·ЦЦУїЙК№ёДКэЦµјхТ»\n" +
"- µг»чНП¶ЇКу±кїЙЅшРРїмЛЩСЎФс";

Calendar._TT["PREV_YEAR"] = "ЙПТ»Дк (°ґЧЎіцІЛµҐ)";
Calendar._TT["PREV_MONTH"] = "ЙПТ»ФВ (°ґЧЎіцІЛµҐ)";
Calendar._TT["GO_TODAY"] = "ЧЄµЅЅсИХ";
Calendar._TT["NEXT_MONTH"] = "ПВТ»ФВ (°ґЧЎіцІЛµҐ)";
Calendar._TT["NEXT_YEAR"] = "ПВТ»Дк (°ґЧЎіцІЛµҐ)";
Calendar._TT["SEL_DATE"] = "СЎФсИХЖЪ";
Calendar._TT["DRAG_TO_MOVE"] = "НП¶Ї";
Calendar._TT["PART_TODAY"] = " (ЅсИХ)";

// the following is to inform that "%s" is to be the first day of week
// %s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "ЧоЧу±ЯПФКѕ%s";

// This may be locale-dependent.  It specifies the week-end days, as an array
// of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
// means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "№Ш±Х";
Calendar._TT["TODAY"] = "ЅсИХ";
Calendar._TT["TIME_PART"] = "(Shift-)µг»чКу±к»тНП¶ЇёД±дЦµ";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%Y-%m-%d";
Calendar._TT["TT_DATE_FORMAT"] = "%A, %b %eИХ";

Calendar._TT["WK"] = "ЦЬ";
Calendar._TT["TIME"] = "К±јд:";
