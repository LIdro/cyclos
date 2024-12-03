п»ї// ** I18N

// Calendar EN language
// Author: Mihai Bazon, <mihai_bazon@yahoo.com>
// Encoding: any
// Distributed under the same terms as the calendar itself.

// For translators: please use UTF-8 if possible.  We strongly believe that
// Unicode is the answer to a real internationalized world.  Also please
// include your contact information in the header, as can be seen above.

// full day names
Calendar._DN = new Array
("ОљП…ПЃО№О±ОєО®",
 "О”ОµП…П„О­ПЃО±",
 "О¤ПЃОЇП„О·",
 "О¤ОµП„О¬ПЃП„О·",
 "О О­ОјПЂП„О·",
 "О О±ПЃО±ПѓОєОµП…О®",
 "ОЈО¬ОІОІО±П„Ої",
 "ОљП…ПЃО№О±ОєО®");

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
("ОљП…",
 "О”Оµ",
 "TПЃ",
 "О¤Оµ",
 "О Оµ",
 "О О±",
 "ОЈО±",
 "ОљП…");

// First day of the week. "0" means display Sunday first, "1" means display
// Monday first, etc.
Calendar._FD = 0;

// full month names
Calendar._MN = new Array
("О™О±ОЅОїП…О¬ПЃО№ОїП‚",
 "О¦ОµОІПЃОїП…О¬ПЃО№ОїП‚",
 "ОњО¬ПЃП„О№ОїП‚",
 "О‘ПЂПЃОЇО»О№ОїП‚",
 "ОњО¬ПЉОїП‚",
 "О™ОїПЌОЅО№ОїП‚",
 "О™ОїПЌО»О№ОїП‚",
 "О‘ПЌОіОїП…ПѓП„ОїП‚",
 "ОЈОµПЂП„О­ОјОІПЃО№ОїП‚",
 "ОџОєП„ПЋОІПЃО№ОїП‚",
 "ОќОїО­ОјОІПЃО№ОїП‚",
 "О”ОµОєО­ОјОІПЃО№ОїП‚");

// short month names
Calendar._SMN = new Array
("О™О±ОЅ",
 "О¦ОµОІ",
 "ОњО±ПЃ",
 "О‘ПЂПЃ",
 "ОњО±О№",
 "О™ОїП…ОЅ",
 "О™ОїП…О»",
 "О‘П…Оі",
 "ОЈОµПЂ",
 "ОџОєП„",
 "ОќОїОµ",
 "О”ОµОє");

// tooltips
Calendar._TT = {};
Calendar._TT["INFO"] = "О“О№О± П„Ої О·ОјОµПЃОїО»ПЊОіО№Ої";
Calendar._TT["ABOUT"] =
	"О•ПЂО№О»ОїОіО­О±П‚ О·ОјОµПЃОїОјО·ОЅОЇО±П‚/ПЋПЃО±П‚ ПѓОµ DHTML\n" +
	"(c) dynarch.com 2002-2005 / Author: Mihai Bazon\n" + // don't translate this this ;-)
	"О“О№О± П„ОµО»ОµП…П„О±ОЇО± О­ОєОґОїПѓО·: http://www.dynarch.com/projects/calendar/\n" +
	"Distributed under GNU LGPL.  See http://gnu.org/licenses/lgpl.html for details." +
	"\n\n" +
	"О•ПЂО№О»ОїОіО® О·ОјОµПЃОїОјО·ОЅОЇО±П‚:\n" +
	"- О§ПЃО·ПѓО№ОјОїПЂОїО№ОµОЇПѓП„Оµ П„О± ОєОїП…ОјПЂО№О¬ \xab, \xbb ОіО№О± ОµПЂО№О»ОїОіО® О­П„ОїП…П‚\n" +
	"- О§ПЃО·ПѓО№ОјОїПЂОїО№ОµОЇПѓП„Оµ П„О± ОєОїП…ОјПЂО№О¬ " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " ОіО№О± ОµПЂО№О»ОїОіО® ОјО®ОЅО±\n" +
	"- ОљПЃО±П„О®ПѓП„Оµ ОєОїП…ОјПЂОЇ ПЂОїОЅП„О№ОєОїПЌ ПЂО±П„О·ОјО­ОЅОї ПѓП„О± ПЂО±ПЃО±ПЂО¬ОЅП‰ ОєОїП…ОјПЂО№О¬ ОіО№О± ПЂО№Ої ОіПЃО®ОіОїПЃО· ОµПЂО№О»ОїОіО®.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
	"О•ПЂО№О»ОїОіО® ПЋПЃО±П‚:\n" +
	"- ОљО¬ОЅП„Оµ ОєО»О№Оє ПѓОµ О­ОЅО± О±ПЂПЊ П„О± ОјО­ПЃО· П„О·П‚ ПЋПЃО±П‚ ОіО№О± О±ПЌОѕО·ПѓО·\n" +
	"- О® Shift-ОєО»О№Оє ОіО№О± ОјОµОЇП‰ПѓО·\n" +
	"- О® ОєО»О№Оє ОєО±О№ ОјОµП„О±ОєОЇОЅО·ПѓО· ОіО№О± ПЂО№Ої ОіПЃО®ОіОїПЃО· ОµПЂО№О»ОїОіО®.";

Calendar._TT["PREV_YEAR"] = "О ПЃОїО·Оі. О­П„ОїП‚ (ОєПЃО±П„О®ПѓП„Оµ ОіО№О± П„Ої ОјОµОЅОїПЌ)";
Calendar._TT["PREV_MONTH"] = "О ПЃОїО·Оі. ОјО®ОЅО±П‚ (ОєПЃО±П„О®ПѓП„Оµ ОіО№О± П„Ої ОјОµОЅОїПЌ)";
Calendar._TT["GO_TODAY"] = "ОЈО®ОјОµПЃО±";
Calendar._TT["NEXT_MONTH"] = "О•ПЂПЊОјОµОЅОїП‚ ОјО®ОЅО±П‚ (ОєПЃО±П„О®ПѓП„Оµ ОіО№О± П„Ої ОјОµОЅОїПЌ)";
Calendar._TT["NEXT_YEAR"] = "О•ПЂПЊОјОµОЅОї О­П„ОїП‚ (ОєПЃО±П„О®ПѓП„Оµ ОіО№О± П„Ої ОјОµОЅОїПЌ)";
Calendar._TT["SEL_DATE"] = "О•ПЂО№О»О­ОѕП„Оµ О·ОјОµПЃОїОјО·ОЅОЇО±";
Calendar._TT["DRAG_TO_MOVE"] = "ОЈПЌПЃП„Оµ ОіО№О± ОЅО± ОјОµП„О±ОєО№ОЅО®ПѓОµП„Оµ";
Calendar._TT["PART_TODAY"] = " (ПѓО®ОјОµПЃО±)";
//the following is to inform that "%s" is to be the first day of week
//%s will be replaced with the day name.
Calendar._TT["DAY_FIRST"] = "О•ОјП†О¬ОЅО№ПѓО· %s ПЂПЃПЋП„О±";
//This may be locale-dependent.  It specifies the week-end days, as an array
//of comma-separated numbers.  The numbers are from 0 to 6: 0 means Sunday, 1
//means Monday, etc.
Calendar._TT["WEEKEND"] = "0,6";

Calendar._TT["CLOSE"] = "ОљО»ОµОЇПѓО№ОјОї";
Calendar._TT["TODAY"] = "ОЈО®ОјОµПЃО±";
Calendar._TT["TIME_PART"] = "(Shift-)ОєО»О№Оє О® ОјОµП„О±ОєОЇОЅО·ПѓО· ОіО№О± О±О»О»О±ОіО®";

Calendar._TT["MON_FIRST"] = "О•ОјП†О¬ОЅО№ПѓО· О”ОµП…П„О­ПЃО±П‚ ПЂПЃПЋП„О±";
Calendar._TT["SUN_FIRST"] = "О•ОјП†О¬ОЅО№ПѓО· ОљП…ПЃО№О±ОєО®П‚ ПЂПЃПЋП„О±";



// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "dd-mm-y";
Calendar._TT["TT_DATE_FORMAT"] = "D, d M";

Calendar._TT["WK"] = "ОµОІОґ";
Calendar._TT["TIME"] = "П†ОїПЃО¬:";
