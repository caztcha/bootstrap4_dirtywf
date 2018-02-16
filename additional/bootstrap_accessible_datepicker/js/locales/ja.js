(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "カレンダーで日付を選択",
		        "buttonLabel": "カレンダーで日付を選択",
		        "prevButtonLabel": "前の月",
		        "nextButtonLabel": "次の月",
		        "closeButtonTitle": "閉じる",
		        "closeButtonLabel": "カレンダーを閉じる",
		        "prevMonthButtonLabel": "前の年",
		        "prevYearButtonLabel": "前の20年",
		        "nextMonthButtonLabel": "次の年",
		        "nextYearButtonLabel": "次の20年",
		        "changeMonthButtonLabel": "月を変更",
		        "changeYearButtonLabel": "年を変更",
		        "changeRangeButtonLabel": "次の20年を開く",
		        "calendarHelp": "- 上下の矢印は - それぞれ前または次の週の同じ曜日に行きます。月の終わりに達している場合は、必要に応じて、次または前の月に続きます。\r\n - 左右の矢印は - また連続で、次の一日を進めます。視覚焦点は日々移動し、日のグリッド内の行から行へ折り返されています。\r\n - コントロール+ページアップ - 前の年の同じ日に移動します。\r\n - コントロール+ページダウン - 次の年の同じ日に移動します。\r\n - ホーム - 現在の月の最初の日に移動します。\r\n - 終わり - 現在の月の最後の日に移動します。\r\n - ページアップ - 前の月の同じ日に移動します。\r\n - ページダウン - 次の月の同じ日に移動します。\r\n - 入力またはエスパス - カレンダーを閉じて、選択した日付は、関連するテキストボックスに表示されます。\r\n - エスケープ - 操作なしカレンダーを閉じます。"
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "1月",
		        "2月",
		        "3月",
		        "4月",
		        "5月",
		        "6月",
		        "7月",
		        "8月",
		        "9月",
		        "10月",
		        "11月",
		        "12月"
		    ],
		    "month_names_abbreviated": [
		        "1月",
		        "2月",
		        "3月",
		        "4月",
		        "5月",
		        "6月",
		        "7月",
		        "8月",
		        "9月",
		        "10月",
		        "11月",
		        "12月"
		    ],
		    "month_names_narrow": [
		        "1",
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
		        "12"
		    ],
		    "day_names": [
		        "日曜日",
		        "月曜日",
		        "火曜日",
		        "水曜日",
		        "木曜日",
		        "金曜日",
		        "土曜日"
		    ],
		    "day_names_abbreviated": [
		        "日",
		        "月",
		        "火",
		        "水",
		        "木",
		        "金",
		        "土"
		    ],
		    "day_names_short": [
		        "日",
		        "月",
		        "火",
		        "水",
		        "木",
		        "金",
		        "土"
		    ],
		    "day_names_narrow": [
		        "日",
		        "月",
		        "火",
		        "水",
		        "木",
		        "金",
		        "土"
		    ],
		    "day_periods": {
		        "am": "午前",
		        "noon": "正午",
		        "pm": "午後"
		    },
		    "day_periods_abbreviated": {
		        "am": "午前",
		        "noon": "正午",
		        "pm": "午後"
		    },
		    "day_periods_narrow": {
		        "am": "午前",
		        "noon": "正午",
		        "pm": "午後"
		    },
		    "quarter_names": [
		        "第1四半期",
		        "第2四半期",
		        "第3四半期",
		        "第4四半期"
		    ],
		    "quarter_names_abbreviated": [
		        "Q1",
		        "Q2",
		        "Q3",
		        "Q4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "紀元前",
		        "西暦"
		    ],
		    "era_names_abbreviated": [
		        "紀元前",
		        "西暦"
		    ],
		    "era_names_narrow": [
		        "BC",
		        "AD"
		    ],
		    "full_format": "y年M月d日EEEE",
		    "long_format": "y年M月d日",
		    "medium_format": "y/MM/dd",
		    "short_format": "y/MM/dd",
		    "firstday_of_week": 0
		};
	}
})();