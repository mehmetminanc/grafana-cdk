import {FLOT, Mapping, MappingType, Pixels, RGB, RGBA, ValueType} from "./common";
import {Time} from "./time";
import {TimePicker} from "./timePicker";

export const SCHEMA_VERSION = 12;

export const GREY1 = new RGBA(216, 200, 27, 0.27);
export const GREY2 = new RGBA(234, 112, 112, 0.22);
export const BLUE_RGBA = new RGBA(31, 118, 189, 0.18);
export const BLUE_RGB = new RGB(31, 120, 193);
export const GREEN = new RGBA(50, 172, 45, 0.97);
export const ORANGE = new RGBA(237, 129, 40, 0.89);
export const RED = new RGBA(245, 54, 54, 0.9);
export const BLANK = new RGBA(0, 0, 0, 0.0);

export const DEFAULT_FILL = 1;
export const DEFAULT_REFRESH = '10s';
export const DEFAULT_ROW_HEIGHT = new Pixels(250);
export const DEFAULT_LINE_WIDTH = 2;
export const DEFAULT_POINT_RADIUS = 5;
export const DEFAULT_RENDERER = FLOT;
export const DEFAULT_STEP = 10;
export const DEFAULT_LIMIT = 10;
export const TOTAL_SPAN = 12;

export const DEFAULT_TIME = new Time('now-1h', 'now');

export const DEFAULT_TIME_PICKER = new TimePicker({});

export const MAPPING_VALUE_TO_TEXT = new Mapping("value to text", MappingType.MAPPING_TYPE_VALUE_TO_TEXT);
export const MAPPING_RANGE_TO_TEXT = new Mapping("range to text", MappingType.MAPPING_TYPE_RANGE_TO_TEXT);

export const DEFAULT_VALUE_TYPE: ValueType = "avg";
