// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { ModelConfig } from './contracts';

/**
 * Get model config.
 */
export const modelConfig: ModelConfig = {
  tags: [
  "<PAD>",
  "<UNK>",
  "O",
  "I-chart",
  "B-color",
  "B-chart",
  "B-field",
  "B-filter",
  "B-from",
  "B-mark",
  "I-from",
  "B-target",
  "B-greaterThanOrEqual",
  "B-lessThanOrEqual",
  "B-aggr_sum",
  "B-aggr_count",
  "I-color",
  "B-value",
  "B-aggr",
  "B-subject",
  "B-aggr_avg",
  "B-aggr_min",
  "B-aggr_max",
  "B-sorted",
  "B-aggr_median",
  "I-target",
  "B-top_n",
  "B-aggregation",
  "B-series",
  "B-greaterThan",
  "B-position",
  "B-lessThan",
  "B-equal",
  "B-number",
  "B-layout",
  "B-aggr_dcount",
  "I-aggregation",
  "B-text",
  "B-percent",
  "B-name",
  "B-first_n",
  "B-bottom_n",
  "I-layout",
  "I-text"
],
  intents: [
  "None",
  "AddChartTitle",
  "AddDataLabels",
  "AddGridLines",
  "AddLine",
  "AddRectangle",
  "AddSeries",
  "AddSeriesLabels",
  "AddTrendLine",
  "BindSeries",
  "BindSeries,BindX,BindY",
  "BindX",
  "BindX,BindY",
  "BindX,BindY,SetChartType",
  "BindX,SetChartType",
  "BindY",
  "BindY,SetChartType",
  "ChangeAggregation",
  "ChangeLayout",
  "ChangePosition",
  "DecreaseDataPointWidth",
  "DecreaseHeight",
  "DecreaseWidth",
  "Filter",
  "Highlight",
  "HighlightNegative",
  "HighlightOutlier",
  "IncreaseDataPointWidth",
  "IncreaseHeight",
  "IncreaseMargin",
  "IncreaseWidth",
  "NameComponent",
  "RemoveAnomalyDataPoints",
  "RemoveBlankDataPoints",
  "RemoveChartTitle",
  "RemoveDataPoints",
  "RemoveGridLines",
  "RemoveSeries",
  "RemoveYAxis",
  "Repeat",
  "SetChartType",
  "SetColor",
  "SetMark",
  "ShowColumns",
  "SortAsc",
  "SortDefault",
  "SortDesc",
  "SwapAxis"
],
  words: {
  "<PAD>": 0,
  "<UNK>": 1,
  "<measure>": 2,
  "<number>": 3,
  "<column>": 4,
  "<value>": 5,
  "<date>": 6,
  "<color>": 7,
  "<string>": 8,
  "<filter>": 9,
  "unk": 1,
  "the": 10,
  "to": 11,
  "chart": 12,
  "charts": 12,
  "charted": 12,
  "of": 13,
  "in": 14,
  ".": 15,
  "axis": 16,
  "change": 17,
  "changed": 17,
  "changes": 17,
  "changing": 17,
  "from": 18,
  "a": 19,
  "an": 19,
  "data": 20,
  "graph": 21,
  "graphs": 21,
  "graphed": 21,
  "please": 22,
  "pls": 22,
  "you": 23,
  "can": 24,
  "bar": 25,
  "bars": 25,
  "y": 26,
  "number": 27,
  "numbers": 27,
  "line": 28,
  "lines": 28,
  "lined": 28,
  "and": 29,
  "as": 30,
  "x": 31,
  "with": 32,
  "total": 33,
  "totals": 33,
  "make": 34,
  "making": 34,
  "made": 34,
  "makes": 34,
  "column": 35,
  "columns": 35,
  "colums": 35,
  "colum": 35,
  "show": 36,
  "showing": 36,
  "shows": 36,
  "shown": 36,
  "it": 37,
  "its": 37,
  "on": 38,
  "point": 39,
  "points": 39,
  "area": 40,
  "areas": 40,
  "by": 41,
  "highlight": 42,
  "highlighted": 42,
  "highlighting": 42,
  "highlights": 42,
  "color": 43,
  "colors": 43,
  "colored": 43,
  "coloured": 43,
  "coloring": 43,
  "stacked": 44,
  "stacks": 44,
  "stack": 44,
  "width": 45,
  "add": 46,
  "added": 46,
  "adds": 46,
  "adding": 46,
  "for": 47,
  "value": 48,
  "values": 48,
  "valued": 48,
  "each": 49,
  "than": 50,
  "mark": 51,
  "marked": 51,
  "marks": 51,
  "markings": 51,
  "marking": 51,
  ",": 52,
  "size": 53,
  "sized": 53,
  "dark": 54,
  "vertical": 55,
  "put": 56,
  "or": 57,
  "green": 58,
  "average": 59,
  "mean": 59,
  "avg": 59,
  "use": 60,
  "using": 60,
  "used": 60,
  "blue": 61,
  "is": 62,
  "are": 62,
  "were": 62,
  "highest": 63,
  "this": 64,
  "modify": 65,
  "modified": 65,
  "clustered": 66,
  "median": 67,
  "scatter": 68,
  "scattered": 68,
  "remove": 69,
  "removed": 69,
  "-": 70,
  "gray": 71,
  "specify": 72,
  "specified": 72,
  "light": 73,
  "between": 74,
  "top": 75,
  "encode": 76,
  "equals": 77,
  "equal": 77,
  "bind": 78,
  "binding": 78,
  "bindings": 78,
  "assign": 79,
  "assigning": 79,
  "assigns": 79,
  "into": 80,
  "turn": 81,
  "turning": 81,
  "right": 82,
  "order": 83,
  "ordered": 83,
  "switch": 84,
  "switched": 84,
  "associate": 85,
  "associated": 85,
  "at": 86,
  "where": 87,
  "that": 88,
  "those": 88,
  "pie": 89,
  "convert": 90,
  "converted": 90,
  "background": 91,
  "only": 92,
  "plot": 93,
  "plots": 93,
  "plotted": 93,
  "anomaly": 94,
  "anomalies": 94,
  "delete": 95,
  "del": 95,
  "set": 96,
  "sets": 96,
  "settings": 96,
  "larger": 97,
  "lowest": 98,
  "all": 99,
  "more": 100,
  "increase": 101,
  "increasing": 101,
  "increases": 101,
  "increased": 101,
  "omit": 102,
  "outliers": 103,
  "outlier": 103,
  "got": 104,
  "get": 104,
  "gets": 104,
  "eliminate": 105,
  "eliminating": 105,
  "rid": 106,
  "square": 107,
  "squares": 107,
  "squared": 107,
  "filled": 108,
  "fill": 108,
  "filling": 108,
  "fillings": 108,
  "orange": 109,
  "pink": 110,
  "'": 111,
  "range": 112,
  "ranging": 112,
  "ranges": 112,
  "ranged": 112,
  "white": 113,
  "s": 114,
  "wider": 115,
  "dotted": 116,
  "dot": 116,
  "dots": 116,
  "me": 117,
  "?": 118,
  "brown": 119,
  "widen": 120,
  "horizontally": 121,
  "expand": 122,
  "expanded": 122,
  "stretch": 123,
  "stretched": 123,
  "enlarge": 124,
  "enlarged": 124,
  "category": 125,
  "categories": 125,
  "negative": 126,
  "negatives": 126,
  "sort": 127,
  "sorted": 127,
  "cyan": 128,
  "erase": 129,
  "text": 130,
  "colour": 131,
  "draw": 132,
  "drawn": 132,
  "bottom": 133,
  "yellow": 134,
  "trend": 135,
  "trends": 135,
  "trending": 135,
  "there": 136,
  "series": 137,
  "first": 138,
  "smaller": 139,
  "circle": 140,
  "circles": 140,
  "circled": 140,
  "reduce": 141,
  "reducing": 141,
  "reduced": 141,
  "min": 142,
  "minimum": 142,
  "purple": 143,
  "filter": 144,
  "be": 145,
  "been": 145,
  "being": 145,
  "left": 146,
  "leaving": 146,
  "leave": 146,
  "decrease": 147,
  "decreasing": 147,
  "what": 148,
  "space": 149,
  "spacing": 149,
  "spaced": 149,
  "spaces": 149,
  "bigger": 150,
  "length": 151,
  "type": 152,
  "types": 152,
  "horizontal": 153,
  "outlying": 154,
  "so": 155,
  "smallest": 156,
  "icons": 157,
  "icon": 157,
  "different": 158,
  "discard": 159,
  "black": 160,
  "same": 161,
  "count": 162,
  "counts": 162,
  "counted": 162,
  "solid": 163,
  "scale": 164,
  "donut": 165,
  "grid": 166,
  "grids": 166,
  "red": 167,
  "rings": 167,
  "less": 168,
  "have": 169,
  "having": 169,
  "emphasize": 170,
  "emphasized": 170,
  "emphasizing": 170,
  "height": 171,
  "heights": 171,
  "any": 172,
  "sum": 173,
  "rule": 174,
  "max": 175,
  "maximum": 175,
  "move": 176,
  "moved": 176,
  "moving": 176,
  "shorten": 177,
  "lower": 178,
  "shrink": 179,
  "not": 180,
  "title": 181,
  "titles": 181,
  "higher": 182,
  "except": 183,
  "rect": 184,
  "rectangle": 184,
  "rectangles": 184,
  "keep": 185,
  "keeping": 185,
  "vertically": 186,
  "human": 187,
  "<": 188,
  "=": 189,
  "woman": 190,
  "thinner": 191,
  "out": 192,
  "tick": 193,
  "dashed": 194,
  "dashes": 194,
  ">": 195,
  "how": 196,
  "box": 197,
  "boxes": 197,
  "car": 198,
  "cars": 198,
  "book": 199,
  "man": 200,
  "men": 200,
  "one": 201,
  "ones": 201,
  "most": 202,
  "instead": 203,
  "unused": 204,
  "shade": 205,
  "shaded": 205,
  "shading": 205,
  "shades": 205,
  "no": 206,
  "compress": 207,
  "people": 208,
  "person": 208,
  "greater": 209,
  "side": 210,
  "field": 211,
  "small": 212,
  "legend": 213,
  "create": 214,
  "created": 214,
  "shape": 215,
  "shapes": 215,
  "labels": 216,
  "label": 216,
  "labeled": 216,
  "labelled": 216,
  "which": 217,
  "ascending": 218,
  "asc": 218,
  "skinnier": 219,
  "diagram": 220,
  "many": 221,
  "slimmer": 222,
  "narrower": 223,
  "place": 224,
  "placing": 224,
  "placed": 224,
  "distinct": 225,
  "above": 226,
  "along": 227,
  "replace": 228,
  "replaced": 228,
  "display": 229,
  "displayed": 229,
  "displaying": 229,
  "displays": 229,
  "axes": 230,
  "high": 231,
  "largest": 232,
  "card": 233,
  "below": 234,
  "much": 235,
  "did": 236,
  "do": 236,
  "does": 237,
  "corner": 238,
  "over": 239,
  "bold": 240,
  "bolded": 240,
  "items": 241,
  "item": 241,
  "twice": 242,
  "gridlines": 243,
  "gridline": 243,
  "trendline": 244,
  "pattern": 245,
  "markers": 246,
  "marker": 246,
  "low": 247,
  "arrange": 248,
  "arranged": 248,
  "has": 249,
  "had": 249,
  "covers": 250,
  "covering": 250,
  "up": 251,
  "through": 252,
  "greatest": 253,
  "team": 254,
  "furthest": 255,
  "middle": 256,
  "mid": 256,
  "name": 257,
  "names": 257,
  "per": 258,
  "shorter": 259,
  "but": 260,
  "about": 261,
  "other": 262,
  "others": 262,
  "empty": 263,
  "descending": 264,
  "desc": 264,
  "decending": 264,
  "des": 264,
  "better": 265,
  "least": 266,
  "insert": 267,
  "inserting": 267,
  "entries": 268,
  "entry": 268,
  "organize": 269,
  "organized": 269,
  "organise": 269,
  "amount": 270,
  "amounts": 270,
  "apply": 271,
  "years": 272,
  "year": 272,
  "yearly": 272,
  "represent": 273,
  "represents": 273,
  "represented": 273,
  "representing": 273,
  "best": 274,
  "thickness": 275,
  "since": 276,
  "open": 277,
  "opened": 277,
  "opening": 277,
  "information": 278,
  "narrow": 279,
  "narrowed": 279,
  "similar": 280,
  "fusion": 281,
  "(": 282,
  ")": 283,
  "upper": 284,
  "deviated": 285,
  "integers": 286,
  "isolated": 287,
  "down": 288,
  "double": 289,
  "/": 290,
  "overlay": 291,
  "overlays": 291,
  "current": 292,
  "distribution": 293,
  "page": 294,
  "across": 295,
  "variable": 296,
  "variables": 296,
  "resize": 297,
  "lone": 298,
  "alone": 299,
  "rest": 300,
  "them": 301,
  "extreme": 302,
  "extremes": 302,
  "selling": 303,
  "sold": 303,
  "large": 304,
  "price": 305,
  "period": 306,
  "periods": 306,
  "under": 307,
  "long": 308,
  "stand": 309,
  "rotate": 310,
  "rotated": 310,
  "graphic": 311,
  "graphics": 311,
  "figures": 312,
  "figure": 312,
  "i": 313,
  "full": 314,
  "stick": 315,
  "big": 316,
  "follow": 317,
  "following": 317,
  "approximately": 318,
  "unlike": 319,
  "far": 320,
  "abnormal": 321,
  "window": 322,
  "behind": 323,
  "their": 324,
  "times": 325,
  "time": 325,
  "inside": 326,
  "swap": 327,
  "swapped": 327,
  "blank": 328,
  "visualize": 329,
  "format": 330,
  "gradient": 331,
  "image": 332,
  "images": 332,
  "was": 333,
  "indicate": 334,
  "indicated": 334,
  "together": 335,
  "update": 336,
  "exact": 337,
  "fit": 338,
  "fits": 338,
  "without": 339,
  "condense": 340,
  "crowded": 341,
  "edge": 342,
  "flat": 343,
  "circular": 344,
  "brands": 345,
  "single": 346,
  "original": 347,
  "rearrange": 348,
  "position": 349,
  "positions": 349,
  "clearer": 350,
  "including": 351,
  "include": 351,
  "included": 351,
  "includes": 351,
  "corresponding": 352,
  "correspond": 352,
  "date": 353,
  "dates": 353,
  "individual": 354,
  "individuals": 354,
  "dragging": 355,
  "drag": 355,
  "hand": 356,
  "way": 357,
  "give": 358,
  "given": 358,
  "gave": 358,
  "giving": 358,
  "straight": 359,
  "reverse": 360,
  "general": 361,
  "horizantaly": 362,
  "aren't": 363,
  "isn't": 363,
  "term": 364,
  "border": 365,
  "borders": 365,
  "starting": 366,
  "start": 366,
  "started": 366,
  "products": 367,
  "product": 367,
  "difference": 368,
  "differences": 368,
  "then": 369,
  "frame": 370,
  "framed": 370,
  "region": 371,
  "before": 372,
  "zoom": 373,
  "zoomed": 373,
  "longer": 374,
  "reference": 375,
  "references": 375,
  "section": 376,
  "sections": 376,
  "list": 377,
  "listed": 377,
  "form": 378,
  "formed": 378,
  "thin": 379,
  "thinned": 379,
  "re": 380,
  "margins": 381,
  "margin": 381,
  "frequency": 382,
  "frequencies": 382,
  "available": 383,
  "shadow": 384,
  "shadowed": 384,
  "unit": 385,
  "units": 385,
  "paint": 386,
  "painted": 386,
  "\"": 387,
  "truncate": 388,
  "thicker": 389,
  "after": 390,
  "break": 391,
  "broken": 391,
  "extend": 392,
  "extending": 392,
  "histogram": 393,
  "who": 394,
  "degrees": 395,
  "degree": 395,
  "based": 396,
  "last": 397,
  "alphabetical": 398,
  "simply": 399,
  "minimize": 400,
  "scatterplot": 401,
  "hide": 402,
  "reorder": 403,
  "indicators": 404,
  "indicator": 404,
  "portion": 405,
  "block": 406,
  "blocks": 406,
  "growth": 407,
  "whole": 408,
  "stock": 409,
  "stocks": 409,
  "quantity": 410,
  "quantities": 410,
  "table": 411,
  "landscape": 412,
  "look": 413,
  "upto": 414,
  "around": 415,
  "called": 416,
  "they": 417,
  "every": 418,
  "identification": 419,
  "breakdown": 420,
  "biggest": 421,
  "location": 422,
  "locations": 422,
  "structure": 423,
  "letters": 424,
  "letter": 424,
  "d": 425,
  "bright": 426,
  "part": 427,
  "parts": 427,
  "according": 428,
  "find": 429,
  "whose": 430,
  "}": 431,
  "row": 432,
  "rows": 432,
  "thicken": 433,
  "thickening": 433,
  "intervals": 434,
  "presentation": 435,
  "take": 436,
  "taken": 436,
  "took": 436,
  "taking": 436,
  "visualization": 437,
  "viz": 437,
  "vis": 437,
  "visualisation": 437,
  "convex": 438,
  "markets": 439,
  "closed": 440,
  "bubbles": 441,
  "bubble": 441,
  "pixel": 442,
  "define": 443,
  "vehicle": 444,
  "sales": 445,
  "results": 446,
  "ticker": 447,
  "curve": 448,
  "orientation": 449,
  "invert": 450,
  "inverted": 450,
  "appears": 451,
  "appear": 451,
  "end": 452,
  "go": 453,
  "going": 453,
  "recolor": 454,
  "models": 455,
  "model": 455,
  "taller": 456,
  "crop": 457,
  "crops": 457,
  "identifiers": 458,
  "nonexistent": 459,
  "flip": 460,
  "flipped": 460,
  "print": 461,
  "mentioned": 462,
  "mention": 462,
  "identify": 463,
  "direction": 464,
  "directions": 464,
  "beginning": 465,
  "began": 465,
  "select": 466,
  "selected": 466,
  "entire": 467,
  "group": 468,
  "grouped": 468,
  "groups": 468,
  "depth": 469,
  "key": 470,
  "layout": 471,
  "design": 472,
  "bolder": 473,
  "portray": 474,
  "performing": 475,
  "view": 476,
  "toggle": 477,
  "shortest": 478,
  "tallest": 479,
  "clockwise": 480,
  "outside": 481,
  "write": 482,
  "both": 483,
  "past": 484,
  "divide": 485,
  "code": 486,
  "coded": 486,
  "coding": 486,
  "later": 487,
  "thick": 488,
  "charge": 489,
  "charges": 489,
  "wide": 490,
  "pinch": 491,
  "losing": 492,
  "calculate": 493,
  "reset": 494,
  "provided": 495,
  "provide": 495,
  "exclude": 496,
  "excluding": 496,
  "away": 497,
  "till": 498,
  "just": 499,
  "another": 500,
  "company": 501,
  "companies": 501,
  "symbols": 502,
  "symbol": 502,
  "abbreviation": 503,
  "colorful": 504,
  "differentiate": 505,
  "categorical": 506,
  "user": 507,
  "users": 507,
  "earlier": 508,
  "level": 509,
  "levels": 509,
  "b": 510,
  "save": 511,
  "elements": 512,
  "element": 512,
  "repeat": 513,
  "style": 514,
  "alphabetically": 515,
  "exchange": 516,
  "exchanging": 516,
  "alignment": 517,
  "decimal": 518,
  "decimals": 518,
  "numeric": 519,
  "precise": 520,
  "accurate": 521,
  "imply": 522,
  "clear": 523,
  "mode": 524,
  "crossed": 525,
  "partition": 526,
  "dictate": 527,
  "interest": 528,
  "months": 529,
  "month": 529,
  "throughout": 530,
  "existing": 531,
  "comparison": 532,
  "wave": 533,
  "waves": 533,
  "slope": 534,
  "grow": 535,
  "linear": 536,
  "significant": 537,
  "regression": 538,
  "slanting": 539,
  "slant": 539,
  "map": 540,
  "locate": 541,
  "located": 541,
  "{": 542,
  "cart": 543,
  "compared": 544,
  "compare": 544,
  "weight": 545,
  "exception": 546,
  "exceptions": 546,
  "unusual": 547,
  "farthest": 548,
  "importance": 549,
  "downward": 550,
  "downwards": 550,
  "v": 551,
  "vs": 551,
  "collapse": 552,
  "collapsed": 552,
  "rise": 553,
  "rising": 553,
  "fall": 554,
  "falls": 554,
  "message": 555,
  "until": 556,
  "&": 557,
  "lighter": 558,
  "scheme": 559,
  "random": 560,
  "grey": 561,
  "little": 562,
  "interchange": 563,
  "interchanging": 563,
  "redirection": 564,
  "simple": 565,
  "percent": 566,
  "statistics": 567,
  "easier": 568,
  "limit": 569,
  "limits": 569,
  "brush": 570,
  "within": 571,
  "transposed": 572,
  "transpose": 572,
  "also": 573,
  "curves": 574,
  "representation": 575,
  "representations": 575,
  "need": 576,
  "among": 577,
  "jump": 578,
  "return": 579,
  "when": 580,
  "gap": 581,
  "edit": 582,
  "some": 583,
  "response": 584,
  "separated": 585,
  "separate": 585,
  "amplifier": 586,
  "chat": 587,
  "these": 588,
  "don't": 589,
  "dont": 589,
  "doesn't": 589,
  "multi": 590,
  "littlest": 591,
  "bounding": 592,
  "extra": 593,
  "description": 594,
  "nearest": 595,
  "database": 596,
  "back": 597,
  "illustrate": 598,
  "towards": 599,
  "toward": 599,
  "guides": 600,
  "guide": 600,
  "midway": 601,
  "rectangular": 602,
  "superimpose": 603,
  "rate": 604,
  "upward": 605,
  "upwards": 605,
  "input": 606,
  "during": 607,
  "multiple": 608,
  "oldest": 609,
  "eldest": 609,
  "longest": 610,
  "respective": 611,
  "would": 612,
  "students": 613,
  "student": 613,
  "depending": 614,
  "produced": 615,
  "granted": 616,
  "adjust": 617,
  "arrangement": 618,
  "rather": 619,
  "align": 620,
  "ax": 621,
  "axe": 621,
  "unbold": 622,
  "understanding": 623,
  "understand": 623,
  "congested": 624,
  "verticle": 625,
  "g": 626,
  "entirety": 627,
  "comprise": 628,
  "compact": 629,
  "shrinkage": 630,
  "modification": 631,
  "colorize": 632,
  "quadrant": 633,
  "darker": 634,
  "bins": 635,
  "extension": 636,
  "merged": 637,
  "equalize": 638,
  "isometric": 639,
  ";": 640,
  "cut": 641,
  "[": 642,
  "]": 643,
  "alternative": 644,
  "pictograph": 645,
  "ordenate": 646,
  "zone": 647,
  "heading": 648,
  "font": 649,
  "depict": 650,
  "numerical": 651,
  "stats": 652,
  "want": 653,
  "underneath": 654,
  "exceeds": 655,
  "spacer": 656,
  "decline": 657,
  "declining": 657,
  "reveal": 658,
  "reveals": 658,
  "kind": 659,
  "kinds": 659,
  "%": 660,
  "we": 661,
  "history": 662,
  "addition": 663,
  "overlapping": 664,
  "overlap": 664,
  "abbreviated": 665,
  "abbreviate": 665,
  "next": 666,
  "materialized": 667,
  "smooth": 668,
  "floating": 669,
  "choose": 670,
  "chosen": 670,
  "pick": 671,
  "refer": 672,
  "various": 673,
  "groupby": 674,
  "offered": 675,
  "offer": 675,
  "score": 676,
  "scores": 676,
  "recorded": 677,
  "record": 677,
  "report": 678,
  "reporting": 678,
  "transform": 679,
  "transforms": 679,
  "rewrite": 680,
  "orient": 681,
  "oriented": 681,
  "shifted": 682,
  "shift": 682,
  "previous": 683,
  "squeeze": 684,
  "girth": 685,
  "boldness": 686,
  "normal": 687,
  "lying": 688,
  "spotted": 689,
  "spots": 689,
  "rotation": 690,
  "horsepower": 691,
  "anomalous": 692,
  "peripheral": 693,
  "contour": 694,
  "flag": 695,
  "timespan": 696,
  "c": 697,
  "segment": 698,
  "event": 699,
  "positive": 700,
  "baseline": 701,
  "minus": 702,
  "comments": 703,
  "negtive": 704,
  "sellers": 705,
  "header": 706,
  "statistical": 707,
  "graphline": 708,
  "lne": 709,
  "negotitated": 710,
  "again": 711,
  "prior": 712,
  "fade": 713,
  "fading": 713,
  "gradation": 714,
  "own": 715,
  "owned": 715,
  "rainbow": 716,
  "avatars": 717,
  "resemblance": 718,
  "thousands": 719,
  "relative": 720,
  "share": 721,
  "silhouettes": 722,
  "visually": 723,
  "plain": 724,
  "customized": 725,
  "outline": 726,
  "purchase": 727,
  "transfrom": 728,
  "theme": 729,
  "filler": 730,
  "categorize": 731,
  "consumers": 732,
  "usage": 733,
  "vehicals": 734,
  "performers": 735,
  "picture": 736,
  "incremental": 737,
  "allign": 738,
  "newest": 739,
  "decremental": 740,
  "opposite": 741,
  "surrounding": 742,
  "surround": 742,
  "containing": 743,
  "contains": 743,
  "contain": 743,
  "template": 744,
  "absolute": 745,
  "digit": 746,
  "rounded": 747,
  "incorporate": 748,
  "true": 749,
  "percentages": 750,
  "percentage": 750,
  "help": 751,
  "cutoff": 752,
  "dataset": 753,
  "guideline": 754,
  "guidelines": 754,
  "parallel": 755,
  "wrapped": 756,
  "target": 757,
  "non": 758,
  "graphical": 759
},
  model_graph: {
  "format": "graph-model",
  "generatedBy": "2.8.0",
  "convertedBy": "TensorFlow.js Converter v3.18.0",
  "signature": {
    "inputs": {
      "words": {
        "name": "words:0",
        "dtype": "DT_INT32",
        "tensorShape": {
          "dim": [
            {
              "size": "-1"
            },
            {
              "size": "-1"
            }
          ]
        }
      }
    },
    "outputs": {
      "output_0": {
        "name": "Identity:0",
        "dtype": "DT_INT32",
        "tensorShape": {
          "dim": [
            {
              "size": "-1"
            },
            {
              "size": "-1"
            }
          ]
        }
      },
      "output_1": {
        "name": "Identity_1:0",
        "dtype": "DT_INT32",
        "tensorShape": {
          "dim": [
            {
              "size": "-1"
            }
          ]
        }
      }
    }
  },
  "modelTopology": {
    "node": [
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "44"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "44"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/tags/dimension",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/3",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose/perm",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/3",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_1/perm",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/mul/y",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/3",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_2/perm",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_3/perm",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/3",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose/perm",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/3",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_1/perm",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/Equal/y",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_2/stack",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_2/stack_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_2/stack_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/mul/y",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/axes",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/3",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_2/perm",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_3/perm",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "4"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "unknown",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "760"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/embedding/embedding_lookup/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/Sqrt",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "unknown_0",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  },
                  {
                    "size": "50"
                  },
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "3"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack_1/0",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice/stack",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice/stack_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice/stack_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack_1/2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "3"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape/1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape/2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/mean/reduction_indices",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/variance/reduction_indices",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/add/y",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/mean/reduction_indices",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/variance/reduction_indices",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add/y",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3/shape/1",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3/shape/2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/mean/reduction_indices",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/variance/reduction_indices",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/add/y",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/free",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "2"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/mean/reduction_indices",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/variance/reduction_indices",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {
                "dim": [
                  {
                    "size": "1"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/add/y",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/global_average_pooling1d/Mean/reduction_indices",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/dense_12/MatMul/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "64"
                  },
                  {
                    "size": "48"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/dense_12/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {
                "dim": [
                  {
                    "size": "48"
                  }
                ]
              }
            }
          },
          "dtype": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/intents/dimension",
        "op": "Const",
        "attr": {
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "words",
        "op": "Placeholder",
        "attr": {
          "shape": {
            "shape": {
              "dim": [
                {
                  "size": "-1"
                },
                {
                  "size": "-1"
                }
              ]
            }
          },
          "dtype": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/Equal",
        "op": "Equal",
        "input": [
          "words",
          "StatefulPartitionedCall/vistalk/Equal/y"
        ],
        "attr": {
          "incompatible_shape_error": {
            "b": true
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/embedding/embedding_lookup",
        "op": "GatherV2",
        "input": [
          "unknown",
          "words",
          "StatefulPartitionedCall/vistalk/embedding/embedding_lookup/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/Shape",
        "op": "Shape",
        "input": [
          "words"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/Cast_1",
        "op": "Cast",
        "input": [
          "StatefulPartitionedCall/vistalk/Equal"
        ],
        "attr": {
          "SrcT": {
            "type": "DT_BOOL"
          },
          "Truncate": {
            "b": false
          },
          "DstT": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/mul",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/embedding/embedding_lookup",
          "StatefulPartitionedCall/vistalk/Sqrt"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice",
        "op": "StridedSlice",
        "input": [
          "StatefulPartitionedCall/vistalk/Shape",
          "StatefulPartitionedCall/vistalk/strided_slice/stack",
          "StatefulPartitionedCall/vistalk/strided_slice/stack_1",
          "StatefulPartitionedCall/vistalk/strided_slice/stack_2"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "0"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "0"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_2",
        "op": "StridedSlice",
        "input": [
          "StatefulPartitionedCall/vistalk/Cast_1",
          "StatefulPartitionedCall/vistalk/strided_slice_2/stack",
          "StatefulPartitionedCall/vistalk/strided_slice_2/stack_1",
          "StatefulPartitionedCall/vistalk/strided_slice_2/stack_2"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "shrink_axis_mask": {
            "i": "0"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "9"
          },
          "new_axis_mask": {
            "i": "6"
          },
          "end_mask": {
            "i": "9"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack_1",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/strided_slice_1/stack_1/0",
          "StatefulPartitionedCall/vistalk/strided_slice",
          "StatefulPartitionedCall/vistalk/strided_slice_1/stack_1/2"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "3"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/mul",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/strided_slice_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/mul/y"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/mul",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/strided_slice_2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/mul/y"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_1",
        "op": "StridedSlice",
        "input": [
          "unknown_0",
          "StatefulPartitionedCall/vistalk/strided_slice_1/stack",
          "StatefulPartitionedCall/vistalk/strided_slice_1/stack_1",
          "StatefulPartitionedCall/vistalk/strided_slice_1/stack_2"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "shrink_axis_mask": {
            "i": "0"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "7"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "5"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/add",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/mul",
          "StatefulPartitionedCall/vistalk/strided_slice_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice",
        "op": "StridedSlice",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack_2"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "0"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "0"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/3"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "4"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/3"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "4"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/3"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "4"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape/2"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "3"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/add",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/add",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/add",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/BiasAdd",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/BiasAdd",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/BiasAdd",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose",
        "op": "Transpose",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose/perm"
        ],
        "attr": {
          "Tperm": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_1",
        "op": "Transpose",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_1/perm"
        ],
        "attr": {
          "Tperm": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_2",
        "op": "Transpose",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_2/perm"
        ],
        "attr": {
          "Tperm": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/MatMul",
        "op": "BatchMatMulV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_1"
        ],
        "attr": {
          "adj_x": {
            "b": false
          },
          "adj_y": {
            "b": true
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Shape_1",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1",
        "op": "StridedSlice",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Shape_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack_2"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "0"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "0"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Cast",
        "op": "Cast",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1"
        ],
        "attr": {
          "SrcT": {
            "type": "DT_INT32"
          },
          "Truncate": {
            "b": false
          },
          "DstT": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Sqrt",
        "op": "Rsqrt",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Cast"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/truediv",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Sqrt"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/add",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/truediv",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Softmax",
        "op": "Softmax",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/MatMul_1",
        "op": "BatchMatMulV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Softmax",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_2"
        ],
        "attr": {
          "adj_x": {
            "b": false
          },
          "adj_y": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_3",
        "op": "Transpose",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/MatMul_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_3/perm"
        ],
        "attr": {
          "Tperm": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_3",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/add",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/add",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/BiasAdd"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/mean",
        "op": "Mean",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/add",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/mean/reduction_indices"
        ],
        "attr": {
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/SquaredDifference",
        "op": "SquaredDifference",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/add",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/mean"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/variance",
        "op": "Mean",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/SquaredDifference",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/variance/reduction_indices"
        ],
        "attr": {
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/add",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/variance",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/add/y"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/Rsqrt",
        "op": "Rsqrt",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/Rsqrt",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul_2",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/mean",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul_1",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/add",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/sub",
        "op": "Sub",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/ReadVariableOp",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul_2"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/add_1",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul_1",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/sub"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/add_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Relu",
        "op": "Relu",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/BiasAdd"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Relu"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Relu",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/add_1",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/BiasAdd"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/mean",
        "op": "Mean",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/mean/reduction_indices"
        ],
        "attr": {
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/SquaredDifference",
        "op": "SquaredDifference",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/mean"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/variance",
        "op": "Mean",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/SquaredDifference",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/variance/reduction_indices"
        ],
        "attr": {
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/variance",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add/y"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/Rsqrt",
        "op": "Rsqrt",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/Rsqrt",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul_2",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/mean",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul_1",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/sub",
        "op": "Sub",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/ReadVariableOp",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul_2"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add_1",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul_1",
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/sub"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice",
        "op": "StridedSlice",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_2"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "0"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "0"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/3"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "4"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/3"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "4"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/3"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "4"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3/shape/2"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "3"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/BiasAdd",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/BiasAdd",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/BiasAdd",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose",
        "op": "Transpose",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose/perm"
        ],
        "attr": {
          "Tperm": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_1",
        "op": "Transpose",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_1/perm"
        ],
        "attr": {
          "Tperm": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_2",
        "op": "Transpose",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_2/perm"
        ],
        "attr": {
          "Tperm": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/MatMul",
        "op": "BatchMatMulV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_1"
        ],
        "attr": {
          "adj_x": {
            "b": false
          },
          "adj_y": {
            "b": true
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Shape_1",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1",
        "op": "StridedSlice",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Shape_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack_2"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "0"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "0"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Cast",
        "op": "Cast",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1"
        ],
        "attr": {
          "SrcT": {
            "type": "DT_INT32"
          },
          "Truncate": {
            "b": false
          },
          "DstT": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Sqrt",
        "op": "Rsqrt",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Cast"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/truediv",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Sqrt"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/add",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/truediv",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Softmax",
        "op": "Softmax",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/MatMul_1",
        "op": "BatchMatMulV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Softmax",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_2"
        ],
        "attr": {
          "adj_x": {
            "b": false
          },
          "adj_y": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_3",
        "op": "Transpose",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/MatMul_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_3/perm"
        ],
        "attr": {
          "Tperm": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_3",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3/shape"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/add",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/BiasAdd"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/mean",
        "op": "Mean",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/add",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/mean/reduction_indices"
        ],
        "attr": {
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/SquaredDifference",
        "op": "SquaredDifference",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/add",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/mean"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/variance",
        "op": "Mean",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/SquaredDifference",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/variance/reduction_indices"
        ],
        "attr": {
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/add",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/variance",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/add/y"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/Rsqrt",
        "op": "Rsqrt",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/Rsqrt",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul_2",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/mean",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul_1",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/add",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/sub",
        "op": "Sub",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/ReadVariableOp",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul_2"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/add_1",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/sub"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/add_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Relu",
        "op": "Relu",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/BiasAdd"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Relu"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Relu",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/add_1",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/BiasAdd"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/mean",
        "op": "Mean",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/mean/reduction_indices"
        ],
        "attr": {
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/SquaredDifference",
        "op": "SquaredDifference",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/mean"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/variance",
        "op": "Mean",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/SquaredDifference",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/variance/reduction_indices"
        ],
        "attr": {
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/add",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/variance",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/add/y"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/Rsqrt",
        "op": "Rsqrt",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/add"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/Rsqrt",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul_2",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/mean",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul_1",
        "op": "Mul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/add_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/sub",
        "op": "Sub",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/ReadVariableOp",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul_2"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/add_1",
        "op": "AddV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/sub"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Shape",
        "op": "Shape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/add_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "out_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/global_average_pooling1d/Mean",
        "op": "Mean",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/global_average_pooling1d/Mean/reduction_indices"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2_1/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/free",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/dense_12/BiasAdd",
        "op": "_FusedMatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/global_average_pooling1d/Mean",
          "StatefulPartitionedCall/vistalk/dense_12/MatMul/ReadVariableOp",
          "StatefulPartitionedCall/vistalk/dense_12/BiasAdd/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "num_args": {
            "i": "1"
          },
          "epsilon": {
            "f": 0
          },
          "fused_ops": {
            "list": {
              "s": [
                "Qmlhc0FkZA=="
              ]
            }
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Const_1"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Const"
        ],
        "attr": {
          "keep_dims": {
            "b": false
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/concat_1/axis"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/intents",
        "op": "ArgMax",
        "input": [
          "StatefulPartitionedCall/vistalk/dense_12/BiasAdd",
          "StatefulPartitionedCall/intents/dimension"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "output_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Prod_1"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          }
        }
      },
      {
        "name": "Identity_1",
        "op": "Identity",
        "input": [
          "StatefulPartitionedCall/intents"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/add_1",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/stack"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/ReadVariableOp"
        ],
        "device": "/device:CPU:0",
        "attr": {
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/MatMul",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/concat_1"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "Tshape": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/BiasAdd",
        "op": "BiasAdd",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot",
          "StatefulPartitionedCall/vistalk/tags/BiasAdd/ReadVariableOp"
        ],
        "attr": {
          "T": {
            "type": "DT_FLOAT"
          },
          "data_format": {
            "s": "TkhXQw=="
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/tags",
        "op": "ArgMax",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/BiasAdd",
          "StatefulPartitionedCall/tags/dimension"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "output_type": {
            "type": "DT_INT32"
          }
        }
      },
      {
        "name": "Identity",
        "op": "Identity",
        "input": [
          "StatefulPartitionedCall/tags"
        ],
        "attr": {
          "T": {
            "type": "DT_INT32"
          }
        }
      }
    ],
    "library": {},
    "versions": {
      "producer": 987
    }
  },
  "weightsManifest": [
    {
      "paths": [
        "group1-shard1of1.bin"
      ],
      "weights": [
        {
          "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/ReadVariableOp",
          "shape": [
            64,
            44
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/tags/BiasAdd/ReadVariableOp",
          "shape": [
            44
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/tags/dimension",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/1",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/2",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/3",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose/perm",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/1",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/2",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/3",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_1/perm",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/mul/y",
          "shape": [],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/1",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/2",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/3",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_2/perm",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_3/perm",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/1",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/2",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/3",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose/perm",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/1",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/2",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/3",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_1/perm",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/Equal/y",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice_2/stack",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice_2/stack_1",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice_2/stack_2",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/mul/y",
          "shape": [],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/axes",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/ReadVariableOp",
          "shape": [
            64,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/1",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/2",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/3",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_2/perm",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_3/perm",
          "shape": [
            4
          ],
          "dtype": "int32"
        },
        {
          "name": "unknown",
          "shape": [
            760,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/embedding/embedding_lookup/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/Sqrt",
          "shape": [],
          "dtype": "float32"
        },
        {
          "name": "unknown_0",
          "shape": [
            1,
            50,
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack",
          "shape": [
            3
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack_1/0",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice/stack",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice/stack_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice/stack_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack_1/2",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack_2",
          "shape": [
            3
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape/1",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape/2",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/mean/reduction_indices",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/variance/reduction_indices",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/add/y",
          "shape": [],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/mean/reduction_indices",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/variance/reduction_indices",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/add/y",
          "shape": [],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/batchnorm/mul/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_1",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3/shape/1",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3/shape/2",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/mean/reduction_indices",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/moments/variance/reduction_indices",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/add/y",
          "shape": [],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_2/batchnorm/mul/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/free",
          "shape": [
            2
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const_2",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/concat_1/axis",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/BiasAdd/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/mean/reduction_indices",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/moments/variance/reduction_indices",
          "shape": [
            1
          ],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/add/y",
          "shape": [],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/transformer_block_1/layer_normalization_3/batchnorm/mul/ReadVariableOp",
          "shape": [
            64
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/global_average_pooling1d/Mean/reduction_indices",
          "shape": [],
          "dtype": "int32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/dense_12/MatMul/ReadVariableOp",
          "shape": [
            64,
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/vistalk/dense_12/BiasAdd/ReadVariableOp",
          "shape": [
            48
          ],
          "dtype": "float32"
        },
        {
          "name": "StatefulPartitionedCall/intents/dimension",
          "shape": [],
          "dtype": "int32"
        }
      ]
    }
  ]
},
  model_data: 'AAAAAAIAAAAAAAAAAAAAAM3S7T5QCAk/8ihkvirWtr4pbZk9Stflvv2AIb1L9Am+16ZlPgTkpD7ZbFc+3lKbuhrKNb7Li/495RZRPqiB3zyaQjo9Jk7mPhnHi74zS8O9pbygvPWffz0Xaoc906PyvMfSaL75Pt4+unpRPgZBuD7VNXQ+i/RAvoIjpz6Fga2+QreePqjovbzoJWA+2C7vvFY+5j5FVse7FEe7volQ2L1xyXG933bMPng4773Llfi9ZbuZvsZBs76CxMg+hqQfPpl6EznR4D2+XTVnvnPjvT2nAl6+kEZlvRYtPb5vEZ89e+mTviYShLzEGIO+H+LrvoIKaD7jm489r/IvPuprEzzoCgS+K1sKv2y1KL5Oq1Y+icQqv13nSb6JFP69SZ31vqALFr1sspa+8czcPTDIiblpEWm+EU+lPSJ4Czw3zqO+fuZZvkpSAb+2/tA9fAhKvgoCG77cuJ++gLU9PlmGjz75vy++r8hovRuDlDzYIJA9tFO2PR/6ar5Dc1i7tA1fvjGNqb6loKw8V7F6PrLvnz2ltKC9xk2ivsJJBD9KeeA+xL6kPh27OD5Ohzi9Nsk5viZ/IT7K5Fk+HugovphRPr4M6Ks9miCXPnuQLj4fIZq+MOGOPrTrlD3mRPO+BY7VvjUelb5LQoa+HKEqPSlO/b1FbK6+wSBrPpfahz7XdZI+ExfHO+MeAj7pjnC9YO1dPmTh2D4WT9Y+q/i8vjdvUTxU0gA/wleFvngNuTzOgng+QepAvkE+qT06iCu+TJ9HvRTcjT3xiVq+BcvRPv7tdD4cy9s+q07GPmT3BT+42lW9clZOPIZ/7D13PGc+gFalvZYq5D5eTKQ8ziA9vccFdj4AdIs+hf4mvp7Qsr4PYoY+6DaTvunSiLtqQME9Rou8vUSXeb4GOqi+DuSjPoh3EL44aeQ+0BnIPnlCNL29nLs7ItvZvo9aur6xrxU+9t1APvFh4744/Xq+PRu9u1WTFL8Mqre+d7dpPYneZL7a9hU+SOifvlmMUL4q5Ha9VURAvnvEhr5VhYm9bYuvvoaTVT5WKte+cXb1vQS8Nj7qhOm+Rkzxvu3gtL6L8Le97hPCPoiSRD6LzR8+EvTdPYwyuT4AMZA9RuiLPujNST2ifm09PwxjvuGsjL3wnmE88W4fPiPzFr5JfDM+FNizPXacPz61Iiu9U3+ZvbzrkrsBKqS+hl48vhfSLr4ehvY+xFq+u0GqJL599/S+D/DOvYELWL6isYo+4VoovQx5lr7PK2++sG0vvvQ0HD4u1ZU+TDuSvuyUoL2O76++0WeHPtNzDj5gaAS+MBusvqFvkL3CPJ8+tZcZPpJCfrwX82E+hFgBvjBXyz0VaDW9BrB2veOe7LqKeNm9w2tIPVITqD3xdMu8lZYlPqaZtz0jTYc9hUFwvoTY8j5Stvk+esC4vs1kiz7uiK++xAQxvlJmK75DZaY9lGHDPhh1Xr3fkwY+9FwrvMAJbzzAuQM+1beSPtEUOr7CNba9xR6dPXjsJr71v5S8qVdfvrL/dT4f7pq+xembPs25I76XD9093p3evm66Wz3SHJ8+D2MEP64iRz5UcEa+SdaavlC6hb7B8qQ+UxcPPm84kD7DtzQ+Qtj6PcpdED7Oxp88juYVPrYnRb3QTlC+gGL2vmz56L5vnDa+HqfgviCSsT6lVqE+0iq2PjnnSj3ZfMo+AxQ9PibT9r17RtY7ar89Pb3RID4n782+Qjw1Pjioeb76qvK+4GM8vunjgD7RW/89jv6MvivpgT6LNqc9lc50u89KDL4tV7C8RdylvrJg9r0x/lG+PpeLvjm3rL7aJO++Xtu/vkAusb3LVYc+5uiNvko1nL5G8h0+MX23vNz5bj4QAji+iGOTvQ+cBb2QU3G9E+SwPBgbiL6jDEG8pLJTvY8GPz6qjEY+2H6JPsJHkj6ohJI+WS3HPfL3Lj48DTW+hPKAPldFuD7mEZY+/VjOvsYfpL58n6k+IUTKPo9KiT3jUrq+mTe3PUR0ND5pHk4++fwMvkR6+z05FAm8THIVvp9fpb1849q91gzZPrqpXr4/Xrg6tX/QvtsipT1oHkg+GomlvfjSKT7ZHqo+nBOBvdlRx75AkUw+PUDkPhZmgD5MTrU+38LHvg0ITz50XLK9cDhjviL1gj6Jd9s+gQUXvn53Ej6+pm++76k6vBqhdL4wBVW+qX3UPn+AJT6/i0o+OHc+vsviYr2Tpsw+jGPqPqnObb3YDpE9nJslPeMf2j5V80Q+RS9jPjFvqL5la1U+lRISPHcWzD5qqG0++6exPrp/iz7YCDY+jul9PnjqnT7Ks7g+x2aHvcx+3z79RCm9dUa2Pgq2ej5oQY+7oWEPvmmzFb7jzd++dArhPribKb1IpZA+XrCBvfdsaz7GiPO9GItePlR+2L1dUW09Nl/qvU17kT2D7KY91VuDvprHCb6Xmqk9d8+DPid0gT4jgKG+qLlCPSnThT7zyR4+xcMMPqQam75HD8Y+n8Kuvu3rk75iJos9ksK5PkXMKz505vw+uJhcPk91zL3FDGo95QY/PqOexz7XL0O+xY3JPhAnOz6NhH8+qr2gPHpWHz5DTTU9XU0cPo2qvb66ZOI90KLlPndCMj6AR3Y9DPyKPS9opT5jvjw+no23Ps6IvjvTLF4+G7mLPttTEL6hXx4+2EOXPrX6c76TTgs/5Bs0vncdUT5hcto9DqqKPhcHzj7VvVm+fRhJvoKOiD4meLy9Ejj3PpPUab28a2C+YMbbvKDNwj2VOj49Pj1pPIErkz6Z3Kq+YOeEPT5VjL4haj09qV6SvZN0Ar5L+gG+gi1sPhMKwD6a7Y0+B7F4PhSJnj7uyRw+Bu/iPiLFjz0yRre9bY8wPQwdOj4PLhG/GwM8vgLuDz6z2ls+UfFHP27rmD6B3S0+p5/XPRaxoL51ZQq+NRCjPhqUnb5v+9C+/REGPsK1hb3Hese+94iAPuDMnL1wlDK9NbqxvmXccz442R8+X/G2PgS8Hj1I6aS+vyalPlICIj76oKC+uCuQPlmOBL6eAoq+A8KAvkSH+L2mypY+ChoPPuREtj0Gdyy+oc55vqW4LD6Qu+g+BCZJPWcizD6qRcg+LhWTPi8+qr5pbp49wMyDvXjwIT5c2Be+3ktrvZNUeb30hmE+UDLJPFvr1j3tvL4+TE/gPjzUoT4PYoq+TSiOPkHwez4EHKC+gtefPdWTh748/HG+KIfWPvd5xz612hw/ReWoPoXoar0d1j8+PK4kP8WV4L10+Jm9s6wOPxOdQb4bnE4+H8pZPfpTgT6VWo6+hBwivgtN5r7EgXC+dL/cvlDYjT2R2SQ+0o0wvwx4BT9Ru5K98z6LPZRUx72yMse9WbzJPrnvmj74wnM+Z2luPqtTHT5Mb/A+mAygPjVE7D1M4N+9flD2vbNkUD68Nbq+8yeWvqSBub59wEG9D8jJPV++h74MbQS+UZYsvtW+Vr5K2GY+IQnAPgI9fT3/ujo+lajlPZiT5j2qb9g+UGwwvtqYgL2mS8881SOXvj2SMb43xIO+712ePppdEz43vq2+LbgBPVJFsL2pKwC/yG5zvvH9XD5pKwg92D1/vtrplz50DIK+uMaRvqBfor4GKi8+ivKGviYvAL7J+pE+xB5hPhFBxb4Nn6i+zN8TPjLqrz6KY8U+OZyMvtBrUb5kn8w+0rGJPaHppb4sSou+pOCpvrI+qD5kO6k+1gsmPrdelz7ftna+kbO/vnzSWb6h+Ok8o0g9vObPHD7+Svg9zYAqPdHjzjxwL+C+q0+LvjhtAz6iTx6+tGEIPlZfM77BV3y+ZcMAPaUsPL5abyM+NEW/vp/3kD43O2Y+WIaVvQl9lr21wWQ+XHrOPmyscz4ryGU+kbDjPn0DdjozJ3Y+Cf4aPmQmfL65fZa+7+2bPtNHVjyRM2u9g/0IPi7FgD7Kow09Uf2bPX9W5D62nfu9VgT+vtKCkz6pMRM+2DJVvld/Kb5k9Ro94jFHPpK1470xzGq+nb0ivt/P+D63SKa97wqAPnl65zqCh7u+4YOgPBZd177+mMo8/rACv6iXPzq8eVE+v0xWPrCipL5vdIk9fhtuPi6KjL7wJ4S+s+jnvmiZ9T30rT2+wDknvq7SlD2tR1s8mvAOvjl8Jb0YjLA++UXJPuLcu744ntm+R32rPjK5c774gyU+9TBuPlrMpD589+g78haEPBwcWr7MmNG8VaNlvpSsKz7xXnS9SkOCPVfYrj0AdfQ9O+rDvsgZM76laWu+8IN+PqkEAj/S9Rs/k4QRP4mm/r1OURK+lDWUPolE37uxY8g+mDqHvqP+C75Y8GE94suovLrwmT0ptsa+inqDviGHi72m0368FI/OvrD/r745BRc/JjogvQRfB76QFg2+Fp2pPmNqJb7k+s8+ywAzvtwaoLych/E91xObPUqROj7ol0U8kjGuvpcjFD0vNpi9koj8vSaemT5TZzm8yiuOvpLuA75NdxU+UaHTvr9H5L5yNTO+XU7IviYW6D4vCIW+/VKJvjFPkL34d8m+pAJLPutZJT5dVHI+rCwxPWqbM706HkC+99bLPZCB2L2ectS+/2rmPZcEtj7RKuc9SAElvqA+Br6D9ji9oqrAPny8zr5x7bY9QseJvm7h971g8wc+WYSXPqBgnj6+y/u+dULkvbsZGb7jB1i9PQC/vo5xMT4Ef3U+zZeQvtADhz5oZkw+IHZaPpFLgj51SIY+zCmLvdN3sj7LyFm9i5XQPkHu7L7T0py+Qa5bPHQwqD5zQO89KvDOvsT89ryqdSy++Z2svsKWdT4FjHk+4b45vmtPtj66Us++E4+4Pmswi74l7qw9SnXwvtuqOz5Da48+6/xIvvsnDr6qp5g+Lp+gvh1s0L7fuXq+/X9yPpK/PL5v4ZE+ynbFvoUwiL5ynvu9GE25vRYmrL7Cv629dwFUPi9tgz3vDPo8bGjWvkv0zT5oMFC9ideGPmxTz74hRr2+SpmHvknKfb4GtqM+N1jCPsPwLr5aVuM+cMs1P5dcaz7fQgk/G8uLvgw3AD92etm9blUgvl3XfD6EFVY+AuGLvVteGT/VSVG+fX+MPj1vLj7y9XS+oHjtPa5Gzr35HM07mxWzPgTXWj0QtZs+gzFCPQ+4Mr5u+kG+FgKGPYR8Nz2MEtw+LECIPsMh9T2dm5y97wl2vQrc3zzQ2Ly+rkj6PsalFj+vnnK9demPPsjKtz79e6++TV8XPUMLO750Mpa+H92ZPXSyrT0VxQe/ccJ8vkcTCbuS30w+hR+Wvl/DgD4d/se+NoazvglJYL6qQYk+anRfPo+6Vj4TnYE9F3ZqPjo9qz5NJfA+ANBWvmOFiz2yw68+Qj9Qvg3Rhb1xr46+c/pkvn9fbT7xmcg9im2DPt1RAbxL5sk+XvKWPvuluD7wXoM+fbljPps6TL5hgIW9ad6tPnMQmL4eEdi+eEmzvbYg8z511cA+NiXuPtrD8z4ENJQ8diACvssghT1Uu3G9+9vdPv6s+bzaQPi9bQxnPoqF5L3Het+8RVd7vnbUZb6mnKM+1pwAPmGbb752Xr0+tfEyvlh6Er1UKIE8IEr8uREjWL4Q1hI+7padPfrzh750mpu+wcUHPleZNz4pJZI+VWsOvrbIub0IZ/c9snZcPfpJ2r3Tu5U9kNR6PnHFLT3Y/t27K6Y3PoiHlb6KG4q+ZcHnvn3Dwj4MxGO+XNxsPkHKtD7CU2w9hT7aviISNz5SMbe9re7rPQkB975LpFy+ePUXPiSjb708B849qHqtPnwaiL5vQQO9tS3IvjLOmT3KooC+VJNMPbM4UT5p+jg+NWTXvkLUZL4vKU+92mJSvsbGiD6hD64+We6APiYv1rxqeA293gjRvhvTlL0RH48+Il1ovdB7Mr65WWS+ER+7PjQE+75y9VW+6UWTvhgdMT9Ki7u7MzTUPoSVyj2S7IA+aCZwvt9ir73EQog9tYs6PvSTCr66UhU+JUzxPqV8yL45BF4+Yi4BvfzVDr6Zy4G+hL8Fvyn8wT78qdQ+X+Xsvbs8Or7e+cA+w+StvoitGD4tZ4U9pkE7PkZdOj67xhQ+li4EvgAP0D5tFw895yiLPvNTQj4bAo28yLMevnd6cb76QEe8UNfCvd0MEj4GFk29AUE0vni0/74q5Fw+jlz2Pcy7pb66oyY+4HqTPtmY/D0in7G8k8chvtiky70VIpk+g3JMPmk0Pjzpx8s9zaGEPSHNmT1QSES9xjnBvSefpr7nWpM+7FJRPr4t3L1Td0K+c/+XPk12hb2KKvW+fF5KPW4ewT2BzLu9lDVtvl8k0L2DToO+B4jMPhvQer68Go2+50R6vgofVb622Ta9CZczPslYtL4WiX2+PxExPjGPTD4CMb28W13PvlP8xz6GU4O+dsWPvrzmBL+PE3c+n7s3PULBIT1cZ5O+Iymmvt3qhz7/t1M+dfqTPkDBAr/EBmq+dymDPl0AuLwWLgo+wBoAv1TTrb1x71a+heLMPW6YxD4nEga9n6mfvdJO0zxGTt2999MhPs8IwTt+a4s+SVDdvaCp4r2azYq+FABxvtRn07yqJym8BMaOvqcbSL2qIww9ciQtPR2qpT2kNJQ+aQ6TPu/w0z5dKfI9d5xTvuIydb5Lt0e8MtGGPpvhwj2PqSK+iROyvepHqT7LjvG+nSXTvsqNlr7J1c2++Uk5PraVJb4bjWk+ZxFSPnscQb6ie+a+4LKSPhXsHT5gr8C+5imsvmXqW74TxWM+OU+DPcIP1b3CF3O+YQrgvQ98+jzLdi6+Jl2BvurSE75l1Ww+BZNdvpKa/72esmA+a2lrvdWZi74P0lG+NfZJvjxZTz4x7JS+uv/gvkiYaT7tCaI+5tyfvKa+Ej6CJOW+1HMLPRdV2L51GJw+I5qfPh3gHj1o23Q+x4Wyvk7wzz1qr9I9wmk2vhRrnj4waok+z5Savna2oj6rcYe+EqA+PnRit74mCe2+9fSmPScSwr2VOam+1XuUvumFOb66W5Y+yRaEvtkWYD1wlrS+rqLHvgd91z3VKCS+38xXPsWeC77oLKA+umWkPVjb8L0Yz629j4mIPqrw2r3NLZI+qm3NvrCImb70HiE/mqkWPjARAb+fAzy+GIuEPTzQED7l5Y6+Dx8uPFRz1j2VD9k+L85wvuZzLr6LmDM+vMICPnUy7D640L881efEPsZiV72ubaE9/A3+vG3v8j2C1Gk8LHqLPj3eTz6pwd2+vscYPrpZxb6Scqs+SUIePsn61T5/GNA+PJFXvhrFhj5q7E49/jBuPs0Dpj0TqWo9EtGcPYWmZD4r6I++TUAlP7b7Pr7UkiE/NQPfPTCmxL4+qle+zwePPpWXvr3BBwG+g0bPvfkXbr5Kkgg/ztBtvjGRzD7PZm6+k8pqPqetCL6NPaM+6NKFPhL34D3ncpI+eGChvGe3AD/HslG+vCx8Pd5viz7mfJk9s6CLPtIHn708QTs9rTEtPSAGNr7BL1i9+viNPsQirL1Sa1c+UyJePqCzAr4pjhI8qgghvUtPKr5UNvy9DtmOvdeo2j4ze7G+6ViVvdvH976oMwo+fVT0PmqwOj7mFEo+wQ7nPOwESr5c3+W9cw08PlkrK75LO2q+G4mHPkI8876omQq/T20/Pn16CL5BUes9YTSrvRN9XL5CjBg+XLMBvud+tb6vGdu+zJaqvnm4Hj6DKJo+Z8TaPoWCpzxm6SS+D56ovuq2ob1LoX6+kqAAv0Fmyr0wC4e+NoWcvS4HDT6CYK2+Gwg4vmHnIj59VhI+PYaMPmjBhr17mFO7e+nqvASwKj46bqi+ztEqPtfJo75H3Z0+hA2Vvgukh740tIs+Zm3MvTZ6pb5SRok+u/wbvUs1wT1rv1q+wOwVPhOaabzc6a68BACGPgdeiLxsW2y+YAGUPbSC3z7e7di+PqhLPn/8wb5WDpw+Te78PaflIz67L8c9THBdvUvIaT6yMre+XqIGPmLgFz01YsY9fjIfPTKEBT1KuCa+kkG6vSomnL3GsUg+iOAcvQBMTr3wyyq9dYSvPlJNej7HQz2+xKiwPSTjYz2BVKw8OWiPvZwSlb4taoG9NTi0PlwtO77Jebi+9Je/vuqiHL6b3n6+ZaF3PiSVzD2x+9M+sDPXPrjLYT4BG98+U295Pg279r7LrQ09JNOUPrrQvr4AWLU9xoxTvPRb3b0IJ4y+hgQ5vtVVrbzwWcy+4JcfPa8phb5OZpE+jOuevuP0Db3d250+rM7SPqBZIb62nwI/HkpFvsWV9b42u4C+lu0lP6IR3r11S+G+xg7BPH+gkb4JSZU+xFMJPebTqr3ka1S+Zt3XvbUjjj7+KlG+eIGsvrPYGL15l0O+0FKJvkPIJD6Qp349ffiFvKVqCD9a7sA8BmjLOxQrgL4HM5k9oXyFPbxvEz61JjW9iaygPhJXmL7V9cw+vU6sPg5R4z3RtgI/rYTIPfyCcz4jy3c+aWOuPpgYQb0D2Py9WPrCvsKknT5wLRI+ERCYvhIe/j0epJY9IcbDvkqMqr33N5s+555wvqWGzj5e5Lg+uuOMvkyOiz6AY3++BT+yvl2IbL4PrpO+aTEfPpzPN755Hky+ls17vklunr6uN4C+2p0zPsMNmz3gG4w9v7GcPiWBnD6D3F+9ZwiuvpA6bL6x9ok+4tQwPrXM4D7urC2+yuvrPf4cgz6exgO+hcHQPlm5Az678Am+LO5YvgU+Or60Pmq8wYRsvkEalb74B5C+FS/EPV15pr3UbeK+pxyRPCDyfD7sjJ072F2ZPukeVD7H8o++PO+Zvu0fij6uzGI+M2jOPlQSvj4TOTQ+o8apPmuK9r14c6e+iTTZPvNuFb6YYL89ru+cvXxVhD4OZjm+v+9Vvg5zFb2zMVi+dEkWvlggNb7BoyQ+3gI+Pu0c1T6qQMk9thmnvol2yj4Xx12+fnvFPghvcT37ZJQ+5s/TPieCjb7ZAzq+X/GaPiltQz6K9gC/thnmPe05yz1+lqa+pgbBPTl73D4Qyao+99e9Pvi6gT63JQe+eXINvuWPmD0/1nI+XLL1PpTvuz5wQt0++smePpRSAr2GMPK9AQ9MvkhoQb7UNpu+I/2kPO+Zmz47IWa+f+GiPiVKPz7HeMm+FfMZPruPuD6XskA9WcWkvUYJt74sJ4e+ReOjvpu5AD3k/V++NVDvvb0a1D4pV74+GiquPdDB5jxNSQk+qS/0Phyrgj4IA34+3DeCPXQ6yr7ggU0+KT1CPtCOvb7l3E+++9hZPmdnWL4Wz4++MQv3vnD5ir00Tqa8+JYCPYjWXL4Pj3Q+D3kTPvyqur5soQu+BX4fvu4UbT7fygI+i6ENvkYMmT5zYZo+Ll7NvvVeIL45yVw+pzvHvnNZVr1rgoa+CSmIvlO/bj5E2J49I/yEPc7N7j2eE2W+japnvizMXL6BhYg+vK2nPEw49b52/sy90uD9vDF8Sz5SXqy+mgrKvlH8x77k6nA9gOGrvvJULb4lAZA+BQ+FPTHA0T40Mo6+63X8PljdrT49Czi+nT4FPk2Tc76rV/a+s7Ekv2h7zD7mlYq+bKaLvruDLz5wCbM+GuOuPB2W4j2n+/09DPutPZm9bL6bTLq8QeHVPfhLAT/ytIs9LBCWvjEWX72eUhg+nxGyvs1pJj77ES2+Xof6vcx4Pz0QubU+IFT/vv1miT4YbZE92PjQvnw1AD4EP8q+UrbmvYxuvjwCGSE+/wlNPN0ZwT30c6k+3V4mu6yEpDu/chs9tMtlPsJB/j1GYW4+sDKUvJOpq76eL+i9cOgJPllDTT6VdJS+tVF7vjVmTT7d+IO+3uatvvLDnT6yhSM+Pfe5vdyWmj7vmQq+IptevsA6Lj7otrg9BvIzvltdKL5KePW++57svgwT+jyE5jE+rxCAvi+Sq70qDg6+axQFP8StQz4ApEM+SdnYu8Uyrb4F/+O9caZrPvWumr7Bsc48ogp1PGUIuj7KSKW9phLJPjsU8z6Pgh2+jcWvvo5ltD4cDJ4++RzKPpmwOj4zLL8+3kSqvazHkb0hiZk+dgOXvldQFj6CKxS+3DIAvqwiBD4nYIW+m9BBvdtGkb6Z56E9eCnWvW+FHr4k1HG+dpCUvfD+vz2HBbc+u3dHvdIUorzzUj49DiZrPjk2dj7oUBy8BFKUvhhIRbz+Kyk+onGGPX+yzD46Zcu+T8iMPn61/L1u/za9OwTKvYbS1z4e4ek+ITDJvDbvzL7K83S+YrjXvYc/kzxdjx8+o7eGPdpj174dwcA+mD8TvrZ1Oz3Dina+JG5sPZfprD0RwOy9a6nbPUrTUr6JCBW+f/wjPhvyCr2XhQW9Gk0+PmsrtD0lO8o+wf6EvVKdsD4UYaa9FZSsPaY7Yj1KNbo9xwMdvlqUkL1pGpM+O1txve7aPb5buyI+camZPTwugr5inuS+jiiLPtWggL5x0S885v7APgLQST65D969ojBTPvqSgry++2m9rigcPgA4WDy+d8s+lhIuvDP4Sr4oBBg+2rz+vllytL6ZXxQ+7dR/vrIpmr0kObG97TyNvqVIkr74kM49yFHJPsRwNTz/uq4+/C78vf+NJ71GWLK+OHVnPhulN75D0dq9zFpdPlQz4D6QgRi+ZBggPiGGRD4mkB+/ndNhPtIRqz2pA2G+KYIqPjzzsL1b3ce+MK+5vpqQmj7Om+e8KMaVvOKxKT5qK+C86XgkvuVkTb4USt6+NZeTvlu+hz564jm+sxJ4Poa9mb4QsYS+TfUhvsWLu7s0y68+5mc2PoEIiL5UuWG+QbRyvQcX575p3Bi+bH31Pd2q4b7pmT++GZALPXhkj70wlTM+/hPRvt65vr51rzc87meyvoK11T57elw+zzKrPkNGxr4mia89akSNvaSVsr4Q3Ko+halKvQPjgL4mqOG9SyqJvgxdjLzy6tA+vFPIPb/Twb2oVY+9WPuovmKQur6RgxS/WwFmPDOgjj7lRD29ogxXPgS5D78hTB6+CyFcPhzKl77QsAi+rU+cvl0zD7yHL+4+ipZXPg6qoD1RGDo+sDlcPSoCSL3kgJW+I+hevQ419j3wF0A+yK2XPt2xN76pr8e9B0MMPhx59j0vr1a9EEDWvlDoMD8mALy9O6h0Ps8Yj76oUYa+XldhPITMz7sBlp290hDPvnFe9LwATAS99++ovp9iND/hIfe9k4EgvRvwiD6CObY+G3sKP8wkGj+pi68++GiIvmkK0T5IAQE+XQ3oPa/TJb7Bsu4+6rFkPrlm/z0eyUE+AMQcPvicm72+d7Q+82wvPg4nsr0i1Bi+LvWrPWTVPr4PzbW95iXQPu4x7DlMsA2/waTYPvT+Z740cOM95X0JvkPKQD4YNrc92F9bPtyR1TzsiuC+uQC0vksgzb5wN6++CayfvspCyb0aBIO+ku2Uvqfyjj5b9de+X6MyPOaQjr5dQaS98PhSvtQYUT5ZtDy8+sqOvhboMb+p3mq+WdugPuiMnzys2u++acfxvix8sD2N1mI+CUV4Pj4NczyqRmo8E5B+PoCIFD4XdvS9L2Qzvoir7b2oJ5I+dR/wPaTPxz0nVd2+RsDcvmb8/j1Mszc+IweHPkQTDT5cmHg+RYYivp01p76D/ds+U1kIvjY+hr76d52+gvtuPA36hb5im6E9ujyZvnx+dj79laG+jQSLvrI6ab4cYvo9XY1Tvi4U070t2PK+vv5RPuIWZD5gSSe+KEHsvkvMqbzxowW+2LCsvTHMCD4YQlO+XGarvQyBhj7uDBm+3K1NPsaT6zzE6uI90E9LPql8tL59Mg8+3pIEvoQWl70MJKI+o6UfPxtbAT1PgDQ+bMOpPh1/LL4QS6S9SPPtvdibnL0LlQ6+ymKivk+0qb72Kv29qinxPZkeqj1JYGu+fW83vnyBz77/HJc+CU6XvnRIor0ilfA9EcFqvoBSwj4WM7y93yqdPg5gFD4AU0o+WX0Hvjc5BT11zY6+VdRMPmu9gT7xC2u+BhO+Po84dL5Vaoe+yp05vRwxoz2Mmqc9J7gBPvAr/r26P7+9XNSzPrAJqz3r7Pq8TVJlPrdhoD4EEEI+N6iqvrfqqj7Ug/c9bx1Svgdcb77axks89aa4PWd8Ob7sp9A9trqyvuCGxb7y1Lm+ugwsPnVXhr6UrbY9x8mNPml9oL1P9em9L0EdvoKIPT5przY9hSDtvAfZnT0fvIe+WWJevqAPk75fwsO+Zn6HPsfieL6a8Y6+VWs1Pu8Og76sAg2+r5UIvrSzL70BObg+WG3fvpHelT7ahSU+JhkwvqVYSD6Pj5K9dQT7vsHdy70a9YE9E0fdvmojGj60B8q+K6GAPewDfz4pTHK+CB5lvjOeWT45ss++csqHvp5Ouj0ftlu+ypIQv0cwjD5bPXY+a6Tcvmewrj2T1Re+tBT9vuOxQTxbQaa+pcEivrhuZ77d9hG+GE74vtmYWL7WfA++yChgvEb6/jzV6v89yn2rviaoCb9IwKI8kQdTPSa+yT5wpaG+DE/SPh/WbT4OD8a+5gZ7PaGrTz68G/C9/FIMvnt9DL9i39S8WiSdveRgt74jhq0+llRmPVOywD3fEsM9wZLEPaW3Rr7RlMe++Y68vuODuTyUNcc+OlL4vRdpWLwWlqy+5uqXPcXBHjzTtxA9gaN9vqjN3j66pqk974syPJyuzL5HM8G+R4b0Pf8nA7/ctdy9PccKvl5hgr72r5O+CHOXuxzMS76kGuG97ep7vhStTb5WegU/2mCaPoraPr71rBW/zd7XPZ41ir5YtXa+sbGkPgKGMD4ZtRm+KpI5OTyci74zjQ0+0t6DvIBe5D5+HRc+7v14Pp5/872RnNI9iCtnvkB/Ar73lK89qDqOPhoKtj7UaJ293MS4PkqJtT6Haw4+5glAPkfZYDxnTZW+pKugvlTJlr6Vz2Q+dryZPuM0hz5EVi69e7XkvbTZQD5DZLy+dSAJvquIf70ED0u+5HQJPuQyKb5bfpI+8sUQvV4m7D7tmQa+a1gQPy/QNL7yxam+5sG1PoaLzT0aafG+UMIjvtKcE76ihKK9ps6hPonyRL6BfrW+l9WQvXxDkj46ZY+9xL5jvW7Whj2wEFE+yqNjvBsUDD2c1HS+gBoAvq/ZxD47vMI9YtuGPm+Diz7HlGY+rVKOvCrzY75cNaM+4zuoPiOMgb7/6Zo9tN9nPqH0qb4wTxm9Fd4cvg6zHT5EN50+9G2wvgUZQD4W1ok+0AAyvhgckb5juWG+0b7nPj00tTxwbTm+ntu7vDrtwL0e1u8+sFAAPrCNdz0zysg+Hgnbu1+X376vlmS9vTKMvhWQhL3tSh6+evNNPu+DzTyce5k+PZ6xvqX6273J55y+67CqvmzR/b5Rp4C9BT65vQi01j3ZPDA+bjXVvcW1wz2ps2++LJ9vPg8G0z1s1ya+u8XJviE89j5aesg+OCZrvo6WLr5aVRI/QhuSPpjFtzyghDy+p51Kvq5uAT+rM4e+3QxovkxyMD5f9bU+miGzPq573D5SlDs/ylAavk8S9L76sZs+UzIbvUiRQj4BOuM+W/KFvkAu6L03kK6+RaHHPuEgib139Ay9ecn9vQJGAD1wzqg+i4YAP4uRoz7dPBK+wxotPnx2E73Wpny9XP5vPuLA/T4um2A+V88Evjf+Ar6wPcg+hINIPgLsBz5zL0G+CC2yvlzoL75vzqW+vf//vaQMxz7cnGO+gaTtPq3Bkr5xRXs+Bw0YPklmkL2iBwK+bKqePmURj77h04087WC5Phl2/LyxQBY+xbhjPbIpp7xun8674/g+vhA04zt/tyU+hQScvumtR70H2gk9WgpevhiW970fWQS84EkYvv0T572y1kQ+JdwcvljDJT5DeFy+RtyIvhLhPj57BlW+Rv15vkJHnD7w5mm+tvuTvnbuQb6/nSO+ujqlPpYUp77UeMw9e4/AvR4l9T42Frm+YVDBPsFhY77aX7i+uRf2PY/2176wEau+qqbfPeJZrz2vdkY9Fdx8PuMJmD20cZ2+3o0fPn+K7z7/28K9PcSOvvIyJD5fu7g+U8z4PBwBdL4BXEw+cq13PoUJ0L4/JSe7OkFQvguxjr7AsUQ9bKl7O4e8Ez56rEa+5ap1vmCDh70ykre+oH1ZPo1lML40aga+GmMvPg65OzwyVnO++iSNvvf0Bb5F9yy+T8JcPpK2L77BjvA82LmKPnni67xZEqA+GjT6vTaECzfYEZG+8iSsPsYWjb4tFQm8NffavgtU077zu7c9gZ+lviHGBD5PuIa+6F+gvX6s677jKJi9dykDv+ToZjzP85G81Z8hvXjpcj1P7Xw+xecWvfMXub7yBhO/fHRVPvxHYD67a2i5B5JZvrTZYD3eObS9EqkbvZ8Wyr1Xp4W+6At6PXgCkT21eJK+Q1PUPsbufb3IKfu9Bsc2vkrHwj7CnXc876/0PevWA77qyOK+Sin2vgAJCr5WEqy+rg6nPg2Eu74gTg+/YWxHPj50xT6/kxW5/LFQPjUOwr49EWK+NJervpzjAzyI9zC+tDbcPosMR7wYEZC+ZjwbPs7IDj7JjKk++DTEvX2irD4dH+c+cxMOPFv/AD5x8Uc+IS1RvPiYgD7FzBu+jShkvt56xD1/6Hu+6ABdPcHvyD0yQM6+nM66vizNnr6pGL8+iMomPfWwrL7zkSI+p4FxPrc2vzy9oKk98ceJvdb1ET4Qf4s9O/6uvXstRD4hHRU+9BfXPT8ssD6O+cY+yXygPvLLRL5RX0c+gaGZvrYMDj7ayTE+yMWuvbpD0z5DBIu+1QAVPtOXjb0BMyy+oHjuvJYJVT0M90+9WUkYvtMk+r33H8i9f5WNPkhdb75BoTy+FZy1PuYAcj7+oMU+83gZPopCcr4lGAy+s0uhu+6eqz0Jboe+sci2PWzXCj5kQaa+gIcAPwrksb5L0v6+AdHtvqt4r74RtMM9464Ivnp0nr7LkdW9+vDVvsrOsL3kLKu+QhYpvkHpbb70Ygg9SK4lvXKn3L2xkvY+J6/BvkObub4kN0i+yRktvowagj1yOJY+I1X6Pc73mb3qf+S9kV2LPPE6hT7czOo9AAAAAAEAAAAAAAAALAAAAAAAAABeXyzArMgjwFLW+j0+4SG95VjovIWwIL3qQDw9Bq/ove1GkT3IjYe9N7WfvaR1L7s9tzy9fpfXuwobmr53No29PGhRvo2/9Lx3AGe9fkCCvCNbb74E3Ba+8JKpvbxnNL35dAG/L5sTvd035r3YTTm9MfjyvChu6L1Elh6+NvBAvnQKGr7ZyRq9E5YsvilyD71oqBS/tbYOvZTcz70GsIK+CR0Nvuldib5ZrUu+K3Qkvv////+xFH+93YfvPd+Fpb3qjsu9ED3APPkHj708qKu9P2MyPeL1qL1k5Zy9dzmmvQsun707YMM7mg0Vve0RgL1cvqA9lFSSvWUkZj2vDxS74I1pu1G7lTwA2e69MHuLvS42Q73hm089DKc2vTzcsT0vuZE848eSPEAbdD1btaG7C899vWi0rj2KCp49SEb7vGQK0r24r369gW1TvdbJCL3uRrk8+81APRrfAT2tHjq9l0AsvSwGgLvBfpg9K1CaPNkPKLzM1YU9Ezb9PbX/Z733gls9P7wAPqMAgz3djpy7C/IDuzGJJj1eVeO9vpDdu4jPszzglw4+fwIGPPG3aL0w83U9AAAAAAIAAAAAAAAAAAAAALovIz4P8yu+2kqRPcCFCT043uG9+wi4vQWt2L1psHQ+ufRKPs2crTzlcBW+HIq3vBsFs7t3io29tTcTvsZVET4LFhW9OBzdPZ5k5T390gE+djNJPjZ6Gj1qWQq+5+czPUECiz0NNqe+lzCIvi37Cb5lrsY96FZnvazsTD5UDMI9FhstPqf1LL63LEY7daNkPsyVBz1eW4i+hUn7PKGMeL0OO1s9Yep0PRhTxzvyb1O+wr8evNpc/L31HUQ+UaZovmZ8rb2gAwK+2dGtPZExvT0VoOC9uPslvt34qzwyl509WS9SvsDqcr5fEB6+bly0vcnQSD7Wh+m945glPZnL1D1fkva9RCo3PatYKj5upiU+Ba+Fvsr0rzwF6BO+8WuEPQXXD76x3Zk+FYiVvQKPhj5kCik+GGQAPrWORL4jTfW91dz+PK49iz0JvTS+bWuRvhhisb3W0SE9xZ+UPlFDAryiUS0+goFgvrvuWT7Yuhq9FtawPdmeWr59kT4+Cfmuvc2nub3GlyA+1QoDveiIFj7AfMm9axcZvmmfrz2Xkyk+UTLjPZB0p74UNrW9ga1xPH4ddD1zca+9QaXRvEekHD62Poq+b5yTPtpHEL677g8+UgAZPsFJED6RCKW6YoVuPepqVb7e8J4+YzFLO3gnEj5QjKY9vfYGPrnIoT1yeiY+4RECvsrmMT1Z1oE+Z6FHPiWSkz1rEEO+lPYrvvgWgb7RwoI93wUuPlbKMj4SijC+odbhPRYXXb277GC9O+FWPpjRvr2ys6i9+lpfvg7GUb62wis+c/aoPVo8TD7Trt88SENmPpJX9jsjsp8+5xMlvoedjD3MaVW+A0R0vnXN2T15eBS+/WNsvvU+y7zKYWI+623OPRYFIT7T31O+QbVBPqXqjz4sMYi+NJMlPpR1Az4la4m9kFmAPuFe9r2jV2a++EUYPpYCeD5KptC6uiSEPeBmTjuLFZC9DIapPUluxz2Wgku+XnojPmQ9rb12rNq9hp8mvj0VHr71Xgy+Ks9qPqHJHT7DSJk8+JAGvrTsQL6gb0A+TYaWPTQrcT4vaNG+MpocvnCYdb02q6g9u0HzPWBkOj4WDf05OzSgvcFdVDwh2T89GB+7vfZjGT5Uai0+yGRxPqyl2z0l4io+aSx3vlUqxD1mqhy9WiLPPAtnM74WHlo+8rcYvoHhHb5w1A0+ps81vvCQRT5DZII+QAStvaRcJr5CYgq+b40+voR54r2GTs49Tbnxu5c3qr0dDfG9w1ZjvvIzPrtY26I8fQl5PT5m071Ecc48n0cvvi7sQb4yeJo8yqfavV1KlT1RlZi+a2+EvVSZGrxOU4U+/yKCvrsxyTu+6q87QVOgPX98Mz4I6oK+tMplPg/6Bz6h3de9R3FNPdNEEL7oXV294JoOPp9d6r3wxsK9Wdw8PoAB8T36Po8+4vdZPiLEIj413hS+MZXXvchiW77z2jA+a9wdPYnPYD5psS4+7ce+O2HyST1oHrw9lGEVPk5mTL6C8om+t5TdvbdJFT5DbJ68Zc95Pr0vwr3hz5+98ThmPsPFI76pXig+9QJHvhENAz7Gm4e7JAiQvblzbj65nLI9DGMluhDvGL1+k4Q9sWVDvZf/H71W8I68k65UviON1T2Rp8+9zlbMPD2NI76SQqA9Px3FPa10m7zoAia+BbeMvsgyF77suoq+LVh0Pia7iD0po7u9ruotPmy9ib1zhh8+6wXYvdz0lr301iU+A88OvlEUtbysfGq+MBgMPZStlb3HQ0m9/UsWvt1Fbr7SFmg924ziPSDUhb675JE+1aEWvYp/cT1BksC9E04tvQMG9b3n02y+B82xvNNs3j3hFZM+UKUrPitfhj3Fw3G9VhgNviuXb76BJzQ+WJVMPgSQNT4K3QG8af3kvYnDmj3ic4W9DJY1vTsHML7U68I8UUqwvT7+Ej6vTPY9mKuUvfErUr42bXO+YC7SPFcnED4orWK+8uXKPc7uFj36Ywa99BaQvZtEGb1TxuS8Bv1qvg/DXb7fhh2+P4qKvcZzOrwur0W90wDIPU+il7ywIq+9bFISPuy9Hj0yEBW8roBfPpFxyD0qxQI8PX+IvUAB373Myhw+VQsDvrsZUb4C7Wa+UCPoPVU6BD2jgTQ9JnifPRdsBr2Uww4+ot3sPoS/fj4cPoG96LmvPXEsZby1BLG9MjswPuLZgD474Ta9kkeHvlgbjD5skNW9K/DTvUYw5b0X2sw9F1i5ue4M5L2ucpa9A+guPltEDz5NfkA+WGFCPlXK8b2aLKa9RUzMvZigw72OjjY+kg50vi65Pb5aDZS9O6BXPpJDcroQYYK9ixFuvpnTzD3d1x6+TrsVPnfDNr4YGBq9Y25hvv9RhT7Nfq09uxqTvrdXrDwTujA9M0SBvZ0mAr1PYys+XbvZvD58qT15Qwm+t7JWvlMrFbyZ4go9RoczPdCpjD2KbYq9F5uSvUBDTr7cgCU8pKckPrMwOz4ndmU+gLELPrGpcz7rgJW9hmNAPZsRsD1ZjlW9O9ykPEXNjr0E+4O+skDnvYYLw70iNIU+tSujPnexvTs0OlS+1DhLPoe2Lz5Bcdu9vC0VPeGbLz6Ituc8vfcEPhTE0r10N2M9wMfVvSgtUr2sPYm9Zlb4vJdr3T1h2I4+eCANu3mCLD7Jb1s7DZacvZBIR71IgaK9Xo6/vAn6+L2TNKG9XXc0PTZFbb59NZW8y5N8PXAS7jzXmeE9fOkPvvWIST4gBC09wjO5PctvCr5ISnY+kKpLPrnBYr6oi7C9UUBivtiJN76/Dck8f9ANvr2uGr27WXS+s7BiPqrTwL5EyQE+ZRIJvPhy+b3qIG4+HlOnPAUQsz2h+Rk9VKbAPd3TxD0n4TO9w94oPrRjEL42sly+Mye2PWXEjb4K0xW+DPFrPUZtYLt5JOW81NiIPvkdbL6ORmW86HK9vQgxQL0t+GU++woQvi+ZRz38eok9rTTHvc/u/L1YEA68mIcqPqJSkz7zJaW8dTOLPgnJVDxNPzI+mI7dvRXykzwp5AQ+LYy5vtoqibzPnhk+MKlcvedIET4sBqE+DWfQvWKAkLwk7WC8tLHOPEeycD23bwk+znaxPf7Har53HMi9Qc0ivnL1vr0C4Gi8tuZdvVu0Jb4NtEA64r+dvolXwLt0OBq+/ziFPfFFID4hRRs97CoePt0KVb5vb7o7ldbRvUfYYz5YJrA9ix5ZPfvv+bzu5fe9kwktvDH6vb0/AY49h6cDvj8rDT6hUy8+06VPPK07VrySzI48MpOQvg82Wj7/nAg+6tQCPfiwQT67O5I9uuQrPuPzG70VSUa+mxeDPh6z370wnUu+wHJZPYns2jxr8yy+930PvplmoT3UNfM9uZSEPacRGL4cW4y9bfXOPVsddb4lRUI+JE0kvsPQerz7Eu88XLm5PdsoQr6rpeo7AyqqPSNKtr4wFby9lpVoPZLSNT0ivdc8p2PYPT24ND4I+nC+ijxdvYExuj7dugm9enh3PP8bU77oJNW9O1KaPvmPhz5yjju+rdcLvUue0TxzjIS9p22MPieixb1P0B48wRchvjFH8L0eNeO9R50ivZr0870VIZm9M27LPVfuCb5t5Cq+F7HXPvEJjjysNou+n2CoPRzDpz1FMAw+Tan6vF8g/LsKhv480NYNPrLDfj0g2Us+6vugvRFzOL4cdDU+40gCPnix6b3bS4q+Y/kGPZXRCD7mTGu9X4QMPpwxCT2qEMY98wEsvYUFNjxQYJK+i5Qhvi+morxvOpC9BrZDvXlhFr5QXtm91FxYPkZNOj7YPca97XMqPvqP0j1BN5W9GeLOu5Ktbb1yQHS+2fiiPplOUb4ciCC+szrEPNwjG759IjE+kDKAPekNVT5UE5A95g7pvW9GLL64Ji6+SPBgPigUijxAyUS+gFLCvCAXLD5WlYa+Z3hMvl7I7b3hNlE+agEEPmhjMr6rl6m88ErhvZ0ERL4hmto9W7AAvt+HP76HgSW+q2WHPRTMc74Jjho+Tc4Rvkj0z72JKf48hfqLve+WRb7moRI+gXRjvIlz8b1TA2G9Dgxevox3OL4id8k88ASxveKEeD2CSlU+jnQSPinygz3xH4w+5xH7PTnBj73Fcxy+iSA+PhVOCz7xKFU+CuQgPou9zz1AQh+9BGO9PLDXW7yGY+m9k53DPROgGr4Gx00+9BZ7PqC0qDssYSA+XgXTvXJnIj3jsjA+fD6AvgNyWb7lDOW9OBrrPDxplb7Z4x6+rQ06Pt4zPzxrawS+AWGvPTSsjD1YY+29Aqc/PgDJED0gwF4+gUtwPeJEIT7fgPk8i76fvgKtKr7W3u08Th1OvmJAaL7fWjM+vhaQvYUKDL5bXfo9qAhBPm+45L3RJ9A9zAXFvHWRu74NedI8Lxk7PWNPGb3NtTA9LLVIvAVtlT33L4I+Wu+zOtLGHb4nnB8+2WYfvOiqcT03VIQ945KevaeKLD4zdLa9oK7JPbDkmL5ny++89Rw1vqHCEr4vG5s9qp0UPgK/hb2+rE09L6HwvTRgpz1w+zy+fuPCPOdy0z2h4JS+xs0PvtSUoj2Zob89AxoYPJAG8r1PCY0+BSU8PqRuDrww4oG97BGavUYKCj5/drI+PYdDPj+cqbxrBz4+Bu1iveiKYT2LMAu++Ml1voHwI76CGvs9V/0fvkq97T2Zgks958mQPtxnIj05eC29+v0Jvnqggz3KIys+joAzvhN1W7zcYoY8Gg4HvlgSn7zu5bw9xuZ3vkuVQjyDhvA9AHFivV/hez2J5IU9pknzPdzNW72IGW2+b5HTPfd7wTw1Z3I9qse7voQMGL4rB1G+hZwSvjLYdj0mnec9+bnePYplDb4In5e9r32dvb8SnzzhmN29kOC+PSq+A75QuTE9p1AfPsfkDT13Fo69Eu0svsYZlz5Uykc+unehPSYUW77K24u+JPafvR453b2Fm4G+mVIWvU1EIz5DdCC9wFSwvQ6WNj1RVBk+GBkWvjbIgz0jxIU+3ZYyPpnIdD7FGXo+EbDlPeqaszwlCYs+WnqOPKsc+z23w02+Jg6FPZ7iOT5clpE+trlfPvd1XTxoVoU9zSVYvne9ZD4eZLU9UzzbPQwnBb5dLgc9IQehvZGZ3LzEk/O9t7KEO1tdWTy46TW+GdPFvV9VOz6SZaQ+F8XAvW/iEL5fODy9t9GTPb8baL6tTM09rZ1SPgH4Pj5/UO88rVNNvqvfNz6g3hU9T45Pvn2S/b2W1w6+cGoOvkxDjr6VtC68JDtePtAlpTxTF7i91Q31Pcg8Rj5nVf+9U7wGPgXfJj4dktu81t0SPnTlojxy6wi+0/AqvvrQm73d8sa9xNgZPs2qxb1I0BM+7QeIvjUOqr3jqws+47qQPacP5D3YBok++7eSPeLfFz15ivU8vxgPPfKwcrxYaMS7TV7YPOIQzr22DZy+tszwPXmTrDxyKRk9o0R/PJJQsj3KUwS9kDcLOQz6gL10gkG+snFyPePWhT68Q/28Ph0VvlOX+rzSEF++KJkRvtiOkT2dGjc+Btc+PsE94bw9TQG9UpYzPmywVz50n7u8Cc8JPVGFJj7VJuw9Y5kCvlrhPL4WLCQ9IHu6u5kgZT0E+FU+8nN9PdUeCj47R/297KWUvfePQzt+m0u+Go8uvlriwb39YsS9huOsPA6SOz51Ray9yaJovnFrGz1x4tM9PSPFPbkNlr2Xrxg+GQA4vmTtWr3EA6y8KFOdPRbiZTwtZ0S+e3eJvlDELL7azNS9nv8TPu1VDr1Ez9c8tcYwPcdnf741JEY+I8NCvaYHgj6JpMi8G+sDvlZhGT7r7Fu8646IPXcukDvu6V2+YK80vlk9yD2jRFu+il4APn7B7j3s6TI+ppwvvR4JQL4ga8q8badQPsf/oj1+9aE+JYZjvkLOAr37moS7V5XivB4CSL7/r+Q9kCkovX6WQL7glyU+oCLbux1TTb4fV6C90YqMO9A4aL0/wfM9BD4Avg0bFb4oGCy9eQyGvjz6Mz6XrSS+tkAzvjTBtT3adWG9Bwuxve94pD3oWEu9xuaTPgvxiT22GGq9EYx6PT3zbD39e3K+aM0Fvvfq/DyVNxo+Z+mJPdofaT2XRzc+6pbdvZPKJD1ZB2M96Kr7vdk/4r3WdVE+9IcHvl3xiT1L+FE8ehudPaxqeL7Nqnq+L3Eivp+Y4r2h1OW69ppEPvv/yLz35vO9/dFnPuDUE75vh5S8svPsPUq5Or4jTV+92vy3PXGlOb0sdXC9VUGivYqDmj7ta8+9gS8gvv31mr1K+Ga9QlV2vpyuVD6r1es9OzUXPhMQPT6ZY7e+SuSCPYRuhz6z+Ya9HnOkvRubOb50VVG9VicLPg2k8TxUXAI++wqKvS/oeT6WY++9RvBAPgJs5L0xpoS+1XVHvjg6Br7UVEm+6MaJvkQetjwugRC913LsPRzkBD47hre9v+aGPSdny7v3BBy+OVyMPmJJZj5hgGm+uuiAPodXrL1F9YI9RY2gvkP7iz6CCnM99HJEvpdIyz3eswi+3uRfvLG0vz2n1Q++lU1bPht6nr0H4n69ChfSPTrqkz0Mx5c9xxE2PS8+KL5PcVA+WKyEPswyXj3o+F8+176EuZKRGT2WFz+7AmfpOy3yALxLnL+9OPkgPq8AGj0KH2u+T5OdPYAS4L0S+As+MLjUPXZ+Ir6wjYA9NrK4u7eeOb4s0AE+dOTkPRkH6j0RFMG9YwI+uhFrDz7rsDO+WetlvND1eL3ZZB89GJBevkfRbLzWygY9o2fsPE4qS76Vl9y992LJPS+YeD3KPlM+2ZvGPaoLUL5KOY6+UFwTvpXhoL3Tv0q+XHkQvlHsBD1njgs9sDn3vS43lL4VlYk6LcWXPfljAj7GVBU+8ig6PjCrlbrXaAG+0mgkPnci4b1EWmU9MoQbPOyTVL1QhxU+OPxOPt36q70Pew89CnlOPaN09j0yZlY+wjQLvsL+rb1grA4+axcTPi431T2SCgI+GWK7vTVmNL7iDRg+LPowvrBJSj52Piu+cKGAPWxPar3wMl4+1SMkPeuOOD79Yhw+GXFiPnNj/7rMUeS9g/8VvoEdUj4+nmS+a/tEvFrxiD69iPe8jkvYvXIE5j120gw+Foobu9G3Hr1Secw9MTmoPfNNjbzlA7s9TcJ0PQmXfr136dm9hCsgvYv29zwSkzE+8FBtvhgRwr1jKFm+VRYMvgyflL34oEM9ebJpPvJMIb2ZMx0+0QaRPS3Bnb3WXcg9EQZzPpM6d77vBxA9Nf4NPm6I+z0sMok8QJRjveyBND39mx+95SkuPRok3D1nKJe9c5IBvqtInr6MOS4+5FMgPucjbr2vqQ2+wJr6vf3qnDzMDUa+5MiWvoWV8j32h5U9cGqbPgnQTD1Gcai93n5TvjySGT2vPhO+CpO3vb3zQb4suS6+aLVRPmhKIT1B+UY+PhQYPoF/gL2mQ7S9a4BVvnSDrj3zzvu9A6gKPbWlD77c3pq8CXhlvYYTTL4vwgk+0+uvPFaR2b0LHmc+OIKdvW8WCj7YJyc+pS5DPs7CdT7unB8+lZvFvQMSsD0UKQk+CxdvviZI7j1vNTu+pzCtPMsUoTzgmGW9x+gjvmO4iT5TiFe+GgyjPSH5HrpYGSK+BjG8PZwjFL7XSzK+dJPNPS9I0b3ml9E9RL5KvgstNj4Gjyq+79olvoeKyz2YfBQ+v1/Tu/6txb358zc9OAetPdg6670uIgc+Wv2KO3as2L1/hK68d0zcO0mNpL0IUvg9itQQvWuI/j1VBDM+6JWIPanlmD3o5W29n+pMuCnGiL6dRem9Uwl1vrUydzzVypG+cYLVvaW/xL0kDq08fdcePcGWLD7c/rm87eilPqOR8zxw2Su+TdaCvHnCPL6KxcI+XCdXPM2Fu7xyMxm9pBftPdvHuzzfcxi+BdEJPOJp2Dpx2bY9or93vTsFMT7Ckmk+9I75vUivwz33Gyu77+0YvuiyNj1+Dh++LFGLvemgi76bri49Nw+IPY9WpT1mvS29bn0Ovv2sB75H/rC79r7tuxJHMb6g8K489V4LPvEFW74cng89Ns1LvH6Ly71A4zg8ckgdvhq1J73QQ0c9mq7EO0xEPT0qEYm+1NevvSut8TykiY87TFQ1PoRhlrwLmrS9rIIPPdW4xz0cbtu8L58UvkSoEb6mU4y+hNirvHW8pz1DrmO94bh2PvB3PL2/aG2+vPCqPiwHJ751uei8dwiUPZu7UD67qtQ8BPUovraYHr4ra3u8zw2gvHEHLL1gNmS9LdVevvSgoz3cwDi+BgbjvZ+AK716bO698u1UvtbcEL5zDhe+C5juvdGm6T2Cskk9+k6lPSnzQj6wdOO8sAMtPtNJBT6GVPI8HasRPoVcMD1XAA0+JzvJPUTOCr4yn4O+OayBvTRRSL7FoAq93cNfvh7hL75C2iC9Ow5avK+bsT6aiUc+dsPCPbS96z3vkrW60qzEPRagN77OEAw9N0I4Ph4Su70ODSa+DJRbPbSUpjobQQI+mM3CvSd3PD5sZy49FGE0vvN9Db3scyG+siPDvF7vtD1XyHU9BezRPatv8zzN2WK+CylvvrZ407yvWIm+pqpTvmYP5b35WTE+MAU1vS0T+7w6lt+9Yp3KvXqDJT42gsQ8IMfXPJORyT1T6pW+aLVvvbLQMr1JBZ+9bM0PPnln4z3W36K98Al1PdBDEz7QMIA9Jhe3vfmr8bzUir+8vJ9rvdXaTr2QYYC9+EMevjFSMb4Z8js90p23vO6CIz5N2zQ80ZmfPAjqHr6haks+PdJdPkNFfz4ziIE8PYIsPj0Xnb0ySYk+nay/Pb9rlj0VqIs+yQ30PInj47xpWmG+XhRBPl2CQr5xZtA9myFavl6QIL6xaeQ9hbivPTiVDT3ivzM+RFJMvuBFAb1h2I++HTxqPdjV1L2J1w6+8U5QPoSD8L13PYM9VY6QPhVjgD6Bde69ssqVPWExK75C6Ig+D7p4vlw/gj2KOui9vFu3PT8PZD3g9Qo9a/usvYhwtbswqti5YafOu/pOGD2Gay6+4rZEPrWs0L2RMAi+0ZusvNkB+z0aL++9fZ1EvrfJMz4Q4Ye9/89BvjSVLz4mIjY8lA6gPK97Vj40mDM+yJlvPGWKO733/RA+owabPrR/4L0nxai+VWIgPiYVqr3zqLy8zU/VvbJukT0gdBC+nsw2viLiCb6/JwG+MmgjvqmVNb7upjS91ViivXxTzj1N5OK9+e8ivl0pkb2RZVu+ACuFPkXilr5n/Fo9V5eZvlboh701vqg879Kku2VDvb39dri9G5FNvjr6lr18a+m9RLK1vdAHL75k7469inDjvKVILLtxVIU+w4nlvVtgWj51MiC+S5ypPXVQrbx5Pa09DJPhvcWEk74cX0y8A2o1vWixGLxPOvw9HyudPcs5JT1eOqm92jRPvoM3Sr7yDyi99ghbPvrL6L31xK288XorvskyQL4/eaY8+eI3vQbxNT5V9BW+gNbVvbXNNT6/IjW9t68Bvtrmjz7bcbk9MfyxPWKDyD1cBXo+ay8yvqh0nT0Uy429AJrfPFLXr7w7itG8Ul1tvskZEL7vHNG7Go2ovf12oj6BNfm9MDdmPnwRWL0Ivva9NJuavd5guT15Ec29QeryPcqFU76SRDa+JCFzvfkXC72ndME9fMyyvEyv8z0aJ0y9pKo2u8/oOr4/Mkw+LGBkvk5mPD4m9E2+aWNNPiFR/r05JXA+y1+svlDZCr5nf6u9XxLXPdbGrrySs5A9eMyhPU4hmj6zSbC6lJsgPg/LLr4rtoi9VJCdvLo+DL5RmEa8t6aPPaGTlr0SsO+9ke/8vUWACjwE7AE9v7mVvK/bcD7GhLK9vVLGvAd+FD4bG5A+vz8EPmiuMLyTyjq+H98xPhIHmT20rau9HHzJPcMgab6br2q+otaTvXcmBj7oVIK9ZqwxvcOCYr52Gji+ynNKvk3c/r0WOsc97qttvg/fEj4YRKQ9gxwHvmo94bxi3DG+KBN2PlOWKz46THC+poJRvjEYAT4zYcs9184fPj4bCb5Z64A9FSgxPryMkb0FY4g+7vwKvszqCr7q9Sk+g9dyPrhcx70lchC+4E/rvY0u7j2ZNYC+0HvmPJRIhztHQQG9WFPIPTGP8jy+Kyk+DTQePOEikT3kliC9A/c8PppQBD3kO969ZUOAPTd0Qr6aNlY+LihyPX1f9Dy3oao8nWNdPpVYUz6zaII+QUOhPcIBSzwknws+768TvrmHmjyvDvA9y1rVvFIa1b1b+Mw9Y59hPpxu0b0fYHI+2jIkPfKOUDyo5VI86iAevjM3ET7+16695LmTvbKECb3mSua976lhPDTbr70sAlg+LU0nvmNdEr1XcoM9al5BvjQ4KD1J3Iy+lFytPVh65z0pVxU+eWaQPvQRmT0soe88JVjrPBsyQD4gjB6+YTdkPlJnMj60Q5U9bzLlvQDiPz5FI949rk0SvsNhAb7KBxy+rac8PjPvUj7/mhE+QODlPAZWGT50+qE8l60LvgpNkT0H1d28U6QOviT2bL6Htoi9+9o+PgOHgr6ztUe+Mzz5vcblM779p4K9loqPvVYwkT5rru09K/CDvp8Giz72VWq81jXhPdbHm73ERQ++91gIPqPQ9D2Hnt892jvfvZHWCz6OzfY8dOAbvqW4Jb7UvxW+h0hovaCJrbs/yw2+ECTuPVM2ED7KyK47yg2zPdEjrD3UoBa+bzi+vU8aKj5HTlI8qvjvvaDwo71BzAg+bM9zvmfjo7ySADW+jWFAPLMfej35moK9r5MHvcTG7b0gUqK8Gx/WvVotqz2HrKQ9qdwsvjn85DzXgSm+YGwRvqrHjL7eJJ+9xcsJPgr9Bj5/zlG+8usePt+pcb4lAT49ldNDvhiMhb5LHB296I1BvXZJLT6ADS+9GHrTPQJgvz3MLYo+bvwjPgpOwD29FRi+yHV0vHZCZL7FHWk9MIV8PacPQr1S37M8rM1IPWLXWT41APW9IpiBvQvwG74T0Jo+S3IiPkN9nj2kFzy9rIEOPtfBR7u6j4K+02OBvWK67r0OLr+9kR+XviVhJT0ZD2g9Uk8cvkbyML4clCC+zPJVPuz3zT3NdsS8a3kXvZA6ED3tflo9x3+Lvh18Xz7rsu29d1sbveKDLT7L/QU+KOu7PRmcDT5NIxq+ojwBPj1K8zw1d5o+mmy8vd9SiL48Pds8uf33vFMdpr1m3hm8tN6ePvekELxZCeS8/c5TvdYUmD2wzWQ+QrcQvfd8Vb5kxrI9KHExvoIkwT1tmzg9RFX0vU2LDr4poAE+s0CiPZx4eb7Bpmy+p81Avhbc+D3Ktzs9u6fCva4GHb3OmtI9TARPvSWs8z1v23i+diHKvSldoz37jDc+sjuavcB8jb5UNzW+MuyqPY2aOD6/tmu+kx72vbIDZD3y8Rw+46oQPuM7jD3bYgs+NKaCPgHuGD7yW8y9V6UjPdQ3272gU2e+LUgbvju6XL2HEUK9rXG8PYAVh71GjxI+3FQjvgO/8T2yypC+WgkePDbmYz64Sz0+7DkBvmtE2DwZYDA+rThOPqyJH76B1kI+pwUcvr2fNz7KCp48WuyJvGlAYD5cs7m9VnpdPs6PjT2vEL49BcK6vERlSD7c74E+wdnHvYeCzr0A59E9RlQVvhj0YT5Jmws+xr1APLxAGj4f04S8j62HPsH7UT6N2nW+1HBKPjJ9d72Bsf49NjFhvg9ZJr3Jf049BzaQPU1CGj17BCc+BhqWPgztdT3elve9OuROuqAXOj2eY2a+0I8dPhjYab7aix2++6zQPb1OG76z7AO+ufiPvnpOqz04cBA9tEsJPTpQzT0C7CA+5OAFPmZCP77jh+i9TJqkPcXnMb3MHQS+Cc6Ivorr6zxNpwq+jPCBvX/OI75inpU9P8dKPXgPwj2czS0+wXfcPRz0iLuFB/g8sH4Qvj8yOj4Vo5k9nrGwvYbnXjyhbyS+OcUrvdTA7T276ME9DL8gPkbmBD4E3lG+hT2Jvf0Czr3aTPK8yleIPoOUFL6JsK68hOv2PPWuGT7T6I89zqdPvE7kMz29Tw0+zKACvmS+eb31Coy+DaVlvvg5Dj5ikRU+R88XPv5Erj2F18o98iYtPRqWuj37Teq9mWeGvsw+CT14ERE9C3U1vnNoDj5qaQ8+8q4ZvArCLD6moXQ9P4qkvXtuxb31YiI+aoYyvpXVLr6z4Tm+K5CNPnxjZj2FLhU+E3+TvRXqeD7O2U083UsePgkUGD63LPW9UEJjvV9QuL1lHMe7gFCBPe1bL74DnpG9hvcXvmgJbD7mqUI+nf1Wu2nBDb6V18C9/OvrvdRq3L0FP1k+1QA1vQpWuL2R91K+A3yuvTCTeb2qwC2+rOYtPrBlor2kRkG7cuoCPX2oibzbrAE+jrsyPQyZOL691DA9g943PZcWHb5/TwW+OctrvdYsLLz6Cma+hFdSPFffuz1DLLy8S/GzPe3J6DwBEta9Li+xPZdihz2Hdju+6PYbvsrQAD7XWSK+7JkivvIaV74KF368ijJmuzRyNjyJ4Ro+GKulO4mQzb0Vyy2+L3kCPutKND2/fXk+FiPuPS7I3j1jpIy9BdN2PdGnmj2e6j8+5M8PvsGsFr4GbIG99reaPnjKDz2Rd0O+12I6Pq69CT4uBYQ8vKMjPQndvjw+TQ8+TiuAvTGW8T3sMzu9gr0CPp+oM74i4BU8gjIZvuDUvr58yS69QDkbvos9gz5q2DU+ybaDPT38zD0tfpa+vA/+PTAVPb71ouA9+NNkPQSvMT4BMo2+2KcgPoAoNz7BTBY+8u/QvW549D2NVwc+qbnrPYVLtD0YC1a+O8EFviAPUT52GMQ7dmQDPjLohb6+l0k98XqWPWH+uL1fM1A+yEAVvqg+Ej5Hgms+dt4KPsF05b2rEQG+5hGxPTgiGT194jm+XhTqvKh78L3ZDW68+tyFPsCpS77ENiG7frR6Ppb6VL2TUas8YL64OkltJz0v3TQ+P6cOvVoJLD6D7la+D04svYNUWLzWzEW8Zrgkvo+CMrnKqzo+JmYNvqcrqr4TL2a+hvk8PtQnM74+iy6+k1Z9PcewAb5DXAg+/cFPPlWnfD3X8F+9uazuPVlMhz6RCpW8U/QYviCcRr7u8Ca+oav5vVYapDxWjUs+djf1vRtKubyi34U9BTsNPtZ4ZD5iQnY+9mbSPb9AJT609469UlCQvsycZj7d9rY8PhelPXEUHTzCYt29R8rePBO3Bz4dM+W9bDLpPApgb75vKY6+Tqllvs4KF73UlEI+As6JvVIhDT7mECo+RjhiPSPO5j17RmO+ZFX5vclBJz52nz0+9jvAPbRd171cmfY9MOpRPQozTD4jmOs9I53dvc2tpjyefYy+ETv0vI2FTj5iMO09faIcPl++1737NIi9QwQfvv5qHb5TH4++5TeDvS4aAr21qwG9T16Jvu37qr470Ce+rgIsvUkoXT6CTdA4AgoKvqSvoD2IlDe+/S/ivc5Fq7v/JP69Q/gLPmGuFjyRjNa9o5T4PYVyHzwz76C89BmUPtBrPT4+TbK9Ux0UPg0PCj6X9/Y9doENvu1hK73OlM691s3GPRiYDL2oLHw+6PBrPgrJirzDKlk+6E2RvdAqnL5N6GW+XhOVvdqVBT52z826efSQPUmZ8L1fy2O+vHQlPu1ubj46fmQ+WdPmvNMFl7t7+AE+d4yevd3KGD5KdgU9jAuvvX8tuD0DCqY9eoz6vBEr6T2HYSC9Jq8JPkn7FL78Mv4971GNOw3BND3dLyg+SkSKvf9ahL3IwnM+FjTAvHIFLD6iGjO96rxPvQoLdD6443y+fWqnPRRfQD5ZoTm+h86EvqFKlr4ZvSE+lTgePlPTnL32e548oKydPki/Hb1XmYq7PuEnPq4PK76u+3k9LZJvPf/NBb3Okp+9GVndvCmGtr3NGbo7J+GXvEXsUbxg3hA+yDervYv33b1uGRA+WGKVPQImt72adT09DddAvqTRlr2pu0Q+fawwvptBPD4+awU+K3FDPlp5VL5eB1w9v4V0vd0mXL2w5Au8B/AhPunvBzylNDq+en01PiVSPD439BI+5OStPE7Vcj6FvtI9mVkvvaHCEz5NpIq+RQ4Rvupah7x4/3g+FYlSPdvoCD6y/xE9HuOqvbS/Nz3rwUw911RNvpzgCT4H9Eq+88f8vbY0hb37BYe+pLWyPcmvi75MxLu9eGETvqmwCb6edYa+hlokPp7UYL1Hm0c9awXtvTNy872OBZe9eE3wPFh1ur3EX8S9z1anPef4vbzJsVK+jtZ3PfQ+k7108ze+zhwquxL5Fb4KS5E+sWJZvnr9Nj6si829ksmOvTkbRT5tBxa+uw4sPRRMizyDfLS92X7OukAV7rzW9lo+CUCzPVzPK77Kk6y9Swo+vs44lL1QmTW+efASvhHAfj7f2IG+fgs8PgyY+D2IThC8BAkfPq+OZb6+Ogi+WrErPpwWoT25v869A8T/vVxDIj6PoEO+8pI2vfTGWb0Zb3a98xxVvmzEAb7R1RA81OGZO0tTWT4buIc+MF8PvWBWc77RnyO+r60YPmwe1j2vsRa+874cPnHRjL3deHY9TcCKPQtq4zy/0Ci+axguO3/PoT2t6uO997XZvfYq/zwvPQ6+7s8fPqXaoz2nYg4+ujEYvkMfqD1LvLi94LE/PbnmyL2ZN/+9vthkvRjVW77JKBy9v+RkPrcVhr57aHY+V4JgPtKm1z0OuFo7V+E2vcYQkT0l+hK7x0GAPv3Uk72oYBo+hjozPpH7sb1PB489//otvl5X973qpeo9kufbvRhEVD3koYI9P4yrvXghc75qLpK+9ta7vdZ+1T0l6Ta+PuxKPiVU9Tya2Te+9q4Jvj6tH75G4E+91AwaPpTOAz7SwKE9ioepveI4dD3HC7k7/PUuvvDYvrzc6QW+oDxsPel5IL4WF08+n47GvYI+mr0ZiB6+JXOPvRdTT76xKoG8HNYYPfYVFL6gmUY+Y2G6PBK+hb5m4Ck+TWSrvHw49L1zza692dCKvoSPND4WaQO+DYapvTwvG7zrfym81M/yveLD3Lw5flM+zZprvfZgUj4lOkM+pNIuvgmDXL4oRwe7j016vFaF671zLLO9lkPIPZcRrb3anCU+U0yTvZ8/6rwk5A+9L1SxvEKTZT6Po0I+KuL8Pdoetj0eLn89OcrBPJfoGL0iZJE+87IEPjLsST2bRV098OUTvjeTrj3qVGM8xnDUvbp7Mr4/zV89dLmnvrgEIj5cIGw9bitJvod9tr1rXjI+SW3NvQVNBL1vSbg9/HjJvdVK4T1AaAI+0Zwwva6ebb2BDu06nQRzPh1/qj3wgOg9pH5AvqXABL5IkBe+M2BPPR9uSr48BYU7J3NxPgq6Oj12P7u9s44svgVFDz0akUm+PEIAPQAWfz0HuQq+5JoEPTjDALsUlDc++B7GvWSG6L3kuFy9rSkSPoezhz6RsxW+UDnivZmn5rxUiGy9zi1MO4PgET6kB40+A31lvTxhZD5WIH49huJ3vk0FGD4W8l09Eb0KvrT/GL40aRs+wH0fvqUYIj7vLym+ZtQZPsl7Z72S+fY8CB+HPoWW6D3GryO+Z3IKPeX1Aj4WkC2+3U6BPfYJJL3sfpc9+zoXvrcgGL61em8+sUgrPYuS/jxfK6m9tnGhPaOyE74tBIg9+COEvVrFAb7iMK69YmQaPlJ7Qr7/jc+7iWgLvqukFD2z4ae9pO+bPJ/6e725IFa9MeO4PYAYnDzITKq8ArpFPnFqZT7lVH69EfiBvhRMzz1oLYi9zL+SvRYnAD3GkFC+1e1bvrnj4bt3laM+nvwaPju5gz7uUU49aqyivc6GCL6SX9E9Sy7tvdir/TyD4yq+F3ldvnXjjr59kDW8ylPFvUhuAr4sdXY+rQe5PUwEmb0MOCm+QkVqvgnHH73FXCQ+QaKCPXSPhryG/xE+UlcqvuaP1L01ox8+LT2FPl2FIb1RkEC+cs9NviwBJb4k+CY866wTPsBDGT7fgB09h0k7vkp8FD667s89NOFrPqP6STydY2c+3qUiPAX9zj0RzJq9gMHzvRNsOj5kNds9uD8EPou0TT6NIRk+71FcvT9wAT3k5Yw+/1HovQqAAr7U66y9out3Pm1AKb74Mzs+T6EAvujXRD4Mci6+IcWYPvMkxj15YDs+jY5Fvaph2D1vAX++yZoPvjU9ID6rpQA+Ev0kvsb4174KTd+9FfQnPrjPDL6mV489NQpYPpexpz2m2O499N80vrDRW76LUvg9BVsXvh8D6bzoI3G9uf36vaDHBz4ZEAa+1UNWvsTVqD2/I6a8x3K5uxRHvTyD5jO93j0ZPtzEAz55cQS+kUeJPVjW2DsOnMk9l2xRPnNaUb4ZeKq9pj1VvTmDC75IL+890A6uvPRGSb5+2DU+dhKmvXp7Kb4/wAS+iVvWvdXiA74fxns9rp9JvkMcAD5Xvj2+t7EMviOhzD0LEKI9NHtUPj/Jor2YACq+P+iNPSFcyD31KA++0uAvvhsUbz4494O+EuA9vakl/rzI9D29LMMLvRWsir3L7ku9wzhMPrOcMD18XrS9xc6NPoLWUL3yDWa80YsqPoJPub1/IYu9Z+X1vV7Rhj2vetK8JvrvPXqHED6iXGU+w6NEvqkgHD01spM+jbm1vRRmLb7I9Tc+fU7kvRLtAT1ib06+xxG1PcKJA7wfUoq+pt0GPXjWJz5Minq+T26bvbcyAD4nEGQ8nUwivqueB7184Bu+nwVZvb2+kz61QwM+xO5MPVhUTjwVGC++xoP8PG7+OT3fkkG+XG1evkhl972V1nY+LnCZvSH9qzzY2eW9seMVvMvSrjsMrEg+qD1WvqvhAj5zvpu9spSKPcHSXD53N2o+IvVfvSq43z3Q0g++IlsVvYEUZr157Hc+0cUXPQ/E572wouy8/F2KvtNgPD4wfj4+vsSrPTq6Dz5eXlM+sYeTPdXrHr74c8892gcZPiMSZL6FL2M+d9gdvY1bar6QwwM+66C7vWPcFzymAZq9ARDkPSv73j0rtRm+VUOevKskQD5xq929auFQPQ3mY76Irtc9Qb9SvlDXuTx4AnS9dgo6veAaXL7PB829ZJRAvlHskD1K+hS+JaQNvqd2sL2BzeS9a04tPj9CrT23+j4+NhY0Pov/pb3c+sS9YxI9vp2U6j1iKhq9HHd3PtoDeD1yaGY9D5UcvvWfwzz4iTE9LiOQPnz1LLzbzZy9PufbPQNjvT3hjAY+wToxPoHCWz7bT0u83wHBPuKDIb7Vsj8+Am3DvPvuQ73juRe9XaeqvbbZhT6VmYy9r/PjPcMZZ77pDIG+cNsLvQXSK717QQG9AXMNvkRaBL5pT2g+07NkPgCjQ7pxILG9UHTZPfs8HL4n49y9wibYvRDbkb7jZQ69Vc8cvsp/572NDD49qkexvXjU9L3vXzQ+OuZBu+C5Rzw+fsk95nMTPguQJj2WvVI+TvIjPnRH5rw9RR+9L4JMPi8Wij4/kQQ+IKJbPg6NVL7AC7w9bdyYvj/89L1/Ybw9d0srPghogT3gSAs9o0yfPezMIb7Oodc9CNlEPdxHfL0mm5Q9dHwyPBYhNT4Sdw6+GVQrvV8zzr3kAQy8ezKevaWfGb7cs04+zg6Hvqjqsj0JXRe+gXapPeXQ7Tw7Fii+B3dEvlbPkj1OufC9mo1gvk5MGL6Y2Rc+o3PvPTOfOL4aQEW8esqrPebgOT6H+zO+mKv9PTq37rxePqm8JXPmvNY+Wj4arhC+iPzOPTZIFT7RQ+27sFJsviVqX76ykw++K/aBPYDN6z0gk5a+sxyKvvbY473tMQY+mD5UvtZGRL7YLcw9bBeKvg+aHj7rhIm+Cbp2PlGBLz2dMp+9ZD11vrJJT77wKU29dk1Lvu16rrz9JTg+stvvvVAemT4FSgA+xqaXviVCpD0H0gm+o3VGPr+j+j05qas92eXcPbiMa75EtL89xKUsvgt6Ij6YwEY9ZbnFu6kemr16NIW9jZJvvqkqur0gQVA+mO1IPoi5+b1AxQg+RPOmPgzCVT73Isq9LhKmvbodBj7h7Ci+m9EovVJWir2QXB28CYtfvWGk3Lw4b6E+AL8+vnxFAL7JxM292xnIOwZqnD3u6iK+CUEpPl8NUL6sRGg+mhZOvdstqj1Z0oG8bQmnPeqAzj2ZOwC+QR/vPX9MHr4u8tk7M22SvixQ7T3Cyii+gcZIvEn97b26/hM9HGOzPBKy1rvADzW+UPw3Phg2EztjWAs+7N+RPiQBAr1y6l89cUhJPkstXD7SKca96D14vrF5qr4+8409WwJZPQQfsr0MgEa91v0gvvp3cb1pJY698ynevLnei7764E8+mkwVPu4xOD7qJVc9aRlevs5oD7452yg+KCTgvQmtK74dZ0q+s+IaPp+9lb0TnAi9q+eLvuryKr6H/O09/MLau2xXSL7AJVA+CY1IvsYX0zqrCzg9nZE3Pe9qkT05DwO95Pgwvk26Yr7o2G89CALBveEXM75CKig9NM+UPtEpBr7vVHM+T3EGvrvIzD3lHJu9/lKuPUNjWbwQAzW9aXnPPLVoir6n1Qk+vyVMPTuohD4oFj69l0jkPSQtXj5rtQy93EXqvcRaHb0oce48eHjpPbHNer1tBV295INpPd5kVj71pCc+i6KMup1dBD7p7k09nNSMPMWmMz56+i89yukpPrPnmz1ePq+8TXxGPj7Hsj0E/gE9wbPxPXmN6r0NJTC+wmQFvonSQL7LtaY84548Phsnab1/J5O+YxcxPm4d0z3uYeK7WHcJPq/Fk77Dm4m+iT/pvGV/JD0hyZ49e6TVvT7Dsr35eoy+F18rvhYPxz1tCDI+v2/NPErOEj6ShhI++NMMvrThRT2BQri9wNsuvprTcT4mP3u9f1MIvAg5kD3qWKQ9ZBY2Pg97z7qTYa4+bY3Tu0Jy0rx4lZE97twTPniXijxKZnw8FsFyPvWsFr29fSC5ecXzvaKb6T3R8Zs+XWVwvukrDT7t6bO91/EVvholZT4yBBa9u97FPX+MITzEOTg9ALVfvdTfaT7VGvK8l24rPqMYRb6WbAm+GUovvNq/Dz5i6SC9AToOPVgND71icAE+bplXPMW1P77wGjQ90VCMvgoM5T1+Dmw9S+8kPqlpjr248mi9Jp68vWmPmD7bNMe7CQBbviwGtr2rfKK+PJsjPRrkgD6JZ44+X0IkPjvB771pVAo+LNPYvf+jkTyLFDQ+5GzyvTIhET4wOZg98aCOPcOfR77ltT++NRiFvj85Oz77fiA9vNzWPWZLrD2zGQc+2G75PL+FOr2s0eU8mulJvsP6jr3Rtga9liAKu9Nfbj49XII960wRvdy/fj4HJcu96HxBPI51pr3kQ+s9LwsGvluWKj6ev0S+zU04vkifpr0epqM+idCNvrojxj3vk0S9TNh+vDi+nT1uB5e9L8EbPYsdjr0QIhC88rmCvjlBor2H8b89MnpLPsItIj5V8zI9rd8rvmx6Oz4XjDi+XP4yvvLzEr4Edgs933oWvq++Gr4eewe+Cwo3vtXtbL7ZEio+xHAavoCsLj04dYm9FeVNPjaBKT1RVYM+o5QUPqPBBT4exgK9RqOKPvUQ87zMskA+s281Pt3+Nb4A7w++IOz+PYYEMT24awq+/susvchtkLxR90k9WX4Ivo8ksLyhdcI9g4QnvbZEMD1A9fE9HVwLPuwCKb1IpeM9Ca+evtjMKz1T7xE+v1xbvl5UE73pV4q98Sw+Pkl9ND4s73Q9Ai4/vfBL8z3QNpS8QLGWPYu76j2J4+I9bxcqvtSUKL42Oo09dbELPlg3Cr6Rmq89A7B/PQLMhL7fnwo+LdyaPRXTRz2LGEU+BP6VPQ/1SD6FK8a94EYHvryrCT7Tv4i9w+EdvovpX732wNu8BSlnvjWF672A74G9+kDtu0pqJz70BMo9AESTPgfRbj6Bx1M+t947vUuw5b3Nj3++5QeXve/eyj3MG0m+0KDoPYch0TzlSYs+Td7GPXdaCD4+8tw9Xl/avcBMA72dL1u+lQ/4PUOrSD61ZoM8ZYaLvR4D7r0vz/s9z9mJPbFBMz23HpY8jpoHvrLwV75d+Io+kpVFPs+gQr5SfLQ9d7J3PiNjfT5RuzY9HfmZvZY2SL7VbIu9D8DevIeJjL06iZa9sm4mPq5GOT67jgK+ke5fvkZSBryi1a49gmThPKeBMj6E4uY8B3iUvS8T3j3A31++ItpHvo4kDL78FtC8mkMOvrJOOj2QcBq+2nkVPl1QBr5P7AS+zFBXvopHNb6kc989l8M/vkbXYb1cClu+OxM3Pp2bIz4tl5I8GgJNvj5ZQz7ejhy7p8lyPvuHyD16RCE+fv7+PX1WkL2ujRI+a/CzPCPPyz3eY34+QEdDPYdywD3kSb+9ztdFvhiFkD3Vh1e+mVaOvke+Vzx2w7g9Iw5svLI/Bj4WaOS80x2bPa9pWT2bmku+Oz6vPCgB9j1Qbw4+BTc6PmC4h74A4gQ+VaaevZjLjr0H2NU8emr/vSrRMb6agpG8NCpfPtSsUz0Wry49duSHu833H7y81GS+qtTZPTZqoD2xfRK+rxHwPTqcHz6YZJM8c1ynvYd6dj0MV06+tnhTvq0RvTzutCk9n7wXPkN6471mog09iCqOvQiPRr1S/s48AILOPXTD7L31FwY+Ads4vpwUIL47Hb481RMvvrCJtL3RWHM+9rinPa1oh73b2GG+VvOCvmMpZr6tpwq+hoc7PciwXz7EOY+95z4lvknMA77ECs29kW6GPuIXuz0ILP6933hnPUEd2DzElkg9YK2bvJSJGr0seC++ssIjPpJJKj7Rl0Q++KBfPvT3aj4NiSc9wDLvPZC+S77CjwE7ZU/uPO33Sz0vyJ0+JH8Ivk5zBL1EnQQ+p//VPVXoUb2uGNQ9yZlwPRjoWD4/LSm+vrMSPm6THj06D949U98RPotlOb50mEu+/TwuPv9wwbzue8i9uc7lPIlecrzNa6G7J/CJPlctXb4iFi0+IVtTvuWZLz6JMzu+oTUXPiyah75plDq+2z58PkM8ID2m4h09kaKmvDF7s70qco49JzQzvjmblr35mVO9/1B8vQMFZj2YsPO9qGZbvfVPDr78WEC+fgHPvDNWEr3fuEw+L3zDPFtrXL7XGwC+7dmmvVh8Fr7GZMy9neZSvmcFtD2h7QC+DqacvgxSSD6x6wK+O31Uvga81D0pRS69rxwbPhi1WL4CXFm9qYwYPlbefL4jnH++4Pi4vQNFJz5qS1S+QwK3Pc7hCL4rR2Q+Z19aPBXNO77q0xi+DQnPvfBwAz3YNOI7I9t1OjJB/j3peAG+dMsyPbGRPj7qsYg+yKNPPfT9XT67HH+9RjAjPmDMrz1VADK9mhWZPj90Fz6PLV2+ys7gPGnJ+b3et5E+bzhSPgbROj7a7Os9iSSlPXtuJD5ijAG9frfbvIyPMLy8Elu9Te8LPh8LZr5LAoQ+wSRtvv2yBj4qRUa9fIfmvQaEjD3ClrQ8x4LivMl4vb2fFbm9NdZuPdNK9736gAS96oe5vT9Yiz2W4Sc84G1BvmToYb2Yqus9Nb8HvTr2Vr0FzDG+bKGsvD2Vlz2P/Sg9tPLHPXJKi74skY+9kvvjugFMP73BEny5LqWivmwYXT76mPQ91VM+PkwDUb2UY7e9I8gnPjEOWT5fIu29lu52vSoJG75r55M9bAMWPpaGPz11VRQ+Tg9dvjWqUb6DlU2+XDT7vNtzIL6DD4g9w9rSO46kqT3Qvds9qa2tvtLSeT47SpU9iqhQPpok7j34jeo961HvPKT4H74ydPO8+qzZvWNPML5nAO+9SR8KvmRB5Dw2u1K+E8oZPTEJij4AAAAAAgAAAAAAAAAAAAAAcP25vCfvZ71esa89H14DviTd5r23I3S+gI/Cvf0H+r1+dq8+eB4zvomQ7r0RqjS+rFVWvgNdLz7g9B0+9w5lPnEPzr1V+go+fhHYPR37JT6t4kA+clqnPPMbWb3FCY++zduYPdZnpD22v+e8ercqvssE5b3xeUm90gc1PsqBmD3/swg+YQj9PfVGUj43qzY+U+hzvqXTo70esii+l50SPi4iZb2PpVU+WIxavl6IZb6CSU49dEpEPbdjIL39GDO+q0kNvrjVkD3UlQ8+kZQ+Pn8TU765VoQ98u2LPibFfL0qvPk9hZw1OyXOkb0dDNg8S3EyvYXdpTyyChA+Bk5JvsU5bD477k89tAI+PoqIPz5zD6K8+FATPn2iuj2uYgW+mTU3PpSsFz6Gvro8euGVvRxL0TzDNJk9wYsXPtGR972wTwY9iKP0Pe556z0kT1u8/WAqvrTpgb5l5GQ9NE83vFmb7b26S/+8Mn/FPR2LHr547h48d1OHPjOIPr2O7hk+PZ8KPq55AT6PlOi9jwmhPR4hTj6jRW0+yEDhPTPcOb6byye+NRdavliINz12LFY+D6VDvv590r3p07A9JIrGvU8vNz6O2VM9ui9ZPZixtj3ZwMm92Y8pvuyJj71xDzK+Ty5JPm/PBjwRsVu9z/6zvRAXO70FJTY9WkT8PUWX5T1Qeao7zZPUPco4hDzTJb483DkHvnsTET4Y7HW+jywLvqtGyz0yjzW+ITidvRJGI70wTQa+Nx5DvKCFhL3haKQ9wNdQvZpmIb6bwRO+jJLGvdERAb0xzCw+4u8FvMxKFT7GiXS+BQANPluHUL7o+uS8YWQMPriij75EWIS+8ZDQPM82Hz6lPy0+/wYWPIxrlz33XYy9EGaPvZT4ST7Tmye+SM2cPeysFr4BFy84bo0VvmNJIj52uVg+M54MPm1fij2BxhU+jX4UPiX4AT6z92e+NVWBPt8e072rmMg+1QxxPbGtHr6VC3k9rPoAPvETNrw0gEu+ZrmnPZlMhz2b7Tw+ZfUNPmTRtb3pFy++K6RxPT1+PD54Eve94bV/vFpbsb087W096Hc6vq+tOD4v9dW92iZCPsabD746GAO99Mn7O5/5JT4IXoW+XS08PmvCI75Bb846hVcFPhXGqj1aIEq98kBfPoXuVLs4PVS9lcKzvbP5pr2mIP89/GYxvJwBCj5q6aO9Rmk3vpY+i73ghum9LIBzvaFAur1MPpk9Bfikvc4p4z3G6zc9Xw5kPR3MZ7spZzs9UfXhPJTzlj1Dv6+90E94PqL7dz5fPR890DToPdSnGz53r2e9HpcYvqLfn7ye4Yo+Cvt3vQsDIr56TQS+QWeKPb+bEL7WBAA+mUMmPTMFlbyAerw9bHQFviZG8z3k+h6+Z4DavYBrhD5NNaO8rztvvJD6Fj6gBNa9WOocvrGTTb5LUqC93igCvh56P75n85S9c8SivQ/WE77FB+C9T/MyPXOMkz1X5Ea99FIYPvP9l70ifIK+Q+6KvcKDWz7o7zC+T57+PUSlOL7BIYQ+uWpEvvLKz71UQlY9pQQcvhSEVr4c+se9PWAWPpMDyDydRbW96+ScPjbHkb0T8qK+4j85PhXWqjxPkAq9Xc6VvcCzLT3czQc+cQQpvYqv97sygh289S71PV3J0j1wNRg+E7CSPXN2mTxh9dE9ge7kvYj9RT79ZoQ9sVEoPsQSNL40s6i9l0CdvZYoA77kkoi60/wJPh90y730fOQ9N0jCvT2O9r0jiG8+2PAgPuHSRT38BII+o35uPEa2Vz6ix1U8QhEyvWwrW72ApIO+3Xw7vs66xjxEIW8+Y/6BPqH5Xb3QC1Q9lP0+PuH75j150V2+h4A7vnJTFD7vv989TrFfvkPPCL5MGNW8MRcYPlXmID1yWWu8GTIQPpBQBr6SNno91dYXvvEhQL4viog9zuTGPRNhmz63GxM+o50cvT+Efr47K46+xnpsPHlLGT4pxXq+DgrwvPcP/z0djYs+crySPl+Ohb2waEA+4YrYvb6NIL5QSgy863LaPe5ziD7vp5I+BVaLvevuJr5Por094HUivklsprsgzvs8FtM6PiM1Uz6V2Ua9ppNrPmfVjD20h5+89ayqvRb4uj26Epm+5hdfPVPhVD4AWUG+AHSevHJ/+T2EdpG7zmD9vamTpz1GrIS8Qw8KvkOVUj6IKW07WmjovVflD76A5Z29QU48PjS/Bz3z51K+UfoKvqraHj731yS+cl1uPmAlu70RhGA9PcC0PVlw2j3M4bA8z8A3vtkwTb6rmUu9gC6MPr9MPD4ST9W9tQjcvUABtTxne8m93Ue9vXW7ZT0BlxY9E/fLPfU4gD5D6EC+8PgHvm39D74jDHi+1ujRvRZta751QLs9SY7fvCNfprmhTS+9eYgEPi3xWz6Llzo9TboNPsQuMj5WgUc+ZVFBPfJUgj4hlwq9sVFBvpYmXr7ePpw98eS0vZJr47y0k0G9BwncPZMUrbw5XB28z8LlPdf1jz4x2Bm+g3mLvaXmEz5Dn4Y+zrx2vY43MD5bzsI8icI6Pnhc8L0qqR++VR4cvpMxUD6QDlC9N/K1vTU7Aj4UJK89/zf9vQfqOz1JIBC+3GiTvBc0Br5kP449FyW/PPQNQT4EfDi+M5lVvl3eoj0c5Qa+gC9UvvBOHr4fVUo9DbT3vN/HWrxOdgm+2Iz2vQlxFz3MYgI+05MvPf/TmLs7qnu+y+MRPrvmnry7glW9sE9cvawBR7vegZa9GOQNPeKBSD4hqrw9xwThvfzCvj3MUD4+E/U7vUoX572uHgG+iJgUvfH7rby+Fy48UpVHPcABzr1sODy+3zCpPZ+cvj1IWju+1oeTvHWrtjxXkiY+hCC8vexOoL4OFrw9i34CPh7HjT6Z5Og9ecgwPhsPSz5Vgre92odWPhFOgb1+aQG+k7lvvcykuL324MG8rx1Svi9Bjj3MV4W9wZrXPTYmeDupHTu+UKATvmzyaD3X5749eOqhPRKqj71cCje+hSYWPiQx+L0vRvo9czSmPfTRSb7wT2e+nGrtPReTw733iRy+MqTEvU0bBr6lyRE9YKUsPjPNDL6mkWq+g1DmPRDRYDzpp6w9QGxsPLriEr0H/iK9M2XBvaJ2570Uuww+a7h/vIZUSD7AI1o+ceNkPb2Vqr549+q99yIQvWhIWz7AFa+933QLPgK4gr29cmg9jEi3vZSaArwJjyy9m8zkvYlN1b2pZki8vy9VPKWHQD5irzQ8g61zvuXoJb5y2Ly99eYavh1MrL0ee389AmFHPakny72Z1Ou9JWxpPCQWhr72QD0+GB4iPoOaRD6dHjc+LKAPvdaKiT4aBNc9+FfPPfqOi7ztOKY9MRFJPe1xXj38jbA9wQUOu8w9Tjt0zEU+Iq/svH/q2jzZUrm9n/2ePeJqAD58QXA9nc7HPbkihD307iY+I9RIvueuMD7uJMg98Hw0PeRZyD0zFXG+FKsHPnPFjD2ChwY9apgVPhWHHz5Qzng+cDXfu46BkD2rCCk+gJGQPRfqNz7+oS4+HEwRPaV+RD3h9c29RKLbPBuRRbwdB38+sNfhvCQJRz6wWmk+Jl6Fvpk/0j2l2lE+aUiIPemNAD5oASo93BiIPnaH0T29vK49D9DpvYnoKzw6sD4+FcvXPLmdD71tXzI+iKljvuXpsL2Z9gu8shiuvXK8BL6+JoO+8B8MPexJQ77b02u+ajPJPckrWjzyz2A+zIRiPUaqGL6OHVk+RixEPjh1WbyzG9K9K9cdPjhBIjxHdw+9lWNpPSwfnD3Im7S9csGZPR0tYj7ORXw9fFYTPqm2fzxEyaE80hCgPU0N2T1fzCI+SDrPvaK7gDwR7Xq9+S94vaYyZDur1Hg+G4ZtvgMvV71PJos9DvBJPVOIurzDG4S+MJPZvdp3br2V/OE9iMaHvcZzIj5FwIm+0c05PkpkJD4P0u+8FYGBPZMtnL07IDC9JFBhPjvhuz305bS8KyYovtrAcDzw6jg98W2IvcrLTz0WmW2+TSOUPWsdND4lecy9YqyKvco2WL6xxqI9wMQ4PeJrLz7Zt989ZM0IvbAaBL6B2fk9zxQ1PSChXb4Aqs895rCiPcphKT7G/xO9igtXPcIYZT0Ww08+zWaEvgJd+D3UXA2+IX9svqCL6D1xCxe82n1OvoGBRb4YX0096wAKPtkCLT62T7U9YWlSPkZQLT6dGZe9E95wvZntAT7Mups96nUIPn+AIz7J2TG+mVmbPVOK1L2XIOo9CeJdvrdESz00pcE9SBz+PRmnJ743J4q7vj1KvgijsL0EOZa92uxgvhDcGr1tuSA9GpnmvbL6dD60PFE+uq0evC/g0bxAkIE91VYAPrAr3T19NEm+x843Poo6QT45B5o9QUMMPkKsHjxCJSy+jVqAvbW07ruB4kW+LKoEPU4MHT6DOA2+fOAQPTVrlD7PYwW+jgHpvFmry72EyFi+6itiO3t/FT46T5E+l/hHvrT8A7v0kVY+ATsVvsDZkz0K6Ii+8mmJPZLqJb7kqCA+htIVPl8Uj7uFAZe+M6NFPsjGDD66CzU9eavBPYrcLz7Uyfa8XE/VvSWzBL7MDA++jdmuvUmSij24GDC+U4f1PYEGkz0CP5k9+l/hPRy3mb3Ojjq+SVjuvRaglr3fTAG+OrEJvikYPD6/ALi8Fv49vfDXbj7aCHa+hVkRvsgo6b2sdxY9OHVavmyFVb6lc/w7WTDwPXlBsz2qVuq989VUvkKEjT1aRLg9Asa9vR62kr06lui9XcozPptLRj5hLRO+09R1PrjLTr0XYFu+WGCEPRsOv73yl9e9vsASvDdxXz7ONAi8sQaQvlpjtT2BXgs9JK3wPZ85OT4DPII92DuCPrqEiD1LMwk+iW5JPksuUL4AgFS+GzOKPFiU0j1AFCI+E+lEvkmBV73oIyu+l5yAPth4Dj5wTqA9XBMNvgZYG758aLE99ZsePuTcJz6rIRO+Stoou43jPz6LazC+1X0IPkdRbDxncJe9msZCPtdZazxs/vA9fHIevnrjJj4fKB09XqxdvneFE746hxe93t7yPb79Fr6iH0q+yAkBvukDVL5j2QO9+sDBveur3L15XgM84m0JPshwST0YoCY9RoFEvtd6Fjz1Gs48IM13PZ9VIr1Wh0M9tqQJPa+avD2xP5M9MUvmPVBghT6xhTq+yA0fPtCCDD5qNye9CfvePfAEIL7tboI+Xn6yvfJYX76UKB8+m/2mPTjc4j2UrkE9qvAmuWNSmz0DzGi+MLjnPJaHMT6TxiW+T96UvYaUMz68Sn88loKPvNQYB74SiI4+Sb7XPRRflj15cWO+oVqDPl4+YzkmLmI8sUO+PbK6cL4tpgE+2P0jPh8aQb6flie+gJ+8Paugaj08Epq9+wuHvjjR4D2R/TO+oCqkPc7qJb5kKYa9bj0EPbMfbL6Aehi+6uhTvD1an72HwYs+0QfWPUmmJ74yzJE+8otZO4hzAr6Iyx6+YRUFvmxYOj5Mve86GoNIPsb7Jb4BUSU9E34aPjjJhD1SaB++x5TCvMZ067zPZWq97BpMvas4oz1S9i6+KBBAvv/fRD7evh0+yebEvVrhLT7MtJa+AIm8vBetOz2p+cs86tHfPRNdOb0Sy0U9XEI3OquXfLsp0TI+XMY9PvqT1j113YW+mtAfvk+3+7zfWgq+xmq2vVcFor0d9qO7/y90vWcVqL06b+Y9KzZivXwxkjy9Eay9BDI8vT7QZD1AXW2+78tzPtpghD0FWsW9v9ErvvVOAD75hDG8Q6eiPS7/Qr6fhAG+Q/O6vWUZT74eULk9QgiXPVKBiz0nhEC+IVj4PT31ID6/AWY+W4sxvlnfIj4nzcc9huUlvohvBL7zaZ69AU0ePtF/2boodmq+uieZvJrAlz3Z5Ns9aMUKvnHRgj0u4o49h5OFverWIL4M1rw90pTJvAFe7j3zdYw+9LGnvKrDgT1ZphK9znZePjfnXD2RF40947JZPa/h7r2vjiS+uYEtPqaNK757bZY+mP5kPaZfBz10aDw+s8qhPjZ/Tz3gFjI8HT8PPXh39TzrAwk+JWv5PVYLaT5QJbY8oPWavTEoJb6T3AM9Mu1Jvcn7Bj7eXQW920MVvnCrz71jcWe9euWevar6qz4F7IW9uTlsPdC9rzxXUEW86aBdvs4zir3rVe49f9f7vQr63z1Akd89/oxCPl9sDz624ZC+eCliPmn6SD52tBO+27sPPhCaND5V5Su+hDsyPMzBAT4/OP89NuBSvkYPf72opwY+O+aGPgqvyD0Hdv69dEoVvXgLwbz0oOM984o+PuivIz6WJHM9viBsvvG4A75bOYc95Hk+PmeRrr3Xos+9PUwTPjxjhT0HeHc+EJ2CusY7GT5hRwQ+DwpWPfP7gL6Ie147wyhgvoKM/r3ikvs9vfLdPU9ce76kYKG+zOwPvvp2uL1BJhG+hBxpvrzIxbzFgTu9ujcRvjvACb1gVUy+axHePdEGDb4Usg4+DzqYPZlI9r24rCS+oO8/PSxMGz2Cbos+GF/lvDHWjz5h5GU918yEvmE+P73itzW+9JIrPk/iqby2fBS+mcfUvaOzWT2tLSo+72UfPb+lOb5G8jC9RbsDPBTRmT0Rk4g9U7D9vQiKDb3HtA4+2xdSOnR/8b0n/t29kwhtPrUsmj4LsQ6+TQcPvknjLD5MckC9BcdgPg61Gb1Rr7e9bYk+Pma4y73KEsW9AaGrvRsihD2QNhW+ZxEavl34vj2En+w9vKYLvqsLiz1+uvc90SvwPfukm73SggA+hs7BvSzEE77gBhu+Ys7YPawzi74XPyw+tP2evRCHzT1uIqq9Z7+JPUvsBD5kSuY90VA4PZIgFb5/Vkc+MTuHvhkbi7vCeKy9r3YVPnWjQL6gQbs+dXFcPiwXkj16Y+e9PHeBPSoa7b2wSWk9QmMPvv243bw1IOu9bnZQvcKpOz4jaW4969gUPmUsjr1GlUy+o9PAvZePd72PRxe+183iPVr5tj3duD89seORPnji2z1DJj4+lh+KPoili71yh+M9YHCgPlGUcD5d4je+GtoqvnkV+j2j+c08s4FjvrUbfz4HhTs+Dcd4vm1ABL6+T5W9HPu0Pfe4+D0PQU++tbR0PQ+XqD480JW9k8kuPGWH+DzbKQ69g9Z/PbEAIz76GYm9ITEuPgIOcb4J7cm+Q1s1PN/4jr762Sc9LzMWPkH53T1di+O9wXX/vePPoDqr0lE8WH0FvlXXQj6UoGM+aHAaPmLaHb2/QF6+b3ervYCFK75pE22+VaA9PkL3ET65MBk++kIIPsq/iz6RHeo8lV3pPOxBDb7S6Dg+OUn2vePHjL1W2zq8R4UEvhpncjzhWR6+BYfsu75Cdzuq5RA+4F8cvu+fED4PwR++f7mSPENoET7ccL09Zd7uvZWPzT3u7dO9gWnLvUk1oj2o1d+9H+fRvcl/9T3hUIo+GzxqvQX+uj1o14c9/jzOvcCHqjz2G5I+UQkfO+2xlD3xeio+KRkdvQR6cD3u4os+3ocCPjsoG74x50G+HzHVvTeJwDxI/g6+GX0APeZamr20GWe+5l1PPnWG7T3h7vA9oLa3vdU42j1Vt7K9FxYcPnj6lD7Fcfg961TevKEYEL7UdHI8jZgEvhD9J719U0e94yXqPZZ8k7ykqmA73vc3Pe3S7j3iKVY+g+f6vTRvLL4a3ii+ogEUPpJMvT3I+cE9KyEFPVo9XD7bwgW+1M8rPtVLaD6ebjG8NDskvTMCMr5bKOa8Tj7UPWGs3b0dZ6G9wGwBPY/iUT7pbJ283zChPL2Uu73s3LK9lJTvvcC6Jb4lBiI+2A5oO7KEwj0Huhe+GaLHPQEjorxZING9p6UbPs1mHj1qVyW+07mDvjwtJz4vXsK9A8pnvIadDzwdN4G+uH6gvSMWTDwlDbW9/hqIvu6ehj1WZ24+KyQxvd2P2zziJsa98Ts/voyHPL7AZr49eNwqvmAtN76WwFM+EwphPssxSD2Ldhy+r9ToPYB40j0Oj669Ts73PTQ5SD5jPKU9aH4lPugjIbplwgI+bqfhPfvLfz0sZ30+BhUHPv8DIr5TuoU9WeJxvug9Sb6esSI9tt2+vazFdTzCA8U9+lmXPWxPkr0biR09BaQ+ve22Gjzjva09ej0APYZdFD4HkfS9Gzi4vbvyXr0Cnt28uUZGPYAqRz4tIaI9FgthvlL1b75UVCO+nr42PrazIb0EfHU+HmtDPpK62L0q48Y9LzWhvU6nHT5/nWG+DIZ7vVmPDb4zHwi+6TUOvnpWSD4NwgU+oXjwvKTLYT1iYEa+aJUQvQ6HDT7KHOM9yEqHO/AMlb0qwNs6BMFePS6Xkb3Z61q9TKq0vdoMXD5/eJq9uhd9PKslxr3Nubq+/VCIPix9sL3RI1O+xlRuvhM7iL5yf1O+tyBdPhZJr7yLFKC8YCQZPmIflj2Z/l8+q1+PvPLICj5lHok9trZDvjkoLz1Wza89roQUPjojhLxZOcY9ssSYu/YgQb0NG8M857GOvTqWRr4P+0I+cSNhPQccGj6BKbI94Y9aPq5p1j16f4C81AMhvdH8ND5Cz5Q+3QZCu3FwGr0R5b49GQcKPdgbgz4frBo9mq0Kvkr3+r1jDv+8Mlo1PkyP7r12w5g8Lv/UPd+fuTwXthy+Z5ncPcRm2z3qAKC9OXSGvde1Yz2Fehy+yM5zvWDoyj0WcmI+9/XJPGG7ur3H6HK+S6LQuptoL76+QIQ+AVMqvo7pfj3RpAQ9i0O4vRU+Mj7R7xw9v7zJvCMl6z154Lc8yYevPRVt1T2PhVU9BIVRPOS1aD5Io3S9MRtXPYCRcr7Debg8hv9EvYyxbD7SZQ08Ksl4vTXhS76SVqA9NBHuvSolR7xTtck98hQcvkPOkb3T9Lc+qy5RvN3CXT6ojyg+E8owPNECfz5i0No9lp+uPaZPObrhC4U9e29QPj8rOL44yXa9mrtfvHYmJz5ZGE4+JIKVPuONBD4zJ3O+2iokPurM/rzoXAo+GHH3PUGaOj2O1yq+yTU3vq2Aaj4h3Xu9oNz9u5Oezb1X8sY9b2gfPVc5gz1ZDGQ+FRQsPk+5mz6ST3A+qvKtPUyG+rwQz+2742iTvrxf+r1aZZQ+QiQJPprDOj4/wwQ+TbaMvdwd1Dv/eAK+2801PrjrhrzhZB098WBcPrwQ3T2J9fU8zRMsvt8WDT6Blwa+l2SuvbxgvD2FHDE8fBCLvRMcULsdZN29yDd/PT4nSbyRBSY++tyOvR+DCbyraAe++13eO6zGyT1thso92UjXPEQhgT5YzdE9fwpJvojuGbzeWls+/FDDvYlkWj4PjwO+IlMqPjk0ab0NrUO+5CINvusZMb3ilT4+sw7pPd1ySj2ctUQ8PBAWvjjJPz5pz5S+tEDcu3n5qb0fZ4y9jQzovBk3Lz6awE4+f79Ku3wjqj10ofM9N0vGPDruoz3HY2U+AO4JO+Nue77HmFm+Myg8vh045r1d+Eu+9JtPvqybhz0egaG9oLapvdBNWL61ADY+8QE0PgpawL3gj5U9iNycPaartD7g8OW9LfqLPq6vbT34Nn2+gGMOPsMpYzwa2jM+la+CPuI+Azz0/hW+LlUePmdhRL79Vba97991PoGe2ryvd2W6PiWVvciOUz5fxBQ+ic8pPs62YD2V8fc9zKSXvTNmQj2gVG+5u75HvXCZBz1/3Hm9tN8ZvYHu3T2gIik+uoZwvmzvS76Le2W9uKrCvSYoer3vyJG9GiF9PX8mcj4sbKo9x+UvPlF7vr0bv4i+3KzVvakCsLynCEA+sy9nvrejdT4I11c+W2ksvjPBgTxx1AS+Wtl7PgwiLb02eHo+iwONvmyZbD7jZgQ+aR9DvpQwer7MVQ4+tOY0vnZWc731JCW+Yh0TPsljcD0YwSe9vjpivj++k7sNoH8+3BSKPWG56r2LJUI9/4FpvQooDj4pvm49YhxuvV0XgD2ENPI9tdqmvU6RQ75VJJq5U6FpPcX+HT5dSBM+EHhvPozKlr4QFme+CmHJPOd+wT2uk/49dNlxPmejVL1pfS0+79KDPoo/S77+6g4+vtIjPo6TQz6kXoI9iCHxPQos873dYJm7J4qDvUBu4r3swWa96u0AvYQ5XL4NgnC9DAR6PvxtnTy2Vog9ppkzvqP1yr0AycA8QHsjvD6Zc76hNhu+bncTvg7UtT1GeqU8NYrFvS50uj26RoK+6XARvs0V3D1WDDE+3aoCPJF3Zr4vKI09JMeLu5vQhbyEIjc+WxhJPpSXg7yzJUm+i8QdPl9cxzw5DS88j+LqvTsWTb7fDTU+cJwpPrAKsz0VC9W94o+aPQbT3z1hob89VV87vrzNHL38G5E+qg3wPUzJSb6Bijy9InJZPhpCyTy06fm9SEyYPrtJ4j2bbGq9xbsoPq3FyT3ygB++8x2ZuwxTMb25eLK8WsQ5vkhBXz6Avn4+IsPHPQ7DV77f+RE+ngdLvrjVNr6LzpG+JVMRvhxnmj3sVxC+QMOzvawgBT7li8m9CBJTvSfLST1Yxvm9tzRAvl+ZOz7qhdG9E92nvBo2eT40xc89/OcevYFiBr7OLCs+otaLvtUzTr5b7B2+BHuzPgVTF71+j+893NZHPbauxDwhxzO+EvxiPlBBnD3vdSW+f6LxOcw3bb4vj0E+iAOKvrlzWb6Zgs29IAkyPkJNJj1W1I093QlrPfdXNj4eraQ96WpNvl7hQL0OXVA9LZlUuqBElz3/jhA+uniGPaAcEb0TPhM+soZyPvPMcb4N+Nq9eo4VPfT1Sr4013K+45OJvVDCiz180k8+pOGxPVYqEr63iKY9HcN4vnlKFb3HPGG9QbsgvvsaRr6uEha87/eEvWP2Rz47RCS+xMs3vlZnoDpbgPC91/G9PYvgl700yq28uNDHPVp9472ffZK9vQvGPU98xz1n7C2+TYocPrdf0DxzXBW+ZQzsuypvZT7sqZ49ork3vl7E+72vAhU9a8dUvqOLHzwQ6fy7cMNJvQ/nKb2/Ofa9H8Wwvbsbe70vM6A+i2+EPd1tED6K4eS9TnmjPUs8tD16Zfi9NhpkvkYQ871fuXW9uXsQPheZcL603Dm+gq4BvuS/Jj7jHAm+JpQ3vn/xuDrEnvC8vLb0vcgAWj1jeg2+7V6MvUHoEr5aAUE9Oph4vMCRoD1/fYO+js9PvgVSwr1ZBDw9eBtVvpw0Db7KZgG+fqpzPtxxuLyeZim+9E8QvriRib2poG26QSGRvT6xQb2x2wG+l/U4PvHiWT641y2+YxzLvZMbXL6wIjy+fLIdvgHoMz1w8XU67az9vZnLHT7jMTG+NfgpvrRkEL7r05Y77u3mvdWSK76LKL28JDEEPjkFTT6L8UQ+AQRDvl1Bdr6nh449/02lvUDYwj0Dfhc+X3AmPs3N870aq3U+j+6GvqhDwz3HTK48MlkJPh3+sr1MNEA+iD+EPiw09bxfngo9T3SXPhz4hjzIX9k9CtIRvfc9BD5oDXS9nVXzPJoxNrsEKZK+WjUpvmX8x70CzzG+sQ8RvsnKXr4sUmY9UZEuvptlHT3XSsU61JFwPYd2EL5elNY7EIiUPo5hDD7b+Sg+TW6APmVgEL4czNk9D87rvKtAIr5/OR2+pP8sPoCEGL6Cpaq9VIMUvUosN70jblo8I3UxvZMH0L019gO9ExixPQpMmz5VrwI+nlw1PX5bTLz2adm9XCwVPbMYWT6s3iM+gp0RvX64ET5Mv02+G02dveGzT734NNU8GTc6vqIiej57Uda9ZIYSPsOfDD4aMWI+CmpBvhUryT2DeZs9X31svhVgkL6A83q9UED3PXNnujzUK2E9cI8ZPrWfqbrwNsS9TM82Pbt2IT0BKxs+9A0qPU0wPb5hEeE9eO++vaq8nzzunuQ7kIrZvaX+PL5jb/69nwtNPbuQg72SaNY947tFvY4Wnz2tgsm9qyFYPsulh74ofUu+hn/evR5FBL4rmio79ELXPbMYBj7rQHu9SSIGPhmoS7ueIqU9OIl9Pi1vaz4/9s49kzC8vXOYcD53X6u9mGSSPSZ3+b3bYpA+PJc1vpO+ID575sy8zq8sPmC1hL5SbZy9lfB+vnMA3T1Fwl27NCQhPijJaz1nWhm8A/Q8vQX0hj6EfNi9s5hPOwhdK75Bav29VK1dvhZvzjxDKLO+vK9au/xbSj1+qr29G6qFvnEsTL6tLiQ+Bl3MPfk+0b0oHZi+B4MmvSokjb30tgK+l6TzPZfbSD1s+GE+getEvl2byj2VLSw9imvYOQuL/70KEIM9vy8gPiTHfjxxzUg9HdJZvjLOPT7gjS09PrO7uwHHLTvjjQi9xCYhPi/+ET7PGWq+mxlSPCANiz1MbFe+B5CgPWrlBj6JSps92RuOveRavz3FHIO8EZzbPUl5lLyQLKK9v8I6vFk8lD0u4kO+8HgIvsP9Nj4YwC++weHWPacP+z16jBY+dZEVPggFyT0uLDq+sYUYviID3rz/+Bc+OfuFveBodj1S/5U+nRCKvAbmcD0bDbS98KA0viVIvD2blAE+ofn6vUo1xTz7rhg+dml1vsfkBD3Lvko+IzIbPc1rRj5zriE+gvCXvK/zjb1uHB++ktoFvthi/jv9BAa+XzInvoWdBL69FS++ygopPsJhLj2E0Fu+NIKSPTd8/r0Wxyu+clMUPcgylT3sVwW+64BAvoqukD1495W+VwfTvXGEgjzd6oE+ZPmFvI0jsD34jAg+JZAQvo9DLL7ushg9O3cvvnPPPb5KuZW8khkgPuFEbz2PY0q9Lk4vPS/6o7yySTU+pwFYPk/pSD5Mi/e9/I6UvmejJb0Daj6+9c5qvtmi1r3fOim9Gr6GvsLORL0iPk++8pH5PZtA+T36U12+IlJevqQbeT3xOgy+Z9/RPKwB/70RDbI93u4PvdbforwNoKc9S7LrPEIGv7yp7fe9ycVQPkLilDwFMKW+Si4jvqFkoruK9gS+m/+WvIhpoT1OiO29XT2Evd4N7r1DHUY+PQ2ZPRz+Pj7nFIc+CZtJvY2nhL6EdD2+JItvPmHLBb7ObqE9bB9KvoWiub2k9Po9iPECPcWkkD0yV8a9HqlHPevQi73lNQG+t+C0vQcUhD5MASG+u/YJPhMut7yyZ129z1NhPrGSgj4/Q2I9MaYWvQZSJD5v2xW+W71dPDOiurxd1SY+4Tm0vuXLkz0bK1s+YapoPu5cHb7ua+89Jk5JPujtET5yPrM9od7bPeN9jz7/fRm+auZAPqDg8zyE4qk9Nd1HvilnuT1HdyU99UWgvkstZ7501Ym7mcx2vSjeez7FgSI+vtxxO8oigL3XoBy9t4E6Pix7P77pywW+zo5QvoXMUT7Luw686SN2PcFUar4RaSC+FIk0PfCWRj4ymQs8gk4ovfV55bzqyBi+j6B2PjBxa77go9+8oFnkujjTiL6+eKK8k92lveJT0z11Jq69s4EhOfbV8Tzbdve92uyNvdX3Nr6fQA4+jmItPoxijz26I+i8oc6uPOIB2j0Ce1g+VsW6vIKauLtOPTc+rRDtPTj2OT3OtAK+LAUivgrKWz21xLs9mbpBPup8yD3E3aC+oH07PjtD/z3yVSO+oBbxu8WhnLuL2cU9xlB0vqZA4bxTVLG80JcgvppIDL6V5qu9V3eWPuplVT7ZdO09z0BtPSmv1byTJ56+dpZhvlVFNT5629k9OlDmvC/dTb63lrO9ZmvkPTBO5L2b6qc9bx/APQwl97uB+Bw+gy0YvQtqRDwooLw9HCnLPa5JBD0/RoA9LbdEPi7zJDxwHgw+XoNPvTgVED7qX507w1SEveZ5Q7zgRMK8io47PmEDvj28cBs+r4VFvu/PgD6TaFM+FDLfvYSoDL4jAgM+Fsu4ud6ALj4LKk09lJQqu5JXUL5PRfe9ATxwPjB1HD5Nvw0+oXNrPndScD6G9DU+Vsw3PtvjQb7AVqs+fgUmPl5AQL7egmY+pUrmvARYsz1DGdm9ZnKZvbEZgz7LDfA9fzlovfdShD6FG+q9P0ARPh5w4TzJ46W7ox4QvT3oLT79QVm+VI6Rvb/SEb7kSo2+aXIwu7RQOz5disE8mXnuuYIpnjwChTq+ua3nPQxVZr3PWCC+W40NPrFeoz7SyQ0+izKNvqHEJj7Oav+9D7U/PrOrrb23UUy+FCX2PB2uQTzOfJc9z4uYvhwbNr5Mx5A9r/d1vdfPLT67a5e9KDldvf5NAz4LKiw8S1C6PdwjSD73FSC9fFSIPMIvcD5q9Hm+oA2FPdppjzy3ABG++EL8PL02ID6yoQS8RGVivra/uj171Xa+xGv9Pb1I8T1643a+OrpRPkTkib2CnSE+3CshPW6/jz3ge8w81os/PjnNQ76ECp69QmGuvIXBYj0iUU++klwivdr9yrzhwhM+K/PKPb8+aD5F0BU641BEPjrdWb0foR4+lmEPvt3ALz1xIJq93pRJvrO3QTvCABU+G3P6PYGyuT0i0Hm+z+lRPosvs73YfSk9y0gBPjonwbzTD169EeerPi9NKz0FyFk9s1ejvVjN/T08aKg8IBlRvZv2V76UwwU+uI5zvjyMoz6B+a+9vpZ2PRurzD3mTlC+XTmZPgtsJ74yCVw9nuSJvtRFjb1ewoE9odibvbKVFTyEM0K+DA1+Pjznd7wAi6I8JrEAPtCbB72b36k9uI9bvk1fHj5w2DO+21Mvvg5pA73q93k+uJ3vvdRzNj2Z2Oc9R7/SOsiAkb4ZmMQ9ZDMtPgF3e739axi+4NShvSELQD2JOU8+hNO6PflRTL6iVDE8T2U7vjlAIj0oH/i9+sVAvnF3IL5qDh++vmH2vYYyxj1tdH48pV2XvjeIkD1G3bO9DO0BPqfXQz5/1ca7z4EzPu5R3b2h/6a9XPqBvU8ftz3kP+y98E/QPZnlvj3R/pS+SEk+voSd/zzRme47GxgNviE+Ub6a7Oc996qMvfz1N76GpKe94LA0Pk8gO74ZNQg9MfnEvQv0mb5LfxK+g5gdvqPwkL0qYZY9bgpNPqcjBD62sEE+A1Uvvm65GbykvCc+LUTyvXSldb3f+l29hjwlvq25jbwdrqQ8/D9mvvDFgT5kGok9GggjPVR2Fb7q9qG8LEWbvRVRZb2MXqk+W0wqvlOB5L3S6wq+qkT+vQOPvL1c4zy+3co4vrS0HL4czH4+E9MBvRKqBr4lOl69CSFNPlbhUL7jmci8xm2VvnU8sD0ZU3a8UAkvvQTrVr6kREY+UIh5vajK6jtICwS/2BZevXTVnj7Nal48U+Q8vkFpUjyahqS8wAv+O/wUj76X8DS+wLNPvddjFD571qM+FDgsPqnhFD53ZOg9oU7CPVOujb3u2E4+uf48vkI/+L0xLXo9NBQaPhi0Eb61B+S8GRzovW+TGz7UF/28tgwHvVY57j3rSza+mH+aPFhPhruD5n2+k1CcvRwAzD25Mow+REk6u6WwNL6H1Fk+4d5UvaIU1T0LjMe902AQvtyNOL03Nzw983z+vUXFLj4DQEW+kqAJPjJMiz0jcX69spEiPvRzgr1giHM+2OvqvF6jnbuYZmS+4PXHPKqPjT1zuMa9XtncvZ1EM77Dr5C9P/z0vMwU9z1EklQ+Pc7svHNqEz0247C9rGALvkhGTb3GvFm+eDYZPj/0QDzcCSq+Cx6xvZ1H6T1SOP09ILxsvcYmyDzDcT89DJLgvbIoDT3D6549U4znvETNh7v8y4S+VeLHPeUDJr19fAw+PMBWPa+c/D2a6cu9NqGavZtwLz5kMha+couVvlL94rwMMTS+3v0uPhuVmb7m6tG9aLpxPi2Eg75qeDU+SndjvoLpCL1Ib469exEnvk1OZbzaYEo+zQiiPEV+Eb5sEPO9oJIAvvkLtD6bzPI9fPaUPuedaTxNsyM76M31PY0Jrr3wW6Y9RhxbvnNQGz5B4oa9QmNXvqgXGb4HzQa9zYjrvIJ/YDxEEfK8MkOBPq4yXb7y9iG+27WyOgTh8b3YkIy9dt96PJhsFL1hrQ++0x9IvGxvILyakeg9y85RO8TMTj7OS9Y9EjeMvenIDz6QHU0+20nsOcppxL0luCC9WMZpvrpaKD5XGSk+axZ0viJVAr73JhM+SHR7vqcm572rBJW+z4KWvZizFz4hUG086iRgvXBrjzzG46M+mCjOvc2L8z3dsR0+CFgQvmihST7t9Oe9p5j/u5jScT34HHQ9IH3JPVw/ir4OrI49WDwXvtDvHj6B8rQ7KgBPvDzLj73elhS+85fAvdX2Wr6xRFs97ykwvj6YCz7e0zm+i8HIvaZswzwKIoc98qM7PpXrC76s5py9YuaHvfI8tr1MZlc9Jpk1PsNchj0O4LS9WzwTPWZatL6RE16+oH72vFV+0bt3ePK9UcTWPeKqx72JNuS9GKSDvT3+9L0tcGM9WBcEO8wdDj7ALYc+zR8GPOo0cz6Ffzw+0KSEPspmRL3JPfU9X4SWPSiGeL0Wrdg98RWWPKakELzlGJs9OLZqPSEZJj4uquG88axtvgdXNz4Bk/Q73vaUvbPY2DxulSQ+B38ovkLkcT0VTXU+PiPgPIQ2Sjy0YRw+V9bTPYseRr4dCqG7QnKiPYDnwjw98tE9LzSuPEgW7b3mRSs+JB2hvapWSr6Io4U95gmhPtrR4zvJdeq9rjs+PjjCrT7Zey++6+POPRHEPz6hpCU+J+0OvYyR5b0yIEo+k617Psr2zT6xr7o9BhiqPYB0I73RDLm9hNauvY9nQz77MBw9Ro4aPa2B471lpoa+0ttzPecbvT0DP4S+NZGPPXEDpj1EA4g9G0bIPcw9mD0+Eom+KjsLPa0ZUr5e3tc93ZlNPgCj2D3+CyU+ooOIOZGxNb4LtXc9M4WpvajE3DzEsZc+Isc1Pl6/ML1ne549r5YwPl1bjL7MXQW9chHQPD27Wz3GQfm8DvQGvu1gC74tUg++P7rQvb0OQr248ja+fVg/vcU3mz0oh5E9Td4wvnGVIL4F2Je9pCsDPcLrKb69jZ496M8dPkai2b3rpII++s8IPpfPIz3jDOo8tJK1PZekFD41Qi8+GxyRPFJWhr2D8xY5BrIavu+70L3GhRm+i1XYPQ355L3bU7m7T4HQPCDt+DyYuEs+ZsRCPjoqCjwgnC2+wJ1ZPUEOSb6ikyc+5QGhPUxBgD3NA1c+Ngovvk6fIz6gsw69VIF4Pv++Zr2UbJO+FeLhPYSkqL3QX9u8yY3+Pf9HvD07Yxy+0zoAPiBL6jpnYzs+oblIvok0QT0awj89vLZLvd0oHz10ryO9PgORvnVFWj63XRs+qbUkPmaYGLvn0t494/8jvshbTj7YYYW+cqAQPVO8UD7hU3++XpjVPZlud767+NI8P8BFPYlrLb7P2lw+8l9pvu8WHj7Z5oa9hURfvudXHT4bvOK9hu3ju8bIJTxUABk+ON2bPDB+Brz7+Xu+hfqmvSoBi76C3My9C35DvpOkPT5W22y+cy5/vtQ+Ar7fTMc9KP1zvq3FY75H86092cwAPfFs9L3cjh++452gPdKbYD2Os8s8zurnPSrzKD78/mM6mXQ7vgqD171/jSw+Fce5vS+y8r1FPog9GAnZPaNdRL6IfwY9Q+AovroNNr4MULm8PEA0PLFuwzxyL5Y9lBCAO4Pe37y6gqo9aTEEPps587s0bdg9S3SnvVpwRz6ailW+UemYvbno2r2RvUI+uYfQvTvamrxoaaM9XX3WPV9Xp7256Wm9veYOPa4b6zznhzc+RphBvK3zQ77Fpvu9qJWlPaeCHT1hx3M+qfQ6PFdEwbuIqpE+DaolvtmDIz7kXDe+RxYaPd4Kaz5yBOi8jOc0PsTlOTsrv5c8CVr6vW5tcrxMyUw+F7VpPZ8OSD2qJo0+8uhRvizuorw0xdy95d/9vKdlhT468Gg9checvXkarz3FUWY+oWMdvpz8Bz4XWq89JVSQvNLDCT0EZx+95+uOPtxVKr69twy9gqJivdrVrr1Pudq7NkQGPlw0/r0ofOo7qKpPPuunXL591A++PXAWPdOhpTxrMhS7+T/1vDAIQT4ICoU9n89Ovv9SVz4vJUO9SmxbPZhG3D0Lw0C+CjhzPfaqmT5DdiC9hfwlPceDWj6nDfA9eTwgveT3F77IrcC8LC+9PeBhrD0wHks+ybNOPk0XA74u91I+aat8PUcWdr6FcLu8uBDZO2W/Wr1AwDI+6AiRPcxVJb0zyQa+vzGJvTH5yL3NE32+5iERPjkMGDwEVAQ+aJy8PQItSb7J9Ve+NB4hPvG1IT4W1X09uqx4vTZbWz45aOw9++rfPZmNLT6fqWI+iIV/vOT5Fz6FKAY+yWobPURTF760B1c9lFBzvRYHgD0HZjC9Y9pBPjvgAb4331a+s1mIOvEfXrxHO/C9pdgkvnI4071bJl69owQ4Pfm3Or3tSzA+/6tPPn6kLb6POMm9MTYHvrvGHr5wr9e7sUdTvfecNT6qWO29qCmBPvhRlT26lNs8U7gyvWkYTD4adxe+3JgIvtWIkD7Yhps+Jy4Ivtg0zTuaMKU9yVgBvW2i3L3HWFM9dNetPVwK/r12OTC+pyMKvv+UA76GG+m93hvzvCAUMr5OHdO9uPaZvTkHKL5ZWF697GUOvo3/nj5ljsY91n/9vQbTPruumyi+a96yvWKIZL7pcOQ9g5ZqvprgrT1Tb3c+ojL0vUUAlD0iHhA8EBl5PNOQKr69pIY9x+WlvYoo5z3jG+U9YyCLPbSyTz7EGIM+aXXevcnFEruR41O+7+5DPimumT7FOYo8cljoPWnelTuM7QU6q1LsPJQ1MT54Ur+914QsvtpL8D1g2SW+yjsbvqTwXj06NS49kIdmvdHavzxhIZ69or89PvKTjr1x2mm+bCR8vnR5p70Omtu9h7mHPjsN87wSsjS+lIAevnjgpr3t3t+98w9YvufdiD11kwE9DOcfPm2sgz2eomS90DdHvuQRhj6FUC+9eRmEO5IBNbyUwvA9sYaJvcAmJz4EnUY9+duWvChZC75OGRy8NvH+umz9E74vEXq+KrWUvAQNjL3j91s9G9R3vWA8aTyjzYO+zXjkPcjLFb5+w9w9Z28mPRsNDD7YOzO+FJ9rvtvdAz5ELOK9baJYvmE3Lj52ak8+ZbNRPSvG3T3qUjc94yV+PvL2DL7JKfA8OVXDPOm4qLxhX9690B2uPTME+jtnDv49NQNgvaVVUL5l9CI9CvJNvULt5L161si9FtMGvtOIrzy4CLM87CgVPT2Vp72etaK9Lz0RPiau8ryXli6+8mL8vWMko71i8Gm9QTXmvCWg3T0vchw+aBhKvsnMLz2zLyY++fRNPVsBgD61ggS+A1zJuntkQL0+0wi9zUoUvrNXNj4a9ZU9i7IMvMDj4T3e0YM8yMJ5vetyj75ta9i9RFAnPa5YkD2hxwy8pZPGvNJfuL2BT6w9qE+zvX0bHr7VGIk+cE2iPTSxFrw8+YY+StNlPqju2byQD6G9Yos7PpGd/L035Y2+t7grPjDtrj10VEq952eLva92PD40hQM+u4YOPhUwBr5bC1g9k2CFPqxQRb6LIji+tTeZvazuyL3ejJA+VpwLvsGxXbzCRCY+xFx4PtVhGb4LogC9483wvTsuRj58Mp09faQ4PiX8/7w4o2Y+lkAiPr7UPz2Vxd+9PggQvTrSkT72CzU9Xv6VPFGITj7lG3I9C7cmvXj3V75f+yG+6a9xPp49Jb78cMq9WFaEvchjSb6C+xi9Vuv8vekbOr29CT2+GDzKuiXHqL139iw9itWJvvCZPT5+Ik297B2MPslD5z3Rkfg93MHqvVEsA75XTH0+BqdOvhYMp70i5lg9quE0vlULND7GjzC+Ar4zPrnijr5hz3Y8yNwhPalI972jUQS8+to3PnyxUruhmLs9FolqvUq6az4uszC+WYgzPvpZ7zyi6he8/zcuPhoUKD1+C0m+zzISPl3SaD5xWhk9bDsRPXieVD7xg5++i46uPCVJ3rwQtiw+ot2ovZcgPj7BGLQ787v/u2HXS72gPyk+5hA3PYnKgD3phBQ8/nfyPenX5zqulos91VIvvnyIS752UHm9o0RHPuJyVT5tjHk+on/gPafTKb4Wnga9h/ECPtkuuD14PnC+UZgZPRPkL75fQRy+8ldFPhz0pDvp33c9K+OVPUR9JD25/fm92/SDPcYTiT2b/t89wZzaPIYERL5ekWK9/HDDPZgOS74e2Gu+8VZ4vUzmN768Lpq9bvDUvT1+5rvLXUu8q2oOPtTYeb7cQGi7/4I0vjaFwzx2HEG8sPJau5gn0b3d9409EBEWvpHYAT5lSB08UmfvPRWMXj68mxk+MniBPpQ8LT7nPA8+4cVFPlpLuL0ZUZc9fzqKvcwPqr05CWE+ovsHPrOGkb7gAkc+FWdIvv0tDT52YgQ+Gx2LPsls270zJUo9Ao0ivt/8Sr6gQIu90FgvPWGmqL0bsvU8aZ2OvSz4Kj7bxSc+Ox7gPXzwKz4xoxs+SmuTvmwgT76MR1G+kTn4vZiarr3L2v29vDY7vULt1D3G2F08seasvXyygL7k+kU9IuytPRENl73ob5c9u3FPPked2z2sMg68/VjLvGdlhT2gdRW+SDWtvWhffD3w+Po6wDSEvtHmfj1xRQ0+PElUPRPDlr1y9B0+6FqHPWDJcT22d5S9VP6/PTMmjrzpFXM9mtuAvl0AHr5HG6C9PbkhPnM43r3lPFc8nfFlPmuJOT5JDZG8S2oAvmmRyruGieo9vlMpPc+RQr405mc+FbTePBVrKr2ZDlK+dSWmvQn/JD4qBAW9DumBPZtJDj5sTXC+niOvvf/TYD366Kk8/CV+uQzVzj0qucA9DgCivSBbvr2zHoc+cYltvvI8Fj0/iYG8pO67PJfg5j1K/iK+haRZPSGpPj41rFO9JyAUPHjXHT6oQwK+2W0HvtJZID0/VEO+p2t2Pc38FD4RGGe+WSd7PCQkhL5EGwS+gwFVvssIzD1fah2+LWoevsWVkb2U1Gk+Sx/4PdZ0773slX28YJ6GvYR8jD5OKiQ+eXW/vX5t1L0Z60A9AqzBvLCGbb3oMT2+NWJ0vT9dmz3JTWw+XrawvXTNs7wHtS2+rOYSPi5Cmz1uOhs9fSVEPhspIT0YFl48X+4yvchRLz1C2RK83i6+veKvRz5xcWk96zlEvdf0Mz7mB1o9fHr1Pas3Aj1uAio+jJERvCnpPT1AFUm+s3qNvQjv0z33zAs9Fk6qvXDGMj2osIM9G30NPrhiZb7OB+c9Wizrvb6WWT5T0UE9U2+EPlxYUT4Xt/C95Ur6PcCfHb7AkF4+sCa5PQ/LFL6gfiY+Z5sCPfJfF712doK+vkM3PiyVlD4jQQ49LU85Pps9Dz7ksA4+OslDPeKM971N5Lw8j3EzPoD/kL0HxYa9PiNIPiN3w73KOVq+uJeNvZ9t7b1Xlas+S6AqPkZ/tLtX1E8+gyN3vrZDhD6qhpw8Is45PPJSCzzyLxm9ATL5vd/uXT5AxrY7gfYQvcvMaT5bKU4++8nFPR+o871PZbu9l478vLz5BL1U2N69uApEvqTBVT5qhI4945vrPeAXxzxsVDS8am8sO2D7NT7Qd189PoicvoQTaT4khBs+tZCivittR74m8o6+n5rkPGnbM76PVOQ9ji7kvZsITb5oIQ8+4QTTPPMJqb22tJU9brMovvGEPD51zNM8If5HPrxcHz5ERh2+hcOjPdZ41j00bmO+0/qpvQaMK76yoxm+ebARPvUiAz6/muS9SLuYvdPYnL3RCpA8P/AtPZrfOT53SyK9MQA/PIW5t73whKU80QGtPLXT2T2Q30g+e9d3voNNLjyWVUS+AmafPRXcBD6EuN095iQiPiWPmT7DKDq+7XUEvZK2lD2ggjc+A5n4PYD0Hb0+bNk8jXCHPKAsqbznZD68YDACOx7yvTxO/XE93y6wPJT0/bxYFAi9JfTEvA0M+zyzur+7r5gfPa2RJz3VXlm7Bj+PPPo4Vr2fmzI9kKDXvD5V1rw23ei8M8RMPEKDZrzziQG9xZRkvFuWxTusx8s8hAmWO7zSBz3ME129l0EWPbsE/DwaZOA4GsvFvFTJkrwHBy88+7thveY7SbwTi4s8etZKvOQqCb0HXJ48EO9gPJX7TbtUiWC7aLnSu85vcjy7Xwk9cs8fvYC3yDyCCqc7KI8LPdFjqTypl7K8eLkDvSykuryNnqy9nsmQPJ2gyjy7gGm9IKJ9unNdHTwAAAAAAgAAAAAAAAAAAAAA+v2Hvmg3XL6M0x68vgMavjzLvLxXqEy9Mn6BPvcuBD6I+ea9kGWxPRrIjr0IKyO+H5uAvboYdr61w10+OF1bvr2Enj2E9T291WbnvcKLYT5e41Y+OuDjvaqKYD4ta2C+lP2WPW1Dp725UQw+6fAavnpOej7bXyi+Ti7bvTHVDz4YgiE+bH1uPjUmIz7aN3o9o3NJPtssMb256Rq9LHEyPqmKmD69VR0+zNkIvrlVjjwyPta9jdBOve+OUrxMkO49lPtRPp4yBT4EHYe9TVeIPqxKpT0Utm08X/5sPqlqO77wxQ08RVqZvTczEz7iR9U9M1IUvv9mfr7+eW+9znTTPSp1Lz5iS0o+DPmVvUm9VL77hrW9KmQOPpgpDj05AJW95lI7vs0uUj6LgCC9iRpOPYtt5L26nEi96CkIvjuDPr7E7X4+tXEtvUeQED5VSoc9BbwyvnGeJzsAiwo+JiU3PfFiVr7xyjE8HNXBPRBFZ70v8jS98CYdPnfvQj49Omo+JrNTvoltkz1Ndy8+k22Jvju+Y751Eg6+1316vaYaYL4biVI+hD9OPuBgHD5AM1a+nZOIvSPDLL5yThU9E3RKvR+18D1VUN08n/25PPPu4Tv2PR29XwifvTTAgz5cPR++XjJbvmmfqD2p60c9PYyXPoHQg724QKY9/ngtPdb4Db6Xe8m8HLEBvmdJJD7dJNa9Du4lvan4H77eL5U8x+b4vX2jWD531aK71H+BPYUFhr2nkMU9a4YmPWU6Nb3prsa9rhaevSqhGL53+Ze9HApVOrAPkj1UZwu+98gEvigxSz5/ee+95bwPvWVrA76PARK+UyIRPs6tcb1Sz4E9Od8svIwZYb2p17M9zskovkrSWT2bloa6g+/LvcULAD6elw09T48kPuFqXL6FBRa+IDF6Pt8cmb2SvhO+OOVSPtxy873mWHi9KN8jveArITuHFuY8X9w7Pr4IS7qFVY++759rPGXLgz41Ma89wiujvXFHQ730u4A9ct0HPitFtL3RBT++tdwbPjW6+D1PhyC+swj4vb5ut77o5ka98Y+Zuw37qT1vxw6+VgCavEo2cz57OLW8t+mUPsbFzD0DUPM9aSxMvoGD872aTyQ+XDCPPabfJb5xS5w+19J3PbabPL3BCBW+StJwvazCx7zqLoe9wNAXPcaiqj28noU9wHnnPXsLhz0Y5xe+i8livICFs71IpsA9VSAGPg3zMT4rG4A+FS8lvo24Kb0HAUc+Sqx0PhOol71NB7A9LiANvrLcSr7zlTG+9TqZvf0urbxtvU++4AlQPj2nlj2+YJi9CKKwvh82ybwJ0k6+9icfPmQYdj5NK689HUa5vWg9Fr5DdQc+jS+EvVt+5rzKM7Q9kcbzvfvGFL61oTc+Y7uSvdTnpj2zmkE+CS8pPiT6lD1xyR0+cGhdOxsJFT50Fus9lrzePDwMr7zuMT2+1MYhPQyxEL5VOjS94bw3PSPdTT7n7g2+syk5vktAfr5Kxl09xJxhvuDo7zyIHac9eDo/vvoeFL4PLv29OWdAvRmMEL57dEu+m/BtvTsgAT4qnQI9N9tPvgx2Mz5j6Tm+6PZOPt0Rqbxjb/a9mDWZPk8c4z3aVeq9HaGpPmXtGb5+Dn8+pP0Wvh8cBL72UUk9bQZfvvMaqTw12tC9FIEKPj0/tj2+jw2+fcafvH+AXD4Y6te6cP0uvjLTcjyAaIw+3AWavf97kz4gJIQ9IRlxvrjfc721Ir+828GXPSKZaD7cOyw8TvTXu0MuzbzOxas94yqdPllpcD3A5tg8kKYYvm9NNj7Qis49gDg3vjWlR74iCcu9Ayy+vfg4pT3CZxe+6438vOI2tz20arC9GAhaPpgg7r197Mk9B0tQPZ11vj1fAES+rd5EPTYNYD4MA0Y+QDwdvS+DDL177QW+S8ikPPmcET4dGvs98Vn0vUw4rD0oo7u9AmpvvaGWuT1Rc/I9g0lkvdaZgb7PDuC7LG1SPSSelT5N8887y37TPWNM6j2w7Bg+UblivYtdDb5bRwm9ri4XvrXb/T2tHVa9hZGevQPIND5hE0A+BxYOvhCxrbxI7T48tKhfvgDC6r3Rh0C+Ip0+PlIc5zzwPqy9GmBRvtiSNL6rZoA7Y8wsvSVTHL74ctQ7yiRCPtnNpj0HbAC+86UDO/5QRrtpO/s7mitovb0LU77FTG09djmLvQqsGj5Pm249SpMrvqFp9r0kXv29FUeoO9v8nj3dlwm87DdMPm+3aT5QcAu+It7YPFfj6zwoVEc99AxCPoDyXj30Hpo++EANPY05qL2RD1o9COsTvnOLYD43WRy+7JIrPn3+u7zHFXs9avzkvTnnFz1HpAm+kYesvj3PMr3lJ5u9Vk1xPTUQHb5Hdgo8nmAWPhyhmrxiHGq9g6BRvX124D3vr7G9ZqUjPmuooLzRoiG+nVNavlwVcT1IeDg9tttDPnM6973tZwy856jPPVKxJT1sNks+we13PvNJ4j3VgGW+R634PY7/rr0m+iw+EXglPsHqfD2STFm+1qgCvNMIIz4u8dG9Bu8BPYc99T0RtA4+NaBdvuAcmL3uH009wPcdPiDmS74olY6807S1vRwIFT6Efym+dH98PeJ0Ij1yIig+w4lbvQzCkj1jJ3C+08JJPkKMFzy3dg2+BlpLvnojcD5YyQ09IdN9vru7ZD5Gxhs96wvuvd//5j25Qe89TQJ0vVnN2T22kkK9V2fsvehLmr1wZ548WtADvsMXkr6CXwY+R/QBPJ+JbL3lduu8q9uqvdDLd7yUXro948WLO3EDPb1ClCC+Hn0FvpTNg74nGzk+Kf0KPHqhbj5VVFi+cha6PaeLHj7VYms+Q3CHvcen9z0eHaW8iBN+vdT6K76jNr89idMBvoqKRD0mlIQ+XeJoPtopAjy3o1Y+Bu0tPgW/Zr2RQS0+5lkBPr+ReLwsPC4+0OVPPqPHVT6U1F6+BBVePo/UJD5v9Vc+dxsgPYfK4L0yDZY9bgM4vsH0wD22pNO9f3kBvvE/5L2gz7y9snwRvszx+DyVC329U1UnvAHnNj5otzW+gw2xPBdVfj5Ywik92KPPPbIwuT04Ntc9YJNlPouzGL5eLu89EjPmvbemEL6PpNc9PKnHvZ0AoL3GkmM+H18QPpzUVb68PyY+kxCGvjT4A74AEMo9bDaDveMN3L0QWtg9NYjlPXRlNr4BeOU97fxKPuvxJz4A/8w8ElpuPsR8nD0HFyw+MH9MvqoKOL4R1VU8e05Iu5J2ij5MriE+9m0RPmyjwL1GFw0+k9pTvsZjIj5Q2SQ+Uz0+PlvUJjs35bc9M71UPotSqb15Nzg+F4S4PbwFYjshXwm+qcQJvnRNCb5hysy9ncRVPqPWBz5exuA87e+Svttu9b3ZnIe9IewmPgq5MLxBSym+IpD8Pezyq73Amgy+OS73PaKvpD2Xc3e8RJsDvRka+r2pNeS9zxMivf8AkT3PjEY9Cd63vSob1z1izBS+6Z54u8l7HTyImQ2+HG+3PS2LJL58j7i91Kg3vdJ18r2uewW+hn08Phdser6RA2c+hbLcvWrCPbxT/LM9OHNHPrcA5L05qnU9McWGPZHFC71m1DA+cMbJPMsZKD3rkQW+WopPPh6YZb2dIcK6w6QfPrPbQL5hyCC9n2O9PdyEN74yoSK9s5WWPbcW6bp80gk9OKkwPuBylb24Va+9Zxw8vjHwZD6bdSy+EbqHvRzKmL5GVAC+xsETPkTCRz5pnoQ7Q/MavUTn/j2Tdwm+pQxAPuEfi77eXBM+38mrvIijrr0Z8Ik9b5hMvqFaozzbqPq9jJgNu2xOrD1OVBW+PIWIvWjPyTsolgq9CZsMviFXYD1EbU29TaEzPjG2nr0LdOE95a4HvthbZb0RBiw9ywDtvSwdWDzXNoa+Y+FbuoUMP778zI671jryPaokFb7+k5A9PEMGvn5CCT5Iy5M+1IG4velY17yMwY294pY/PdOG+L3l2/o9seHDPe8jUD52jhs+BfYZvbmMQ75wOrG9BJ3sPSd2O75suOC9OJhKPTHRK77EU5Y9QnigPdZKHL6+YQG+2rckPq0Obr7kqKk8nvkzPs3ABz7sFRa8Lp2YPU9Zdr5KcDQ+wxi7PQofQL52oFG86F3hvU61d7zgrwy+qUDjPSdII72/cDm+9wDbvUyOnT2J5Be+ULSwvR9Sob3X2UI+N4IMvsZIsb28Tgg+EIr6vZf4Xr4XCi49+J2NOyrxrj0rQ6G9xbhpvbPEpTvSSrc7V/LdPfir1r3mnAg9mClMvkYrHbycdW2+T1MkPtFwXT6GDri99QKlPWxtOTylkus73TT1Pb5YtDyBQfS9+QVTPqGEqD2YmAC+1B0IPqw2Cz3ZOC++DI4pvt093TschBO+gFHHvVowqz1clUY+4bsBPioMobzBbJU8JZ2SvGlKVDyqWYu9kchMvkVfH77Bb8I9JxqDPZ0QujvRWOG7Ti+uu+5h+bzuiQS+66vbvRNO5T1OKJy9TRJ+PrUnm7yHa2q+VGy8PWhwBb0tjLk9t1ggvgoix7o5Dwq+Fm1WPtdygD6Q1Ai+MuETvtKsijzFbnc9FNVgPlm8iL7LPhU+//YtPoxT4b3OE0A+rheYPH6PJz5HoPA9WngbPorOlD1eCfk9Z+zBvVCsnrwnUSG+RagrPvdytjz864w9gSkovlMlBb5rgQO+v7uIPtCyFz4dfKo+OQcPvE0aCz6mRqe8QUAKPhJWXr7GhhK+z+/XPdEAOT6GRTQ+IYZsvRiycT3o6Y08UUSAvo7eRr7R8769OWt3PqamhL0N2eI9mkKBPsZMHr40T9C9d828PYXudb3XfGa9sMANvOBmob2+OAe+7PAtPorddz5RdZ48FshWvRpzcT0Q9Qs95SWNPJa7iD7E+wC+u/KFvZwW4z3A++i8XiMQPgF2o7xC3xW+2sUZvrRNDb5RUZG+YN9jvb9RNb1bRom+3y3fPehSCb4WkQM+598fPpV6BT6aRV+8dzpDvu27Sj7uTzI+uK4ovhw2+L1Ep6W9c6LavdvE7Tyh3mq98twzvo0Ye70QQXq9KKy5PX/+AD41wZK+UePtPBq9JL5SJRC+pvEIvtUzkT0SWko+rPUQPg8fNT60KWO+KtELvnLNXD5bTTk+YwUfvkZRXD29yVs9ZsXYPL4M8b3RPSK9KceAPZ4Spbwfcek9JFU5PvEmqT0ElOM8Wm69PBw/5r2XfTq95OiKvVpiuz1c3RC+gAoqPijFmr4FG7Y8n/lmPhG0Lr5RTiK+oLsRvS4Sxj08nES9XQTmvcYyjr3vuSa9Ps8vPb1jJDtAXG++ZhNIvQotC74nBHc+CAwwvq3fQj1HVmA+P7QEvqDYmT5kSRE+lOtYvc3WS74wwxS+V1+3vZEDzD1I96E9A6VJPqs03rscAR88LWtzvpMVST5LfaU85EusvalCCb7MwsQ9Gc7zPXWuaLxhYZu8tow5PuzTdL6A9jk+V4hDvg67HT2NV1u+WSUdvnfl471tU4Y+a9HnvRYwbb0UhJO8MJSUvT4hfj5YK0E9GCrSvds//r2cW12+20iHvIgGkzzhIPE8nDguvcGfbjz6AAU+atgPvj3o7btOTiK+QsnWvfUPwr1nn829CLc/PcBYUD4teQi+7n9JPT46L75Du5480kJmvTJGQ71aP/y9SQD7PMh8qD0t24898U/rPdXFJ74IQR8+u7BzveaoDr7cuvI9+yx+PsG2gL1ESQy+cubVPe0+dTwWG+E9LjXruzdmjb2Vwcc9uSXPvREvXT1tYuW8YSU6vcatHj7P3y+9jv39PesBVD4iQIi9NgqAPo6DAr3RIEs+79PlvEGrGT5arRO+SN16vREcAL4pD0C+QqxkPskPBb7huC2+r1cMPSYtdr081S09B1yFvAp6DT2G1EW+Pj0zPpWO6bwRrZE9m5YvvbTuGb5uUiu+bMGnuoLhWL7QTwU+CmIAPTVfGr3lRxq+NqdGPmY9oj3abKc95ocbPretuj1I0ky+RR7tPXaMnD2xjOg9jjoKvr/eGz7PB0u+g/++vfRDnL1Ajlw9vbh+PpcZDL5eq9y9sg5mve02pj4NX3097wBPPtDtvj0dxVa9aJgHvmTGID2r4f28vpt+PSZUQb5cOi096hzrvb+/kb7SGxw+FpxePppWdT11eyG+Bm5tvrV3ID5Rh5s83aEdvguSVD78jgM+9PhGPsc3fj0xYPK9pzYevgweSj6AEmw+L8GSvWQIKD6nvIe9yiC+PVK13rwuivC9jXwdPhZkIb34wCG+iflNPSlRAT4Qnjq+HiApPldSBL3hfAm+HcPJPbubG71AEGM9H5Biu1gjCT5HDFu+ICMlPj1CJD6ywxE+ZAc2PgOzoj1pUW49jVuYPei74L3dQEC+tFcGvGz4X76leOg9nnRNvhkrV76LcRq+aZmivVykK76PDgI+44USvTgagT35CRm+WywFvhKkUj70Ytg8FJfAPXNcJD5huLK8UCb4vcuqYrwrk24+YWRFvsNtJT4hfBk9hto4PTdnor3COx++aiBqPsz4ID6sp14+9WoOPvc/1z1nYZg9FBlKPvfOFL5BGpW9My9Jvd8LeL3LSw2+JrpLPcGDILwSO++92UwuPvzvIb3jk8S8c/sfvkodjL1nfsa96bevPaWoPD4jZ5+9DWfiPR9KYb2GRtI9zy3wvKvhKL5GWoE9Cd4lO70RWz05Jse9RK27vbwkdTxLcke+1GZDPJVn072mMfy9HIKVPlei0DwhzHG9rWNuPuK9LT62Dgo+GyV8PXOvRb5EHU6+Nl92vHWjIL6ISha+BO1vPqY7dD3Bnto9RS1ovsXOfL7DWBe9JTxEPj01kb1DiKg9QeM0PfYiLT1OKSw+ArMXvsqX+r1Wrrs91qiKPTClfj75/AA+l2O5vJ/IcL3FzQg+etzuvaybzL31kBw+xPF9vrtUSz012E2+iH9BPlqIeL7+rkQ+ky39Pa3tA75hd509UOlDO7sQ4rzlV4+9alxAPnibJr6oBPC8GNgKvoxOPz4G8Rg+zQ5BvTi43z2Uvig+NbUCvA36cj6iJxA+N9eBPqZWXT4m2X29GegxPeOvBD7S0/A9+YxDvk3Uebsqzik9ZGHdOrwNcL3Ct4E8TcEcvNQZk71JnHO6Jid7Por8JT0OKwM8XQY9PjztzLxeS0C+YrqhvRlHUj0fksm9qQaRvoy8wr25+JW7bzYMvdJkCD5iA4m9LRVcvc8IQz719I6+xwqSvndcDT1KTNQ9NDfpvRg1S77Q0Re6NCmDPaDe+73TO/K8FNf8vMkldj643Ma8fRXwvYjvVb3FoN28SYS3PLkNqD3edla8vWZHvpcVt71keJk+gfC0vHH8Jj7R+UY+DRV8PeeO8r2HlC++0itRvPcHML6MEQi+UTcSPrOeWz0BXAE+frGwO/1ICj7zH3s+bj8VvkwYOD559JM9NkcdvqIluD38n1G+JuFYu1CjNL2Sbtc8JPTnvLMuy7xGnpo9QoUsPipccj2+L+g9Nj4aPkZcW729hUS+ZVl4Pe2HMz4Q5Au+D6xUvgvMV74JJfY9rkuoPMU5Tj4CiO+9kY8yvhb86r1Gwxc+kecvvmva1b2fvTw9FugQPnYqqL0eTBG94KK0vBGodT3Inlm9ZGQyvkR5/b3wRKE+VoQXPgFrGTzrlHy+MKlyvvM/WD0TUN09Ruksvo2Umb3mvBM+Ju6YvdF6wD3T+/M9HQ8GPXMqQ74S5bQ77GfavGDrdT0O3Zy9WgP0vTdqg7zyHJw9xeNtPrOqMT6SENg9QYECPR6IV7549Aa+A3lUvjVYTz6DJgi+ctdOviPIiz69+EM+JM1hvYEGmz0nR5y9sXD7PZRPYz0YQzg+9c/mvUoNeT3hzYm92OQAvdWhAr05dw2+7x3FvILeh75T4R4+EN8SvmYVK74mtRs+Z22dvXUaqb14Thy9kUFPPpnxMD4tIXu9HeU4PiDW671d88a877w9vWAvbTtAe8a8I8/mPcbmAz55eDu+zQEfvU6Z0r0Vyra8WAfHOne5t70VrVO9LOSQPfodij2ad2u9jQ+RvMibiLow2oO+aAnmOxgXiD1gbwK9cOUzvsqyij3LkDq+WkbMPbn8OT6e4Dy+zPfiuxQdcb6g7Ik94LLrvXc9q71sYFi+rQpWvkJ5PD3rrDw94GVHPPAVxb1CSe49f/sDvXkndT4LbS++2Ru0PXENhj462F697Mp8vmnBfb68HQI+bX7lPX7HDj24NrM9x1ukvLd1yb1q8YQ9B35IPvUiE75PpsI982revSIg1DuNDKY7oEMqvvNuD74RRzK+HqZ3vgl26T0E2WU9gozlPVtkrDz59BO+ssxnPP0o1j2CRcg9fsjRu2EfYLykSEY+ktf5vSQvKT4zCQE+RgSxPRMZeT62hSA+F1jfvdpNg73BBEo9XcrZPYyCY76+ZsG9WsU7Pc0LG75kFnG9EXGQPuQfXL2Xn4C871YXPqK3f70V4DY+3fQUPk/XaL5Y38Y9g8/nPaMQLD0eK2E+FMOHPvR4nT1/Nso9WqpLOq91KD4uFIA+luQXviSTvDyWekw+FB1evgYT+L3QDXq9jmi+vFMwVT6G9EQ+L9x+PfMKAz7HJ9o974QAPdkgLL5sil4+ApKiPaZDHz4+6XS90BVtPlsQKz5fejY9ozqzPRLmHD0ulII+DTqCPBjMW75J9xM+PqDXPBsiojzqex8+2mIcPQO00j2kbSe8+P2fvTrNY75+MBi+Bzn9PRuZ5LzCxf49+kE2vrGNgb2M4Sm9fg2rPUJzUrynMtK9E/swPet/Pz0T5oQ+H0aVPaNMJz58vJw9+twUvB2HMz6B3QI+N0oUPh1CHb7a/KA97gkvvqvJ9zztEGw993yKvt3wOD54w14+zBaxPdabVT759UC8UdWyvSgBh71ma+a9UqBKvqTyUL4vhF0+c/vJPb8Mwbz5AoS+A6SRvR4HO738rh++sEvoO3wGN77lGF++t3o7vnmyj76yqCY9RY7UPcPclT6evhU+kukEPSDUoL2O+Re+MZj6PQZyk72w/T0+WKNRvZgJMD22RoO+RLm6PciF+jyeXBy+1lwdPfVFDT3aTSi+zz3ovS6yAD7qtgi9xHMkvqiAlb40k4w9Vlo1PuR0aT6Tz3G+ci4Lvg6k4D10KGq8RlsUvgF/Q71hMQI+gP8BvpTZhT4oxyS+AmMHPRNwJ74YSt29WFpNvo7vdT4DBwE95yirPaaJQr5lDYG+ijNzvohpAD705SG9zkdFvlQNJ77Ty1u80pkLPkCQhjxbCZI9giwwPqrqHj6xZnK8UuE7veglPj272A+9l5h2PYeKWr7D2Ka93x8QPAON+zy4/TS+24cAPnWq7D2fsuq9xi2MPeAg772NHOw893GHPq0c6z2CauQ93IXoOwBZwL1QllE+cqHIvL2+Ir5ZOE+90bQ7vXd/Cr1X++o8XL21vB4LE77DKq08muApvptPDT5vW0g+jx8DPjYZOT2pAmy9zdJwvqqYqL1mGQs9RE3bvVDPND6aSjy+kA5TvpslW77bNj8+HefdumVSmz2Hn7A97tmevHYb2bubbqw9Owcivqu8lrw6ioE+DclwvtScir6Znk+++nklvqI+0D0J+lS+VLRzPSfuFD7B2Qs+FuZFvouQZz34Sxo+LNY5Pkcx1TsEXBO+a3SNO+HGC74NBhY+1xrfPbifJD2Hp5694vfVvVhEqrxzw0S++Puavhfa8b2ZOja+yamBPSpViT3pXYO+ap+VPTxYnDywoyA9aCCxPbCZRb3K1AQ+tpw+PqLjCb5bHAu+mLnpPQW/nz3Cd8k8lSe5PZQqwz3JyQC9+MupPa9LVb7aSX89frKnvYjMR77qvPs9ywFdvh2mZ70rDg4+esHePdYwG75l9xa+Uls5vjfaEr4C1y49kUo+vrCAbTwSHh4+50rCvabKcr1/+HY+WBNavbajGT7PATe+YWbovfQkLjsPqOg9LyN1vOpkjryQ43K9PDiwvYrmBT4NQVE+A6uGvho+AD4Rccw8ZTsBPuVKsb3URog+gTEovtr/hL2sc4Q6QBOAPsWodT14fzi+9kE0Pqv9Mj4MB4q+T69JPrsjhb3eTmQ9PsOSPXqdA77ZnV29WBiivYTdir2PvGG+5uH6vUb6Ob0P4aM8UBKnPVj9AD4L7/a9abtsPZd/5j1zVCQ+SJS2vRvajT0Ylza+Vk6aPuGUr72ZQYA9QcgCPoPznT33tF++7A59PsV5Tb1Wnoi9ue2PvhOWSb4J3oq9wkiLvbEdcz4WoIO8UjeePntYBr4nOHK9NtiMvVxzW74fjDq++v10vuyHXT2vo7E9jepsPOJpbT7HhU08qG0pPsifHb6BpNw9ePDIvW1uyj3jhuY82PSTPclA3b0wvS6+gdxKvuG0Wj3e88s8VNkLPlzROj5Pzm+8VLYhPHleTb4TrRW+ITw3PrmyfTzM3kI+zMC3vXcplD3uqRm+fdXbvcHhCT7eKHi+VfWYvb6mbb6sOdU9beksvuUe5TzxAqc9QUslPrJrsb0aNT2+1ksAvgA6ij5XfhE+oFdUvGEpyr3qxM+8cM5EvrV+MD5aKXE9Srr6PRvBhT530pG9upZJPqBDND5+N8U9S8NQvSeMhz3l5yq9yW5HvWXTWb6FKy8+T4ryvdcIOr6KbQS+meOrvVUmcT2BNQ09CwFjPVP1Pb7QT3e9sfusPRBWGT5tfJw9VZr4uzDJvz3IAYG9CprbvSaWDD7Ek5+93ZO/PQRjPLxQeFC+j8BZPlQqGD1A4iU+/lADPa7p97tuYoI9fCM/viahmbxZj7a90s6Ku9q/Nr0Xrnc90I1JPlw+ab46IQ2+ABKIvlcAFr70MYU9a5iBvfynpD2S8Ws+srkzvhz4N74Gdwc+y2F2vq02HD7IkNk8f5wIvjPhk73iTk2+b7ZDvp8p0z2kR7c9dOUOPnV9Fb5AEoQ8oZg7vhJFGz4mUfM9Lxi+PcxQhD4f7jy+7IOVvdq+Cb6XEIy9IIlKvn6UrTw5mT6+iF3IPSVWmb33eyA+2pMovUU+mD1YcUy912UUvcjtb75Vk1q8CWYVPa8lXD4cAIq+NeBtPgS2wb0DSwQ+7uFEPkg+WT40DQ++DEJavWmyPb6wEEU9SJ9RPgUazb1neV07DxQaPhMwSz2GDFa+ynaHvV4YrTysSyQ+BcXfvGb7NDuQ0iS+IA8RPHykPj6eyk++3r52PbfoLr5diAQ9QQaGvCJJOb6X6k2+mGJpvhXnIb5VFuy9N7lIvDBZG76VZRe+25P0Pdwc5z2GkQw9ZwAwPqE2fr1sITA+Zh5NPkjitz2jP/O84ys8vkqxXjxwYWM+hgy6PBxAYb165MW9/j9lPjvzmj0/ajS+KPwSvmnLDz57wxe+QMniPEFzvb3vZly+1TkcPtiP6L3k+5q9JDwuux/pD705iZa9bvzjO5D4Lz6IPlo95ikvPrYm+728t/e817ZLPh6SkD2HrDs+CM+GPK3ryb3zv06+gBYJvrYOTr51ntG9tj9Ovl24ob29lF29MT8iPB8yML6WGBC+nM4cvkIDUz6AiuM9QlHFPTiYY75VlAO+eSqcvnwLWj79bWg9ElSmOrxLMj1PAxS+6AKFPjHG5Dy0gA2+QQJJvvuU9b0GG269wjokPp91AL5sy+s9HZQBvv4tMb7d5VM988TmvdZzlr1kdYa+dVpdPQMgQL5c4Js9mlhxPJ9xbj5lVBE817YNvo8l2j3f0ra7BeLuPc/MCr3A75w9dPSOvZeFxj0kxa49o8hovVgwoT0S4ns84sAPvrDlOT79pmm9aaTQPZzTZD6n3Hm+HHQsPCZZpj515jo9KTgmPQffQDywGPW9bAmGvenxhz1cM9Q9cj6yPl6Pez1lz/i97jLOvRlbbL6Vn1k+KTxQvuuPhj2bVKE96GPXPSdAWL1lhRk9vPEoPYXhiD2raKY9VjwBviXCXT4KPQc9dvamvc0Ns7xYF0Q7Dj7RvWtvE767qjY+EbkVPhw6Xz4kdCu9+AZLPtq8aT6hc5W9MPzQPV3Cirz7hLU8jU8ivrwFBT0clcA8ePh7u8USwz3X7Di9oewLPq1YSj1Fb5Q61feYvO2EtD1aP+e9kh2XPMNILD5UhbG8v7f2PY4nYb57HtO7VeapPQPdP745tR292kC0vY/GRz6QgKw9RuT3vSuKlr3YIku8X8RnPfX2OL7uqBC+fzknvuxlBT4DAQG9xGhMPj+u9D07l8c9ebaPPTo8ej2FY/M9zMkbvhDHvj3Hrhg+KWshPuJLib17zk6+3pnBPadhRD5dcWQ+XFjbvUnK2DyVMrW9t4oSvvnO5L3KvLe96tmePVWZRr72RPm9TYlKPW4ZAr6Jtom8rtZwPpW2972TM2I8nfzyvCdzcD3xOoE+9077PO4xE76RpnK8lY0EvrbIMb72w1a+mZnhPTcI5z3wdXc9HuLAPT34ab3GEAU+LfvMPTr2Bz5V3Su+INZBvtlLPz4IufI9JnxavIfsLj5655c9JZALvjChpL35v7u9kIMivrPkFj7h7iK+5MDGvalYB76WTxg+0fYPPlelEz7Esf89OiI8Pu7SVT7KFjI+MHgGOhYxxb1f+ZG7F3Y1PpxGjT3RQrW9C3n7vDs0OL5rpsC95cOgvfoRrz0tlSA+RjaSOtcelT3H/6O+0aEEvX3gu7xA9VY+8jQZPaEWxD0AZXe8M7lMPpNRrr2FoCE+Jd0UPvBZEL4jfsw6v2vdvEutxD0/UgO+3zHYPVAhJL5CU3s92AcHvu+mG76r68W93R2LvaKSKD4N4xs+eTSNvi6zC72CWzS+LpGjO7Su9bwpsDU+cpfwPTdoAryhqRc9zMstPV6URr668va9RxoOPl+znb2C+Vy9kVI3PkAXhr0sU8W9Q79QPt6iRL4H+5i9FRsLPg+EKbuiASY+KyWwvaCMOT4jreY976oavSTOGb5h2Q8+L7kBPqKbn72FEfG94FSPPfVLRL7i+Lu8YGdHvtBtFb6Snig+obR8vcdd9L0FVDA9C6GFPc0MIb1U5du9P2cZPpSfVr4y30I9so9LvUZgLT7ZK289UBRcPkNNT71XcIY+/yWNPi7HETwtAQQ+5pIEPvBngT4hprG9N/wzPrDsRj5YUUK+2mYLvYsavz26KjW+LDRgPgW+xD1wNHC+FO3+vegd7r0YzKs9fRAovmX/LL4mPRc+9Sb1vZGnlLzzpkA9dirGvQPEZz3al6y9cYEbvnVAbj06iiy+3FvwveweEj45NhO+elMpPqniwb3jZim8itkkvr1GPDsCbxK+b8znPJJFqbw6k549/pspvYPSmL2a3bU8xqN+va69vzqp8xY9mvskvRlpW7uv7fg7gSffPdtblT5/0/E9LuSJvVERLD5QCys9Iw7ZPT0wBj1o6wu+Vi+fPWjWcb7BbMc9mHXzvXyGWT404N69EiyVPEcXcz7pFcA9frOZva9JOb5gv/c9+L2mPTcTszxoeK48nL27PYGuGj51ohI++6UFvhStiD7J1ik8e5maPieiMTxIDMw9shHoPQJFUz27ykY+1k5rumFthD4VgXS9NtxMva7OtLxYH8e9PmXoPbDEP75fsga+B+d3vROhBL7ksbw9Z4ojvSuYX7zgHoM90MVbPhXYPT0TFRe+HSVXPD3oN77PTWu+BJQmPueYSL7HowC9d5sEvYFd3T2IVus9WwVaPkgRLr4ogMi9PA9tPvVkqLx87zO9ttdpvnoDij7XitS9wxkivd3JrD3C8b88hYkwO/XS0T1i/Ba+sXHovOSZqL3Mtd49Wz2APWZiPrv5gg2+rdr6vYurgrz/42W8bmRcvgcmRj6a3b69tYLPvbQcS73Plyy+2ycRvvP6HL2krqG9p+yBvtXZPT1G/l6+9W+PvYh0br73J989I7kUPt9wCT552E8+1WFHvjRkTT5SUVy9wo0+PuBOTj40CkW961ztvbjzsL0w4vU9OpN8vNoZ5D1KmRC9JqjKPbzRUr5+iVC+5G7mPUHWhD66Jy4+q3QZvjxmgT58q06+BAQTPuedDL4EyJK9Xv83PpYMFz69GLO9tqpIvkDWDr7FR789TNcJvooidrxkDwg+U0YFPgm5TL3k3ry90kTNvCPdbL4TWQs9DZF8vvr1fT6UAVq81UQ0vqS6Sj0blEK+X2LpvckVvjw5sQ2+bJ5Fvqh1Mz5bL2S9oWcSPnxWAr2uKag9OvNYPvhzuL1TLdW9MfCgPYAriDwiYFC+rL3DPIsKDr4o96k90oUtvmvJGT6Ac0k+Ws3oPclgVbvf3BK+9ldZPvLN1jwx21S9KgxmvgBLEb52Tzi+4/EQPTmvZT1DHEw+h983vm1NxD3asPQ8lxrgvXt2Ib0k/oK+YsQFPsh5h70P3iM9gmp3vs4LZr0q0Z49Ri6WPfcBVT7Fi4g96MTRPLJ87z22SVW+l2x/PPdJRL258Ru+PKN2PmQ06D3DR8c9SmUWPkVkML5qan+9VzGUPUmECb4F2cI90EgIPk7zDL2xWBY+VeA1vnkNNL6AC08+/OCePMGSkj58vzC+yKoDvYVfEz6VwQE+1QoAvhZLqL0UlYG+hsPrOzxTjj33MPw7908pPmLG0b0EJWG9M1kxvil6Zz0f4BQ+ur81vT1jHD2nPD89posZvk6pzj1/j4c869R8PR5FBD6cONs9V0UrvGLSCT5W/Fs+I4FrPfr/7b2gZf297yu3PS/CKz3uYL+9tIeoutSzWDx5sey8CQlSPYBBXL2OBlS9Y6eCPRxoWz7c5DG+E23nvcqYNL5pA1c9YghIvl6e170S+QS891yzveMnRj1rxbQ8e67rPftfcD5iWq89SooaPiwWyTwj0Mi9MoUbvbglNT2Z9JU9g8UMPoYM0Lwsuvw9hZI5Pt71X7tBYQ++I+yqvUrjXL5KHVM+6tZ3vfHrHD3c9Sq+ijUsPqiC6T2yAsG9MUwKPmwjHj382+I9D0KDPW13YD7Nv0S+WJPfPVQww71zdl4+GpUBvgHyPj29CT8+lHnau+kua76k9CU+5zegvSTYk731zNc9+l7tPdXQCL5EZQC9MZ91PYzSWb556sm8VQm4vM47XT2iSlA+NKVMPf/rLL4PB/i95O8jvbdxEb5B1tO9U/svvcu9NT0aFQy+sYUqvmAXv73r+Ay8UtC7vFHsrzyCEhW+Yh+EvQQkRj67KMQ9ZDiKvZlN3j21xHE7pxThvdNLvz2KVJw84KkdPoutFb192nK+fv0pPqEgDD7FwNM9qg68PRWAnb1bImS9Wc5QO5Jdpj4o6Qe+uNHgPYuR2L3EGwY+N6bEvfO1mz1MmQ4+mUZXPhVozbxArZs9tPrkvWMExb0UVwO+3YcPPWDwNj3XLBg+ZpzevTWOGz2+hGK+JdO9vfZnz71cvG+9MgzGPOpmA77apCM+g0IzvmRL4D2c7gO+4pHlvXY1ez4h/408ZngUvo7GCb22jBS+fPXCu+FQ1L06A1c9El0EvpdwIL4xHV0+A9/UPQMGXT5YTIw90dUwvijyeb3kyTQ9plCBvbh2yTwEQrE9ZzpAvTC2ir21ZJA9M0oJPmkz7L1Wjuo9lBXlvStWKz0dfUU+cM6bvY6uPr4DYcu9qeqwPbrTHj0azhq+BE1nPfdfkT3GMy2+0UDcvfvAg75uC2Q+VZk0PqcfRr7wc7Q9HPyyu3RW4T0hzN29kJkWvU1Z4b2Kn4q+OGe0PVZUjD6DFJ67AOqiPCGcOb7/J10+7Kp4vcj7nbgFmSk+k237u5nOE7ybLGK+X9IePqBeVr7Ea1q+gRBFPmQ9Sj6BBS89jDRSPqNS5jtkdRe9ugUgvbY0XT4EOo882vjJvPGR1T2s5pA9OyJ6PX6l1jk9di69WlorvZRPhz6Ol1m+ZE92Pagxib5S6E8+9J+oPVc3tD2Ls0A+xkcvPH95bT2Xm8C9DwLiPW9HAr4xcQa+yOQ7vvqv7ryFU4g++T4mvhjSuD29B4088narPUFFNL4UA0q7/gwWvjYtK76yP8e9JZWaPXvIKL61wxI+uWmkPT7jhb7P2mi+Yx1VvqzDmT4OCPM85+kEvfTLS71oeby8pgUkPjI4PD7yfI89S5xQPQWWsL4nl/M9lB8bPm5fTz5jabu9A3/9PdjxnT3cWqg9F59NvpXshD14yha+Za+hva1TO753kim+1i03Pbeveb1BzRy+xYTAvTHG5z3BEQ89Ab44vkcb373fWYG8bxiVvMsYI74AT6K9ASRJPtTFAT7KA4G9maaAvtzHU77qQdm9HdCJvCxra74ICuC96QAmPjSojb39Zgm9PSsaPulFIT52IYS9xJPSPY69yr0PBa+9DUcQPYDeBD5tkpq6sdjUvMtIiL1MdNw8pfizvCNHobyk4DU+52t0PnxZT76PR188Q/k+Po9zHD7R6DE++j0Fvlsixb08/6U9ujicvRv8mb4Fn8+8Y5riPQaLmr4HDUa9OLftvRKO0D0lM/G9B7JQPFKzGbzUd2y+VwQpvoJqqb3VoAY9xJ95vs/gd74PAhC9sd5Hvr9Zsz2YjAC+3lMLvJx65D38X4M9THNOvlGitj2I0+K83zFtviutNj7lVRC9RbJDPqWRQ72KCim+H2CVvjxaL74BjHU+N5bpvcqfkry+dNW8O24IvTcPBz1Uuzq+WS5KvWaXAT6MHbg9BwOZvXGEVT3JBwY85jkoPnIgjT2ZtdC9d76dPQXfsz1DBL69ykUGvMEaMT4H4Zi9vXWYvWmFW77/TV+9YO1wPTss9L0n6qI9vLuEvly+KD7GYqE9muutPFCw5j0KtCS+v5Rhvm4ABT6Nhdy8gfKvPLCsi71hE+69Z1eRvi8TBb7zFuM74WaovdPqNj48mK697FNcPvrORL5PtS4+zSkPvQQ+Kj7coZW8u3YNvjKnUD2MuaM9sUnOvaeyFj75z848I/1cvQkpGD1zYV69dculvtvbHL1DBbc9bF+wPZSDw70Ytvm9BBt5Pmq+Tz29X6E9q29GPeIZBz4042i8m+hVPj3Xsj2aZU6+BVuEvqupcL1d/A0+wtp9voMHIT03ZoM+wy/wvTZRIb5EAIi9m5ewPWcwDz7cAme9pi52PifNvT0VaKW9BWXuu+etOb5rONU9hmgNvrA4KL7cit89eTYPvs0HubxKAQu9ZlqjPQVH0L179ZK8zoF4vQkPJbwapyc9AtAoPrOS4z0TnZy92rRZPj7z4L20y8a9LvjhvPStyT2NSog8vpnovZBLcL3e3Ou6nIZQPnF2yT12tti992QlPHhTV7xvNa47Ma/+PTbZXz6Cxzg9yZmFPeOGBj50e7Q9dV8Zvszjpr2yhPM8AMYWvG7x6jxxbQ0+8/eCvgZ6qz1PJEE+XE0wPTfNPL32Aqa9Xy9gvui0fr30jiE+Pq4+PtzEQr2zTlM+r9KwvdY1eT3by1Y9CjoavLaj7D3NAKK9BrMBvio/6b1yhSE9gdhbPgzbVD27oWw9w73LvV6QBL43orC74MAVvv2DH74sLDs9sBogvvHmNL6DLvw99EnIPbc4qz1AbK68SXKaPbbWrj57AH89YMVmvhBgPT7S6v49GOQFvi/uaz1qmUu+HNQnPqZYHb5x4Qo8RuXyPcUfhTtWb+s9dXKNvn4TUr6qhw++OQY1PisL2j3T73U+cxosPszMBD7yQoE+mde+vc4iTbw2sZa+mz1bPh6PeT2sG029T1OsvIodHz7Hm9o8MUlpOHGLWj7GSgW9rjxMvnp9/b177qm8gDM2PiwzYb2Pthu+TVRLPpcdKr2AFCi+S+IoPrZlmL1p48a9O+nFPd1oRL7j9hq+wOmNvhkoHr5r6oa9VArGvQ3thL5fufU9JyxKPtIdGL648L+9b2urPafXLz56XRO+m3SSPbpZnr34ZWQ+rq84vcPDGr7XW2M+1kTePU61Bz78ITy+bdLdPF0e5b1jAwO+6OvsPG0S3z1od4S93XEFvj1+OL7oq10+5KECviAa5z33n8i98h8+Pk5Ij72tLE6+xMsPvqB2Br4M2n4+7O47PvaXnr0wUz49KwguPng1hD21BYc+5zVKvqRCrr3PTJY9i6M4vl/eVL6Uj7E9z87sveYTdD4KEma+4atGPqnqMD4+JuO9aaxHvolY8b18rlE+7Y+0PQ6rD72nwdS9fwtvPZ/Xx73vNig+xCklPYkGyj2PpQ8+bfXJvYw+tT1BZQ2+o1c0PYQqnz1F1Tc+qnKKvYS0L77cfoM9kAVivbMfV70kMdc91z4SPn0oaz4Ip5I7rkMIvtSXLT6Tn8U9YWoEPhX/Cj3gjY2903geO0Z54L1Gbqs9aERivglsN775SAA+sJhpvLVBFz6PquE99tKHvm5AB71qtcu9k6jVPfvFr712Yy2+1WeHvpqmCr7QuZu8bpTtPVrxAj3OXwy+1r5EvgPwH76KCym8SJ60PW+llb3CbhI+gcaMPRLMAT7mjti95tLrvXaDAr7H4dm9i6rCvRCMhT1DnQq+WiOVvBQHAb4l+IK+SBAPvj/hWj6zpjg+EGNqPpw9Kz1a+4k9YXR1Pr9vFz5jcgW9WhciPjhYk71b5CQ+Jj4jPq00Rb5PMt49p3OfPSMFJb7Igfg9UERKvvY/HT4BmUA++KViPnBzS75gei6+I51nPg+p47yg6h0+KN3kve1oyzzu1Kk8GU9sO19ovzv+p629lBBFPeO2Fj5eH9i9BnyruoAeST0+ZSC+TaJpPu4VN70kFoA8c7uTvSPRlz7aXIq9tgugvZ38pzzrjAu+9l4+Pn9VJL5zJD69k1xXvngRAD4jLCu+lTc8vbBMBTy0EK69U4MFPszGnb0vXt29xvSfPDN03r1/1/e9LUgFvphTYr4mIDO+LmxSPn3VjT3PzQe9XbfgvX+f3Lsz7PI8/47svSjWFT2b2YC9bDmDPUu1JjzAAv28ohVfvZrXDb0S+BU9KY09vm2YZb167bE9DxQyPkjWCD7Z92E93CE+Pns8D70Nskw+ckvCvXc4h71mC1k+/i/ePfb65D2TlTG8NZtLvjE1cj1Opdo8Qg56PKC/1jybTYm+8borvkX35T1VwKu9/ErevV8liLtULqC9PGOAPPgSz73xlBi+hFM1PoscUz6l5lC+JS/cvQhWID6L5FI8IPsAvl9aiLzvNoS90nAlPsLBoDy3C4E+abMsvqdtGL6iNEq+SVeOPSFwADw3f6q9rPswvpqWJj2CLkc+YIEGvlzKN77MmTs+dIUtPlJOJD7O5jU+QM/CvUT/IT4xBmS+CFimPc3C/L1t9F0+W9mAPcCxpL0PVGW+MywVPjC6Fb4lDzg+veJMvhJl7720UVe+3jbfPQTGzDy/tCI+RxnbPYBw3DwgcLi9TCYevdYdhb3csU6+qsXLvdLzhr3WPQo9Mg9rPu74Ar46zsK9ejmrPeidbzv4WCi+/OMkPuhCML6Ix0M+263ZvYAp2T3RfZq9YZrBvdeTGj5BKRG9mfF0vsifZD41TFI9sP8dvpGFZD3Eybk9lfpGPl4A9r1OT+E6dQZQvpTyTz7d8T6+oHRYveBPzD3ge5c9Ad3HPWdDLD4mPx0+XmoSvthyZ75l0ba9lQnGvcVBFL6C4mI+oAydvYT5CL4RElY8/xDKvRIcYz5dije+XhuAPQmnUj7zsvw8QvTXPUrpyjz8QTG+ZYsZPmdCF75p2nY+sxvVvE79D74tUUc9KmMoPnXXDb4d3BI+wWRtvkJ/5z3Z1HO9cRG/PbwP5r0Gr1i+nUC2PUU8LT5zwyo+flD4vcneRj6psT4+VVSGvPMGyr3HqrW9mkekPBvBzT22Bi0+S4VOu7TFpD18Ce+9eIWEvjuREr6T4Dy9FkA/vsHfk7xc2XQ+rc3GPeK2YT4yifE8dzkrviUnOL7qZR4+tSRRvrO2J72uazA+mirzvUX5AD5Qm0K+EpauvVpACD4B2B4+Q6+ePgX5Hr7vfms7B3OvvQR/nL2mmbW9kCntOWcoxz1oTgc+hY+tvZLVvb2SipE9IQrxvXP4Tz5mkVc+nAkRPhsDdD5AeBI+OjqxPD3n5D30qH09mZmSvICSXz41F0G+5SzhvWynJD4v/IE+JTwiPgrrCrw2egW+SVmYPAw4Fr69K4K+GtUfPg54kj1He1E+TrcDPmeGSj2b3JQ+WG2iPQs3R73FEVy9WOEVPX7tUb4TGPe9KhhSPnrX7r2b3y8+y1NYPLJlO77gAYy+YX6ePbiO4b2RX749WG36PZ4TET6Lnnq+KZihPZFnsLyips49IZbxPDYJTj1Sd2A9haUsvgg2JD4Xkwu9NeshPvKPQ7xwq3k8ewHNuxr3+ruWulm+Hv7MPXH0LT7aKg692TUzvnsycTvKMdS9FDYePer7UT6mLFi+YSwnvY7b8r0U51k+3Y0/vqVcgL2lIkK+y0+VOySc6j3A5Uq+S/qBPn+pgL6kDV6+Y23fPTSHZr11k/A9CuGSvVFLa70Q1WC95eYNPk67CT6LXN48XMgwPvoW4z1lHDQ+PHspOhON7r2/UNO9Qva8vE2uSb78jM68QNd8PtvgVb4uiQi+ImXkvU7/aD46cjy9jb+bvfp94L3zo0O+VMaivX6I3j1ohAi+IDkIvSgnt73MQ1M8FDDIvfY3+T0q3SI+srT4vfcoCj6QQPO8uhq1PY3ts72jrko98R1hPkBtm72ZzyO+PVlBvqhzW76GEsa8U2tRPix7Xr5Izjy9xmwUvfriiD6Yd3k9fzmuPY3Il74MzdC9ke+rPLXDH72cvoI+XIXsvQGKN76Q0bc92yZkPNWEPr68FxS+I/QvvelUMb4FxeM97nYaPvbrqj3212k+Co1/vkjkEb72ID4+SsQqvuVwA74VtDA+oS8bPugA1j1gtwa+BuaLvDItyDyyOwc+4txOPmYImzyZNiM+WWxOvqWaIj4FcA8+5FrUPMpVVj5z1169DyBLvd80ojwPWW69znA7PkOYA77iXgm+mSgmvgM9lL0yR009n5Y5PQqVTj169yy+PoEvvtpu+Ls+KyK+sFNsPrjRHD47V1m+uVSvPR2pn70sDO+9OwYbvUkQNL5CFcm9EP7RvRDJtj35acO92GlKPV0Njb3us0k+mnfBvSVujr1Ts608KUCxPcKgjTxgHN47Zjm5vbCwXr54Lj6+/xvgPd/cFb5Cf1s+m9OKvAZwTj3ruVe+Ls68PA0lsj1Q1Fm+AukTPs35ZD7kqXG++mztO83XIL18IWc+aZvJPVnwY7zWSii+KbYIPvARv7wNRKy9BCE0OW9h0b2zXWY+ZhghPlQhJru0rR+9E8uRvdqkkDzlrHC8mWQHPpu0uL5C0NU9cMoJPru1Ar4fApG9Y9RBvEoxEr0tNeW8TGRZvq8gJj3A/TU88evsvVCPSr42yRM+3NTzPZYeHL6ThjG+tp6kPWCsob0Lgyg9Euj5PGLo+D2/Lcw9C/R2vhR0oD0R3je9i2DJvAe9hj0xIR8+dAbFvZ3GNTtMXUu+oIvdPaViCT0CyRi+RE0ePEKHQz1KbAu9wW7SPWhx4D2ZXkm9UAZyPTewML7fL02+RdgBPksgub3qaAm+/8krPrPSs72bwDu+aVxMvrINjz1oCCO+cjnFvTsyDj1ctBG9tEWDPkRr6bzyzhQ+elIiPjcyKD0ek9c9bGBxPhub7L3IHhY+4aOnvCvgSz6zLPg9OaOrPfTOgj3pW/e812wcvos8+j0v7fI9muHSPWuxyj1zM649kAw3vibiSr6+vdI8iGUxvv8Hyr1yyNu53s70PVxehD3qfGM+60bmPH+MvD0/PSE+kVxJPQw3ZLyyhHc9EFQUvvlhvD2ZwAI9tQpmvbq6d74n2PO9s389PmS6F76oO1g+PIE0vPu1BT1SRfG9ng8zvkTaLj5oop697xQCPj86Wj1tQTu+KhckPQAAAAACAAAAAAAAAAAAAABwwZW93Mi8PIFNQT5m2pS+y/QnPt1zkbviWty84KdYvp2M/z2ilFQ+SVgSvm54bjxl/50+2+yWvcqNJj5QWlQ8/YGxPV0GD76VfhM+33yIPT3omDyCD8M+HDkqPibyurwEfCG+DltouBQ/Fz7TP+i9CCkCPs10WT1B+yi+YseZPlPycr5yS7i96mNEvenpyT1Lspk+/pEGPjAIrz0DfUC7gJO2PnRi0TxPri6+DU70vepYzj09u4Q+uYMUPr8vhb5sXru5Zc4bvpLtCD60cKq+3SY1PjIiNr43Iq69T6qCPk37Br5kJfI93zP6vfluor0p0kG+KTcWPteG0LxhY6q93e/tvaFAaj3wFN89ntOpvN7Y7T09QBG+6AJZPcliwD2U9Lk9Tn+qvQzAn77lVfY7nOE2vjkAPL1RDYO996WOvdpSOD7cYyY+CMFVvX3JWb0SlBG+rmfYvAOCaL0MY0e+Q+aaPvIjfr1dw2M+eavyPWI6vT4L4Iy842Mdvmmk3T2B2fs9pAz5PdNwWr4fduU9mJhlvaaQDD03a9I9MSTBPeomVr77VYa96xtSvRmXEb6CRTk+IIYtvm0smT0RGhY+J2mbPn2MNz7NMMS99nMePuOiIjxEVWU9+QPzPQM7DD6X8DS+QBPpvWAXPzyuM929GEiMvgggwT0iKQo+tEOGPn9rsb3MCaU9TWxmvuIClb4bEJU8NVKmvqYhAr4dhi6+zGfAPV2wgr54nRM+EAJlvrSGHT2UJjE+RIpYPnzgWj1x8IA6LViHPv+ik7rY4xW+V9xEPgM24T0XoeO8rsIGPgw4F75p+EQ+ghcNvKeMM74Y1pC9ypFGvpbQyj21g1i98sUrvhI79D1pwcU8KMtTPlK6b714Wmu+k1zjPWEBsjx5P9S6c7CKPmeq8T3Wfxe+RT1jPgisvT3puIC+sA4UPuR6TDuRs7e3ctcKvrNNhT1YnZo9dKsAPkYL/b3r6O691e9iPo4fDD1YbQY+mowNvtK1F760vlK9iRdLPoybnj0k+Q8+V6I9vo6ePr66Rws+PJZUPlwxfz7wwRW+nUlRvWe7mz7sxQO7j8V3PYJ0eD5gHgA+dOmOvv31Ory/eYM+huzTu6NtwD3BrS89yuSpvblO5j2GuAg9r14+PbswtD7FCb29F/ZDPTDNpr38Y4q9RuHevfhMgz2yXJW86jaGPlTRDT3mS5I9lLBiPkKpjr0rAq083fI8vrOXQr5NAF89vyUlPt6S6D010u49e1OIvmRPsrur8zg7CT7EPZVaY71LtDS9D258PZOidT6BcZu+jdYiPVoLGj7ynhC+ZzRWPpI1jb0Gdmm+VueTvT5MpzxH2Ek+/EmqvcOWIb21ILQ9rmeSOsZz9T0WUb89M1UYPYZZM76ZYHQ9e3mNPHOq4z3sAB2+ATSOvhTrF75EN1s+o8+1vF6nOD4WuJm87+VQvqP6Db6tg9w9m/TNPYwQWL18EKi9PjiFPWXjSTyip8+9+42SPKZDuLzT9gu+B0FNvoOOFLsb7i6+dMs2vsebpL6BC8O9wX4sPsG5Szz1GTM+rYySvX6GVT6ESXM9f2A8PppYyL0+xCE+7qtXPuQ4kj6i1AE+Np9BvtHwaT51cCe7v03RPL9b4DxGPmK+kGEFPk+TdL2nRlS9uDlfPlcGuD2Cx7m9Bd9OPiMOAz6Ag1E+LTE+PcxXOz4MHAw+wSgRPqOuZj6mbai9D6spvUn1Gz3GStE9TyEIvorqML5oBNA9sSn4PU4wbL5Rq9k+W65OPuE5oz5pig89yukvvXnFCj6BkRk9BkgpvmrAW761a8U9MR8TPpdQer35hBC9CZoRvlt1er7s38O8ejwPvumRIb6Nhza+5GdKvkAd3L0YMXA7GbMTPdnHED0OOfC9QU0CvjvRLT2/F7I9W1d2vSfOIb7WJI0+XL+APcJDaz6C78Y92yW2vXgvaD6EyPE9Q6jWvfw6RD0/x3o9IbtvPa8EP77hJ149BsE5PGRZA7xOZ889tth0PfhqNb0KLxU+DiEevjSVTT0R9c296t6gvQihpT7Ws6u9fwivPTl+PL1T8XY90Ck4Pv0Prj31IWa+oiq4PSUtsLzN89Q9juCju19nJj7F3sg7r04QvlqOdj5B8sa+vqjGvjwTi72SvAQ+QPJ7vfGTxr34jCO+Ff1Vvr9q+r39tQ++UN47vXbdUL3lEV29XbO6PM/p572oXQK+aW+ovEEVEb7AYeK97qMRvuvQHrzFXje+1a6yvRhXij59Raq9/bCXvXzBIz6ACjG+wY4XvsDjRrytwVU+WvkEPZAmRD7pQBq+kVBDPvm3Xj3jA1w+WzdBvh6IB76RFni+pbw9vah5rj1C4ys+2thgPnaVnD0Ixu89JdU4vbFQLD7Jc0m+MCckvXEoCD4ZY9S9hgchvibxLr6mYRs+bihMvkdRP750iOM91AtdPfOS771oWug9qrPgvf22Hj0LLYw+xesNvuK6vLxhPXc8y4mqviJ0DT6aFFg8ATX+PLqjVLxfGhO+a2FFPTDkB7wuwl2+dR8NvdE+Bz6t27C+Ci+evbKmKz4P1Ns9N2MpvjbTyr2kNkI+r72EPecpMj1Dvx28wZNoPZP4+r0i8CY+2coEPlK4cb1lqgM+EeVEvQU9+bz/qge+0RvkPRi0TL5AWjS+H9A2vjyMCT400c28wScTPQx/Cz5ZTsg8ZDKTPQxNFj18hW897uUSvluDEL7LyCG+7UyKPoIWXjtHyIu9IpjwPMQDoj0aWDM+FjxVvWXMqD0truo9ZDkivomSpD1oIlQ9/OHdvT7nD74AFjI+45OCPgJgWD0YGsa8ekV9vnuPTT5MeMU9epxSvieppD08Zi+9tYn2vZv5hT4QIeU8Kjftu6S5wbqFpry9cuZAvcjUeT5QAIA+lIVzPmHlFL7Jkv+9EklPviM8EL0knok+R+O4vVSMhz4Exx2+4FZ1vgH7IT2xNBq+m3/JvUl39LzuqB8+8qp+PhZ5gr2eKYi+sEZyvubKjb05UUq9WUPuPVrijz0hAz2+FNW4PUeWMD4KlK++IOdJPflGx73iPos9ZbL/vdreJ75XVRu+8aMPPvljpz1l2DQ+uxvWvez1OL7U54A6XpA8PsH4OT6yCQG+oL0mvG7ICr67mne+WfBJPfR/hL5K7M88hBo6vjhRGj7vz7q8uarCPY/3Rj43ovA9x3o0Pa/WM75mlJg9ZK1qPsvfrb7krR49HWgHPooDKb4ueh69BFG1Pc0YFj5ylwW+NS9xPSLsH75EqUA+ozqXvjMIJL7sdmo99lCPvZVSWj5dBLq7iUDRvaD2vT3qIoS9GRBtPN95Cj6IZQq+THInvoEQt7xttys+4ePgvXx9qD1gHOy9SCb4vDfG9zyHDku+eftSvvd1AD41thu+yQOPvMfpVry7qkI+VCNJPt/OKr6rWbG9emNrvuxkTz5pfRu+pFnnvcFlYj6oCp69IXu0vXTo+r1GxrI9KjqivdFfyL2o3cE9/mJSvXYVDT4JziE7ZjyIPovQJr6i3Gy+pj4KvgD+oj1wBB6+u700PmyNpz1h8/e9CfYwvskRrDwxq9O9daVePkzuP71VEGQ+GBocvYquxT2y8Ee7hJEauxN3Lb6bK4O+v+xBPZ1pFz4GOpm9OUOMvTkzu73Kpw++CQSxvZTnGr4SDhA9eSI3vo5aQb70dUE+Mbi7vQ1yYD1EbqS8qWhFPliNhL7XzD6+SD5pvJici74EQ8+8ExmYvXOKOD2Ds8M9/GzcvV50OD6pRUS9DOw5vXLIhr007g+90EcjPUhhhL58zDE9oBqIPbiK6T1im0Y+zGIuvK4Xqz3t39s90E1kPjh9m75rhWs9yJTbPdnXBL50p1C9QpkJPXWF0z2FonC+/dDJPFcicLyzdhg+CnVXvqOnyL1Dpbk9TRolPuhfRL0c3UG8xSpMPrU1KL4KKDq9l8/QO+EodD4DYuI9fAWSPHcsbT7AV6M9vAkEvrO8Uz1lNU2+T8rkveOIsL1moMG9YliTPdFy9jzUkni+ibYVPr34VD7Buwi+SKDlvT+A4r2+j409Gp7xvStcJTxjCqK+ObX2PDSY6L2DATy+VjXsvY5p9Tyq/3G9+QU2vkXH4L2gm1o80K2YviNk3b2AHSm+PF7PPP0prL66XXI+l8cZPTghR7772Tg9/2alPWbNDT3PVYc+foR5vaLPqb55ukE+L3m4PN7Ryr1MEQ69S7YvPZbvEj6fdcU7YZJlvP6Dgr2xIYO+j9I/PqBGNb4NQqE8+b1dvmNlkDrZ1M+9t3f2vQ9C8j1VUVG+unBSvYhf1zvlPyQ9Gadevjwgtrym6jc5fs84PuARh7xXb1C+xyRIvlOa8rw8rIG9W6R9vfDCCD72hTC8i3m4vcW7nD4Aw/49RLCfvrdyh738a489PlJlPvtoabyxJzw+A46YPWjPhT0SKcu9PfhwvRUCU74zTUo+9QMGvmsPVLvxBLk95JCGPbWahT301o0+4MYBPhMCeTuVtAE+8NsnPuhUQ70Y6T0+//L2vOebBD73e1s+gzv7vcONQbz2TNS9frgDvkr/Yj0NxFs96gMZPZhbJr1UK9i8VAkLvisgLD4CeEU9Ji/zvY199L2oG8i7uNPdO6xZn733Pj++KWoUPU7iST4F51I8QzYsvckFJT6aosU9p8ghPrh8Hr5QhYm97FfNPGStsL2GvNC9lV5/vX1xjT7Vz889AqSlvXrhXz5cXxS9/htCPuMMADxLYTU+LoSDPRbOw7zU5CU9k5KRvjvV2z26dps9qzK4vLHjU7ymSx08CiU9PmhwJb0Tjuk9thqFvCfolDsitI09HK0ePowfGb7mg9097NFKPo4dqz38hJ+8DHc7vSMAyL0zfqk+TkYyvoG4ibvHt0A+kxDDPeylN74izkw+ZtduvjBVJz7z7vy84w6Gvqml5TtJyk4+f8X2vIvKnD1j3l8+MdZuPkBNHb28r6K9fNQDvgv+ZD1+mKk9ZpUgvp0AjD6zs5U8R8OhPf/c8Lz3/xM+Ep0SPiAXd746s38+sdCgvCKvBD5bsYe9VGycvU/KSL7BgiG+SbavvMKNDr5Ls4O7/GIGvviehj7OUYW9Y0ROviDw/DuET++9+O8RPipNO72tlgE9wT1CvsCqlz32uJO8ulTpPCnlnT2ttOk8lYwavR/0RrzU6KC94hoXPHcxbT5Q/Rq+YEGnPjG6hD7iEuO9gtQBvYERLT5iaWa+A8jKPcEhYb2WWmu8IWADva3Ff71niMW9JAKcvaJtxjtxxda7KXYOPUoUkD76ITS+Sc5+vjxgLL1mb7y96TxDvmEDSL5vPkS+K3JyvromkL7rUiM+ciByPl6Hib0ugye+ony6Pa+bWj5kQCS+qhwNvlpyEz7ggYi9BYhtvl/+jz6G+uY9xe81vvej4D3dW/g9JOsFvpM1nz3qjDk+HKOAPhAp5z34qxq+kEsUPuQNbj5T3Ro+5uKUPYZNj71IbLw8o+zgvC3rKL5NsB4+GVlrvf2cgr1pCxy+o2anPZiTH77LRug9Bqm8PR7dAD5R1vy8iHbZvGZAqT1Xply+gOTIPPucMr44cFY9T78dvUjrAz5qDxK+dQStPsi4E75yJke+iz3CvJIuyz0Zsl0+HIPaPVdZpb3rva89HuZEPmAHfj4QnbG8pI1WvVXG1z1U0nM+Cw7BvaqrXL3hBGq+DpKLvbksGz5LDc68Ey0bvtkrTD4E5bq9ZggIviNYGr73ppQ+/jlVPb2UAb6B0IA+dY10PJPFi77ZK1i+kUMgvtjPsb2Srm09ugk2vhwCEb0kZQk+hxF5vrQJ8j1Q8FM+Ux0svmjSX75B45U9+EiHPmj1M7xc3dG9ZpY7PvyTOz6lLpQ9rQwYvccB/L2/BS68UhhgO6nhoL0SLQG93bGevdGM/j1a11S+PDqVvo1aU77eQxU+7ys3vjxkIrzdyxS+pWRgPgBreL4N6Ay+VolVvt1Yo73e9hY+o5pTPmCY1Lze24i+Baa6vcxVGT2BYNC9vOuMvn+Fwbw2gUY7xbQOPgdOWT4PSiA+jCioPfw8TT7jTWc9CqtIPWmPTj7S2Wc+NBCBPbypir7CXDM+xqTqvPQPOD4IRMk921mXvDgMbj66Ku09031BvbhyID7NERg+9S5Lvvn7M74jrdW95qBSvolciz3Dk7A9BlCXPRlFHz6fKkc+fUcvvgPBj73F7jm+LzAfPuY6yj2HI0Q+edMnvlc+X74JANe8wViBPRxiP70DFqO8+ycXPgf9VT6sTXO9lBOXvMgm8DrOY/O9qwlJvHdWNz07MVY+3a9WPkaH6r3xFVg981Rsvvv0pT0uJZg+HsHJPfTBrrsHyBw+EYBfvhzwsDv/PDu+x6B2vjhtDj77Eqq+V82bPdcwYrxkGIW+e959vjzSrjzVcmc9VOc6vm4YUz1m3p86Mkb+PTrmHT7Yl3G9tCQRvuqUDj6S21C+hvLKPXXBm7y+Gp29l+QEProUFz5fQwk+XLMNPlcFQ70cu2k+mFvsvde4/D18e0i+6MptvjMDb74mcD29zbZjOs7XYj7PlKY9DGHlvKuPJr6Yon680Hb9O4PWubsKC4M+CHOQPacPiz74tnI+sdhTvuaKB70vTgO+5bBOvvls8D2YKzw9gUBZPmLt3b1Ez9g9tdgRPS/tCD390Ug+zH4GvjkD3D2PFlu8ZqqdvU0qAT7kPa+9D1+lPQyXDT5X/nG93fSePZiQs73jsAA+WGz2vW5UJb7I4uA9909vPk2Jf76gy1O9HYepvJHegr0XIfQ9OMwmPik/lj1o1cU9RqZ5vQTVoD2vOQw+SIOJvU6CqL0eU6A7cgiFvr4/ib32SL69fud5vmKdNT646Bu+ZGCVvaTl/T1RvnY9+SfDPZTTZ71F3IC+3n0cPmb7cb3E1mC+nNuuvRpzhT6jCyW9YzBdvoXGb70CnAq9tw8rvoWkFj6K30m99pWtPZKuMb5j+RG+rGUyPgv6Mj6U8ZK92McwPpHc6r1sMkS+ViwTPdoznD1Q7Ys+ByWuvfu0qb279ee9kcpbvehrhD4YyT69Jg4pPIUf+r1r+g29ry3WvZymj75LdwG+qmhvvbSu8TuZG9W9AkEHPkiOGr5246Y9UiUrPjWe7L01EcU9yd2dPSVPb72yoVw+4FbCveSoMj72Er+8X0MXvnB2Ir5H2SY+LVIFProbM72gphU+ooadPdU0Mr1MAbE94BHvPH28YD1LWV0+22+XvZQu2Dy5s7C8pjphPmVMzj0A0ky+zT2xvWeiAb4kyz2+MVDXvbSqJr6O9n88ARxlvhnRi75GSCs+BABJvhh7Qz6vDcg6VqqevbRygb5TNsS9yinFvNdPkD4JO8Y9ZfGpPQo2Zz6jpAM9FLYNPmG9Kj3l3q68zrsMvg6dGz5xE2Q+dRYdvvMzrzyz4G4+lThqvrHPMT4K2ug8AeANPcpLhT1A8hQ+RW8JPiBrCT4UUDM+znKNvmd8OD7a6Bq+McQOPT1SHz7JB2g+WrYqPjLpP71SY+G9tRmlvXowgL0JI109UUdTPSUQsz0riO49/YshvkEUkD5ijZm7rwU6Pgka7z1oYzi+eVEXu1ILITwSS3a+A3aBPhUvBj6oKBM+hTEaPoA5GT7uteC9UaQrvuEfqT781U++nLoePGw/E772rYq9oxZJOKKboj0MNKO7Tii8PSVbJ77v4my8S6D3vbARGr5XcQG+xjEXvpZ5rr28UAs978OGPZn/J75HYZ288GRjvrRhYj5b3He9BLSTvT7uyj2U8cG8RtMdPktWtDvaLBg+h8a6vGJ44Ts57gg8csWevl8Ipb2RQou7/1VLPWCJmD1CyjY9sHF0PiYG573/0fC9UraZvLQMbr52DmO9xws3PhCMeD4VbZo9XjqgvbeHxD0h/aY9ZzAaPoe1Lb5pzvc9yRMyvpBNbL6/85U9QIe5vZY1/j22KhS+5AcovlxplL43WRc8roiJPc/2Zz5kkge+j4IoPK2WmD7tv6g9DsiIPrPsAz5d2aE+vdYvvWueBL4iJm27h8qqvG+WAj7JBOU9HA9gvv+iDr5CoJc9UFIbvq1/Hr3IiVc80BmVPkt6Wj2Pkek9Naouvs1AQT6t6E29B40rvjKdgj6JpYC+ay79PZz8Dr4xUxm+BEWfvHVFHb6zTzS+VPAsPulfnT7GMJQ+nC0hPjZMQz7IWi695YcuPqeATD1GIwG+z3qmPe0CUL4PvKg+5IEkPZZxbj7MYkU+dGpIvuPRTj6rnbW8A3O8PdFG7jzY4E290WD9PUli3b0CBoA+9pk9vuk1Hz0u3Ik8cAeOvG6pdT4f3JK+EuY+vi5wNz7TLD++kbHcvV8bkT5d7xC+bKxMPv563jwifwq+jbUEvpq/IT5O1Ew+hgj7PBo9XL3lgua97Bw5PTf35z1Bq0M9su3kvf9HaT5t6j8+Yu5vPb+MLbttud69LV9qvpUR1T22zAG+2JirPb99hj4SuL+8E/hJPsR9gb3bXdA9lfdAPoG44T33VxI+s21ePqx3bz5HlqK9qJa8PGHfsT1MWiE+e9FYvqUDKL59Ooo+di9iPm044TzfwsI9y0aIvlzXp70wkA69vf3hPP7Gnz3+SDs74d2gvfuPHT740wK+kusIvGL0gL20+lM9ZtCNvUyGhr0dBW0+hYQyPoXlRT6vOBI9UFlRvvfJBr6UALy9ar++Pal8Sr6/c5m+x1tGvn459juhlSu+4NQyPhwdSz5s8tE9DYt1PY9MTT2moSy9NtsIvQPULj1YNBW+fnkqPbi9Srxzlwc+pUjDvfrv1b0q6mI9yyeXvVPnLD54q4W9ii0EvMSSQ75LtAA+3cUMPiSnxz2y8vg9A8lOPWvVqzy2uhK+7iIJPAU7Zb6mkUe+iS2lvY2yZT7Am9m9gZ37vTIoPz54KIu+oLwDPr0Lhr3hw0A+9jyjPH/gvbph2TW9pcMSvhWHa75Dv1q+DR6cvRzNQL4dZg++XzbyvXBiYT4lFwm+kujOPQjw2D21LZi9TrW/vfQ6DL7DYSm+5+CPPY1pLT2BhKQ9XToIPjhger4pjn0+RY4UvpCW0D14x3g86FKJPi73gT3uVDC+1G0GPlECWzze5Zo8ZgwzvqQIHL5N6Tc+oZIOPhlze73xW+C9/uzyPeUbGD5q81y8ALxLPUM/hL20OAE+fKeeOyy4VT7EN0A+L887PmKCgL0HWFE+rW89vrTLJL7rjB4+7KcAPjUDP74uGw+9HKxVPkRAMD6an8k91bLzPX2FDr5Jrve9kWrtPVPXhj1KdUU+dxAlvFFA6rscnDe+nZqNPP990D3e9Ka9H0IGvsRINz2aNy8+SQJnO3ghBj6uZhe9TSAOPquH5z03wTY9qIXfvcwgMD3CX+m9jNQ2voV8VD1tggk+ztY4vJnAJr5zI1Y+kQv6vS+yQD5E1le+FF+VPXk5Cz4v0/E9WCg7vu6emL4SgHq9nLR2vD2wSr64OmQ+IlVcPjI7Gr4pxMY9d5GdPVs0TjvZ1Vi+QpZKvvctXzt18889LYHmPfmORL4t+iq8xodDPjiKRj7WqI49K1nVvfq/ib1tQRS+80VnvcIarr1SRu69zoRVviFofb4MfF05N15TPl8h1b3WZU4+wkyBPlBlj73QHj6+KohWvrGMX74hApO9vLDDPee5O76IFwq9zoFEPu6DWb4cIGu+orv2vS4nEj5cwC++w5B8PjjTor3JpcA9EDerPS1tFL5D8Zi+YLwoPqg5Sz0VfSQ+o9eLPSY4eD7smZ891AZgvL+o/Lz7fmY+M/bNvSSxLj70Wyi+b81HvusoTr4mhA290Cu/veOM/D3bXRa+QdWNvKs7Hz5EjLA99VydvQFeFz41X9S8vrqROpUkL74Zyiw9euv+PdzTeL7MH767/kIfvicsXj7dmzs+ou1bvgLV4D3tt7G8+FenPEtcdj1dm1o+kN0SPuxrwbxb8VC99JD3vZqxX77vKeg97QOvvX/kWr6Qnvg8zmEbPkDAWz4nPES93KKyPehdr72Gbzg92g8UPgyHJ76uKU4+RohxPeh2Ij5VChi+rgYVPmf3Xz7P6fq8mY9CPtzy0L11i6Q9iiBOPijZ2z1bDjC904qDPWRyx701ezM+4IShO/nZa75zNw++k2QIviTeuT2LvDk9fABfvUy1Vj4mVe+94qYuPoj0rb05BBC9agR2PqgL6D0hmpq9L9egPV2jDr62isA9xcJnvi+NMr4KHH8+bNBPvn6ZHL2NTxE+g04vvWM9vD1KSFg+WcKjPAfErb0QHOg9WjYSvhL2sb06R+I9j613vdQIUz7MkCW+PEAmvApuEr7i1os9ij2ivamsxzwgQGo+DLV5vCNgpb3T2TY+soIjvRhWS77VZ1o9CrH8vWZqTT4fiuu9r7qPPS3ywzpKiSi+Igy5u0uZfj28vuO6cDXyPSsRiz0As6s9VpiEvQ6VkrzftsO9BIMEvjw0MD4zZ8G9hzyNvF9MITyfpyE+DSV0Pb9igr3eb1w9PQKUvdTWBb6WGe69sdVSPdZeXj1Vh4s9D+6SPYgfAT68YcG9x13bPS51IT6a0Q29zrH9vaCXVT1HFJq9110VvgaWkL0jbb09NAjWPIFBBr5Imom+c26Dva1rZ76Bkkw+l4VWvpOsbT3iNg6+4umoPWS/UL4QZcg9tzBTPk3BMD4ALsq9/CMbPoZeET2RaUe+shZyPoKKXj3S/RW+HfhIPlWcIj7j1l4+fu+PvsJJRj7t7rm8QzwwPunnGr73mYY+JrV6vn9sDL7cLbS7pIdXPZMXdD69gme+kN8pvv0JPr2XgpA9Qih6Phba5T0kcgq9Tta8vVQDOj4FSkw9OS+Dvty+jj6mU5i+7U+Svj7vEj7Y3ha8fg99PelUgD6KSsc9PfxCvrsrUz3yGQ89u/M5veepRL7CjEC9DFcFvowgDT7bn7g9kEARPvepez4ZYCW+s0I1PuXxqzya4lc9lQBXvlFNbr52ZgK++YCyPfBwcL7wx3G+bUhOvsH7E77LeZ48Zk5xvvHtljy5hKY+jK0/vpB3ib2rSSQ+P14kPrSc7z00wRW+tqQPvld0VzyI/v09JyFovjzDHj0Twl++cLH4u5p/5jvaEkY8eNFePlrvC73R5cg930FEPBAeIT6zyBg+p7WgPTxwdT4/CV2+BREYvkw4Ij59Qoa9sSt2PrsZ5T1Kwc8867mvPRyB2b3aExG+VYQOu2aHKT6Oz6i97+whvXEZer0EUr89RJnRPYXfjzymU9M96Ha4uje4Vj44XRa89Y/GvenXbb2I6ki+TnIGPgVakL0A8n8+ziUovp+gxrx4AHW9p/GIvs62wr3lXKC9RaWkPU4iGD2swx2+4WcsvBnoK74r13c7qQ+vvtIdhD392r28Zp93vrFI3T1e7Ia9xHx0PlTrgb1Cs4S+Ioc8voG3Jz6UdsI9asVHvc/ILj6u6ic+zb02PFJiHL6tk0c++E4UvT8RKb7l41e94nKAPkWJVz5yuki9yNI8vjmEJL51CBC+KQI6u7Slfb7rGOc8YOcdvgNQiL7kJlw+uvkjvRFC872Ky8K7LZ7SPS0Amb1m/E0+YR8QPZogIz4Tvwi9p9HEPcgGtTzbuEi+3Au/vbvruDyLX5g8w+kdPkr4RT5riV26Y5YxPnFFrbwpN8q8ei2gvNQWTb4Awkq+JFtrPUxFgL2w2+y8B4Uqvjy9hj6lYuU90pmBvvbMob1wz8M9CsfsPX/caT5uSCE9HQwKvtjxTb7J1WS+p0rpO/lnHD5OyGY+cbNuPuqcTj7EqhA+XGeUPnabtD3pc1q9bG5+PfmS8Txtc+09VmRrvjJ2wT0KTJA90joHvYYY7z3aSwu9XIcXPkREuDyqzLO9iHlZPCsMF7765Aa9xCpgPWMCoDx/UtU6gfrxPBmPOL2t3h0+R3bSPcZ4Fb73t/A8wJdBvg+VeLwfE/M9XmpTPXfFM76V0jS+h5VZOki4VT1wW26+TZVsvo/Fij1ukDe6fFMFvlouqb08A0Q9hw+Qvr86Ar5qVY89SymePf6kJr3Dz+m9qWglvqI1drxHuyK+BPKXPtNGY77pu/y997NiPvXkYj3IFos+Yb4lvizSFr6Jpgg+hZzbvfiWJb5v3We+uCWAvkGO0D115w++vOtOvhY3Ab5+6rs99VVGvS1xMb0pxSA+d7IsPGCMX77709q9+Va5Pe0jaTynhRK9GLQhPj2KsbzrEVG9CVnxvfT4Q73z9+q9UKwXvutZM77Wg86998zOPOQ6lb38+Yw9MtJOvk6Y9T0iXFY+4otovaCEAb4vu9G96Np6PRygtz30Qxa+n0wBvZZ65j19+ck9+v/JvdMqrD25dGa+o9SVPmny4j1CQ1a+TsPWPBMKB75U4CO+ZNKtPYAeDD4ketE95h0CPM4TwDvk2AW+r7NKPmvznb1a3F2+MzGdPg7wWj2USYA+AeWTPZU+LD3w88C9+pbIu/4rZD3ORDE++qK3PU2P4L0r46+9FDAMPs5nIz46UTW+Yf/rPWsdHb63FBS+yjFLvkX9DD4/IGI9rufhPfZFsb3R6d096mhRvWYSBT4reBM+ecomvgxjP7584Vk8tqb6vcAUbj7rpye+m6zyPZKsWL6d0E8+LUYmPmEoib3gCAS9RwufvSmoc77UMHS8q/lDPgMCCz5VJhM9sm6XPKzjQr50Noe89/9gO5GTOj5J7cG9m6cAPli4XD1+GwM+G4YwveWYAz4Qdyi98YChvUE4P77VUek9kCMKPoJBb727wto96QAwvld5b76p5rm74EsOPnajQ74T6Uu+j3TvvBFwED4dTYg+1nfWPJiYnLxpsmw+y60ovtmPWr5xtn89fsEwPvSMdL1A7Fy+FuIePoaUqrxDuvG9qSj6PdnaYL6buUM+ixSAPqEtdb14y0w9+i++vaq2Qb7sFas+vVHKvRkmcT5HB0q+3Bm1PTjjnbzjqE2+2D5FPs1WiT2AcQO+Qo8WPDfoQz400r89ua2EvUfsOr34klW+4k6+PQQ0nTwF0Yq8LUjXPSk/zT2I4gU+yKvKvUGexr2Q2cg9hsXfPXuOhL5DR5q+H1CaPE+QQ7tGMDw88DJOvnMgmz5tGUo9QDJOvpB7Uj3bojI+zTYZvpSzPz4Hi+29Ko5jvllxgb6ZRhu+bP2sPO6Yoj15n8S8XKk9vjNYrb05Yw28Ix7sPORFnr3YIAU9xSXLPbPNizwQWZc9RcMUvlR1Tr4qHnG9pUw1PWMIbD2eDT6+RuHavaSYDD7iuqC9S6savpG3AL5iJFU+KKr6u2YfPr50IKw9xOEAPcefT72s3IS+woMhvkDxHT7zJwM+O3arPRqWhLyxDfc9CQHRPTQiGz4BHDI+LAWPvtuEVr3Fs5u8kikNvVLC1TzdOlC9CKkmPiQFCj7AoKo8307LPUa4eT7MghG+G94xvaSfJ76R8wu+WhAmvmlmAD40iTW+ys4WPmmMgT1aXaY95csXvcY9ET54FKq9Ur/ZvZlQo70JNR++qndivVNuND1afF6+aqvcPZn6/j3E8yk9d28VvsgJgT2T6g++OCe1vUXfSj7tA9M95L0Xvs1reT1iRR29kf3rPJRlFT5rIRa++pdSvR9RLj1BhAg+r7SHPhmKHT4IVHa+2ZI+vjJNQz6EXd48QJMWvsa0BD5KjfI9uFs5PGLhgT54DdY8B7TVPBy46z3WDLe9gG66PbqBAz2GZTW+lHm9vQrOUr7Duji8txxivYppoTy1Vyk9uzbyvWYjwL32ngi+7DtuPquUlD2wXPu9IPmvvVQ7mb25kJu9X2MMPkjaIT6qC209ag5aPgqJuL0lf3i9YiVtvuq7HD6mPzA989vZPXYzBz5E++g94vxvPiZCzD3hqus8cuUXvj0ozjzfiPw9SqYgPrBPCb7706a8gcAgPivaXr6HaQu+ByGvvCgXNb6gSJ09wrgOPhiOQr7+6W+9ajgQPtaBUb417ui9am6gPUdJ9r3tb2e+4zeuPco5J74JfbS9QWpJPsDGAL7pSIY9J0wuvi5jgr1w3Eo+f1boPa7Q7b1iJjW+Wl8mPn3ZE76ADKO9WOnBve9tBz4yvy++tuIpvM8/yD1ek9M9XriPPTvW/r1HTMe9Zg1dPf13Lr0GfDQ+Qh/hvdZ7ZL742mW+OgroPdwLbb47Blg+kClWvimu/b1zBRc9mQasPAWkE72xB5092Ah0vn4Mv73q5lG+j/LzPNneqLwtT9S9gwPmPUhoorysI3E+7GwBPorBYry2K00+tnhQPY5DQj1ILmg+VLKCPfEIaz1B0gs+lzv2PWWB9Dynyhs+7kT4PWbGQL46Nmo9cpIbvomU3z1H+ma+mu9NvkSVlTwwsk69RxbjPEIg8r3ohxO+YvwKO+mMjD6CF9m91+1kPpMuLL6lUPc9DfAfPo6qJL6yETu+thLvPaAPUD73Zqg9PQ4UPfBYdj1oDDC9MPKtPXrG8D2ulss9vTQhvM3DkL5JfcM97SSHvhXVTL6naJW+vDPnPNOx0jv5N+E7+WAQvumWDD0nqlY92vDUPa78RL2haAa+G/c7PrlP9L2qoYE+Ziq3vUuqVD1bbyk+aIjzPfVVfb3rqwY+Bg0HPmDvjL42rFO+vQ4kvsBCpD7LweI9789BvuEAjb4rLlk+E5xYvcM2SD6c7Ii9fQ5iPtnlTb7yKDO+n7BxviBCRj6stYG+/qe7vQrVZr6p81w+gvlSPpUKUb6sFd+8P1Fdvfq1Hb1XdTg93OYKvgqZZb0mBT0+stmyvb3OGb1ThxA+XPZCPMOATr6bSvS9BBJgvl39Xb0N1po+9RMqvkv+Mz0aV3I+44oXvg2LDL6TcIy+tGcLvkAHCT7E2So+Y7NKPvLHYD3EXQK+7Ay6PU6lGr5p2ms+AYA1PEH/jr2YMjM+5LsqPkH4nD5o4Qm+n185vt1WGD4qcMy9cGP5vVS3Q74ps429v1kwvYjaCryTzGi+HlMTvs0O270w3kA+8kbevTkC7L2uAyI+3tC3vOd6Yb59EUA+JvwCuhtLGz4vwpC9y3vivU3TSL6hmG49r4pVvqkq4r3HY9Y9wjHXPffvx72qc5M84hOfPY9MJrx41iw+ywOfPVymZDzieH09ah6BPbMYpD238pI9mIUvvX53Lb6G9xM+mBdgPiorOrxBF5I+yUP/PRD5Nr6f7y29RM2CPRQSJz0VHa0946CUvGg8SD5N6hm+/9TIPCd3o742TqU8M89NPS0ciDyNJJs7zjstvgArfD5Bgfq9rKT6uw6/B77JcaO9EAxJPYoGRT1VVIS9AhmSPiubHz7+6B0+bhHMPfLPTjz/Q+w9A0nKPYlKTj0kVWu96tkfPEMOLD6BgVI+GWA8u4MvBb5iNJ683KACvjjxFz6oDBE+q5CLPdHkSr7uhy8+KHg7Pp45Vj7NXXk9SSIXPbLOgz7Boe+83oRmvTEfQD4Y9Z09EAQNvt3RmL2QDIQ+S1Aavp3zQr0p1go+kiRMvrvbwD2D7QC7+jWMvMJDQj4XCKC+x5ODPjmEGz71uTC9jm7DPXe6U76Rwwi9sUQtPt+1TL639Qy9tBT4PfSZ3L1r6z++G8R8PnpQoDwBoB8+7nA/vjDoKL6JHRo9u8YCvgFtiL4LH669MxXQvYre2b1ZgzY+4ipfvZgoZT6asd091a2jvb1Opb0ekwo9f38TPuEXjj5CjUa+mtaAvSirCbxFIks+XyEkO/khQb4AszE92xAdvHzU9704C0+9DQq4PTZM7r0DvH28/Vr5Pdclnj2KXym+p9Y5vAsSgjtgLOi7BeOGPmqHfz36VOO9WcN5PUdeL73Rryo+gNCDPQReZj0Bl4s8MIlKvuXair1vuCu+Ex/wPCC7j7ydb/w9GEFUPluFPL6ReXk+MV1wvk57x72sIt49NxrZPeH0lD2tETg8kpByPnsxFL6ak3e9P1zzvT9phD7ZYyS+hay/vZ3SrT3+Dd+8NYaKPk9xAb00Bfq998uzPeUoCj7si0s+B1cBvhdL/b0CNaC8cf74vcVH8T1gSUm+U+sVPqOFeL5OLA2+FCbsvc38DD5AWtK9ajwLPuZGLD18tvQ9eLf9vSBBezz94Ui985bWPRhtB7o+dW2+wTL1vZTIXz5vxio9cJEFvjXh6j1uXDi+ticOPvYVL77RkIK+Bdi8vdGgKL5iAmC+dI5Pvo/JwD3SWUO8MBwyvokdKDxdOhM+w2xPPhfX1L10bXi9lyWFu2Bjez6wBkM+ZeZcPVj+e76t6e69AiN9vfrvb72zDMS92fIAPtJ8Fz4a8sQ8/41aPqP9ND74ls88wCnXPdjfmTwFFSC9SWFXvAfXBr7Jb8O9LHR9vhS8hb46AY49+w5APo0YZjwW1EM+7cISPZtUrj3ci7O94avgvadGp72yk5K4OcMZvHvVXD4zHs89dAqtvSyK8T10yi++g93aPfAYP74x/Bi+vLdtvplu370r2qI9t2pXPbg8Zr4ucRE+rqapvRuYzL0vPyU+JmwpvqFMAT521Ls7K7NxvnnqMz6VVya+yu+2PRzolL572Yk+eF+ivK4xJb4spVm+ifgmPpexLT4G94c9WeLJvSZbOz1lmBy+wIFFPo8zCT6f3BQ+YPWnvRXvQD4uwiU7Ic5CvvUrCb0tUJK+LzaPvX8WpT2pf5Q+L95UPscYWD0xuw6+G41fvYf4QL7gjjs+FmdGPflYW756z0K9C21XPR+thTxohwK+SSI3Po8pmj0PmLI82CPsuwNzxr17nti8VHjlvNvIUz6EhuU9YHObPVKOWrnHa/I9cLTyvUde371u25+9IvQNPvVbkD3M0+G84ue2PY1JUb1VOmW+iiGRvsBqyj1tmT08uIAGPXvTy70GDDG+tb9qPbzZfTtAqek8GVWcPhBaAL7phKA97SRaPbaclD2EBFs8E2L7vesDlD4O2sq9IRAvvkAxNL4qQM69UocTPnJlIj7bv6+9bibpPT686j2HTWI9p7qFPkKxGb6KFGi+YBgzvo0JXT1dFfo9A2tqPVrbYT72nCo+dnxJvvWM6L0nUEG+sKvNveCiCD5+ZHM+fqOEPYXYQr4G7W4+uQwLvlAO1D2wd5a7Ev2GvS7fcz7D8tk7185wvhm8ZD5gxk29jVFqvh2h4z0taO69eWqMvc6FXL7O+kQ+ZN6Dvm/5UD14V8s9VH82vXLCO77AmUW+s/+PvoiQvT24tkw+XheKvoTiAL0f1ia90VeGPv8MHr4BiAe+EpEsvp7kpL1AtKE9UIpivlB2Rj0Cmki6jHiJPqoACT22dhk+jsBRvhRV3L3vIwO9LkoTPtNjN75uT7C90hYoveJg+b322R8+yU/DPGoI8b2rhw092hkpvqQSBj4KTZe9nwTrPfo/i74wh829ndScPR1r2b2M7zU+VQCZvWNkPj5FS5W8aqsuvkleQr0LqVS9bQkmvWaN3D2jeS2+N3c1vl2w/b1A0TS+pwoRPt/bRj6pBLC8Hn2sPRjXzr37SRc+DScuvlUcBT7U/Sc9qUAGPq+3Lz3cGtm9RxkbPgMvVT7Suwe+m0RNvhJljr2zppg+86E8vnM/Fz13fT69lw9RPd8rTr3z5g69SZBTvhkfXT7Hh7e97rjAvUskkL3NQYg9ngolPv+zRr6Eu949U2ZpPsBKF76kU1I+y1/cvcXPKD70iHW+XMcSPeLPxb0X/0S+9XGTPlf8Mz13DTE+1KW3PEQhJz5af2O+t0mbPLCsNL7kKkg+nABavQXpHb2o1aM8+AeePo773D2qQH28NrmAPlWQtj0Og+s9DEKDPv/Lbz5e8nK+JzoMPt8pYrw8Ahw+KsyNvdB/eT38/fU9s++IPTvsSz2PBIS+0zUYPs0Kj70VrTC+854svr/Bp73XZBc+wC+CvnCiGD22UFC+hY5JPlIlC76IuB6+6gNivp1NhL3QMoK+FfECvlD1Tz2RbjU94s8KvqHpNT5DrIa9sk5mvVAsrj1tHiW9xEMevj2y4bxdtoW8VDEevsxikL1FYCE+kX0fPvCU5L2laHC9pIwevpHTUz7oecw9ysACPZrFnT4/kww+zRq2OzTkGTxej8c9/vSUvraVAr6wVR4+FmKbPtRroz1i96G9lV9Vvsp6Br7AAQ49CvgBvg335LxK6W0+P8/uvXE9X76HamK9OkWqPdXogT4H34U9scEqPXXvozslYvS9OOZUPjFCOz7SvBY9xZorvh3rqDxUzyi+HKe8vU8M0j3I/xQ8iasBPhIBMz7dah6+8AESvpg9iD2byd69UIJRPuRAAz1jQiI8qDUIPmh7Ur6NK8o9bJOvvJlLID6co0U5b7qOvZltNb4H2hy+TDy7vdTWqj2FkYE+c3NCvuH5Br4ZyoU+e95fPnRTvD1fh30+svX2vXSpiz46xZy9CTCDPc+KPD7fwxK+q8CEvgDYg71I6Sy+7CEzu/SVUb6e0fQ9kJQGPrs6kT0h1IO+OgxhvTvj1r3CvTo9QtcMvvT+0L29NAS+nAtXvhvioj3wK9e9t/gAPRzzKb6r3y++RZGZvlR+Az1W3oK9syfhPe84kjxDtE++U5xxvszKKz78EkE+O+BcvqFCWb0kvck94gi7PY/qDD4xxKk9FLV5PL90TL6/w/U9Ow8dPg0q97yv/As+yKNxPKzGdz5WcSg9yKnfvFcCDT658w++L+ylPZs9r70y2sE90/5LPicQkj2h3A0+TcsmPh+amb2v7+q8Qy6DvfTzYj6GJzA+Jr/3vWxqkb6Af9u9tewoPjOJrjziI8e8meS+vBSnB76tYHQ7ngKtvV5hAT6MnLC9pUKnvNJgBj5kJJq8aq6XvRwCHb6Dqhg+qCmXPfcXWb7/LTo+sy4tvXB2Kr6qNGi+0iYnvesHCj7pdo8+yrQTPnE3uj1azau9Vs5zPlf1jz3Deoq9SIY3Pl66W74rCiW++y8fPaNOLb7UYgy+ctR0vukiCz26SQU+qN4QPgW36bxuuw8+dBo+vkK7Dj5+bhs+ccS5vAFNYj55Ez2+ASETPlezpD0VRgs+cCF9vX3t0jzGow2+Fjn1PVApyL04jj++FV9vvnNGur04cGe+Gl3HvZZxQ74qWZA9/roePqiWOz03Uxw+xa+8vLT0TL03V1M+dV8kOmiWUT4FpfU9q8sLvuSyvj2B0Sy+PeAzPhCiUz0kOBK+7B3YvBycd75g7ry9gjqavS87Vr5ZKdo90PslvkzD+j2uqkq8oK9WPVQeeb4K9VI+cAYBvvjFlz736jM+qZyZPQTJ+L3+Cp096nlzvmLQUb0zp9k9D8iMvobb2j0E6oU+iECNvSmwpj3JtFC+gHu+vQ2+mT6mx5K+fEFVvtXsUr5TMC6+NopdvEy0HT1bvQ8+Z8dxvaQcg75wut08wULVPZQk2j07y/s6csrFPQu8Dj7JxSg8XfvIvN6OaL76aEk72PtMPjXekz0AMas8esjYPfdtXr6RYRS+XJaqPdNhOr09hMQ9oksGvmAs1jyFeTw93DOJPnzbfDxkcYE9vZGmvQr5z7zW7449L6GQvTRmTL4EiWw+h7MyOW1zTz4aB3U8EnyxvSVnOr5fAAS+cJ6nPZkLuL0X2Xu+K1UVO93TqL3SgI0+9bi0vL5i/DxmbLk9FJUgvNvEkbsPkV08xnGBPSg1Hz3HDAa+cyQhPvH+wz160oa+blJhPta6L76SaH098YJUvljtor1djh8+WucTvVt/Nz2507c8OqPnvX9FFj5VrkY9MQzdvd4aYL7j+kC+sS+XvU0NYD0EpIu8anyTO2PRJz6ltuu9P3WHPqv52L2dmSe+fIKDPEvHVr5/3u+73UcPvi9kQj7XRJ+9djBHvgv8ET7+plw+0dzNPVbuX76uKga+oUrwPOaNsD2grRo+kYbOPXMKr711UZE9AuzzPZlGKj5b0sM9ma2kPLEfZ7zyxjq+lOZKvd9OIr4i6AO+DMj0vUrZSL6zI5095nUQvndYHL1Wrxk+2kL8PWQJgr4DX788JXL+Pe/GrL1Xaxi8/BtpPrwlMr5TepU+KI6qvc1yMT6f7M677xE0PmHpJr7pmEO+5RadvGFIND7hTEG99gBDvkXnUj5zrO2967v8vQE8yjwYgkg+Og2qvdidib32Bga+padovmgnQDwNcQO92VedPYjemz4ngiw92A75vT8ROb27Wgq+KRa1uyQedT3yfhG+FYshPmYwij3KpZA83YbsPV46tT0NOE69UO1iPdsARL0wyDY+XGEKviLjQD7QzTQ+Z5gRPXk98T04pFo9Ei9fvuLvdT4aAw89M/qIvjAygz4MtUs81tAyPD1VgL750H+8hKQ1vmX+jL7mLxI96jgAPulQybxnWaI8OsZ/uwy8mb0peFM9xX8PvlUGdj0BBgq+QprovVvu9j23mQy+laSHveTDdz6TLTg+hZUgPIiIwjyGLBG9/5IIvJP2NrxLeCG+LpeqPUVWJL12NvM95916PfAYuj0Awq09CnuAvpkPUD42uvq9SG4XPrqQ3b2tK5I9RO6LvifWQb4qENU9nX8Bvlowyrw8/QK+mQpFvVsGkL2sqB+8cIlHPs7WRz22QUc+LbSkPsvsWj44LO88WsevPXlbMz49BVG+cRPoPb0AHL6zyze8xI3VPaC6iz1IzQW8FpsXPoiboT01zTe+d9dXvraaKz7Kqwm+7ertOreyhj7kwi++3CIBvmBp8T3qmxM+tszavUaHRL5QhpO+J1j+vN5elj3dExC+i7ELPgEoaL4eegy+70xBPQkdCD32npI9/lKEvd6K/z3xJoI+UDDHvSyuG77AMiS+rSdHPP2KED4gtb+8rs+JvmOisz2E9Aw+2/iBvUgY272nEvi8/qPrPQPeEj6ej0Q+w9gOPl91+b2qKH09ACIwvNYrZ76FvZc+FnBKPiVEGz4NPvq9NOzavR4y9b2iUaO94uIivr0oTD64tA09f1EYPgfAmL3oRYa9Agf7ugutkL0yz22+SheYveXImz0l/fk946yFvbyLYj0qlDc+w1zXvd5YRb4n/Og9rRjaPCPMl73qzLa7IKMzvlXPPD6oOJI+/U/uux8uDzwQUbE9WMEwvjqOUT4JmBY+vn0MvjcGFj32ITG+WRwzvgjIK71lMQw+jkorvtSlNr2hRUM+iJ/MPaj32z0W+aE9p9omPv6Rhj7fXMk9cSKPPTQp4T14TUA+KdHQvf8tfbz0K0g9/64ovqO3uL3ZxDU+v/OLPf3zXD0xqxY+NjYhPstUDb7eXhw+UnrKvUkBoTt/rCe+hVITvvc5mj1ByPE5eD0yvky/2L1/WwE+dkU5u1Xtbj2Mq1I7/hfhvC1Lab1ppra9h2UovDO1k72DOY+9EGZxvUy9nL3Wxys9vXQgvuaQAjt3fBs+hWorPpkY1r3XT9M8XHspPmKXqbuGdmI+nmhUPhn0Eb5Cwsq7yYRNvBzXHD7XhUS+YvI/vll+AT5AOHE+fUgyveagUD7QXE0+NhNlPrFICj5zZOu9WgArPmmeST78YfQ9ROYAvoQULr54ReE98JB0O0C7ID5Bttu9yRBsvrL4i74z7B8+rljyPdUcoL3yzlk9uQbgPdWcgr2oCgi+FJB/Pr/Nk71SopI9KXAHvoE6Nj4w5IG9nInOPXWqDL5uZKS9l9QrvmM73LyZkcA8zIJLvmq0ATyernQ9k7cAPE23KL2jE+m9JZUwPnTPjz0JC4k9TufNvDdlHTqy93891Zx1O6wsBj5BcRs+mBCBPn6lOT0Zjf69dUoRvnMQH72Yxyq9z3p6PXB5P74zaBI+y4gePWF6+Tz4clC++H49PlO5Er0w6Nu92kKbvcnpXb7WF5M9/ChBPiqy+z3Lu/09PViou6lzHr1eHMm9ipstvpSKor0sx1u+o8yKPnsGaz0j1iS+khWTPnKfy7x8/UU+cESbvV9F1rwwpwi9AAAAAAEAAAAAAAAAQAAAAAAAAADM0iY5jzu+PTpgpL2JuWK66lNwPNYz1j0vqVY99+mZOwFlFj2OBlw9cQyGO4Ab+7tEmsk9KODfO5friz3iGCk9r7YRvhv8tb2eDf48xmGAvbeEJr3kuFq9/ocsvQyvKD5+vtK8x8aKvaxiUz3MDbq8n2/zPGUTED21irG957Qmu4jjLb0PMwu8EMgevVebET3NBxY9ccDXvEgPYT3rDqy9V/PNPMRqyzyTCsW98TYFPSpRN70BKfA8SEkXPYShxL0J2KE7vVzHPcU9GT2RPw+9v2jGPbkwqLyNkq67gGdSPc6hKT3InOq8IpilPVkmv7wJikY9uKwFPXQ0Sz3Vc2C7/////wIAAAAgAAAAAAAAAAIAAAABAAAAAwAAAAAAAAACAAAAAAAAAAAAAAAlgdG9C6wiPdniVb4K8NW8h2NTvicKQD7/ZTy+CzpDvaDQIb7HR4697udiulIdQL1zq6o9CsWPPH+PTz7SUQE+7etKvu+v0LysmUE+bXfKvJGmjrt2geq95RTlvNXTGj0dBOK9kMlJPorVWb6YNt+92vC5vkQfVb6eJTi9hU2Kviv6dT5xtQI+ZN4GO/AA/LyKxWA9NWVaPkayqb3gYss9dv8Xvnf5jj5nzIU+XN6kPSrcYb7BbAM+bcIfviCwUb7r59m9jcHmvAj/g70gLsi8Td5PvO+GpL7W6Q0+AI2LuwkTz73TT+m98iuJvfwGzTwhsZs98c9qvpdWQr4mui89HV9cvtEOD77ZiDy9FQMKvX9xID7nOzG+EJMbvkC/Mz5si3M+bWsePcxFlDvYVFw+uY++PdLxO77j8Dk+6t9wPr13/j1x0qe7GhTEvadFhj6pho8+BfATPuCVjT1zoxc+XrpPvoghJj6LOe89gqdQPlSdwjxvYX8+cqYjvk7U3z1nJ6u9UOFJvqAGVTqT5Rk9JkqBvalnAr1A1S4+zuaSvX0URz7/Dr49DqsjPc6DCj7Zfg6+Qu9vvXQdsLxv9Wm89fgfPm14rT35h8C9r4cgvu2d9D2kSyC+GG1Evs29ET6yDh4+z28BvXUz8b2dok694r0Lvl+o1b1P/nS6cD03Pi8ePL5tz5e8sC5avBLS8j0Lrhq+ZaJWve7n3Lz5KpS9uiUZvkWtEr77xCU+L3IWvSIBFz47h0o86c+4PXCawrxELrk9QqQbu9YJFr5jTR49IhhKPkq2vrzUwRK9BOY/vRJpkr3ESkM+EINmvnNNCD56L36+pqpJvs7RRD2Ax8a+DkMdvmSpBT4Omke+tKXrPanxGj7h3Ui+Dbc/Popl6b2xFnc+C9BJPr4r3LwAYHC8jKazvRpbyjxqGT8+VM0xvvNuCL70lNu79rMkvggWdz1mDvo9cquSviBRmD3q9iM+LiA0PgJM971M1ou+ECADPh9npj18SlQ+0yEXvSAex7xuojw+kBlhvuqBRb2T9IW+BakyPruajL6mPiQ8Zd5Pvh61NT6/+IW+/Ed2Pnt3Ob7LMwM+txUcPhQQlz34ejY+t3qFPft4zL3sTze9IlfrPZzK071X8nk9UrpDPA734D1t4lC+9COovc/rQL5iuHa+EWUIvqvL6r2UY7e907rTvQH2Fb6b0HO+APCJOqfJA70s0oE+l50Ovnnu/j3OQNs9m1AOPhuvQz7WZYC9MQQOPhB2cT4Jz2Y+SduVvZCw873+2xE6jDlJvfqW9r3biKw9+HWjPc4NYT7xGxo+j7wZvheDPD08HeM9AaFovdclHr6nFKW9/npcPlVWvrsmaW087Zq0veHUgT4wqSo8Q9L1O0zbF76rUBu9u4SZvCvtTb43B26++ksUvkF52b33/iu+hGeVvuJbiD7gp9c9WvncvnZMjDz74h69RzEHvm1b6T2FuBU+Jz0Uvp13773TqE++DxkZvmYFZz4Olwk+nIk4O0K8vzz2bMq8iZ2HvnvBdr77Pnc+CZ2NvgeOhL6AsHW+rq31PO+1WT76EQ6+3nWMPtybfj7+0AI+XpoyPtTyEbzU8Dg+zxuDvUZ/Ib7Rrrg9HSfBvTLmhb7yogq9aMPHvZVEf762Qok8G8GQvaKqtbxtLIS+vbFiPvycVL6Io/w96gInvujMkT0/lgG9I/lNPagZd753mBm+loMePrV/HL6JeZ09zNI9vkEqgT2lVsA9OnKMPmEfqb25rII+QAQxvHE0Sr5UZRk+N7fZvWTt/L0BpLe9Gs1kPoxOTL6FuMO9+D0NvqXKqD4tc7W9UpIyvrySg76fyPM9g0IRPmopZT1kDai9t8oBPQl9jT1CLZ49zUY3vVCNzL25bfA8JR+4PS5UwD2gXdy9ZlERPs7oAj7pWy++Tkv5vSiNED466ZK9pVbDPX/j270aGlk+GshuPcyV4T0+AmS8KfdLvk3v2b2NsF28UCjrPa/drr0Gizc8+4Ervbl+RDz54Tu+EMFJvgtZhb6TuC++jY91PdItvr3+pws+3jlZPcTphr2b7zW9rFmUPa7pGj4PYhy9ZFUZPsoRjrwJ+3c6SnUovpRLaj4sm0y+JiY/vjWM3TxRciq+JJJPvqWjiD4bNb+9F9FePSkkSD6o356+4N2Evit2E77dwmk+3rckPn/ADT0xPQm+xFBsvZHohT4CBbE81KPkPQ+Oz70jeLq9lCKWPq1xHz1lZri9jVF/vghcY75cX9c8hJeXPdZLRbxYc2g+Jtj2PEklAj6rMQS+gIsAvtso0j3bwpq+CnZavsJEkD4RDmA+70dzPgLeIj5nyH6+94QIvqhbND46tti9kxJNvoZGDj71hwm+Qfc4vcHygj525os+mn7EPbYCpj1wDkm9g8xgPX8kYj1RZ0E+8NAgPs/euLxsgDy+oDuFvuIUqT0jtio+MMC7vHZ52734eqA912VBvsugKL6Wpfu8rPOSvYqkCj63gUk+EREQPsO1973rq4C8RFEivpnzV70AwTO+doWLvXK8d76Jjk29nYdUvlzezz34H5a9n/i6vLiFnDy2CUc+1mvnPWVUvL0NZCC9XBynvipTJL7dx1i8CGSMvv8yHDyT18m90F2/ue/90b3WHsS8jZWcPMHwsD6e7iI+1ENgvBl/ij5Ocg++7E8YPQftMT7eDT8+7HqsvGpLDD7cYsQ7EklFPm1Bnj0TDFY9LNNGvlzwHj6HT8O9cbc3vkzrSD4EQY69sUAaPtwDjL3awCC+xw8ePYq1Sj46DPI8b54APShK9bw4GdI8/20cO/+zJL7FEFQ9aZFvPUibX743h2g9CWctPkxpAL7gbYe94Pg1PSFJnL1YUTK++vYaPtkPwb2Mtc68bNuwvFdb7rwhwq49c7hQvu9iNT6ANpI+bpK1PYyfhby6fwW9GVB6Po//Cb5sEZs9gFubPD9rhT3n+iy+HArLPLZlaz1Jpvg8jJEJvk9x/r2y8349TsnAPUVdET7Ypcs8zdIVvvy+Iz2BKi8+tGCMPi+V0733vQq+lWY2PsHfBT5fFCO+NdgIvoilJb7z08G9JWRrPr6UL754hE2+TwufPVxTOD1E3/69ch1BPOeW+r2NHJ09A5XOvJj/n7290oY+0PuRvegtx7zJgFO+q2JIvgZk4D04skG+aOsRPhenPz5dGCa8PRvqPGsNcT6Wx3y+8YwGvnY1FT6rqYU+2mDbvIpZoDxF2me+mp4PvtXYYL4t+mA+ZQaJvbxWNb6XfS09d33lPWFb+7ztH3y+UWmRPUZBzzyLfkC+qMSBvUuSp72D4Es9bBamPRVoQT3n/Tm9eneNPRyN1r0NTyk9NJxJPg2YAb5yoIu+rR1aPoEYIL0dbYm8ItRePr3a/r39CP89aw4JPqbflz3ISyg+1PXZPLexTz5XJXG+FDZRvsm+i7wkyB++hnnxu85Gfz661sO9m+wbPm065L0XZUy+gJUXviFl6j3qS0U+XMlVPte8mL3DgkA9j6mKPr0mbr7eOpS+GQE/vsduO75Co7a9fYiGvRSyTL4vwi8+5q/hPRX1xryK8C0+R0URPkF6F75QbXc8jE2/vTTaRD4JdGO9nknGvWMKab5aKA8+xfxwPtQA4z1uucM8mcwkvheqLb4TNbC9xVjavfdG7buLq4y9DSCAvkySXD3nWSA+dhh7Pg/Goj0MWj0+1UjovXrlnr3CvhC+hLK1vKX5q72Bu349/5JSPKKHuD2We8Y98jfcvRlrUD5Fb0A+bF9lPmMCXD00Sy++SlA8PmHgUL7G8Qm9ugpYPt1jZT6SEny+3ZPCvEwGYz5Qp989xRuJPcnBE74QTD89IqpqPWeHtT1nKns+MFiNvMTyNL6pMbm8H2BJvnESUL2WP2q8cyo7vt/7YDzzWmQ+Pq9QPvwdwD2mrlq+WKiRvSnSGb5VWKq7+/IlPsjYMDzjo5G954IovsPfOL0ZRjY77d2XvHq1JD03oNO9zcb7PMJB3LxjTEA8HeRVPfETkT2ueD69Ce4PPNxUbr6AUh2+XpTdPTdlpb2y+G6+n7qwPQJFzzwTdoA9FRSvOv6ydz6R9Cg+V5hbvlDLOL04GJ+9Sl44PRJPkr2OzaS9yxikPfvPgb3O0pe9YkLRvGsNar68UDa+1DcBvos/Xr0RiE49Euv9vBOrEj2pXd29mgh6PgPKiLyrYXe9tayIPKotPj4vFEK+FmhgPvmsKb6eals9LGXlPSY5K74tvs49t/bEPbB/F77XxB2+A57FvBQl1TyFYy8+xN0uPJa/KL7Lsts9prOFPnQ6hDx4lYq9+1ysvYCbiL7dNou915kcPe/8HT4fnka+be9UPapuAT5uEvq97zmVvjuwb76ybJM7/kCjOQf9Mj7rZbS8Z61Fvqzl6T03nxY+NcowvQVha732eDi+BrkNvs8AH76o322+NBokvuqSRD442jY+b5Y3vYgYDr7CJA49ASZevbuzzD0ynxw+GiEUPrbY5z3D/as97dExvpyZbz2ClhQ+M7oYvrokE772q1g+3qgmu3GgYD4F9V4+KDSAPgftEb3eF0O+Hag8vcZ2PTpz1V2+HNO9PfL2v7239hs+XkpHvm7PnT7J3MA9eLVGPvA3Br4dT9U9qaQIPctJSD5vnvo93SFSvpQMqDwhY/I9Rlz1vfpDcr4N5QY+73dAPjFZUT33zxO9/euBvVKRuj3J8yc+ZSPVvT1iD7xBTd+8pP33Pci1Kb7i6R6+lJgKvuPKSz5IQQe+7Gp+vX2k5j1QvOk9aGKBPE79iD1/+ew9IHklPkrAID4KaJa+Yv4uPldedj6HiQW+QevjPOSOFb0G5ra+oyJmPrxvgz0RTi29cl8pPvYShD3qzPI97SpfvkMp4DuVGV69YRhVviIU2r1j85w8bTuSPt0hML0Vzd69NQufPis33j3zpYw+KHCuPEMOZL7wJls+dSUjPbkqTr4r1ZW9Sx+UPb7FSz6s0k8+j7/xvX46273Nbt897R75va69gb5xV6c9dMprvp7OBD46t5G9d7T/PPz55jyf7e69UdgzvC2QBb58D0m+Y8G8Pb8Nlz3Ju/M9ywq7vaFbaL2oaRu+fwY6PheuWD7ihBw+oQXVvZhVMD4Pxbi9A33ivVmsEj7yBXE+7ZE7PpDiw7052yU+r3GMPdM+6T3HWS4+IpMdvX2H271eugA+oOUdPbffGT3ahWu+4VGHvgJhzTkPF4k9GkaHvuIHETyGPEq+KuqbvY1wHj5vzCu+ukMAvsgXqj5qvsI8ChgXPswtUD4dELO9DIPgvMxae7z2yiW+9BIuPIAEFT4FYAM9NR0VvXBBmTtffT++Yn4VPowOoL2+M1g+arKYu5k1oz2l/JI9PD4Cvp67DD5TSQ69RIhUPtEh3j1nUFs+ZoJQPneMwblw3WI9Lk4IPSyjvzyBcz6+IRN9vcBfUDvbHMM8TRmdPeVQHryn+LI9kt8cvhMw6D0MRWO83LGYPmbv5T0zxko+YTJCPooSGL6b0Mm9nFV7vTtMNL7/2/c9XBoVPsTMarxqeM893y5+PqoqIb3R75O+a9sovmotpT1CcSi9LikePiRjTj5LfRs+Y4pVvsCyWD3kUF8+taMnPvjlq70GRf29QPDau8B+YLxGvw6+w1dDPoRPzz3wY7K95p5SPd1HWjsSbW8+iuNSPn3L5T2x8Sw8Q7FXvl8gLT4dsj2+Ejuwvcu2Ej7I6Su+dRD/vXJEl72zifc9bO3RPfNJXb5LYZI8VRYXvhx2Gz6y9RC+DF4NPqo+Iz47RTI+K/MmPk2TMD67Jqi8F0kVvjO+KT6ZFLu9H0FIPkPo8D19DFK91NbHPX8CUb743n+8opi5PIIIMD68SGm+qM4kPooXQr6qhkO+tX05vkC0YD5WsQA+YN0qvrVplr0P7Ko9WvwVPjDIBr5/9eM9SP9qvCnJgL28uiM+a9X0PWzYPj6AaGC+/al5PvOkLr7lhzS+rvhcPTfOET4MeDM+lpM0PqczPD4Cfke+wSBJvBzgNb790nQ+5jouPmHTBz3yWBS+7u7VPXIwdD674o898K8Nvv0G+7vzVRC+WUsWPLupML5W0NI9BWQpPsBHd73mZdO9INATOxobQDyaDDi97q7qvSWUBT70hSw+llVgPsvzM709lq89uDCdPeRHizup6bq9seWmPWgz3zzmz/C6Oxs6vc3mKr3CJZC8ZQLePXM+b76A7Q2+cbY/vmwvIr44FLq9lNI4vtbhMr4mWfU9ik1lvQnDpbxeXnE+O8DhPSBfD75eiqi9khIIvpzMdj09lJy9TlN7PcAOPL1dRLa8d9b6PWCR7j16Los+qFhRPY8z3r19Bi2+4hfVvRvDCz6y9No9DBZgvgR0jr0UMTg+YAkRPYc4XD1CJ0i+aXUUPXDjbT3dbIA99hcqPp5rVj7BGpw9pwoSPn6yHr5e2wy+fblVvQmQAr1qQ986T9kyvpTFm701Sy0+I8kLPgQvKr678x099asmvXcDN76nrKY90QUIPk2FY76yJdA9562WPB9qZr61zEw+L6YOvSA51T2ZwAU+hhQdvsDg37x1+Cg+Di4vPc2uLL7hUFu+tc2lPTo6gD10AuQ8t20cPr2Ro70qMmY+4x2KvTGAwj0EMga+TnAjvaArrjvfioE++4n8vGa6lT0ZLuG9cbdqvgEsKD4sTzI9u9U5PbLPiT0tAmu92CqavRfxPD6x5ZG9K/LMPL7QjzykogM+E4UVvkV+5bymbyW9XgIpvjUhxr3Gaji+faUovjkVHj5YqAs+1E/RPZwe3D1IYsW94n13vlc6fL5N7Jy9cdxVvieXTz17TgE9qjUavXW2Sr0coLK93qiBvCJs1T0HJVU8O5tiPi7ynzuwKy4+mmQ7vjX4hL16haG5NJJ1vX6InT1Gq5w9HUyivkHKoz47InA9okjCvcPrNTwKpuU9+IqOvaLNWr41gdk9KyVWPnn5bb3b+t+9phN2vcvdfT4qZxs+OXUxPuc1YL7hsli8sXqBvo5jZT3dL0w9D+gzPvD/BD5pZS27s416PlKmgD3uc/W9pCWePY7gjz3SX+e8klxHvjcEjbwR9Q+94LkzvJ9aS71e6m09o+itPdOCfz6gVWi9CcNcvvz9kzz2sRu8kQlBvitOKT1S79O9BlEmvdOiqD1coR++GhWcPXbUjb3WWQ++ohwBvsslbT4C1tk9k2CXPBGog72nPBu+yjWVPriwcTyJMRK+XNgJPRk1KL5lA/c9o4mAvVE5Jb4gbu+9bFKbvWLjs73U/dk9o0qKPnxpHz5qNiq+1116Ph4mND4xO3M9e1c8PbbCCj03zwE+Dk84PV6BsL25oR07Rfwevr3nHT2W3Do+0v4FvgbRXr1NRJs9JQYCPsNeQj2XRli934GbvRaAHz4cp+q9oOvIvccSKb7tWW2+dcN0PVEuQ74Bld273DHfvZ3tiL3uNjC8X2auvc7FSD42cW69BkAoPRvTJ74aD+07GTMTPkOfTD0oymQ+s1RRPSq0Ur0RCnM+DbxGvk3qMj63nZs8MjAtPt0abr4b+4k980tzPEaTGr7Hgse8G/k3Pu6ITz3ppfC9gVefvY/f4T2cYrM96HN7Pt3Yrr3oQke+FtVgPdfycDm1k5k82O0CPpfRZL5DgOs9yB7DPHKw+j3taJW9FY8Qvlijnj5IqbS9UK97veA1Ir63Faw9Ta4nvp7qir2eIt48Bc/KvY0DTj4uPKU9GVe4PfZeCz1OaEG9/d7yPYxM9L2gGI89RRqxPYXBOT4e3MW9Bjg5vP3VYbxPfw09vcOsPcTqdryTc3S9Pp0DvSKwI73qUzQ+sV1NPPDo7L2BgoI+pjsxvj7qmL2nFow9qSKOviwSLj6oQZa9NaLlPW4qqb1KUFa9FZx8vuWjXL5NwuM9twuOvlqPeb76MRg+GF6ku6Bn7js19BM+xzq/vfZ7NL4prT4+V9HovSUaMr4lBYO9PrSavduE5L3lBQ2+nuYzvsZKD7xFJQ2+LF6Xvo/G1r0ed6u97h5DvLXf1z246+w9JBIFPqPF1D3JDMA93m6TvQ1MCD7xP2Y9+5McvroJCD3eE3y8MnzqvSv2Q72SZOm8RZ6cvZ+juj366QW+p42tvTuxwDyONGm+nv0KPglYq71tbp48JT/dPSgahbwbaZW97u3+vdgZsrztGYw9aAIpvkzUzjz6e4y9cOeCvi83Lz77YDE9/5Mmvi8IPr2pIC89Q/7IvS8/nj1n1/O9W92BvrK85LypnbM7DgLLvUe4sb39bhs+K2wLvo80BTxBvl8+VXkCPbWdjL4N4cu9s2ECPXFiQT61+wo+ilEgviXTRT2qmFg+fB8jPmxfHb3t2Le82+QSvjnLIL5EuJk9grSAPtuWZz7oBfK9RyD1vWzQSz5q/IS+QNXjvUtaQ75dDBQ+aI8BPkfgnz1DLBw+YzGlPZR9cz79yjy8SPqBPt8XUz0rykg+ZLIVvglAbL3/HmG+p8PvvXwxvr2U3Tk+87lGPsV/W77KR+o8P2bKvTvTzz3FV9w8H49nvmO/5Ty/YSI+kgGDvcqyVr4L0Dm9kNUgPlxbA745F/q8/PVRPpwHPT5Q74+9D9VaPsrAfz4H6US+PPEzPQosUL6GJ++9qs5rPumRY74Muoe+D6Svu8qUSr4hKlC+KbtAvnykrz0J6y0+EB3COyBmiL4zUm4+Skiqve6pEr1xOPK94f5QPmLBgDxU0e49GsM4vjLlTb6gY1K9wWiwPVd2Bz7DxIM96BuWPZFsgL58qhw93QMevhpah760Ti++BI2EvnVdWr5x60U+9vjIPR3SM74Q66q9iJzDvbeTxLza8549TiEuvSOh/b21UGQ+vfInPqJZrr24NVK9LRCFvg1GEz7V0bq9ug0iPqfngj5Xij+9z+s0vO0ytD1sKcO9VupBvTeJcr4lgGq9Li2nPSQdGT5/dg0+UuZyvrYiT7x9RA2+GzROPl6szT1SiuU9LAEVvmJezz3gRPu9WK2APkCGIjwWy669wDvuPexhu7xl/Ic8tMUJvXnAK76tnLA9gphTPiCVED77GW0+Xh20vQfVhT0LIAm9pEpsPqA2dz7Inmo9+VmwvQBabb1xpTy+gWfQvb0DUz4n/i6+limyvWdvOz7saX6+xHsCPHFsgT2vpfc9c7ysvcmO9j0HLQq+eU/WPessTT4Eu468/SwDPoW2zL3YusI9eA/0PfKcsT0XhCO+NRBLvhCinr2P1MO9hHVaPPn1Ab7qtlE+hu0XvpsS/z3W0aM9K1h6PGrS5DyqHJ69uNtDvjuChjyiCcc9flkFvXhZRL7mbkA91doTvimgFr1AMeo8p9p5vaDHkj3/J2w+EAUGvhEwIL7xTnG98CCpvb+Dlr3d3NI9b0INPp9zyzuomUa7hDzGvdgofLx7plS9yvWNvLggVD4A8bI9jSiMPMmBT72dri89FT1TPskLk703dqm9UvE0PsyqHD7XiOW7qk6CPbvJNj0oce68hGEhvaImUT7N6Qy8NA1LvVU8sjzGRnS+2MqjPfXt+L1fkGM+Y2ztvdtwMD7o/QW+tV8OvtS4JD3ehdA85E0BPkcSIr4GO1c+R88FPstRFr7fx4C+bFhEPoWGlz4j2lK9HYMavnlLZL78INq9fPUSvrofBrwm6VS+wBU3vtIxOj7kZzM+nXsOvizidz2iQJG8SnnOPXzbGr3b6Rq+m9SuPX2dKj5RExW9rNbNvX4stb10lNi8ftalPHEJID6F2NG9p4OCPZ7cIb7OJXU8gKttvu5oUDuocR2+8wTkPTfKWD45pok9liofvrJXnzwTmEM+dOn/PahVaD00qWC+w4SKPVASjD3dhp89p6UXvkfIAr0/yJm8dLblPbhKYLwvuTs+zROtPawULz5t8Zc9uN8nvrQOjbwP98a9kmtkPm8rE71Jh8i9gcIOvqCMIj6Qz4i9qTpRPLHanrxBAzK+TQ6wPTs+q73jh249b3ZBvdQilr22wEK+Iss6PJrKKz6Rw7C9n0QVPk59n71Cb+09aoXlPOyktz1h/lk+lQdAPproNb0smBA+4iLyPQJ4O76Rnna+aQf5PSrcQj6E628+W5IuPm4OTbxswFI9h9SSPR7aEr43Nyq+dQ7xvSMwD73T/0u+GsiGvtcG670z7qM+q48VvSmAK75iBUO91GVZvt1hnr1wa2Y9nNyOvgeRNT5N2Ci++YVRPrVlAj7gloy8uRUxPQKn2r3wLwK7LURiPvnyML6Hgam7HOwrPVb/Nz2xri4+w5IuvpDYlL3erKg9UjGSvUJwRbz1xSC+rTpNPu/DPL7jy+E9Te6tPgcVfT7wr749al+7vRL2gL7yj5o+idcFvmQe/r3Vj2S+q0IqPhgAnj4jZta7mKBKvFblU714kZe+LpJkvgyoizy0rLe9CnQAviDzkD7coos9/dlCvmzfC72gEM48h7fwvQB/Nj4pG5Q+VD81vc5h6zx0Rqu+w8MAvrA6xD0+2cm5UIdDvvD/Mb49fKQ9e1LFvaPaFL4Fqxy9IomvPaCv1T0gNLY+6AZJPSqpFT60Axi9iVetPMIKID4G4Ya9YdFOPjhkqbp5WzS9xl/dvfzl1D0ZAFg+mE9QPdaXdj7qxig8k7suvrx+bT6A+ti9msCZvayMhr38FrC9TRnVvRD+gz6iyGC93gWIPjiHjT4S64094tQoPlorj70em0U+uc0WvTh0gb2bxAC+T/eEvhDsGr56Rqm9ev4NPr6DkL3hQ7o911iYvU8rYb7VyXC+lFJnPkkpND7qcAm+hsrAvUOOQjyLL7E96g0fPdEpKj7w8ow90tscvtV9Kz4n6UI+KG1GPjRq9D2m8gk+a2EWPitZG746rry87JpKPhJWsb0FW4a+CytiPsSt3r2dICO+nQnTPbwNcD6alCA+SHsAPvxCfz2aJiu+ssNVvg/OCz6gSQS+CaGjO/ax+D0J+h6+dSUVPoi0fj7dBve9ie2iPXvEZT0aYD8+rNgKPT/fbD73Imw+WRpLPn9PPb0oaB8+aQeLPHcOBr7GJna90huuvOMq/j1L5pI9bRajvX8etj2Cah4+2o8SvmBIXb2y2S6+htINPsZSND7Ku1s+FEkJvuWsfj2eVIG+nGdfvWrNwL2ZSS8+dfT4Pfh7qb5BU8E9EYFNPa4h0DzVtqG+Jqj9vZ4WDz6+FqQ+claVvsWMT71efo29bS00PtpSTj50jHy+RqDtPVTdRr7Nsj09VpycPs/kGT020LO9V0d5vZUsczuGnVE9oxmjvZBkx73T+K893o+HPXe6gL6d+gI+B+4oPqCt2j0/K2M+ls/ZvedVP72wAV29RdG6vRyklD1s9vu6ALU2vbsMozzda8m9Exrjvd+RCb412n8+M98hvm64Bz5Apb69iDAzPgATpL15DAE+9UCaO/jAMLwD0Ys+Y6QSvpHPgb18wYq6arOXPr69Rb6JRjI8EHxZvRZ3gT30ebu9FnSnO+H5jj3pkb89iVrMvV1fg77yJio+RG5UPiRqF72TJgg+c4hCvlghJr5XogC+bAJQvVcD2b2moS0+9y7UPC0RAT7MRV2+DLdLvBhVxr25AsC8iIPiPRf3R74Mvbq9tXPkPUZ6T75s7Z26RMzNvb4PkT1zkYK82BA/Psg4ij0EJIU9D8hfPOvxmj0ztm89p9j8POiOGb506jG9pLtvPVEVib3JYN29VhTCOq9KEz6zlkQ+VgBJPotCVD6jxfE8uBBSvlpOnzxElSy+7gmwPZFCkL1t8AG++4JqPiiWMT7YdgG+ar6IvuuJJr1zrwG+4exhPmHBlT6pA+48kmZqPfR9Lj3dmOA9acLfu8T07b2n/qq9kXePPbo8F76oq7+9GezyvW4E2b2PpfE7POCCvTJO1L28Mpg9etL9vc/bjL7NhWa8xZ11Pqj4O76NPXY9Zj+cPYr0AL6J3Pu9+23xvF3QC75I1bi9xNiju+m6q7wsudK9CfTnvYq8Jz1J26U85nWTvBCijj6oFGw9DPwbPs2/pT0SVYa9zPwoPivfrL2VjSu+ovoxPV8cYjwsDHS8zi7Uvfjq6Dzx9NS9QU5hvZxdO77/3ea9KwdFPfI/273eys+9PfNMPpjAID44bGO8IqD4O39g/z1S8fk8z2o1vrOvaL7oJVq+vyYovkSpPj7neDu9xDyUvR28kb2uWSe8iVkGPRzdz720Vng9BK3zPedSbT3/J6Q9Uk4jvjxhBr5cErU96+YGPoZeQr7Vo8C8IwEwvDcuRb1LXka+aTQTvWv9bbwkIKc+jaqGvRxGAz0/RPi9i+ozvrnrIL48+Je8C03Gu8GvTz4H3zI+RDwAPpbJW71MMhs9vgxrvY7uMz6E+768YtogvISMED5f3i68WSsXvjICyb3ci5k9MRcWvmwJDT70U7q7O3YHPj/edT2NRpW9pv1HvOYl+7xBOUs+GdiOvl6/njuUxES+qN9BPCdHFL5boD08vU5UvmCl1T1MHLI9a/eJPpK6hrtdJ+O9yTYsvdCKG7vx4FO+KP+pPVSXHb2X0yG95+6Jvum1Lr0ItTg+G8xfPoHqGD4pIQy7Y5UTvlnzpz0hICM+zQtXvQ7CgL6wPTG+8l0/vq+ZKD6eEoQ+AdVZvm1DRTyRisG9kKIPvSlcAz4DK3Y+ypMCPnbJUT1vHGe+ZjsbPmdcCT75IJI9VzuqPEROuL3+d24+GZoSvrV39jvtOD8+wjkkPhl6ET74WaE9R0KVPOx7Wr18myi9C0ljvuRaQ75D65Q9/X0yvvcpD75wsp49VgAHvkTF0L26PBS+gs1OvshHFD7crEE+a2xMPqvGXr6Cmw0+Zg0qvmINGD4nCaa8+knAPR8oOj5X5AU9nIrpPayJHL6Dmne9USEovcPWAr1qoO69pUrsPIChGr697Ku9BRpxvL6QLjwFamK+enlNPXJhzT3qi+O9Gk5/Pa4FLT72FBy+JHzsvX2oaL5yxbE9oTUvvr83kD3p/RA+hseXPajYmr10uBs9MBagvavy/L22NFq9kX2GvoghjL7E6xw9LbJGvlSAJz4O4bS8872UvQ9Ifb3K/+i960hhvDXaVz5TVfK9fxUOPsiVO77nRIk9Gkf3vZzUzTwTLc89X9gRvuQwlj6H2H4+/oVAvQXJpD5hO1G7BfBiPUjQ8LoAdMw9M6OHvpYbIb4rcHo673HjPRnqTT4WuCK+fqrPO3aPL75hwMs8COKUPYhrYz46/9K95oMUvQBlN777uZI8waZ/PhAiIL5TYX48fFBOvma9Sr5W7ym+kw8jPrbzAr7BDie+5+JcPoJxkb5SuLI9+4tPvgjNpL3Dk1y+enQ2vqYjGT5JQb68iaIxPmgOBj7AEuI9bDXFPY/VVr34iYg9C03pPTXpib6TV7K81jwzvrJkBb7ptGW+BaonPBSiqj2dclS83XuMPEaAT77mDpk89NZLPi4ERj7p1Go8PwY7PoVC5j3rTo+9JjY2vjX2YDtnATO+sgQivrBGhLz3aIQ91rI+vkLyGz7sosM8kGgXvjsoAz7TLA0+7EdkPhGlNzzEwdQ9f1sHvjRQiz5lU7A8hAQ+PRBLrz2sybM936c8PmXAlbtqLAa9LOqOPeMZNL5hq3q8sgWbPiFkUj5HH8s9gVeGPbPgoj1yM/k9MoX8PUjUnT71wuW9z58bPpk6jD7TqNM99W2OPmmR1z3Umhe+PFxIvjMHG76xygy+OlDePbHpOL4ug4E8mkVGPf+Jfb5yoaq8TJV2vRXqB77su3u97bgVvhxrLTt//xi+I6k3voT1a73LQv09FJArPsxamD0ymh29n1jfvBB+hz4DEWy+gpsYvdwB7zy6LEk+G25HPZ5jF77KV+m9uORePgCGp7zJstc8UgsBvu8Vs73tyyg+kZstPtdO+D1aik2+QjMfvgPF2z1VESm+rDTYPfaBOj4yFjO+eo4wPjfIJz5hkCi9LTq6vTxZNT6frkK+GWeEPD2mAL6Ay1K9g5qWPdMxZr3fmQY+6xd2PZCb473S8nG8SoUjvk+AEz3pVUO+H3CDvqHdN74EVkM+22T5Pf6eyDt4Jcw8C78dvNJ1Kj7YCz4+dmWHPeJ/X74NUAI992tFPoDg1jt5bD+9EZ4RvlnU0z3HJSu+4ocdvsrTCz5KGWA9V0CwPZ7inr0WUYU+jppwvcAbtD0BoV2+QTi8vUkrgb7J/w++tumiPYVVfz7gaSQ+Xx6Cvqwiq7wTyVI+j9NyvSmQWz7cMgK+yhD7PVHcq739FLY8t89ivrWjgz0utoo+6VqMPeANkL2RYmg9AR1vPnEWHr05oO28e+9hvl2hsz7aKkm+j8UDO7Gnjr53NE8+v4bsO2AxDL5hX9W8384Dvg6SZL0NQuy9L3eQvjTqe7xXGq+99SOzPf28Lj6BRH0+0baAPsldN77XqkI+floXPl2VeT2SoK28TIwlvjwKSj3GVT+9CxYaPj/G372uurY9XMKIO4bb2LxIIJ++R3cBPpI637oamfG9dHTZvddDo7y2Yhw+YOz4PCuWXT5qjAW9HlXBPdeGCb74lQk8YjUdPjY9pLxxuvS9OnmRvGVk0j1zlxu+EiBEPjslE75+4k8+b5BLvQw1lj4Vigo+he67vXRkIj6vRW8+0pcwvbU5hT7vVGs+mZ4gvRTBpL6ipky+4LAUvKk9kb7KeSG97lSHvTWYPz7GQ10+VBlxvrRM37rM9AQ+gCD4PUtFKz4dhWk8yosFPkVb7TxYVx69JZIoPTLsjrzHZV++qLCqvGZna71jrBY95OCEuwJlcDsnjge+2shWvqStm7wHgPS9TrSIvhJwyDyUGxc+jJwjPLEX+T0lhDM9lrqUO5xkjb5acSo936UYvn1Cyb1duWS9NDniPcfVvT1W1Zg96FIoPd2JfL1VXIU+b1ABvhr4eb0KWOW8SP2QPQPwuTzQkoG+A1XmvV9PjL1g0t094I+KPori6r3xWFG+wFEePs4kO74YyQA+B2qPu73VgL5NWza+njeGvjLJ/D15hZS9Q8U1vefge76h4yw+nTGlvP3YMj7Zd00+T6MEvUHyUL4lSOi92mzAPb4MAD4uFF+9hE1OPqvNd76Hmo4+SOH6PCd/urxown29TzFtvRzCEz5DOum97Ff5PdvLFz7anVe++f4OPgMfab4ezMI9vqs/vYwmLLwQ95M9nV9GvRBMAb60rAs8LW16vkcPXT4L6N68VzNiPgKnL76MTJc9/uksPFJjF74w5TU9anKXPowoGj7Djhq+HhtwvuD8JD7LXrQ9P4AmvQRciD5ZY8+8oP5JPERLIDxyOFk+BJw8O2uLabwAURy9mhwFvh/egz1bXjK+4lpqvuVDij5vuBM9fIJKvenCXzpta4W+3GilveN8mT62hB4+KbdBPm54M77Q4jU9+2+HPqmiRL4E5uG9VxhvvYV0e70eAX69QT85PRe/xb0avUg+OpyCPWk3iryBkka7D7envXndh72U7oy9SCCKvW44qb23u8o9RYY9vuWTPj5QO44+wuwQvl49dT5JzPw9NMrovW9bW7poykE+EGH+PWvJ4b1ucfk9MYdjPlVAAD0L3ii+0z2Yvmmv57vRmfM93nFQvWm4RD0kR9o9FL9wPtc4gD2LNUk9ALMsvtMdtL2b4gI9cyh4PQ3uSr6eiiS+fyIRPtoKPj7fEuI9H6mgvEcsaT7EaX89DpVnvugyHr4pE/E9jTVZvoRBjz2l21k+pFb6Pa7AE77U0SI+hCzzPXmY7r23bjS+KNtIPtLKEj5Oc5K+0tk5vf4TGz1R1Co+Xm8HPjQqVD62mha8Bu7zvdBxeL1cBpg8lRb/vcnGVj445te8eJxSvaKqDj7/gKa+vW3VvbIObb6q2lU9tvydPnhm6L29Ngo+cypYvttaRD4WGgi+pVsDvto5p75h44o+4KbtPU3wGj23iTw+OyGvPf/+WT5uF/w81Cw3PiHfk73hKRQ+PbYWvjOBLLyOrF0+ZLcJvZYn9r1Vp/Q982WZvvkDcL5WDpc9M7lrvjSKQL4P6VM+sVGkPdOV+z2mqpQ+GpdIPQUDb73mEgk+aoQxPdnkUT6+qzY9tbUgvpj/QD6TuT8+Q2MSPi6qJb7n6gK+w98APt54n76Su8O9U6SfPNfJ4Dyz7ke9d1TKPXlCsr2lZr89w+6yvT9H4L2vWzg+82QzPjECu74wjyc+u9mVPod5hD3L3Xk+30pZvpqKbb49Tse8tPk1vgpNkjxy6Wi8+0jbu/tEQT4gUYq+rZv7vZxYcD2KCVA+RAYHvqsj8DvAIvQ9/EAYvql+Ez2Gtzo778QcPnt7Gj2YWxk+AkuXPgJnkD1Lc0u++2TRvWz2Nz4Yys86gvWJvkWVMDyAWsW84OAZPrvUYL7+aCO+ttCUvkLrF763YBY+bkMMPr4FPj6K9C0+anu8vW4lLr1oQrq8h1Iivspm571CbyK+QKJ/vButBb5Icpg9WucQPj4Yp73T9h2+2TwsvW9ga76Uq5M8UqxEvoMLYT6DSDS+U6pNPvM2Ob71OYW+kvEQvkybar6OvBE9pAoHPJVBSr6Hsdo8uSkFvkkKTD7boxC+8+2lvZzQ770HCsW9t3z4PfDtSz66qkc+KTuEvvT2cT5KLfq9rbY0PjH9gr71flY+7LHEvSuLEr7FY/c91oauPafLJr7goU2+8TPBvf3/mD2m6Rw+AHLJvcujXb4qcS+93MOlvYerIj4PZbu9kD9gPu1mY737vgA9OXg6PbwoSr0SyHW+ABfHveLBC770Mys7t2F0PuCrQj5kqtO93OfbPXsCPr6var8+2diHPbxpmD7ZsP+9tKMFvhtloj7gQ42+vgS+Pf94rr13vxY9qangvXS4Irwg+bK9zOONvlQlYz0zNj49N1mEPRK8eDwFFpS+gI9jvXlksr07x2O+b3dyPqomeb1KdRq9IzYuvnux+j3XYk89aaegPiTvvb3v6sA8VStEPgrzar1yNom9GXahvT6oij1xx0s+Efn2PQ02I71vDwM+XJfLvErJjr78Cq69fpCRvt3/aL6GQp69Df6yvSnJIT1T8Ty+ruEcPigUF75khBW+h/bZPaKuj7626jo+WLbvPeY49b36sSI+JfqrPZNjzT2mtfC7WFNAvhwpE74x/ju+ebs1PX/nrb4GzFK+gQEYPDt2SD4rp1E+itORvIzJmD6+k8i9y4KtPQa2dj58YpG+u6SLvY85rD3VU6U9waTwPAz/dD3K5DO8/9rAvkXWOT72UBO+/Mm2PE6lAb4GtBc+Yj+2vYKq2j3fhJG9C/8avl8OAr6u3sg854AAvmfzRL0h5Fk+ku4IPqiggzw9pam9KdwTvsXgKb7chRE+9QmuPBJ7Gb1ZqGw9EMUTPp7k5L0CLD4+J1m0vfPiaj7SPO08Fhhtvs2jxr1kkDC+gQSgvQp0uL38yha+mZhUPuOdOT3RaDM94nHIvReNRr5t3/o9RaL3vczZ6D1j7zG+UnmYPWvuWb6JqYw+9HyMvgEf4Lxpoo4+bzLmPdrLgb6xKTY+VLFMvj+3jL06KrS9QO+KvqOn9710W9+9jC6tOiNvmb0HDMg+TqcPvqs3mj1d33k9TLARPTb0Fjw7ddW9B7kkuzKHbD5jFoE9V8hPPWzqpj4zJe+9Abs0vtnvED6GhZQ9Eh37O3SUhb2SxM48LD/IvbSmMj7zvjo9dcVFPiS+Qr4PHPa9WR08vvLahTub9C89frRVOjS4uD1zWwk+Ea0yvo9tXz7EoHg98RL8vcJQpz0FASg9Y7UMPr1Dwr0eBxG+9DejPhYUDD69ZAG+S64sPiKwYD5tczK+T+N4PjUgDb3XzuY8fMqBvjYWJD6yWCo9ZUFyvu1fbD39Ne498318PqGGWr6PvU6+JuoXvu9Psj3g7g++M+zCvYf4ST5ENR69EcLhvbvpCb6QQZ89WTOVvb95nb28/Fm+OXRJPodf5r0X7bK9gDMgPV073D2Xtom9vVaBPld4IT7R6vy9wQdcvrg4TTy1Ik69GVHbParDD77Ent49dPKKPWT9E74Z8wI9wMjxPEB9cj5DGMC9pTNCPu5aPj5MlAK7MaRmPdBXJ77DB4i+zEjjvJPxhL7UQJ899A5PPkV7Vr51xuw95vEdvvXDwT3Z7SS+gehGvUDWar5RkQ0+xj/gvXayP71y9OM81J5CPgWWBr7nOwG9vg48vQlyTb4Wn6I826EdvfbUBr5rw1A+nx6OPVWsDb6yAwK9DGxTPUyPAj4S2R++KUthvRc+TD7OQFW+1Fl3PdrI7b1p4f28JsNqvLEGQb5VWyg+zHBDvL7OZ74ksFe91S3XPV8ji720FFc+zmvdvVfIQD0ZCyg+1IQfvilVTb7TYbc9bvIQvoHAMr5j5UK+4KkQvuL4lbwZFim+soW3PUH1RT4sex++3c1PPWyuOT713Ge+uE4PvaHhbz2eF0G+KE4LvesQWb02gva7pWEcvp00ND0Kg2c+PtdZvrC7dj4eMJC80dDXva9Tqz1/YTq+CsYtvVaseb7BLeG8tuEYPvfYJj4en3y7QmOHPrDWR75eQLy9bFBPvvvNv71zsPc7e76WOU6k4L1V2+K9kxZSvgHTZr6gJ4s+jHHRPUGNuz10AMk9uY6NPTOeND4i7Hw9gppFvimKxrt2AIa8eYygPBw0gz5/fyC+6lx7va2aAb0B0CO+xpQbvfTzEb5oVzs+dOOcPEnAhr6HCYU+ogAavvQvfT4YIoU+BMEcvmbQ4b1+ECy+dCUgPsrDpz5FNlo+PMvCvfqdtr2P+6Y+/aprvhhL6z3IdE8+sTGmPUDzkb7NFwG+5/gTPhPAOj7lExa+k8tgvaiXBT4y3ra9DqiMPatnST5ucR++ayYgPvP9Eb5soTK+xtxsPeDhvrsfoCM+KiOYvXIAGD77RyK+PYJ7PflkTL4Aezm+/zGxPixFzbwavk0+L//ZvbcYjj2qGO+9PR3oPRPG2T1QRcS8OzcDPQ94Hj7ChIQ+FbrNvTm647x59qu9pEb2OpE8PD6EsMg99RoEvXMsjz2XWFi+ER/qvfSGyT0hxxm+hjufPfgCXr7aD7E9S7diPosgsr3FG5g9O6qJPWNFhb0b3he+JOx4PkK3sL33rxm+bn0/ORz61b3LqIA9nhodvl8XKr63nvy9DzZmPhA+mj4ra9Y9IpSaPaP93j11wiw+HBGfPSnyE757V6c9KHIFPlK9Gzr9xH29PDKSvU3qjzzeZ6w93X9RvkyvhD2FCvA9c2tFvYZpqb7fSnY98RjHvdgEzr0VQTw8/uDdvLEBN76BkYU+hm4/vqUjGz5M6F0+VoqIvrLzjj63p8G9LQ6DvtBqDr5f4UE+mDIUvWZ1qT43+TK+7P+CPpEkuT0ErqY9oqkuPi1Mw7xN6909YpJdvawKbz2jVgS+BM4XPs68QT6p3Qc83rvkPU2mSbwsQ4g+t3MsPgGdkL1tMbw9XrILPWCIBT5+CS++KjbrPMujcT7YMxs9AAp7vfQBmT2EMCm++AvkvT8G1L10y+Q9lecpPmaxvL0mnGo+r90PvpCjKL5Ff969tkmBvt7nB72VFio+w0XRPQU0ib35Asm9f+zHvdQ3KT48+no9KsVMvlTbsr1oxwK+X2aXPXluY77MGtO9fJ2TveOwmj3Iak29fa6GvrWdjLwXkcc907YXvsD+Lb0fJpU9sT8xvTuExbwv44q9rHCGvmINAz2ML8C8uS4dvb8jAr7Qjqq91pQHPv0ohT19+Bu+8d6AvMh0Rb1ce5W+AlQavDz/Dr6acng+BJYpvoVwcb7QPgS+VM6Fuzjq/T3z5ha83mXbPeN5dL32Loa8D14MvjOdOb03hTw9Oi4oPhkWo73c6WU+aysevkX9RL5OKKe+60YwPQUup70p5L28gmFcvRb7rr1lVIG9+67BPDMsRL7GR7i9jzjlPQXFLj5yBYS+8i9FvgTeVTq17u67C/OUPqn2FT1kMiY+1O4yPi31Cb3ZoBu+UHRePQegGr7HHtc93XwovT6bqL0wWAM+YlwivmWBYz3Qbus9FuhrPkp5Fr7SybO9kc04PkjGoT18QAS9nH3SvOB5Vb1V12e+P79EPbw/9j2/hy0+Gy/jPbarLLzJkr68zTwYvsnvV74gb1C906HNvTfqvL2UFAY+vylhPkX8Hz7br8C9T7IzvvCt3rzshTQ91KNNPo7dE7621t48U3NpPqaG/b3bwzQ9npeMPo6Zmr1gFvg9/IQKvgEtFz6dXjG+vpSgPDUhfb2CUNW9bg8WPnPlCz65ZYe+GXM7vraVtj2xU5y91encvXhQPjxUsg6+EiQYvj28TL3HoMw9in11vc7VHL5+KSy9Ky1HPOfGcj7BT769/9uTPKw78L0KVgk9Bs43PnFgsL0wlwU8xCZnvU4Td70PGGk+NaMMPa5uyL0yf3G9Ie0KvuC68D3AaBO+hwSOviljiL3PQhY9EJWGvnP+9r0GIkE+P3NnvgA0cb73L2I+erAOPV8eJ74+1wG+FU+YPhTayr0R2EO+WtwhvqO8gL4nRNY9FhkAPv3xgLzhlzy+EKNjPg3zi7497Rm+W/rAPb1swT309O498oIEPep0ZL0HQGS+eHaAPDTU/r2mhD2+bBIvvRh7ULzPFBG8SYVsPpOPID6k6lq+BYMkPsGWjD192JK+GiAiPYk3Qj6FFW09hUCJPL8Nbr5gc2E+hXhVPraatTyb+2a8GJkLPhF88L1AOSe9c0UePpeTLb6FLTs8RqJJPVaPVz3hEEq+pz9RPuR9IL4Fsju+01MPvRT2jr7uQI09nJTSvHZXQr6s6Su+z4ARvcFvBj0A5FU+5o8Fvhp9CD3lJye+z7G9Pcxrpr0n+/Q98YFPvoILmT1tDdA8ZfMxvkMFFr6Mlc89kUGove6cmD1vvF498juCvMmYIj1JpHO8a42NPYbcVL6PEBU+gak6u5S8lbziXfw8z/qAPmtqOb47zDW++addvg5eWz5M24k+q+WHvkW/bz5A3US+usMYvnVV3z3BS5O+cOtbPn/fmL5Iyz89HvPivd2KOj47Sx09ev6+vdqg9Dxy0Ja8d3UKPcpeobuV9+O8VNuHvUb0PL3/rO69Py1kvkS7ijvVp/i8x7xJvusIFr6Ft+I9jJ2lvQutMztX+Ls9wZETPgSai74qRwS9e/jfPW3T+bzT2Zw9KwowPrDrgL65R4O+WqYFPt07DD4hFuO8gjiEPSs1RD5ZeNM8gIiWveXS+z2wrAa+xSIDvmj3gj3Fok0+qoLcvNGth74uiki+ixJEvedMET3DVB0+U9VTvl1FF73V9RY93c7UPWdfmj18X4k+U25ZPvkUvDv7qxS+fz2EPhsd0jy6jNe9H/RIPtUbGz6sP6C8c5+0PV2LpTt2/jS9NP23PVh8Cb2r5uO8GcEUvN+lx725uy8+DE5YvifrjL4teJ090Ym0vqrHlz7AqlQ+Cic5vnC2Mj5glJc+pJmSPD88Fj00+j2+WG/+vcgHGz49QVo+Biz5u+yCkr4FwOi9CL5GPURkw73Pwdi9qUYCPvn+Mz0tB1u9TmU0PsogGz6/1X29KQtAPUYXaj0RFK08l2Hru/qmVL36hGU+EowUvtRZEL7NHdE93H4WvpzoF7xJFik+W5UgvjKMaL6mvf69OLkwvqigQz4f30q+GK0wPr7BkT0fVuo9jYpmPhjrCj0WO1e9ybMEvhjIAz4BEDg+wuFWvsO5kD1t3Y29cpKnvErzjT2TY9C9hfxdPf9SMD4/1Is9i/mevKKIG75ZIci8nKcePm3gXz0g5l2+oaxdvYmSBD0rP4y954/duyDU7T152xi+Rc8SvtoKmLoK5Zq9bXzkPB1W2bwQEZu9o97WvHUZLL4YIIg7J7D8vT3i0T2F6OE9c9ihPQOXKz3Qaes8eNpCvmPUerz1HBA+AkBpPaAftj17Un++AAAAAAEAAAAAAAAAQAAAAAAAAABQ0RQ8PBfEPdV78D3oycq9twMxPN2snL0oNN69+j4LvukasrybJm690G/gvdj+dby9/xC++ArIPTH3JT0fOBe+TAZgPTkEDz3WlgW+pD+mPeiNnL1tQxS9cEWbPR1ilr3ZV5A9aJx4PbJOMD3rhJm9doZBvDv0fb2f9o89rG3LPTP6xrzVAgY9fTppPBd3eb0UNXy8fIP6PCPod7zKZXC9Wk/rvJTlLL1lj0u9VbkgPcM1n73oCpg8+zUPuv9dnryCANI6PxOPPFPVdDz/P4G7b0xVPOC5pDwzG2C9oEIGvA3PfrvPYJ28s6K3vR3tcb0DskI8tbG0PAVY/rsPCFa9/////wIAAAAgAAAAAAAAAAIAAAABAAAAAwAAAP////8AAAAAAQAAAChrbs4AAAAAAgAAAAAAAAAAAAAAg7T9PEWXcDu1Zwq+ptbuPRoPir2OAQ6+4KmAOyHsaDoJmIg+SwNQvL4Qlj0mtik+yrpvPiwcPz3A/+U9lrQhPCjuLz4X0JK9VqMsvoC6Rr6UN0W+060fvqLLwry4W0w+IF9OPZvS1r2g9z0+0MSPvaMDF73+0y++XvP3PMwm8Lv3GIQ9yw38PVtxWj5bdNo9T4BXPcc3Bz6RrXS7kIinvbu7Pz4EwWi7zMj0u2Ub4r33Ira9aEAUvQvQiT7bPnu+S3qEvVOIez07qsA9MzqaPLTZHj79lBI+BTc0PmgCLz2/Bu89o06DPSOtNr55kaQ9f0oOPrFy+L3h49g6gN7FvMdJ870SMDE959CjvUARrr180Qu+skdTPplfzz3m/YE+WTIavspMCb4szio+2hmHPMpfkT2F/08+9QAqvPp/tb1BCgM+C9UNvs0fRr3gHy896pVnvT6QPb34vFu9MqugvQmVF73oS6A9RBU/PUbKFL0foB2+cOqRPAXn0j0zpmC8lM9RPTTdGT4UBFM+FKq8vffgPT7a7/e9TCtzveUxsD1rLXe9inMkPuudFT5OmQ2+2XwlPWq23r370fC8T1nSPC4mXzz43fk9i1r6vbbfNb3GSV8+qQV4PdD3Dj4gINw9mbAlvpaGb77KUVg+RvIcviATBz6IPgy+2KlKviYtKTwNHpU91QtZPTMITD0FCn4+zlPjvdXs1DwNTXa79qSBPjjy7702q/+7ZpeqPSOZLD68G9W8EMMOPBwY9T1Wx+A9KypSPlMbTr6SZdW9qj2lPNARO75CH+68KqLVvVp1rD3uS4O9knVPPlWWgz5T4yW+T/rpPRjrkj5nDt29YNcpPs/RWb2jVTM+CGOAPvu2+z14/2S+WAz/vae9Cj5MCRI9BwN0vvRl7b1B5SE8GDvtvG9qnz2t3Lq96WrzPRulwb2J55o+KpS0Pb/Va72KujG+Ihv9PXlKBb5w2PE97iu5vVOx6LyfGRi+0cIlvLXWE74dzGO9Fm4tvmvpIb0E8xC+Kik2PhwbBj5Tl2s8x8pOvmFk070b96+9Ez5VvRxm2LtfFRY+xcEcvsCSO76MX4C+yMgsPY6cKT2segy+S/rgPDuYaj1Cqjs+iC9XPZbMZr6FS8a9qKehPe8lfL4reh2+E1fyvYVdUr6qD1q+IVuxvY7IQTzcrUc7z/T6vHkTEb4OQk4+jG2gvR2JGz5gOek9XwDHvc4JezzJ7oG8StzqPSnsNL7b1Cc9rU+KPXDbbL5K9PI6bhY1vrxNX762Dmm+/JgYPujHPT65dT2+vvIdPvAgCLyLWA++4Kv3PYhQDr3PBSo+PivAPFuDaLxD13M+Ff8ePnQXED2nDha+yZdjuk7IPz5kla49dkSuvPIGor3PyzI+jB2GPnBoHr15cIo9y8EyPqIsGb6ISC++yhwnuwtR0Ts/3PU9dTi8vpUIC77paX48Rj2JvoZwCj4cKlO+3eRUvpuIVj3MyMe9Q0f0vYarUD2uZrg9B8k3vqMfcr0vO+e90fmgvDNdUD6qCQc+MeWgvdpfhDu4+yY+zCAjPoTzfD5bX+u9hy06Pkcpl7074xq+odxrPvXxAL5JJlA810VEvqUICb5kP/s8Mt+LvFhCEr4c4uE90zPbPPCxAD2rsxw+Bm0wvj9ic719v948dTfMvZZ+Fb7YqzM966JvPmE51z2T7gy+j2RLvWiNmjzJl269pMeVPY31BL3fIDw+BiEXvhnu6T1Fsw2+/tMVvkFP8byS9uC4mBL5vVX6Mj5hXxy9//iAPoiKaz6FBle+FBhRvaPmjj0tTFI+kxRpvGCyKj5qzNi9W4IfPspzLz4+Ray7PRpuPTGibj2+6Ww+AUv0PC+ugT3010u+OLR9vfHNx73DRwc9SeuQvia8CT70bhS9/JIpvo2jOTvydK09VDwHPZMmej3sOy6+qcMWPmVJvzzy3889LLAWvljGED5XCsu8zUQePT6A6z0j7HO+iiUyOxjyFr4gXdO9RtcLvazEoj2mEsi8gPQsvra1lr0T9SM+z4pyPSwmIL79Hyk8inaBvjO29jwBbiu9fey4vVO8kzwLk+O9rZWRvYnwLz5rQHs+dmbwPETl9T3/CEe+5nx0PiGdUL4G5kY+w54qPgr/JL4ZsbQ9gTFEPttHIr4A47m9jHlJvsh7CT4H/qq7XJDbvTLFsrxWXUK+gGlDvfOTAz4lhgU83/2Jvi+HV73X/v87mxWTvf5eID6ljYs9GOcuPa2UAb4Ym6M9JVprPfzazT1j0/E9w6xnO4hWFr7hGJA+JGuaPff/OT4ZTUK+R6JRu0BYNz46WL69xYsBvgxXMz7XulW+3dBkvgGTJL1PgKY+ZMp9PQnRHr68cTQ+Jx4cPjfBbj0as+A9YKJGPkI8Gz1RKtS9W4hqPjPMeb36m2q8o0hmPagQTbzNESE+CvxavQM9Qzxy2zG8ZbU6PRtvjr27llE+yLJDvUyZXj0kOuW9s6cNPq0RDb4HgYK94AsBvv85LT3ufjC93S/2PdnOhD4+o7Q9g3pDvuKLXL3KCTC+4JUOPsuKNL0N3FG8lGoEPiwNAD3tSO09xFwrPtaArDtY1Rw+uJTtPCf0Ar5PIoS+hLj7vMy27rxiris9izhzPgB/C76jQqY9WuvzvRQSTz51qZc9hOstvuyU9T0bfo0+jrk5PRosZ76888e8TTRWPvaO3z3xrIc8SvJPPgyk9T1PDd49vu/Mvck7Y72RkSQ++fOQvSfS4D3DFQS+VzPBvbu4Jr6Fg6c9J8fnvTb7xz0D/Ak+xt+mvSLlCz4FEv29rQzXPEP1Er49tOu93VxPPnaUwbwG1Z491gwxvlmIjD5CwJq97vMdPiP7GD6E6iw9+qa3vc1lHb0KUDY+a3+WvZYfGj4wJ949+0gNvndoAzzMd1M98NOdPLczGz5zZB4+8xWJPvwQXb1HZ1Q+oiZZPpV6ML6RTBo+QekLPuNpFr5P+8M8GXEdPgIZVrvqGA2+vGENPgggwT3m2bC9AStcPm1gpr3oeUs+ODV+vvaYeD2Vjz0+u9V6PtVCIj7WvGk7NRCtvRZ0Fj3WO1q9PUsXPgKiWb4d5C++ZednPcTxUL07BwM+7OVNvhH0+j3NFoG98iyHPpRgqTv+dNa9+bmKPYQQLr7lylQ+t530PeKXHj73mjA+lpSnPXQcIr5aE+a7vQNTvqtGAr77m+28UYYhPnvAJz3O9Rc9hxievVmX6r3ciR2+cg85PgB0lrvS3zk+4tKsOtAHhD2UrzE+sn5Tvo1cNb6rIrs8WllMPrC89j2rmG08HJQ5voOpLz4gnim+v56NvT348T2WKja9Laglvdjxbb7a4kU8TqG0PcDakr1O16e9a2jKPLCm+bsiNhy9Sz5lvRK1Eb4jKRE+Oc0ePg28jj2PU968RsTlPdTxuT2i+AE+T4D6PXUwRr6RSJ+942BtvdalAr794WY+GXlku9wRLT2lxhs+gBq3PX2DRr5uFzW+UnalvlqpCr72HRY9m23IveZfEz6wJhA+FzSVvf8CcD5zFBi+9imEPasIKT5HdAK+eU9bPU7j870h5L67evInvt/LOD2xsqO9vkSWPXe2z7svYno9+8a7vEnqOD7fR24+H5msPV4LND24CMk9guSQPWPfuL2L+vI9WEpZPnEYOb7kaQo+KMqyvUVxPL2v2zW+UaSnPZlnNL6i54K+IT9jvFdYUb5pkVS+frFPvbjAdT0dlS08sRoWvltSDD7Rbu69MDSCvf4oaz5dxUu9/nqDvcyHTj7qG3i+HYRfPerMfb5Vpw49ETc4vmLCRz6rbAa+exm0vYLhmb3af6Q9KFgovrvwnL0pUdW9SOLPvZQcBL5lCmc+7un8vUSOMT4gR8o9HbdDPrEVMb6oloq+t1gGvjErw7zW7J0927WfvVs54zsFNJw+csw7viORSj0q3/i99xGOPXkc4z0XUeE9gaX2PSdzfb3KUKm9ebEiPc98Q70NzVE+1lD/PXdkED6vBBG+csIzvcN0MTzMDym+clT4PewwCL6EQzy++i6avbnVlr02Vm67HyBfPj0f1bxQuZY9sPOtvEqo3rwnDe27v2pxvSMGbL4IVhq+U8UPPhba3L08AOq9HblxvnJQRr505Ns95EmxvXTCl71nFCG+AnZdPiR1EL4FAZM9QAh3vu+NVD5dIMu8vJ0MPiYCRr5u/Pi9J+wBPp1Jo7v11e+8TkiCPUtgQz6zZe49Y56PPe+qk71/lAi++ZCTPTd9gL60TLS9yoM2viEHdLqh9GK+brO9PWb44T1mKhM+Fi9AvnEdwb1ibBE8FRsgvUMeSr0CyQS++kXGPe1Ljr1HsyS8bzUxPpiJ7jupKci9p2pNPQbc3z3xif29SS2MvjDEBj7jS5M9YGYhvh88OL6z0JM9ikslPo9mR7w33ei8DHgbvbtWWzx+7+k9daksPPsfAL6LoE29c61sPuXxl70HGBO+cJqAPkvzJr01pWm+r3wovskmaT5cB/u8H62EPn59RT5xC6u9YK24vZ/WlzxZzUq+6EbqvMHRrj3/Dc897oHOvRx8hr1MsAO9ZOJdvLwB4rw6yFw9npEWPv6g2rz2skK9Ca4gPkZPKLwDZv89YoyCvScarby78wK+pchKvkc3jD77Qac8x/IOPQyBlL1vVdE9TBgMvn3vs73IRwQ+QGruvb7GVL4/yzc86dMgPubZ9T1O4YA+bZDRvU+EST5c7QC+0XOOPUTZxrzhRGA+TUwbPhn3uj39q1A+lWPMux4llL2Baqe9c93hPTTpdz6z5nk+KkYQPbPvHT3OL4c9kNTQPYd6qrtB4zC+LadTPQaXXj4VaDu9FwVpPdFUDb6KOzG+5McgPR5JDD7vtPS95GQcPg7CLjt2tjq90cOyvY2EPL2uN1e+6WCnu0JV8T15His+z1gdvk1G0bw+YWy+z+VCu5Cf0b1ss0K+KZ3yPGD1ID1miHi9ZmvMvcbt573gasI8NyfzvUeiV75oziG+GSQUvBbHdL4pbNW9+37bPao5nrtAtA2+YBJPPoj9Eb5EZf69e2LzvTSxMr6b8ac8OlUEvlYAzTum+yK88bHPvawcDT5Y8Vo+8TdLvO1yDz5sEcW9i2kUvgB0Ej5XcBW+wahzPv6H072g0EU8GU99vY5Evz3JRA4+otgUPvTsAL6E1/y95pUcPVglmj2KniK+Bk1BvmAVwb1n/lS+mcyivZ3tpD2a5+e9jM5DvmWn6jymIVk9y6hvPHIkND652QA+qA8DPVt7Wb6euOO8cVAdvqg7uDwxd3u+1IjGu2ZHsj0islK+KRhFvccLZD4lCCs+em2sO8m64716zpA9LNtHvgtkgD3n/1u+S9osvghbuL0HQBW+t5WIvWnhmD0/+ca9C6yaPf91KL023yS+yTafvRK2hL7Azi2+3nq3un71C7423xE+hUmmPXBPWr6k+ua9hk1ePiWt3j1ALow9IB0IPCmdkb1luh0+vetRvtCJhz7wvO29S2jDPXSCID0PE3Y8cuiyvT8K6LyMfMI8rfAtPRhDO7yXA5O+mGZMvT5MS77wfzm+Hk7DvFvV471Uj8c9fYTPPErNGb476NS8QQ4gu4gB6T1TxwY+z/DJvczZ7D254cu9KRyQOoNqd71TkGc9uMk2PuoHET2LbQI+ctpnPGmnmz3pDP69fDwDPRKvKz5uOPu9w7dfvjQrsz33vR0+7641vkhHdj56oAO9nUsuvZuW07xjPW++Ef8FPe2MIz25HwQ8NQV4vgHG1b3ge0Q+scJgvT/KMD2op9M887KKPSPIeLzK4lg+bA/bvQBU7j3nGZw9844XPlKPKj4LAf09pM6sPQvaFD59yuC9sck+vpZC7zwOcQc+9oBAPqkEgr1ySRS9/qR6Pk4WA7zVCnQ8p9tfPmWM5Txhj9g9e91avabNaD2AgSK+ZZB+PThYqD3uygU9sus3PmSuBr7UndW8I0zCPW0/dL2mUh47IVk2vqrtOz7cWJM+NgQjPutJKD5S2mg8BOIevszuaD1PPRE8nko5vV/87L2yZHe+qdN2PiAXyT2qXuY8IEdpPWX8QLvpKYq+5WdKvkLXHz4qSWu+VAzZvBDbIj0iJaG9CQ1Ivs5cML6Ihfu9yRMTPjSMib3BPZw9Zw2mvaae3T0AMLg9jCOHvI7Aa769i20+G03rPUyQM751dVc9kL/bvXekjz36d+k9Fd7PvXQ/JD7dsPy8YicsPmcmHj4b8ZY9odkGPf771D10o9o8aVEQva1G6L1ruls+/oBrvVnmBD6M2ee8FcAcPv74Dr5lWFw+bR0sPqwsrj3iONG95zckvfHMMb4pqC4+cSyvvfqVSr5iPSM+CGo8Pk1aXzzJ4Eg9g9CePJHJdT6QCJI819Rzvo/ms73i+zm8iT5gvnfBRD42PCW+qXZYvZCTq71p7r69zuoFvivVg70yUGA9qqUwPpKZkLzlgM47rXxDvnfiiD1kamO+8FwDvuz7BD2ZRZ46l/i/vY4fWD1JCT6+Q4ohvdVQ7D1azYQ+r6eAvReNNb5ssGm+L2Bdvkeotjw0RBG+KYjcvBmiHr5OewE+pu3OvPbwD72d46u8o9ogvh3hL766Mxa+3eGEvpKCj77hDfY9rGECvKfKET4ctne91eU4vp/jfr2osBw+GCEHvqKWST2EoJo9bqduvaWfOT46EyI+FukSPufqT74Y/oI+tTO6vPWq+L1Qmh8+tGeovC8Xxr1HRIq9nocWvRQqx7wedCY+cWiPvc7//zz7XRs+MC1rvWznXb63LhS+ddLRPZouLL4PSUI8ZbC6PPQDF73CdVm986RMvebS2L0fF2G8/aSQvTrAJr23zNw9shKNPdfacz5KDTe+tiOKPtR6Hb0FoYM+4/Qhvh1wyTx+2g0+AzDdvHa58j3OmUe+OGcevHrVLb6rynS9KhmoPLGVxr0zC1c+VUVJPsiA8733BW0+C4wjPUPvY74NI/u9Qm+bvDVPhD3wCq09Ch6avY4KNT5zTC0+pk4Svj0Njb51u9m9oh2HPeC4ML3I/Sq+3Y0GvhbmvDyS9XK9HJR4PYFtpz3XvdO9OVwvvmGe7j0NXcs8JIsUPMSHbb68USu74fScvja6Xz4Fbgy+KduFO7lCIjxTEG++Qr24vWQncD5WTfi95HwDPeDVmDu2L+O8K0cOvuVCLT7GiyM+qRH2PV6yXL6SpoU+Sdwhvm4meb4l2QW+6+yYvfNEV74xpLG81rcAvh3Mpr02qFK+fVF5vKR3BT4SEJk+QYJUPdzBAL2JKpi9+cA/vvRAFj4cA0y+hoAJvqT+o73+C2o+1/uuPVXElD0MD06+mGYZvkeDUz4Rs0o9stgFPovX+D2a3w6+ABu8PWW5GL6hvSI+z12rvTSpxT2qIXK9MfE1vYX0B77f0By+7tEhPhM+KD7FD9a9v3cIPhHpkD4OaQO+pIWNvfwqgT6StyS+If8sPkx4Mj5nQQG9Kcm6vWd7GD5RNFK8K8OIPWLtAj7VXCs9Nfo3vjjkg7065/Y9/DyyvZgFob09QRa+wYF1vYY1MjzJBbs8X/0uPhF7Mz37Xh29Ex0nPqE5Rz5Reg4+c+H4PSqSBT0eaN08+fAIPip/4jthbAI9zR84PqnFVD0xXAQ+1HcuviSYyr1fSuq9BGrUPYt5Xj5AxQi8OmEWviDtXDzwhOu8fXShvf2WAr4Y2929Es7gPZwzDz4UBia+y4j2Pc8xjr4umi4+/Cn1PExrgLyQr6I93dIEPrdJ8L3QuBA9SZcxPCzrPT0731m+lTVAPplJNT7JUGe+7v/yvW+cvT3Way49U+7/PZfHPT44E5S9P5XnvOykw72wL56+/K8jvloqWr6ggkU+6jeAPh6CFL7v2dk8uVOevHtrFz255P69mRAIvr10gj2j1Ry+2tsfPWjZlj6dwSu+0aTxPVtaDb7bCdW8pNVjvp5Wmj3E40y+2xG2vRZNqjy2Ug0+8zp4vDv2Sr6Mj3i+Z01BPssEdL2QRKw9/flcPSwaMz1FgUG+BpgdPh2JuD2BMDU+6Kg4PjjwMz6a4+e9Qy8EvlQuaj0TNB2+arKgPYRHGb2LvgY+dlgLvp9tqr0w4lM+ajo1Pg99uL06xd895B03PhYiu70iFIO+JdAYPhTlDT5z5WG+A7ScvZB/VD5WlzA+4bq+vNaY0DyENZ49F4PzvbddcT56z9u8h9edvZb/q71ssDE+GJk7PjCGDT6/3W69evSQPRmxFD5TwSG8oMY/Pi/lBj1WYNW92mH3PS7rxj2e6mE9bNMyvuR3ML6ZIwG+FCcQPZt/ZL5jgIG+L/LIPdKHHj6BBb49u7I5Pl9wlryKCj4+TlYYPgo7OL6V4Nm9FM5XPnP3Vr6MCVQ906MdPj9pPT2NLl+7nGWFvlHZaL72+wa+Tvd0vd0JAD29DYW7d4i3O6a46T2UzBm9oIK3vLfMBT65Rbu90ukZPsEb2D27DbK9BfFIPQkwh71Cvc49gV2JvVovF77/c+681SlBPl4Vh72QR+U9xtI7vl4niD4plcs9RI0OPiMF4z2pQkC8pOTtve2znD4WWYM+uf4FvgKAUL5TlH2+4cljPXdqCL4+K+Y96/sJPqgPKj7Ct/69+o9nPnKoUby+NbQ8mvoePZRYW76gkFi+5SpCvXlSfD09aBm+a8aGvSJrKT2ySkm+k0QMvdidPT2cDSO+T5ceviJOjL3x/G2+m9ajvXc5PjzPLBs+VBA2vvcX+L0tvcG9GTK+vBPaVT145ca9up3vPM3vUb0zDqE8XPjcvaIStzpuwQ292N3qPbnmuT0jgmO+qJVOO8PpXL09rpk9KD/XPYTkuD21qLI9McidPdGAPL6LNU++7I/qPRFXML6UeDc9W7L3Pezg/b3gqCi+p632PPgnWz7C6ZQ9lYzLvQL2CD5gjbA93zwOPvesHD7HF4i94OUfPZTk0Dp/uAe++wMsvmYdW77idwq+O3g+vrtYIz7Fv/g8AM9GPg4sc74HEZk90xfVPWfCMr5Bb3q9cnGePffcY73oKHI+wT3NvYPYiT0IPEW96ElRvthZTz6J6Tq+I+1Avt6IMT1eRpw9qdMLPvpevz2WRgg+elgsvhPvVL6Crg6+KkHoPc1+dz7RlHm9e4xCPhERKL47NwW9ZAIhvDqcvT18x9Y9wm+lPEvqXL63hic+oravvUQxnb15of47uG4Vvmyw7z1Z/EU+T3ZdvlI7Pr777789FqeAPimruTwmM0k+8RsEPuz4Vz7dSpU9RRf/vT9o6jw0S6O9n9eFvid1gj7Djhk+DeSLusC/+D2n2Te+9OctvrtPO712ZW49YxgSPq5/1bwD4z4+Q/RmPpg/hD2XZWs+AviZvI0zdryGYqm9vFM7vpSWUj7h1gW+lJ69vcOZ4z3+X+e7c4p/Pu/tj703ks09rwCzvUZkHb6D9wA9+kJHPpW/SL6HFyU+0umAPU5CNL7zXh4+UJmpPS41Rj6gVKk9l9lSvthHHTsC3oc+vEbpvdE4a76bY9W8yBP9vCErXj78OJA+qygnvPuzLb00BSG+QjdQPXxxwb3EDJU9tpS5PTUJ8T3Pjb8809Xku21Fmb5mjMm9hmTfPSrANr6mMMa8MUGcvuGIKb7ZmgK99/cfPjzAKb48E0O+VtwlPuKYG77C8Xa+pauNPtQb3L17EZg85MWAPZ//gL1l4W898cPkPE+X/L0Qad891xnru6RhHj59UAw+KX8PvWQGaT7790O9yL3PPRx4Gj5mrS09gR0TvRDrLT7dvuM9mxrQPbwoBr64M1y9beWEPer3Pz4IrDK+1gEXPnAZJb5ONLU8WZ9IvnFIjzw7RdQ9TqOePin4Qr7lvvG9WgcAvU7jaD6l3OM9sptnvhqVjj0im1K+hcuevXa4a73ZfjM9b8V4PmS41D3BX406MgsxPZ+8Zj6ABbo9PRBUvYprNL6FWNO9ufGOvc3gqTzqnlu9zYdQvauRY72NpR++u3LOvC8GZz2SjQ0+R0sPvqcDCDyZfWK+NfzPvNamaD60NKI96hmpvCNtDz4mxzQ++ZklPUaiJD7WKRA+24uWvRZ2ij4psQc+uXvSPZB9Mj5ISgU9fd04PtgpCrxOJFw+MQ8fvtRWC72rvYe+F6CzvYSvPb6dpjQ+xrXDvRbaKj4E1Tq9PkqNvQW0AT7u/CM+TOBOvgOnKj2YMbu9WNSUPr8e4zxU6G896R4EvQPfYr5agKe8t/Favq69D76a8Wk+N/yRvScWRb4kLCo+3F5avpSMlj3kdoe93RkgPo106r3xzyA+DUcCPmCXGD785h++6a3svTozND4K/5+9wZsAvgbqm74lhDE+ky/5vSa6pT3Xhgg+ewlePjcAZz7LZIO9Ug+1PV6sPD4cEX+8WmtJPrWVdr4TeIE+q73hPTExhT2v8jO+WYfaPFzvC74pZW49Ay/evX6zOD5pvu29/cpavup7Bz4ahTS+dWAfPvstcz1e2AC+wO4uvligrD0t1jM+ww0BvnaEVz5kFLm9kdRuvkhgjj1A7a08wYGgvSRkcjvTnGg9gW+7uz7MlT0adxa+A1y5Pek2P75qRgW+8+M0Pi8vp72be0G+oWk8voBLS71e1g69jJIBPTMYDz3xWlG+DywHPuFMHb0ayEq+u47UvdbRQr55seY8j3bBPTq6u72HkSU+7iCfvUr02D26luu88n0xvvhJXD7530Q+iZouPhICG72rHRu9cvNhvgY1B75HMsO9iaEcvtFVv7y9/kM+7NrQPHu2Lj62DWm+URruPZQ2pD5OBh++rtYbPvBBED1Dhze+NLNdvgTA1z3Wj2Q9m2NovszFqrxH1129ix7FPfEFET0eRRy+gQDIPTyjR74yB6O9ikJDvefuur0PXAS+LtzEPXeTqr1BpKO9YnIcviVm6D0d/gC+rW7gvYSH7TxUXLe9xFiMPp8MwD1M+pE9kVhQvTNk3LyiQ3I9P37HPdize73Q9zs++nu5PQ1iXL6RDTQ+NwEhPggqF74BnZG7lzGivTzdfL2oHqC9ZwflPcnuIL6nLGC9pHVkvd8kBb4zhF48KBogvrLmEb5CDoU80ysOvtKzBz62bUY+QyVOviUHDD6KmAo8UFEevm+ZAL5gFXY909kcPo99bL26WFQ+WZIuvp8rgb0m/U++QQnzvTxLo7yJJL+9SJ8LvUWSgT0nFCi9LKAXPqIpmD0RwxY+P13pvMPJfj104P895oMXPtwrAT6jNWU+EVmqvBn5zj1EWik+G2q9vZ0rhb4nKey9IB5FviJB2zxHM/s9awS3vagc6b2m9W69jP93PvhaJr55PdY9z5FTPYhNIz5cnEy+h/xEvDopZ77SneS84xyTPVswOD4osGY+MAE8vo8+p721706+nWUnPnlUUD7YOpc9O/WkvG6+E711sQU+iZfcPfVhGT4PqAo+ZYQlPtDeQz62LJm9ADknPUscz719M9o95zlivph8Hb7+STo9NB+CPP6Gk7046Ag9UVccvjK0JT76IAm+LDZ6PmVIcT6Vx0++G0GpvQ1mhr2LH/S9BECnvY31e7wSYWs+NL0EPBIQGj4HUyg+JvgxPgcMbD7EUdY9e2/FvGXhKT4XsFM7Rt0KPnB8J758Ino+lxezvcGqGr3BBaq9xa9ovtjLDr6m5HW+kSb5PcKEN76lFIA+lTObPYgQF75Sj7E9XskbPG63Dj1+KZs8FJ6Duw0jZD0P1WI+Wx2HPewQMD7g5go9sW/hPS1dLL4Q5vU9es8GPbWRab4WkDI9YvdqvLregr7R4TU99BrcvetcbL6YxbS8VQ0zPtuPYr6DwJm8RAm+PW/sGr6R+Rk+sfCLPug0qz2nlho+hxqsPV1SMD44d+Y9Ub6QPTX8Lr53GQm66chivgPhET75+3o9578ZvuhmM71JXw++hxlGPhSdfbwaxoo8lkA5PhOGSj54Gna+niJ+PY2dxz2o2kw+JTpBPuLYFD7tl8q9exyCPgF4CL7TxGw86dXGvBSiqL0Ca1W+EM4RvnoCfz6SRK09V21evmAGeD0Es1++sQX5O4g/zzx6EbG8hOoBPvDbJz4Gmgo+7zDdPZqWQb4beFg+BnJtvgfoaL74+v29X4sbPo5/bT7FnAW+B3XIPTlMkDz2Uw8+3onmPcLL07zjSNw9LLE4PiqAOz4jkWo8AxFvPr68ZD7tEQG9CHklvpY/Ir2Ykdy9WM4qPg/KDj4WLCw+1QaGvOhQeL3PUGE994gvvon5Nj4sWbc9IGSxPeXRCL5MPzu9rRAbveX0AD4khJ696Qohvl/j8b2LtA2+WoIhvqEhLL62Aiu+APrnuwkO5j1a7ig+v5vivFzIXb112AE8CfGFPQqdcb6VABY8NRQ4PX4Uxr0DqiQ9P0givRQuxjqOijs+P2/YvdhVMb6Qo22+S/JEPUu8DD7Tewo+O0+9veAyYb4RGAK+OvyqPcrtJT5dGTO+xM6BPZbhkr13+j09GKdbPpIK5L2icqA8Qk10u8ranj1U31o+FS1/vs8evbzy+Ve+o3+GvT7ZsDuwYg0+q2Z5PKjIwjuJiJ49efYOPhctyD238mM+JQbfuwXYpD3k9u49S4Ulvt4xHT4ojzi+VIrCPYvKAb6JqBK+4+cIvpZC5b1ScBI90mWfuy6nsL1C2Mi920jtPXZ1bj7xa3E+GrIfvSJhHr5Mz0k+grCIPnQqgr4dawW+UKcPPP2uHb5a3Xa+1vXoPSmhFr6Sgb09LXabvm9n9D2uC3G+hFKmPVqyez3hSQ8+IIutPLGA+T3mtV0+GEulvjZOmD0Poc69H9z8vVydGL5e0Ka8jqyyPb3z970/ywg764NwvoAEQL5M+3O9F3wyvR9P+j1g74C9JG0pvt0YTD40bRI9UPcwPsXLU76fQz4+r/qGva7a571QVgE+3pIGvZrbDzxFIRm9v0pAPka+/rz4+SK+5m3VvbnuKz0gnq+9bi9Evvo0rL3H+fk9CP0vvMm4zT2Qx1s+9Kj5vVAllz13bcE9ZtgqPkoKdr5lZLI9bD0UPimzM77VjUK+bDQwvf5Um70SGQm9sp05PlkYgr1yHzQ9VxvTPfofAD5RQV++DRREvctJET4K2dm9T+I7vqleOL6B3ia+pLzHPUxtHj7maew9sTYOPeN8eD2TRla+YJJWPvYWab37mv097f24vSNv6r2CLKU9BENnPFKICrwtc5C++D5AvF4T8j2mzHS+iXRUvv2Wpr1XJHi+7sZuPivWyL2oc+Y9W/USPhfEZT0isQM+BV0/PSeMgD3YF3S9OzTOPVFpeb1qJqi9nlnbvOJ/Br4Hlxa+PC7yva2dyTxmVA2+e9qzPCUK4Ds6UoK9S7v4vdbLKb4jTHi8w0amPPVRrzypzEA+ExdGvqZKob36JxK++fN5vL0eVz71JUc8kgBxvm6rJD6lKSi+5M89vR4U4T2Um8w94fIxvq6cSr7rf0o+mLcevhmHJT5qRWY+k562vfYuYT7ouws+uAOgvaMMGT5adDs+ihYBvXk/EL4uBZe+H3UhvTkY67y/Pue8ir5ru3WvFr5Pj1w8uyyRvWIeZ76per+9Zx1JPh/nqj0U+JS89009vqFSqD3pIem9f1ycvSiMKT7gv7w9igesvV0am7wOoge+3Qq0vYI9CT2O7fu9BbIePmhrlb0e8+A8xy5bvi9WIr6mRt+8nWq8PDVDAj6DvZy9UOgCvtUPTL5b48M9FIaRuxIEJ70lVok+JIIVPtAgL75v4qY9CN+jvkjPvL0DiQq+KjihPJae9LyvxYA9hXomPYg5xj2Lijq+dbYCvXaafT6/BHc9ifIDvnduzzytYB4+5n1KPiiRGr75DlU+2iMwPN1xLD30w7I9ULW+PXtiEL51/zS+Vb5xvuIxkr0QeR6+pBPQPWPPQz7rIQS+cbyPPL6dLj6ZcaQ9HUGEvU9IiLy+2bO9N7OKvqujPz7W2NO9UjLEPdYs6b2a5Rw+9ODrvVBLDr3hKK+7uzH3vVmWCr5KnFE8QWXHvUJ2F75keGu8K48CvrV8RTyklL69hFX5vZI0AL4bWiE+rvGevS1JnryqaYi+OxokvfGqID6yxww+nb8LPsqfIr4kOWg+51xSPvBKEr7Kwss8v9miPc9OZ77Qkja+FR7sveD+vj3higu+AUFyPYHT2T1/Zes9A6ldvnYLj760pYW9WbOoPbDomz2V0iS9uNgyvc8hOT6mo3G+VbvIPRiEMD7nzIs9a9hAvudtpD3PgDC8GbBWPGyxAr7xKxo9OnDlPWeupb0ViU0801dzvZq4WD6nr/m9d9upPKDhL76rWNg7sTlYPqFSL77ydTW+0WSnvf250T2VnnU9V1OFvnKFOr50/w++BEYivp+pybwesKU9ADrRPE4cr713ntm9RmGnPXRoFLwwzzS98r9APkcuYj619Qc9pFuQPbmQNL5TBSg+tWkkvs9VD75+k+C928KHPaHH/zurmK69vZ+EPTVFS77aTUM+RwtevkqHYj6HYQ2+7WYjPi6vAL4vAkC+g8YwPaLSHz7n5BG9QbbcPaEy/D0C+B4+hVAfvkWUSz3Buwg+bhHAPXltCb7Hg0c9fdV7vTh3ML56FCW+JeFQvkLuGD7e0h4+YBNEvv4AIT4FeZu7Z/BZPnNSQD32taw8NMCkPfpaND41Dh0+0CDNverIGr3uKT2+N3MxvRvvMz4monc9bC5SPcW4kz26p1e+bZmnPeyN0b1VnRo+pUVWvfsgAL4WRSs+NfcAvk/5Gb5Di3e+L8spPRkVKL52WTk+KOVlPSIPZb0CayW+N2xJvoGGlT2GJuc93mQ0vVyeNL69Lxg9Wkifu1Fll72uf0i9sxgYPlIAGj0gD6Q9lUiKPeFSqD7qqt+8EWc+PiC1vD2O7Ds+i4BrPnffar7Spry8jeAvPK54gbsCgCK+JnGUPa0Y4z3TYjE+I9sXO3FqM74V2ZG91Z2wPQ9jLD6hWRM+8zb8u3G4173iAUc+B2/vO6rAAz69OFs9G8D2vYriSL3iMk09wqArvUTLTb7Mmha+1P8BvmYaR77IpJ69JlzhPfdKTb6ZHA4+Ty2wvW3hLz565NM8NliWvWJvUD5b5Ui+l/rbPap0gj5jXRG+DL/EPRJwgr5PyRk+0JkKPe+kdL7vbug9IyCZvcoTiT0fdea9SN4YPQGex7p13Fe+wGFvvnZFK76TRB29Yz0CPI2AmLvZTPI9huIJPliRubx/sxk+NQIyvsn2Sj3NUqq9pEdPPmcOGD4Ww4M9itstvSM9WL7FRBa+LJXMPdaWOD4q+ee8RQ6ivVXD7r1o8bs87k/fPfrErj0QYss9zpxLPrFCn71ofd+9oZgKPsnB972xJw2+SzSOvaJwar7Pqj2+ow54vkNN/b0JeYa+7kDXPWfkLT4xoWy9rHwGPStfMz5/Rmm+DyPPPKgIEz7zgDy+3LXOPdT9N77n16+9G4KmPRjlTb6Dp6E9S5oMvhY4g75IuBC9KMP6vfZWFz7J2FM9SXurPbdF2j3sfjS9AR2EvYgSoL01YUE9OcTbvc4QMj2CsQ6+hXUePpbpWz0oJ0i+w44kvrGFLT3gGZG9IathvqcPlr0zwaE8iK6svXFgc70Tyc29FDZMPtNpgD5frbY8UYGiPcCD572fSBq+kBoMvvYNBz4WNS6+dyQfPlva0b1ICyy+a2AVPr3dy7oeuRC9dc83PaVztb1GJQ4+Ji83Poa9WD56JQe+1lGGPjpfRT7BYk0+2UKzuWeQDj79gpq9PbsHPtq+fT7Fr2s+78AqPlksab3YH4A+Ar3OvQeqt7xKYVq9Pc54PmxFFr6p7pE+e8kmvtHgF77grr+9rsNvPrgSjj68IP69Y28jvtxWbj2UUBy+KpGXPLpSlj3cQok8AkaXPqapdT0U68O8t9IyPkDrzz2uDG4++SnIu6tL7T1AIB0+AXQWvt4cBD6Berw7NxrIvaVFST1wUSQ+PIY6vvrl2L0VC5Q8NsWMPC4cLb6BSAA97vwovuELUb6NtmU+YltBPp2lPz6XZO89vTC1PTTHFL4nhru983rlPa2yED7QHtw9SGfsPAjKEj7w7Ay9ugsaPZu4Mr445T09y4w+PhOJAT5wu/I8wzckvgpXsj1njBC+DEhIvmREnjxGxyk+neG9PcQjIj6LCVM+wH/EvDtHKT4C25g+lE4tPAeg/rwEjhE9FmYXvswVrb2BHIq9bT0CPsNqc74s67S9lz4cPhC7kr3x9i09gNgAvCF2N74Zb9U8TQwWPswiuT0Uz0u+3RP9vYohXr2275C9gHMGvofG2jxobym9A/EBvf1s170fwRo84Zg4PlsqczxQiiq+0uhXvluHAj6h1wI+hQa6PYSVc76C9Ji9tmrmvKQ7sb0PXU++LFoePgtz7j0soUW8QsWAvAvIDL6LOCW+Pu6Iu6a8ij6oOTK+v6AXPuwG9T3/x8c92PhPvrJzq71yDLM8eDEzPkU6ij2EyzI+caD/vZKcUr1ViYe9S/isvZ0GmT0RSgE95SsRvgqUX75ptTU+93O2vWBB871iY3K+nScKvl1QVL45aXg+dQpsPkMnCT77ihg9ljG0vbTsIr7v1SY+qT1ePgfgArx7h3E91EhDvVYvLT62JnU908GGPaOKFb3X++68mvESvi0sOT678xs+nhonPqaJuDxOAyU+eTGtveoQ8z2yRqA9+F5JvoD6r7zJmj2+f4FAuwDSpL1niPC9VRSyPZ9oLj6vEbS98XAPPla1rr0w2Fk+hffqu3KGrzu5rZm9A7UevjKpoj3p0r+9KB1vPhAV8r3U+zg+bvs3Pj7mcjyZBKS9vmKSPfP4Wb7GTPc9gOGku1lUib6nkU2+Ol4aPr9Cjrw6f8u9kgztvKntDT4HPie+F5GFvkOZxT03F8+9tn9EPnjc170+v3a92TmVPXC+Tj6tgRg+yGQZPe9Pe70lzVo7Bmw7PsdtXj76E1i9vU9BPrDqDj6KJeO89iUxPW6Mb71H3iY+cELTPbx5FL0ct4K+NQ56vbceAT4POgq+oB/VvfyWPb4tyd49qfoZvi4GXL4ANzW+ckW3PZ2qjT2++fO7BUwRPjqvvL0LC4A9aLrAPRlb4DrkMho+704kPhJgZ77yr7C9gY1LvfAJlT34yKM7UXB0vWEctDx5FEG+ImwWvSgHEj7nDwq+QRgDPqKe5L3GsQy+Xcg0PiBTXr7yVCm+vDOSveDrCD7HEP09nU3gvW7eIDzQTBk+3mi+vJZdZb2VbtS8QZjpPFbBhL4NLZQ+vYEivpwCrz3L+TS+8pPFvciLgTw5YG49wwYLvZ9PRb6XDC2+1MBaPpG0Gz5bVE8+w91FPnvugD1/+iE+nNcLvkYhFj4htYA9Ati2PT+zGT5uhY6+cfsFvhNz/Dzeqgc9kbIuPULQ6b2cL7Y9xE8rPvGHUj6PjDc+m5EHvgdjEz4T0zK+49tbvg9JyT3lHtY9j0A/vR8YiD79hhA+Jk00vhA4Wb47ZJg9tHgXvnW9Db5TSpm9AUFHPapeaL7eejK+zdIYvh/9gT3OcRg+IIXyvQBX/j0oBhY+d9MOvRaFCb6QHRU+rSybPbqgTD2b3XK+EEc3vLs8Mj2V2rm9Dg2gPWwW+j0Jcj8+VvsOPmn1ZT6bDtC97J2KPdExYz2whMM8IfFivuKCQL7NXSW+GyEUvaB7Nj6GRHu+h01EvS/WKD5XAGm7Q5sivfZzmL0OvIs9sF7wPR+oAr79zG4+u9qWPcZuhj2RJ0a9Pd2cPV8bLD5+ujM+hgkbvX3iar2Kzz0+7c2Bvf/qMz6PrIc+7qFHvvCZGL1eFTW+Ah6gPclRNT60NIu+prGJvkGRJz0eVJg+amGNvRkMTz4I7QW8bdf/PHkNRL76VKM8i1azvAprgT0DTn4+7edjvWb0hbyjZIY+qsvAPd0iHD0hsy49fNtEPgAs9T1T4dk9LY4dvvVJ+DxOmAC8a1KoPezPZT0xrs29Iml9PpmYSL4VEyi9eMNxPvJJ2b2DLog+r2a7Pbj/Wj0iviE+9X5yPmZmXz0njgC+G/Jhvl2hRb3T1WQ+nGlBvUFDCj1MvrK932Oave8prj0bgww+LIYAvjq5BD4T/z6+MrmJvSvglD4Q+re9nQwUPsis/b1YMnu+EW8pvnYzO75P2Mu8mywvPgi+Nz3QtYM95+AgvcZ6Q76PHCM+aCQ7PegmPT746bI9ti/pPVtmEr3bTB48yOM2PpxFXz7lKs49dYtkPrZ07L0RssW9KTUZvktstz0fB3c9G7pxvAtoObzDdvi9j8kCvkdm47wPNZ+8mjuZPbuifD4ljGm+s+c8Pv+ppb7vjDg+x2s2vh/4Rz5YxrQ94g7CPB9BVj37I+A9i5E1PnARVz7wl0G+lJm6PJ9wej457hK97b3XvdhvAz7SKbU9WTrJPQUdpr0esCa+V/AnPsbKO74WOEo9A6AIvheZorxb5g8+r7deviV7jL4RaVK+takTvEa8kj2Q1c29t1wJPqvMXT38aiG+MVQyu9tGUD30Vzm+GlzcvbuR9j3IAo69ph3xPQbLer0U2pI9EVycvqTzjL4ktSs+mJ1APpeldL7D83M9V6UyvUBnWL7kHjE+QlKwOyEYID6Gi/C84c6TvfTPNr4kPi+9GagKviypsrxxwqS9PrEnvhS5Sz3iJAq+SyxzvnNyUD66FCA8OTUGPuTB3r3UQQE+m3gRvvsRr72aXYc+6K3wvRr41L3uNn29SgW4vV3C+72ZMys9EJfoPYMwEL5Nn5C8H+7NvSlxAL0aVFi859tHPmXIqz3chaI9kNg9viwJrTvZy+E9ifptvmOcoruPqaI9Kdn8u8K23z2TD9m9HhfgvMKUZb2Hl9i9H71IPY49Wzxh4mo+j2chPvw9kL1u0+A9bsc5PECLszzsBIc9uJjAvTxryT0qYwG+ClUOPEqIO76y65a9JFjwPcPpcz7Dmvq9BV9KvqDqXz6MjES9UDFlPQVGPT4xL608Kl4IvrB4ij3heeU9vH8NvqAykr0ZOrk9t39+vM1U9b1pGzU+rBRavqjb3r1Jqu89BOFCvvNHh71LJWm+KJYnPo1Eor6m8Ia96wo6Pjbxvzy6boC9jn0hvoQG3Tw2E8G9kyxZvflFcb1bCiy+OSBgPVrGAD6ezJE8zLJovYMDz72nOrW9uSlVvmmanr0g+QY+Y3xMPTJDFL6qrl6+wjHbPRMAMb4u+Q8+yyw/PekTe70qOFk9jpYZvGZeEr7I4I49HxPHvDKlBb5KUUU+xYZiPu4Gpr0Cst88bqj7vajxGD4ZGa29W0rPPM5s2D2WkJs8m5+svf4Udj0IGXu+uRFvPb2inb17VEk+0JIXvrshtb1VMTS+l8UuvZRjwb3nkhW+eMk2PoCpPr7gu6M9w60Tvld4jz09+j8+enyjvVGTkb2OJN0984QaPXHUQT7jRE6+q7dmvgYrU75CC3C+PkDNPSZ0o72a+gO+Pg/EPdpHAT7fEgG+AT9RPgj0Jr1H3l++NZMuvisLe77Fn0y+/7BFPn1GD75UayO+9IPLvQLdLz2vuyK+ke/FPZxSfzy3Hba9H/pbPeYmKr2AKWS7LdxZPqkwfz7YADE+vHDCvXIMvzzDOwk+iKwNvaz08D0DGj29F1cRPg5tjr24O989IdwJPqXzK74It8M8ATBHPlYGfj2nFII+CJVDPiCHR76Z2PY9SXVnvTYc5D05zvi8jZ7ivZBtL77ERqm9qS+QPQaVOb7L7wa93e8SPjKwxz3TYjY++JQevrsa2T2tHyC+43iJO0m80z21Dmm+uPnmvXbGwr3Wr6w9hDr4vQ7LqD0YZLy9Ju5jPVccFD71o569MPmvvb76Br1+6Nm7mWJTPmD6NLzwzRc9K/QrPijcnzxksQ4+wQ8RvsknjL7GJgY+Ws3TPV7fpT2PGHe+OaS7vXDyq70ykAw+OycOPrbXBb1WsAG92WDAPJ4ynD6K1jw+5IREPc04Eb6WzGA+kDmYvb9K5L0jlqK+hhKRvbgHRj6ikM06Y/9PvpZIPDyiEly8PEwKPii26j0hxCO+rD6wPXJ1Aj7naFM++2AYvt78Q70xGho+zcwIPile6bwfAxc+jD2oPVMBE74itr69dkXLveJDaj6IF6O9e1igPUI9Db7xLna+Mc7QvY0eFT50Mla+9k1EPfHAID0+rFe6ql4CvilyJ7vN2xy+VLIEPgBXMb3OXmw9okJDvocHRT7Hpy++HDkwva3DHzz50oM+7fQovSGr1bwTHY+8Wl2sPVBmA76Vg8I9K9+MPClGGz6ENYs9SFTHvMNYvb3Sjha+dykRvhR/NT6qquK9UtM8vt12e70K5iS8al6TvKb5ML4VfQC91HnIvRNBpD2BrDe+sLnMvVyrrb2rv6+97a19Ps57ND2SASA+GEpbvhPRVL5j7oS9RzG5PN/yIjx/NZi9uCVFvuhDfr7opVI9vmqlvC8MnL3J+mq9x4axvWwOxj3Vthq+/cUovs3j4j1Hp/i9I6WdPSkrtDz0x409ZtRRO9RAa75eFvg9SgfQvcNHCT4RAkA+p0sIPVGOKD0RuKM9MoMWPgDSLD4veRc+tr01PaiB1L39NJW9SzU/vZGolL2xihS+9pr4vZQA17y/y429zgAePjEGsjse+iA+5IAKvUk19zvqE6s9v16hvWh80T0lEks9LqcMvn2G0D2i50o+jh+5PR0PUz2KLtI8BBYtPgd32j2muDk+fBpJPpiKDr6N1H09BKAfPfMYQr4nUla9YsDfvScqNz4AG1++W8zWPeLh9z34dsE9yYBQvqSFpD5eLqU9DMBAvlxBAL64GwK+TYUGPoQnGL7jMVI+UycivjyAw72pxjU+TC2mPbwCc73NZEg+vYFJvquTMr4EnsC9d2mHvFFZa753vOe9MOVtuvnKQ73oiAU+9LvYvcYIED4NITI+B6EbvXXLHz66bSM+I/r2vWyqKj3HB4Y9vyStPa3Bm73RQJq8bGVzPh3MKb5hng4+3cVNvliaHT7C+am9UbNBvkigAj2DVx2+VYTpvU8wWr5G1oG96UNfvqf4VL46zQC+AlMdvWJXXz6/S/i8Sm4DvDSbzz3BsQK+WxJ1vMZuiz1FKky+XkEEPte+K75Y3Nc8/PQvvr9D7L1F+Ac+YrCYvfXWPT7J38K8eIAzvkjoAz5YN2o+uFAJvV7XQT1VWza+d7kPPmKkpb1/b2C+gT+IPQOdKD5UJQy+DlJmOsujAr5DnaI9yQJHPCreL75q15K87n2tPa0pXTxM0Dy+Fn1rPc4gQL5elj6+oIaHPUgGD76coCK9UM8BvuGdKTxkAZO+lMMKvjed3j3Fcly9m1NRPnvuZz5fGEI+lvfpPTx8rLzIXAY9uaACPvSaHL6oWak98A6cPqWQTrwQK4U+UjyIPn+BFrzVKwu+6g5KvS4WBb73zya+4EN4PgehBz6XNgG+xQMjvkLCez797VQ8+8EIPUBvvDyLEkG+x+Fevh4Pgrp1JUW+CystPUwgj76z6SK++R3JPdgE3j3HlaA9bpnxvOt9JD7OFC0+tGsoPvKPPb5ECws+9T75PdDYXD0IY929rrRDvnkFSr4btbE9S1odvi59Bj4HJsg8x+Q6vpB8qb3+02k+TbpGPunmUr7+4fo9/pu+POibYz0OCZg7siMFPi9dBL06f6S9hMCAPkEkA77KJmQ9Hy2RPa6nwb3Y5Ks8IOSKvvbYWL5g+Vm9/ngyvQbjjbrd8c87n32svd+yS74rhOy9VY0DvKjEIr4qk/S8AoBHPe7JnT1Aplm+Vb2xvSjNoD2WUps9BV4yvnuqM76Plyg+o4sHPvIzkrtUQxw+mmBKvCImCz5EZU09JAIbPsOOhL640Aq+NEGWvh5jLr4LE/U98e3APEokvL2YcyM+Xngfvi5JoL3WxFq+DgBAvDKRnL32K6q9cLfiPQAAAAABAAAAAAAAAEAAAAAAAAAAZCemPJ2ivryXJCY83NpvvZaE2DvzSQK8WNIjPN74fLxgcMo6vFsHO+9daDu+P768i/81vFf2Ar1IQrG8K4/UPIFiGD3pkx2781NVvTh35zpJEGC9ffmUvJiTNr1GRke81g+8uyrSEb2+dIq8FN+bvGF1Qr2/7Tm96drru794VTz2vgU9U6MbPFKkR70RWDm89WuSPHXmCL38ecC80t/nPDZcED3rBDg9gTrfPDnRbzsnR4c82Ej3ObrBhTqI+rg8y21BvRcDxbym/N08oNoGPLKVbzygPj28utLOvAi9lzuHrbM8N8dBvQ8qJzxooIg8j6mNu2Rt2TqK0sS8Ibi4u/////8CAAAAIAAAAAAAAAACAAAAAQAAAAMAAAAAAAAAAgAAAAEAAAADAAAAaoRNPNrw5zxwQu67tgvQOhguFTwFmyS78rE2PBK9uTwjSrW79YHOvDj7a7tUHra8bSkIPB3aCbwjnmI8zmiHPCaGTLzSNCA9jwmuvLLfAbv8qmO6aeAGPODLrLyzIPm6rnVTPCIhpzpFyDG6RDGJO620WDxbuqQ8bGMnPfZapLpB50g8/4D8O34TCTyZ5QO9kxVjPDUiFrsJqC67t6ojPKQLvTzYsUO7DZaZvHyMi7xJrVk8mUt5vCUMgbsTCA67xcuVPELAiLvNVba8zKhzPKzgArv1yNc7YM7jO01fm7yqYs47n5dDPJ+LXbyo6bA7uEjIPFnzE70XB2+8HWCJPAAAAAACAAAAAAAAAAAAAAAHWMY80YOVPf7A5LyhE4I8iC8xvpu5yz2GqMW9grsUPT29cz22i/e9QRE/Pudgxz1f1iy+XL8qPs/fqj0tuac8EW3pvcfx2b35jzA+9R+cPUSAGDxfj0e+X3mSvdQ7uT118XG9dsG8vQ1X8z1vby++gD3qPVNFcD0Ykjm60AIuPhxrUD7UFKK8wXvWvSaceTxiSzq+jLDpPPdzqT39ij4+OSaFvecOLTwLUxs+i3f7vfYxiD3AHgq+5ODDvSMCmz04WMK8GZxIvvmuX7x0ZSa9oB4VPNHguj1Vh8g9doEHPrvG9L2wbAi+T682PtIaGb6SXQQ+N0LhvNMIUT46A8g9YHclvpa+BLsnpB08zfpfPv68Br27DOc9tY2GPlRHLT6yhzQ+15M3vqYUTz7p9Qg+MeZuvdpNGT7ptzI8TW0XvVVLtj04Cf09JPojvW7rV75bbse7Y4jlPa2R7zvaoti7n+JvPcy8+L0AQ589WwBoPRffML7Pxio+ycBpPj0/9r35rT2+URhxvf1S8T0bVt094glaurBnPz6m55m7+PwyPuaOKj5QKPQ9vqdtPc4jqruM10s7y6dFvvo6oz0cjcY8589nve0K871kJ9C8UglSvmlyjDwetRm+LAwiPDNuez2jxgG+icKIvcNvLT6XsYY9EN4gPkynpj1p9E4+EjpGviBdFD4vo3+8kIqrPYRtcr52XwY++RrYPPbGEz7LuGI+gyMdPqdFSL3qxjY82NLKvRJ5Ob4G1RE6KQQgPSIIC76p2BE+nAwqPn2oST3buUo8SQmwPTn1n73YEZS90MKvveCiKD5Aloq9nr0QvadLlr20KjK+B6FKPi0xQ76AIhW+LSLYvf8bujtszK28H0Y9viCct73DvCu+M4i6vRmojj1TUiu+yhEOPjxTID6TlwU+NsC3PXy42D0IkKa9JtvBvSIQlb2Ir9C9XHsZvhPRPTwwF9u9EnUZPhQor701FuK9JtXjvSAwQD60NZk90kwEvS8qzL3OV+m9Fx4GvjSBzDzCjpS9Nl8TPs4fPD5zuXy+j0kCPjJ6zr24QMs9+wvcOpD7Lb7lbCA+eiRLvlq+WD6lcoC+QdsyvTSFE75KeZI6uNEIPkiLYb39fgE+fo5bPvXjJL0Ysve9Xew/vrxfjL0V1+E9EQLcPPEQfryonnK9K2ViPkYGRb58XWM+YkQHPr09Wr5HVFC9bJp6PKBdxjsPR649Nh5pPalBCj5kgGM+QeyDPjkRfT0kj3M6QzA2vsruH77rutq8tuvwPW6bWz24M5o9WW56vgT057yyMuo9xdnOvIK6nT1WgSu+PdBSPqBboz39+Wq9Zdk+vZ4tWr5SM24+ZxMFPkh/gD52A5a9GqhfPsUNWr3jJum9hyyGPrG5vj1P4iO+86plPKjrlb2ssZ09Ws9fvQ6rST2vVbm92WOXvfdTKb7Y7++9h2KFPegEHr74lv69EnhAvvwSOz0jKgM+shVXvoKFgr5D2M09DW68PfUvCb00lR09qHASPmMxET6hthu+xZqBvmkkj73VmUG+3KT7PQM90j375J49wjTpvSkcC7zcq6i9ZqRovOt2Hbx3vcW9OQQwvc62DT743C09CdTJvZN0lj00UtQ9j+k0vgFaJ7316de9+3YlPT0ycLy1alG9rvO0PcRgT77vBEa+lK8VPsMTqz2nSy++AR4GvpD/yj2tp6m8rUi0PL/qMj2z/Sy+FzPevBLFU72PJJA99j72vB3QIL57Dzm+7F45PtIUNj5SRsA9ANMBPlQ+ez6+lOm8OGtIvtD6+72COBo+CGQIO3lRAD6ZYD2+ed95vSFlsr2N5Dm+IhYrPkpsaj5N200+R9qEvdXTPr5LxBW+qjsQPt434b1YwWE+Z5INPl5oQL7oQk88Hj9MPKyyEb6naQu+Ci8yPj3FID2mvo48LK4LPrHQC75AF0W+MbkAvWx0JD7HpVQ+sR/LPe8bpD2QNwW9QRCgvUyzVL1wxiM+CnzbvcKIhj2sN9a9f9nFO2SvMr7daqk9OvlMvtxojz26iCY9zJ6NPtzjzL1kjUO+L1pHPsEACD7eZOa9TYZRvpAhJz0FqCM+QWqLPMIcbz1/wm485gu8PG275DzdoC4+k1D3O56AQr64dh4+nKOWvZbE4L1+twu9Vv8yvi6cND6MgYC+5oUxve5xw71P80Q+3k0Zvt/mMz62nBy+LkuKPdE6wj0aeik+e3czPM6Wmj1sJ+49yQMivnKN2r1KlZG9oOszvvyDhT4IegI+mi+tvGzDR7uc1vY9KFi8O4Afzz2XGeK8Nt8FviPNGr4TSro9zsFNPsFcVb3r1QK8jUc0vh4dxL2zwNA9WAqyPK9jIT66jB8+FK0JPmocKj1OyM49fF9bvBggkz0zr1o+o6j/OzAq8j0pCyi+khOHPdqlWz68WXQ+hzkWvYrKJb5uAHK+AVz9vcTII7451+k905YcPJOIbr5z6Lo9VeQrPYlgVb72aes9aUbbuvtXWz5OEb09eFJdvoI3cz0jXlU+UjcuPTyIirx52DM+WGgfPht1F76niKS9w0fSvSJ7Q76eSCC80OZdvuekMr73tci8K/AqvczUnjxAjnI9p2RZPWnG+j0HZxi9Cg1Bvmc+9Tygxxk+lmAOPkV+O72TPIO+FbqGvmvFMj6At3I9RreIvOWDfT5iel89hrEwvb3rQD7bYjU+IzZnPvFBoz0tZe67PFQGPraD0D3PZgg+19KIPlLCXT26uxk9xreEPbYYVz1DbR0+eMiCvM1e2j2+7yU+AuPfvDE9DT6tWlg+tMgzvn7Emr5Mley9zqj0Pf9ALL7praE9hgCQvlsXH72U0Bu81OVHPRoD571+90S+DTvKPL6YUz5ZtEE+yalsPtURmL08uVU+Ht0svgY5Cr7UpDS+VWCJPhWhEj6UE1+8w9O5vePVQ752fWM9c/ogvfGnrj0sRLE98bTAPZzdPD7ud/g9ePtEvgHBPL6X8wQ+fLYwPt6cQL1Z10U+Yf8uvsGyXD3R1Kw9Ap7/PQQ/Jb3OSxq+tuEevgCG4b1g2fW9ENLPvQ6aMj6H2E4+okYkvmc7/rzE3Xq8Jlk2Pk5kGT79x/W9o/67PXbYsj2UKX49p+ePvkfnu7z790O+yuFQvQL4ab3i0AE+qPVNPmt9jD34dT2+sxhAvo7w+z2htBG+TCPWPV2oRj7PA7s8hEmWPdTbVD5ocH8+dJHHPeqVuz2fSXU9lfZqPn/MCb1pyL09rqfxPdpVmj0h2Wc+0uEOviQ+DT0V2HA9N3ATPodrD75fnuU9QJNvPlml6r3dWTG+kMFBPjG9Jj5cUTO94xxXvTb7QD4lr+m8bK3ovYVcEb4ZLjY+eMKFvJg6aL41Wma+vX7nPUp+Pb4RKWW+g8ogvkQ8Pb7/G+u9zHUTvjp+Tr7irgi+WEyRvlTYhz4ssrS9rMZ8vtVuObwN7HI+FxXCPfR2BD5Ua1G9aB0GPdbhdL3aE5o9htK0vRSzxT2Qyxu+0fkuPujghL6kRq89MAiePUK2Eb5ddoE+BRMTvq7XPb6P+0C+PJ1NPd/nLD3qlEw+g0XEuzC8Rj57XW4+gQgZPiT+Cr7gPxg+XxlTvirdar5joZu9pWxSPtfVF76V3dK9XpggvhyCkj4F3wm+k9zvvQwbVD3bpQi+k+7DvetuED3bZq09F92wPB3FPr1Z/DG+JDsEPoSDLD3DYrO9ExzbvYctQDyj2fu9Wx1JPhP42T2OA4Q+htinPCqfc751YPE9JDZIPqWGp71KAbi9JKExvp3zpjwR4wS+ehcIvprxED7xyqm+c21Svae+cb5Bxj0+Fno3Pi7MQz7EENs8U8xzvb3GSDwqde697G3dvfb/Mz6pDhW84Lb2Pd6w2DyhRCe9o0q3PSFhUD7H09U91fVLvun5qL1oFgM+/vxZvsU2P77jwzM+J2jUPVVNtbxKsIe8HIlvPRFTLT5AQ6a9WwDyvSbfM70yIpW+NLOXutDUn72M9BG92hT9PeXkJT4AhUq+l9MKPuKYIL6udHi92089Pq0tIL0vIFG+2gFTvmteFr4OUZy9R50aPua+jD2aWkU+AWtYPmuqs70hFMO9koAWvpfG1z3L5wc+2WEOPfeIUj4BIry9I1CxPFzVuD0Cc8Y9cHFDvn98IT6LeG0+QVwTvqkYAz7Fswk9Jk08PZLGY77keks+UJdePcNT/D1hhai95PhVvJAc2r0kffG9NpfZvXF6Dj4eFgu+TckLvjFZFzxQfAc+pP5SPFg5+T3sOoQ8hWCzvSN5Br5DCBg+H5M5vmkwl71j5TY+fJPGPdZ1Pr7pm6O9/MYcvj/yfj7Qwqu9mG2YPZEoyT2SfEu+mHVBPryYib0tGjm+gX6FvuWZPr7NHaU9mGIfvYeKhD4qHsc8cSQnPGf4xD3hI2G8GVUKPkGfA7ytpyM+10iBvlzWaD7mnqQ9Sa6KvcI4Jrym0Og93foovLfLWz5Isrk9UseOvE9zqLvdG3C9Puscvo+a7r0h7+q9cpn7PAo1L7wl3SI+hg8vPmQ8Gr5scC498BF0vH6ABb6wM5k8e0pGvrsDyz00/uY9FbVZvLpO9D3y6Qk+mWhbPsl7ZD0PLlw+o3iMPg9R1b3gCye9tY8uPpSgWT7oxek80/LCPT1GFb5lvjc+xzqnvcramT5w+r69/O85PnlMZr4AYe49bPBFPtAh+D0Pi8K9uBObPadegT3MTcs9dwHUvItYNb40Lg4+5oczPmOPyT3GhQK9YIFEPeZjkr3TA+w8oUmBvdk29D1YaZ49A1covpUGKj7ZIFc+dNHDPSky0T2yjo49bCDYvUm4MT4pq7e8K7/LPZq5Wj6+AB49D36lPRkKrb0VYsE9BW0vvo2iPj4csZM9ZvV0vhkIrzxpQFS9JOmxPdD+Xr1EpAG+bJtUPM2T0T38ht093RBivggFJ74F/to9q1sYPgfMwbwoeTU9dZYrPRIZ/z1eoQU8XUm8vVbdGr40i7K8nU+OvBvJrj1cTDg+Uq3wvJbrWT5OKGG+akRQvhpQur284qA9efDTvHGq3j0gQps9xlvSPSVM+D1zccY9spSzOwYHhT0udW49HgBwPli8Pb50yDO+Dao5PF7D1r1kKhI+5ywcvjMObb2nYjY9ZLISPrf4CT4koou9VA8APoqbgz7ADNa8dR3ZPZJpZj0iZA09Aw1mvU7OLL59Ql298QMKPfyuwL1QMgg+lEAzPoHLKb5sgyu+hEogPhfksL1eXmO+X/2uPblPUr6W7qg944jxPMTDmDwAjTA+RGrDvVJkjD0VxEM+HUG9PdJyKb6mRoA82O4Jvuu1bb0jjjE+QYgxPBwgFzxSJ+a8I70lviMfpb2V8z8+E0Q/PoMeHz4meBK+bbNkPHakFT79/4K96z9kvvP37DzYuDu+oqBdvFKMV743SwS+mLDPvfVpRz2tREW+A3aAPKp0qz3sQV097ouyPF1o6T0wWaK92F8bvhcSGb4i7Vu+n2hOvl//hL1qZSy+OXyLPBUI972fVSe+vZiLvcyvCL5UK6U8ehduPBHkOb3WejY+Dss0PusLYD6FvTQ+0IFRu7CsLz4v9Du+5MFKPvZJFL62TTc+AJJfPXjHL75IQw4+U8p5vozWSj6ArrO9hJGkPIdqOb6wfuk90KuePd8kYr09WYk9JzWqvbV+Fj4Ssue8EhKwvS0wbT215FO+Af5MPnQRZr5VQCe+mC0OPqfONz7zhS4+H1uMPZZda7sx7Im9KdwJvkITDr2cMaC99JsoPiNMuz0vYx69OtwEPjYAH76d2cy90EW5PZDwM77JrjW+PK/2PYat7r3ghRC+Xe1wvg6QNL173sO94YYNPkmBEr7PhOy9Yh0gviebPD5+pwy+uijNu+p5ez26OzC87oKCPgFstj3I67k9/Xoovt1Ybr6KxCM+xJa9Pf6/Bb50UtK8zt8XvvWwAz1flyg93lmmPc0UQL623V2+j5vJvShgcj0ujA29tpQ8PsqlEz5kuk8+gs3ePenBd72jNoc9yBeJveeaqr3fuik+b0xAvr6ikb1u84U9HK+OPQBWLT5QY8+5Aju2PQKHVb6teJa9/mSMvqYbhb6NJQQ+14XWPTjpGL2wURA+BGvjPQ1FCj6fxHQ+aRzaPScx9z1x4NQ9uz4avkgyiz3OE4y+GTVJPndkAL7gOig+bLeIPX3iJL4RnMe9bKNuvs2JM740cXC8mbk2vqinN76xQTw+Yz+ZvQEfGz0C5je+S6+BPKl6Hb4ppym8zh9pPV+eeD7KF8i9SeUEvlse5z3pvvE9N2WQPRUwKz6cywa+2DcRvgIKgL1ng/i9il8mPh2/Zb3nJco93acFPg5dODu+OPy9gLdKvqv+Rj1w70s+aw2UPXInc75MFfo936sePhisKT2tITY+WdcmvhLKTz7cThw+IxAnPgCAFj78HR8+g0CePf/XNj2b/vc9mS37vfxKqL3SBra9Nmplvp+JA743BT4+2nZAPvNSsD3VJ3m8yF7mPNSpD74T7ym++4ESPjdnaD5SOjg+YzCcO6ecij07mhy+02duPTamLD6uDUI+UdxQPpWBaz4SqXY9bHdhvjjksr1w2Mm9POVXvfuG1b3LD/28Y7DtPb1lwzzCKik+EaoyvjByDD7eP3W+IM2PvV/fzzyMmVe+f6AbvqA2gz0MDZm9bXdBO7om2T2pGmS+HQjLO+tWIb0gNpQ9tBeivLYQMr3aus88QArLvWLbLzzh6sG8WTvOPX4/Hz6VwBW+TPg6PqxWj711UBA+7+gLPqhpLr0q54U9nhX/vXSLYD3/n+m9FMHvvXFqX74f9VA+TnPRPTFaAz3Qkwm+lKQTPQC1Jb72KhC8rO7uPUOGvz31yzU9lnvVPaFetr2thRY+jmdGvu8gGL4vdW+96IgKvlEosj3ywJ69cl+fPUXZ5z1y+Pk9v5qUPJncr71bvSO+SedDPnM0Mz5zHIw7mvIAvitMC75GAX++b343Ptk5Yz1jTPA8l4N5vg5k6L0ctDE9xAVlPlsuirxSU2c+UCpzPdU+D74dKmm9OxtyvgSKZ76/7rW9xFAHPiGfQL1x9y0+blk1vqBh57ykWKQ98ohrvnLl8z0/CwS9bt2LvdZmTT1o/V4+HvLDPbqn3L2XuyA9XVxwvo2QxL2ggOm9llqbPM8iH778eRe9QaDKPf2d8T170EQ+fChzvmQCED4L+Ss+0ZgLvaHejz3RAyw+MrydPqmM370qMsG99fS8vWktRT6DoZG9xI/fvblvWb0UCkm+bA68PfdpQr5dG9E8nQ0RPsYIgr4xHUA+R12JvbOMSD13b908SP2IvRCyP71z8+g93uT2PEJbFr5EbRe9gpiFvk6fCLw3LTY9tJ4SPT4DTb6Qlwy8kAkBPouqPr4uura9U4mFvhMy6rztl0+7U3QvPncaRL5jLim+iCBmPsYwRz3uxxK+hiKXvcgry7zLHzS+ehezvQszBT4HWwk+773WPXy2tT2fN549QMyAPWvdUj5LsSW+ZbQ9vigeJD3BZ949Lt5mPcpWTjyNCHG8al2VvVdLl7wMVG0+DJNkvh151Lxr/UO+p524vXKwKb5yiQ6+3/WUPqucGj6nQ0M+vHr1PdQw3b1LOuy97irUveg25L1JufC9Ibi/vY7g5j1hST68DAMiPeVCN76ODJw9Ov3dPW8KB74Wrjq8i5mQPbq1zb1pZIs+1iNzu5tIEL7vD5M9QTITvt+Na749f7G9bd0evpiB9zxfBQI9NlPguwCwLL4aN6s9bs5ePQ7epL1oEwS+3RLvvca7XL7/mpO6eSk/vpso6z2YRvu9eVfNPZxcGr7Bl809NHBBPijiVr4AlAs91M9pPg+kZr6M+Mq9Qt44PnrTSL44twy+lUv2PL4cCT50xoW+2b1ovUpKXT0+jSc+FvMwPq3MED32JwI+f3zBPRh0ej1V1A6+kms3PglE2L1p5J8+3ZQEPt5MVr5RpMS9OErLugJGDz6I6W0++rLcPdVhoz11Rai9pP4Hvkz44z1ocoM+7l83vq7FwLzkDwy+3pLAvS8n7D1OPcS955vcveQHAr6EybI9+OqFPkLKEr52TYw9lKFdPQfp8b3TCUg9GLSwvTrDzzy1wxo+pCoqPs67Qr5DTR08jQ4Bvr5CyT2Qq+o95IxhvupoOb0QuxG+IchbvhBNTjjd/QQ+b9tfPh57Fz5EgjE+Dbv7PU7FoL1Lt6Y8JAUuvr8m2b0RXt87/Ur+PaDLdr2nYOs9FMPyvYdBX76VxCa+bqhmvlWKMD0c/9i9xZ3zvZrYUr3jOCw8h2xZvnDxNL2kD/O9UmfbvWMkIj5225O9mKuavLCCkb65KnQ+AbY5vvs2nD0vx908CcwRPqFKML7UqiG+6akzvguJHL6S/EQ8aQaKvZlfCz6G3H4+2RJBPnoZpj1JfJa8vHmMvV+RFT7qDBu+bBUovvqCuT2R+zy82LA+vpBZKL7mX9e9gzhnvjK2cD7ZN6k8FtIFvjZfgD5IiX8+/79tPqdQMr0U+jm9sa3OvfGDQz6ky8e8XrgsvjNXED78wti9mdKAvTG6QL5m38s75zR+vjomx71wYII95WM2PoTyVz5yviO+7KqJvgxWxbxx4/k9dsOOPd8A/D3puMI7i3JsOxG4TL72oDO+BePjvZaChD0mIoI9quhOvqaMYD4Dq9O9NAAEPh73hjzUOCg+WhotPmEKTz58cwC+PpDcvTMIo7zPHXc8fA/FvTVE/z3IbKq+9UeivTxvOr7tzx6+Gkb3vEeLvD3xbGg+qKiyPTFyM77SXy8+kGwlPqvCOr4Vdg8+eQkWvhK2OT4JrCY+x8xFvpweDD6hW/q9A6K/PQn6HT2YwJy9R7lXvLdRjz1yrB0+o64mPtY7ZL1gbA0+odAsPktRFb6HzEy+m3lNvkXC2bwwzZM+9CYfvrY+CD752N49bqGWvBiREL5ORxo8KWXevXZNo72dFHO+qxVivXlGkztM94i+nFVOPt9pJT5IwU486J6APdoZS74h7HA9V2EIPYB1Crss6b29YEHHvZ9KLr6JHHs9Tq0Wvkj3Tb5JJnY+jdsrPiGKnj2Q7349vvRAPrHpmT4FEJq96saevUtw3T1b93i8o9RXvu5GAr5CGUi+SwxdPdc/sLy0OwU9dlZuvsCVNT0eHz8+Crpfvk0qGb0bO6W9G5tUPvFwJr6ZfB094tw3ve4VEr4CJDe+c5osPuGJqzyLnkW+4GEsPqzzTr24sEI+gleRPS0eE712zTO+SoODPuZHvzyPOco9I02mvMRfK75Uswy+eNIfvgczT75Ubie+iZ9DPi8A7b2XLk0+OlMPPjZIWr4qodm9f7OyveExzrwtHUQ8mz49vijX6Ls3yAo+Rd5BvAtzK73K3SO+og9cPJ7DB71dNBI80NZ2vkXvO74SalW9kEprPZwCO751JFa9YYKbvSdBJz6nz/29HyxFvg6cST04j5S979GCvRT/oD39qUA99OsuvvLULT2M9BO+u8zBvYdo3T0RqZG9CEW+vYI/Z74J8qY9VXAGPvUlO76ijYe+2HHVOiqbDL6soys+Q2IpvvClwb3xcQi+T48jPs4nDz3CvhG+n55mPnNCOT4fvIq9cNf2vZmAJ73LlEQ+9qoVPuxZZb7KasW9BiEWPXihEL4WeRI8fWP7PYiWHT57c+C9vATivTaf8b3CAmg9EV4+vjcWqL1krkw+uDT6OvShND6xbCA+tfeNvWcWHz3ojVW9tY6qvIPsab03CTC+m4YdvY6hwb0dmd69rfAhPPmSMD7w7xe90omtPVXBibx75Bw+5itOvpGbRD46kXE+H579PSSxcL7OXfm88IwHPtVyZT4YQJQ7Lsn3vYLhVj0JwzO+ONmaPqBpZT1shB89z4oYvgjbI77Xml8+ImhovnUU8zytUzm+NGxDvnNFAD7UJnE+PHEGPshDTj6jVmM9ubRfvntm+L06yMm8vtMKvhRrgj7RUBg+azK+vV9zSD330GW+YbjOvVZm570zfqa9czmovbyJNr5eeJ69zntfPlNFdD7R3HI929kQvmS397175EK+97KPvbriID4Abia+Ie2svXEljT7nn8A7WbkpvhtOmbzG9TM+Dy8ePi0fL70PS9+8k5OpvPEMTDxnqwi+7NX5PaeJPD1Q0Ck9VjxPvWCUhj4LF4Y9dA5zvgGi7z3L4go+RVFKvqvtGb6F/6i9a3tJvuM0Ur7CwXi+2QFHvgEFVD7HLgC+QXacvctV2L2vbOe9ka5+PrlMZz1jrIQ72Tb/PZJMzb24BQu+WEm1PESkRT13SM69S0AnvpF2Hr4/yAm+eOstvbuWgT3Q5Y09irIQPidELTwERDm+oEMoPsD6Gb7p56q920c6vvL6Fz3SgCq+W3lLPlKCK70jYwK+TkSrPRDyX721LTW+Bz5xPABFj71nPP691PK/vb4djrzebA296Nwhvidfwb1Hoz69j8wyvv28gDxh6189PPgNvgE7CT7kmI8+5sg+PsoatjsFskG+97g4vooA7b1FRHo+LlYWPpyJuL3QCFe+bIzTPT3kCT4732Q+4+y0vST8UD4Y43y94jksvo9UPb6kDXg9uGvsPbDYhrwKQpC8EkUyvQ/wGr76woO8p0AsPsqFmb7qHVY+Z2sLvEEROb4rrJY76tE1PherBTzrBlU9pEcVvrYBjz4Bdz8+xt9PPYnAir2jLsK8wuFGPo7OPD713Qg9VoBlvV+4vz16BLS9VsoKvnVVXr6ycs08LpwIvVRKnDweeAA9y9chvnzu6j05iq48A1c9PgEJET1vcFu+lP3IvSH5H76UaG29nDUJvrh5wz3bN1K7do8ZPqfFWT1zzry9knRHvrsjAT6oAV48E8nDvZaMNr43CBk+f76HPc5Da73hAFg9yxEAPs6EZz5ngsq9GKhbtyuim72cLjW9RbJrvrdIgj4eTv29oTpyvtO3D74wkCa+fA4YPVv3rD0hTJ29cCshvN9VjT00voS+7bgpPjXKWz09IJ89DGBdvsFpIDutnVi+TaN2vjxqMz6uYi8+BNFZPiTERz5RAjy8AjQfPooTnr2V/kG+SFwCviPrID42jUO+xNvZvB/1Kj4umKE9n44VvivcQD7WK0079HmLvucCD73jdiO+Cx9TvkdQp7uCmDo+sh2PPtEX/z1IpZO+r7MlvgS0qb20qta9E6BvvnIXV777W549tVypPadPAj6T/lO+SSj7vf1sKL5LXmm9b+rsvQA5hr0LOeq8F19ZvY0zzbzcpVg+wmUxvoKXMr4zYRe959WGvcmg2T2vjDa8QYCNO2a5QD7GokC+dHa+Pex20T0Qapg81TtFvZFFq73hmE09A+zePS4ub75Yu8k9+gzPvXH6dr6jHcO9ZBEZvuT/OT5Jh888VIg3voTEUj1k1Uw+hiA3Pn748T3zqFq8ZXtlPXe97D03a9M9SXKAvgAeMD63P+w9nm5cvWmoKz1oKIS97vsHPlvRKr70Gg499OofPfRnBj6ZtY29WAR0vMztez0u/AC+lMcGvbMybL6ra5+95W0RPp5ROb7wn5o+pglBPVFX4b3dooU9WL72vdm5Mj6mVak9psQCvqZQKD6gSV67ic7SPc0fgz2zo+69ksB1PTvvYT65aFU9VGtfPt8plTzigii+/F4ePnojiD42+Pi99C8lPl3px739yz8+N8wdPtDSHL7ox2Q9QGtavTEVXD0PK24+Zi31PBSLDz4qikS+yOdNPrvdx712e3q+cHpdvqsLJj5bTqW8pR2UPf3LQb5MWoa+Go0aPTSdXD7o00A+WURmveWjzz2XsMC9suTCPYzDcT3KIEw9rdw6Pu8Jkr2x6dy9IaPGvdEYN72yYFQ9cwUMvVbUUL0LkTg7lFtxPSr8D76yraY9RiFCvhSWnLwwWBK+G3vCvX4wljyeHKY9OLRHPhzRnb0kmrm9ox5ZPUQqqD0VXxw86fyAPU0rED7UsfM9URNAvhCUFr4w5rg91/YjvmU6pb1B2tU7aQJvPdy4qL3ZmU2+1oxFvrmeoTxfPgg92DPsvHi+dL2UB0u9DGwZPryZA74yjbA9yCyHPT54jD3ndwg+6huDPXqeUj4twJY+zWvePXp5uT1m6F89z/IhPlq0FD1y05i9KMgrvlFAHj4NcRE+Nl8QvQvbBz4ectg9ZROOu4QQPz7FIFi+WjZQvsOjzj0lbku9VzIgPTU9BjztXr88q8AbPrsiizwYzEo+MAo8PWcZ/j1dtZ49h2pBvptj8b3tM6W9ZKlfvkC2Hz6OZY29s/VTPvjVoDxnm9096qaFPYK1sD3BMGe+PhgUPcp5ET4Xufs8nA0ivtJiSL7llgY9ZeIPvlNDyL3BVUM+irjhPWEKe71GjQS+yAhTPizKRr2TlCW8XQgvviQ2nT1wEgS+qUvMvcgSQb4iQwE+EVRpvsWDcb7Dygy+GF/hPX8eQj7XIBC9Nl0UPlfbGL5rrBU+7UlBPQuWZD4+gD89KSravTZIiL2JHpu9EaQRvfiybz21pJ67A9tfvBAiNz6Ygls+Bxb/vSoMTL7xbaY96ApoPcljvDzpiA6+4vsAvmfChL0Va+w9xWTtvQq3Lz4NJiA+7yz7vS8UDr7aPgy9H6UgvWMLEr5jGK49x8k0PgYEmr1UDro9n7QZPoKhUr0QaQo+jwY+uxi8YD6CUDG+pxA+Phb5FT6xNFo9fN4uPGAz9j104+89yZZ5OhDua75qEEY+qV4SPUIE0z0fSj49B2cNvV2irjyPngk8IVGPPfPKbL14fCa+dFaGPRCkEb5GAFU+5jnaPcVdBj750yC+n6CUPddEZDwChIG8796iPUiVRDxXKmU+/5aevZyyGT7Tj7q9NJtJPDfVTj4o4Zi9/z2DPjeVlD49UQw+uL0dPjNn2zX+4P28cUtYviwmyDy/tto9K/EGPQh60T2yC4e8zDSuPSo2/z1YLIU9/CSzvUOOKb6T7pa9PnSZPsnkOb1vEaa9/iSDukJm0r3A32W9z8SDPMfUcb6q9cc9e0LKPaL1rz066pq5CYL2PYnb1L1D4Fc+0YwzPRPL7b2v4As869yuPWrp5j3hsfM9Qh8IvthFtr2gbpK9kMUvPXdcQDxKKxe+vhxPPpZoLTyvCBQ80ikPvZW3QT6husm96ftHvgmvuT1+/yU+5hj8PXWwHL4QjNO9O7UbPYY4/T3Rkiw+XpdMvt3lDb6VbkY+e2rcPMwKzL3LMZ09zuxavtNIA778e0C9XeSrPWrqMb4N5QQ7xQYtvrz0uj1Ltgk+n8Ecvrm5Hb4FIBI+OYU+PS4aib79WVG9FIk1PVG4BL27BBM+fs4YvkQN1D2vCAs+4+ZMvlUF0D25/BI+YoH2vYUxXL4MSxa9QhvFvEwHN72KLw++QLmHPTDqCzyuXNc9iwwVvuTHHr4AvTO+XrJcPnX/iL54xvi9PJEnvnAUPL1sOjM+0KmZvk6XiL7mdCq9/v22Pa23p7y+dQy+j1givoCEJj6YODW+2a/oPV44A75FI449mmChvV7QEz2zmb29rT6ivQ0WGj5WStK9ktMPPtUTeb3wukg9KeAVPbPFaTzvjmA+QgYWPgnNib2mM6e7bcttvPnPaD76vSW8ZuhcvXhL2ruz7d+8SpzivTHLsDw0bDi8OvDOPbAWOz7XbBW+8+LGPaAQHr5/CIS9GWPIvMz6Qj7apl++ZMk9Pp0rsb35eY691gUbvVsKNb7bhwW+STo9vm2WwL3lsgm+XDS7vXUiPT5hVwS+QuTdvPm+Uj35IpW9W15vPbnAML6G+Ts9oQ0BPop7UrsRcUW9OoSdPc9Ulz7hQMy9Pgbmvej9tD3FkiU8bLoOvo4Bhr3SIko91AwUPra3Yr38Zeg9VsW6vZep/rvLEOQ9pgmFvatVtzxqBwI+d1MPvmO6Tj6Z4xy7MUyGvXC4Uz7cISY94hKOPckdez27Fce7hD4jvt7zBL63Or087rJ2PrZhLT4gZB4+Vbe+PVG4Zz4TE/O9SF2KOxzcJD5w5gU+JZOvvWsuvDyrMPY8/x4+Pr/jOb4RZ1A+FYoqPiy1WT6k35C9oDIkvsvvzj0MMFc+vlBNvM0/9T3wXvc80mPwPaJzQ74Viei9ad4VvlKOQ74yL9o7yc04PnOSBj6KxmS8C9u7PTeLNr5pEHA9xRAUvuqMQL62hxm+kiASPvMe5j0SRyU8sET2vTmugD6FZbI988whvfsVKb483gk9z65evt+EvL2O3hW+YCGEPdhdsb2B1PY9xVZRvryEFD5bMkK+djdEvkqWHj1Rf8o9oElGvWtjBb7fxtQ8QleYvV9DDrwLChQ9T+JPPV40wj2OYgA+wu49PrPN373mxjU+0gPEvQtpu70FUNQ8gVtHvsviKL7ZBF+9uP5TO4FTwD1IhiY9eKvmPXQCjj5Xq0i9Rrp0vamfdL6GqCG+Uw3OPXgYXrxoqdC93ppgvLX1KjwcHVC+w+HmvYdkUz39hkM9lb4VPnONMD3vvf68rsn/vWlp8r0niES9//RBPl4BoL0SYqa9SFEDPbJfgjxtLga+EJprPo88Xz3oiwU9VLEZvjWdwj0d1Z+9eNIqPtnE4j2agSQ+Ta6TuWNIi7xV99c8lWQiPnbuBL1XuBi+njAUPi3NHz66Sc28M8edvaVOmz3MPk8+qjRBvrvhLj6/y/I9zYCwvY1pST5pqtg8G2KOvZncFz0OVYY+aFHWPOzscr4tJei9N4GuPY/+zr3Rfse91WmrPtdI1T2I3Qw9SUU1vqP1P75X+SC+DdRIvaEMj70Bawk+fSJcuvOkBT6ArgS+fLwwPgYeTD6q4Sq+dNk0PlbiYT4I09e9Ai/fPTgtG743ISs+d8EKPldviz5ceAS+kmFUvgV7Or0v9jI9kpBuvYTtS72+liw+J2hovhYoBT69Gzc8l6E1vlKyXj7ogAG+v/xbvT6YEL5wECU903DaPW9/zT2gdUI84q/nPX6vAT2QX2I9mge+PFnZQ74KuyI+3DkIvnaVTD2RkY++bhc+PpCrjL2vF4o+cOl2PcsTlT4uCgw+ZuCwPY9GtroaIf699e8Rvh+KXj1nlxW+pkSKPe89gr2HtKg9E4cIvlqKpjsWSKk90kHOPIToML60PRs+hKqHu0Wkq72Ah5c9UAG7PQ3laL0nl288foN4PfGznr5Ni4a8abSOPbgPBz6LYPo9ipqEPde06T1WeKK90t5DPKsZvr1vbDg9zus1Po/rDr4aqUA+vZGoPZPKVL6F0r28q3/yvHzxTD2xBDK+3eITvoCHKb4fcDO9Z04PPZR2wb19LIq9gFnovJ6bUbwSrFY+vjmkPZJF0T1m+7Y9YXtOvdvOhr6ZLZa6wWZEvgVp+jzt2je+b9qOvXlEwL0Oqxc+t35bvcu3e70J+zi++ZyAPLb3BT1oJxg+gpSpvc2tBj6YVi4+1uVCvrXq9D1rscu96fqaPmLQmr3xUgW+locAvv/pxjxcY4a9eOFnvvMYsT3zHjy+EHCtPd9oOz4tNXo9sW89vmI7cL6FSUw9kz1tPpCglL1CHfm9A9JUPSdbLj6E4j6+PKHRvTVCZ74+OT49nUYcPtxELz6oEyy+H/kEvszpED4ozsI9u1ogPZX8Kr42Rg0+5HVOvsIsoTe86A09v6c5Pv/LiT2QgzI+2AyAvImDGj5qNVS+aqPlvTMsbL1wWks+2HJaPcG7ujvEmim+oHY5vsry1zvZki2+hXXsPGqt9TwW9tQ9c71ePSFSOL7dB0W+sKggvecOL746EOE9gTspPhAvm7416AO+ROSnPfkwVD4D2kM9HRsvPgWK2b0+iB69OzlwvfJ5gD3GzqW9lTYqPj3ftDwLfkC+6KC4vQ/38j20gOi9Zyo2PnSzGD5xUSQ+rRmVu1UBoL4sUNq9hCQXPdtkSr0iKIm9RsjKvWHO8ruKFTg+p26BvoWiO74sgvC6aI+evFG1Vz3Wakg+xF4PPnCKfb49Y3Y9LkxhPZtJ1jy40BC+lhBAPhrqH75AoU8+EEYbvhLAAr7stqG8jmY5vgsjjj3xIMS9+w5ZvpFVK71Q3Yu8lfSfvYgoMj5HVga+EdOuPUeckT1lHVG9mzRTvZR2Rz1BngG+1sUxPbPo27zir3k+J4kavWzFJj7g1o88Nn0HPTje8TzaE3E8mPmiPGuWBr5JxA0+Kem8PcB2wL2erAu9CGlZvs5TLTzznZI9dvbovMwY3DzBY988WBCFPvZbgLyvMlw9YtH/vWVP3j0cH7m9kF00vm+iuj2jsTA+XLnqvDD3ob1vIDE+lrqpPV6IMD25mN49hb4xPNoSez1m4xe74KLBvQKIvj0m7bC8o11Vve5EB71cXXE9/O5jPniIZz0HtXG8Pc0uvmAkZz0zTVq95VLkPBsuIr5eam+9552gPpGpbrua9+899HyDvr8rtjxjUDY+Na0+vpxdTj6wKNG9IQYOvalx7b2I45y9C774vY+iWD5uvAS9ZZ8UPlqBoD3ZwSC+EDuJviIeYb1204o+qaIQvg2V1zy3uWI+NtA0vtI6Tr6LIJK9Vqc5PoOEXb6ZZZo9JhxUvkLW6r13aza+UDVzvUmSZD3pZTe+qlW+vZhBEL3mOCM8u/AlvikXcr164BE+l3xVPnvTqD3CCTe+ICEEvnSxCjx5GIO+siGNPQ4SLj6p1Z89nyFWPSf2jj5KpaO9OC3lPfvOS7zb4z2+fTsxPao7KL7LqU69HwuWPg2zpD3g5LW9YTKkvJEjCT2dswy+YkiYPX7FD77bAMY8NNLIvabUtDzI/rG9PRwUPly/Ab4T0os8ebv3vBmxbL47SSk+F0+3vZtVD76i4mU9wVX6vQx0Vj4c9qq9ExSdvc8gTD10flu9aqGIvgWhgL1m21K9dP+GPpqCMz3coxc9LWdsPRaKaT2JoYM+4n7tPIu0+72fB309l/xNPk9LMT1SzdY9MKhJvtVImD1xsMw9eb83PiMWjL5UqwE9tmlTvVfQCT573lw+SERNPnYXdL3TMAs+VSXjPfz6Wz79bDA+lgThPeYWEr4LCF68M9nRPYo0db0r+n69X2mLPZp5Or34zg89FonZPZ4tH766xxc+PL5cPn8sBT7Y16I9mEdQPgXHFT7Rygo+tPr0PJLuE720Q989C5yIvNlKZ71nSSo+AKXuPAA1pbxy/QS+5FW3vbFaVz0zi4u96LAXvTh4BL5E/Mk9xTWAvki1dTsoIye+YBelPXQrCr4KdrU7QVG0vXvs2b3qgQQ+IEG4vWgHBr6zlN49EPQ3vuvqJz503ls+EfZfPvXhMT7HWdC84ORMPoY4Zr2TMh++tw7FOyeMCryWoVU92QBBvvdvqT2+1Sa+0/dhPRtJFr5J3Fo+E4QyvqZuhT35TAe+aeLdPRxGLL7NEhw+0S6PPTRvRr2+AnO9s1DbPVvhFL74OCs+t3oTu0dWhb0FFzi+MQrgvTfyCb5j5Mu8aulKvkg4obyhQYy9ERFqvv8Jsj3hNQa+WZFUPdcQHb77UhO+/OmTvunvaL71CBw+V8eqPD27JL3dghA+sCIWvZh4IL7Jj4q+ZZ83PlKQzz3IpCC9S7k2vphdiz3ncUI+bzVAvjyXH7z9aMg9jQkovp1/u72yh06+IXSHPFyVKr5AXqo9SjCfPpXXKL64wlA+eYMfPiKaar6fi2q73YmFvVYQiDzAdFu93t4PPMkExT2hFBM+hVEqvnUeKj1k9EI9lQ72vfjaZj4kZfc81XizO3x5Yz1Vda28iMoLPEtFZL7L660922aNPUO5Oz7rlno9TpsEPo9zJ76rAZu9yl+sPXiySL2U9za+ojAKPvCg3ry15VU+w14YPkrxVTy8MzG+sxNcPhpa/j2wyc89ZbCsPO6nLz0AcTW+flWRPuBLyL1mwjm+YUpQPYkxrr2GMYq9dhcfvk/3CL5TfTs9EgT5PUSXm71yMJG9LtsoPEuK9b1VsTa+yI/CPXhxWj7mQMg9/SXyvRc6OT6lFeM8QfA6vmRoML5/DPM9hsLQPSlJhL4/Jk473xwkPoGM5D08kY29aUh4OxEwdb3bukE+Jzomvp1SR71JLUO9PdXwPdZ0ML4c/NY9iwVNvoJDt73VRvW9Zo4evrLSij3r7R++sWwhvJk4M74iaom9vMzQvdFBDr0aMgk+LLHbPW3XDL6gC7k9DVlavgj4AT57jFC9n243PhVaxj2dpB6+tOHYPaIl4Lwn3rw8mCi5PUxfBr7kGai9bWToOlBdij0DR4m9X62BPpaSS77vpDA8854yvsVzID5aLTS+sdl9PM5fbz4M+oA8EBNhviuzBT58q4K9zUNwvaKF2L3ZeFe+RYC+vSWABT1Q3U48UEdBPW6VDD6Fs7M7NQR0vp/+ir4eYle+Gf07vqfqCT6pxK+8biqHvhyXqb37AiU+xCUgvjhYS75i+jq+oFl0vtG7pz16ZSI+fsN0vT4bT75e3iS8avEIPtkFhr2ODjq+NkMFvoEgGD7Tkfs9RUFuPtQCWL5uQw4+8zYXPQ1lUL4cwsO8XFMfviyp+Dx6KGU+RyfovSbS+b1pM8y9WSYrvi8DPb4W/0++4vPOPZcL8L2OKQw+LDiYvUXnWL2mNGU+AYacvsMB5j0Xgw4+7/SNPRA0J7185Sk+8fP0vOy0Cj6VGqk9xCbfvEAo/T2s4qe7BWUgu8D53z3KQUO+rQCnPTS6RL3lS2y+Cjq0vYaeT724y449K9/7PfVGKb50o9i7BusaPs1oNr4jEGU9wV+TPQlsAz7wK/M9NEKCPvczDL5YRZQ9vgIFPm2zBj5Wh2e+jRa2vcC4Gr6S/3G9fXpiPuIdQL6x4ZE8osZLviQB0T1C+wk+nisXvWEKfLwzjSe9ckkEvpkoir3UnhY+XEAmPmw2j731tEO+lxBkPrfOlT2nqKC8Hzl6vnxhzL0nNkC+uWhMPSMDgr7vmqO8J4bQPdOGYz3i0rs88Gm8vUOzXr4Xm6O8/vunPN0d5723Niu++JSrPTJrNT4UyEa+M5luPpuC9z1lU7w7CxMnPp0VdT2kRQq+1XbIPeTPHj4wHgA8pjUmPab7TT7YICm+cj6MvrGEqjzwxx88ueQivjck3bzsquC9ne6rPcdCBL76eBc+l1kyPumxH75Q5GO+Is3OPZmAIj7yCiA+mrzlPdteLj6b7ho+RuM/PgghiT3ccDQ9ckv5vFFJDb4SXLk88uMMvW/7VT2Rz0w+K5wZPUkxGL60xwI+iNZ1PXxCBT5kGSW+yMcJPqDxBj2rZu09xfS0veqxi72NYWU+bBXNPTVzcr2Mhde9giU8PpGkoD3/MmC+yWMUPgCZRrw0PMU89cIBPqFaAj6M/rS9vugQPX0sKb4oBIw+B9CBvkrd57zAsia+mrmOPWwiQT5tIrM9vcChPf9/Kr56EQq9HtRMvniLc7z2+kM8rTQ7Pes19byV2WA8sU5DPlMdFj7VD4q7fZFHPuho2T3AmMU87qFzvtzvVD0pWzE8AimQvQviRD6pPZA9y4cmPaOkIb7F3cu8Tb8iPq2BXb7zkfc9bDlbvbOFl72tTBu+J5bEvRMpgj3zr0q+biBKvrJnPz6pJBS+MLJ0vSLdQT3zxRk+X964PQg2Qz7MIEy9J9nIvWrF/b07l408FK5SvhI01bs5gWK9L080PhQF+zy+2gk+NbWuPMHLZL6bEVi9xejJPZnmEj3IAza9QrCQO9wkXb0UsQO+FpZCvlTY6L38/ow9UuajPWaOQT6g3Ds9yBktPiq/CD7nalU9Llo3vrsLcb1RC+Q911rlPamirD14krY9TC46PMUjRD5vc9S9ZoFPPhVkJT4ITSG+GDgvvgvBMz4xkoI9RqgrvlQmST4c7Tq+MfqRPT+ogryg4NK9d48VPQuXe7011Ag+gs2kvckuBj7pq5c93OIIvjHDEb5RuCM+K2e6vJ4DnD3FOKW890oqPvOA7zwpejs+YzPkvaAFbz7KDza+e8YSPs7uzD08zy671bqgvfupCb1H9Tm+V1WdvWolpj1DcBc+1kEwPVEI9j2MUXw+e3scvviNLL4WEZa9Sr4XPhoNWD7uCjE+sY5jPlr58rsMVci7InBLvkvE+r3NmR4+kOcsPkB+Tj2B+Fi9DRMqPTmBIz7qbTe+0ecePi1SRL4kdwE90Uy3PLfb/z3W43e9u24XPSmTdb7PYJO9XtcYvtXNkzqYSVs9YqS8PXGBujx7GCw+jzPyvWDaED6L/Iq8wlMePSqK/D29bnu9ZMMFvu5UZr5WZBa+3lfBPVcNMj7KZPc9PPFlPpeIDTzwViC+4HFGvgBfEb7Umvw9Cz4ovueGVT3L0wU9xZIkPpAwWD5zSp69pHqMPd/4BT6yaY89ALGivMUhTL7kp4u9RbL3vNpHFj1u0ZU+heq1vdeP7DxHzAi+x4MKvsSzkT3PRBU9TGwQPnONar4mkSK+bD/jPTVqDT3lrzU+1vIhPvcifr7S38G9+aUPvvSfjD0z4Ao+3fgNOw6mHL5Nl9G9m1kPviILVj6PES0+RjoRvnA/Kj5EfQE9YYTuPQQS+Tu9+yK+PfE5vhTgPL4fHxu8e+J2voQz773AQW0+WPTPvQ3CI75BIYa9YeqQPROrOT5wJyg+mmvuPdTn+rxv/q29FTxOPoMlGb7eOFi+u6CDvbNeXz7Ee0A+W3WKvkGpkT11CBC+q2KFPcwV1L3JYTc+23GKvd7Bcb3vhCO+KMO4vYatL77S6xm9U/RtPqUpBD5fgEC+8ZDCPWttNb4rZLE8JzhzvpuBxD1IeA4+MBWMvs7iuL3KBI092Ii8vd6UHL6W2XI9rscQPh3c5b3FvS++NL0tPh9uuD3TZgu+HA1pPsjbh74i3Kc9BUsfPi9N07xYjA49OGa8PYppcL3zhME9l9ckvuha3bt/OHI+B/mrPEhbJr7eexq8VDsZPgzmBD5LFuA8U0PaPXqcvzu0Ulu+12bbPWj/jLzndb08IkCIO/xGhD257VA8CabnO1sOC71PFDO+o42wPRNrnT2/IJS+aBfVPUov271+D9i6ZTGvPfP5oD0zFic+btVfvr1VeTyNLpE9da8ePl/wmr3dwSO+az9avOG9971hW4U96KWGPdr+kz0wCJg9jvBOvoirV77j6yE+cuUuvvdvBT4/qvA9G/wGvovjUT6dNti95Z7fvVC6dT1GeIe8Hm/tvJUWAD4NZuQ9QBexPOIyhryj0tI85AMyvv8ELD2K0Qu+zzIsvSHiZL2gtGs+YLQ4vaxkGj4n4hY9IZ+GvcqLAL5Vnfk9OkPjPSjDLj159Xa+72U/vsjlgj33eLI9cSwrvvAuzD3hVR49a4CBvvk3fj1li9Y9Wwu0vXDfiT0qkiY+ABwevcn59jzcFGq8YI6yPfrbdj52IA0+t1kxvuePJj0u8cG9G6AZPWbq9r3a72A9aAM4PGVEwbvf2la+h95IPvUzBT7Hqbe7zN6PvHO+AL7OE7M9JAIwvgbJOr1U1dO9crNPu4cxyD0Xxls9TLUbvYrbRr0nRDC+TUSiPZOOFT5bdQu+UGJ9PA0zrT3cLcc9ITEePlyCGz2wEuG9shqdvZcbETy42iG+GsFVPspmlr2BdkM8kVeavBxV7T3xkdq9wyMyvpqRkj1Y7hC+eRABvatwRL4aAzU+b7NNvuUDcz3sLP09wc83PrzZF74r/w6+tWoPvVEq97wSQL892V/JvXIgKr7IrN49S/tiPXpV6z2KTAq+4bxKvGL3173CMuy9q1WvPCxaKD5iTxi+WwqLuyNusLuqT/A9uY52Pj2xtzpEEUA+zd8IPsaarjxXSAO+2t4LPoNjNr5XHVi9LANBvgJFTb3JYim+/6tCvtUxWT3OJBK79u9OPikelb0qdF0+J0t0PCyVIz6AQ6s8GJB7vI5xsDxOC5S9ZJbUPPFszb05U+M9NLmKPP6WVT6fXVO+AAAAAAIAAAAAAAAAAAAAAFJYGD6aYb+8xdTgvQ7wBT5bOeK9I6c7PlsjAD7Fx2u9THYnvSFIBT5Wtje8iaQyvh73lr0KObm77xymOxfwOL3jfzO+9dcRPhGBkbzdxCW+krdgvL8kX72TMsg8eiYYvpN/lL0xkEC9jvHcPYj8AL3z+hi+XwdJvjXuPb2uh349ow04vdwZx7xdFSW+gr2nPbLJCL1yr1q+RmIhPlFsRb0pgc29B+pLPiTPDb7NNay9M9h/PrFuqb3G06E9yqGXvdx02L3DbLo91sQOvddP971iFfA9Gk43vv94Wj23nyW+DDV1PPi+gDxm3Ae+z6IkPj2Bh7ur7lg8BHh0PJYv1z139gS+YjKJvUpVvD2GKRw+itgOviSYJL6Vwe09Q3Navunlhz6xyf09SSQXvnrtYr1r5YM9nbmIvciQnr0PkGE98Vy8PRD9CT65Awy91zc8PQJstb36QMk9XwQjPn4kOj4GNki+HcORPtWgFb6JzZ8+J7/qPe5Y7rzMAJI9n8q9Pdm+IT2ZgA8+NeYRvov58D0AqN29X5yrvbTH5b3DSNa9AJvRvcaDFD6leyU9otNJvotH6L3xJuW8eWjIPbpALj53Yxu+J8IRvlHeF75V0Oi94HF4PafvdT0EJ30+doQ4vnNGRz0/t4Q9fSlcPmfI8r2xZzc8QSuAPeZ1x70FIxc+vjHTvYKHLb2DWoK6YnFDPYdHLr6HDe292OQ3Pla4Fr6HdBO85fSHPS8neL7Rhz+8I6UhPl7jPb5/2ys+/SUXvp8ktT3CzgG+hKA8PjXO5L2F8AC94TCcvT7WqL0NaXw+om4xvpqqxzzV3mw9BqY4vd0eJj7Aoqo9BbYnPj/EFz15eKW9B+hJPralGb6+gCE+6vwJu4MhID45bgS+P7RxPuC5Yz5rmhU+t/4yPg22FD7x/gO+Zf/VPcdHS774toe9PUtdPkVWGj38p/c8r/YIPjMJ/z3LynU9Am9pvTf1tb0r7929+ttOvqgVK74IAT4+1B58vq9jk70uHbU92nQBvovaRD4XwcA9Ln5gPQW6cD7HyXo98nAxvV+HKL7zQsq9ZzZDvkQUvD0luVW+06vcvVK3zjxoy9Q93W44vuYv2D0gUpc8+6uXvTwMjT3qJcI9jMMwvuGkYr0dWNm9dYAUvUDrkLwcGAQ9EWNOviAKGb0Jrwi+EdfwPYf7BT5BbTg+HvaGPk1/HD59BgS+AnYRvmy7ZD2vjzY9pfQMvk+DkL1kpbK5PUPKPKlscb5sWd89SuMAPpj6Cz4u91a+dgxEPoXZtL3IQHa8J+ImPTEYgT1jJrU9roM/vgdc6b13Aee9ngy8PHVoGr6tMDg+N1wwPdp55L2T4xg9ZJmAPPYdED2/9jw+4wQFvoluPL6KQnw9yj+yvQYmQj0BMfG8jdXEvazfcrvRbIK93/IFPMDdHj4oe+k8yAkXvr9hfj1cpKq9KZ6RvcFKUr4J+/y84u05vsr9OL7cF0o9zQFDPjKpKL7RgCS+RzaGvaEIg76b9nC+Puojvj7zMD4pdZA+hq5ZPf27pDxf91u9P20wvmBASz6digO+ZS0dPtsb9TwFIw69Nfedu7iU3L1Wqc88/9qPvRPLFb5lMJI+GzUTPgP6BbxtAYu9dUVzPGfSKr4hpqa8K31uvjYdHz5um0s+JjlHOwMnDj1/yxE+X9G5PdBPkT6vEmW99GKWPVnvVb6VUd+9f0jHvb/CUz48OJa9PYg9vbe+CT5jr1I9EXgsvJg5oDw+0Z28LNRBvZ83Cb7tReU8Lk04PSxMCr1EfRS+CL9hPkbhHz7PVSY+bKAfPrGDFT5+Iz69c+mbvcz0x73DSYE98Z/3PWEvL7318KM97rzRvKfPS71/esE9J2+pPT2HOz5D/2M+r0GoPJsF27wr8Bq+wTGbvdcUwr1RKYe8r1jdPS1fxT2fD9A9dFaDPtJBML76FAy+XQmUvRQ3Wj7D5f691md0vs7nVz7GLvs92bOivTLz6j2PjpY+Lk+fO9GPdz4/jZe9sJImvuWNDjz7fFE+C2U/PlvCi7wuzlw96yZnvsnyCr740gK9ZcdEvSvKx71jyJ09a0kfPSLVOr5AVEe+1BsKvfVPK77utjO+U+jBvdO95LxcYys+HN3xvWTT0b2fHiK+oYIDu2AV8b2oHRo+e0XVPcnkpT2dpgo+TbNPvmLVYb7fnUG+P3CRvbj3R7005bq929DfvTffr72Tpbg9d9FvPgOper7hJqw8snn+PSjUmr0NK8o8mxcnvtj+UT0MXR0+sDu5O3fMIj6b5HU+xKQdPryLJj4I6wc+57HZPbU0lz1mENU8orwePut52j1uBm++NY6JOwZ1Gz7YWAG9pKySvFOhiL74pTM+dxh7PlBOPT22lCe+lAa4PbggF76iZTS+08FQvLW3xjz6vZk9jp1NPalhmD0RSRM91KKRvfdsXz2EDwc+tTfuvSrug7z73CQ+daWlPVFUmr1dngC+a8aaPeFw6Twxiwc+4UgyPpqZlL71c6y91dZDPsvsxT20jOU7PylMvT/2GT4QPA6988gTvj/mBz4I0QG+Wv88vhdZeD4C6ZO96YEVvoHbIbyYwhs+kvFIvcieXr7w4bw9JRe/PLmGdb5bfmy9gqLrPHjSAr2/BIK+Xx1ovS3gQL5HHMA9QlcCPvIoI77nYT6+vL5BPu8I9r1Tth++G7eYvGkVTr4VOO89VkHjvYLfx72FNZq8uALJO4oxOD7q5Za9j+mYvcvj8r1u7m0+gFwnvm5ZNb52SzQ+4dE2vtHJEb4AiX8+cWNhvT5ikz36hpK9avgevmEWO775amS8lS4cvEk7Zr5yNwq+QM+lPKyaZz1yOSm9V4B1Pn82tj3qC+U9IsETPgmTgT7QYX+9XU0jPVfXkLy94569vpAlPq9Uir65mxK8XzJGPh8iOL5DOP09wI0bPgfMZD4PZSe+5WnPvdreLD7iJsc8QjZxvZOidD1A8kQ+0Im0PaqpuL1S1og8lZLMvQ7lAj56g/I7gVfMPbTX+b3KUgo+w0QHPieyjb16pja92wAZvrLy0Dx/Ko29lT/nveJUK73cfaE9zJNhvk6XJD6bmAW9FxMXPgOR0L0QS12+FfAJvnsYKr4nqxO+JxgDvGUtMD2aFA+9H1GVPAeTED5R/e893n9bvvRW5L0GEim+fIWrPXjrs704Qey9Y4hevnGjH7wWIoM+dsUuvZPbjD34PSO8rBCAPTTh1bz0koY8PdKDPSPaMb05S2S+E8+APfHRTzyt4y4+Af9EvmCW1b3/YYA9jhKIveP5dTyz+FG+7SnXvIgCHT5I1B+9OU8ePS9CITxGLDe9uNUKPtMUK77qvRE+XN1Fvu6bYzwyBii9oZLhPGhjNz67Wyw9OdxqvcSOMD3U/Ug+4OlxPihEVL5bFtm9O6IvvihCnD3rihO+b5I+vs44bL3XtFs+UP6WPaItmT023YI91rSVPWK1QLzSo1u+XKbetWSPbD3GfUI9wLACPpRzYL40lOU8mtELvlvGbj6hWB++o88dvYu2Ij6XaKO8L0/QvOBOWj2a7Yg+i9A6PoqkIT4T/vi8md0SPsTBBD6b1Zk99WCmvXBIPD48dzY8AXVFPhceBD5YCme9CHFhPj1I0j2PMOY9/YlRPoJ3IDyG8jE+cbDPvdQNiD2jgN+9DLxIPTz8IT6ousI9S9kVvrA5PD6eMFm+SGWHPRNvFD0axpg9xWq4vRKX3D1u8Gy+0CeUvZlbJD0vR1m+uwpLPrWeVr0GRF2+u5kKPns7pj3ZhXq8rvQ+PZI5Ez7M4Za9SFqaPYvCCL1n0wc+u5nKvetxoL0AlmS9s85APvcdKD5gXMe6hzr6PZ2/Er4XyhU+O4G6PffDrT0zXVI+ephYvBSF6L1nB3w8X27+O9peGL57MiS+fYNTPngHIj7K19m9H0gGvrs21ryNHcO7RTSnvYARUb7wYqY9yb5bPksn773oc3e+y8hcPjmkaL33NQg6BU8MPodOxr0HDHC9Q7NpPs70HD69Vi2+2aCpPXEzGT31o4A9+XqrvdWoqD27v7w8zX69PRtSgz7BNzE+DRnTPeaIS74SZRK+55CPvq1Sor1UZPm8QLrGvczGk709HAq+b2bqPNVXBD1pobU9Mlm5vYsJs73TIy2+hQpKvbL96rzmlo8+fGFSviXSYL0Ajyo+MvyMPM6GLT1Blgm+X0ApvozBDj2j0Ju9RDEePpfP1zoGFre9QXccvo8FWTy9J3Y7rTIXPkniLbzkG5s9cWjQPX/6Uz1AXFY91IaKvv3KmD1025g9f2gsPWMSvz0JTZ+9t8WFPjJU3b3E51K+mU3BvAyeUz7Rr8Y9F1xFvpwtMr75GQW9iFGXvYtcZD2bp5c9oda3vW7Ud74ysVE9ThDRPZn+CbsEPyA+v7GmO/MYtbygnpg9LOinvcCZ1b3PsyA8+kcJvvcwib2B4i4+S6w6vW66CL67+aY9dtMOuzJihDyeuHc+uKWYvPeWMT4RKRe+L/XZPWrlRL45F+G9ioNLPrLpRj4kWFK+xr5WPrtGqb3nLiQ+kb9gPnoMrz024qs9NpTpvfXsPr360fE9VnsmPiQnJLymOsw8pAXePeuxKj6idOS933UTvvsREr27HWO7HD4vPmxVUb6D2ny9er65PfV6BLy/Y7e8hr64Pa5iO74vvys+5Ci6PYRvlLyvxwA9HAylvQeBJj6PC4w+XIojPmSrgbzrH0w9DtrivZyyhL1bLII+cGekPRpnc77mhyc+oi8OPi7M7b0hzQ88aDm/PXCH3r2y61S7AagnvvcBPjzAdTs+m3hqPjzLEL5PpQG9w7i/vVHnlzyWFxc+fxj5PMOf+bw1s1a+p4CCvRgvLT5VEv491BVtPq0sdz1VT3w+rbSAvmTrWb6VT6S9eS1cvby4Tr5SEGe9TcjhvcxqT76M/Fa+grcjPXumIr6UgH09XtPHvNaBfj7CSyc9kMNfPf1rQr6Q2YI91fctvpq3bz1OlUQ9hu2VPZmhDb5OMzo8yRjNPRBuQb5BJZA9GKJePv36qz06IAy+jCgiPj4J0DzLS8i99qlSvsGxiD1fnly90R1IPfDrrL2vTPW9OK7RvUwjobyn6SA+31MxvrkiIr5tu9S8UEMJvo3yiL2D/zQ94ovbPc8uU77zuYq9I7exPUqGYbwAbqm9liHdPMANw72zCMq91BFGvjkkJr74adE9DwnDPFapGD4fycy8D80DPHkQqz0QycY90vEovBy18Tyds2O+f9kBPub8rb1t08g9dlLTvTXCIr4GXRy+dTkjPiQ2Bb6aTx8+vxtxvu5Q3725RE49a38RvkULBT6vL/O98JEKPhHbXz76sui7TeF0Pk4cDTywfzk+L2IivisVET5ENci8kCUtPVj5Bjw6LiY8vk4Tvl2x9b0Ef9S8HTs3vaXcNL4cDve9NiifvKINb70sFmU89dVavpzL6D3/Bkq9nMutPRVYST1O0WA8wM8vviub4T0LJv69onYHvktFHr6OkhE+jERYvA+KID7ejQ2+eEp9Pq6oAT5M2oW+Y5orvmpMjr1dx5s9illHPhBYgr3R5zM+h2NNPnlZBL4lyOM9IIPdPcJ2JT4UexC+ek1EPcWFgj62ygM9VJ6RPQLRf77yS0E+2kI8vk/W4b0N7UQ9aiVVPsDJhj0YHi6+7WrmPFsQYL0s2V0+VUEtPQ+w5z2AMfE9eyv3vCqV6L0ypGO+UPfNvYPs2b0owla+nciAvn4orj2JgkU+RB2RPYKAhL2ghiy+w5QoPQ4jAb1IjBk+wOtrvli9FbsqlAo+7A0wviQs2D1WF8y9YrwoPo7ig74puOU9HXMLPud5bLyy09M9ovxSPoe0hr3A5Ry+E88hvu/rV76Cqwy+uo7TPUt5Sz4Z6wk+ylbxvVpF2r39hT2+OkrQvYk7Jr72MCA+U38NPlQtOj2q5Ye9LJyCPnBqlDzvQdk9Xp5QvWq/q72jz849Sm0aPmjbXr5g4/m9CDY5vof6rbyPOgg+wQpmvuJt5z02VwC9+uPVPOEeBD6+QKs9rf9VPmqbeL7dT+O8m2nZPGmDAz5CS9494H02vZ4WPb413T4+c5VavfOMAT4hPm29qbKLvUfRorsCiW491WJQPholVz6fQ7c9yl0pvgbaub3pNhK+jgUWvmCw+71ohkW+oJTSPBTR8z3lM7O85asBPnT477zBVjm+Bouevn+Xi75Ywg4+t7TUPQPn1T3Ka5W+TnKOvFQ0Kr77lTU9WmKrvY95vr11RyA++wobvjWPDD48RgO+ehhdPcEBoz0ztBW+nNipvd3uN77J4J+9RMNjvQ7oLT7MzVQ+XzmqPKGpC76VIyO+RR5cPmtlI73BTBu9flUtvnHgLz7ra4s9H7/gvdPK2L2SjwI+rAGPPLruPr7wJCW+Z5b9vFForr0trdo9IBEDPkqj/b1mSC8+N5JdvjxhD75Dc7S8xe8avSOs771m8TY95fPZvXU+zT0dICm9JCanu61qED44jA0+S9sfPiGoiL7A1zY+DJFtvkxN0bxut509ruUYPS55UL7PksI9ICkoPhD46jsePrA9LL8BPnDt87ut+eg9pBgMPpUyhb5NY0m8j7UWvuZ+Dj4pFJE92OMHvr0PlT1qEgQ9pMDGPfg9W77RTLO9lvIwPd0DxT2WnVw95MN+vnWSdb3ElBE+H3YAPSSijT1CC9G9w9EgPgs1j71KYEY+sl66vTkX+L1Ul4u9BUZMPvbKYr2F+bO9qs1GPXpJX75w2JQ9u6tzvvIzU7214lO+LycrvZmo+z0lihA+OBTxPU2yMb2UUPG9C5iuPOswmD1CoV87+uYLvT1vXr7ItTG9KqEaPorFRL7eE02+oAJbPlu9AL1E+B4+56ZKvtrAHb4HbCO+HFBgvvNkVj7Ip009nMWGvat5g75cNjk+80REviBCQ7497Ym9hrBSvWbII776gaI9GpA/vvzMDj4UMNA9Z346PvNLCb6fjcE9z0qMvlAnTT4lvBg++rsAvRTS8D3jVDg+oE5cvbYueT3o1qu9h5mivcdRPT7X49u86ccZPr9yhj25zqm8Ky/ZvYzAPD5Mn06+upzMvfIkOT5zTY29+fyPvGgxSb6PW++90gIhPpjcFr5KwE0+9MDqvYvfWb1VeNs9qosDPmUrV75QBU0+ewOYvUdyP77AaZi9zUNFvckV6j1Jkzk+trgbPl7jiT7ihIM8BzBOvTl/m7xE6+O9MfboPW/MCT7kRxm9WpgMvZynMr158BQ+fzGZvZiVzDujZUM9EWFMvpEhsT3KZS6+GgqEPPt7ST2lITM+9/sSPnnHgb204yY+R/dXvsZ7xz0+fym9AsfTvQsCyL3gq5O+tP8pPvOudz1SoN693YPnPFhRdLzIHdM9hp0jvHELoz30Z9095ADHPGq0Dr32HaK+aurFvYxXjL1IXDu+cx7QvfmXNb5CZKi8zcAgPkmjhL7wXwQ+/VIBvhrqgr6orwq+ICchvkpiL76Rs06+O/b/PTAqJ714zhS+/dW4PbL4LD7AWKe9YMiZvT10EL6ZgDK+3FdpvmNLnz1c3pw6K+YYvjuPzL1ysBI+tGtAvqTfgb2EZlk+Eo2gvZDK1Lxhad09K+HkvDbWFL4KCVa+fURHvpqb+b0Pn8g9wZdOvmP9rbyfvUa9pU8oPp7hGL6Y6qY9rHAdPkejPr6ktty8VzN/PBOz5z1E5e88GSBlPnI0372nc609bC0iPreOAb6wROy9W0yyvf4+DT4YaiU+lIi9Pb9xB74lxgq9Muk2PAwwFj57WlC9qmAYPmTuHz4r7+O8cVUdvkvWKL7CXv292L7yvS3o4b00jCu+YdruPQDuTb4R/DQ9xQjdPRZylTzoV7o94wVHvosTPj71FbY9iuw+vTmRZj7zRKY9BYwtvjoieL5DfUo9+U8MvnJJyj31BqK9IWfEvWzfHT6I/Y4+mvlHvvMDkryY8Wu+YkcZPbBvDT68bg2+U13gvH9A9b2+2fK9RzmDPab7HbpjkhG+uetuvd6eejzTrhw+YBFxvt9En714+li8Z8XJvZgdBT5/bSc+gtR2vojkBz4mixk+jld3PKl5KL25bkO7ku6BvaD/yz0jEKS9Mle6vS7K8700jBM+Ue/XPUsV+b0qixe+YzJpvjpFMT7PiQE+gDcfPrdwRj1TplC+ws3dPVQwiDwewzG+1N9hvEX5kj0L9wi9jN87PrBgrbwoVTk+/2m9u+o3kr1GhYc+7pCnO57ufb1GzUc+69nQPUmjfz5VUk49HyukPM2R+z1WGZc+q1/bvbxYDL7VDgK+F+OnPSaUiT7ZrRC+zxoRvpD1Gz487GA+AJEHvhLRQTzf9hq9R2ajvYzykryX6bg9P1L6PADTML7IcCY8xTsXPmEtrr0Ist+9rHVjvWqVe76409I9yhTRPbfAUb4qs/Q8iF81vqyHC757A3w+Akjku0JtNTtjADG+m/4nvtW6pjwf1WW9Oe3SPKsp8T1PHEy+b/y3vVO4K74vY6S9rM8MPst82Ly9VEa+xSlsvp3PWb5nq689bitVvRviKz6TX4s+NYW6PfhgWT5iz/29pH8svByiqr1sxl8+Y3H3vWcgMz5/Okm+xdydvcw8D77BVl6+J65MPu6WSD4sUh0+69gTvuJGur1mL3i9EcCyPc7fGr7YwDQ3L6lyvT0yDr621t69Ogs8PviBdLw5eyS+I7KpvsngxT09vWU9sfU/PjsBFb6EoKs9iyeHvkzIFr7OLyw9qeBNPRxBQL4ze9Q9hFzHvW1Bvb2iUjS+3nEyvYQrW7zEoBs9oupZvjxM2btvFr69uEr/vUfifz6VxAA94zmmvetdA74SljI+28QcvEmYHT2XfXO+lv4pviA0oj3WuDY8dNXxPaWZGL4DTaA9mxMmvowYrr1d+YY92A6MPmj1wT009B6+qxgxPlMeYzsIiCg9HRUVPlLPcroWwnc+OIYLvntaDT7ULAC+LUGzvdCnlr1wDkc9MgAPPsKmOL7xcys+8KNWvdIqh7tyA2M+YFiKvR8sv7yE4n2+F+4evmWvFL1l9pC8tVfePfsjxby7WYU+tTIKvv8eJ764KSW+JCHKvNVIJ75EILs9vTYzPoNydD7gR1m+9ORFvET++b13Ixy9NzdQPdWxoz3NrS8+11a8PaQLy71csEI+K/ptPnXfCLxW1Du+ABONvfMgdL522DQ+uiWjPPHbUz5J7FC+KK3DvfzVi72HBOu9nDElPv+kUT79nz8+VrHAPY9xBL3AKIq9NafaPHj8BD4t3cG8eCZYPtYsoL0d78q95/CPvVkg6L3DON+9o8e0vf4oF778jni9ibPzvdDTWz4M/xI+K08UPgdcPj4IkB2+UvrYvUqiTj3xiAs+WqxvPgHEfr2jCka92UT/PfRSNj4SgFA9ljrBvO0H4T2HAq89ad3oPMOvWL4VKvK87Q0GPk1ZoD0ZivS8D55FPfDKsD2sp4g7O+D+vUK+TD7FCRK+zi+KPaFAWb2KUwC8J/44PmzXxr14Ndg9iFJXPZwSqT3j3HU+OLXlPbxCFT7JVhs9a0UIPppxaL7ekX6+RXY/vRsfB7x7zBO+S50RvtrLAz60PkK+F5ExvuBClT33okm+WNDLPQNS2rxqHiG+dqPmu1vcqT1OdmK9CAatPRi/Q77I+wm9GerdvbYClD3/C4o836qVu4wdS752dgW+mReiPeukU72/yhG+GGt5PhskrLtd1QK+Y84cvU1DKT5Hw1K8dbm9vRIzFT49S9Y9NMkZvVI9DD2rvlg9dVS1PfvbET7vBws+ZE9TPvVnOz4C+Nk94Mm/vVDyEb6ovpe9lwwGPhi7QrxLozs+tivOvcy/fb3lxDY9hBQTPpXfoL3hVae91TSWPXYNnr2YgNm9kRwoPC9ICb7FjwU+twdJvn4mYbvIlU8+gb/XvbEhw7zAbzy+hLczPrgD6TmIhVs+hdVCPgwjGT4VhpS6h75nPmltBb6aAx2+nWCAPelJtz05T9s9r4khPj5kzT3qy9U9USnbvSxIzDwdtMA9O8o1vsLGhT6cMvY9UWylvQnvbb7hYj8+2If6vCpD2bxZbVI+Jolovtjn8z0eGRa+wVi3vW5/Ir478/O8VfwhPpnIVL6VMTW+eBWUvDMU6z3Y7y48EpufPajM2z2nxao9bO+LPYkJ87yoBlu+wiUAvl8ikr3hvCa9riqrvaPb4rwQNqm8THgwvQgLNz7VbX08ce86vm5qUz57g528W8AwvgjnLD5GDuA9lNdEPvnWvT1aN6a8H9ClvVw1A7ulpni9COHpvGTbkD0m1Q2+sXqFPrz4T75QUcu6N3wlPdVavj00XTu+/AOnPjfAoL3gfHy9W6g3PskBZb4mMiU+uMylvXPclr0iGGm+unwjPsMjHb7WECq9uHSTPhFbqDxge14+AGGoPKTihj4z7pU9RUhBvuLDZb5+ZUa9ZBH+PVgHMz5A97+9n+EZvkz72T1L7/e9bMOAPiKFU74YOja+zn+tPcO0ur3gpum9sSMcvqrvLj6taAA+YqGDvC0347xS4jy9IQGevYbK0Tzdtke+KYhZvmx1Wr5ygBE+jUWnPYDEZr046MM9Hl1UvfibQzyhpIA+gUK0vKGPqj0mvpG7ZvGJPk5PA75uZhQ+e+cjvtkqcLz7D6M971Q8PvKNmr2CXe49akV6vVjhsD2g7B8+kcUyPf3Xdb4IL609H4MGPhiRDL4wURq+AKaQPV+iCD6fQbC9TtMmPgbWpb3Y+Ue9SRMVPrCuRj6HH6k9CeB2vjn8Aj2NztW8uQihPfSTCr6UJx2+6gf8PXqAiD4VTTw+6qjtvWOcEz2/27+90EJDPj4VMzxwJS0+3m8lPSKVBT39LEE+e1E9vo9ndj1n4WE+pfw/vVpNF77MkYw8sTZmvRKhZj1E+zC8J6k8vhlyij0mS1o+o+IHPppXPb5jzn69kNvxvWGlWz0n4fk9G+FEvkDUOr7J9lW9j3gXvRHhCDw+Lvm9dZWXvRS0xb0ycYE88TOWPSQDur3PLoi9f0FIvXdbej4RsUW+x8emOzg9kj32NpE9R9hBPvTjjT7rezY9BuOkPQMgSj7WY6I8krL/vc5UdT2rnwo+CNNsPfFVwj3skyC+UZoRvXQvjD0dZyI+hG7zPZbIUL3Rf9K988KCvs40Mz0ot/Q71oq0PcypqT3IhZ49HOkZvgjJcD5EvcU9CzdxvAhGu70MeUc+GYtNvPRj4L3x3we+0DsYvlRH4zw71u89F3c7vnudpzx3Oh0+guQnvg9T/7168wc+VdIvPjPpUz28Z629TMnvPakeED6iZFE+UghYvvrhNT42/U8+P3CYvlEwbj35uqs9E6+NPScYC7yLRKg9DZolPs5vNj5M7Mg90qr3PdaKsL1xjsK9XbSsvWJu+L3g6ZS9LQjqvT4VhL4nrSm9ggMJvsbUCD7+3W4+NJWROy1/BL2+xyU+1J/DvCPe2z36FBQ+PdOhvUtMOj3FoyI+RbDJPdvWCL4Brzq8EgctPljSLT6NxBM+e2tmvUvRHL3mZQC+bNbuPfBBCT7RSAc+J2ptu1/iRr64wUO+9+QuPiB5Xr6nFsS9FLdYPVMPZjwPIoI9cNNiPgGwqL1IAue9ioA5uhVgUT3yu+090a4UPur/IT4Wa948twd2vtqtBL4rJKM9SvyXvTpHMjooWcy9nwU3PixpIT4/9VQ937IHPqS/tjxoQRU+Wvi5PWfrA71kFae8wBA4veEtOb4iquW95ktIvc6pM73NbY+9TGgSPgjE8T3pmNG8oSowvvQNhTxTJeW9MR8SPihxiD3YqJk92N66vP6JRj4dZHI9HcW+PScqaD56mMS9mcGrvNDGGL7As0g9z08VPO+ViL3hEik9+92Iveg7hT4m15S93mcVvqeAGL6+Dmi8TCZfvmGyhjsOLXs9S3Ehvlc2Gj7St2s+gqpdPM4LP74wcxQ+UmMWvn1sCD6t7Rg+I6qcPU39KD7/vZm9HEzsPTTAU7ymZxo89l/hvaJnHz7/W3u9i0drveS+w7sjfOM97xvNPely970xEr896FKDPkaD8r1W37A9VqV6vr3XOD1gGUy+taCOveh0XT6X1ik7piIMvRliQz1Z3ew9QpouPe4sO75MqNg99FJHPWTmLz4vig69tE4tvhEHTTst4PK7iCBtvnsqsLyqOca513UavrOzAr5UOSg+1AcgvhBO3T07Wba9D1ErvgSHcz4cqBW9mp3JPSGksb2Dmy2+/TqFPWSriz1WcQw+gLafvC9fWD4D+MI8aYE/vs2ciz2PZfS9HoMYvml8AL3NGDQ+8TcnPplwQr6ZHbq9rq62Pdd9lryasIs95jsnPvKgkj2SF4Q9mPKSPVOoh73oMB0+f1T6vfxH1D3W9IS9VP8XPdYxSz5UZXo8oKb9vUfErz1wg/m92AOQPU6JoTxI+Vm+LowKvr/5Az5i6Ue+FBKcvAjjbD51MhM+jOJDvhNj6L2kNJY9IArbPImYvT2QSiI9i0kNPtupRj0Op/68xKi1vRUkMD63SgU+8hkovg45GL238Ku88R8Gvrrciz46uKS9PGF1PqKA+L2PV6m9wNxOvF6XZL3NtiY+YFXdvdmUQj7qAbM80u7gPRuhzz3nE0A+BMbXvE+ngD6bkTq+/N0RPskivjqeTSM+eqdHvpBCoj2tkiC+URErvpCY1D1CcdQ9ib2Lva5Ywz0r9D68SNkhvfugBr7IxHO9u3IevsuJwb1Pk5C9JLzuvWgncL7Oveq8Wbq/u4KTOb52xCW+w14BPQuUt70JuKK9aiQxvqG/B75tUwW+tDYNvqwCoj0JRA8+Qr9XvkkvlL7XiiW9YLZ3vKNz7L2r1YU85BuJvWSXv7x+F5E8MlAwPc77Kb7DuCI9SctZvrfXTr5w2ZO9njWPPWZdIb5H3gy+UCysvRASt70T+uc9Htn+vU3fh71AYD2+kRpBvvvr+j2fNqs9LWc5vnc6Cb05Unm+3uJQPmh4Ar4IoYE9kgW2vW2x+721CY881zTXPfU7pj0IRYQ+RJuSPXFPSL771aw9qzcGvp6+Wb7Iqa48CMERvl/qij3/MrY98R1NPXpu7T3IBMy9FwTovdOSJj4IVDC+tkJwPYP5Lb5Zfxc+gisKPoifDD0unc69t1nBO9u6Br4sGCc+0RsSPurB2T3AAzA+IsKgvTcxID6r4PQ8jUIgPhIiPT6Ke6Q846qDvRL1Lr5cVg4+0IBDu2+8aT7dv3u85C6vPWQKBT4hBZu8eSUMPr3fnzwlUb87VlDHPAePWD2lPwE91E2NvVwFhD0ZXA4+yWsLPsNo1j2v2vc8rscePhF+Dj4MNCe9BK+Zve/kDj6+Wjg+a1EyPl6eg70KIRq+k01SPtVlyz1QY10+XvkQPSmRfry680s9H5pYvk0r7b3bsim+gP4TO/L9yjuWyw8+vrOzPcZzqb3W7NQ9MWInvfIIgr4YMGK+F15CvlJrOr7UZDW+6Rt1vr9UFj7UKjM+6DH5vdm3Ib5MHp88rUKTPpcz67xg/CC9RUDKvc8qTT35pc49Y7uIPgGoJT4zb5e85TEmPs3xib5drQ8+3E3qvdJWlrvZZNk91Z6pPOP6Or3A0Dy+3K4HvWzUSj6ukZa+7uBdvui4tD0A4NY9DGFgPoKDfj3fbxK+92dEvvEIlT3wUp491cPMvTu4Mj4cYyK+xEVmvlBeoz0gDeO8241EvhOcVL2l9AE+JFR5Pspxdj2Bvm8+xXlkPu5/X73kV34+bxBfPUPEp71i8dG9JFezvAofirwTvQe9dUXaPXCGxT3Xlk6+gGLxvZXoljuXp7687//SvQBewr381/09ZsGNvQWVtDuxDss9R3vBPSKWCL3dqgK9HEJPvX4LLj7mLBI+9IMkPkZeZDx/+AW+0+pnvptzNb5KjLU9EbRAPuHfDb5qzX69yb0JPq74krzdzeE9OGHxvfreJT6khlg+pwaaPTpEaj6efEY+CbeYvbNaKb7Yij2+YgE5vulqLj5d7EO9aKoFvgeDLz6USvc9B7fYPUxoO74wgjg+9fkbvgfsH766cKW9OT0JPiBaNz42clm+V5xRvgZ9xLvJfqE9hPANviSgir4RWR+9SFmMvO+uiTzjChC+WvhCPmZHhT08giS+PFPfPfUeoD3YJ3K+y8jLvZPgNT6baCg+PxsSPq9Im73ERpe+0u7UvevJHj3h2Ba+9yHAvHlIQb5ciCK+4IRCvTOt570hOGU+lgFLOj0vib2AnOu8M0qSvXJOaz2Nbgq+UUzIvcmdID2QK0m8fXTOPZr0Ij2GFNY9HCUfPXeTZz7WfOY9q6acPSb3w716yze+5jDoO3ycwr2f/4w9gpUZvvmeAL74ZEU94uyxPSFnGL1KvhM+TpqkPQ9hizz+EXq9wUlCPtCj/b3lVSC7lmZ/Pcx8Gj5kwC8+PPTEPbeT9jyTIs+9goI9vUf26TzlCRk+1ctjvTZvLz5ziJk9ji2AvPTTcj1394i9XSfNPbSkrL1U3iO+yJpPvt8uGr7Nxje+EobyPHhaM77P0zA+oGBDvn6xN74BkmK+0J5Gvo9hvL2ZB6k9v647PptMAryS8Qs+rKlGvoHKHb5ulbW8JyHOvRLHpz2PgxE9u/H6PbTsbj4u8ds7GfvDPSFxgbpByCO+iRAOvhDi+b2nYSO+FKurvKo+n70nvwY+KgfsPdcMSz04eRa+pUbYPEfFPL76yUQ+unCxvIO/bT6QFg8+/yWtPU2EpT3l6Bm9+7oUvgBVbD106II+97WlvHAopz3DIKe7jJR/PiUzqr0vXRG8JH/EvSccRj6Pqj49lvAYPSL6Cb2lDYk+OfZEPin1tryZLje+BAa1O00dmD6tUlw97XfZvMrkGT4vRX6+37IEPgaIh77iMsE93L4jPjlxrD3sT2w+LZVPPi1pSr5/aZK9olOcvUwXprvkBIM9l2Fivjo7nL1VvLK93EzCvcckXb7Vmj28L58xPjIzxrw0k4o7nP8KvohKPj6JzIQ90CHouqM9N76dGi++tjFFvk5VLz5SBmg9bfevPYIsRz6ZCbo9HpQxvefAdb1NYoM+PwgbvoW91r3MT/O9H2IdPv2WWb71hwC+MVDOPclKTz5b1bo9J6pHPYjtPL7hH9k9hoo6PoMxtr24ttu9gO2evPs/cT7UoQY+wE08vcw9Nb5Rsi692YLzPbrGET49BAG+QXSlPTSuW74105k9Z/slPuUc6b1Jnxo+wxl8vrT+bz6GzWC+/evUO5FMFL4oSH+9w2FsvqgEiLzpujA+yAftvLma8D1KH32+UUC7O4o+Lj1mFyA+y0rGPeah9byA7Sw+TEzNvYivlbqUOBw+eCcdvtm5Bj7k7Wk8LBdYPt9enzx+zYg883stPi1tFj06aRc75bxXPRZbc712YQA+Mop7POvE5z0oovi9sXtFPi6nar38/F6+q/S9PJpjTb5sQpY92tJvvIbUXz1dbIK9OCGfvMtnU74HSlI+nGBYPgw4GD0ygYk9VewJPrcn7TzLlMM854Q2vmnPSr0lpcG9evEsvlKdMT7dFSo+brXHPdXV+b1sXzu+PryGPa2NYz7V1RM+FhO2PQNoED48HNY8CvALPce/VD0nWIW7GEB3Pq3rSz77EEC8/f5GPboruL1Kw4g947YFPvbljDwJIru9Q/AmvWU3p71p4oA9b1r0vTDI+b2cvHw9jNr6PWlOW718cJY98nqIPUM32j07pkM+9cX/vTCEID4U1XA8NVtZvt7nWL2hB8i9r/bzPSyaaz6QZTO9UtCWPTzUXT0X7Nu9bEm9unPRnD3FHhK9fCY/PjRnGb3pHhu+XT+KvSARbb6xJxU+c/U9voy1x72lg7i9KnX6PFJeVj6VfCG+uElyPurgSb7guVM9+h4bPmaYqr3UaiI8nGHVPTtSDj6Q2f29WddvvcHehr0pJxa+k09sPjVlEb4CNPi9IhnPvD2INb0h9Te+jtZ5vjBfWz1zyR0+yCbSu39tDL7rxIw+EgdIvtF5Yr7+oU2+/KwnPY/vR7wn5CI+2yNSvhUS8zxhbC++RZlUvVwiLr7Zu4S9blfqvRCkhr0f+B2+elitPVvBfT3zjPI9C4YUPaa8m70bmag98cgqvgoMbTxOWQ0+wgpUPpknY7n2C6s9PegYPiRwfb1PkQg+QQTKvZuvKL4x+BC+YeXdvVI4LT38oBS9HBfvuguTuT3ocIA8XvmbPTmAsD0c14A+sNbfvXb8/T06CSk+iZbIvcJn1r3+v7w9QmRWPVxGCT4hAq+9uEdBPmydOb4Ju/Y9lbY9PodujT0XGCA+6vySPWmL972eRn++iQ7BPQg6ZL6oURy+1LspPrvW1TxfPRq+4fjcPKCb972hKw0+J9GoPfgHIr4FIEU+09NdPi5KDz6kdzu+7c5hvYcrxTzjwyQ+yb/Hu5Razrzvz2k94Fjvuq5nCz53J/u9YC1xvrdVDrr+a4c8cXfYPTJXer0LlB0+z9MGvVJ8ab6XOvC9hIZNvNtZ5T15K4C+HydkvbPeDrywh06+tahUvrP+67wM6T48ZKi6vBt5xr2yvCW+c3z1PSJBpTxB7HG9qjAzvbn3Hz7atgs9eCSTPV0uZr1iRTi+eGQdPqwTDj4SH0S+jxETPc7LA717elM+G71EPvr5yb2zoVo+sBwPPnQnvT3s/QA9OZgJvlp2CD4RoV29gGwivsCiHT4s4S2+kZJLPqvIjD1uBAE+rWLOveg5mj3WMHQ+h2kjvbP8rr2kAm+8oexSPmO7i7xKvSC9d6zMvFmc8b24Mzo+oHgSPqa5Jr6icju+ghsUvgu1Eb3h0oA9pC6bvbHqVD1uRR0+Z3X/PFpKmjupJ04+BfDSPTC9jj1eLJI+f04ZvW5BYT5iBSW+uf/CPdeuwTwk4dc930+tvcdd+T00RSA9mKvAPGrsezwVFB09IYsqPvginD3hIdY9sihFvSICPzrCZbM9wdNIvgJHwDtYqBi+OpwDvtHDxT1wyIk9+0a1vET7Dj6ISYS96DRqvmJEUTzGcXS+FROGvTtl3r3TuUU9uM8pPb+tq7qDQwg9ABnSvaAjOj4d4yu+e9Yrvpp71LxqJxe+UXjwvU1bkj08a1e8aOyWPHlksTyePYg8HeT6vY2+HL0iw9K9F+zmvYiDG7wrQQc+9BI4vSbAor2y/qE9ZJAIvS5MML0rNa09arUVPiCqJr6pbTg+6psNPTp+L7684zI9KcYRvRgDBL7QMfW9+NFFPqBAgj0vpQK+n96sPVC7Ib2M+De9WW5CvC6l073fIzm+zuwxPjIwXr2XeiC+qu+bvOoEKr4UFpc8Ww8pvT1x2L3IyfM9qDvxPATpGL14zRE814UmPRfYEL2vgSC+tupKvh5qSb1xy0q94193Pfhh3LsXHcQ9xRcsPlRhRT4uZ2s+4BaWPRLJvr3evrc7xd/JPO6P8jwhDGI+RT5bu35UXb6LUwM9klTyPAPbTL3En+K9a3ELvS/3hj0ZdV6+iATpPYZ1R70MRCK+4eDXPTdLmT09wPc95l2EvgJL2r1uymM9eSEJPgZRgz14d0U+ZnTPPRRUVr3dRKq8id62PNcsDD4QLtc97wSbvaTI8r154Kg9ROTgvGvV3T3+Tos4dCPTvTUwN70WQhu+EPFgPnHC2z3krWy+IME0vubhV77q+wS9Zfqvu231JL4Vb+i9+V17ve53Ir5XdWI8LI6bPfCyKL7hpAO+ymsjvutQ1D3wU06+VyuDPZhFAj5JdVo8eO57PdBdPD5T0VY+PoUnvnjCMT6sQz0+/LqmPQ9BNL2h3SW+yoEIPXhCHL5uNmA7PG7Ku+64gr0CjO29H4WFPXEE1b1uzVe9ywbtvHlTmr1Asl8+oOoovqJCFD3vCkK+nHBDPjXZdz2aVoy+oZvBvPpcUT4b2N+9K1WdvFsPQj4OgLS78LyavYOUPL5JjmC+1ltlvpXJzr3c+kE+lN9fvQ8sgb13XGQ+E//JPK9TPjtZlPO9fI0APhxSqr2DRFw8j/sKvlWao70DbjY+160cvkskLz7Op7e9zeN5PZcio71J+9E94bYBPU8HBT2d2T0+6d5pPu9dYDtMp04+My56vW61rzvELgk+8/yKvWnMND4vPm6+/F02PrJICL5a0CQ+vUa7PX6qKb7HuWG+n/DQvXngmT4iL0G+WYERPnc90j2QviG9VWx0ve1pZD42MYa9q0FBPjM4Qz04gaG9j8gwvGpyI770lue9G9pXPix5Mb45LDO+vaKCPaHHIr4jpIW+gtdxPRch57yUGMo8Z9grvt/2Vz4awge+gxquPbfaFr6q3NY9BIBYvF8LCL5qr8M9O5ZTPkWTLb3kvKg9NahWPm28zb2k0Ba9e1gUvhRyjLw4gzm+cZgZvWbMKT6LRwW+TjQ+vkuq1z1RzaA9V6kXPeOTAj6xWX2+A440vpHgAL5Krje+qC/bPY51L77jjdS90cRiPcoTWLwzKD89e+/sve4PWD5++eo9MSVLPWyMVz1/Efc8gYw0PmGxFD1yWlw+fQaCPEeIMj6EuVu+VTl0PlgAIj74m4Q8GfanPQvVJL7p4gE+8DArvvVEKL3B/HQ+6PHsPaeIBD5JswC7+sugPc7MET5oKRG9I56/vdnJvT2somu+wrYqvmN9s7sj39y8BJjuPT90hD0JnhK+IWPOvZlJqz0AZnu9mbDvPWZSDT5jVee93OksvnPLPz4jjsY91YgfvnYVOr7hgEO+o6+6veKO9b3GOw+9/LFQvb0YdL112T++FOWfPSxFCD4b7Qy+XQDhvIoedL5/6Ci+ucxrPWulUr0yGgI9GVbTPbIxNb44SCI+bdNLPirLgr0n+JQ90oBpvtWhJj3Cxbi8nvecvWw5mDzUvAi+2PUivmNzoD0wzME8UJYbvvscsrzzp4A93ptBvHZ5FT5JNSq98NIHvuM2U74Z70C+TV4EPMI5g75vrku9cKTUPfjGTD3yY4m+w8lhvtNRlD2dP3q9xBjTPYkOG72lkJW8y5C1PEP5az67ABA+KuxbOZseM73krdg6OSTDvfsihD6zhA4+fJYRPoSOSr5QylY+BOv0OzDiX76m4kA+USkePisrB7yPakc+uJ8yPbGlqL0Ypp07EGbmvYJUAr5ZJEO++RqOPgz2hL1tbjQ+1xUPvslF4L36JZC9PY4Evp0nIz7E52+9VN7ru4r1F76agYs7hOg5PqZc4j0cN1O9QmAVPotrcr5zIMA9uNcNPsOONL7Mgzm9QwulvSwilbuRckI9hlqDvewiQj4eBaI9VViBPp+3pT2njJG9FnMQPe6c9z3htoc++JCcvYkGKD5eOj++HHsrPjtm3r03Mba9UVO+vTccU76bEoO+1UgaPXLiv7vHaTa+dLW6PdNsRjwT/ie+4MUkPhpdGr5pVi+8qSi+vV6TOT7S3R4+tZhjvptjYL4DanS+vgJ6PQ2M2r3zviO7fTRrPUBuKr4SY3E9CqTOvYlmPD78f8K9jIdfPi1rybxGuCO+jWyNvSIoRL71f5k9iuxOvT/w5z3SFu28j88pPkEgDj7KT+49KTMBvgz7iT0YuhK9ZRGTvG5ft7sCuES79GxQPbDoAz6I/Gm+ellFuv1bDz6uDGY+e2MrPdw3WL2PVwG9+V2BPe+v/b2Jvig+o19Hvk+mGz0Oq4W9uX77PHgJxL32f0k8F5gOPuFsXTpupiQ+uw4lvkqAJD5pW5w9AorePPOgSbxfBak9dwE1PvqTaL35fiO+4qNAPfSMDj5DuEe++9l/viuGDb0uRVs+W9wdPhLnOz7G/lK9GLBDvbGyqry57sa96BUkvhRemz1+np+8asp9vtRbjT7ahUU+V8h0uryOXD0YjwY+kFhOPoysEj09QIa9HJB8PhXpTL6f2BO+IAwivkXeLz5YhQ8+WhYpvkc8Ij7KEBa8cdJnPu9fkz6MPRu+3PDwPan3Wb6cPJc9w63Bu2sRj74olBI946fhvDIPIz6nDjm+88kTPYO2JD6fUDQ+7ZbLvaO4/70HOBw+uHxEPj3jG75T6FS+osrQPZga4T3k2B+7YEH+vcT4Zb3+muQ97gVwvWsusjoVFCS9Mw3Avcd/Y77dNgi99pzzuwkirb10wlU+Li0OPng8v70prxS+lfLuPAIrBj1ITi0+AVEzvnuhlr1GtiC+QLT2PbM2Cr6aw6S98Ms/vu2trz3Jr+a9JStMPu3W2b20UhC+NSAFvq2Dg72B8Ls8TCDUPQAKST6eIA++b7jevXhTUb4HN9g9wZG4vO5yS779nha+Kwt5vlDJpj17kqQ9DwXMvPB8Qj6U45Y88m89PWmjTz28+Ie9rmM5PVPZOD7yWwe+SUiAvg9DVb4qNow9wA/qvTWSAb66rA++6PduvkwcVD5fflW+8B7PPbjGMr09Uhm97j3CPSUaxT2PyVs+rdo8vpYi2zxVMrm9Nlk3PsS7e77PrXO++3nIPUnVHb4u5Lc6CK+APQ80Qb4VrMQ9VhhGPZPC2r1pyVO9s5ftPUTcXb0utYM9FModvppGKD2Ty0i+XA4pPUEyhj3SHaI9DdQtvp/mvz3MnR6+w9FIvjphFz5AVOY9aHmuPXMf0jwTbMa8jNtZvZ+wqryarsg9ICZvPJWyBb6q+cI9tUaHvS+88LzLkXc954imPe0U8j21pxe93dYOviEULz6lnVg9oeu1vVkrd70UM0O+sH8WPuZmCD4QG4A9lmMkPuTZAj6nnsO9bQ3WvbEQa72GEj6+8vqAPiC5ij2Lj3W+ARpiPhAE8b1wA4Q9ASrWPLw9p71nHO29HMWVPe0Zyj2nRQy+7CXaPYRnEb4Z0Vi+Qjp0Pi3d8b1mA8I9wJQuPfqQZz49ayi+uLEePqbxMr5KGbs95IcxvY7ChD5lMFa9nvIPvj6znbyz7km+VtwRvmz++b0DX0U8CeHIvVBibT7+Te+9tEexPL+ZzL0hM4I9GrD2PVVeh757qY28TmetveoFkL0yRQa+UtCAvmfOYT5CFB0+3+R9vTIvIb4UjBY+4lAePrFyxL08d8u6eCpfvqSTOD7z5iO+mu5ePv62CDxI84G9rv8VPkgfob2dL5E7VjYmvrZpJb5ilJw9aYsZPottkb1wife9QGYkPtW4Gj7WeaQ8sxg2vmNtET5NV0G+wodnvoZIij1mBwM+ILnBvFVVgz0etIk9ci0cPjzsNT62Hs08LRM+PaN6KT7DKN89Eee+PER+X75UZI08ISobvrZger6JCdK9/+kwPTwek72OmQQ+w7SHvb835j0P3lC+aAgcPvkLxL3YFYW+FR8HPvi0IL7e8vs9CzkivfKcZr06S3k+iSQpPShG9b1EgSW+u2hfPjYNSb4i0IU+OheSvW03HD39DE8992+2PfTx0bxPRkS+1vlTPVqrqb0J1cO7lYkXvnY4iT0/TBg+QO5MvvyOCL5lQxm+Uo4wPu1bpL2rvfO9jJHmPABbPL23muU9OdpUPgrxHr7jon49YdsnvgsAIz6h1J69YoZSPtVbrD2bqS0+VvMhPuaxkD1ptOk90JJjvZIi0b3q2xQ+0xBlvBL0wr1z8xq965G/PS4car79RXm8y/8cvTaLQb4Nbhg9bAZ/vvGadb6keDo9aTA5vRL1Vz7/V4O99S2rvRSQlr4yMwc9Q3ghvbumIT6NxWk9qYnAPNpoMz72Itw9H4ETvnDEZT2fUjK+VanrPfHrDb7FF/W9A7TMveTNUz3srYc9HlNBverHCD3uZ+E9TFQIvkJFdr2gAEi+MEizPWqXnr1mniK+YCqRPj3qI753fws+WYtaPg0Lij1OV4S9Jx8MvZrpfD7+QKK9Q1ksPfqbwj1FYmC9FrkxPrywLz2L6b08fcIAvl3HST0KJQ6++uMovltaCr1FUak9ZCwwPnbQ6TzbToe+oI0tPs0WDL2L4ag8K53POzskFrwc5Zw84YRLOwrdTDsI3Fy8/tTru1vX5btOd988xt0/vMz/cLxZH6c81leIvGLSKjtyUYO8kwJ0PI3S8LwS9rM7tmayvGX4izxhE2e8YH6iPF1wabsj9MA8cPQavMacibx23gW9XQ8gPKqHs7zEXuO57PqIvLMpxDrE8ae8Hn4FPbSoKL1GU7U7lRbwvJzASzxu3Eu89dKzPPlvibyt9zA9elugvC6SuDw/UXe9XimsPMTs7Ls38GY8C1ExvNjPrjyH8gq9fYnbudHI4bx4gh084wS5vK15yDyN2P+7fzt8PPyqsLzSl808mxsBvaFPkzzWcKq7AAAAAAIAAAAAAAAAAAAAAGL/wL2TzNU9JDhhPqedp72p8ss9HIOjPdbFgz0D4Vg+kTVWPjNQ9L1nEOk9ryH/POZLOz4Xm5G9wafiPck3X77yABU+rxmqvKWxWD67eRe9Y4XnvUm0az56jTI+eRARPrt4ML6/5ic+Jqz0PU8WB75nCYI+ctoRvRjKAT4gijG+A24PPhz2ozyVfRY9bAy5vAVh0Tzhxkg+SE8VvsKqCL2jlQM9qPQmvt87Ir1VrJa+ohjqPDRpCD0BnaE9S/Vgvkb3Qj04qqI9p/F9PVqGHr5zZHU8mRqYvJK+o72kIk+9gpybvVXpP7xtht69WPWJPboxoj3jTwq+VDxDvtGmp714e3M+8fFGvuw0AL4Ivz6+sL9RPWc2kT1du9O9/vrzvQM2OD6k+km8k2NPPhrG9j2gZt+9l9pAPILNvTzbIP299+vEvbQNHT5zpTW+v2czvsINeL3MFdo7bIcpPluYhb0UiXO8qd0DvqK4ab1rV088bBeovUqD0D0bNA48kPIYPt5fBz7SG3C+uEKPPd+e2T17ZKo987tQvlPV2r2FoK69m6onvQerQ74P4E+8sdHiPf1OhjyuSti9RWJAPkZScL7R+Wu90oBPvoO7Nz7wZzM+Cl++ve501T2BmmU+eM4ovg/DgDpQEic9IPU+PrOh0T2ubLw9XxsPPjyfLzyRfM29uaFRvhkip71Vx1U++vVKvtQZ8Dwce/u9dyU/vUk5lrx/Yjq+TWIiPakRYD4OeQM+F04DvtibEz44fCi+KwwZvtlA872KweW948KcPKqogTzKqj++NXhDvlelBz5MOr+9UfxBvW8rJDrvOBQ+O7k8PO3l5j2cTRK+tRsGviWoPD66Lj++yX8zvppwAb5/fQ8+lY5/vhdqvL1//Us+l6vxvfeSPr78QF2+TtqiPc9wqz2cNvC9HQTmPRVGBr6eUmg9OnMMPrtCDLnr6zg+tzF1PYmkmb03+mY9LfkqPPSDJj6q7IK8ojVVvNA+tz0B8+U8jw2GvfawEj7UdZK8bdBLPauni73X9p08fGwoPuyutbwwhhC+9iUlvs/E6j37J1m+FyyivfkTrD30tL89jBFFPWuCTD0zjy2+rYJPvcWIKz7duwM+BZaVPPznCb6wQrI7MFWVPC4Gpz39hZ696rByvbMIHj6tFg4+e94uvUIK4T2I76A9EQFHPTh+B73yBz09SZwIvuFYFT7IrHg9liGPvV7VVr7DYzE+H88tvjwYQrxej0486wXXvSpe/j1KgBq+GlYlvqMA+j2eID6++hWHPpB/oj1ZrQ8+taaEPflomb7ixPu9Be8/vD/ZE77vWRe+IwD6PfG5ULxVXZ+8xDgFvvzbfb5t02499EQcPlMPmL2n1Eg+qWSAPshMN76i6lq9vZAKPhpjtj1yxTU+z5w0PjJjLb6d28w9s9a9PSSO1LwzFum9XHFYvmuodj6k0t29nDXRPcLrED6zshg+UxUJvt3E4T0j2k0+DI4HPpEHeT5Suhu+OuNavnawu70dFhI+GBX5vMb3ID6C3TO+cSTTvFHWKz3uwAG+KzZWvhytnj254nU9CUPqvUXnPD2OdVk+AJrZPO1vR75X/zy9WPkaPT98Lz5AAFq+H4M4PnT5UT7cQm2+Y0CyPE8cQrzoX949e22rvX9ZzzzwoyQ+XVVHPmxgjL3IpLE938oYvcrH8z1Z0ZY9MWofvtt+Fj7ezIa9aEXevU02RL53ChQ+ww52vvGfgj41LNe9M7wXPu/J6L2qxac8i7fnvbuXfj21h26+kRScvc1uLL1RsAO+u/HbPcRxXb6Xf989zCfwPYrTsL1MXpc7wa0APrhiIj7Evw69JvghPv6QFj00NWS+ysfxvX6E8Lv0YQE+z2Y3vRNWwb3SXxW+rizpPOOHEz1mxcQ9+1puvTd8nL1nSUu9mT3MPWpfyL3UCpc8+tyPvhpEHL2Ujlk9EbooPe8+fD0GnHM+YLg8PdWH8D1O/Sa+iomWvarIOj4SXaO85bl7vOICVLyMoNa9rhW0PY3+qjynR+u9jLpBPrDXej7Avus9yvQgPgat2zxIQoK9Z8ABPnsc9z18SyO+65qDvfjL9L3b6j6+RFWtPFYDVT6mi0C+cZ9YPEtD572avrY9L/NLPQgqNr7adTU8EVYQPDLGPj2BEnK9aIXKvRo+qL2VLzk96FE8vRwch73roJS9HL3EPSD2Pr7B+hw9iGfEvWkSgT6yxfY9iL2+Pdq3Z76hym6+ORLGPc2zHz6EVX89aPoSPkU0Jj0uzXI9rJ7ZPf7cmju/3z68MwNuvuuAPz6Oqga+/gBPPhvDNj4cG2Q8bgiBPrr24rzHsVS+uATbvLAaQb6g9hc+R6AuviMNFj5dhWa+3zBDPR8anT0EoOy9SKz4vYHIir3gxDY+5u2ZPNg8rTt33DU+77Fqvuiegr5byCc9gKbMPXpKoD1Xj1o9NogsPDbNJL3TfAo+xCm1vY5lMj2iPSk9cAQpPXq2Sj6TqYu9rNAQPidIEr7F/DQ8XJVjvnMQAD2PeCY+yIKTPRHrRr6IjgI+3XIlPgESeDwQrqM9AKMzPmSft72N4KU9rrsnvv/p8z1phUE+urArvWkaAT4Bzw8+BX0FPhCfMz4pvAG9WYUePQTD8D0+5sY7zuCEvBzlPL79Q8E9zcCVvanWEL5KljS90IQkvpaoLL6hnQM9rQZwvp0Irb21ekE95/uwvcrpYr7LBRs9hqakPkM6Bz6SSnm+ddHrvGMrzT0jRmG+a+4APujiRT55UA89FN2JPAA/rbtO0IG9YXP9PaflKr2Qk06+I9OHPlP1a75Dn6G9G2SBPd+K2j1F/4i+I7QIvrEDRz5ZJCc+yYsJvtIDZb2DPmA9vyE6vrgMUb1seKe9aG8BPmKDG77OIGG+/1DZvYsFY73LoJy9UJ87PhlHDT6at/y9PC9TvjG4GL4UKQ2+r/I5O4Kizb0C/Ve7+18APqIuuTwCrb298NYdPpYNVD0heQS+1rzuvM08Kr32B1a9Um3JvMRLJb6Zi6C6AwL1PO/BWT5GfkG+YBENPnUuOL404F09AopiPnM2dT06kVi9Fbo8vIs0Pr6zBcq9TSC6PPBEvDtts1W+xTCNPQhBBL2ypzE+QnYfPus9L77ioSK+OtIjPviGX7uhIEo9kaj0veiXAD71VhA+p12XPQQZJT6PFW2+F28mPtZPMT6UnS++gW9NvtXXUj4fKN07cUj2PaL4UL7380y+me8JvWgn07wULkG+rvhaPsaz5TzPdmA94D/DOxsQVL5MPW++AEA7vkZPHD7ybzK+1Jj+PVlaYT0+QEW+MyYTvj2DN72W9S8+e7SZu0D50TwOYBE8Fv/DPa0BkT1cfUa+BF8WvhLSmj0xOU896gRNPomfQ7747DA8cOshvp+zHj5UhsW9fxOnPTmtID4iJZC8SGVFvieHJz1FMke9y10aPoPjMj6Y7EG+b3GDPZXNhL1DKdG80RF5voeaxb1Ts9y9OM2HPnr8TL68BNQ8GFxnN9WLKr796Ua+oh71PSC/Br6hqlG93GSFvteGLD71miw+pTgLPFkmWL4hknc+9Xt6O+hnCT5ybj4+eDVEPVjopj0hBTG+okR+viegzz3tGZu9vmOvPSjyXr2ZHh2+AGcSPvAfHj4ZMDI+90kvvqPgpDzNJWO9GdOYu7RiR72bXiq+MsYnvfNUR73WMhk+Kt0qvhXWL764akM9qFWEPcEaLj6zeLw9VWvhPWMZHz5zd8g9oXnIvYfekT3tBYm9wYBxvNCr9z1ILQq7cHExPZoFmr3zmwM+JM5Ove/bTT48CTk+pRrgPb3zLj4A9OO9mi0PPlWon70QuNQ9bt3+PbYgGz54Byc+GgLDvXt2BD73R6w99WKbvKiPJT5KeD++JWo7PpJVc76jsmg9nWftPT1dEr1cxpk9vz4hPZIdcr2wwGu9AHJGPVyqBz07njw+DjrPPVuT4j10yqm9cKH+PTTTuL3f70M+Y2sVvujlJr6OJL89SfhnPeRqyb0U1oM8yfoOvq+KAL4y3MU9GBLsPb16xj13ISS9lSpePg2dGb7/uXc+/LaxvatndL6mbte99mWsPL5zG75hA0o+BLbGvQnK+D11BVu+vJcpvpwpFD3SOdk9iadAvtz22jwXERO+bghgPqpftLzFFAG+C6okvuncAT7YJWI+CVbovSMA0r2fnty9VQedPWlEPr5ajx0+uncxPvBMBz4C3wM+XEV6PnF7dr6U6tu849zJPYR7fb7zOLK9vSjSPFPot72p9v071SocPmPCB7yDlDc+DLRrPtwnQz7/mba9M4w9PFda+D2V5UI+lIT0vbcpnD2gQOu8I7/cPfX8Mj7QHxA+504qPlD1mL5HFUY+TW7RPS5wDjygzMY85wW3PSfUqr04bRE+GGfmPOw+bL0T8w09kzURPtH0nbwbDNK9n8J8PbJUJ77DTlI+MJY7PmpfVrxoyIw97XwQvsoCGD7VplU98dbgPfUlIL5ixka+If4RPtUD4T31o849xcZzPpX+zzwyWMU9/duePb5obT01iAg+LZfMPTwgOb7Vcdi95XgEPhQhFr5dIJG8EMBTvqq797zX4Fm9yiEJvjQYBr6WOuC9oihLPi8YAj6aGEo9lWHdvfEtlTzJHzC+no1UPiJXFr7eLTa9+hW6vUZiW74Jt7S9YrJzvqFLMT0aOxO970/TvTZkaz1hYaa7bB4MPlDYEj4D/TI8gQcZvu1Chb0SZMO8FIEWPt37VL1NDkQ9hq6uPUg6QzzZPeU9fp/avW9+DT4lJD++5l/CvFGfqz257ju+GE+TvTmbkr3h2js+qIyLPewjerwX4Cs+UpqRvYxoBj6JfyU9t1WjvWJ3HT4FgNC9yPMhPicCsT2NTks9tPZAPTs7Tb6Wyxc+uhIAvvaeab6+Fhc++UUsvh2Yk70PzUw+z2lYPqXsND6aRDo+rssnvl0/B774K8q9proFPTnhDD7uRQu7ouVfvfn5XTv/2Ua9oDrbvCcflr12d8w9NJ3Cu+ITbT4kaHo957m1vYICHD1r7h09GVDevUntEz4Iw5i6Q8JVvngnPb7smsg9n08HvqtqBr6/BkC+ednhPA2amj2qmQ0+2zSEPWSOwr2FER09id+xPUpS370gpQK9MdBbPjd1Hr4Yisq878j4vSyFOb4hfiK9aDj9vdc9LL1fMVm8TrGdvQjk/T2D4PC8+KZDvn3PCr7Bj+Y9zg91vi7XPr1eddK7yMYZvZzdeTy0eHM93PK+PUYORr42DHS9nEANvtZZaz2Efho+vC9kPYqYPz1EIFC+IEc4vo20Qr6zHtW9XEBvvej8JD61VzK+G44kvthKVj6Knj8+yCsaPolUCj47D9i7UDQhvm+2FD71fLM9OO6nvd4oPD1pBQy+xRe5vbXuNr6PGdo97GskvozBDT50iwk+vFfAPXISsr0U8la9NEjVuLsQXT27Sxg+lg0PPp8E/bycRsO7lqPcu1JHbD5JC14+MVcHvoJ+Zj3HABI+3GglvQEyuj351N886sXCu01SPT5io4Y9P4w6vnZnwr1iy9Y8NFySPQLacL0Z1xC+nJFAPUoYj70gcrC9yPKovLwgJT6tRjG+ronpvcFYWT6sziy7EDW5PbbGgDuOcLa8hfLCvext4TzgV6g9+6IcPJkKaz0t/V691cA4Psyu7jw+sh69fk+CPrvTPT4zOb09T41Cvtn5sj16JIK92MCCveN+XTwBgku9FJK+u0tlhL2geIm9r65Luzf7Mb4/RA89zBVXvqRrST3F09K9AVsrPlEmFr4XOEY9MNW2PQcREb40UwS+XhOlvKK7R76XLY89Pgq0vUOf+D0QQA2+9trlPeymRb6gL3Y+aeDfvdLL17yGx1w+R6rwPSrNLL44hjS+UlOwPHjbwz0NiiW+246gvRdcrD0Frac9zdNmPUgyAb67V7C9KCdlPpPesb3X9Cu+AQkRPswa6b1IrSI98P7cOxjAJz60CzM+ub4mvsFA2b0qemc8ZwF1veSNFD39vcS9ekSvO75DUT1MZiU87yAYPhOCjD6Bkia+yxZ6PRWC+Lzrwx89QfPFvF+VED4Dp16+YE4nvd+wDb5b8gg82cw3vJow1z2kK+I7/cQzviJqJ77EMjS+FKe3PcVrIz6fgYc949DgPYN9lb24NSq+Yw5GPnXABz0vk1A979CqPu8vE75ANCU+H+BmvY/YPr6hWgu+wn6bPVALlD6uPfy9h9aYvnq5yL3z1CU+YcoCPuUzZ74H/AO+UX5XvU/Stzud7re9cCfgvS49B75qgh++q2rSvNVGYj5thEG+9ckAPAF7G76xPha+veHKPQ031b3T9qU8LuCHvjVyNr7+wxi+sTNavWnTFT7WV9A9Dw8uPpT/EL6KH0I9qmeGvSVa2r1VPQS9iPS1vff7FL5ojZI7prIpPpDRvz0t0YO9aSCwvOnPbb09f0U+3PCVvrYWhT5TE0S+IxsAvusOAz3wAA4+yCIhPtF6mzw2bz2+ok40vTmUfjttPpe9RCJGvsyU/71uwLi81fKnPa21V75EPPE9ousPvomLLb3lxxY9CCRbvYY6Qz7uto88Ik6hPEjfy71KdL89/moHPiTzOj0im+K6apyIPQZ5Vb2NCqW9PDI9PhsrQb5/uig9NzlBvSjBVj7E8Wo+eCu9PRBf5r03Dxc+1a3UvNvYUj5ATjE+oNJJvsYVLr5xzsw9OhdYPaTYQT5YtCG+TxUYPoIJh7zVdwq+4+g1PYzdQ7vCzxq+ueGtPVVSKD2D/2i+WxsNPlTBSL70xOA9MuN1Pem1VL6XaJc9HGxJvvnMBb4ezn+9yzmUPbARRL7V+i69ujHQPYHlI75cXDm+rYh6vrmdPL4xJCc+QgJWvY5Wtz1tyKm+H/eJvqfFW76fTmA91B4/PhWuWr3iDJU9SKyNvMj/Qb7U2iC+cbNNvm6gX7vcLI++l+/svSQfqr2Y5lA+kAbeO8CPDbzAeyW+i4PVvNAKL70g6bE9JlR8vtACHzy+Zam8OCGYvUAKV7359oW9o9CRPVtaHr0iqye8zQKOPeFg+73ON6q8vXvWPcnqCT776DA+/pwtvdm1IL5IOd88mIvBPKsmnr21llQ+Xe14vprHhz3Liva9ymD7vb7pZr60Hk49yqYlPgukpT3Ox36+Pf3VvaaBlr16w1g+fHyvPdZExT1OIQI9Jft9vkdCDz4rx40+s1TlPWVx4j0HWbq8cxGTPNObBT5nIIC+F1pRvijMKrwkI9w9J+qEu3beWb7UOPu9Xkr7vEDrbT4wEdA9GsOzvXhV0r3NPbu9z3MhvuMt6r3RnQg+sF+PvcsBOT045+c9FetkPeGFJb7g/LO9+GElPq2tHj5AChE+iBsrPr7e6r1WaL09bLYfPo0aDj7Aj6W9dYEMvbzr9j0NdQk+Sq1qPT8gh71lRyW+ZyqAvQqvGz7KoBE+Cg+JvSdL3z1U7hM+bLETvkwz37tb4Wo9lX8gvsS/FL4Pjgg97flWPiZ7K76Ckaw9TsIvvsOjIb6ngJ08TzM7PrMhNj6ZjIE+hsavPdWQBD7+/V8+t00HvhDu0b2rTYI+Znscvpytrr2u2Su+V0URvfcPjj23HgC+NZIRPiliMb30Kvy9YYHqva2URz3WclE+7+g1PoLpz72rjRU+CNT+vVJz2L0TowK+XmsLPuzsfzxXXIQ9joz3u9Cs073xSnu977fdPHC3Xb0Z6Us+qlA5vYcpabthoAO+VawjvpXwYb5TArk8sBMCPrSMVz6+9Iu9oUmePD2OSj58UDE+R1efPPGd2r2ZvRy9ePpqPFCoaL4NsB0+DwBtPXuPdD4UV/i9n3ROPkoEJz0ZLo29pIkkPmib0z0V/cQ8PwT+Par5Yb55di+9bADxPVM6qj3K/0q+7l++PNxLBj5qPc+9pSV+vXPyDD1i27S84FtevkO1mb2qyYk8eo07ve3CGT5Jz6G91sh1u60iCb4tOQI+yi42vdN8G75/zFS9DI8QPkbRGz4jnwE+6kQZPRsKLb4slti9biJyPitOnb36dSG+6+VnvhHfQD3vRo89G8kfPiKDwr1Kqic+BUJNu1j4kL2feQE9RQwRPqcJSL5NrTO+5BglPlWvH75u0mu+LPsQvqTI3b2XMry8k+EPvpEPKT4dOx++TXIhPTZMDjyUOti8QuQmvmhX072/Aem9dp7xvVTgMb2NRBm+a+cHvlPlH77HuR0+OdkBvQT12T1Rl9Q9YcY2Ps6KFL5QWpS97LjEveliFr6qKTK+jZBsPiZCUb6U1NC6/rHDPKOOxL2HPkS+d1eLvGM5Tb61JTG+T2ljvjcfbD7lzZK9XegUPvAATT2T76M9DjoLPk2AsD0gIm+9bm1xPkHv8L321y4+oblPPU2Mib3aEV29IehUPodtK74l3Ma9Pp/+vYoD7r2BLTC+mf8avgOaQb6FCUE+aTmgPdPE3r0TWS89K5z7PNS0Jb7RVjC+V24APdtZNL6cLlC+kPYkvvliVj3auI+7iesXPYaeTD2OoGy+p235PS6dOb6yVEE+526svVj2Ij7fqaM9NieAPod9Zb1FnLM9tnt1vvgZ/L1Ol1M+JbLmvGYrLL78Dzw+StpePvoS/L08o+U9qKlIPo7f0T3bgAi9RPwDvsEAHT7GRjs93YwJPS2MAD6XPvm9oEl9PcaTCT6vYNK9bPcdPj6XD752r0Y+W0EDvnyUXD0wEoq9pD2JvaN0rD2XZzO+L7aJvhVlp71Iu1k+u9mEvvUp9z3uagC+ZwdSPnJpF76HkII9G42WveYiK768It09d3X+PHkXkz0tdqc8ySeCvCgICb2I+Ea6Y6H/PVFfvLxPhjI+T6vlvccZvj2Xs1o+4O9Dvm6PcD2Gi6M8kXO5PfFkwDyk98g8bGlpvh6dkLy3M/E8YL7xO+Ym07ySYL09WQcQviVCMj6kedK9vWy1Pc4YNztEode9UBZDvtlb+DwijSe9l3cfvIhhmT6w5SM+I5EKvsH1tz2chOK9tdxOvsTzej2B4ic+BX9TvBdLTz6grI09/lIJPi8ZLT0KdAU+TDs4vvtgMb57OL89hf4APhCGd76otx0+RFhbviX5NL72XAo+idMTPtmC6T10Rzc8BbHuve62KL6fbeE99M1MvkMrqr2e7V48EBehvdsQKD7Ry+E99ni6vUqQeTzv1AU8XpQAvplug75Bgsi9Hj6PvUAmGzzT2pI9JpqOvHGQkLyeaXI8WdcmvhTGS77jaDi+LNlqPdp0Qz4HSsW9gICrPLnikj2I8Sg+4qeJvWjUiz3YWoO+nPpMPjiUDT7dqMi8i49nvmTHx72IHPQ9I+PwPduqu71MJmA9bgITPjUmh70a9qO9JhIdPnlNeD0F30e+QPMSPuPVBz7K7nG9wgsbvm2J9z2+hVQ9c1IJPjEWsj1yo5w9XpLJvYAraj62wAQ8UbnxPe/Gzb12dWC+Mcc+vpX/Sj7ptci8VEKxvbSDCL75w4Q7vcrmvU1WhT7wS1C9Z40wPoc9/L3u6TC+XOcjPr+eAj4riFu+aqMrPimWKr1s9IE9duuAPe+iwbyXc7A7P3z0vWsIOr63Ay++DMEdPremyrr/NXa8gcSZPZWFcT0OQsw9dKIrvkUIET4GHVc9TVG3PX5fkr2i84M+CnODvDIUGT5idUw+YqNmvYN9RD6y6UG9GZNovlOLlb3blXm+YcWdPX+h+7uWFU69QKucvaUVS74EPaa9O/t3valxCL0IMy0+Wu8nvVXZDb4QyOe9TdeCPQCFa7451qY8qoBCPnH1hT3Nn3e+OZyuPYZxST5XNj68G7P4vchKOD7JdlC+RyEQPrRO/j3SQWQ9hI5VPWhDHj3yNae7NIaGvTxkGj7SkiI+ZnhXvg2ztL1lpre8GRifPYfLY72UV7C9NWNOPhYeuL2h+uM9RpSEvZBAJT6Qg788RuwfPpHgCLxGTOC8Dv6NPWFeJr7TKU29tgK6PTA3Q74y2xA8/xsUPRHIT772jve98/eDvtxoiD5JBQM+PkU8vjyKsD1vL9e9o80GvkkLUz2F5Bc+wRZEvZjPE74pCZu9PljYPPsmiz31cGi+UdB3PfpVUb6oYQU+PY7WPfmGUb0EBx8+OGSBvb2cAj2Yj7Q9Hfb+vQuKMz7BRnY93vAcvfuMmT2y+zu+68PlPcfEkL25VKi9NYvTvcqot72eXDE+sQeyvX8Asz1oni++VjWnvZUaIL2jdDs+EFH7PXWnij5Z9uS9qR6lvSTkur2dPgE+2AJpPpPyor72OCO9LJ8HvZEawTtN+dk9fM8ePVtBdj5XQ3i+JGZzvlOD0D0Hd14+7S0kvucerz1AT7w9X6QdvjIsMD77I4c+xX8qvuYSiL08G3S9SxgNvnc9q71K8/u81Gotvaa1Oj5g1o29V5THPcYzJD79QaU+geE1PICgo72zrDy913V1vLqkgb3bdh++EXgovsghE74fOsC95f0rvIAEOL5X0ei9u6fDvVlzmj1XQJG9JgaGvSvx/z3BGy0+0/6BvpPj2j092Sy9jMyfvDgtWj6OmwO+1isnOyW3Ej4yfAC+o4l/PW93CL5x3Ig9W3rovf/8G75bxw6+MxsHPqGvS77mCV88OpsLvTdCkT2cPcK8XEdNPjjELT6oRYK99GjpPeVNXr1whDm+Oj2/vVAmFbxEsZS87ysnPYJFxjyH0YE9yx4rPej9nL3C1pw9hgMKvrTOGb6q5W09wPTXvcgpOTurFNO8Ks+FPDg/mD1qXxQ+a8VFPoCM7L17J/K9TB6KPSKlVD44DUM+INELvIP1j73x3Bs+vrtnvkQuHz7KWmw9SCy8PWODXL6/6ho9KOksPt4sojxJ78K8My9XPXuDaLyPpio+hh8/PpQur7xKvbw9DQqTPSEa/j3/vEM9bLQvvn6CEb4eiee9coNIPlP2Jj69Vgs+Y0YCPl4IFT7Clu89TvMmPuX7Dj01sjO+6sQiPpuh2j3Mlda9aO7rPIRczT2ULWg+LQExPg7nIT66cme+kAwmPSOzJj6QJr47znk+PikcAj6cEw88e9c8vqa5tL18izE+CAuovaBtBD50iYW9jI09Pb9SFj5s/749KWkqPX5ClTweweO9yxtHvTJ5rT1674I+X1QlPd+wVD41Z8o9HLiOvDrTzL0LvL+9HhYFPhRwF76y3p68sRDbvQRdyT19f849ymGSPWiRJr6fZHc+RZAAPie0IL7L30Q+x3hbPjHvm73qfS6+XdxPPStJdbwN+Fg+5Y3BO/CDgj2GS6098rWcPWMTSL2qrZK9WhoHPVtvIz6GJq292hPWOjxV1j3WhU89DEMDvs8gQTy5eWy9H5vEvcUDQz2j2zC+GXervJ5mQL1v5MA9OebkPbPQ/z2lFZa9PFyWPc2hRL4DxwI+7BNfPmXKar11Lcy9cLfcvdY82rxtwSo9zuOWvbDEaL4Qg6w9fbGUvf3oIT6ezFu++uaivBhN5b3xzRA9vejAPWPI/bzKgBO+6zWWPd73HT5YPhy+543kvf6uNL6dJp09nqhgPqDCWL7JT+897+cyvkppfz4jyVK+EsRxPEamTz6cayC+83MWvqryVD43NMo9onKzvXV0Hj4w3Ee9Li7uvfaLF741zGo9hSOJvUC6Hz6Fd1U+yNIXPhR10rxfPhg+EBDUPbQZwb0PXIk+CCLhvAQ0JD5JPCm+GSmQPRlfJr5X7Qq+7IddvE3Kcz332SA+3bfHPdwYJ75q0Uq+TfItvlcJxr3bZ0+9xsBvPcF5sb3Zpug9t7m7PlOW3D3t7aE8sJZPuqpsxT1H+hW+giOVu5Q/Q765KCa+1M7LvRzOXz4xtAY+p5RBPspYcL2Xyxk+6/KzPQvLmL1nrBW+nd2NvUQ5g71KE/09BS/hPZ4EgL5Dj6A9lP8xPuZHBj5wgNi9c7AXPltXET5Vgzw8qePEOoH3Pr7+7N09Hjjqvf7v9z1qY/k9ssd2OyL+lD0cvwI+GhRrvJPl7T2qyuw95wkhvjKl3z3NUIU+WR/qvYA6jr03FSI+UysGvU7Ysj1RcJU9SWwlvse0Fr5Oh8u9YhaVO8Ds4T2yd2+9GRFWvpMjBj6pgwe9UP0oPiNYRb7DQdq9CSVZvqO9hz77sEc7o4XtPGiHJz7cZNu9ot65PVpxeT2SH3G8XfjpPK7RNj3QXk69sZzDvO61K76Dey++c7w4vVtsOb783A0+EzNDPWYJ47zJVky+6xXsvNSHYr5BcTc+aZ8wPNm+bb4Pnq69t6HfveOFEz4mgRS8mTwwvvgN3T1lW5o94ZixOzs/sD0MKne8gFcevmHHTz1aKRk+342hPeIfVj4m66Q9w1j8vA8MXLy6UGC+VbHivUv7Nb5QeTq9AOc/PTiT5b2EmZ69YscqPnGmlj2MABq+KXeGPaykB77o3NU9aP/XvQOxmT3Wg4y9Z/ZNPm9KHD5KQ089VWPQvezbO767wFc9Vu2ePanUyrxI3D096QRBvuAjMj5P1xC+O27XPTLjsjt6p06+AclUPBaGFT7yz9g8uA0TvaBul70W/9U8AKh2PdvH0LuaTvC9/S5tPfTnAz6BESE+/nolvnCoVD4XJRw95f1dPnoXkDwge4I80k+3O1Skgb3XidY8nyeBPiku7zv0izg9Vzf6vfud6L3UcWi9tsDTPZ2onLxOd6S9zwzCvJ/RJ74Voyy9GbRbPoc8Ir73U389Q63ovEH8Hr4EkPe9X8W9PcoSWL1HSsK7jzKNvd6e9zy7sGQ+IkNzPr2xLz7qhd67bym7vXN8Hz4sGFk8O4iQvVzoDL6lVMy98L4vvG7js71DyaW9mHiAvX6XAr4C8Yq+AL4CvlzlxT11LYM9F43BPahlS752ti+941+lvF3LPbtGcv+7nV06vTm4TD4hUQC+Y74fPFgU+T3yfAA+VGSKvf+hNT5kM/c94BHFPcL2c76X9Rg9ZTzMvRcvdTzRtk8+jODoPT6uRLzs3iW6lwxkuyDXKj5LhHs9it5oPn8INz4+GkS+64HPvSMmND6bSzY9LpRhPnoAIj6VYXW9iA5IPaRBOD5f0wW+4EKUvGthLT0ZvpG9PXDtPbq4sr13cww++XanvbDcM75yGyi9T5J1Ph9iHr78ORk9k7AmvPa/Wr3Bgzs9oNsRPnx0Xj4nZh88iMKUPJsNrjtUjfk7z4EYPkuBOT1cu5O9mdgHvkiHtL3eYFW9hNvpvbgauL05lUg9nsUZPtuq6D17ru+9rmmNPNG24LzJ4Aq+IGoSvcdCTr4PWJE9G7/3vZqEzDp9JTa+19LePTOnrL0P0es9GoJBvgmTLD4OUQi+y0xDPS+TDr4AoYI94bFDPCYyHr7M3Pg9wiQ6PjJ+ET7eFQS++o1uPEVDpT3Q0Rq+CHnrPbc3LD0Hpo++02S7vdzyXz3CSRI+KMPfPGERGj1cGl6+rPg6Pn88lD0mSuk91d9QPmajRj4pHIq91GoTvo3HPr5wQxc9za18PY1/872QblE9SmJUvgBwnjqEU709N6g5Ps6gxjwsNDM+kVYbvlwyDz2NDua93/K1vUVwcj1Maoi9FgnFvVQ8UT4BVx+6V3PavfDAgD1Wp0e9oPcEvq7KFD4YhkM8w9S2PfI0Rr1U2Gs92THdvVR1Rz7gPr47Ih5LPdo1ub1w2989x8buvccAtT0hr2K9+ZMSPF0kjb7Zdy4+l7vePN0FUD7QAUq+X6AbvblgOz7Iedq9Wv3APHx2L74PCxI+2OuWvRJyQjwT7fY9jIy/vEa3l700KPw9UbERvGULWD65oyA9o396vviS5jynzpm9H3FQPtia8L2ajgm9PdzSPSX9Nz7BJBi+D+TuOhYxFr7EeAI+57ovvgcuYr3eP8Y9RKf0PXHIMz4sVD0+dCFOvq0Nnr0HPno8uvY9vVXAJ74lIGw+KpWQvIkeRj3CF+C90Vl0PaU3mjzn81i9QNghPg4SRr514S0+JS/mPXweGjysbws+7AUfvgFVPz6rJQS+dgRHPpdfXb48SA6+vC+7vNlBYr5PQ949nG9APthDGrwIRIC+DDN6PVmvwb0sKys9n9Vlvq24sL0nDLc9Ae1ivjzI6LxSOjQ+tYoJvgkQkrw8Dc69yjbBPenzqL3DqmK+of+BPqKZxr0aDPk9Q5dKPtvAGr7YvQm+abpOvYPtY76sZ4i90HDsPEUiDz4bB4k94EaXPRbdE71JGII+ytuLvH3wiTzlI4k8JPVKO8iFIT35Clw+AJEtvgQ5K74JHOa9IPQOPhgyVb7R4t+9LSopPpKSFD3EJ/S9+AUmvgr7Iz7wc049vm5WvNFy4juXwWS+NTL7PcZ2KrxWqmE+697ovUf8xT1w66c8IImmvV+kHr2GFF4+WHNYPi7bNz7j3ng9n50RvuaakL1ZQXO9JJ5hPTZMor2nKk69ipyOPZeiFr4RZqe9YQp6PszPUz7HxpC98yMAvhemiT3kpIG8rW8xvaw3zb1oyui9c7ENPAohRT4+icy9RmdMvBajBD7LsAI+OuIvvtm9YT0R+VW5nZ5cvqSgzL3aMp+9PQWlvC4yND2gPTG+PO7BOldLubz/OUs+Q30IvurXLr5rOG8+CHY+vkzpDL0KPu49th51PH9uQj7USx48jP8MvPt1OL52Al28/zaZPYCOrr1rIRy96CtJPng3Q7127U09ftaSva1Yrb1TXoS9UtwuvmkEOr5qMJu9CPqNPprevLxI1N07m3XFvcZOU77nnDS+98jaO5BCdj12LLy9YvY1vljtbL401OW9/xBgPt3C3D1t2i4+ZAkWvS8Ehj7UzR6+lz11Pu6bpj1LdW49Cq8jvd3mHD5Rv6O7eoanvN9cAD5rf9G9avsvvmDjOj5wFg8+j80wPutAw71k1Bw9MPQqPaknwr1tsFo+ZaEHvtPnAD4Z2kM+AowFvTnvCb0TQOG6TVYQPjgXlD0hfym+VevzO+tcFr5bddS8xzvCvOkHWL4uMEU+dq8dvGekHL4G3D09ZfYrPhMShD3EPLE8iD8sPmVxWzxzmKO9T6sKvrzmO745YqM9kVy4PYDpDb4Fy/A9W+YZvp4kCj6J2A2+DeIFvhtgJL7W7eE9PiM7PnbVJL2ylgC+RFMpPtJu8bwE1a69h5U4vtM35TxoRAE+bDVuPRHKO74wXCy+W4TbPKlDV75Knge+AXHwvXR1Dj73ShK+ksqdPcvcID6N2Uq+pyQYPpUM2r0Lzz4+kFhEvt42Db5dU648M6O2vbNoAb7XU5E9pUvkPVwQML7NklW9I1KUPR9FOL70FFs9w1iDveWKY70nBwu+T8sOPpKet71Q7x+9DGsBPnvYhD0WaRw+zaRQvXPtTT5V+RQ+xoQZviv/WL2c8ik+71gxPsAkszuT0049JOWsvWmFbj0yOLq9QkwMPjYQMr74de88GDdjvL62t701bYS987ZWvftZo71s7cm9+wAFvoyMKL3cVhs+hPojvsQS5z0V8669EjclPsflQD3XFzs+QxtwPPTBmr3tOGM+nNZDPmC587uhS1O+Hstgvg3vir2SGgg+PvruPTQhjL2cGFc+grjXvDlhmDrgr1G+vMEWvm707L2HFx49cWsEPvzLUT6lDse9hoWmvUhGLrujQCa+bdyHPciInT1D5OE7ygr1vNlf+rw8wyi+T5+qvVcwcD2Gh4m9GNRNPu/URbwYlxe9VfVfvoYpkD0wcVI8sJZ9vUGaTz4st1C9xRt0PbU57L0MI/S8tuG2vQ6tRL4NAMS9jMglvjs71z2OcV69NdMAvtYeNT7fvy6+LhAzvjD1kjxiFVI+b+pouYFZqLu/if09uXMovT51/z0KGd49e3W8vRL4BD5JVTI+D1t1PR8xJb6pOyK+Fc45vqckXj7tnLK90swaPkQdIj4+c5898paXvL7yb70Te5g8PwnjPb5icj7RfVq9JgrPvRigLD4G9Qy+N6GAOVYCt72HTHs9d6YQPmkt3r1/Uag9IBJaPipopj1SI/29ZZ9LPCnZgr0qpzO+niM6vj+rPr4SJ+W9DgdLPB3VJr6yM7m6WNj7PXi56r0rgy++aJb1vROhrz3rsgM98F7cvTFU2L3T6Be+ZUYLPqrg+DyALk0+fPgmvkvzhD2dmkO8OjtVPUub8ry96/s8rAsLvb+15TyKd4m9tqm7vVvfSb3byEe5qCe+PfHjvT2ewOm88Gu7PQQJ47zj4EM9NcAbPvpkNb5vbe09KvVhPu0uBT4zUzU+YODYvcp/Or1mOqK95q8wvd+8Jb2z/VA+WluhPXKGnT2nsLo8uzZCPpiIQr4umfk9xvqmPZJD3b1fcUs9l3+gvemJMD4pxd08aPkKPRMBGb2GrhO+prr4PZOrID5IixQ8m/igvafjrL3Rr4a+hI8mvsxXEb7jh1A9bbQOviiJfb3Xl/495wTmvMaCyD1kw+Q99CVzvkjOFL7Xx4Q+WvFNvMCsAb3pI0S9yfeBPU3AO74nzxi9Vj3qPbPsJ76rQvW9xSE5PhVYgj4ZTBK+2BQHvjxoMDs0Zne9T9eTPbzUD77kLRo+xEkgvqQUDL5aj+c9NghcPgrx370yH/+9vQ9CPlHwCzy6g1C9l8Q4vnRq5L2Zv729VjcvvSZ5j72XSKg91cA2PlLRzzxZdA6+FGstvjeBGTy7PtQ90PrDPVQkLL6tE1I93U3hvC+qW77uGoa9+Hh3vpMqjz6ZUSa+3U6pu+SOYb35fSu9bg9Gvk1l2T2jiUG+UH5IvTpHJD7OLjw+Ug4/Ppfxgz3qlBY+PowkPUSDwz3V5as9qaoDvmd9cD0b5WQ8o9+nPdLa/L1bTA89tRKVPLVs070SCLC8d3VDPs/aKL6r5E66zMPvvWxl/TuPPpq+n1GZPNt44rzGY7O9GBYqPUXT5rxfeCa+OzziPR923T0ihTi+iVuXuv4M9L1AIaY988YpPjUBHT5ZKzu+FysBPnRQNj5JiwA9uSWdPYri1L39Lre9dwEOPkIM2LzqFt89szepvUqHj7uhWZ69wQpyvkrAYb7z4Sw+8qMqO2831D3hsAA99SCQvbziab7CF5y9aOhCPq8kK73W6is+SXEwvq/QJz7zCtI7wxYZOxprTb3/7nE8epm4vBlmMj6mFMo8uduivZL/Xz18BjA+12gAvpH07T3wNAA9Kl/QvUP+tr3lCwi+kH0bPmJ8AD7SLB8+BwsRPgJVcr59hzY+OWgwPuX6t7y6Hhw9nyPPvYaIKL1oBci8g+MMvkX0r7yhE4e+CZlXvthTtrweKf+8r2U5Pqk5Bz7pEgq+KgmHvbjakD5xBpK7XlgAPr96IT67jdk9JFHvvQitMzy04jY9KXc/vqgYnj02DLY9lzYUvrwQLz4mh788eGwfPoIWOzwGBua9amRGu/0KnL22ISm9icYvvlZUTb6ljTE+z0FCPtqI1j3PVie9nrE7PgWSBz7/n5I9jIGwvRSknT07lj28QncxPtA9Rb38Ofo9uYVfvkG+WrxoKYI88q8Lvpyevb0RJTO8b/oaPgvfr73iflc+5J0IPodsez6ZggM+DXeuPQD/zb0AkRu+Cn5JPsXVEr54ZGa+V+d/O18qPj5KM3S9eF8XPQTGlrozLIM+hzfQveqaMr74g6K9RgG1vIRXv7l0EIM8K4BSPqC1+D2YAOe9Yum9PS7+Q76v6Ze8N+NVvjhraD3KhU2+hLVUvlo9YjwU7w0+z0QuvuW5uzzlUO89HYU5u7ZeYL7M/ma6khNhPHu1rL2XTR49nVdnPiw25j1ZJlw960ckPj29pz1aEy4+iKrcvbhlNrwaslk+1AI8vptFvb3Nsz89biYzPhbhHr4Eawg+m2wVvmCJxr2lVlW9A5xWPWaaE76i9J29KgZmPiAoWj5LhEA+0mMPvpdDrz3QRhK+5AgivATsDz0eaTY9sWtOvdSfSj5q3yC+IG9ovKrLAr7SII490osdPcLfv71d+yu+wO9Evu3w8z0zzyI+81nBvU7BzrwGWx28/LnRPSE6oj06aVS+/AzjvTjHLjpsxwk+d0IBPFxcGT6SsbA9UXg8Pagyo713X7a9uVShPaz64j239DI+HKNyPQv5FL6qz0w+judxvWPpdLxb2iK++pUhPhbqKb1U6xQ+Ef82vidCrj0j5tu91fnqPcz5Ij6DIwK9wTGHPBpI+r2AW9s9vVfkvfjyY72oVRI9HdWevV5XWz5gdzc+whFjPEQGjz2rLUu+eKgUvhW6Cb6rlQu+qKNmvc3/NrsGHxs+wiOovWPnhz18ywm+M9J9PX5Zd73khd69dnEhvvOhnT2BZVK+gmHDvcdLTT05Fj0+aEVmPbD3hT39NvO9sgpgPM3NMT4kmgm889UoviXq9z1ymcm9sEb6PeyFjT0skEg9JZEOum1pgz6PU1S+yBjovSNF/b1Nhvg9Dbk7vt7uRj4uOWO+tfuQPmqnoL2AYts9YFTqvCK5/z0CG089jmtgPvrpvT3S67O9B7kjvgh/O779+/K9oIELvvl+BT6n7FU6JLuXvAcjHz4tMjO+yuPnvBZSDz7e54I9a8G+vb4s270R97i9pcAGPuMHXL2D026+BBcDPtgMSb6rstm9RDQ7PkUmgz3ewSC+SQGePag4Kj6zZkk8RqJgvRU9i77HDLm9hDFqvpSE470xTFe+DS8TvnfKp721T8e8PUmfPDVNYb5IYlW9pvJgvljPIz6Koyi97YmMPGPzJz77JbG8ZrQbPJ5Crj0NPWA+WcMjvg1lrLzkfI09R/I1PrHw2z2bOEW9WccbvuwYRT6Uor69PKcsvh7imz0cp0a+GGcBO4woPb6JG488xBMfvmYVBL1edkE+wKEwPhbmLz3YMyQ8yX4tvF87D73eI4I+Eyl0vbCfOzxBO7Q9ZPANvieOVb7fJHo+LVwYPa6oAb7ar5U9ENMKPU91vr1/esC87IkgPcYPYD6o1DK+VdJfvU/X4D1KdTu+AEervV4hVjzr8HG9ljTkvcV7N74opWM+jKloviyaLb4cNJi+d+8buzQ48bygUi2+nQp7OvQCHj559HA8Y0WGPLZSobzW4nK9IWW9PSGcWb5mqbG8kS34Pdp9kT3OyRk+QZEOvW2Mgj5/dJk8C8TUOntVxLtJt1q9eXNYPqdRsTxKGDA+rAFGPX16ar0YI8q8P0CAPnj5Gz50a2w+9LPfPAn8Cr3wmYW+zFgOvbf9PT6kOyu+L8Q7PlCI8L39AKA8WpJFPlX9YbxctSw9T0aLvU8TYD6N7sC91Gt+PgKdDT2F8/s9GeWGvQHWlr0x5Fw+kTutPMgXA77Gqxk9l733Pd0aIrxtyK49Av41vVHLPL3THlA+TlpEvhWoMz6G7CY9xpzgvX0JDr4Tb4i+4n0XPUVA7zybvsi8FAU2PXdVCb49ci2+NXOZvd00Fj3SYtg9SsQwvjhyYr2NMUQ+jdBWPh15rjyWaQi+sKQbvqITFD7izxQ+71aAuzizH72FUNQ9JZqKPHT5bb5Umww+su2nvdC1CD50bKQ9torkPXLEH76eAzA+d6dOvOT7AD0ts9K96FUmvmYoOj5j4wu820KmvUDGGz2Owz4+xTrDvYKm1r1Zj189v56dO1kv+T1rINw8qnaivUHNFD49XMS9tHw+vjVLGb2AoGg9Tb62PSJHPj5bxTo+rUaxPbSLyj2/BsW9j+zUvenrHL42r969E4kXPmtjsDtYdnw9wKA+PmdsLr6lVQQ+edPdPdHjSD1R8YM9OSfxPcb03T2NkMa9MGY0Po4HYT62ucU9rBQCPlLICj4JoWM+wvRDviviFL0QVJ09R1Ivvm8ieDzWqQA+bz/RPXy5xr0Z7wM9eggQPiFsUT6O8h09LxXNvfWAPz0Nkma+0QxaPnpfsj36b1G+BTkWvqUXUL7GBd894visvcDkDr7M6mI+u1n/vZO7Iz4YPeC9f0pZvUfRxzzExtk9bRNePv2ZPTzlLRC9T5eAPLImU74IAhm8OiO9PQkPFb4EC7U8QAYNPl4l3zqfh1C+77gbvX60gL2qqgi+I24jvm4LWD5KiQs+PMGGPtMu3bxPU/29uPjVPRoiPz2+fSK+J2tePvgxXL69nR09Rj0aPe9i+z1feVa+zJlFPjt0ETxO4ha+ODB+viWxBz76+ie+z+LRvajxVb5IJhU+qUDwvHlWKL61aDe+bUCZPXPqgb10B+O8Cq5ZvjLGJb42/Va9z2d0Pa++RL5kyMs9KmM/PtKeLz5lG7E9MsZYPeWyxj0n2+w9Y7BcPQrBjDwc1rK8wAL4PNWBl7iZne09L2apPClNhL3ayj2+YGG0PfwPvD3CJiq9Z7kHPkOWYr6bQ1E+ifsXPTiiZb55FSa+m0TBPZ6bKb7cTjC91XjEvcKmV74Wfnk+eKaCPlw6qr08OiM+KQrRvakRIr0j3wi9LFMyvv1NrryjyQW+GfUIu+OfQbz/oCW+KWp0vvrHQD5+ERk+EncGPir6Qj2QmAa+e29gPuPHD77R75O5A00RPmaK8z2/rb89kx/RvUK1Ib4omTi+gxDWuyZdJT7skaw80eaCPnaPOTs0FhE9/gl3PrGVEz61Bza+g6apPdKz0j0bT4C9SPjLvI/BFj1H/Ye8qN9lPeP6Rz7JhEU+HzjfPfr6GL3kQb+8bAPzPROIeD4T4Bq+f0b4vdUyPr6SvZC9S0pzPoQWk724e3Q9po0JPuws+rxlaba9SnnrPVJGbD7fPxg9BX88Pn/vtr1nNTA9+jqfvEGc+rtdTQe+WO8UvJQkQj7OrFe+X9aLPZfPSL6fHV88YdcbPgrW3j0fS9M949kivpJo2z3JyyC+DxUNPhUtBb6akDo+rssNPd++zj3BDrk99Rr5vVrKSr7iZow9ZZhxvTXLHL1UMjO7ljyIPE1fAr5zIDA+q4o0vCMJtL1XaYm8Ro9Vvi3vPb5iOQ6+8Pk6Pk3M7z1kLzq8yZp1vkKhqz0DaGw9sU//Pcbkpb0sekK9ekIRPhg6E723JDM+qIIzPsMGVL5bWA6+a/yMPWsnWz6AeRI+wB6ovS3skjwrRVs+4gsiPg0ywj3p6RY+TFUvPhdfGL6eFwi+5FIePvthGD4KZTe+aCwPPUcAA76+yGO9uRB6vhOunD21Jgm91XCCPfXr3T0TEBo+qeE9vhv0Ez42hFi+mIhEPqm1Ej5R+lI9RsE5PjWl+z1yEVC+DBYWPgSVOr6sfzo+H0I1vvhDR70vUyq+FtPHPf6eUL6hXpO9ByYwPLGfEr4jVIW+3gtCPqbi+j04JbE98V12viLRar6hWU++hTgUPrQqjT3d2kA+VC/vPDthpb17S1i9KNsnvoJnLT7vVQi9F115PWFVRz4OxKG9lV5QvrFGnz1Gg1U+HGg2vqDg4r2ZdQI+gt/GvYT3BL5e+im7PKEYPo0TG733kkq8WydAPnLHwL2cZrY9fftZvlfeFr4r4TO+4V5yPm06vLqSYSC+Ak40vheQBz05IJe9gm4sPuQEkb2niRS+1DnqPCKMsj0S8j8+3uamvQYAX76IFzw+oa01PnfO8z37HTe9Uz50vL/twjuDlPA8sJMBvtFCMz7ZuNU9sOqKvX8bn72Uixu999+Mvn54yT2Tojs+/cKGvfOzZT1GSEq+A+xBPmDsr73nhbC9bxf4PTs6xr0tAwY+LjIBPsxEHb6lh569m5kOvlw9xDzqClW+xFBDvjJwm73XTME92CxIPn0BTr0pstI9U6HLPeATyr21uai9khqOvcfHGL5V7I09+5GFPfPEQj6XMnO+YtATvQRICD1LEmG+JDQCPvtL9b0b+8s94MfhvPo/azx96bA9OFscvtZXaT6gQi89ObNbvparOL5EBdu93CrOPHUFR7zutA2+DJAlPto/5r20ruS8npbmvShJUT6JxKu9/URBvPUrUz4gGLo9ocx6vrYJ/72Q4BK+O/IxPr9pIL5likM+h7s6vt6jeL0AAAAAAgAAAAAAAAAAAAAAFrMLvALrEb4izhC9Sz2ovvjBS75kDOe9MdfCPqrmUr49tGs+plHZPp7YfT6fRDe9/yWLPskn2T1dae8+qFYxPUJUeb7NvO090GaDvRmMUryZTg4+hgZavLlTV77rXXm7hHOuvqdlgL0a9Vk+RRKBPu1zXb3AqSa9NSbwPCAaJj6vc9A8OOyHvuK9vjtkUDo+ZIeyvJs/Qb31hqQ97rBqvePyMj5K9WS+wE81Puf/kL1KBJi9nTcYPvs5Jb2vnQ++YMnAPbmRmz3UROE9ktJZPYDstD38BNs8V/mOPmRQ5L0y7o4+MKkKvro0j73RoBy9hZNTvQfADj4JUPO9YMeVvtWyCj5/TdQ9Y8FRPh9CUD3XyRm9NoUnPss6Fr5rarq61nGDPu/ZtT7rrkw8qf44vr1t3r2llWu+WEUbPtEDzj6yw7I+WBO/PVxvXL1b3y++pmoIPQ1pir1wvR09ZfF/vuK+KT1eovY+P5WavjHrvb204QG+45DXPs04V70fE8a+QaalPn/PeL4k/dU9wAa0vLoDTL1FftI9ZeSRvmvm7r0G/qg9dZyNvUQ6PT55wji+uvYTvtxlED4Ixv87Hi2EPgYXtT3Ld989Cy6jvRckDD44LSC+Wi5SvLI3iL3H6qU9O3ZbvoUCTb4WfRi9KupbuuuVI77WY3g+GrZDPmobhD4h4Yy+QUUJvNBIxb1YXma9a/hZvIViNL5ClZI9vsT8vaZsyTwh/v+9dqM2PUlCfT5AmVC9vDEAvq/B8L2UNrO8jYeFvjjsyb1amBU+hE15vB9IIr7f+pe+hFwAPi5aoz1Cv02+Y9yXvbuBsD0s2R6+yN1WPk+L8jyHo5U9Jp3FOj2KMb7z8WE+BgyJPm9QajvTc9K9qsOPPHxdgj5Ab4C+BAq2PbPuVD3XV/Y9seK2PdqwPT5WZcw8cLYTvhHmSL6cwmW9WiAEvAslMz0zBJ++cqVCvlE6QD6lyfc90KOVPhOfLT68DTi+bdyrvpdOqz2tt3g9QUhlvrcJzT1+5Vm+SjkmvnupeL7bpXs+A0eCvty7YD0aQU29bnzdPY7bSL2xYzY9UKKuPp/BuL3cKYw+lVNHPczAsr4jlgI/GsucPZbAuDxJWIE+l2wevZN7Ez7Fy40+a1LnvJSVW730JTq+XzgnvtnB8j1XLEK+bBS7PczgBL8H1R4+5YuNvjhl/Twufbo9M42Svb+uV74h4FQ9+AGpPhiKPL7qMMW9fKaQvcN7CL01nX8+nYPXPRK+tz6ID4Q9fSf3PSeEg7yRjRQ8m6KQvfv0Eb5m7I++dxUMPtTtib5ZSQi+XUZ9Oq2BNzwM86s8WKu/PICIu7ybjfU9+LbEPDHLrD1fA429v+SAvYc5wb0J2mM8xaofPni2bz0raY69foT5PfMoFr7cIou+hlBJvj/eqr3pbDO+rWyUPnorfj4Qexg+qxS1vZGTjr5+xaQ9pG2NPYSoLb7gZfS9hFuCvsyXkL0RnCI+fiqpPm0+2DwBLbi+CgejO6j8Sj5dUNU9v60Pvomd6D13/zq7FS9JvjKE1b3xizE88HmUPY1SO74jsQ48bx2GvZcyF76B6c+9D0K9vvouHb714pe+abvqPFS1q70Vu229kJ6PPDmdor1gZ0I+2eQ+PuKP9D2Lo4A+myxDvoFKm705a2Q+gEtuPsAGg75y93c9mMOmvnBrYj4Jfeg7zF2yvMGYEzwkdvS9Gl5bvnZLFD6RkSw8PYuHPnby873D4m8+UOD7vTvYfz5avz0+/AXTPUOl07zAGAA9GwWjPXJvCz1+0EK7mhgBPhyPor5Hy1Y+LEBgvgq2Xj7FJLC+ipmNPkAqNr6VYn6+e+6tvtjALr4nbbY9QYUWPmw0QL5lA+W7ChHevV98F76c+cU9R7EpPnlDpz7OqLY9+f1Bvgmdlz6BBvu9mx9wPWTppb5ntDs+L76QvuYmU7akIk4+d5FNPpUAe73xV4A9+f8Bvplr1zyep3m++6oWvAfaLT4EEkc+b1u0Pv6xHD615yc+zjePvp6AcT2C5Km9hnNcvZnUM74ditk97LJJPlHzeT4/J3c+Sx1qPmX3aD3Mc4Q+5qSNvnFiML3EZ5s7J+h2vpySOL7FQ+G9mImCPjJhSL7PkkS87SPUvBDxRD33oMY9ubaDPtxoYL53vUC+h1qTvaObtT2GYzg+RctPPnp91D23nUI8qAI+PkC3GT4Fe4K+pstDvn/cE774kdQ9BW04PTIIRb7BATa+kdhGvb7irb77pHu+PaaCPnKrWz6LODY+I4kGPvCO8b1DJM89+J1xvmeg/z3xsoo+3DPPPQGQuz6Q/328NluRPcjQQb249dC6lWTLvWEkN72dV1A+UiBAvRX9Cz6pBZ++c9PCPkAPeT4tTBM9zkSevqmwbb59iWS+AHVivloADr69qTQ+0XCLvXJbhT4Fp7Y7fTycPc+qXj7NxwY9ZOoEPtWxAr7NmZs+NHgKPeBUCr6aA0g+KRz+vfcXnT4tzve934fPOdDaML5pphG+jMaOvdZ6/L2r64++8dtHvoP1Cj5sgKY+iLhcvdOkQ74XkHK+zg4evirlI72jZRQ+8CNQPjtZ+z2wrnS+CesNvQ1skb7Ixhc+p17ivXDa0j14jzS+VoaUPegEFDvKV4Y+/R4ZvlmjWz5rTxq+1pA7vmr8gb4rxFc+G7eWvfBohj5k+KY+6/+uPp/M3z2eBDG+C7Wavm2xhT2HnNY90e7SPTpXXD30Z1Y+jb1vPpb9/T0cQHk9Z60FPpL8l7x90lq+IWQPvi6iEr5bcQ8+kaoGvlrznT0vXXu+ysu2vcLGEr29XF2+aj8bvSoKJD71xo2+qlifPZ22Lb5Sthg+D6ZKPpCpEr6jJZU+cHcnPpnQtD07MLC9uIpePqFjtT3/SHg6isGfPfuHFTxI7oC9XrxtvvpYrr5WiVG+meKFPiVpcL6a3WA+VC8YPhyjGDx/+v08AqL9vRooyD066xq+DMe3vXYIlb20Gp66h0mGvaBO8D2dWVg+6DYLPrG9D768aAy+g2xkvvyLq73kc4495e44PWLyZD2A/mE+SyP5PYlkKr4JyXm+N/eDvndRBb4POLS8rHdavT4sqjrFtbY9zqmzvQV1Cz0QsYs8fz5dvThuJb7JLQc+FKuDPrmOQj7Fmoy9VL1XvpoYCr7KLgc8rb9gPn5Gjr5gOKu9MmomvYtCW77UyAG+xjrnvf9jUDvaueG9urSTPdqeXj7t1YG+wH+hPRWNYj6l4bs9bHcevmXsBD5Y/yW+RnMEPY+KKb6hOGa+3a5Tvi63TD46DkC+Gv3/vcrN6DtIiOG9ZDz1vUnSi73jTFk+DBt+vvTOBj6u7+I93jhSPXESAT6tIPm9Z02OPSQ3mTwqx8u9Zhl1vr53u707aHy+eoUKvupRuj4LoeG9NOiYvT2lUD7bOxQ+Y5+OvWRslz1U8BA9NhBGviMhZL51cEu9AZLtPUGyIj00hii+Lu4kPqGtGD3RwVS875b+Pf4Lvr31G/s9W+YtPsldib5R9aY6ROSYPZ5ZYj2EGQy+bykmvr/xWrtz4Y4+N9CAPnM0JT52O7A9qw+qveEVZb4dLKA9Rj6kPQi+pr0Iqiu+J9OBvt94nby2vPQ9A+wSPiLazbxknjM+LZeEPgKbAr4ZEYU+aspivvfi6L1xJA07JweUPYWvMb7i/eK9/EcaPr0pEj7wqW0+uGkHPJLbej6QqIU9yftxvt+1R74ESmY9/YW/PfxVbr76J4o9d0wyvkvwnL0N8xS+oOu8PeWqgz18aAE+3QygPc4QmD2vVBa+qQ7dvbLnob1E5mm84XaKvpXUPj5yp+I9wc3QvdzvbT7Z1wQ92lIHvlLFwD2Dk4u9zpKKPcPDHL4lCi0+FNyvvYqh/7xGipi93dkKvvxhzrwg93Y94azdPaJRv70rYoO9EYbePdfaCj7dcK2+JJB0ve7Ve76caBw9Qt8PvmceRL4pIR2+d2mgOyTiQz5mFck9oJ5svg8AET5Lb3895z7DvKVsdrxYkZM9f+IiPvKjKDzlrRK+YE4KPshLp72PypI9lCqnvaJDez5Ee8Y9JfJavU7DyrqYjHo+28o0Pjvofz1s4am9fMMWvhF80D0FDRQ+7jQzvWdQQ77uIbK9Xhb/PZZhMr7Z6Os9Vp1IPRyWFz7lkVY+5ChuPf+XLb0ARE298D6Uvpdb7j2UhZI+O0S5PW0GFz3nPeu87gYlvljw/T0Yyw4+f0IMPmzhQ74xUSQ+cN9fvbFnHr4V2G0+ICb7vRYggD5kOh89DpiBPQU5Dj4VjQu9TKCRPl6LejwrPAk+8ZrzvS9e7T3n7zg+uvu1vbBRxjrUyRq+q3cLPaffc77OEGc9XOMXPs7Wqz3IwSI9JFCfPFa/Sr6sf1+9oTxmPpU/DT3NI4m+UkQ4vhHZzL1k88Q92WslPpqqQ76UY/a8svYmvn4CGbyJuWE+ykaePIZXwLxZIH6+wcK5PV6GIL7uWDS+n2IjPrZZEr5Z1La9KxVjPgj+Gj4im+67cqSHviaHKL2bgk6++iZ2PtaT8TzfuFe+H1MavunSlbwsVjQ+sjt4vSsfPD21sHc9NHVGvkAfmj3Zc7Q98nEYviSRGr7muG09rJ8svtsLKb5hpQe9QQTcvb5CSryYFF+9Dkhhvg8OAT7dPMy9LX+LvblYkL5F7Gq9c6nGvW8cJb5z4Ru+F/w4PmgrR77XpVO+XR4+PvRw3TwauzA+dH5QvjA8Hj55Xi0+G+JpPqvB7D3Re229m5tsPfn2RT5aqY+7EWFpvOhFE700BJo93HLTvf7l9T2tdJe9gC8UPmORPb54t7C8vjkivu5lRz1kt5c9AJUbPjeCmD2XZ1q+oWw5Pm/8ar6/ASi+FGCtPmzfwz6qW8K9WC90Pme8dr1EkS69qLl4vhgqE71ZbCq+ZKJlPkG+urxSEZ6+PqtHPnzn1z3s104+SHlGPSFUhz6cLps78m8gPkRpI70mGAc+vqvYPc2zxL0SiDe+Ft4IPohb0D1fmZ0+DRQLvsS7br6eshU+ElTOvTTWKb7+Q5u8DGyBvpy7MD5PsC4+LiGHPQ9p8DzMsyU9t7YFvTzXg7630pi+YOEtPYG46btWtP496eSSvj4ojb7n9No9XKGDvigy/zzojMY9Ni7cOx6Z2bxp+EI+S/BpvexxEb4jyr899Wwjvpxq9j0WS+s9xdG4vNzTAL55vYC+Rn8nvhpPvT1TRxq9BxaAvuD6fzwB82M+gX4jPsZgMj1Rr1I9UllHPqV8hD2U74E9VFNRvZTlFb55wng+vmoyvr0DBr4JCmI++tHuu88Nl76iX/E9IoDiu6BnCz4WXd4920CCPvY5njyyFmO+PrMOvpcbnz1p1hy+kI3NvV6MtL3c1kI+hk0vvkmC1D20AzS9zwCjPYBEHD7h5vQ9qbJDvg1nwr2HUem9Ke3kvHVzDL4Ahuw9BEGLPdrhDT4QFTM+pb+WvnStAb6j05++zD23vQJ0Kr4SzbW9qFcWvuHAFz4osSY+/bBjPgWJsz3R0x0+HLIQPrd8lL0hEDM+d0iZvRzEkb5p1Vw84or4PRuJvD164Ym999ZDPrOY7z0c3oA8VFHTvWjSLL504jY+syjKvczwvrzc2P29OdyqPZ2OkL3GeXq9uDPTPYYZbj247Zw9jnM7voLQpLxZfY29ftPHvL6Arz32Eoa9uX79vTwnZT13Sca9dwuEvg1zQj3qX0w+rGNCvs3JeD5sqWe9oiJTPidRmbx/hfg8TfpVPsTu/j1XCDW8G7U7Pg8xlz3r35S9UDi8PcvuyT1wVVC+svpTOyahGL7FkKO96jTBPZhDJr7b5n89SnUzPn+LTj32dqY9q7cIviLdYT7uNVg9JjN9vuClfj3jhMc8g8UKPpGN7r0y04u8vD+MPull4by0EoW+pA/bu2lwFT54DMw9QhdeveKdgD3HCj4+6cbqPKpbaz7uT1a+QtiPPFX9Zb2dGyu9txhXPpNfFT6if3a+99QnvhR09TweWPG9rTVBPr0xKL4N0xY+ClLNvV5MSb7M6S2+LLwbPoPPjz2gK7090DcFvlLDHb4meAq+aeYhvvRhDb2y68c9TonwPeNVFr7SoXQ+j9GdPko1NL5iUqa9jRIgvsltDr5xClC910Quvu79Dz0jd9q8udqTPHrGYL7UOqy9ynUVPTdYCT6GUkW+5pbZO6i4Xj4/mB6+zzNzvuyCZD4Vliq+nrsSPnJeWr5jJiS9sFENvbgvVb6kNw++gP2/PfViZz1qv7Y87m2GPQ9lzDp0LDC+tkfwPevTQT76nDk+DZzvvVleJT198Mc99Yy/OL+yjj0DLuC9DpFjvogbdz4QhyO+Ln5GPmtHm7wO7sE6nApSPhNuDz72mKM9QFE9vaSRBr1EZQU+qhBwvthHOj6ihQE+DC3YPA5TOL5Ntwe+sr2ePWU2TD1bW++9YthhvXsYXT5paSU+sgPnOhDg0j0fFp28T6gnvlqBxbrsbis+SWA/Pi4vRz6QSJ+9xlJ5PouQBL7L9LO93QytvTGk3r3pjyi+SLcEvs1KgD2lxAw+y+c3PnqQUr6cL2g+Q8sFvugpwTzIQKS9VAO+PQ/NFb1hNUU+NywPu20F8T0J7Bc96utcPmDIhD7IMSa+AlUSvryv4Dz2U4S8ffG9vCTnOD512fg9UdjcPVpPz72EdqS9T8xNPUjlGb6O2B6+kiMDPr6HEL5MFmu+0tEePvJfZ74coUg+9LpePXpr6LxrE12+mXqePToXBD58zmg+2zs8Pr+PML5WrO49mS8vPjPiTz7SJ3w+5tRRvtS2iD0SvZ48Q8HxPaPCXLzEUIu9+0lpvpEQIL58Tsm8Rx+TvuljJr6xkz2+AUY9PhdEgLxjFzs+d8mGvbXqWzx1i8u9aVxxPNYUhL0UpWA9Tlwvvs5wGrteEJi9kzOsvhRFOr0J64o+BdvkvaWIDD7ooZ4+BR1KvAe4cr3L7Io8DgSrPXYs273hR/M7eWKdvR5Vrb2Q6jS9NpUFvqCKOr5CPIA9+c9tPcQSkr0ndJQ+JqItvsBaKT6V658+cwcRPieulL2NBIA+AOl6vmQrjb2HdCy+flQ/PmpXBb6YxRY+WMSCPIrMFT5FLQ2+paKdPZ74Qr0WWmA95WaAPA4/Fb2PFSo+oRMuPlvb2j0JNnS+MvXrPJRnSz4jZdw9N/W/vT+I8L0q2eY9Qjcnu8yqJr5poAU+8bcWvWcZZb2KNki+xrELvo7OJ71vfcK9MfMQPRs9Cb4GIL69/hITvhK1A74lhB49cl8UPmGnhD1PsiS+cXw7PuFn5L20e0e+v7Nju1Pr4jzcQ5s8kSPcPS45Pz4S3y8+ugIJPjj6JL3NaVY+jLIPvh9nOTpAoUq+SF4XPiM1Dr5dP0a+NDZDPooS9D1tHNq90NP7PaBu2j2Ce2W+I+ESPdLeST6dDse9qxvhvfCQajyk/0K+hK+ePZmFdz02kcE9lAp2PYWTJz4q/1u9zBMUvpfRJz6zdCs+pQgLvu/dZj6zp5I9T6CTPYpEoD7Cxyg+TQsbvfxXXTydnzi+b5gDPdmXGD4IgBE+U/V/vpSbpTqkNF8+nUOMvno0lD5XHbu9OsV5vd18mj48Ot29vmV4vtM1tr2z4yq+VLsjPTWcoD6sVwc+aTdkPOQV3ztRxW0+X2RPvQIn0T15VG2+ujp5vv+1L7z+xnO+XtpRPa5Xkz0oiL09x2siPqEBjL3UEzm+Qc0pvF0MH71EvWU+4E6VPCYHYz4ZC549AEk8vZ+Wpz27+EI+JFBsPpkaRjz/Gba8DaWGvhGBlD7FoZk9l2nKOar+/rsMim8+Z1crPnO7ar5yDb87hVSnvqz/N71F1qI9l9VMPRgRNL6Nn2C+rhHmvBT7iL1EBqA9ehVJOvRrIz40KT8+3DBkPgGD3D3FK1g9D5vDvXL38b3Eem09zLvUPUakxryIJjy+ie1kPWnpor0neA8+W9DMPaBbIr5bRMq8b701vienF77Eegy+hPpnvP9YUD5dPIE9B6jDPfi5xT1AQsA967dIvoDn5zzsJpE+sR11PjJrWT4l9Sc+ZCmAvgsT+jvAtFe+yaJ2POd/ub0o/Hi9l/A8Pu345TwRiIe+A7kUPp3T3jx+fnM9fYJoPkcagT3UikE+GpIzvlzBWj752UM+9vtCPpKdYL70RSy+ed8fPj1MGr6FXUE9Y2A2PFIzGb4jilq+t4NPvP0xB76Tzq09d1nHvavqfL0eLyY+sYT+PeWQhr3+/LO+WMSbPbd8kztt7Ms95+aVPk1aJD0cbNW8gRqhvMewgr6mceC9VsmxPgCLlL7h1Ac+IjULPpa0kz46mmy+QvwGvgl0xz2ytWC+sY0EPoB+GT6OL6G9abQ9PmuS1r3vyOk9emPUPeL5aLsBJzw+wOszvFHtGz7s6C674iKtPEHXpj6r6q49tTCevWl1Tj2MoHG7dZaLPrF6DT4xhWK+t7uavum5CL4oESu9OpKNPuQh1r3DCYu+8OwrPWKUDz4Qd4m+U2VPPt25Oj7lsv+9KOaovadLhb2KXxE+Szt3Po1IBz4fU/49v7yCPme7tb3fQzI+7lIDPqfoSz3UIRs+tc7dPd71GL7wUpY7yDREPK4XHD5y83+89H/6PEsnyr1jRpa9nbM4Pmo1PT22IxA+NilWviyoALxBJec9pUszvIIUYb7QxhW9HI0PPWPvWD5MRS2+8XQtvG9lZ71jQjm+pR1AvtDbE74TqRI+zJZaPrczVj5669q9258TPSHZvLyDNYe8rxFGPfDE1j30wTY+/bI4Pq2vMTxkNh8+puMdPo7WsD3p1SG+tlgQPTdKYr7Nb4Q+uuw1vnNvJj5q6wy+IzgMvnMjXz72Gte99/XuPXPOrb2MgCu+QlqJPRyTSDwhnZE9bPPxvfGORr6ADwK9L1usviRjGT694r+9XJeCPa9AUr4zsxs+iNM+PktSmL49uBW+slJQvmJowbwLxz8+hXW6vHFZiT1nmC0+nvZTPBJFFj4+ayK+vb+MPttemzzjWxu9sv0qPo4kST6OjZI9PXb8PWor/T2lns4881erPYD/5L3T6hK+fGvFPONCIT1tz44+zeZePuXmhr39s108d/iqPXJ3lb47ATm8WWiePaNgy73PsTw+g01PPq7kE7tG5Ay9nljBvSIvOL5/Vog7ddS8PU/3TL6bSX++Js/2vW4Cij5x1zI+mnx9Pi92bj3+eVA9XzAjvhoF1T0GeYo+tY8JvktxHb4xGgi+wMToPY3JUj66aC2+BXQ/vh/5ejyD0D0+smyWPd4+ij3X8xE+9km+Pekz3D31gG89hsAZPJErlD3S0fe96GyGPSE4UL5+CCu96KqOvZFVsz3ALVS+AcYVPjvLNj1dihy+ELTpuwFkt71xqrQ9wwmvPFHts7tiMmW9MfhCvQj7YL1CGjO+AFYkvqM4or1TJwM+MRywPY3M073qa7S8ktLWvTsDZz0D5xq9hYD9PWv0wr00l629f1X3PSsBBD2/zD6+RlrGvRMXIL7GixA+s72MPWlYiz4tQjo95PAIPoQ0iTykZQW+o9hXvqetIT6/q+e9HVlpvVgwAr7TEmw+d5ODPreeHj4oKMe9+yM+vpipCb4sHyU9FKsRvpsdSr6/od09R84mPejAC75Yuw29WjBkvixfuTtydNO9JslkuyhpPz0dZ4m9h2bZPRzA+j0MCBG+mGoVPuXtIb7bPew68b6UvX8eVD7e8O09umufPf2A0D2SERg+qpIRvmoZB74bST4+vwRJvjltvj1yh44+CKWTuKvxrj0hJBq+SjQsPlbgkD2xi949tQySPHUuFD4gFpQ+21kwPr2KmL1KDo09z8xfPQ7Fu7275GI9k0W5vS6kZL6VEgG+JrZPvs13sb0LoQ09pFGfPMb+cL6zBOC8DHNcPktWGT7zCwC+EusVPpDpuj0tj4q8SVyLPfU+bTx08VW+SKEQvmx0Mj6w3Me9RZLuPeZBHr7FtHQ+Ppv0vclR472fwP89yw4eOz1kF777iCS8bCOIPY6/4z15UsY96oDYPHI4mb3Pw1i+FAo1viTkBL4q5A4+M8hjPYORfL5zdci9dmAzvQWhSj7khWe+91XSPSt7hjxgTxU+3rBLvjWlvb32l2Q+QgX7vcQPlj3nRw2+J7wXPmoYQb4BULa9OX8+PtS5OL5q2vu9+CAWvlJGxz33oYm9XS4ovugAKr6FpCW+gwepvSOfKz5jWmM+j2xUPBdWEL7MLtk9bgIHvtDDQL4eUvC9WNybvYlAdb5HDhw+dfVEPidcDj25zw89YF6gPEOz173j1yY9vOYDvqFakDxIA9U9ynZVPn2/m768+ES+yIwPPgLdEj58V3e95UGPPWdgiz66t6s8nmuJPq3Lbr69Ilm9Zz9ovnu6QT1ZnNg9NutXvnA4ib3VrvE9Dvr8vR8Xjr5z4y6+31pLvhRLCzwf8EI91wWRPsWAib2B7UI+HSi0PX+lgT6z3MQ8fYUEvneMsL3xjlW+65r5vctv0b0mmDG+FZfBvM+0yr49zRa74eJOPvRz7L3B0HA+mT4xPnVsHL6McIA9P7cxPkSvTj44Ba69FE84vrc2Jj7RGkW8emaDPn5hFr7CfaG6V6luPLX0j71rdEk+Yv9iPsTe+TwbRNA83rErvnnxIj43FSu9Zw/svZBh8r3IHYO9ducdvZ8zrDxR2Bk+3Ik3vSq4rD1IR0Y+UT31vVsc0L35SQ6+tvlFvY6gybwZvyU9gb0YvovNVL7zT+q9GOYLPtbYAj396Wk9zhbRveJOBj0fgFY+S9ZsPROaJ764PxG+aWJyPj+ENr5bK8488CYJvmebWD7vXjc+BBMzvqZCC77O2v66CYcOvnCEIj6Dfb89NwPNvCz6UL6IXBO+DOpDPqhHPr76z4m9UKcRvpWJSr7AZ/g92p0mvkq12r1dKh89GcYDPrSfHTsLdrW78zE9PpEwmj1MYoI+JngRPuuJ3b2U6qc9+acUvnrgrT1enqG9De2mPl8xST68vuE9D2GcPcVIZT0aAsY9/7IdPrjGOj5SVfW931cAPTfvfL5HRZg8uJAXPZTs0D2YZfE7HT1fu4F15z1jwSa+cGRMvdrmzbxGZaS9WPGzu6LqND4k//i9dj5wvjfApD1iA0e9UEfavew6Er3IQhi+g/SKvpylFTx6G6C8IwErPoPIwL36iuM9Z7fmvU/YW7whW22+3+CCvZnRoD0Z+DE+vM8JPgSRWj77cSW+jV/jPan+pj2ot/w9hs0xPGldrjz4nPE8/nPvvT96Wb7uFqI9dQyiPMo8Fr5gx24+h3o6O7xPGb5OcTU+kn0lPqegoz0gVnC7URwkvrHzQj5kV9G9uYU0Pq3nYL5aLZG82AEOPRuTuD0rQd29Z1IAvYPOW71+7Cs+NJsWPms67L1co4S9e4wxPlv4Eb5IEtC8X8Q4Pk57Cz2cm0O+d8o5viWSDzzwd069wAhLvZZAJb73tn29p/fxPWyEDz0/NuQ974BbvdaROz582MK9yOC8ukeH3T0hl0Y9ErECvnlo0jyoc1C+FE0+vr2uNT0s/ic+ApBTPgTOMz1+x6g9TnSTPfnnnj4Bgj67SH2JPauKIb7pUVw+GrM1PVrIuD0ushU9lGPkvLz6sD1aI0S+apdSPbe3Ub2KmOS928dBvBLiHT5tUp49xCQNvm6H2T1mCTg+FIOXPpwWYj4tCae+hSFBPUPiJT6Djqa98qNUPkglXD5jF1s+nbb1PWitHju6s4a9XEUnPvCZqT2aVRC+qagtvnCmqr1k22K+PHeXPZtq4T3vW5A+L9/TPYcfUj7MS7y8bOkNPnxn2D0rrA6+oQMcPqwoqD2joTK+xMruu1IPeL2sywU+2ss5PXWsTD1r8oW8Lw3uPbZCeT4jhGI+buYsvLpQfD7LETy+8YEDPlc10T0+N2C9vaA9vj4AiD4h+S++uLwRvj4aCb34Q4I+LNajvRjY8ryFWxU+/XIcPXQhaD4s0tc92MYavlcJt73g42E9ZEZTvrCFBb7f/Mg9CHo6Pvvr1D2y0rK7FaE6viXhNr7U32S+OmUFvtyy3r1S/jE+4a5mPUIirj3okKE8D9sOPh70Hj3RdBO+9zPlvdCBfDzbBDS+UGWGPHlim70qMtC8AlLCPYG1BLqmK+69HnniPcAINL4CZjy+DNSRPQUk2z3wDjQ8xpZivZeHBj4lXp894tmLPUM5Rj5NQQU+RFvCvQwG5z303rg9ZgIVvcISAr5o5Fw+c3VTPoIUMr7krxC9L+YYviHBKr2duX49FL1svosxlD2npRA9TP8tvroEfr6QxWS9gErvPdJ8D71Roze+Q/dTvsJUm72Em5G+iVexvNbqJ73XOTg9VPOpPsDkYL258kQ+nJHmvflpB72oPEs+JYeLvZyiGj4OTVO+Ob9uvqqFCj5EdIA+hOj4PRb+Uz4EyJs9dgZMPlhdc70f3XY+iskLPibn571h8Uw9DshsvQ/+RD21J1Y+kMvHPebfFb1+9X4+7TtXvkfK8b1DeiA+mJw2PjEPGb4HWyg+zsfePDXQ3L33WTC+Ah0gPrJRrr33iEG8in9qvZOJXj7fb3K++CYQvtaKVby1tyi7LEievfqpLbwBYCe96eEHPjQ2Eb4M5rm8K+Y0vu1Udr7bDQa+sqbyPSgVgj0JRRM+r0owPm4/LT1dMb09h9UGvgjtFz1KoVy+555yPSFM7L1IDcI9BXA4PgheGj6jXBA9j3EQPigB5T0c2CI+sf9RPcmnjj1+7WE+irrRvak0tb1zhXq9heRLPgnrAD3WFEE+ZN11vpWdPL0jYVU9UbE8vpgInD3j0xg+NS8Rvpi3Hbwf4C6+OJz7vZzFir0cun6+3Jasu/fcm73TrN09CzkUPg5otr19Ug6+0lrtvdd4DD3gl+29t+ElPhNho733oNM9gkUaPseRGL683Va+Sa2HvVekKb4x38g98XcXPoJnG74Ah3S+log6vR5XDz7lFi89O0yYPETGb75CAqs9fZyjvvsIbj1Vxgi+31sIPqvQs73Odec9f3RxvgyGsr2SnRI9/rF7Pu5kOL2cb7M9OOK8Pfz8uT7x8yY+k0KVPXdDP75hpLG90Qz/PQ/xIj6tkBM+Y4IDvg8wOL7VzUU+3lT9vUNekD3s3kK+lPduvo2vCTx0xIK9y52uvSebAL7cTBW+kXH+PTKKmb63rRU+0ONuPiZiGzwn5S0+/NcZveEVkz5BupY9l0cMvuhhNz42YDc9U39mPlCrRz55YHo+hrGgPNr3mD68zOK9ognwPQwbej0zS2w9rCJ5vhXlkr46zBa9EUkBvnoWfb668rA97zQtPgGHBD4vf7e8NpXnPDh1JT12nfq9ma70vdU+B74w/da7NDzAPXWy0T1QPiG+c0JUvn86mbzQ4uS9Sup1Pq6+ib5ZxEC+x961PVZuPb5i8fe94asnPgFYbzw1N3W+xnjbPJ4awL2dtks93UKdvil6H70Rzuk9kt9EPk8pVT4kBwC+0Kvvukd6S75mFo86IDuTvUAIJ72djYE+S1Q2Pjvs+73a1go91EOgPe/+rrxWFBA+0Qb7PYdaMr5j6Eq+Q8slPath6zyMBHu+oKbNPdYvlz33KcM9qqAxPpsML75P2q29rJYBPu39Lz4moDY9/GSZvQe3az7E/8i93lU/PhhbHr6Ycc69U6oJPlueeL03MvO9TW6XPZmrqz1lnXA8oVpAPrjCrzws/tK9aYKFvvr9+D2PjGi+AF/5PRzQ8j2zFM69Bz2nPbg+Mz1y1We+DECuvpXudT66lCq+XTH+PVXwY76I7Ka7qMjvvV2tjb60r748o07ivEcD/bvQhpI9IA0MPacMAL5hX+89X4a/PQfJn7yMm40+EUAMvtV2WzzxLAw+/VZoPmD7Nj5kpsy9i/eEvTEuqb4kKIM+pkVOvhERlD5xINi82n66PSHvnb4T4ws+AelkPDp+zDtVK9w9ozo6vpn4FL6Dr6E+M7QYvchXhz7V4NE7PMchPqkrq75zem0++ZrrvRSKsr23nSK+AFiAvTLkSL6IAvw9B0QRvu2V6T1Cbw0+az6MPRqZOb70puG9bLMMvQiO873k8fo9CoV2vX7L7Lzoeo09ddUvvJoZoDzqmdu9Vm6APJaO2j0y9A0+GgotPiADO70EwSC+iWbpvYx+PTykXLs9KufNO5Qbnz1DKew9eEuKPYoNXb5e1DK965cRu7iBKz3VLtO9bGhIPskhSj7VbaK9HZT9PRUlyb1Gk869GdQ9vv3zEr680hg+ZlcgvpSZOj7Pwi4+KuccviK9F77Pxy89Q2JBPmMnU74v9A0+OOL0vYWWNL7HyG4+G+EOPdO+ar0Mtd+8BCHrPNiCsz18nui9HMDQvdqPkL2nmC27pN9lvrr4aj4EFYO8cDFEvuS2sL3hfI++84K6vbs/FD58kAw+IYGUPZSou77VkfI9sZqavgyCd75EaEi+K7/KvSbfVD6hUeE9d0HLPDeFVTxWPpU9+J6HvhXqlD3n0iS+G2JAPQSABD6cZkC+JY0wPvi4AT5qHzK+DTHTPB8swjtYosM8UBZNPgqRJz7uQoo+PY0gvqM/AD7LLIu9V27fu1U7B74kJ5m9GRwFvvKewj1mvCM+5rahvU5yCT4iaRM+yeycPJ1KRT1u9vi9v0mxPRD18D1A9yO+MS1fPp58Fb2OX1Q9kn/LOsFaar7j5L09z1VEPtZxQT72Wds9xuNLPo0yar4uZmG95uG/PCQKGrpSWi8+PBUKPtIkc77VvaK9avwWvaEs9b02sSy+pOZ/PUV4770Qicg9zatKPSiF6jzzGK+9v+NWvjj0uL0PTyw+5FM5PtGGj76EKO+8jP40PdZYKD7mrTG+edRAvtaQPz4+xoC9dx88vnVadr5yh8S9w7ZiPd+qI75aNVk9P8HavG/ZHz6ZyoE+INgDPdO7Or5g/wi8OVzYPf8aIL6yR10+DUK4ve/cJL63N/a91CUWPtpYZLwrKkS+qxc/vtlT670odl8+MNQgPk2Mkb2QJiw9xpYEPvG84z2fjC8+6VcnvQCYTL1Mqbs+s/5sPQ4H1z1GvYa+EKNfPdihkb1z8Si9U2I0vn3Hjr3YIge9d3tnPIrejz1V4709XXgaPcpNGz7wBGc9nW52vfWg3b1zkIg8j7eKPEZ8TD4r+x++Xs+jviO+ST27HR4+AKyEPgTpt71QKTo+BwEIPsETET4A1Am+3QzxvGINDj08Dee97kvUPCrs/bx840c+Rxv8vWWMEr4Wq4i9+EILvqGYWz5iQZm9FH8jvlG2CT5PPOw7WEcdvYoyPj7HgjO9CW3HvX0XHr3ZwhU+153AvNdl5L1UHPG8S+aWvIZLVr4jb4Y+FkOdvdberT2EMM88STWsPbJldL7sUwS+uS2HvtYZKr4TsLq96dwKPd+e070gjno+YxLRPXTAsD0Z0xG+Z8ISPvzd8b10ncM8WknmvZ0saL6lk0Y+ClgWPnx5b70lCw8+Ig3iPVQaYL0HkdS975k9vmopNz5o3y0+OwDNvUpsOj0WWY69bFcSvhMxur0HaUE+Br7MPVuuOT1NQWS+gSQVPg9oDT5dFPm9NPunPTW7jr3r2Tq9INFtPiB/iz2t12A9SyM7vZXXWj1qZ26++ZyovUJYg7zBSsA9VGeVvBdyJ76xdSO++u4dvg1UPT6xbeU8j0ndvYRETT7P0v09bchdPu2RET7VJCm+LHkvvjMjmTt/eiQ+ksUIPkGPM72Gvwi+ughbPozx8j320pY9oyzZvVhVPT4ZxTA+kjFvPnEe273hioC94yORvfDWO71aBRw8X2B7vb56D75gF5Q9+NOmPbXU/b1DOGo82Xw9PU6uCD7l0oE+kZduveo7WT5ERDu+5dl5vtKDaT2amAo+zGf3PA5fGb5BtQk9BSUGPqWVI76WSoQ9N0yNvuRElT1Fmpi9+eJpvYGi9r2G0Q++Ail4u68cWr6eJoO8OCxgPgEKo74aQxM+QdOMvpL+qr3l4UQ+E0lBvnX+973NqEQ+5JAmPq1zJT6R35a9bXlyuyVOAD4gxDo+mQ7/vXZ8gLu6+I29LfwZvaMUJb4sTiU+yKtovWRB2j308hU7K/q2uO6ZED7HVTa9+dO1vTy+lL04aF48EGOavRWs3b2L+pS8pQwjPoYoyz02wuY9nD5BvhbHsrzEp40+XDtLvpwPUj51cs89HHoyPvfi7z05rDE+tJnnPZtbNr7ZHTs9wcUkPoG9HL0kshC+EwRuvZy+0Dyy02e9wmsQvqo8uzxxFTm+zoP1PZONmrsmrje9Z8tPvJAG7D0yBhs+g7n6PVgv3z07rXK+feOJPiP2ez5q1E6+St5MvsQoaT3BMiM+iEnNPTllSb5K9TE9zT/du9NJ8L11kTc+FoqaPE4YrL3kXy2+OLU3PmQ5Ij7O9s69xx8/PfXrgr6FZGE+Eu5gvh9+kr0RXke8rjcoPjqy9b3Y7Jg+3/XGPlwWsz2RvB2+j2rsPcLqCrzAg3Q+UyzxPbZJIb1joGu9U1JCPTQth70nV7S9yOTGvZE8Qz02vVI+trKSPvj/xD1iEbk8rQBUvll9Q7503Tk+WV5FPkaBYz1ciJS91OIGPo5Qej6bmB49RO+BPYIS2j4VrWE+4p5vPTwvgr5KkZ493Y0rPl7oIz6jH4c8JgQPPmwK9D1dkQi+daAbvtyRnr3mSSG9byFAvsnH/DuQ5569VISSPW3Gf7yIdsK9kGugPglIHL7Svsa9rDqevg7Hm74TnDc+R2yAPBY5IL6X/jC+CXtEvX9Y+j3o/209SJl3PiU4Jz7uYY88HBO9vDXZmr0Dvja9gFosvaVCET5EHLW9m6PkvVkgUD5ohjO91A4YPhm/AD3LYwy+Ej79vcBBLb4XJP09bThTvsBrSb7505M9lsoBPmwQw70VGss9PejzPTpEGT5GLBo+8+I1PoDCC75eI/u9BZkHvJs8kj3wZ1++3v9RPnpgGb7dxy4+w40oO494zr3nXbm9CidmPf7i6b3mURm+xi1sPuIbHL6QUgU+Ct4mPawQAD4b/389fhZvvRMPAL4BIei8X6IMPr9qRz48fhy+dOZePT7CHz3johc+M3TtO7mJ5r06VIq9/u4hPq25gj5G1ek9W+zSPVtV6z3rjta7UN4BPcSKBb7CH8O90bhRvuX5VD7psHM9Jcg/vUiNWz0MrwI++vxRvm5xnb2Ez6Y9o/zEu0NVij1F0gm+ZtoRPcysKT3suY29VguFPvbZOj5eFEy+A1Stvk9tMLxCETi+9CiKPfdKhz1YUDS+4INVvJOLgb4v4PU9F6hkvIx4bD2KqkM+MUfWvXpglT78t0k+YYA2PvUvLz5gDJE9gPYoPLdDsr3vunc9Zda5PnRNYj0Z6hQ+XvVvPquU+D3ZVn696WUbvloRpD2DAQw+oNIwvjfq/z20bBO9EPOTvM+Ocb6r5AG+pynPPM1Bgj2WMUe+PCW+PQEplz394g++LQw2PhPGA767P+89siwOPkCynLv2mZg91RU3vqTq/j3Xyls+Vl16PjqDWL4kzhG+bOWyvdasc75RiAu+TqoLvp8Y1j2wF12+pWrcPA6MPb4PELE8rCgzPt+LAz2bYtq9npLdPQi6Fr4bikq+VN5kPSxxGT5/luu9Ub4UvHZU5D0cXzY+6OdhPQ7Xgj5BBD2+xiJQvhzGX74nek2+LnbTvXtW/TwzB5o9hZUNPL9JED7DO4U+CtH6vWdLsDwrszg9orALvXQPzT0sRKY9SEy4vO7gmL116FK8INEZvXLDob21ZZQ9SProveg3kr4DipC9CTW7PWQ78byTbzo+N5GYvpw8TL4iO+A9u428u9J8xL6+cZK+hwIlPtxBfr7jtRS+uR6cvQPTo76ezo09+m1DPWrOBr2WGL29weomPpvHZz5jq0q+478aPdENMr69+z2+6LgqPBFND766X8y911wmO5DH27ymOBm+G+DaPbE+ZL7j+64+DKyHvRizxz6713Y9BkWwPHqMF74FalM+cL4TvRVllD5SBtE9r+EwPpgnUj7Gx5C9x5P3vTrzpj6g8Bg8FgVRvUo1qrxIeca+91kFPmnpVz6Hw8+9CriZvmmy5b0SFaW+aMmQvjgx1r0aS16+itMxPiPicL0orXQ8bXNEPrcaY72RgIe87kGAvrGQG759vgk9XGDXu5+wnD3giC++HB0jvtAIQb2oIuw7Zg5Evc+6NDx6zKG91i2dOyuTArtpfGc+U0MQvtxs071gHCQ+ia4SPp0OPr4yf2S+Jmp/vVmzFL4TImA9RBkrPjsLpT3DgS0+LpatPRcghj0LwPy9RqEUPjoWYj081m4+1a1SPosu2L076qM910RavTufJT4Cl+I8VfQxvsINhL1uvCg+JBlCPdWbErx+MYA95CxRvs9aGb47gAe9GpErveTkY77yMkK+LRKAPvIvaT6/PUG+ahpGPIJUPj5IyC4+cGiBPQdvzj3WyM6967wavjSwhb7aHky9C0EYvptkaz59xiW8GRZsPfSr7z00pcW8bgQoPleoTT2LJJu8giNfPXzHHr492ms+LIuNvfQH1j1U0rw8zE0qu5GLqL3yzh+9bFXBPeomXT51EUA+4za1PPvc7L0xmpe+a0jQvQ4BOL0RPEu+u0hhvsh0c77zeSu++qaNvqD+Wb0V7sc903Edvl0r3rwAxMK9BJaAvRWw3L3hzsg93iRgvhH/Jr50wZW77pyHvRZEmT7yZzq+srIuva+8gD2rda09f9ETvFKwMz63ICi+WxOGvmrAEb0qi2G+nNVPPqSJPT6ISTW9P4VTPr/9Dz2j938+bPIkvZBHyL1boDS+xormvbHKeT3LKc+7hvyQPV5y+r2O0Cc+swo/vt0oY74IYy6+TJYBPn56oz04lHy+k9Qfvn4RA71eLvE9P02cPSmqezx5eLy9RkohPn9/VryM1Ha+r7xOvvNjEr6pCj0+fyo3vtP2JL29EzA+lgcXvgKvw70jfiM+Vo3WvYAOxT1qYw89tsnlvPSc/D1ZZwM+n3kSPrSq3b2gNAk91ucQPHZtgz0uWTs8rwkHPvjFB71Odu29ztOKPe0nRT5MoHi9HdZXviYhzDykxUS+Z8bdPc2NaL4cDS+9WUwEvVkJqj0tU0o+XXnju4C/T7yQf/s95vCbvZw59z0vnCE+9FJFvpWBRD2c0+m8rND5POmjHL5BYBk+5T8SvoNWHj729p6+Zy0uPemZrj5/Uui9si3IvtBL1r3n+gS8xjMOPg5QpD4KAQa+T6E5PXw5sr2mBpg9lEWiPVAkHz4SZnA+/doMvp9jZb5jxny+xn2vPn/3kD7a38U9E74CPoZtXz4tKuu9+vdNPecAnj0ZwDS+gAFjvZ8bWL6ZMFa+3lfdPUiKqj4M4rS9nHhJPgrqZb3jfz29ZUzEPSiAw74R5gm+vjysvFIkHD2i0dM9uJ8uvpwvhD71J5U+LxgLPvxrw75uvoK97dgkvlk9ID71DAe9Tz/OvdbQyj0H+gA+FRuAvea7J764+zK+P/FLPkUDBj5Ec9w9gfkzPkbGvb1jZPA9m52vveVVXz7NmQM+WAE2vZTFCz6bZya+HCoPvfp9m7yh4f68u0ZDPoTZ1L3xhba9alQXPdaAS76uMui9KbuFPV0QH77mQpi8ycAcPnfSGz1T712+y7wrPsDfJT7o8mG+uX2DPeMlVD5vMCi9+vgfvbQPrT0GiCI+RY43PkuiMT7Wjww+PmnmvLwdvTxCqbC9/4+cO2stbDyUYpC72wLZPVTNB75K/Wg+yJ2RPZwzRb7TgEG+iLD9vSRhTj7Rnh6+PmOTPVOQkT1Oah++As2DvnOMaD0l6Bc9xojmvUm/rb0AUG++R8sDPCjVxD6HX22+XmpIvXLEoD09ECu+9L+TvNssZj1GLYc8C9NCPtCA5z43Jr08e+xQPpiBGT6Dd9K+tQ7uvVGKDD7F7K++8ESTvuo8Hz47rC097tl8PvkQ6z04xI89i+PWPNoQHz4Tbwo+4n6OvibjQz7HCjA+w3jlvfbz5T2K1oI+P2UAvjhbED4K5V8+A6GUvPuwXbsnFXU+zdb6vPwfKD6QJYk+kgqsPaRrcj5Vogo+CipSvm/rqD1lM+S8FoJfux0DHT5Dlwm+a9x9vecwGL1jFPS9O7qYvGcUBr5ALnI+BsgzvXLEKr51STa+MiyCPYJvkj7Yik08KdQvvt0UZj5kDq09wvsmPur01T3Xuq49Jt4TPCNKgz6NsrO86b+4PbCNwj1jmI69cnsvPk1xcz7Q8Qk+fjkyvUNbTz4M8a+8dq4ePhYtu70jNfo9gQ5JPfhaFT5Wkdg9gxeVPN5vDj64qkO9sSASPtAKZb5wGCe+ngwUPTie4D3a4ka9fEBAPhzvH73c8GU8Lh0Rvm2vtj0Q+EA+Ar6APox7WL5KXPQ8Bv97vOYB/D1sFic8ONyoPRSMLD0nsFO+tp4GPnYwy73etUA9xCRdvTQeVT56l4y8kkv0PNKsPT64p/G6QYUmPiOy4r1DiES9epspPSbmiDy56/e9ktPBvVipDz4gRzS+9Wwcvtzhm71805W96FSzvamMh76YRiw+xrktPkSVOb4zf3c+d/5mPkKyAr1D530+gHubvSyvWz6lL6S94AYLvgEvmTyJMCE+uHiAvs8oQ7yIPA4+d+JFvKeem72Xlv29d/RHPGmF8z1zYNY6xLQ+vAX7pT1EGak8i0eKvT3Wjzum/8c9FtuOPQKmpT3XMCm+YkkbvsX3t72ljZi9/y26vQksgD45T7G8Od4zu3bwqD37ioE+R+WovY7LsrxYnz6+KNnpvU5OuL1GRo2+d72FvoPBzTw02jW+0tyHPrJter2YIXe9SRE8PuP+GT4PqHM+npXhPaaZWz5j6ga+nqolPgwVzT2itP89LU6APjdDtT02Q4+9T9IIPrNGGj4FywK9z6szvpHqWj5cRhm9vWo2Pna0Aj6Z9bm98qi8PWggIz4+rys+X4QkvmcYYj6c8iG+lmqvvFyNYL62wJY+maGEPTDZKD7CkxU8OG60PScVCz5fOUU+aFKVPUTCUD3K4Os8/CTzvXekSj6xg10+IjitvUNnKz4Q8kA+Y9wJvsn5FT3kQzM9Cd3jPdlZNz6ge0m91AErvnf2hb15JB2+DLqBPp4AeD0Iheq9bn6yvd+6Nj5GU7C9NVQFvtxuQD42sQW+9gjAvarfLr7C2Kc8A4Isvj9OxD3Gn489KlqrPV/hgr1jdQM+DoIwPToDjb1AP1W+X+gNvexkzr2Z/Rk+Zp9gPTpIoD2V414+h40RPhKphr7VVje+LkJwvoR3ij5svSc+8aAOPvfcdr4a+7+9kOyAPVhz0D03qH+97vLnPfBN4j36M8s8eowvPbtMAD6vIEW9HjHjPZcdR75c6IA8fSQHPhEzsL0A6dw9BcJYvhMTeb5bAk+++wGtuwBsOD6TXHu9VV2OPhDVkD7yGag9AabnPZKPkrxejom+vm+BvXO9sT4Qj3S9EuMsPa9PNT6Dbj++mopivuaxQb5NhXC9FzAvvjLsjL7rdoU+Sn2KPf+B8L2MWwC+s4CRPYmn+Typl6a9EZlDvk8ZI74mp0I9KvOevZuJXjwx3Uu+5hMSvbqEPz6xOX09R8opvi62qz2zfDW9ReSevZFv172cgz4+VWkrvpmbFL7Y0Gu+nz3rvRn+Uz41fYc9I5+0vc99h7xZ7sg9/yIIvRB1+L1cWSS+anNYPmuEWz6lnOk9dR4ivHfSMT7vHhg+/UONPe4PBT7n0eM9efIoPsXk7D0Nk2W7mBUuPiBBHT4P5Bg91lJDPvxtTj5ueDi+DHgdPhfM7j24710+848Bvld0aD7VAAi+bF0tvitGZb37NXi9tXe5vaN6Xr6S6w89/IQCPofPRz7f5Aw+PL9aPgAAAAABAAAAAAAAAEAAAAAAAAAABPsIvaoxmbtVgPs61oMWvaj+Kzw0oPs866SOOx0ejjxedTo8UuXlvEm+szuL38e8BgIgPbIIqrx9nnu7ErkmupmlxrxnKHU86vztO1c8mLsJvdi8sH+suWKFEbxx4h28eqhGvQSrAD2jsKw7C9Y7PCHF2LvSKhG8hOR3OzRcsjtOFiO8ZEWjvOdutzs3dMC7OEHhO+NjQTwQjh09+YjLPIURSD2AUpu8OchQPHy4gbzpOam8tyUfvED5OzxgcQa8e82qu1jaybxD/cI81XCxOtSJfzxe24C89aIXOynFgz1EJJW7cZz2PDJgCjxubNQ8MkinvL8okrzW7Py8toGFvP////8CAAAAIAAAAAAAAAACAAAAAQAAAAMAAAAAAAAAAgAAAAAAAAAAAAAAofqhvj75T73mRGS+GAuUPCwCBb7jd+u9CQycuxVXib0QzKs7dNptPA4nQ70hgSc+v3rmvXS2hz1X+6s9m3eZvRIUWb7PYhe+czLDPXwQgL17vP09OyQMvroO6z3CxHg9muY9vv6H577/ckg+VuajPRgmhz2Z1le+66UmPo4Zcj5HAz888b4kPunrkztmFzE+tFIdPpgEj70MQDU+l0FvvHqUgj1iAcu96m8Vvht3fD5zWgs+7nlRPakrmb1Yvls7usBVPRZg/jxEqlQ9h7qtvURS1j2XcPq9MmBbPlpMwLyKOV4+dKeuPa+VALuEbgU+utrIvY7dB742ov291QpdvpqGK75tnOy9ZjlmvNCa2738kb+9ehcPPjJNkj4ng+A9Boo8PvYxJD7/yB49YfkaPmo/TT6O/Su+3xjsPolNnj5KsHC9ie3kPfsgJz4nRxy+EZ5GPlkgWL4uJXO+NWZGvdBGTb69Ltg94w8GvY7bzj1ipFm+JwZIPL/IT76wPlE86vaAPhCVeb43qSC+y95XPm/IbT41DeQ9KXhmvid7Az6TODY+XQazvMkdJz5s+Rs+mg+BPfyZBj4/gqw6/X0XviB5e72clx8+zbLtvTjSlT5vMHu+aDxTPIGoET6OyXe+IIZRvhEyQ752UaU9nigHvsTyFz6XVbo9hXisPR4LsDxQf/S9iXJ8PiOygj05mWE+79OCPZYsmb3w9VS9MZSOPSOIpj1WfZK+6bC+vPx8GL6H89K9znI4PrYLwr7iXp6+pBADPlWK3j0BRfU9XwKBvclpT74+HkW+fs7LvdnpLj4zJ3Y9eZAwvhzEjT2UFAg+WuWJPndaab6bHQM+v3iDvTzSTr5RMVW9pyEevq/ATj4dMZa9OAgnPD19WD5sg/I98ZDaPdpr3b1bgkk+N5nIvWD9Bj5d3ns+rUEgPq6EmD3Upja9jmqaPXC1kb0RRou+nGOsO4XTSz5xcjs9TlYbO7W1Tj4u/IO925avvUcRXL4YZhG+tqxfPcbvZT4kMPw9+2eCvvdh1715dgI9w147voV8CT6lehy+ay2HPvPiYb5V7QW+RO4VPQmnPT4PACu8smXjPYSLZz425CI+zgcvvsCMgb5zOQO+h/YvPlYlUT7M/8a9a/YOvqVYKj64OKo9V/gFPmuSMb6fWh4+3GWjvbEzu73Y96M88ncXvuY0I7zfRb4920KwvIyUar7pJyk+hIQnPdSxsbzMFFY+lDMoPWRHFL5Iw8M9M1H5PQUsuz33cS6+KwddPRYkg75ZGHG+u/PLPawYtbxaFna+yOxQPIFDi75YzVQ+5nn6O3E26T3eoDS+jEUnvjGfAb7qhXM+4riuvUNDI76hgta9Gd64vZEKQD3FQ7I+zo+uvdzbPT4uyFE9KcV6PiXNsL5pdlU+5WVLvZ+Rgb6stFy+B9kxPvrv7L0aUji92W1rvpEHy72iwwm+WxqUPTvB8TzDars9e2QTvvbIQT7zQ0i+tfHdPV4lhz6s6UI9yeFaPkiAgT0b7Rq+A1BAvKqfnL3Zgu495wn4vTtEBb6ebTi+dhuXvYPmA71cHzW+Q++1vYkJuj2DuDU+YXA6voRvOr6sCCe9cva6PXAzML7MgFw+i8QTPMMnrzwm67Q+izBBPfNoa76ky7A+do6LPSNRGb57HJW9njRVvEwYML7n0A09aJSTvru97T32aHI+gcXaPKWedL4j4Yk9+7LDPcdvBD6rgCm++tmYvZ5gnT3LHQM+bmpyPcB3CL6/y6e9S8EyPmeMKz5OCVw+irKYOqxFKLxHbja+FsaDviujUb6DXSs+oPDDvSvDLr529qC9nEOQveyFaT3st729CXyWvjEW6D3AXjY+hf+jPcCGsT0qzCM+v4fEPWBkCL48mV4+rcJyPhBsWT78/xk+kd+Ovvj9hL3ky3O+LnTkvR2nHL4ZSK09atFlviCYJz7b4/C9SpX5vPHetb0qnFI+Zib5vaEiZ74RwOU7x3AMvn7ZgD4y2og+lJH0ve7kiT4ijxa+6bw/vhvW77vt+lM+WXEGvugTMb5K6vE8NhyQPYFTuD4AIjY9Q2NLvcqBUL5CJva9mz9VPSJvWr0KIii+hyxyvaRgjb5zdT8+LXZuvczDhz3N8CM8HYCnPacPHz6hPT8816onvl1PVz55SEC+BZYUvgNmVT4wlnS8hD0mPnGGIj3gaVg+TPU3vFKNBL0tAFw+pG73vYCJlbz2VT8+7V2CvZtFnL79HxS+HMt6voESST1HgAG+rYl8vcjzJ74qi/O9RQ5avkBMmb0A2JY91LpDOzohkr38myE+DzkwvuZ2hj7OgNC8ik6gPdX+s7yZ9ky+FGbdvXjWOr7E//o9Pef3PU6ylTxsNcy8EmplPrW7gT5VJuE8vEhGviOcd77fSO69D2ZjPXWraT4ytN49RaTWPAfWIr6XeNC9sbqWPUM6f75Jhn++1umNPlWyij4VhDe+aMEWPTNnIb5jkbe95YAyvhFbGr45NiK+NE17vj1MTr1y58O9YgSNPRy7Kb6JQP09xIwmvgTqaD4gzyY+rB5rvson7jzjdyk8gx6oPWUbIr4esIe9KB57PL0DJ74XzMy+4ssbvoCZL77e60+865RBvpTJdj3kpTG+1AIGPj6xNr7xZh2++EASPXnGwjxBVUk+ZeAnvn74Xj4AJxA9mDdYPJAeFz7V/5A+1jPuPQh5LL4uYJo9HSI3Pdv69T0kOd89FFJIvj45L74nsq69JjM3Pu0GOD75ZRW+f/ZivrzAgD58gyy+w4UnPWhkQj3ttww+admuPTchEr7KnTM+5szfvTUClz3h5Ky9rw8tvlzMjT20Xic95VWCPk/AILyQ3n0+5OctvjuGorxlUvm9IX/2PbIEMz5Bx9i9dQxRu4Ussbxzql0+RZziPfIuK73sE2e8/eLbPUqGGr7+0Qs+H9vKvcoLV7ys1R0+VT6ivLGbgz42DTm+ZNgsPqUCYr4xFHC+Tv22vaUAuz60erU973CDPVtSKL0Mv/g8M2ocPqlltjw8sZe+y6nNPIylyTsiR269OJuivT2kgD2Z2uI9JWmSvHIyqj3/y06+oazdPYF6gT3dtmI+mHDqOzG3673UCxM91RFkvsZwFj6NDHq+aoECPoZamTykMI49RZhEPZefWT2zgRi+i8cFvg4vAL5vWR0+nAxmPcuI9LwfMl++QbTpPIrHND7POYc7GNBaPQyTEj5Es4w96xw1Pu0/Lz7YKSM7U/+cPdOguT1FC0c+bgMLvUMNjTwPh5E+eQIpvSePa76TNAg90eG2vVS7CL4mHvS906xgu/xez715Dgw+TeDkPH7PFz7p4Dg+JMU6vmYDLL1Qkmw9+nGDvWk9pD4QNK29Its3vtMKfj6hJq4+MWHwvHnqj71JFSO+cDhXPoqFMT10KSM+7JviOvHsz73gKGY+etNGviXV5LuNPke9pwgGvWqWnrznk4k9ap2rPeM0Ob6q4348oJg9vqcOBj4rMh6+Tt8fvj18GL7nWpA9+hOfPXSDPbzxRFM+cwK6PXuGor2S8da9Zw0bvhiqf73E7gw+1QMlPv+/Er6ufPi95jMku3gzVT7wQBA+u7Kdvfl6Mr41tkW9s8rHPN3sgT67yYA+dqWIvAwOxLxF4gI+W/LRvfU3OL4Auy4+Lry3PCqzPjyOqIa90U/8vVFJeL7LJ7+903AwPt3kQr0418q9je81vhw+0L1xaze+zpg0PRsZLT7RaVw9QMAoPiSSGT7KrO29Gd5iPguaLb4C2Zo+yQIVPvbgmD7h4Zc+cLvXPezAs70LBQq+cl+LvrkrIL7dT/28RvQpPq0Mcz5/WZ0+ImA1vl4JTz761TQ+ICmOPWwRqb2qRUO8gPNqvmlhJ774PCs+ZHKEPHZchj2a7/87VZErvFxPvjzXnIk+RLOavVRfEr5OLhI+D5CIPjvX6DzRiA2+gsuQvrFCCb75/oy9WtWgvtBOkL4AQ8c8MaOhvSugSj37AUE9xfO4PXtMjz0JFQc+LdGnvR0MSj67Pd49inGJPg1nOb6y9oY8ThLmPCDikbuAP8u9ZH0TPOD6iT4rF9w8gQ8tvvUpfj3MlVM+GTJrPq+nN74E52w9mjqHvBpJeb12JDc8/neLvpz5BD6qSYi9NUmuvHzTqLyGQK89vanGvWiaTD6VrLa9CK+DvV0cnr2vSQi8zP6HvgXJ+TwTfPY9NhyNPSB4nj7Ui2U9Z4uyPQI9Pb3AV+e9zXgkvtpcZT7eR5G8b4xrvhZoaL2wg4o+flkpvV3slrwKX1C+AdTBvYRIIj6VOJM8TWtyPTw/QT3maCw+WRH3vRFiST3QNtM81izRPHe+mL2ldxG8DlcHPiRmcDzGlEy+cOTXPZB3wLxBBYC9wsxJPaORAD7Niwc+4pXPPcUtMD6PzaM9nj9CPlrBX735hJu9VqMxvpIzA75C5a++EHgKvr7Tdb1mFkc+bvosuvJWBr6QJwI9jZqTO1pbPD5RL3S9oNrdPL3nk76CwsI8NdUAvk8Bpj7wTUa9cnckPi8MQT6EAI6+elYoPcWVDT7X5y2+4bZjvQeiXD01D5u9dkmaPB/KJb4acrW9ZnmLPWqTgj6Dgno93UKtvJ1t872RF0W8lhc6PqStADwncoi+c1AOvoFpLj5AWCM9gD1NvmxV8j2y+vy9p7V9PtDd9b1+2jw+xtklvkmoJL6AukS+ryhnPpGcXb7zBlo+d5xYvY9QUD6xRBW9ATaIu93hmD3ZY1E+KKx4vaX3Fz5GJXy+M212PEZwdz7WDmS9daTpvdIfhL4ITPM9cWaOu+VwWj2QSc+703GbPTX/R75WTxO91i9WPhadFL6c6Ze90Y2CPj11rT31HnC+GGfdvYyZ+LxnoyG9ITxqvbQI872kBTe7uCckPv+5Hz6+AZc8NKE/voVjor39ero7NXXivWop/b1l4zC9rsnwvckSyT0eJLg9zq07PsF/I76T4ye+7IlOPgxmGj5RlHI+9whSPeaJoT79SrC7Rh8GPnpWGD3+rng+5NyKPT7wMr4eteE90sSFPHTpmT0xtuw9ezmKvq/Ccz3dw0i+R+fxvYzDID2e6iI+v6UgPYZzXz6pEMQ9Uo6jPKpA1TwS3H2+y59kPgnjLL7M+Am+nvlfPsswEj0tgAu+P8OcPr/7Z74vTKU+iq+jvHFIhj0cxxQ+CTNqvYlfJT0Klmq+nulnPib8ITzl9RE9tYuFPg/8bL6udqw91yDFPW/TKL5SfFW+zg9RvMksuTwtNqm+QKYZPjvIfz4HWwg+8L/vPRhubj3hy4O9J5GnPWM3ET7eK1s9rEFPvs6QrTyPCvi90iIQvYmDp77zTSk+caa9PaAsfT4fjEM9fhP+PebiYb00ymi90ykuvkww2z1crgg9rgYaPM6vtj2yqpq99OrrPWSpfj0QWwe+ZTnLu8j3Hb6PI8c9u0+hub/shz2yPpY9nJ0OvfbQRz7m1Cu+y12jvQhjUj0Uj2o9dG21PVu5ij17sCa+MpgNvSaO9LwNsf693/pIPqyvGb6oYG4+dIhPPsB/FD1bg0k90vy3PYzAQz0K2Bk+F+oEPt6rqD1RvBa98tw4PThqVr6kwDO+Pi9FvRjAdr0wrY+840poPr1zuj0o4Vy8NOuPPk7KpDwAt8k7IDpXvh4Hhz7ntSC+GEYVPg4J7bwzXwM+Qr7kPZQCOT4UGII9CM6Kveqixz3Emow9/W2FvLeaID61plQ9VxsGPnNmBr50JRA+a2EFPgvdpz2a7E6+GLHPPZTKyz2/aDQ+iXKrPZkmBj4TEIM8vDeyvX8yvL0HzHG9dy/JPGOPeD7k5929perlPZHXwryY1lw9o6qIvkwDbT6iySk+39uRvQJ8Xb4KfYK+IaQsvVtFUD7aOXU+fnKHPYa9Eb5baCy+xexzvrjYeD5gHCk9IZ5bPoHZCL6mQ8y9+czGPU/4hD1MUPA7Bl4CvptCPT5zK4I+ITQTvnXHW77S0xc+rv9DPqRPlz4mnUE+qghXvobmGb6Gxuy9aEBEvp8JEj2Ky+q9EomnvZUTQj7wz++93VkbvfsZLTxIJ0K+lxOdvrQMtj0hz/69NUxYPoRkaz5VBce8VzOEvrYJaz1Khxm+rgSMvn6leL66RNq9yJWFPU3LBz4vHjE+uuGNPMZwFb1vwXi+qGAOvkTGDr6R0nk9hylmvrO5Aj7DK6u9LY8Zvkhc0z2/2bu9xckKPgRPX70JrEE+etdduBZzSj5VXWm+6EM+vq1YzT2ofDa8tC5BvtyA97tezPE9sPq/PVu0Qz4RrzW+lAtpPdVDJ74pBTs+lYyuvOmSuD2cySe++CKRvcWjEj5QLBU+5UUEvg+ilr08awE9LcI/PkEyhD6yRxw9TSpwPs5yiT38O1a+4mo1vr4US7668So+mmBTPu7LFz7Qv7i9IDwzPW5Q2r3tJKi9OygBPn41+zyjfAm+rVTkvLvxk7wq0mU+71ZvPlShyT2Q3kE8aMeTPMY3Er4pa6E9ojEePoYzSr1JK2I8OIPuPUvsM77LEzK9JLg0vuaaO76LGwQ+KTubPaRwX77Sre69oTb9vYwarb1Y7Fq+CQOsPT+7jrwmt0C+zLqkvXinGr7b2kQ+5KRUPu9XvL3R+Ty+wOHqPMIB9L2l6uc9LU0dPuB40T0aXAe8wRkbPlV68Tx6dxG+sQ23PZiDqbwBgrI96mg6vZIoDL7T0ZQ9EjcXvp8qubypCny+PWW4OyoKTb46BF2+DVY4vvslbr54uA08HbXPPejPKz5W9T6+NBCyPTt5EL550Ee+B+XTvKXWGr7FpGi+lLctvrothT4z5iI+tIvwvQzmQj0zmaw9Rd1bPrrKvL3UCAi+XqKAvaovmj1oDbs9FesgPhl3Xz1RvOe8vtXuPUH9sj36r7k8dcuBPjZtyz2wEm+9JLwHPm/dOjyJC4a+w0yhPlfXNT7tnR2+ob4/Pmm/h71R2Qo+8sFrPYytN77rC7c9IGz5PfG4JD3Phas9oeuCPFuUgj06eVq+twP8PVGpTj4GraI83odFPo4abD60IF29PohLvjNSLD2KpfW8OUAqPTfJF74sLjy+UBMRvS9gs73Yw+g872JGvRbe6D1qptC98HHdPVE+NL7WAhU+PkDMPQihL74prYC+ttodvYiIdr19Ryw+85PgPcsjnz0WVDw+nI/VvZdBHr4l20u9G9gevslZGz6SZ4Q9Z5D4vbbMG73+BUM8GwObvVK0wT0KwR69Hl1suuMpX77FheM94Z8Hvt8dAT4pARC+jVmWvvlkBD0rRR4+V5Mqvt11ZL6pVCA+g/CNvaNgpb3+RFw9vvxwvX6oKj6E0zG+Z8inPQSdxL2FReI9BjJevJeF6D1selc+AgZDvvg8ML4qfGs8OMqcvhRXvz7usCG+6wNhPIGZH75gmz6+aypWPv9ZsT3Jhdc9kxJqPkZuIb2Ffns+OwPPvelffbyq/we+Mijyuz+kS76Bbo++oFQsvtbKVj58MgW+4lZ+PYaw8b2blCC9cb4XPslqM77UNoe97SjEPTfNHz11yQ6+KBN0vnyj2j1741U+tkfVvZa5/js2fCE+pAhIPq2uAz15tg4+oQ1aPjW8Jr4xXEM+qxPNPVGyUL7ooYA+C0XAPU3pn74+x7I+uAU6PtGfCr3uW5G9hLPaO+UGPT7Un10+A4VePVBmk75YfBc8v0oFPY77fb7uFig+WdDfPbOFgz0jv2g+rK45vryG0L1gcAe+1JY1PvxBSr3+xZa9TAbzvRUMNb20LqC9hG8kvfpJ971X7Lo92AmBviRjF760gJG9x9KEPsSFRz5bSSG+1LM3vq4YBb7p1rI8Wbt6Pg+wFr7mQw0+Xg0+vg6AxD0Asoa5ecUpvqCFLb6FIL++kxlpvldsp71ITg8+7nhJPVgmIT5F0VE7TrlMPTghvj2pdsy9z8VqvT0+FL4P8P09VDGGvvMf0b3HMJi8xjRZvb06UD54H849s+sPPjyqGD1vJl49hshpvqBDdz0DtTi+qi6YvZAeKr7NEI09W0bEvAjSE72UAAE+MZhOvveehb5p0+K70ww4vQU/q76gqWW9qbq5vdUepj1oJI8+JzetPU+/7b2RyTm+YUncvesqIL4c/ea9Hf4Uu8uSkL2KmWw96/C1PZ8+oT7eEWo+Pk75vSdyGL4AZvY9gGDpPcdXtj1FmkM+o/LrvQKnfb73Jpw9MjRBPgLIjL2bnZy+wT06vhGfJb5gDQC+GP33PR0pYj0v5Ea+5yGdPWZb1r04W7M+JHdiPU08JL4YF2S+FFA+vhTyBj6eNbS9m78BPv5Ccz1hqd28HuRYPhA2tD3Dbda9n+CUvSFex737p369DQKKPirOfr7xK3S+vfvCvVz/2by8gjY9N86RvMEo0L3h6ok+RHREvnOQqbz4ekU+Z7eBvnUALz5jZwA+rNclvkGHj74ZfZI9aHkXvjdiKzsragM+T1UEPtDPWb73u/s9JDG0vfDKQj5TpD0+KDWXPetBQD6IYkg9qPj6veLnBb54eP68Qh68vM/D+bsiPRK+b4mGPUYmmr2NUgu+W49BvjM2nryP+7K8fPYSvo/bYz5/7Ry+LbICPjTCib1THyi+IMhWvbp0gr26BQQ+dbUiviydCj5o0zm+fX+pvVcNBD6qsfy9bH+GvFH6r73vaoq+ycsvPvbLGD6OLgs+tMlWvdt46j0d+No94EQFvh6aSj5Z9S67n/hxvnyfr71Wkg69NLYKvqdmGb12JBi93CNlPkT5+73sTW6+GlIIPtJgIz6EL/a8RoB7vuj9pL6HRRC+s7OpvjZ9+Tyqu7m9/RZtvqAIqL5Fzc+9UqkHPpKIWr3YOiy9ZLV4PS6z8T0j4X8+KyeQPXzjgj0tQfo9KszgPRDo4b1Lwim9tY10PlWFfTwjwHo9qJRwPslPp70vTKc9iPjSPLZOZj0B2VG9qJhbvsq1fD6ygog+Yx4/vtAofz2+JTS9UpG9PZu5k7w+OQo+8dyLPXVMI75SgYC+A1bpvWNJGL6tL4a+UR1Mvga2VD4suK49fWozvesV172VKie+2kgUPsWEmD2hd6k9QIGNvAnkDb0fvE0+7s6TPVETfL6xgM29sNCyPgvQPb30Zuc9qbRFvtwNnL3Bb+C9p8l+PlkxDb63Ddq9JMQkPW+/Kj7Knrs8poTNvdwvD7yplKk9wbkYPriEOT4hXou9zecDPo8Svb7R/CU+6toJPXCLRD2G1Uc91ErKvcMKXL7kYoE9ChouPOLB6j0TEDA+mu6yvWCpJ73MY38+whUjvg03Sb6PsgC+YE1jvtwdWL17ygO95zmmvMm7Z762h5C9WOjiPC4xjL4Nlg+91om/PZ4qyz2JLhW+F4+lPfPEYb20g4699bqJvsyXhL3A90a+LGlXPq8BcD47rbg9nJYMPoWqZT6iOiE96f5ovsVfJj66agK9Vu0gPib+TL3/JoY+tkd6Pl8uKT3ZdYM8DCY0PpGrJj31xLy9E5MKPsKcDr7BL++9wAGoPq/3FT5D+m8+0JyePTeotb0j40K+7j2JvVpJBbxsTG++W8STPacvSz3ed+Y9FGbavcVp7D04B0w9xTK9vEGCED7QoQW+ZFIZPX2NIL65p/s9YvJqvgNiMj4j3rU9cbuUPcgt3L0hLh47BLCmPB6dZz2SZqK95I0HvjKwp73LT9i9dBA1vuCYsb3BC5c+aVJCvgGSqL09UBU+AqyJPNvzIz4/zDo9xa5IPgO/Izy6Mw4+EGW/ve6SNT1t/v29wdI8Prn5ZL4lj1I9t3obvrOnorraV688O+6UvYyTjTyQs909lxANPsf/DD5ee4k7z/J6vCnnZD7OjeO9vvrPvdSmGj4gI5C+RW9xvtCLTL2bR5I8XlU1vkI0hD6dty0+nOvrvU/1nzxf66K97Jo7PkFqoT2j1fm9AcTMvEvQNz5NS+u9NocAvq/Mcz7+pws+IYMwvlzUkzzjUDK9ergcvrSjbj5fIdW9VSHrvYfb4jwQShI+Q7BMvl3N7by4eKi+X+6FvDhspD5GcRK+7qbAvGlSPL1RXgI+plUOPULANj4lAoI84deGvhAjY75kXYA9Bhj6vbgTyz3+wEs+vTdXPrnhtj0pr5o9KMlePjkEo73pJNm9QCN+PTfLhj4HW14+kYWhvRG1Wb2OsBy+g5YUPaUAkD0lf0s+suPVvU2VkrtJ7x2+r1uhPXQolj1gZj09S2a3PKpUfb6KW1++SaRzPu42EL6esw0+UpprvgDCuLwqqnE9PKpRvgE4Sz4Bsbg8hoxyvKnW1z3M/Gq+RaawPU7CQr68Y6M9MAn0PWJSjTx1gU0+NRuRPco0qT0VrrK93pcRvUp5gD2sG6A9w+M7vWKDHD4iqpS+FdkzvlwzaL4hOT0+0odkviUFg7zgUrk952N+vm5l1j2vPUC+D+MdvsvusL0f/BG+OiXKPcbBCr3dspu93BMXvccFMb5UZfO9cuJivOf28j28JgG+Gu1LPssTQj5S5ao9ke05PZLP0b3hxrW923o1vkgmXj2D7Ig+LHEGvRA4Mr5qsA4+2lbTvRuLcr0K0VI9de0JPpcQwr0wEHU+wppQvfgEyrwxP6U90QelvA3TBr7JjIY+3cUpPsMksT3+C6c97+jJPQKpSjrZs988EtWPPFXFbL0SBvi7ophuPRuegD5+br89CxUrvlgFTb5qsgm+xnDOvUFcWL2BqME9BolFvtlguD3LXJy+J6TPPWXxk74Bq5+92O5CvqhHRj6qOIA+5TqKvchdgj5S7kK+TGBlPiqnsDziUgM+2+b4vU9gxzzjJkw+aA+EuUlVgL0c6/m8ii9bvpa4Pr5hlpI8PMSIPTJg3T0zVg2+RhN7PccFBzxpVlW9nxgePm74hD5f5/q907rDvYS8CL1ZNBm9Om8Zvkv6aL4D0hI+enoYPtpNCb4Be3y9B14GvrwJIr4CIR6+eUaXvdkpC71SSbK9Q5USPdFEVD6TxM89ZhTRPKQ8Kj6RcBU+alY1vpJBAD79srY9L5UmvaLXLj53Nw0+U8UyPkfCAb7iXBO9wxJzPn6ILj7lYbo9zWFqurv3G76aRCy+nzL1vVZkIr4fdUU8jV1jvp7LY76mCEI+EDiqvKnZSr7aIr89ACrXvenuEj0ekPi8db45PhqEvj19DqG9P9n5vb1IRr60/ya+gqMMPcISRL4yN9k9z7SovGtbHj3lB+y9yoKuPeJ/Ez6ogy4+HYW8veUO9zyA8iM9qavXO8qZRj4NAo8+/HesvSF+ir2cNEY+1DnkPEoM5zzLI1y+gYZBPs1WSz4Jrus9cCLdvY8lYL46DTE+kQ0rvSC7bL2QwI69zScFvrXL0L0ag4c+4qIFvlAjpT03Vjo+bPgnPIrXDz5pE5e9Od1VvrYqiD7Gkk4+m5JUvjmihD5NjB6+qxQ+PXzpCD4pfjc+9HTXPc0haz0BhC2+hF1RPToSar0LazE+3EUrPS0oDr5GIok8chDFvE0nIb0GPAa9lt5PvY/BIT3/Ji68BAuqvAroIL0mUmk+nEfsvZIOVD5aUcg8eRpEvaC7lT2Fl2K7yEIzPvKZBb0Nu/y9kUP9vWZluz2jfTk+azkpPlsmY76VbAs+R3Qavk3mJD4LBJc9PiWIPj/vVr7ZLwC+3wYKPiqPUb2NwS0+v9cwPqZbHr3yOTK+W4zRPTyogT0uGQs9CldAPgpQZj7cYvu88Wn6vBgpCb6ZecU9FqG5OOaMA72wSy0+fo/6OyeY+722RU4+Bwc2vFEWID0+t6S+8qugPrjjaj5WJt29hqV3PmfrEr5zbto94z5BPj23eL5J7zA9GV43voXw1D2rH/U9vt3tvTzvMb5sf0++xWIVvj0Ujr2KLOQ5pk04PokKOb5yhyW9GtGQPs7zCj68TkY+BX8MPoVv+D1QBUe8zFyHvTfgrz3uQKi9dLkkPnf8k75xah++4eZvPggHWz1mXOM9T8KFPPi1gz5O2Tq9LLVDPmWvXD5c6b88k/cwvSD73j2pwx++6I/XvB/At700YyQ+LHnXPXSYAr7EY/88oXkTPnLmEr4JEXC++NEpPvhXJj7VdRk+ancwPonFVD3VLTK9Ha4DPF1BRr4+dMW9pUcPvoVoZz1jE3u7YPuGva5Z6j0el8y8WPk6PsqMgj75ggM+8y0bPmepIr0vZsm95ssJPFH19r3X3FQ++Fw6PmEOFz6ycBW+zKM1PVQ7rTv3GzI+Et92vfLmgb1pF+w9v5DXPe+lMz7XR18+cBn8PfzPgT3hVjW94go0vUVXP75dosu9brj0PX1blb3iSEk9svjXPd02rD0oh4y+klzxPfRJ6D1rtds9VE1APfhaW77nlqi9XRhoPQR+oTv3tBo+O6avPc1wA77EiCW9wPODvi93Hb5fd3U9UXhuPal2bb7T6Ik9zwdEPaAwDr5U02S9PvsePnSViL3hIQ4+aPEAvul5Pz5h5M49HX2oPVDLOD6HX06+UsGBPT3Zgr1yWkY9c1CGO+pc/j3voBm+/rC6vDq7Kz7OGEE+YOfWvfrSGr7bwJy9hgZDvcMQgD49gBU+h+gdvhlywTzVr6i9bn5Mvsxbiz5fk429zMWTvbUcsj3tzYy8q+oDvU9Rbb7mDCy9a7A5Pa0NiD7x+pu9S7ZKPrSdnDxyfYu+Q4ccPvzfHT0cCmg+Qdc5PIvvHj73wVe9bmOVvauO0r019mO8sUsjvk2bgr7jwIG8j7UBPvySaT6Izz2+uRVSPHJ8wb1Ov7K9kuyUPs5bXr4XGNW88JlQPhWDG77Pw6e9p3VpvT4iUj4ploW+GRiZPpxUhT4ft0A+BtkTPbQtgj1FLyS9Cq8zvfiBKj2Yy4O+glKBve/ROzw7W6c9SSb+vdPvm70GDoi9o/IEvkMyWb7V7j6+TFqSPU+dDz41+vE9edIoPrzLur3TOgO+GwUePouPJr6hqQw+3wc8PUzP2z3OMsc9hA1QvjJw772eQ0C+G9EyvmfMSL6Eoxm+Ui9ZvlhFHjwzZpW81KMPvm27kD0MhE2+gR0sPsP8Wb5gqSE+zJG3vRvnEz6twm++5NMEvlgU2z0QFBO85Zb5vDjcKr7Kc2O+cLcfPuseYb5xUu+9BcyBPVhWSz6Tu8k9igExPn9Y0z3MVr+86nwtvk8kZj47EnU+mkEevrfizD3DD469PFNPPgBVJj2ic/69vUdUvvUuP762D8q93LU6PnxXtDwC6wE+YXQfPi+iUT1pK5e+4TqCvil7gr665xG+6Eq1Pd95iL3JUxE+SeWrvF61ETwRYQ8+g7XRPX9Hj770SNS8KWIjviXirLzniaQ8j7EUvgIr/z0eUsE9xuR2Pky5ej4GmMy9TklqPFdz3D3+k3A+oKCsvXmcoL4EdQW+yx9wPZrRMD7t83Y+KhsevRQ9U77pmt+8IpXeveDuw731CVG+HcqJvfvPGrwTkRq90DzRPZpVEz7Zoz297JiWPi2K8b46hyg9e3fOvW/k1D1wmkq+N2kHPr2VE76z//88cZc3vVT+Xj4EgK69N72qvWOS6Twp+Tw9egTwPYpEwr39iow9QYn5PYsgzb1xeyG+GD9RvtFkRj7SSnO+ENc2vroImr1fh108SAFmPjp8/Ttynhs+ErybvWoMi7qS7sM9aTKQvbgFFz5VvT66hqQ4Pg9LtD0//Hk9qhVvvNXiXb0t6pc9nis5PnBfhz0Tt++8k1KDPVquwT7ikQE+drLWPQ5iV74rPPY98WX8vZQqfL1iRJI+ocDwvWMEAr5qP0M9gUGCvl+/WD6VD5m9XWOBPsA3sT2DZji985FmvnJMCr4ChCM+49xPvCuKHj5OK34+9BmcvAzODT7Ip3k9uTpVPrWOqD36IW2+w6KTvr9yK743BvO8l3HPvVuRAT5Yw4W+hgLKvVSqobqhpRU+vU41voKiD76cqQ4+aXZYPgm/Nj196is9uqA+Pi2pbb5o3EE+LYsqvnnqlD3wF2u9uiz5PV52Xj4cbVu+qg5kPsh+Wj1DfuI8Zk6GvotZPL2GSLo9bHvzPT7cmL2JEdk9On3cPaCKwTwPJY88PhxSvv9or7zLzTw+knSou2qsML5i1q09T+ETPu9eLj1EEza+De0/vT+zE77rfo0+0qLXPUj9h70VkAY+8CnJvhLNCb5rCWY9lB4hPtoXZL3W02g+SgaLPjmtBz5o+b257LdGPomRgL3O77Y9XKdDvGBHhb4QXJe1k1XHPRs0Eb4y2529Lkn1PSD8CL6xiE++76/Nu38Jw71nmXc+nYOoPDcAHT7y9ie+OGvPvV+4nj2FsMQ92P0DvsFicb3tKN49AOgBPj/jkD098Y69NWAdO8u+kz3jaAy9ms9gvhahMr7Ha4A9wzyAPW2FkL5FlR8+uRxmvZdQwr3vuJ69y1iDPbWD+D2q86e9JaBKPa5XRr65wfc8UAmYOzUQljzOWkw+7XS9vdEgPT3/7wm+mTbJvfkARz6y000+M5IDPPmg570ubDC+EJ0yvuPvXr60XiA+mpdrvvGRdj4FCTm8tHWYPqXE7L1ru3m9/5aAvMifsb1m6Gm6H+0GPjqQh75umXI+bQOMPTDoYL29RWA+ioiEvv5/lz5ZaXU+MHOpO8l+0T0+kSq+KicLvmhR5LyubB++2HIqvs1yO75MShY9eadNPRb/3L3yrB8+bB1GPq2fzD3jXrW9zs1Ovjcbnz2pqYK+zUfSPXd6mb0rvM09fVgHvipGzL01M4G9oyG5PJ+Zsb0CyzC+uzOtvWhLrj1ZdYo8bN8AvnPYUT72xSi9NWc2Pcp3fT3CzQq9BOoSPjxgsT0xpdQ91Oy9u87U4L0AYBG+DQNePh45Hr628yc+t16FvQeIcj7EWIU9/wV9vtyj4j3XYho+A2pnvMXslTwpmgq+0BjVup+j5L3oUkC+9jWoPfixKz6fr6K9LaocPhTvdj0yUm2+ZqFmvZ5fHL78Xcq9tCNBvn37GLs6jpI91IgEvWvd3j151Uq9BoB2vcaRBb6rhIC+Q1VIvrGwaL7vCmC7Gc86vo0IS76sLQ8+skH8Pb52lL1vpWW95D5GvLJ0KL33NWw+DxAMvYZYDDyfSgC++sQwPtHRGj4Il08+GUWhPgKs+709jz89fG39vOtVhT43Ew++ryeiPZKJYj6jMFq+7z4xvbNZ4j09IAG+/kXPPaXPKz2ZjE29GIk5PrzxAD0fuTA+gUBMvZGW2z2FPim+uT/vPXZ9IL62SMy8ARdlvnTsw71xpRy9qc25PWspLL4W/TS+aLCgPTkhCD6UxOe7HQtrviqkEj2gov087XdsPjoSp71htby9++kcPv6HKz6ATsa99RlXPXOoD76hNC49A8NUvVRk6L0lkoa+f1T8vNcR9jxMfGo+nifXPb6RUDweYsQ9Pbwyvn8OC75a9hg9cPdqPSQUVrvhafq9DmOCvHBFQ7uRUB2+Zpc2vhRtjL3X7mU9mSgkvcZCLD4XQFk9LXmoPN32Nz766bG95QbVvYle3j1+tjw+3+D+vUnDTT1F9fS97ja2PbyX7T0tWxK+SBn0vXPjIj7dEsW9msqCvYu7Nr3SM9u9VlXHPXkgBb6gxGQ96vE4PqJqKL2cn/q9WBxsvEPR8r23NAI+zaBFPv99pT0BbaU+ERSQPQivqbsseyW9KyeaPk8Z4LxGYTk+lTCku/Kpi72YfBk+EBq2PcrwQT66diY+Gf1ePXW3oD0W/dE94NVQvprNE75F3By+Ycy5vQ0TAr3dX06+mE6VPCQuzr1jFYu9Mu1vvsk54TzXe/s9s5dgvifwijyUzkg+H+NYPs9dvb3GURe8MFqZvWrthT3yQtq9PXt1PR6CpD4UFJ+9rwF2vcBWkr6Cy6w9cTorvr8tDT4Csbc96pIfvhZxlz2beDu+yLkYvUKqAD2xoOg94JQKvsGZ8z2xYwQ+gAY1vuphFz6/aEc+UWeqPWAFQ7xw5yE+LBvQPftSGj5BY3O+EcoFvmxsUj7GkeK8i8IWPgkHU74jUlI+HLgHPYJlUT5LoKe9uIK0u07VHr5JVPW94lvxu1BXkD2/7Uy+CKALPrIdhL1PdhY8tt73vabEfr5lwFG+u7ULvg/0Gz7N/kY9n8YbPqe/Dj73uIg9Q18uPaJ5qz2ttDu+0xESvbP4DD5kjz++DwcEvk9bozxn5EG+ZkLUvdDWMD7APSs+pzzyvIUYFD4CjF+9BWhQvvHkFb0VjLq74jRFPHKKTb6mFTk9PnQZvlBNbr0ysja+gNdfPQtr8T2mPTa+pN3ePcWr6rrrqLw9T5xbPvjpkzsYew4+DoRhvYBLxD2I7Je+y02hPAmjXL6PvVM6fo9Xvu8vIz44BsG9PwTdva20pjwkQN49Kq+WPY7Vhb55Bjg+RVvROixXTb5WG+I941y6vTP0YT0EANo9g9PRPV08CL2UBky+J8ykPSrNpz1BmlI+/Ns1vqpluT23k4E8dgfbPRWxSr5dzKM8t7WaPXZcZr6+R249FzwPvvN4hr15zFC+VkVQviZgxD09QLs8f1NEPgaNHb4wrAm+DyCbPGk+LL5TMTy9zVWkPkzbebzt3ne+hcV6vccVQT4rvX2+e5JEvm8WOz6IT52+lOZGPsbmHTyZQEM+AVeLPDGeHj4xkky+QvBXvnQxTD4p9Lk9/4eaPiCGvT2nKgg9rQgKvnpTPz6K0ZM+yL44PHQeFD56fAK+oyx5PlGaDT5tdSE+WZmWOlCmXL5S5IQ+/x5vPdoXCb4oAGa+xvdxvnRdJj4fEY6+98WDPjKpbDvgF2e+FjuHvUQq8T1N8UA+Xa6xvJOjj72AGkA9qMd/Pkx4A74kV469AQwjvryKWr6eutQ9vmP1PdtctT3HjNG9+yYCPjrjg75mIrc9psYDPRKZL72QsLW945tsPgosQ77UzF096KNdPvjbA7qf8vC932RfPrDFDL5b30k8ZiRePh1dJj0xiFS+yQ8XPd8jiT2m8Wk+VjxKvhYC7r2Twio8ONW2PaQKJL79LbE8LFkvvuE5UD70VX48OuFbPXKH/j08kdC9YbCBvWexAD5T/0E+cJqDvTh28T3QMSk+HI4FPrxI0b2jEQe+x8Uwvd7t1j0rQT49Uw0kvWFm6TzqBC09wrDgPVrG4T11hSA+b54IvbF9PD4bW869OSnEvesjWb6ztRC+Gd22vFGpWb6HiL48/vJovsBvUj7iFGe+DjZCvPj4oL3rkOc8ENYHvgmEgr5vkWS9aZSHPWWfiD4mboe8Huffvdvbj74rhzQ++V81Ppij6L3elzw+v7yNPL8yz71vFou+aUqAPXb5+b3zg+s9oHdFvqZPgL7y6xY+WWgcPvHTM77DZra8EX84vPwAML3V89u9VQtYPlRomT2Pqds9/GcpvTvdJz0iJDa+cZNSPq36kT6CkJg+dWYiviGPLL0unMS9gUyWvc8Ghb0ZHro70EaMPVkOPb3msDO+JYRuvGN33Tx4Kgw+N4MavvzG/D2p/8I9SzcePsixCz69WD+701Y6Pi4sKr3al24+RLxevp1pM72qbWC9Jpl0PVJPiz60BLe8U6P7PXJUhjrMjbg9pEzSvdVJ2D2mJos+oisMvYDELz5Rroa+PV4JPicdQD790t07jttdvvGQw71Y7+g9SEVBvsIntj2cvCa9kmxxPW7yiT7nT4m8GeJGPs3fED39AeA98YdMPk0/hL1d4XC+Q5kPPqmhTj0aetq9HzRAPEn/OL7ZEBI+gfEUvg2ynT3KP8+98SI1Pn1gxT3/p1y+0OsuvpKSBL2uDv476KY5vrGqXb5iWdQ9fwaCPog3pT4gMue8ZP3gvT+VFj4sHjE+L/qiPuSplj0GMd06CSxGvlHh/b0GvDg97IncPPshWDvEMTs+2PnwPejVST5sJEg+PX5AvlLoJL6hnnk+2j8LPmGaMz4Ql4W+CJmGPU0AoL1CXs+9rvdPvu/yiL0yBBw9Mp6kPVaJRb5dws+9K3jAvZnvDD4oxyY+KqHXu7VLqj3kiWi+37B+PLgZi7zAbOW98x4rPaitM76lb5w91GemPTxfGD1Ua4c8+yIWvveTQj4JyV6+UltfvjIf9TvZLEC+cMCbvaR/7z2lWw++WLzgPRNyED0hY+g9MOBrPtDkqL3dotG8f91VPTx5sb4Rv6o+FPSVPcLOSDxk0UQ938ofPmj1FLxuBJY94fCePkLAhb5Kcpa9aEJHPsCdXj3qbo2+jVbkvCB1pDzwWhU+/M+Wvqpxh70m9e+9s26HPoEVKj7brR++Ld98PggCKr6CNVW+NxkRvtBF8DxyLyO+kcVJvkkTAb4Ai/s6giltvf5GtD7fKOo8okosvgfzIjwPd0e+yI37PXLw/z3d0Dq+iy4DvtHlwr0/Ms68FIuAPqqv2DsMqkW+nZ8XvgVnVz73gAA+2ZV+vFMd2z1KmOS9vJWivKm3Ib4RBI4+hGxlvmJsrDyI5+a8iTYvPm52IDsM6o0+8pmRvVpmpz01aSG+kbsJvhYpDL7O/zk+oyyrvcxpcr4jFgy+BadDvtkoYr5I9E4+686+PN4TKz6UQS4+zviIPiTk1T0pegm+8dbJPAOXFb7G8489qwXTPV48dL7qjCO+OF7iPef3sb4JjFY+XhHKPa79C74lOes9IwZ4PrEcED5GmXi+o76HvlESIz6s87a99JDovem+iL3t1pu+Dr4RPpjl7jys2LG9FY9ePUjjdT5+G0u9g4mhPj7ScL5xGow+CnrBvZm4hD4RKjM+3Un7vbGJgD747L29Rl8nvjnGWTs7ZFs+1m/svalSSb7RcYo+368IPrIPa75kLNm8WkSqvUMLiT6Q/lY+gSiKvVtFMr5d7Fu+vPLNuwiMDr7R8ZY759H/PGqi37ykKQ4+yd1UPfUYDT740zi9+SOqvS3N+D35NYA+yBP4vbmebT3T58q9WIJ/PbV/Fz29sga9BQEIPdYnXT2j2949HiwBvsBJVj70waU9asIjPhgngr1OJ2o+t62JvWGQpD0pt4e7H5UZvr84LD1uPrs8lJT8PeVgjr2xfSE9D5lNvsM/Ar6N4yY9VhLCvYt+0j2ITYW9RGEEvvHEKr4EVD+8XySnPesSnr36HTY+/q/bvKlXWD3hLqk9KKimvWWa+T1laAs+YoNYvueWTr4/xIm9uQFjvurFFD6bqAu9n+P0vWm8Tr6PQ4S+g6dJPeYNHz4Evk2+mVhDvUUSQj71lMc93GktPfwDJj4Ps3g+Uv8jPuAUyr14caK+mgk+vkmAbr6fNEg+VkMMPvHAFbtLdPu9DzK3PdfeMz72dgc9ifAIvm3F5r2+gL689opRPsWmUz2cgMA8pc+mvRyG6D3jNme9KYsHPj2YjD7EBGA8V4jZvY+TTbz83Ok97EGsPRekdT7HuD0+SBhlvk4NRj5V4ic+kA8zvZa7jb5Tjx8+q+l7vqJ3QT6FTQm+XZEbuzCDLzzPtuu8tyDAPV/1jz3ssGU9b3mwu/Y9k75zWuo9TWaIPkyv4Lzl9pi97cfsvQBb2D3mgew9UB21PgSbGb7mNQs+u0EgviF3gj3R5lc+4Ph0voiYCT6QfSs9pi66vXoSljvOlB++gWzBvQeLzT2AnEE+bTPNvQ2w4LzZ8M08vMMBPoMyWr1n7w684Kq/PRiyBL6Ia0++s6jcvSspNL2yoJU8iTM+vl6zrr0A6ji+xXCLveBktbtQLQg9a2UMPuwa9T13qkk+e3QgPlpcGj5LNLG8OGG7vfmrpLw+cGe+KlfnvTGTx74YqLM9QI7evbd5bz2Mwgi9RydkPWy5gTvCOj49uliavhe/Ij03XYk8OqINvkSnlD7ZaSo90Gk5PvIrzL3OMdg9qKZnvXy+UT6azb69946NPN9p+b055gQ7BpU5PbIkiz3asou9IoCbvlbAFb5IMk2+vqMfPm/SdL431be8tqBgvVsXfTxOWUE+ibZsPt/3gT77BBG+McnIPRG+ED1uPLC9Xc80PiYIFT5SJyS+XxQKPoEvVD4X/Y09A9H0PUoZvbuxESo+SeeDvr2u2rvnnLe9d3VnvlAt2z25k9Q9qp5zPii95j2n0ua8ZudsvLH7PL0EdX2+Mwz1PCvVNr7b8oQ+BoGFvRfScz5AEQu+Sv4fPrR3ID7sxTA+89JfvhdQhL29ACq9FIKmPraYO7yYfKW96XSJvkLiSD6XVIE+DsNgvk5Fj71Pg5O83qgIPsKfcT6Xyxk+GaU5PvguSr4Q/ZQ9yfwCvse6oT0vdzU8vEAuPc8Ekb3IvwW+1hOjPWI2cjwyAwK+hqidPs98ib4hpIS+6gCCvAw19j0LsP29gK7Nu7ZFzT2c9rW9RHZSPa14bL5DwQU+m9sivu7vnb2jU0k+tmEFvo4uqD1Y+D09vWA7vk+Npb0HRBQ++aT3vfifpbwZFAs+hGHHPbvCxr3sMZK9hIgVPS1SAb2dG1g8L9OgO34aUz0ZJIY+l7ZJPYGZLL37Mc29zj2xvTqlUb6imJe9KRS6PXDoWr07/cQ9MeM3vqz74byXNE8+vk6AvRbsKb4mfB++zyc9PkcO4b1NzLQ+QaQnPtKbJr0IK6G+yEybPmLX2L0kjZy9UuIIvggggb7z3B4+RLEcPgVTyr3IpQg+GHRtPasmsbwZIQi9mi2QPNScdz5E6Bw+d2QYPgoRND3o89u7l+RIPY5eE72RRl08fJi0PaSRhb50QAe9MxmDPs9Xgjx99yc9+lwKPa6KzzwdrXM9cipOPnkYBL28a1q+XofxvS/kEj6HA/+8Hw1gvog1Db4+hUS++VgFPSwYLj1xuDM+a70fPpaoVz4Z3OA8Zx4Avj0VeD5Eayi+RZuNPLsXED23ecS9mv4jvWelC71hy9q95vcpve2SMD6p1Fa9W6oaPrflTz1plq29dbpePpIg9D0LH509ikArvm+Phr2segC+BqQ/PYguUD7GL2E+ysU4PiwH37258UA+8LiMvXDajr2wGVQ+yXq7vfr4Nb2Fwve967HrPW3PUb5SeQu+cizUPWcD5b0kMZg+6tNWPR1Pj77eRUI+pgkuPkKvPr7MgCW+mpSAPlaRVT7Lhii+1y/dPX9Shb49jTw+j3IUPtOUKz4VXRm+qGqIPdWPP76FT7c9Z1CVvaOocD6fmDW+KAAkPQavQj79kxA+VqYcvsplCr5SmUq+6a23PfigXb43F4U+dCZFvvpvAz3menM9vodWvisQr71kVis+XKuJPYnRFr57iVy93TUcPlfQVr5rRQE+GO5WvmpZQj5gVuG8A3n+PRcHXb7fCYe+MgDzPW30Ij4/tpe+0ro2vWZxlr2zqsK9wHX/vPb1K757uGM+rd5rPSzXIj6HvCc9hxr1vRtpgD1sIs291G1EPjDROzzaez6+wuU4vt6Mwj0vkKO+FoTZPT5ytT2amoI9l40MvrrTUT3E1DA9yX28PMJr+b1hKwy+JNxUPhR6tj234ZG8UME3vqVMfrrCv8G9i0THO093Jj5Srgi9Iss3PW9zkD0O+DU+bmJ4vV/jvr04Xb89ZR+qvakQKb641SI+uDAzvhOpm7yuUEc9frisvXiuKL7cHZM9H2x+vcti+D3aBWE8laQGvnl/Az4Lvbo7uua/vYOtTzzrnuy9g/kFPZrgcL2JOA89rmUwvrJL3L0Tpqw8ZXxCvWjB3T0L2tQ9B2spPoTYIz6Yg7y9/A+mPQmRHz4O+N+8n7Zmvn+g9j00q1q9+2IRvjm18j0ej6s9BNEyPieDEz4QGmO90XcWPuihKT5tIDk+EWcMvk214D0Qclo+UXeova3wQL7DDXo+NxwNPa4P6D1MzmE9C656vpo+n70Our69Qyy4vSmjLD30y609K5huu53NUj3gdnI9Zf2VvZ/PVb5O3hq+m2eVPSwlED7ev8Y8MlUhvjbue774oue9o1ZNPpe80721GyO+LLBJvgxgRT4ayse9QattvYpkRr6O5yG+l1ddvgAAAAABAAAAAAAAAEAAAAAAAAAAEA4xPklr+b3/Zgs+2ut3PpVGCr5LBB8+H0s9PhG0KD7fiza+yRI2vgw+LT7ZjIm9VWnOPUVWSL6XDx0+wCzsPfMbwb2MdQe+dliaPe9onrzfTCu+XikWPi9VRD4Qf8W9izjPvXRyUj4dFLa94yCLPSTB1b3ZLfC9Hts2PnHTRj6doFI8pH1fPQg+h7yyA7g9WRVJvLnjmDy6BAm9IxPNu2EqWrvhRmy9l1QVvVvZjrz/S2O9bErdPZsboL2RDhC9rjW/u2roKD0jgXS98V+GvNwXez0z/QI+R2+PPXqcRr1F9BK84W3LvJASmb3sMvA8cwLZOq3bgr2Qo/C9yvIjPf////8CAAAAIAAAAAAAAAACAAAAAQAAAAMAAAD/////AAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAEAAAABAAAAKGtuzgAAAAACAAAAAAAAAAAAAAAB5DI+C38TvcjNaD0GIjs+xTu+vWqrub3IrOG9//ysvBAL+D0+fK09BVhNPpETzzxYV5m9nVn6vYvLTD6YiNm9ZeDqvf8i1j3H3ZG8qA8Mvpysgz2iEy++eNAfPtnc/Tw5rEe+/G4nPiLx9L32q1s+oDfdvNtruz0jfQ+8FCDSvaRFEr5AyhG7plHdu8frhLxUGNM9DWOYPG51nL2tKJC9A0wjvqAo/bzMbfY9nGcNPuujij3wBkK+/o4vPHb0tb2l5z++PfxzPpG9Dzo/VC87nf0ePpWHCj2qYo49LhfbPBvVED4dsUu+AfvfPb5Zwjx1Jww+p70BPabvJr6zzPY9MSakPQu6jD0QVCK+iAA7viAmF76tryQ9hUr/PbKivD0NFPY9F8mhPU8X+b1rdbA9Z0wevFf2Bb4payo+GS68vdjpvryWHpA9QJo4PvRyDT46Pd293HUfPku+AT5e8TG+qSDRPUDKHz7k+oi+AhXuPbVkPj7cTEa+RsoKProk6rxDHEu+M6A5PvzbrD1kg/E7U0fTPZBLlT1ugoG956QHPZEjjz3YEZk9yPrWPD6yNr7xulG+UPwOPlFALb65gR892SKlvcG4FT6Mu0Q+q0gDvje0RL26Gu28cjLJPVwhHT6BDT273BVZvrmaMz6oQw89ZXUMPkh3dL329s+9yPS8uxPU3j2VseK89ujjves/Lb7O6Hq+CWRbPo4efb7MKgW8hHagvdaoP76irii+3i4PPXQJfr3KIhs+18+rvTUMvz3DMp89qrmevbc2QD5V8So+u556PqnLHj6Dphc+J2w1vndrTT4lSps970TqPSENbD29+yY9ViwNPiXPBr7tsi8+b7HvPeyW+T10gZq8uhaWPTnG4z3hpAI+WUtWPs9fK77Jxdu9JDaLPR1NZL0PUWw9eE4LvjwUJL6QXN+78Vj8PR/Shj2nYty9yK18Pp393D0bSeo6LipOPp7Wdj7pmz69hoZWvkIcZj7LqIk9Vs6ePHajur07E0e9/rQFPmokR77NVic+QyRVPQVTWb1k/GS+i/vFvXlNSj65+Y49NqpdvYW4cT1ebQs+1RTePTldUj7KISU+5DHVPfZXxL0PIqG9bFAgvgt9Gz3a+gm+ZGBqPsoeNj2o3LG98Jj5vCztWj13MEc+XdQIvTS0NT5UIkS+hVOJvTL4TT7uDH4+is0pPRqXiD5QP/I9fSwjPnkASD59IwK+AigvPaRUp71f/fG9hp8QPWzhjL44Vpm9FjMIvnlBQ773wIE+CgkWvk69Ub0rCR89WjxKvsBTkD4THYS9zSBUvJ3HAbtyYFg8jpRiPpNs3r3V5tc9BV4EPeYHYr5D5Kw9h4sivXEjhj3CVCc9l1bwvcQ/9D2TFNi9zdylO+/CEz4TJyk+XlAhPljuDT4uE12+1hvSvHDPR71NngY+iDeAvsDOKz4nLEa9A+kEPpQ/07qMxE8+cKyWPL6eBT3GkB0+1KTxvfXtYr7w5Ri+7sq6PYT3Kj7yvwk8UBSJPfYgIT7SH6C9odwFPi4yJD6wHRO9wzdOPg4mkj0LMiE+mXSnvSft7T1Trt28wlVDvjAW3j3aPWM+3xQEPStDPb5bw7C9sQz0vWMAxz2Vgjq+O7Y8vil2pDuWRXw+7k29PYI/hT1b4tE8+dkVvpt+Hj3SJCm+9hLHvWdLkb00fke95nFqPvrJIL4s2rM8fsIUPjtTpb3F+og8i2d1vNIxdT5aeh4+kgqmvSYHHz4XgA8+ZCYovtsghT3HLJE8xM24u85MBD4yXz+8f5IFPir6W748B1g9j9oPvjxMEr6g/uc9QrLHu5kWHr4d3wC9O5A1vXVK/Tx5FQw+wTWLvYKqNT7hNTs+beQIvhKmgz40i4O9IcOnPRj0lD0FR7K9lR2GvYc5Bz6KiwU8x+5RvnxsTz5UzYa+8RY9PHee0j1FseI9CQ0Lvnbapr0Yj+E9ZKygPejENj14/d+9oqEjvlObkT7iAYq9mF4Jvkiob76aERG+sOQUvnFoP74vFie9R+LCvd+5ab5cEco681+dPL+fjLhFBla+qJLBvf5kJb0Qdg4+jZ+pPWQ9mzvcMQw+GGNWvu2/CT7CAHW+MBAMvtB2GD6Znzk+EL/1PeDlPT7mBrE9YtHsva2Rt70VbzC+dQe+PRq/k7woVRk+zUdpPXDxSz4Km3G9fDnHvQFHC77YNVs+mC2NvdZA5T01SjM+cGpgvTnUCT7XwUS+5hd/PRlRhL3SgmE+BctKPu33Tz7rxpI8kucYPpAkub1W9DA9XIDlPXKcUz4Ivae9vV4xPpdAkr3xEFM9BT2YPU1IBT7Aklw+JF8OvtvbET6tx0A+v18HPXEPFT52wQu+slsjPoahIT2TLji+WjBFvYoU/D1Gnvc9Mt5KPlcgVb5WOkE+ToCEvf9hh72pPgY+owGHPIbgqr249OA9cYldvnqxBT6lrGS+mcgIvbMUDL7DWxI+zn4HPsf6CT1GiV0+9L5WvmB8JL68gf69/39LPgNAtL09xhq+3yJRvgNEXb5Kfsw96wgmPsB2Fr5cufy9VWWpu5uYkD3D6qI9I8AovsGbCj0bJk0+3ZGrveQdFD4G0EU9qTMLPqEyVj4nURm+O+u7PWlPKL7gtdy9wK27u5N6e74RjK28jt0bPkGuTL6cTum9F0J4PVHPC77bfVo+MMU3PqeTur1FuVW84jBYvj9uDb1pNxI+lqbNPd+EuL1ZGrc8eocBvnJjYj4jekc998gvvsT8Oj6a0B2+BBcAvglmMD4PL8S9H9ZBvDAi/7156ye+lCUmPrSIQju05oS9vOVAvKhd1708AUo+SOdivsjGET7Z3CI+bfAoPKZAD74vhdu9ETijPTnFMT4hxyG+2Sm1Pdh5P725BDk+jmOSveSvtT0/Tic+husnvux2yD3p9M+7x7VsPcrQED7hfAs9K7wNvqaP8j25nW+9JcHevFLEWT7Huzg+h3q7vep/kr0nK6093eVnPuNC8j2X5xw+OBInPnsUSj0oQWa+Nv2sPQgJZz7kexI+NEIPvlxPPT2eQjG+VpT3PcpDwz0slAA+lQ1tPl8ARj6uD529N6mwPNvfur2RPi084NdFvD9jOL6aGSm+Q65DPr12AL75DCM+2D7HvHibkj11i4y9D9VlvjEsmr21jou7V8DmvbPjDzyhaBK+FMSRvcKTir0Zhxy+lUNNvbLx6j3HM9s83jmyvboYYL7+mQg9o1dOvGvo9rx8ZwY9o4UIPvNAer4ImGA9rZmKvTwtCL59kHI9apxJvvvDHL5SW6Y9KCZMvoBjC74b1Xk91ucEPY++TT6tPgk+XIYvPvullzy7rrK9QxINPtuBjL3VbqS9R90hvDZTOr7w6L484V8cPkW7TL2C7Sq+Q3I0PusAGb5bhRS+/6FIPmeul73Rdhq+vcTKPWbNkb1vGxe+XT+9vVuHab60ZhU9fbBRvtpUrrzRjzU+bXI5PkLc97yD3ws+wIMIuxnowj0LqU6+cz2cvcWjeb7VbfI93BgWvtiZIz4O0xW+K1iXPYXBS75daqe8vVTSvVM/3r3q4GC+4L8vvucAMj7c4zC+crRKPqwhbTz/SCS7DBj8PAJg0r0L9T0+C3WbPeIGP74Hhym+1ZF4PMj6qD2tkL88Aa0yPj5PJ76z6Ou9wd0Dvi2cN70/lDe9fCAovBY/gT1H1Q2+xO+TPeBI2bxQJqq7wxw9vqAtEL3Q/Uk93am4PeE03D2UjeO9r2YOPv3Hcr2y4188oxRjvTJ8Qr2urUu+riYJPeJkQT1REMm9G1d8PV9MQL45O949dL9dPoezHz7LXv+9q8auPcUeRL61tys+b2iZPSNQND4zz6a9LrkFvoARLT1/tg0+aZ+ovbT0Vj5Xp0W+TvVcvr4wa74XMcM9xG8oPontCb6KzBS+cI6RuOXORD7fSE89yxjkvZktdj0dsoi9wfLJvVpzCb1aFDS9dAwhvvHHSz4XTMO9+HJJPkY9Oz4Zy2u+fx6bvAFTzb0Yb+E9zLAlvu9VFLw4C7E9Dk+dvVdm6zy+3pe9C3CDPqBZaL55yzo86dnXvLsF0j1Pbug8g1M6vXKdGT0T9D6+pG7xPC8xFD5ZtOM9y/qBPbq/YL0mJIO9pQTmPZbzSz4zbOE8AucBPnojGb4BQwI+rDFDvh3wTL62U4A9iv0SPkEwSb7QCjq+G3gVvvNh7b3Osjm+U/ySPYflOr5r8BU+qBwTPrTnCD5olA0+cQi7PWahIL2aKiK9BRGovV0IhTxT3gq+hLIaPmAQXD67CUm+vkl8PfXqez3H5Ic9PEEHPmZzYT72Lx291CrUvJpC5rsB8yc+CgxuvVE6krxrTAO+g/tyPchl3b2xCIi7d77qvUYOXj7rSz4+rn0ROgvhHD7Ni2e++bHMPcxd572TgQ49yp0ZviL5WT4speo9u9KgvbV2WD0zYjC9SYwZPnUYSL0kBhS+xXSjPSn1ib1Vtg6+1xSRPcIMV72l0Uo+LmAYPgyY770k4qg9wpNDPYCvwb0f9Ea+uxKhPYoyBT4l3nc+d5w9vjnvAD6Y0p09EbFZPrMceD50ph++zEuZvTbHpb36qO89mIwNvYF7Q74TGQ0+SYynvTTHsjzqQ10+2VSwvWi3UL41wjm+xThTO45Sg7xnJuk85JI4vgQtA74ttvw9mnQxPqetoL20VSE7C2v4Pc2p/7zmL8W9S3IkPRcTDb5qih++6zbvvILyY76ZQlM+QElBvmqUOD3xcxw9dmHkPadH2T0T7X28vu8DPfQI4z1xPDi+lK8bPnNjED6zMwu95V8uvlG5YD0MQSU+xQGsvYzvoj3Asz6+aW8FPm6ghD75BW8+QxwEPiWPRb3cHM48O0q/vZ2aPz6yHdE8GailPXYjZj7bXSa+GnZhPSl8O70YF4m+f4ecPY/DvD2HwY088kq3PXeQcj5H0tW95IlHvbzvAL5Vau49TzrvvU2C3r2IPXu8zJzvPUKmF71L9689nnpJPhkAVD6pW7C9yKMmvqzxjT7Z9DM9B3zhvfCiDD6Pzlg+uPmLPIrG8r03Mlq+tCnHvITgvD1tQYO9Ey4qvoHmoT3MV4g9Xt4ivtSqgL046vy90BUJPnw9Dj5MuWA+YyNuPu0aEr50lAO+lm9iPqrPVj2Jn6m9AvpAPtcv0z3SVCw+8eGvPVTHAL3h4ru8y3/WvbFcgb1wCh++I2/tPSTqjbzTr8K9Dz2PuqiHv704zQg+/GLuPX+gqj3ix547Vn7TvZwX2D0OPk4+nZENPqFDSL4bBBK+8Pkrvl1HGj4SlZA7eS+wvDtuqb0z2q69EX9dPRWnHr6gUEa+Cpq8Ow2kHT5z9Ri9k3BePPD35L0uEXw+nuw9PtScrD1L/pe9NUm2u7q6rL3WhGO8z+PgvRrXBb7LF0U9xaY+vmZLZj2OzmC+SKeivdiIgb1flqC9kOO8PR0bgD3KE1s9nBxIvsDjSr6RL6O9YCMkvRjRLz18XcA8NjC1vQzv772Nx+S98JYnvibvVT4fN/k9r1Q4vqXiH75VmRi+1MFnPb8Psr2S18y9psUxvv+KfD5gk6e9cVRlvi1sez4vuUm+0QYvPHmCJj5gulK7n2YnvpIXiL738r88WlJHPqOZ+7xTk5u9cz+AvTY54728mUM+xFuuuizg0D21tWi9BmY4PdX6U775Lui9Licnvi1ps70yXy2+1agEPrz5jr196BC+85HzO/i0Kr62AFG+89MOvgNCBr0HMSa+dFXePczKvz3p00o+tBFAvvMH/L3ih6G9iJh4vfsb/jsrMxi+QG9EPmVVc77851O8iLgmvOzjPD1HeT++TpMvvb43Mz25Ka49CFgCvtA48z1EgaM9uqcWPgi1cb4dqGk+3aAoPg7VYT7GpSA+i8kFPkeRCr5eMww9jpWgvAGORb0U1YW8V3OcuzNvJj7bP/49GGy8vV9y0L12ozK8HNcLPZnNRD1ALI49wr0ZPm8xP74TRyw+8B4/vhE05D0SC6Y8caDsPV2Pxry8sEu7igMIu6gKCD4plV4+hv9dvmaGmDxNFi093M0vPp6aUj0HdKC9FSjDPKLLWr6K+8w9mfa1vSt2RL7lWIg9KzgKPvRp2r3ol9C97eEmPjM4gz3kTso6iwBGvSWJ/r38HBg9pPXhvU/PkT1KHlM+KCgjPjPQkz63NZa94cRqvrpKhL0CAnM+1N6wO9ZmQL5i2hS+6UxmvpHFkr3jxKw8AGSovBK0pb3PIja+HY1DO+w2Gb4/gp++hA9hvTZ8aT0pDIe9J167vWXftD2d8N08Fr20PTbgeb5heu89XyUUPcZzCL7njRY+HqpPvuZAmr14Kjy9d4BLvVBjZLwLtYu8ICV4voDWMr3DCFm+SEwhPgu3pzstVq09f2gZPijeUT4SUIW8pac/vr82FD76+4y+f8UbPotDAj414xk+MR+zvIU6A76djcs84t3BvYE5C72friQ7CpsUPpvfBb4lKz2+Z9EIvqyUTL7Ftj++0qmxvZniIz6FYv28DydUvvYqVj6EYui9OgSxvRXb+D0IKVG+gWOjO1ZMDz7cDR0+sm5cPtIHsL2VkFC+ZucbvuxlAT7XXX68k6qZPfu1i73mOwI+ng5XvdNFwb1q2fw9a9M/vhQvjbyntt68roRxvWlmvD1RckS+VLRMvnLJGD7DoPU8Cd8Ovgir372Z5Go++485vlaYZD70JR69KMAovjZzkL3Z4l0+DXiuvMd9RLytIGO9ESYmvX2wmb07lTw9VXo4vmVxFT6xomI+iyQ8PoSwJz5fCVu98ReFPfv1yj0KVhu9IyWcvYYXuzwGFRq+uuG2PVTDJr0ljT8+IKV5vWS8BD11dYq9nR0yvbJqkb67I2q+lw40PVeKF76giYy+5ZqDvhnWRT4UpAo9kGLAvRb+Sb4JAuC8kFJcPV9xpr2h4Ma8fv6aO2MEOL7Rsxo+qOICPjt0Nz4Ovzw+MPNUPjYrmT40jcO9D2CGPWEW3bumX4i+JG4bPr0h6L2RZ10+DyAevv99nTy3gBI+LjzgPdkKLL7hEZq+40tIPhEwMT5QZNm9C4vnvIaVUD67xF0+W9BcvTlcSr2KlGs+VS08PjAid7ws4CQ9YGmQvVasbz139zW9CpEdvs3GhDzvSWG+ofuzPezDFL5egmk+biGzPavhwz1UhNu9t8HgPUgPKz7j+ag8+KMvvgrz7b3ql12+tVs7vcn6Tz4JUg6+Jp4mvr9hUr4Ptji+ZSmSPDQPCr58Dw2+p9KDvcYbS71ku5a854kJvmlXwz3v9eS9V2eZvQqNOj6MUyo+Jpv7vPjVQT2xbi0+UF+LvVcJ+z0Z9iq+ZJpDPFTs772tPGU+QqKcPJ8w3L2h6Dc+XwlUPmC7Gb6QJfa8+J8hPtbdjj129hs+wdwHPkXjhD18Lky+18U3vgvWqT3A0DQ+ijEtPjL5Ob7RqQc8Mg52PvikhryTZBA+p54Tvl5eQr2VkUO+ZtNTPQ13Mb3yQY49/nzYvTHI9b15dwY9DCUUPmCLDL74Er+9RJXIvXcFFb51wrO9O2UqPraUXDzIqFe+iolFvSsPQL6MXts9o3PBuzKqn73U7m8+kpptvgAmB70trQq9imL8vHQQGT6Wuik+QwrWvGSquj0tA3E9x01ZvkLY2b0/mCW+zWnWvWwjCz49WF49HMuaPvxPgL3PsjI+c8MIPgc47rwZqni+kJUkvotvFD0MWWU+7AoMPrxGur1jeRW9pCMMvmeMWrya6zG+T7BYvgu/ST6eiMA9VByLPvLHIz6hmvC5NGT+u8Mgfb7hLxe+CevuPRj+Pz7FGce90wI2vGUmKr5mwSA+BR8Hvm/eK74clU4+r1dzPtcfR74gUzG+ErrUvWKl77yEa0a+niMvvjGPvb3tBT69a5cxPYvJNz6o2ca848qOvfKvL75TUxu+qPfcvTXxEr7MdkI+syItPbq6UT6UBVO+NOn9vGKyWr4Ubw++2hgFvlnGBb5c1fG9vNM8vvwARD6fcT8+JQwSvsJGyD0B2DK8jK1fvv8+5T3s2f09rouZvO86Kz7AExy9sU+pvfnY9L3Sr8C8sE2rPPjdYL7Hmc+95FkRPiCPrb1m4x6+L+OgPXRdOT6lHyG+W88xO4IeXr6d9jK9g1MGPjXw9b3Q9T09R9Z8PYdo0j36AC6+ua7vvaTypr2qFso9389oPWLiUj4nOay9jIamPWzVvr3Vo+29IKblvZ7Vnb33vdO99EUIPRLWoL1OgiO+SpJgPuyuE75pQ5u9vtmjPculNT5zvpi9SRCMPM7AKL48rG49IacoPo61mzwlvnM8GmxKvruWWT05lGA92otaPsDzlT1ICuo9uNOGPQuaVj6O2SY9+4ktvuuZRj5gV6Q9R69QvkTsMb7ScSW+4W93vYPZrr1ZSVO9eLIDPvqEkD0LPoa+b8iJu23Txr1E8nW9AnI1Pj45AT0gegU+rd9OPvzF0L38KQQ+di5tvnTVAT4ZUc+9IwCzPfeXED72nj8+NN1fvMuoB74mF0g+fa1OPl37Kj6S2Dm+XSgSPhZcUTxWzlq9ujByvScvqj1kthM+gLa2vVhnkj0J6UG9VqPIPRg7H7uWkAy9B/88PtNqij14VgA+g9VavaLyEjyARg6+8BW6Pf3AJT7kFso9fplnPYcPZ77oD1q+FPgOPUpeBj7H8pg9bGk1PT1r0bwOEBc+RO9vPagoNz0kGUK+kijvvSGLf76/vAo+exdNPc7PCL5zKSe+is2wPVgPR75RA5k9IPElvdWfxD1hjmq+nTJZviQyHD7XTvI9luElvWweoj17/TI+CMwiPuQ9TT54Qjq9rERFPnbhAj7ptCs+bXsJPnPIGj6o2dy9mzV5PTaAbr19/nq9+KsdPi0qAr36SQK+q1EQvbPIW76tLgI+PH2AvZtt8j052hY9wjbgPC/Dtz2R6r+9IkwxvhKmCz4Ttkc8y10vvmh1Eb7oPag9+q7gPSzEiD09KF2+ZhIzvqkXfb4vb8E9fMO/vXhMgj6yF4w9MfsvvuH8Or4Vdoq+i3asvdxa/D2cqDO7HaylPdYUTL5i79Y9z5u4PTQXRr3Y3Bu+0ZNtOk92VLxDcLA9pFciPjWnIL5OBE++Tek/PjB+Hz7VrEc+kU6zPdUKbz1oQje+IENbvgJmzr0/Ehg+R2J6PrYRAD6lnqa9FyUHvtwmJL4Mzzk+601lvVYpED3SgYS9KadjvY+x9z22I02+BBX/PUHCNjoFq0W95LQcPZ+hEj6PJEw93Uj/vbOpe73p9VW+31wfvsEfRT61jUi+BrZNPmG6Ur0IYkE+AWH5vC2cM76biwg+NvINPRRxDz45E0Q+qlA7vcRcbbwh3ni8Qa3DvfVsJT43ag8+S+jnvdA/YL5uK5C8HRVkPlOw1r3nmQ6+Qk8ZPTuKHr7vD8i9EwLtvRK5aD0jJwQ+YehmPtoUDT4JMtc9aN5QvrqHO76Jgw6+m3Leve+Plz2qyBW++Q8GvnT/Or5qyN69YfrDvVJVX73HGJU92H2hvRTNAD6COCG+Yy9dvuJ3wT1tDkA9j5MnvkIsMb5Quh++90s/vvXcOr5T3eM8s+ZZPQkDzL2Ng4y9LheyPWItlT0UhSG+1Otrvgynwbw5tXQ+2Tx/PYXU/r37lRI+pLOCvs73bD6LtSU+V/GJvrmcbr4cpPQ9VZY7Plt4f70FsZS97mAOPiKspT203aE6ejGzPQYDQr46WK496xPVva1og7wcIP08NUb5vTkv1z0QXIu83mT1vNYhQz4UU4Y8igYBPXtksr1TYdI8QeTvvdVPhj0dO8A8qWTiu3q5GL1kOgW+e5fTvflMWL6eEoO+1pi+PayiSr4whVo+tgY3vsRvT7u/bwS+XjBvPlb9ib7x01M+wc8zvifpSL5Ms1i9EozqvS5HKL4F/nw9wSIYvTyWNL54EkQ+T6mVvWCOwL1mteI9aSIDPgHjyr3q3Tc+tcbdvQ2GSr3zbVk+oeIBvWaTrznILZs9uIfdvX0+JL3NHyy+WakrPHENAD4muNO9cNgSPplBWj3QLjI+JgqHPdy34L36+GY+XfjBvOR0TT6YvVq9x6c0vhRxrbvl15G99GkMPiQDIT6TM7k9mUKRPRkZYL1wEyU+asKQvQeHR74IGg2+/v9iPsJFTz4Nuy09gaQOvbERTz6UOeq9TH1HPl3sZD7zJOA94TEovrnbDT782Ee+1GXpvfB7cTyVJhS+hMz2PbWRHL6r5NI8xfY1vBi1i7zd5Rg+64A2vmEeST7mkmm8PV0lPdGQFr6qiVE+L7t1vm0zdr3o3hc9LttWPpC+yj2SFz29ag0cPnv6dz640BW9hZbkPS4iij3167I7FLPfvXK5oD6sT5k+editvH1lLj4nMQ09cQkNvjPfvT39kp47kxLFPaKdsb2FnIc+ABBMvDv2LL7DDY+9aXH9PQcaFb7Nqhk+1jKbPl3SoD65uwk9qLuxPbaW4T1j1Uc+WYuaPLVeSj03Udc9VKMPvmnCCz5jPdW88PemPBetMb56awu+JweYPufDsL3u8zm++D6uPRODhbx9ZY0+vWiJPQAV5r16tY89i2DOvRpuU76l4pW+k3S+vvVf0T1+vjU+ehcPPLf/B75qNoQ9FDZEPmG7EL4Pf8E8e4g+PeeDIT5TNgU9Zn1bPquaCj3zMKO9UJUJPc7cXb4rS4s94ZWVvAIkOL2X5hm+bVEtPjC9ND5QBzS+vvS7Oh0nIb5KtNu8IIJBvlh5ur3aB1y+UE1avoryOT6GXSg++bGgvJvm0T0iZzc+N8UyPgNIRb6Ldf89r96yPMGfGb5kWVE93RXvvcPvNj0WFNm9CHYTvgf34T2B4UA+pmpyOx+VG74aCOu9a/Y9vT6jzD1vWkK77a+ePYnJ3L3HDUe+3dI+PvCrNj5x2BA+68rgvVFg17wRIkI9fc5NvlMOT77+WDe+MHo6PtAoLz4lC1G9l1tnvi6Urz0ivyI+XZ7RvY2eFr5eCSS+Ra1bvZvrH75APq89bMTjvd98Sr7I354+f8c4Pv1kVb6TQ1u+4TFevvm7lr6JA4O9L5/dvRfr370nz2I9kmaEvRPEl7yPOFA+f4U1Pv5Eeb41uYC+b73dO/Z3p7urmCw+DEiDvqjoQTzi+ny87zT3PKYtIb711TO+lO2/PXMfi75E1xU+hWX+PR2bxr133H49bVTTPYXSCz7Uu4C+qdOZPlJAQD7TD4w9HLJ6vr+OyD0IKwE+CJODPf860z0eqfU8Os6iPY8LgT1p8go+ZlCdPJbudL6JagQ+74ZPPp+roj3WfjM+N+oXvQoxKb6fB7M9wtcbvkS+Gz7Cdj083r0lvrmwkj1oNUO82ymJugi2ED5uZkc+fH+SvV7Thr1Spl8+vJ7rPbm1GD7qzsa8BxPmvYMw4b0dfT4+EDwvPp42TL6cfne8GSXWvd14I76XtDM+KOHQvZUG9D0+LCE8TY+svYDeOT5r71A8sCtMPonsJr4q/JS96HLevW6xgz0yqXU792BEPdYaUr0bZzq+hbZLPrK6Cj54okM+rRPBPRs4Lz22aJQ9+tsRvnDyJL7l7Rk+jUj2Pctdzb0p32U+HZ3YveeDQjx+Ery9TKxcPQu7FbsTFec9fS/xPQ35D74BzAa+wpkuPcDFDL6Hp1c+4CHAvHYCkT6AZum8S0X9vRkhpj1wSFU+iwf1vSl5mz23DBC+VgyaPvC9pz25JlM+qdJBPKhNSD1FBP09Rlu8vVLAIrx+TJK9B5UKvmNygz5Q8vI9jRPmPIlOT74Royu+EarCPHWvor7IJzM+R76FPV8fKT66hpG9wF8aPj0wDb5NYSW+8PB1vpu1k71l58K96fRvvnjvlr28iz2+++ZxPoFQ7ryoMpm9N3TivcFA7z0iEKS9vDdDvLW/PT4vFms+zAZoPm7bjT029KW9JdarPWhfJr5dC5q99FXFvfXLPj0YGNm9Q9ePPnbW4z1nDwo+rRtsPlE/1Tz91es8l0zOvZTDpDyTu5o90pBQPmdBzT0sEvE9IzILPg8/xr2/FOy9IftBvhprjb2t3PC9JfZaPusYTT5vao49jBRNvqP7MD7SGEE+4aFYvbqByTyZmQ2+mzQdPm2tGL4g2b89aoSlvfZLX76D7dI7BKFPPhm2OT204Yi92S9JPm6+Nb5xNBy+uh0uvpWEZj5X7Nu8yJJAviCXJD74EjC8FrJYvvKaOz4EXb474nw9vSAA4j0Y4QO+ekVLvKrQtL1jXA0+H8zkvVSzjryt2Ds+mLtFPkTSYL5MHhI+ew6aveh0abtyqDg9LQwWvsoLTb7dXRS9iHIePgKi/71+lhA+8k2gvbdulr0z4xE+6i7hPabdKL6V81o+oSGbvaAm5b0ofhA87FiCPkV7/j2nfgY+K8VOPik3VL1YzEq94zo5vION7TyG+A0+DybDvRH8P72wus084BfZPF0v7T0Li1I9YX7EPfH7wD0MGwc+XfKwvUVwNjshF3e+n8eavgXO2z2Sqoe88v8rvYHsNTzPC+Y9vOaavcDuAb7hs4A9K34tPtEzKT67ieu9hCm1vJdigj1FHje9Xee+PZe7fz7daGY+52cgvuy18D3/jVM+h3eDPjThDD70ViM+t7NqPvc8S70KD1s+px8xvWAMwz3rQwY+0Vhovj5Mxr3FB9s91Nz3PdA9DD4NEHM+HimcPVxxajwZgES+kENeviLOEDzErGg9QqrIPcs3arwjtPq93zh1PBTKTT2F/N09ccQCOiLdqT0dkak9Ur3VvQj7BL414+e8uFEdvlAiNb17ePe9cHWePUshJj4rwds9YjD5PZrMNj5/zGU96b0uvAqukT1js928WY+NvekyIz7PjbK9G51/vYCfEj6pcu49zNi/PFQDx73riPK8nDY8vvt5o72aCvM9ghu6vE1PNTvtThI+rFV9PRxA9z2nI9g9Flo/vnNRvDxIpGO+PmYPvWCWUL7v3QW+VxZyPd7qVT448Bi+jFkQPvsC6D1HcwG+yK0/PnYZ8L1faUy9x8lCvo9zeD0Rv3o+2sFmvWrQD74i3dC998CyPYTPxj0wsRK+h2AVPo9jZzwfPZE9JmSTPTzsdL1c0/M8xoe7vOA5nr0Ybao9KaVGvSdBg72oDku7jE+GPts83b18bS2+x/kMvufpGr5y7GO+plfdPZEEMr7KS6o9XHG1vO6Bsjx8+1I9op6GvWYaUD4jFiQ+Hf4zPsKUsb008jQ+x6dEvTLre74jeIy9Sfv6PZfdSz4EjMy7xKeXPs3RPb6TD/69gakePYDijj62pCE+wa7GPbWFaz68K489OhIKPUFoJr5lbUq+p/2KvpwFRD7649O9+2XYPWhGhb4pfNI9ArsmPgXJL75UQx4+cCw7uxDwRr2+9yy+aAeqvXuygb0oqy29/Hi0Ovuz3D3hdt+9KIYnPu96P76Qo6e94qkmvOWtVrwJ/K69YggZvH+72b0tdEG+JBSIPchla72HxC89WCSIPfqZAr623kq+sOhLPu95Dj4wmtY9kOXcPRUYTj5ZnIW+RZWvPZYbNj6stuI9PZyaPPttHD77LhY+EYb6vM+0Lb6Plii+3uU7vYtkFL46syW+K9QWvamRAr6Dfxs+PTCpPdFyaj4XKIS9eBFoPWyrrrw16A8+QaaSvfk8Cr3p3Nk8vdmuPYNZ7j2OV/29B9tGvSKiID4kXPa9lHoTvtPkCL5MP4O+3bTcvZ0q+7wFiyE+bXybvRQZcT2/vrI8XHAGPsysrz70yG488pQYPv3rZj7VXCu+FX97vKHGIT5rPA89HuoovjOtdz6J2C0+iGw7PrUSsLxQpji++9qKvdjcPb7wcHe96lewPbShRb2P7Oy91Cc3PkZJer0mNz8+VhWOPjL5pj3ZE3W+cFBrvhLZNr5d7AU8LT8IvSN7+L3px6g95cykvdypo725tiS+id1XvZ4+8r08UQS+ysPUvbo6sr3u4wI+k1GNvlRrHz72Y3m90+jtPT2koD27L0E9GKItvsiHAb7FU4G9fYoMPh1HLb7eGoQ9gfYDPsWG/zwTcgQ+9zjzPW+ZQrz6FTo+99bgPRQvxz3yKwu+y1tFvvLgHr5svvw9LDvCPfv1kD2D/SO9PWshuycWGL4Uz4c9KpEEvvRzpj3pUAe9CEC6u0vOXr00uSU94dPAPAq6Vr7vBjq+iFEEPiU0KT6bbGc+NIRTvn8mND5mJ3++cFdSPSm9FT676KE9iDdJPhVrLL64Mzo+MC8Svlq30rywGMW8unWYvRJW8btTp3m915UGPJEfJD4Yq2Q+OW9TPtm9JT35RUW+xV7TvWFZqj2nGD0+gj2lPUMsqjzYmR++xDJYveIRj71LWdc8hyPlvQzSvb38Ykk+mBgTPXdiLD6w93U+wI5zPsdMU72E9Me9Hh0avfSpfr4c+4E+NFttvo02I74fWRc9kZJaPnt6X76MNy8+d1d4vXeSV77ZGAm94dk3u2/klT1i9QS9duOJvp7Tjr5ZNu88gA9/PiQfRD7y9g++WnU2vm1mLT4THZ89pbBKPqfKbD5rfIQ+l25rPkcx0j2eWAE+z8Y0Pio1ED4iHMk9ft7rvB3N4r1+mR69/5NBPFe+GTyzEk2+WN7bvdHBPr7Jzbg9RtOwvfOFIb4UMFQ8NU+KPkKnoD6uw/M9baQqPu8OBz46gco9mAJRPWTJFL7r8dq9slztvWA5kz5ncwO9G2ZfPXKUlzz/GfO909JpvMIRMz4e2gq97s05PhpyLr1KJCS+DsAXPJ1ug72824896IxEPp56Jj6PlpO7/qWsvdHi2T3dMr09Ku9dvulN4b1tQrs8+BRHPq9l8byVkxg8AYcnvWXSbb0+fVu9jaFpO1Mi2jxikCU7r+j/ulNst7243gQ+0FJ3PCg5Cz5gFKe9JYXuvNmUUD7DIQY+0nLvvXLJZL4RLuG81EbVvcfdAT2SSku+V2i8vVApYD5j8hA+4BUivhBKZ73394e9IqH3PN6KPL4EqiY+O8o5PniWLD7Oq9y9JuOOPZy4GD6OVJ89cgHyu4I3+r1cpAO+vTPMPR0Ytb3M4Sq9XHdcvGrp/j0fDWw+cjqbPp0gA77ISyU+IFQ1vlzRUryd3pa+wqS3PXjArb02DLE9IeWyPT+8X7w3b7G8EXFHvhGAkD6J9LK91y/rPekX5j1vWbQ84IwKPDqwEj5xt8k934S+PP0gPb5t0SQ+yEgXvreqtD1NEA8+HhR0vQ++Bz6McjE9eihAvUQ3gz6ioUY+xL32Pad7pT56qkO+5I1bvba7lT7xqwo+sShlvZTgIj3Zgvs9/Z5kvg/8eb6k8i8+XjXpPTHAcb7cukm+EtqLvi6SpT1woWw+AJMPvS0epr02EBQ+tv8pvtJtMj4Bt4G+vLDTvUC3Dj2LBHE+IhUUvqzGyT0bhO29ESe9PPFJID0bjQI+DZCFO552hzzsqFo++uwwvttJVT6nmAQ+aBk9vlaSrT3cJoA9POGEvesr1TyHwfM9VfF+vmops73oh04+pHTwPZyGWD1mcFw++bWOPTK7DD61ce69SHPFvWE4Gj5oDFu+8uuJvaKOHD0zkuM9Wl/8PWuf8T2OIxo+WxdbPUTsfL3w+ko+Bs/rvRVVYT2/BWQ+vb+BPLY2YL5qhBS+5ixEvnz2Ij7WNKq7EjwRvdnrB776VSC+RSobvqQubTxqnl0+KkiEvb6ztT3S3BY+6Y/TPfYBYL3PGzU+wGV0PmHBQL1btbG9Q1wlvtKRtz1kkRo9imMoPp0KUD7oMug9hyMJPjoTBD4SrYm9+DMpPoyvcT1G5Ty+xsCuvPr6xjw1+FQ9frnKvNP4hD7ximU9QQWevlYw4L3TQMu8Tp7mvdo1j7ytCDa9PIkmvmTUAT6nelM+H37xvBznAL4JWUO9uUiHPmJYxjzfQFK9IGOxvCtQIr7Nf0Y+STxDvghYo7xoarK9ZOBrvmBsDz1aO16+UOFzvgntrr3fUBO+BVd1vrBtiz3BcVo73BzqPZOxx72wXwS+U2bqvdd6470taYu+KXLSPdAbjD574ou95/OYvjfLSL4sVkW9TqogPlDOej1UyDA+JXCCPdeiCL6g2D68VTRmvjK4Bz7h6NS8T6rSPcQptL0Bug6+bQkSvY/FZT0JuFO+RhQ7ux0VQT4zbJq8ZbOjvL37Vb4/ark9xzqBvbtsAr4Sete9HDvdvKWGob1L3c29O8BlvmCBLL72qM09PKUXPmI1Lr6if389FvJCPWwxmr0bIda9dLOYPVUJSz7pU3w97RFPPVaT8z2Q7RI+eu/xvfL+Tj18JS++K8hRPvuW7T1AywG+A2xgPluxbj2RuoY8VUhBvbY3Jr77KRC9ZrUzvl83Iz43v029vGcwPtpIIr3izUC+ljxjPb5RCjotkRM+w4E6PgYzTD0xrC2+SbcLvqmSiD0e/L89P+hJPoR+Jr5i8Ny9RoACvJKni760TuI9Y1wePamJO76NOsu94P9kPP8pNr6Nip28nBU8vtNVHj7nKnE+NCGAPuuI3z2VFLq9jY0+vSN2Yz5IG4888OyNPNbXi7sRALI7cKvwPMPh/zwyWhs+AbGCvuZupz2m2Cu+tfA1u/m7Nr6w5Po8kJaGvIprcD1iXB++M593PQB8Qb5lRCA9kYDAvZcg7T3sJ7O999cvPiExoL4deGc9fXryPY+XTj6NGi8+fX5PvmAz9r0VSjg+nbUHPqaqvb3DiPg8WjaLvikIEb5gOeG9fsVZPhYP8zxECdI7l71PPXK9Fj6BX+g96g3FvTsIP70JEq89zs5BPmemCL1yie09+e2BPXtkUD3wEiK+JoDgvZKWrj3F4qO8aBFKPD2X4L1VVau9HIxOPZiLJr7fQs09XTBOPoI53j16zdK9UGaWvdtr0D0o3kg9WRf9vbejQb7kSAQ+r07SPa4yljzHECQ9unJbvgkYpb0ZycQ86fI7vPUzb75mxT6+2CMxvt99o70gWze+hEHUvDB75zz61Zo8otZUPrl7F7499ls+UehfPsYbFj5qY+e9T6muvfYhzb09VEE9WQOMPSii+LwLiLs9ZhmMvYzRDj4Hv2++d3z6PIIjJL37xcY956XaPPISBL3fZge+pux7PdpZ0j0IWcu97ezivcwGyz2bxmc9m4hHvRLUcr4Qt5w9mG4rPvUwIL17GbU9Om9nPs1qUL7NAZI+tkTJPOoTDr6JhRS+mP6MvQoQCD6TNaG9e4edvqwPw70Rs0k8SQlgPXCO+j3Oqvi9u+OgPXfMVr4UiaQ+Z5qfPniXIT4GAgw+9qhOvPO/HD7yo1w+5lI+PuhGUT61ufE9Zngfvmbudr5S+Tc9OOYaPZIwVT5om489swonvmNb5T2re069n0NZvjtJMD2oAmA9j/myvWIPjzsTxkO+iM0vPkFhlT5zLgW+0VOQvHaJRj5S7gs+XsWZveUDf76mDSE+sP5bPWmKFL5wCQS+XNdDvga4rLtmAF89nG7GPGIGO754fMC8Bu1cvZcVwj264T2+f7YZPRfZSD6RAYS9EXAlvpoJAT1Acuo8WXCsPN+irz1wUhS+C0QoPjysQz1v7QG9sc87vqPdjLwJJEG+0IbFvJddIr48eNS8aacSvuVfGL5XaQE+OutTvRS8kT0gSia+BIoTvl/XGD5wShy+WQYnvmxAhb1DsaW7GKwKvgqDwz3fgOa9/WERPXw+hrxukQU9Xji9PbDEHL4F4vq9tjqtuw62jb0egi49LRXKPQlkSL2ARaU9SSgsPkhBc76GqXe9VUYuPb446z2pBga9BslzuwiwEz6g/Zs9PARBPpCPEb5SQrG9vvy8vTUyRj7sHbm7N5cJvnckvbuBOxQ+qK36PROKjr04uJe9VAoivoE0UD459BG+Mb6YvdPKw70ZVas9jEE5vhqJRr3ZaCM+pjcuvmt/Rz43OTG9ykCgvYbJIT1y7EW+uv4/PsHIUTzYd9w9mYNKPjL7F75Cf+e8FnwRPNiFurwbkR6+Ds/hvYrUR76X6pa9cZ4SvjJyNL4BR4i+tNQfvpdsSr5pg1w+jQc7vg8vFzx4GaY9u9ODvvBrvr0MYhO5fmBJPYZrXr4eVRE+3FS6vXE0OT5iF529DCi+ve8pjb5wWNu88UsUvnjQpL1Dwy2+3WxvvR8/sT3XzpW8vGwEvhgjY76lDL89FuFxPuqS1b299XC+j889POTSFz6/Bbs9D3BvPdNaSz5UyF891v17vrlFsT2tpmC+2lySPbql2j1dwSE+43WwvU4qPz1g04896lZ4PvW1Ib6LaSG9X1++vaBB273gOQE+OnoevR1Y1zw5pxw+W8c5PdPwjz3QmiI+TdgAPTUfkr2EEFc+VQO5vYOxYbz9Oo898IINvtbtZz0ZZEQ+A0MVvgSeE75SGPY8neQpvhLBpj0P3Vc9skkLvufAXDzFbna9ZCANvmOSDL6QPjs+kTZavf2oGr6UPa674Y75PGo44b1Eqwg+NJaevdBRvb0a81O9xqVovRmnHT50zAK+tUBHvkSWwzwEGS4+/6K5PTcjoT4hex++8BEwvRwS8bqcn4M9cZvFvRqh7T0/d30+1u5rvYIwNT6QQjw+wStmPnZ7Cj2PjpS7WvJnvQJggz3tYmK8dKmhvFsKaT2n9t+9IBQePMU0zzvJWdm9ahY3PikG+jzXmTa+QysVPQT66b15wpk+l5Y9vsbEYz0dHA4+KLQkPscmRD4j+jo+2MEivTFbur1f2Tc9s+VNvsw2T75GNzu+5g1nPSA20T2gXVc95I6tPfqCU746XUA+d3aDvjBtGb27N5c9azjEvTf4Tr5gzgG+4pGCvT0aHb6dcD09tZV7vXjDGz6WgpY+TbJNPohaC75Gk6q9nQpsvhrFQj7HXTI+5XTpvXvrNL4W2hW+f2OCPVfoOL5wIOY9O1IfPuO9R74SG0C9Kmi6vYxk8D2gqkg9Bz+BO7mss70of0g+mkA9PvO0xD1SGuE9J83IPDo/VT4MMCu9z6vHvZWaIz5HYM89bd0jvl8gq73LbrC8Nv9LPhaZo73xly2+GqUePaRc/721IFa+WPkjvuPQZT2lY1k+P2QvvkAaNL5R8iu+imoMvoKtpz1CQvk9BQAePvVnp7wbx8W9SO1DvrB6Xb44KB4+6VUlvVSEN72yV2W+UZt/vKBJ070xudQ8Ni+CvXXLOb7+Gx89EAkZvWmirr32MQm9zBolvsMVMz4aVYa+f3FJvQcU1L10J2U8nMNXvu9fIL6mxsE9LzZmvhn0Sr6RDkW9vs1fPpU7Qr4+tgO9QKTjvQ8TTD7/ni2+WXWcPgJCjT2CJnk9QCqAPhq2kz4nEsK9iVc6Pug18D3b5XG+UlQqvr6ZGz4goVE+oJ4avPecHL4Y/Ao+6VJ1Polexj34aCm+D5NPvkeOtL1D/EK+nqdRPualNT6nsee9dUVFPvMn5z2BbR0+7KzaPRnt+72FGfA7EmyKvVDMID5Y0CA94f5evqyep72ho4i+6KjiPUlUBz6tppo9aT/6PQrjHz4I/8296TLjPe/vML19C4y8JxCuvUyYA77hMxA+uA5IvaRqQb7KqDA+83kqPoCYUL4wDWq8LyY7vptkWb20zsi9b+iBvQ32sb09MrY9A8gPOz7p/Dy3PE88h8QuPv1AvjzvYoa9iNwLPo6zUD43Xkw+J+r+vDOE5D0UFPk9wuRNvg5S9roMQSq9rJ64O2GoRL7Z0Tk+7KGgvZAzVT65ikI8dcoFvqCTgz1bvo69H9GjPNSTNj4fibS9sy4mPi8+v73SZu69JKmzPWr8Fj7GsO69ikLeO8vtdr1VuBC+CxfbO7c6FT43qn+9C/B5vpIPEz4gNZi9phJfPRGKcD6wMh29LHfYPT+pxzz4Pkm+aiQ6vqhgLz684Ek+YwhgvsOSrjzB9BQ9hkmgvUhbd76Hss67HmotvlEUPr78rJk9Ugc6upN2iz1LXAM+AY6XPuU34D2y7f09+Q8mPj2tlL1m9kU9SuY4vi9NX73xzGq+NXAjvqQGgT6z8/M9gt1NvirGib1AMQS+zo6GPcdc3z0axXS+1BDWOynchT6Am+K9XNWZvX4Yez3YVOC9DA1ZvKb88Lz1zaA+w61jvp4lXz7m5hA+asOcvZUWET67pKW93VczvXEhh73XQGw+d2X5OrOCdb1FEZU+fQETPkjTPr4EuJw7xS0vPtNNgD4rs+o9EFNmvumWjz4EPIy8aSo0PjF6kL1rjAy+C/YlPl8FFD5kdyQ+Tb4GvqofRT5Otjc+HsfavUWiKj6u/L49Y9plvV1VnL3Svxw+mVISPeq6CD7I8YS9S1PsvbTzOL016Em+9s5hvu8jIz3DbDM+3uFLPprnoDxzany9EbflPT4Yf71uIuk8c9cmvjWGGL7BUFS+zts7vpmozbxJX629q0ipvRGxGT1afjI9248hvkcvkr0gn4y9Zio1vsUQaT1ZUbC95tS3vfHawr0OzIi9CuaiParV5L0p7GE9rRmyvesyHb6pjdA97mDqPaHtl7yxqEo+RM7ovdm7I76nqSG+Kl1gPhLATz6eBkU6kVK6vTN7vD0x26O+Gu8SPg6HMj58GKK9V+FVPriqYL5fkkI+o30KPaaViL4SwAI+0RS0vQFHh71CHwC+ti98Pl46mrzfSjE9VOiSPaluSz7Y+DI9/zRPO91waD7fELU9VCwsPsxjC77TQt49afRgvlX3qL1MBF++yZ6cPMp36L3iMVO7UTvHOwj9/D1Y3yc+HuWLuxkiRL4FHuy9YPmbvoBiPj1oV9a6slAHvrfebb45hy6+2bERvoLUi72S6my+6aZ5Pl3eUD3htMG8qIykvZCFaL2gUhc8kIEIPiDlu71QrAs+LROLPmRuYL7KIze+Yb0RvkBsHDyf5Rg9PWWDPoZKir5kkIS+C/kBvXHVgbw2FDg+IIczviN9Az3aoBI967oXvgahkj3aC6g9C2vOvWshI74/sdW96tbIvXr8QD4hHS895VuavZ3Vab5tD9A9CDEavtvnSD1XBy49nB6VPZU0qz3IVQi98LcWvpsIgj1Qi0U+NlMOPme/Db4ceSE9yfEPvstTAz5XDVy9nZkLPiI8XD38bhe9vgZiPqQAhD1hziG+QMfgPJ+flr3dFCY+ZVFmPlBlOz17x6e9pSGqPQ/mnL3jdgM+SydUPpOXEb73cwk8UTugvd1Ys70gqui9uYDQPY99XTyjUTA+hyYqPGtxjr0Ua989KIc0vp9jMb36CpO9HB5ZPkDDJz6AJn69SZ7OvUvULr74kzY+fl1DPmcV6L2/FjY9AK5GPqxhjLwUYke+enJcPsKXlL6i1IY9YZujvMIef745Ema8+cRBvpuNbD4qiGC97UcTPv2rFb1dg+C9NU8Qve/epD3JSZq9O1o+vjSkjL0zu6I8I/edviYANL4usxe+09IPPrR9nr2N50S+flmJPodhqz0yPVk+bGqKPjTWvjxdzX6+0g/mvAiSeb4Lo5++zAWqPbr6Ar7I+EO9094xPiHkZz6ikgc+bYuHvhgvh75st1M94f5UPjSaZT3xeG0+ACMOPcDWcbvztHk+A1kQPV+/h73Woja+iXWIPi9nA72Luf+9SZfLPAYBL75hUA++AHvEOhwAC72z+6+9kgijvbsg4L3Fxfs9mWRXPvlRHz4wHNG9clOZPLB86TyrGQM9t35GPnGixL2Ew/69O7VlPbDVAj6uHTG+/T49vZKpU75eWAW9EOm2vehgIj7iCSI+75gbvppjOL0Nn/M8SCz5vTzrRb4S0RE+2ytMvp8dvTwd/RO+mpMiPquYyL0AmqO9Pj0BPsOZBD6iS1w+ClE5voApQjyInOI9QrD+vbuarr35z1O+oPsjO6C8Er7dk0++bEY4vqwHtD3pqCU+kA0uPt2gLL1C6jI+/tECPuJgbD5IiBW+p5AtvVOqGz627lS+AAAAAAEAAAAAAAAAQAAAAAAAAAA79jS8kpDVuxSPtzzlDVe8GvKNvBX8hjzF2mS8R4D2u7fMJby63xi8nFxTPBIW9Lwb7M453Vm7uwneDzwCvIg7bou/vPvABrycBOO7aUOhO9jbFLqgPMA7l9Jlu5xZZzuevEy8mLkBPJWos7w1VBy7em4fPLR8hLyWCTQ8pBhFvWa9A7vepOS8tARsOxYn7DyuRFY875iKuyGdZrttqAq8mQtKPA+t4jvTmso8T2flO6ZHt7yXqKI8gYNRPazIUDz00K065S6gO1MQQT0hJzK8NWqevIN0rbybtDC8xNmBvO0OM7yMwnc9UC5mu4h6pjwQNso6kj/eux4i9jvb5nU7/////wIAAAAgAAAAAAAAAAIAAAABAAAAAwAAAAAAAAACAAAAAQAAAAMAAABUmUu9AWJLvoGMLb3Vj+Y9RzYpPAEaubvK5hg+DOVEvj/9zr2Z78A8UbcqPbZixj2SehC+dTBBPKLNLr5TyYe85LhKPfwDI77/JNE9fJ5vvaFXqD0xhcg8ERvMPeaR4byOoZQ9GxRbPeOTsTxExua8ksOfvdhOXTpH21m9UaJfPcR38r291Qw9njcjvcJeL7yuIlS9a8l6vMwQET6fKlQ9t4I7vb/PbzxzJX+8f7r7Owd5ibyPwao8W7MfvcKm6D2t3m298vgkPf/dRT0INFU9SQjNvQFkvztZS3c9ZrLVPMY07ryc04U9hN/oPaL837xbX9K9k/cFPm6ufrqbaYY8TsIePks7Ar0KX549XcADPSXhyrwmunU7dE6pPd2NCT3KaP28a7jKvWeoKD1WuNO7vpB5PQUUwLw3lCY9XvKxvORszL0SHTw9Q9kSvRvwrDz8NZo9iF69PDm4ST20Fka8ZJj1PXZin7vrJ4C7TUmRvVEHmD0mVfq8sZ1fPIt88DtH4to9Cmu1PVAljz0fzX298+k4PWyr0r1ak4Q8Y8MOPfykA71iM5S92FuvvRLHEj1mXZs8D/pjPRgkoby2y2A7k34KvP/1mr0wDjU9JgGEvS/1QD3wTKc89FdpvHVJwbxq3xI80h5svGlWsDzS/cY9iNviO2YLrzsvUPs8mBL+PcCwIT0wcVC9/r+MPf2znT3yJN88FpTfuS4iE7zTa6e8vI4FPRCIvj2BY4q8nZUCPs1qoDygdum9BmtPPhduk70WOws9AdAbviIXPL3aZOK7ZFnxPc1oAb2b1qa9dtSMvSVRF74aibY7c/Coveqwgb0JS0i9bfcBvbF3BTtvxQg9eY+JPMTlWTzsqB094omtPVFP1b1THIY9o0/2PYxA/jzp09q9PNY3POeYwz3CH8m9lPccPCShHb0SEPK8/bKMvUUet73f6HM9HU6kPTb6P70ZG5k9tPZcvfDWyrxIHPY8JhlbPegR4b1BsG49EeFBOy6+G70axJk9Lnx+PSoe5rxS3KG93eoQvZbhDL0236i71NM+vdh2JT2kF849wwaWvZAAAr2AJsY8ZxUjPXutiLxCvyM9pMahvbTBIL2dO9u9tt8IvZu2/rvxYva8yYMCPVwYw70A0tg52QnWPJtkcb3rp5O8rvQKPKFiUb3HCYm7iP6ovRpoxD0w4SS+xiLBvVWBOjxi4YY9w4dbPaxkJz1Yfsg8azOnPC1GjD0C7du9aLxXPKCtpz0vOD09KVJBPQAqPj3xzZg7T3NNvKoCyTxSuLM7MMBmvXEpFD3d1ic9oNx+vKECsr3lFQk9tXaNPV5J17y75429MdFVPEGxsjsNthq97F9/PS7h4DsJORy8vGk4OuiNLL3YPw++5sYCPQNdHD0VF5w8y9x9Pbizdb2lbe66Iv4QvR7yhb1RmFg9ubEZPBI/A75QfcY9YqvPPRAoobzwoue9xj5MPeuuEL42tl685U/wvUi33j0lZ5W9dgoqvX/E2L1wZVq9t+CivGdRlr3JPpO92LPVvAAbOz1Nuhg8VNhVPHARfD0HZ4u8/LlQPSpNv7xj0qu8MqbXPLMNnr1wBj28hNidPR0cbr1nDL89SjDmPG7SSr2xreC6YbdJvcNZYrut+y+939aQvZDXr70RFme9CEH4vVMhzjwn3Zs9QlsvvbikZTw1Tae8CMvgvB0kuTxJzqK9QYPkvZONvb2l8wm9n7Oevf/M4T059Gq97zwpPX4CBj1a0aC8E1mAvdOHGzyqkgE75FPtPKbj772HuY28PsMCvvcqP72vVa48/KI6Oq8WET43h+w8VN3rPQZVGb1GRxM9/V9Mvd/Az7sxtDk+xxhLPHdLfDyznkC96D0DvGr5uT3CW8K9ndUtPSwy4byxuhW8H7X0PTn6vT2x2b29N2pQPBz2N701qgi9FrM9vRDchT3clH09Hr4NPZ29Ur3/1Nu95DIWvtIVIzwmTKq7Zp7kPSeoCbzewoS9YaitvFXKRD3jFAo+/iK7vGGyqL2cUoI9QSSYPDLgsr2eVEa8kg+1vdhllLxMzte9pvi2vV11qbzbark8MBmxvRb+ZrsAUeg81uQhvfvN4rxsSjK7hcgvPZogXTzS1lE9PU/mu4nRCz169CA903mBvYUsR73v1ZQ8gL61PIiurr0D94G8gBqCPOHfpL21GQu9enJUu5fhJb2ocek8DjMJvc0VMD1MG5m97DmuvEFypj00d1K9ENqRvAZnCj3LI9c9t1OqPPOhgz2KA769RyTjvDsVE7ytqi899UofPWMuPTyK+5g7s/k8va6cO7xv+wM9YpfQvFKuoD3TmqA9YC8MvPmsd73EXzI9x+ZIPOWbHL23zzs8PKt0vUuVh70j0X+8BUOOPT5vn7x5p5u9z2BlPatmdrwX0nU9jZa4vd4e7zxz8wM9NSM/vcU/4738AA29PAC0vYXkdz29CvW8/JgNPVqVOb7gb3a9gI78PPcTQj47Fhc98vxNPdJlQTycb4Q8CDhmPD0xvD0Rbq08FwM4vn6FuL2tD6W8+SyVPGGawDqUj3a9qsd5PVcLS71Srmg9itDzvW6iAb2D6oq9dT03PR29fL1el6A9KboRvjKlAr5iBSy9cWcSvdhT7TwsXi69IWEEOwPIBj3AOPO8QXTEvdI6pr0iFII9F1g5ve/MIj5zzZi8dKr1vN1SI711EzQ9INi9PWq6l71KunA9kT9kvfwfJT2shbo95PzSPXgWzrytCAa+hB4zPLi0Ar4jUUO8EV6VPD5ddD2mhwK9T7orPWxQwz1HZ4g966jVPZrYAr5HyVy9zuINPk9YL70rJ7w9HXSAvS6pmTzNxSq++rcRvuo6CL5KFUs9trKxPexOmj2g3WE9jR02vXIpq73n5Xm82pKfvLeotDzpqIS90W0CvZxAsjx6Zas9G+yGPQFgnL1ef7A8C9hIPUwohb3skEW8AqLyvS7EW70ENV09sZqdvEqg1by2x5E8XBemvdREHj3Q8wO9wjFZPKJQzr0BBP09hurivcamEjyOy4g9l7AVvPQ9YjtSvrc9qXFwu/rGJ76Qvlw9s/eNvH2Mkz2pmDK97ubvvHVY873uIgQ+qkeiunYLFb3ugWg9+fY6veQQxrw2N1G9SkH4Pc+k3DsyZKq9zb7NPSuXN72m1Le7Kl5/PT2jXj30x7i8fPwBO4Nvzzz1p4e9G9XWu1ulhL0fE8W981xDPcWGoT1sRoq8TktvPUkGRD2aQtY9G5cVvinpPz16XAk9QVhsPTU4GT5hDja8SbPWvQ3P+jwgkHU9Seuovb9Whz0QR2s9E+8FPp/49zxV+w++PrGRvSVXrr2wldC8GdwtPX+SxT0F0JY9aB2UvTpmRb355jg9fpW9PR/+mjyngd68j9e0vPbgrD01zOQ9FPVgvYear72aW969QOEWu3fujr2PPcC8mtc+PbsgqD28WWO9CHEpOxNgoL1vlgO+2kGUvJ5CbL1kWTW81KiJPTrk6b0J4PW9dEEEvVwJB76RarW8DDUkvejTlTw+mS+91DqqPUgWoT164h86ewg2Pk1pCL3Kn4c9Pb1ZvYqxzDvtGxQ9pVlqO/PYPzzBTZA97mBDPfDrZ7nNr9C91zAAvUdeKz7fzMg72GLlvY+tFz3/FSG92UBnPW2K5Lyyqgy9XrfMvZ0llz1cKQm9U2+Gvc9727whwwk79VzYvRi5eToAk+w9XwMavXvY87xK+Lg9oXRevVJVsj0kORE8mIObvOadxL0rHr47X2N6PajaLT2P1AI90ywyPYRBvryDYC49Hr2TPJ3ilL3Gfse92OxovFNDxjt+n6u9Lv9xvfpsDj24D8m8rnLIvbskkjyq6Ki8FP5LvNMasL3e1Z67iyAsO3+jmzxIzIw7JLocvQGbyD3L+ae9iTv9PGFMpb1qyDU918IEPUOHTr3wxO+6xpqgPIpe6zy485E9sz30O5vA+72Dyre97Aw4vUc+aL1rdkU9s3WQuyilJL23R4M9nbKbvM4foLy01Qa99naCvVayoL1fCLo886plvS2buTwkfTo7iEh2va6xLr135I69LUG6vAOzHDzg+Sw8Zz8jvoCogT0UzWe8NGp7vVDvq70njmM7udZ1PUxy0D0tHqU8gIAiPe0nHj2qqIa9MAaXvXJ3oD0mXz47xgk9PdNemTzkIN29V0ikvQQJkLoZuY29fNkHvfM8j7xZEN69+9IUPdJ1w703h2m9eV0rPAvXq73efRm9i6nbvenuTT2N7mw9tjWqPRB1Ar3S2Go9xhvUPLtm9LtaRNe9woYXvZjrRj0KTk49iZv+vHR+hDvFZby96lgRPU/oPz2q1NG8/So9vaQfqbzJwJ69RPTTvU8TGjsXiAc92RyJPbtqED0JzIg8XhAavbCyNz3vM/k7KLJ0vAkJaTxgntG9r3IjvCBwir08cZW9tiUmPRld9Dz48j0929jsvZ2bDj2IAwa88rslPX049jzxFbE8Wzm1vL+muL3wTfu9CZ6CvSWlX72AcxG9gKL6vFcqM724dAC+HbCevMEkTD3U+Ra9wY1Qu/CPc7373ZG8kRiSvOShjT3Tg+K9tXwzPnb+ib2qt6M8gcLQvUl4gDwkaGG9JxNSvemsHT1Xi+c8E/HaPeeK0jxnCxC+rYwzPHx8ij0PM4+8qCe3OSjgNj4xpi06pQXoO8WHWbyHJNU8LeixvelX07v5G0w9A7XBu0s/sD3o8aa9TYqAvcdocL2nLhk9smrTvXRKUL36c6U9/zEHPaO7xz0Njo288WoUPhWCrr2fDqM9gw7iPKYFBD2A+ZG8Z+2evcuiBD0wZiY8HZr/PEj0Zz282om9HNFKvYpn8jz1cuy9tQe5vdxFhznos+c8AzGuvbEeND2Xh7S96oGHPZ0SZr3eDY28+VUsvdqqNjxtdKO701aGvQP+8z1LdEG8xfM+PN2MPr3Gb5U8obEIPYAyA73VG3+9y/UlPG1oyzzZaJ89/jefvAYWnbuyE849O1RpPJqaGD3tLOo95y+/vQ6Hab3eXmy8y359PaJ+tjw1G4q9cQkWvWgjfTy6seY6Df7bPT6YjjwreA29wJwUvbC0270V0w29VSSNPKiPiTymoQc9MTPjO8+lqj3qiJW9ale/PFGHND0HAo69VMyvvaMarr3dogy92K1lPUCpkj3J/sQ8sosAvarHoL2DoW+9ZIHUvE0dYzyfrT07cbceu17sgb2IWE+9ZZfKvWeyCb4vy4m9VrYNPrh5yL1bGn09HeK4PGr/Hb1ZkhU+b2EivpKa5T1FyBG+colHPLEPaT3EGAA9pBWtPBoaEzu3h3Y9m52JvJPbEr2SObQ8+ga5PTk6mLzUrow7OlxaPYAt1r3l17o6pMARvdEaqj3jgE68b51VvOKgEr1inbm94xmQu7nKML6vj4g9f8wFPQvz8juSN7m8NxitPDse6T2erAg7zSc6PUaJojx3bQo8XpyKvRsfnLxxDeI9UKjWPHfyZD04fIE9LUeCPJpWIj1IjL+9S64YPT0T8Lwveo677sccPeCVqb3o6oq93woevf0LrrwPg508xnNQPR1s/73xgzu8Al7EvEWNcD05BIE8skbaPPu8wD0Rcac9f/tcPWcB8zu14wy9Pw3LvS9aPL2EDBQ99hpFPcn7BD0Yy8e9XFSSvKT1rjxogGm9Bwdfvc/3k70hLP+9b2LBPER/1DyISK06el0IPoxANL0MOGo9AWjePJ5Ulb3qiEw9u44xPGnylr1GrB69YpACvphx3j1+sqK8WrtmvZjnID28gSq9VqfPvWPucj3sW9s84ryEvax2e70ogLg9wf9ovQeo8rym/sw9US/GvXx4Bb2YSoS8C1KSOl9ap71WkX29vVE9vq3PZrud8++8HTDbvaiZGD3bMbu9t49VPS8w7jzBd+u9kSnTvAHrrr2PvMI8s+lGPSLtML3wbe68GSsJvlMRIz3lxwE9P0huPVJi3jzXcic+suvRPIJm/DzcMAw6P0I9vVr027xe2Xc9UIUPPe22Db3SI0m8+cx8OyoYzr34j2k9BFmbPK8QMr0IwZM96xGgvfENIr0dSJa8p74uvZ/neL25aAO9mm7VvXw88rxEp4o8PeSdPcdZdj0+AT09Vs2ZPZi3LD1sQYI8TvdDPPUP/D01N848IfEiPbdngLq1phW9HHNGPDklgby54+w7ObQlPdHLpj0GKQy9IVwcPNNb3btNxKe9mbWIPDbrAr56jra8ozeqvFSuLL0cItW8bPidvbIz4T2/8be94jgAPfY/yj02uxi+ClnJu8Qn+L0n2e88e3nSPD/AJD4mWv68CUrYO+NFqrwl9WS9pmU3PFgodz0xZN880kr5vLOkBb3q7A29HKm8vSB3Hr3b8dK9tKXHPQID8zvvNbk95wsWvZFGpztvk2i+ugRtPVV3Zb27EL48lXyjPErBZrxsg8W98J3oPbT92LwtDky83a6/O+yUrT3He6A9CHAdvYETUb23uUg99hzxvMMJA75NhAm6QC4WvBzeSj3n/hW+vJcqvCAGVzyx/E89ck0EvTqHQz022BS+i69UPVLRRr3jn929LH6hPZ9JzLyavyi9xHUPvoEYGL1ClBC9oWNyvS/lJ72zYy++yyLXPPSkqTzFcq08uHeEPeb82Lzvuro9uU+evQwHTT3KJQc8eUtfvUysvbvDXZm9Z4iSve0QU7zxxj09SzhJPD5S+TtoJZO9VQhRPQqy/7woGbI9CtaxveO3xb1/DbS9GpuxvXZPdbyQ0eW8HvnDvfEErLwkYHq98iqQvbaqP73B7kO9aJwoPdTtUb34LyG9oXxhvb8/hrzA0ma9PWwNPMw0lbyDXB89gSZ4vV5D1D0Uk+G5RtgcvTUV7Lxvlak7VuAuvCr54TxVBn48v3RKvWxUuDzvYDg9GW6wvfuPl73OIUw9IF5tvTKRxrwcjew9Vs5aPWbsPzw6G/+90MqpOk4Jvzz8wvU8Au94PYL6Pz0lwoY8H4K2Pdy/vb3j/MI8/XU8OzM1U7sP6tA7pf8UvZr1lD3QjEU9BvSpvCowqj32iAq+8AYjvu2Lkj1LQFy8WGWVvUHmM71rdi29ml8Avf4ZPzxwYqe7pKItvTE7rb1K64A9STUOvdqnz70w2gG+jEqmPftajb0tPQq+7O5DPSdM8r3MXQU94xFQvqry87woCRK+VsCpver3yj0vpJW8ST8CveAfPj3kEUU9YFo2PaqCKDykF429QuaivbNlDL4EM1+8hdkzPpismjtH7na83f61Pf7d3L2y8T2++qutvWH9p71xfN08CKQ6veyDFr7fUB28Zik3vZDSojvRmnc99zOEOkluOj1tULM9eSAiPbNUcr0N50q9G3nlPBGIHzwbE1i90kAWvZkvbL0ct9Q97BsSvbqSkbu8zIC87gryPb1hGj1I9+g7+Y/ePA9L+bzRKC299GjNvACezbwkIBa9JNtnvfqc0ryyzzG9Biu9Pci1sz2w9IS9Qw6cvCjcbz3YZF+9AIszvVFwGjz7vYE757ewPDkwhr1uKzU9NN88vcVcVT16Ye+8egECvR3PPD2uYIu9ZSX+vVs8pLyU/C6+cfR4OlgiazxZMIQ98FjovUFOK7xmlzk93DJhvNO1AL4qrdK8EC2NvRUUTzxl3vq7uoAhPGPrVD1HOO+8WifuPfyl/TsHmeU8FAWtvPQ6ET20eBM9kzZuvC2T3Tw0kw295C+GPe9F+Lv55wC+P7ZUvF7qAj2ziZY7W7ruvNdcbT2kjVE8ccWXPdfMyDxukuO8+0C0vQUteL1qsBw7HagdvX8m6jupNaG8GbAJvD4j5bqReNw8/zNHvbcTSDyAPdo9radAvild9bzKGGW9S+riPUPGwLy+jWy9Kf2sPQq967yPF4w9EcKCvJAwljxxf208DNB7vZUSGL7LZi+9KQipvfdvDr5ZtGG8/RKjOupY3Lw5ljS9GLmmPS4ey72aUDs9fnMEO6246Dq6r4K8x4Edve/iRb3ERfq8bzg4vZ98wT2LWmo9OUsVPgYjcT3Ij3o7psqiuy5+y72KPdm8gH6VvWL+gD1LkKQ68dekvcS7tj25XZc9c8MZPTU/vr2yRxM+dkPKvRSBLDzmBoc9ugkvvbDlZr6amya9THppvYuw+Lya87Y8y33GPHhrHD26y1A9pFeuOzBq/L2hiBw9rfSYPD6hx72LJWk8rPe7vb01lD3V5O+859R9PdX2Uz1wNve9pF86PSBsk7wGJKY8Mt8EvXlvlL0vqQO+ufhIvbL5z70Z9We8W8kIu6fe7jxyj8C9AfLMOlapI70RRz+9spUZvgZf9Lxop8+9fEWYPKVnZjzWHNy8uVXKPSz+EL2IWpk9V7ojPbT+0Lzr6M88mqgzOF4AFr0QJsC8jU9YO2JAibxJgXA9TFgOPc95/72+zv68xD4EPrGSqju5cdE86B1fug04RDzy5AM+cNEaPS3WYTwMvhm+x4a2PN/uVz1DQby8+WcCvQSicr2A+xC9+HcQPV7uTzwM/Ja8q1vEPKc0CT6vzwu+y86nOe+dwb2aW2k9u9ecvHuoHr60b4g9h0xTur4ySz0cjl88kODdPPRYcbyC6Um9ZCQwPSa4CT3PXNO59mzovJG4ub37amu9PCaFvGC2trzJloq9a+eTvWSxwDyROVI97zkyPTJNlb2Xsk29NelePbtwsL3k/4e94aUXPa6CPT3sDHM9QdAZPWJS6D0wb5q9GscrPUNDaD2YkBW9RTEIPbV9tT0xJac7tG8HvUGqRr37Itc8pKt/u5mvgrxOZL88k3SfPVpU/7yHqH48NAvYPQ30KrzxP2w9ODWEvEA+wrwyMp68wD7Ou8J/7bz3T/Q7qVAzPKJ5O72eeNY99FyOvcCGSznvNwC+4sZEvIi5Fr27/+E8QzuHvMwzh7y2Fqu9qqWbPdaOBj1+Wio9NNx2vZ9qJb3iReo7bu9AvHqwQD2EJ8y8hr3gve84P73KbIM899vfu2yg1T1D/6G9m6L1vX5UDb3C1t074j1pvVN0hTw8AfK9yJ6mPJ/c0TyXjQU9AZxEveuVTL08HRK+CSBhvUOZAj0oKqE9IOHavRS7O721tjS95SsevdprWzyelLe9Pg5+u129nTweiTo9kskpPUam5Tz9OD69o/bFPXKGoD1oSeC9IpHRvWUOAjuvZNU8VebAvWI66b3r1Jk9U5WavW/Ihz1ocQm7ieJLPZYHkrwyjyu8HNhlvNWeND6puRG9iIdtvXg/VzqLbSU+WMXJvbhMhT1f9co6pzFKvEKE1Lwy3YQ9NkDTOnuyzr0LZSE+UYTwvJbXO722gIk9/9KsvYqqIT1akk494gpxPROpjzyJHEG9QV/PPe0yVj1w/gK9FLkCPGIgRLu9QIw9AwsEvf4+ez07ogi+RQ8IvugpB70pZFU7t1isuSg9Jr0VcKW9OdT8PVmUGT0xsnI9kXQxvWg3bjznaSG99N6QPbqcM71cjkG9BBmEvZkXsLxrOoy90ksyOyGBaj0mrCk7VDsEPb/4gb2cx669u7efvLOlhL0Q6+K9QPqOvTE3Zj3AaA88ytAjvU/bij1uo+q7Y0olvc7cgb3V2Mc8/ASLPdTwwjwPTtA7ZD0Gvcfyer3dFca9bPArPQIb3D0kdU6961tBvPybMj0tYOS7ymc+PV/EgL3lJ9a9qmiJvV5VqzsaIxO9hRJIPYR/xTwydh88ebXUPFx2Vb3WETe9dhsHvWZb2z1yA/c8R0dCvZtdbj20eF89gv8aO3FEV7u7JE69sH97ucIunD1asMW9PEEDvSuLIr1TUzE9WjwJPZHq1bycgBU91YsxvHnbCr0dsqE9Qa4+PQFZk73Y3gc949qtPJ2fFzzPuDk90q+pvK2Jgb2kw4E942MDvpbx+Lz7X7E9qVMnPVIQi7oTifa7lBxxPAepcb0jJMY9Naa6vTmatr3FUwQ9ETmtPd2UBzyLXmG9mIsNPdgVqL3mQBq7VnnDvYzLgL3C0q291+0NvnsrM72FreW7mXYQPCVGML4B1369u4ALPa+iBb6guW+9AnSLvcj+hD0kyvk8o6KdvcxNoD21O2y9DEB3PGy4br2YbfQ8p4o8PcK2cb1Q5g68MA97PH2ZTz2BdUW8pliJvQFHHT375P+84CsOuzYqBj3k+hq9vGUdvaZ1vLwmRac9F1cBPV9gyb2vVVE82leBO6G3mDuwgrA9nbJ6vZ4vlrwxvKi9jpNJvER//zxhyka7zg18vRKTzr1dApu8gDKFvbxpLDvuQZi88e+JPMTRF71qaOi7vNXxPY028zxdsw+9liJJPaB81DpT5wa9inmcvQsDHT0bOT89ZtxXvZ9vIb2m9To9mU4uvRA4v708QYc9t47PvXLteTycOi88e1cOPU2i4zyxpjm9UoOkvZU3oL2yWZw9euYFPXLIU72lTqA8fwR+POQOlr3+jsy8z+K+vBeqAL1Qkdc9oXUoOLKAxrwIKGs9dC41PPqZmrwGK3A9Ar9IPSuXLj1xPUE9YcmsvfeDbT3lcnI9YwVRvVG5grsk+9o7BDk3vZr+BLw/Fak9ihqevXPXmzyYAvC98rytvMbBH72IaOA7NcNKPTAnj7x35VQ9mANXvUtgLj3vmb8916fcPcd0mrnCXYI7p0CYvBZr1D2ukdI62HZUPclOkrzYC148uB9BvauEnjybrOC9N//XvHpSI73pnIo9XdJoPBxDnTxvPvC99wc4vvjvpT3A9XK9YIasvGVSVD0pnbG8yi4nPjZX2z2U6lq9lQo6PeYia72tFPy9A0w7PXY+Vr3ejYu9SA9jvTol57ydoY48DzPQvLZuMb21fR88PvxPPWFKAL3qtWI9hqnNPWwJ3by5wpK9tmcjPUdPFj636IC9SR6jPK63p71FaQG9448IvUafyryk/zK8iBEVPdrlDz0fZNo8tiKMva0QOj2ikbY9odxqPONaJr2wYEQ96TBEPdm14DxdJlI9diOtvB/PLLxppSe9rZiOPbUWhL0p95O8MpRlvf+7jb29twa+A3k/vSgHVjzAmsi9yKqBvPoObj0YgKy9uIhSvTNHCbxbokG9/qVRvExV5DyTcQO67agLPF6lQj3U6ne8mJ/+OoQP2bxBm5w9sOwavR4uvr2Ce868J/LNPaJ17D3Y05g8ebGJvfeR2jyEoGY81q55vZfo1rz0SKA7qaGtvVmRB7zBJXM8cMhXPIBaIL1DT4A9gEiZvNx1Bb1SZns7RZU6vbnp2D0ciRU9uHUcvS9nfLvCdi29uK7aPEltz72RKgc87PQEvWrKQz0TX/S8DbWavPqoFDzoWF87vQv0vCerMD1kEWE9VlW8PQJTIj4QAx89s4fLvcLbvbwb5Aa9foDVvPLc0r1qFZo96xTFvO1Uij2jlYw9zDTJvINRezwwOwa9JCowvQ00VD1UY+S8zo64PaqTvTy7AKM9mH7EvWM/hzvjLa+9ReyaO0F5Xr7B8QG+uHGjvbKdBr1QzsA9X/ASPSy2Lj0hROw8Gc5zvOu5XDxOwJc8/WskPe6Xtr1iG6S9UvfTvRwuYT02l3G91kTcPQiBlb1xmFI9wI2DvGzh/zzbL3G9n7TYvI3O7rtGWb+7kfeKvLIVlj2XnWW9VJwLvq0ZV70ZW0U916nyvHC3rT3xzoe8zN0XvMOoXD36swS9ttFHvADkDzzEdQy8CAgPvqc+Br3Ra788+SeZPHFlyL3nAJe92y4pvIycADw+Qj683FiTvFutQL2Y/+09qdK6vVZjdT1ilom8RcPBvNt0PT20lim9/mC6PZn7Db0vvjU9xiIMvVwSfT2aSta71imwvJUHpTuyWaE8520GvanAWz17W/O8iQ8ZPASAfD1QIuS8MjZUvWCbDT1cKSK86hPfvCWubD2H2Ju9QVm5vcaK9LuqJUI83+vAvYzmUr00dje9UtUuPEnUpj2DMtI85DWdvaL+SD2mse89unc1vM7Gmr2OkuO9BHOdPTz+lDwxuQk9YTb5POifjTz0/U28LPIaukIPdbzwSJm95x+JvQd78TuE8pY7trafvBgZJT2pAw09DbPvPPK6prw1MDS9PVyrvDiQor0BDzg90+jMPVRmRj39bC6+8JlEPVN1DTzNF4W9hWfxvP3w4bvLty29cQNbPQHAhT2QyEQ9xZbPvcw7dL2nOq48wfTgvWkWjL2HjYI8neGkvSeNPj1zMpe9FDGJPfdg+jzFmWk9Was+vQKBCTwoICI7f274u1yAVryKKDC9pF3zPFRjxby7R2A7UjkFvPHO0zsbVoQ9Q2qCPRPHTb0PiZG8bpNTve1nsLzYcMQ8UbjovT+c9DysQYK9Ti4CPUeUQjxF23G7CGiDPcay/boWA7q8bNG3vcJGs7pZypy9YDXIvIw8H74RzrC9OijrO4wYwrt4U6488DEkPOFKEL1l9w++1aftPSNr3b2Zpga92kQhvdvwer25qQK9fH4qPbJ8i7x2lRQ++bvVvC//jT1SnRo97X4RvAjTiD2Xb1W95KwdPa4iJT1TmxA+KiM4O/wPIL2+U588s0m8PXTVEDv1tlM92J6GPW0itr3OvpC9mLA3PVdFST0UNIQ7mN94vBZlsb3mR4G7aeHdvE8egb2xxZK9kW7bvSlz/D1CsEu9tAQevaGpIL3cFZ+8XZnsPBQxUL1syTs8NGxJvBwidrxybSU8i2ICPd5pmD1g9ay9Rl1CvdkAmjt/Z0E9WRyyvY3xKD1k7xS+IJ7LvLkHjj3HVIU8AE4iPLHFebzjNKA7W94pvupUR73qtZy7oLSIPEVoqj0wMB49VpmoPb8gBL2BbYa9LAxNPXqK171aigQ+jAvSvE995r2oqDq9amAVvWxdGD607uo9PhMFPoCOCL2IYD45BQnpvCQHuLsUgjG93MCsPPbg7Lz1spM99PmJPaUW0LyMsHW9ECTFve3mxr11JnG8v11EvVFuxzr42xG+7z8Nvucm97w3vVY9ZdlLPaCuDz7jrQO+JhJyvbMOwrzYWze9qkj7PF5ZCb2FnxU9dxzFvKFIkD3nA1a87yibPRwZGr77ezs99zS2PURVpzwqaTw8c2B9vWSaib3WwYW9bnmSu5iqAz6ah/G8vAB2vSupNT3XFv68xNFTvXNGkb1GBMy7hyHRvO7viTyJjgu7MXS4u9dflD2V8t+8gviAPdDcc71Hfge905VePFvpVz0mZkO8REqoPZI/3rwtwCc90041vQfKEb39QHU9DBnCvW0d+T1dJ1m8qc0Ivc8mTrxpm1m8NbLeu88cgTwO3uy8ZOhDvWHqET3XHpC9Cg0VvcempbwMh+W6hHIiPb2VxL0iQGq8fpIkPRirujyXNZA9Jb3fvA6XyT0ZmrS9YZQIPFf7hj3XOm49I365vCXA2jwnZCc8fSvHuh3GCD1F/pc8zGWhvLIwS72GNMY8M0dNOzn0Ob36tka82kjOu9QVT70vDmw9UBpJvd0loTx63Hc9IURxPAiZCbwlOiI9QSi1PaGu+z31+4K8mF+WPCkg0LyOR308h6JzPJYXerodBBc8vtPkPUzdsDuHmmU85ri/Pfx95Dww3C882ka/vb2ChLxu2IO9sRNTPDivTzxFe508Nc+ePNw0yT2t9eO9yRVwPdlKtz0uPdO7kGh0PeqEOz2ZtMo911KUPJ7omTxfLMK9vHAAPRZ7Fbs8QkG9odTNvPedZTusYFo8aBvpvYaNAbti++c8ZFwGvKAhjz0Q2Dq97KlOvdfOKr1tGM88m+nfPKTjNzxewKM9jQ/3vDMVVr0U34K7u4llvdLOIr2SWZa9X6wnvnOqsbxg2uY85fqVPdmFtb2EGeY7Rd6KvQ9dHLs8hEq8sqSxvVbwA72vj689cDb/vLMV6Tz9MyY7/54vvdyJ0Tyakai9l1sBvZKPNb10/ri9OXH7vOFmCr4NmI88JToEu74/0by2uz07FRnHPO024bx+AL89zeAqO4++ULx//9k88vv/PEcWqzyvjDe9hnagPfXlgz2X9ts8+g8Wvi/Uij37a/C7oz9Oug9jXrzOc767trRuPSmIqb3cah29TP+gvOXeDz1I73y8EbuLvROrBj1lvYY9Z40jPGmOqb2Qso89YdUSvSzGRb7+Zqa8f9cvPa3hTj0IofA99tCUPI+/i71w1A49adtuvdIYYb0iKZi8NIdQPNl+G72SZ4o9QDdyvcLY4TzakIK98MA5PK2k7r2n+qc9SC6jPYJfqTx+f8O9lx/OvVWrzzwrA628AdxpvUCarju8zSM9toikvYUoULy874y9bAhwvWcxTz3i81G9k/kxvQyX6LrBNxG9EeODO4ljhb1FK349LZj7vCT0hr0ASzw8FRM1u7cM07wemo68U+YaPRUZCb4xVRm9RBigvVHr07xbhV09zBNYvHLKpz3YLgU8Ak2bPfEulDxUApQ8TWsnvXth+7wxBuk7ULvjPQqdoj3BPvq8fYoqvdkXN7zHd7M9D5i7PKRuSbr+9C28HzMxvV7o+7x8npW8MPaWPBwyX72V7VK9LDQWPbUq8D3Gj7E8ciroO2YVRTyBDbs8ENYUPdOLsr3WWYm9le2SvPCTcLzBTK095s1VPUKqwL1yxr881xyavF+jGb0o3k69o/puvSe2orwhjoy9tEGBvSOXB77jeOs8g/6IPF3/Aj33xdY7jt0OPf5Nj70NUT484ivmvEjElDyNu9e8fPHLvX6PybxMMXs9jWGYvOKlPLy5ZsC9vQgLvZfoJD7z8627nfV+PWlLxT21RaY9fmjhvFliFLzD0s49N11FvQyBq7xtCzO8EuskPPA6673Nxr68TYWWPX9V9ryiS5c7CPldvFjjCb5dUJI843B3PdlpNTx58Tk70oYKPrXSyj3aB168yfdePWLFkr3Dk5Y90vp7PMiYDz3wK968MEjWPLSYsrtXtJE9mQ4Bva0eoL0PkxQ9bUlvvQ5cejwWeAu90Fw8PQGWt70BcMk8iJvgveGNIb10PZY7O0UqPhyXUbyzwoS9vlLJvTpJ4bkGqLe8B27nvaQaLzyInIU+4Ss6vcKSDr3kEJw8JbuuvdhPBz1dO5G9YZd5vX2YUj0wRJw8TZe1vazblb07xBC9ympbvADgYr3QLDY9V3fGvLVu4r1Z8E09f2ilPPOij7zi9Ak960ufvSSALD0hbCi7f0bTPIgszjwPlD09TmtxPETS2T2+McO9n+HEPS3BKL2zhWS9whY6vfsA5TxcRYS825CnvQUx87wvkqa63GelPGe2Yr3mIj89pkQtvAlFhb0pjK09uJALvRgYILwxPgg9jAEXPls1PT0r2Zu9uyikPawA6DzJu7a9KqcFvWLWzzsg1HI9DxmhPG0aLbzKUhy9iZGcPZFEkjzffCY90QywPYvZ4rxPQIA6g2gLvADskj37Pp286AxNPFIrcr0GSqS97XwkvY+Whr1xddm9n8oEvKXm4jyZFKW9X+4ZPURoIj1lC9S9vr37vZdqRb5RG6W9K/e1vNJjETs6FwE+Z2y2Ok+n3jzFxoA9k+DsPbZnlD2mRJg9quFcvcpHB74QUxO8/I9UvUZYVT3k/Za9HxsaPY/3Gj2r7EC9sKPvPHB1OL3Fd4u8Jkt1PQMzary4J6a8ozcAvIiHMjyb/Ww9vilTuxbOZz2TtqM8kWS9PBSP1D1oLSe881g2PUVflb1cLyQ9AB0MPWRB870RCB4+/XGEvebOAL2M8Qi9MVL5vUsWoj1A5Fe9Tr5FPbReyLuaTUe9qyU9vdx/bz2SGIs9w/bFvROeQzxpUww+6+czPcmGQDy3EOA8i/4XPPADpj2GV5i9VkqSvZRviT1JFto8IPmUvSzdHzsmjIw8CKwMPdAbvjy2Cka9gsOLvaIxKDzOIjC8jZQAO0VI+rwcb6y9V6xLvc/YjLyP/K+8NY5HPVboEL0eNq68OtqjvSsLpbuG5LQ8A8J1vaO7er2X2bQ9/Cbdu2CLMjwyAwq8zRnHPbtxBD3Yq7e9UHGWvDy1iT3XFAI+u13zvMKOXb0qe0+9vWMivmfUDDxYyeQ7Z8xQvJiMyTtmusi7wehuvW+h+DsdHjS9To9bPaneJL0nmsI9rkBjvZcbpLwPX1A9sYeoPBLoVj28VF29B9OmvF+vNz6dyRQ9gsk6vJkVpr1w4xE9HYodPYPPiL1Okf282v2WPJyWN7wj1rq8URjcPLfWVz3oB2S9Hem4PBkkob0gBsU81bs2vbIzerwxWeA7UyDWvJN2Crw/Uig9/ycDPLh8jjzuzwu7A4/4vBLibbyLg5M9wRwwvEj5lL1VPYU9sXy8vcCjIT26DC496C/cvA54gbwA/ck95JcmvcwIqrwn1rc9LGTlvYsxQ72YsH09QNmrPTz3t7wc5wW9wW+5O1tUjjnmTqQ9JcozPelVcby5hPQ7fzJJPdBkvbxGLcu9P0OHusYRMb0ELlc8OXvtvUY1yLxj3XO93MmLuhU+sTyBGvg86Gs6vZmEmD3De2s8m2jsPba2er2TxkW9o5ZYvX3lyLx3F5+9Xtx5u5n80DxoXw0+o1UCvay5Gz1btJw9nV1HPRXMVL38ydu7b8qNvIPOuj1dP4S9jHMxvJEwhL2uIHq7v32GvRXmHj3t6Y69kpy0PYIJuDu8rxu9xymSvEAwur3iqRk8laHoPVT1F76z7JM9mc0uPQOoqL242dS8U7uiPU+DMTwvd0w9iGAdvZsUkj2kq7g68+36vGJpNLzMk0q9SkVwOrvR+DyNF6M8cNl4vYZpCL2E9jA8v7zevRLzlD22XJQ8fRClOk1avzyLCpU9Oll2vTEnfj3Qga48WskJvMX1Hj3W0lm9WcFPvK9hUT1jAyI+N4SHvEq7eL29bGe7VmawvY9irb1XTIE9kNSPPb821rsfoLa9CM+VPND1KT2rlec8aH2dvDRbrTvhWWg9mG6VvNdRNjt8sCy97zvZPePtQL2boJY9dDtdvLL9kLyJ/Oa8JiWkvN+nir2iaw48EIRPuHCuKL0InL28UPhdvSJrKz0nbOy9VBLCPOwgmjzId+q9IhD1Pde5aLyzE4a8XoHJPa4i1rxOcrU8sEofvP3Yhb2ef0o9ArglvYziQLxz8zU9EyupPRqahz24jmQ9Wue7PUZVAT0jsAS8nY+HPR1pDL0lawO9ENPOPIaHbb3eaa69dBMivJyPz7xViFi9fg4Dvbz1iD2aapw8n5xuvliG4jx+5yQ9EO0zPEnCWL1ExLG9lAWIvKGsYj1G0pe9HB4yPX3JBD1mqkM9QFAcPCubVjy0pQW9rp6cPTtN3DstqqK9EMKPO2VGpT0JZgm9+9EgPV6VsL3WqFy9+4wSvda54zvqCzY8afaOPT9efDwVr149XV4DvUPMkL0AhyC9M/xUPGUxg72KU2y9fTq+PQa+9btmasE9I1jTvcddHL3y3c082K4qu1Hjxzw7+Kw9VnmzPeDgZz0SWbi9n6mNvSTn6b13yZe8qv1zvc+kVzxQ/YE8nDYDvRYE070ioUM9a3jaPbc4srw0GE69P0oUPMJ9Fr0avn68m3uPPQzNOLxTWTC98r+ZvWKzIr2wrPE870y0PX06TL31Oz69xL4JPTvJTr1bHpY84JzNPQ32hL1D/d89rfNNvL6+I71DaX08jJ0XvhR+tz0julM82BQbvlJVLLzxh1q93A4cPVFNj7xFAfu84wMePPUXhjwkuau9BruRPZa1dTpwZWu9rOHOPSggdrxcHZQ7JnlWPRXT+Tyuggq96FtbvJ9OAbyp0RO9RPIYPTFVQb24v6k9O+GHukOSVD3U58u6vksAvlnL6DwGQwe8t5AJvgd/g73c6p47dk1MvWGOWL3LChW9vsP2PERC2z07Ibg791TUvYnPhT1G+Ji9p+TdvT2iFb1jx7g7kvcEvZtlATp3+Vc9Km68PXy/JL3KbKY90+04PK0ker2XqRS8CIjAvVEDSD1vp3O70wL5PHSrq7t2n9C9SBjiPXR7rbwU1488PmuLvb8+gj3Yvj87Fi7WvZ6JLz3IS6Q9bIodvTNy+jwqrTo9CkpvvZkMrruIzz29jUtpvavFgzyjTP07ONqkvaURhL164Tg9XFkru94JH70AsDe9Ey+PvFJVa7xIhIo8WgeBve41qb2UXXE9a1mIvTnvFzwSqAe9KyqWPHndhT2qVjI9957avT7WJb23c9k8nu57PCvpyjtkWlU9dwnbPbVxL73SIJQ9Ve7gvLW52rypAoC9015NPYWVKT1T3ca9XZkqPerelz1B6gC7ZOu+vPphaD1If+y8ZiHFvLq5t7xJdMc90XPNvah4UjtudyC956+xPKdCl7tYNyI9jmgNPfwbor3pAxQ8qUQ7vRTkH7yupL49alRjPU4OO73zw7S8UBAivLcpsbpD6le6EEhiPViv17wKybi8pwnCPDiS/z0vvkA9GmMRvWEANT2IVFw9iIsQvCkCxj19AZm9EiogvV36bT1PrTq90NsSvXjbJzrOtZg7GF6NvV36B73kSva7+qHxPaCnBj60WvG8zAmXvVLYPz0aTne9jnegvZ+xCbxVOJI9oOGavNezWr0Y0mI9yqILPsFORz2cN/i9I1DyO2EwLr0NLsY8g4tzPX45lzuaQCo8kpsAPrvNZ7xD0888CrTVvX9BhDwPbK68FkL1PUoie7yXAjM99/Esvb8h8b2ezZy6eIZgvHG4e74dGyI92a/OvUiZlT3/qo+7vS1APQnanr0zy5k8tjtKvVc/zD1nl7o80MLKvXQonb1WyoY8GamFu/6oAD5cA2g9ud5tvDg+MLo8N7a97oGRvc1O+bxovba7vtlaPUs36Dzy3eQ8dAMvPabTdbwoL388kIHdvWPDxD11W3C8dMikPbv2Q73lH6c9PvLEvUtJ9zyRoqE9l/SvveWyizwOt5O9mBSTvebVjzkvnNi7vrg7PPm2x73sIws8p6rCPJDeFj6dbN28sX2evcRB2jyNT569TgGqvGS+ur1AlW+9isyBvfXEbDxfIl86ScQbPP9nmjz65+G85lHFPPbiWjudMae9ELeiO5K/dryDlFe8ZkvKPJIUUTun9KG9uyjEO4is3L39pzy8lL1GPZvVAj2SSDw9csUKvVAcv7wkpyA9X6xSvfdFGb1EDL68swjHvJViqL1BKp+8yXW5vNiORT0wBAA9kqc9PRw8mD2QdfC8wmBmPYg7erxOzyc+pVBmPXTiVb6C1ya9GIMFverLmLvmZDQ9MhUzOy4EEL1807k8QhcQvc0MyL2t+pm8HNOKvYuGD72uuBY7r4SyvdfFe72YjQK9uh6+u4Swjr2ENDw9g16LvWyAir0aLyA98yDbva8ZMz2rt6m9HmImPcIAnD2RiZq7LHZjPdgbGrxPgcQ9GBYRvWfjejxUKUY9FMeMu2AZRDyGEbW85npSvJDlZD3XKEA9PRotva4mUDyh7Gg9IMhLPXLg9zy5/X66gveGvNWtnr1Lm6y89qKTvZV9vzxGDle9BQg3PS6l8bvZPZ28+RGBPZkk4Lznxqq8GutGPcYTVj0BvOc8YbhKPb1MvL1yyeK9shTAvZMcEL1SQaw8vGCnvdtYkr38aCM9AK2GvdSZZz0TMjE9mTaEvV2drr0JHIc9GWpZvZnYNL2XJ869htYeOsxN8Dymh44962zYvap+uz021Ae9PDsUPAa6R71yfgY90NzKPZM+SLhteyQ8UAc3PdaUiTtZ4qu9FSHTPMIeS735ma297NrQvckSsj1YaCy7YWzAvQWqoLv6P5e9jUGDOzDfHb0IpPS6OlfjPXvFgL0AiYY9oASfvNCez7yHZCu+faSFPez+dLwaqMe8EIalvRPl97yZOr89Cv40PHegOD1DtnC9ed4RvfcUQr3AxPg86g8RPC2ZG7wOuNo8ENi9Pajw5j1InFe8BJAivX/wEjy7ogU9Lb8ePHzacrza1qG9GZ0ePZKTkb2W+6W94i9PvWd3AT1LsGQ9FmDsvQ+KML5TWsO8yY2fvDKzDT51Mb68cKfZPZSwy7wW38291BtaPUEfzD1W4DE9gTS7vSSbA74FJOq60KQWPQ7vFb196fY7vyIMPoqF+TxTKy49mZwlvaIrtb2/p+29+QW8PeUy8Lqz+mg9CHnmvQ4FAL3Gw587Vc2yvWTqAD5Zn5u93jsQvnEhAj6DskW8lC4mvXJEkr0ffy89nsREPG6bAD4g/NS8fqRkPVDxK71AY9s9crUavLHvkL0YeGG92vTovTuQrz20TxG8aiGQvdM1nD1+T0Y9xVSavatwxTuhja49dCN8PdVpATtEJB++feBDPSnDJb1Upwy9bCgSvcr5Nb3+beq6Jeo9PW2tEL59lW276YW8uaIvD7yD/DY9djYcvEYco73K2Zq7hbu8OlWokD0WMBa+IHJMvaG9Uzto1Sq+yUhfvOEc97xfCxe9sjAzvejnkbxmDzu8TC1zPFuh5bwxHwM94WZFPezvv73GeNm9tYSTu3PXpr376wG9kjV5vXtUkL2qRII97kyUPcMqvz0aEPa6GTqVPMGmFL3Y25g9JHzPO0o94bwVYEs9bnQEPpLiRb21fDy80uSQPIjreD35JmG9JaiePbT3gL2M1yI9K4AFvUILRDzmYB+9ojCkvPyAHrykeZ+9LDQMvahoqL2BZoe7SjcDvWCtjb2A+dG7Vih8vXhTYT26pA68oeqbvY1WGL1xxES9ycXuvI/H071BcHW8GTODveBBmL2/cG09q64Ku4Dj7bxuLu85QGW1PXrgALyggUm7jo2SPAyw0bwS8pm8Quu8PIbPMz1b5vS9hVQ1POl/nryd6pm8G77BPbx5obxti3w8rpUzvTDkV7wWtqy8369IPDXZeL2ckiq9YwW5PP01Zr0+BlY9sDBJPdA+iT0AMIM8MXx1vaiKs735r2g8KbEBPdZi9LzqvOU7aXFVve0Tszzz1RC8AZ0/PTCj/jxCQf28t8tbvJWlC72gx1K968wrPi5A2bwivGS9ERAPPUl0bj00tG89WdoQvEGlR74Zmwa8rfyAvfMYTD0oBL+9AOlHPZ6wG71YtzC9p1TJu0XX5jzjse89ufC8vbAdzL24X3S9wCGZPJI4UjuRnAM9X87BPS8z+DzzR6Q9OWNxvY2bDr43qce9e2mvO/7aE7yd4Zs91K1LvTIPlTyFio+9/02DvSDpVz2P7sQ8I2ayvVEbQT1xUPw6C26PvYMQQb1A4h498VqoPSpoCT5mrhc8faRTPVE/jL3lEP49XH9BPRJDiLxjRXQ9FtPvvSGg5T1ywig9rruQvZyAM71PqiQ98yCiPWCst7zGdoq9i69fPTnNob23PNS8XHH6vdh51L2ALp+9J9mAPAEBTD1ZIOk5ufaLvbrppjswPoa94PoQPW43rDx3Sc88mdrIvRdXbb2Com697ZRNvSYx9TxCiTi8byfoPNBSkb2ekoW8OYoRu+xet7wipFK9lIZxPeaWKrxXYQQ8oJDzvFx7vz34paQ83I/LvSX//Tx3CoU97MGcu7MO7Lw/OJG9JtWXvD2LrrwMQYS8kn+BOvowB71cDTU9n28AvYr3gLz00ME9clSePToyCr1Lzwg+3cnDPI5wK74+5oY9PI5TvYlZQD2OJsa8rDhDPbcSJT2sUSS9vJc+vmAaAb3pmhI+a+GXvOx3EL5BoPq6e18gO1esxrwbtOI7V0CYvTkLhj1iLv09sDqUPRnw6T0YEzM8vW/PO+Dcqr0LOAe++58cPXdH1D0+XpK78r9pvBWoCD64Rl09+e7HvV3P2T3wuwO9gpe7PW6rZz0oIgk+0NERPK81QL2A/9M8pyWzPKazQb2kksU9DZ2GvFyKIrvyxE29iiP3vLff9r2OaLS9pFWevYmenrwWZMC8NlFWPZK3WL2BhC09KByevb83uD0y6ic8DnM1vV2I0r2pF8+8t26DvHaZBjyi82k9PKPkvCc0Hr0bmes71P/rPeCypz3i8re99cLKPHl2ij11lqM9I+QvPVCqaDzMSLC8NdtVvYYteb1Uvhy+9BmAPQu3ID0wmAq+cKIbOtR6Qj0zgs29wPmVPZ3K9DxkReI8vG1pvWfNfD1Kb1y9RcXyvf0fpT16RjY86TBsPQeWpbwUOIE8iwtOPQMbrbjbfWq9Z02FvK6JjL1/PNo9LXvpuo+hvT2EA4K9AmAdPQLy0z3n/ya9BmzjPXKzpz2b7cW7ZXaevKXETb2TMpi8812JvUk3A7uZM/69mB4bva7md72lHkq9G+5kPRqwJT7slj28Q3iZvEJk3DwIPpc8dzKivRAS+jzklJS966MiPaTmhL1uSE89uF8jPdJDub1/7GI8cARHPZnVJzzit1e9SkplvjHYIb7phf87AAFCvBhWGj2jFPA8ttXKvezq0bwAY3s9sGe1vSB8JD16QbI9JbSpvJb9gb3LqtU9BpGOPch5Er2HQ7C83wElvTudkDxaTym9N02yPJo7Tj0Nj1k9Er27vbGuML1Ymtq9tlnWvLDIO73Q9gC8hamMuufWAz0pnYE9toWvPFCquj1SiUk9V4W3vY218rz7vA48JhJXPbmej70FIEG9KicDvqoXMLywfao83diUvdOmLz3P8Pk9j0wZPQ4Ws7yisv67nY+pO2PUN73P9ws9fP4GvvjI4D1TXhK9IN/0vLmhHjwljIy9n/uOvTw4sL1k4zO9YLHkO6U3Tb00SBa+5AUSu6lEbzwEsKI7KF4GPav5vr2UlJM9t6NJPN2CUT1g1Gk63JicPQEphz1dbiA9plkbvbm3OTu0uIO99ApDvLCspr2xZQ699ZHYvMe2Bb6rrUe8VZpLuqb7/bxJeOW9EHCuu8O1Pr0kKhK92b2IPFMUK70Y1SA9nvs4PQgfAj4o5hc9b1t0vayhDz0FNZQ8stYYvRmdtDyqds88ryfaPSLpez0bAlI7QfZuvRbHs7ypKY893u9dPF4idT1NB4O9vYzVPd1NB72fdkU9+x26vAG/YD2GIYm9ZgkRvYA3E71jsJ29DeaRPTDyCj0dbo07tlqEPBcb6Ty/jBI+L8WWPXhmob13Www+qiCvvV/PyTpr5oa9KrKlvVbwMTqPkgi9PxIhvkmzADzizLu9WeegveQLO72M24w9oxoAvc8tjj2eswY+dEgAPqfRA75WOqm90za2vSsVy701ep48lS+evTQhjL0wmma91J83PQjrxj20RF09Kb95Pfbhyj04fRk+phSEvaqZ+r2BQM+8vQSCPBPNJ7loS2A99w0KvtCTwrxEjAw+hBPRPXe/ZL3Y+hi9YuHRPMJnOD1a5bO8TuCsPCycx7yp5yY+q0EhvOQ2Jr0CtqA7eQ7KPR7ukr3luh8+svakPQ1TA72+bnM8wZ02vXYKhLw1Kqm9a96KvL1gEb1eRle6T4/QPCWqqbuX5I89ApxUvFN+lz03TuS8OtBcvdtkGD2UvRG98L0UPQxFLz2Gn8y9VqBvuxssJT1xR8a9Z/bNvL/xDL1vgqO9wnTWvJ5cQ73BLxM8VFPzvOI+3b3RkbI8qFYEvvVzmr0rzso8tr8CvT4mzTtE18C8b2HAPf3u/bxTKVW9j5aGPYqkXD2GrfO7jgKrPJKSCLzlsFo7t3ndO/teqT2e/329hB6vvHsDVz3KSPE8RloPPRktkrp7QZQ9kI7NO91pZTyC5cQ8sKGVvXPTEDy3p/S9FO6vPGCCh72vXp09An2iu8n8pL1NKks96OksvW2+Wz20oFg8AXn2PCxTUjvw0aA88jD5O9W/X71hgBq9gMSLvWFeGj15vh08rGqivMgruzpxP0e8XxzkvbrUijwfWZI9hsSjPbSohL1ZwbQ8YYh+vUdgcz0EnJa9RhoNPTu5Qj2o0Bs8OvDCvJOzhz0/drU8ngv+vdtLbb0sRye9tBYmvct8Gb6Hzoc9yOGRPXaEor0D3dW8YJAAPGyitjyozNQ5O1qsPE8oGL0tpMS8cY3ovWO1qD3Rfbc9ekAZPfNFR71Ki2s8eUu1vZaap71Gcoq9M1kPPV4mIzsuVI88j+lzvTTFCL2zVhi9uyDHPZ0FQD2eHrU9vXEBvUFIB71cvBg9oMsNvVMJLb27HJc8XmyHO3Es172uCIC9hNZSvTXGHj7k0dm9cKKVvc82iLoDCYo8bHyVvYbovTtGJLK9RjKNPHN4Fr15XJY9dG3lPc8n2Tw2Jdw95xj0OwUBvjt3x1e8De8JPnPSgj27zCk9If7KPHJkA7wVq009xLCDPNwJ1717j4W9i47IPA4F9zuLxyy9eLf5PCh0PTwGHaS9x2kGvWedc714jhk9fe8iPZ/J5TzL5+K853CCu4+mS73U8iA9iz7MvIis4j2QFRi+dcYgvF8fsD3PADW8oWnEPGTbGzzJ+Hy8oFaDueYIdT3NLmq9nmSPPb4C57tDFpa97WylvMjmQT0nYFa8tp6sPF46gTxSvlG9K37vPQjLmjzG4zK9VYXcu5AbJr1UXq48SO84vWFtIz1XjwO9iGUOvWkN2rzsIse7tVo9Pt6VB76Ahca9vl0NvmYvPDz6P8O8sbSrvTEk0T3yfiw9VNFpPaYHnrzUtgC+ftfwuwmlEr4YYz+92bsePdnhvb2grq+92zkrvBrrPr0tl1o9jlQ1PWdDnL0dsNI9uzJSveCt/719tqk6kYvOvKMNb7z9YAM+ZFohPXynYD27doS76AnRPdxm9jzba469zJTHPZbZQL7eh4A9oxnEPMw3rL1ACLo9BEYCPWP6wLzfVTW9S8jxvEIr+bwdppO9LmyPvYgkkjzGMa23O2tlPFM0LL5NCkQ8Y7efvJEmlby9yio8MQpQve+UxzxTFkm9KAKJvEiyA70GO3482E9BvduDpLz3Jhg9dYOiO2bNu7wtuS29V1KmPQcbc73I0Cs9lSwtPRfQgb1F7og8xaZUvdlaG7xNgZM8DNG6PZ+vwL19yLU7j3urPXWALT2ZwJy8ZVmovRQGrLyGoy69GjKfvG4v6bx9NK85bUq5vab3jb1ZS2i8z7nyPPDnRT3RgUW93SHPvBS7qzuIh2m8eefNParDBjs5K+e90eBUvHN0E725o548XJ71veFeKr3acae92HbTPZO+eTw7z168/WzCPViFhz1OeYG9Rj0AvpQwP7zrWtm8uZgJvdQyHT1VLZq98rWwvS7+tT0xpdM6ytLyPQBPQL3pAEy91VgevVfDoD2Z7Qg9ryoIvSEja735QCu9MnF/vX8P1jyuUKC+i3sDPSM/lry917G9mlH8vVkngT1eqWW9/EqEPcC58L2P2ag97Pekva/Bs7u3arq8jZ/TO30vmTw1n8w9cLaEvcywR7wHe5Q9cX+5vUarU730Rb+9d5c8vZ3ylD1chhG8klTuO/Blh73bmLW86BbkPC0RDL4gCw8+CjorvasZST2nCQe+MEAHPtWnWzzHZAs+8oLSO0WTBL1wLqk9YZDvvFbWy70mfEk9Ptf7vMcnIL1C7xw7BNYNvoNVmzxhYFY8IA96vURgMr3pB/C8lA24Pe6T4L3RWBQ9V9wKPMxldL3Ygia9E3cNuUEh1j25Nki9TDLJPIYRhr018QA8gYaFvdP5iD3zKQi8DuCFPJIqGT1JxDW9fXdFPfyRl71HNwu+TRh1vWDqBL4XrxU9q/V/vds4QDw/J1+9xGeFvGXolb22PZm7G4tNPL7qhz1Aame9dNmOvGjaJT0lvL49cmLVPLWDYL2dqTm9xgS+PPyhmT07T+U9KK+XvDLBw73vU9A9lw7gvftFCTx6xKc9WrV9PdSsMr3m0Z69WUFyPIIqET2N1lM9La1Lu0dJMT30ZYu9jL37uaBI8TxnhRK97V9FPiI0pL2Bh4m8eOZAPewyxbwu5ue9fiylvbC2nT2Pqua9vYgcvVMGCr2nZGC8XwrXvXp2hb1h7hg9dxWKvY+GEzzaAgo+52dGPKCTkLwSYiY9rjPnPeIPbr0JXjW8QYG7PIoV1b1UphI955GnPcVBnDyfv1y9xDytPAeUkzyG8qa8V+X5PbAjIr2Ujkc6g6jbO+K8eTxbl4g9fu1yvcNmHr3kv5Q9+lzePU4CDLv5KZM9YwoIvcI/OD0dJM69I5ZJvM23ybznYK69t9wmPNZ4tD0Gl1292CkSvZTglTziY9i9B6UZvc2g0b09b7A8lTdTvbONaLxN5MS9IGwWPQ5vUL3xITU9/JQCPLb5Vr16y6u99H7qvMnRsTqZOii9i32NvbRwdj01Uka90eJaPF95lzox+8u7t8qnvagJ8TxXgN+8i8sIPaoRez3sPxy+ETEJPDGDf71XEnM8OyC+PG4Wkj0xkxG+a+l+PZvE5Dz990k71NfpPLXOxb1vZhY97QKCvb/hDr0eNC69EJHSOxZKDr66Olq9vyzZPH0HAT1NVlc98Z+FvevzAL3D/se7s+1DPS0Ilz1t7yS9g/5AvUCRHbqKRTq916iTPaaRDj0GfnA9AdpCPbHIAb3qyza9T3P6PBsusz3awcC86aPyPDJ2njwbZpW8ndYbvYUFUz1aGdq9urxWvGDiVbzGGs08G1v/vHiFmTwvk1C8XdBvvTBgpzvfTLG9C5TXu8SSf7zIjkE9wERUPUOgE74aXxe9BNPgvD7hiT2Rifu6iMdCOh5kTDzx75Q895cHPNYc3zzjQoI8pyp/vVHA5LxWv5Y9rY5wPN0C0Dwp0v28NgO6PQPqZT0QxOi96vebPeqgoj20gjk9nz0uvRrqv7usXf889hysPdhoJb2RSkk8NkFFvd3KO7z4V0G972smvT0Hk7yGuJi9ytPOPDRXkTvzZrI9acBGPan3Db2eOAe89dgFvClYSr3eIQe8PvYrvZUjtzr/l128w9doO1SeEr4T/489+k/bvA+dIjqCidM80DWXveNC+zwccoe9svDPu1rMKr0DohQ8da8WvVHOu7ypkZ68NOT8PLKIhzvF0B29EDfoPFhnbr2s7vQ8QRaIPZasrb1ZuZk9BF88veqVx7xLUng9aYTCPSdGCb5Mp4Q9P8uIPbCxUD2f3Fu7vq2kvfbh/7m+vNO8PTOEvChT4Lz5f8g8Oju6vfQ6hb321Oo8aE2ZOx/Ciz1KyGq9UjWEPHHHVjxfXk09xejWPTutML0Ku3y9wNygPF9/rLwrylo9763dPajVWD23hHe9a5VBOo0gIzy29Xa9Q6MovbQoEr1P3JO8ONkFvTAgKTzV1Bi+UIOfPWF5UrwBBqo837XZPGTWyr30ZRG9ySIzvVQyPbyVcZ295yuBvIqxGDx+gtC9E9BeO7YxGDzmZki8qUPzvDQStLvtESi9vPXkPJR40j1LUZq9y3wKPVnONr0oR5e7c4dYPc/DOz1CLhC+x3M5PbtcKz1Gqrc8tGqmPNG7/r0N6qW8AFlDva9FurrmwXy9UV1Mu4zD3L0TVZ69zuJBPdSmi7wRFIc9i8x2vTBAID2Adl88fyk8PTYi2D0mIn29HrfkvF94KT1yNi29tf8DPUZ46TxK33Y91W6ivXOwNz1Thgy9ah7zPED3LDyrhze9nPbsvaxnxrzd4mK8nZ5bvVDvgry/zs49al25vCuLBr2k9t08xse9vcGHh7tasi08xVH7PLvqFbxvSsy9JY6xPY6AKTz/K/69boOxPeDthjzjYZE94kDyvEgwgL2xnRE91lmbu+OPmr3IvTo9CZ50PY9KYj1PT8W6g8XAvNGaOb23vwY+VIFOvaFXqb1NISS9da3bPKSlhD0dn8G6/lnxvOZvhzxtMS46+HRBPDZDUb1zqQE9UGmVPAXBFL0XltC9rK7EukwYVT0XLM27IQXVvTfZND381MY8LOSDuyAUjrw2JPc8R+yJPeP+2L0zyDs8C0MAvPJ+ljzvgC++UKmFvcvd9DwPuZs8xHI9u27Z2L2wgPu6ukMTPg9WAzxBYP+6IwclPfK0ar1lAJ29Y0FtvPiCVzxXWfy693qVvDUdN7taLHe848GPvfEaRz3loLo9WvApPUKAFjyLsp29wmYtvc2exrwjYDW9RS6+POx6NL3Xw1+842gNPS9/FT0y1EU8MsT0PemHEr23Mj88IPLMPCd5cjxDFHC971J1vcLP8r1j7e27ZuJlPfBJwr0YTC29GqEUPbUgxDt7CrS8WfB9vfgcUzuFkrO6PmF2PNpNlTzFT/o945JBu2vM1Ly/45g84+ltvSiXhTwGn729cnBjPTdGTz0v9tI9H34PvUG+6D1vZxG9rkTFPY5tJT0MydE7dVsSvSYNVz1xQUy9q0BovdxlTz2gByW9R7BtvZIKcb37u1c8e12duywV/bzEWkk9g6bOunMBBr3FAg299gTzOUhbjr1xGie9uQ7KPaKBYjwlewM+vdX3vGbWDzxESe48SqFIPa0WvDsy7oi9blGoPMFgWT3dpNW8QFWWPTxRDz5HQYQ9rGI0vTeToD2PTaw8RRVGvJ5gBz1Lp688WkUHvOSpw71cfBQ+piiavLq6gL2IBY+9u9Z9PfQazDxqdG09nWfsO7G+CjxFZT49tNERPcgyhr0mNJ89EZjrPH5qGj1184U85cm1PWOgJT3T5mo8zGUjPcOtGb1GAQs+Bv47upYSHT6tVZ48fCzWOyWJsb37Edc9Gl1aPSyKjrxAVpY8Ztg5vNqVnD2lZwW9d7qmvBSk4T15vfa8O8+XvBbRjD3fcnk9g78FveUDDD4mXMS9MKp1PbpcDL3u8Io8s0CJvU95yL2ujeA97C1KPbV2hzwP8zW9kpJIPZXlSLtH/Y88hp9hvBbVzbyQXIs9P1pZvcqaED3f7h+90qO4vdObS73S0jC9CoSFvTJlOzvoI4W+5zSkPRCVuT0ce2m9ub6+vYBSmj1vv3K9/yS6PJJgWb1PfGq9RiISPkmJxLycGzm8N4WWvYo4sbzwibC8PX92vVzPfb2bEIk8BlCQva16NL6QwVU98WEHPfu38DyNdQk9Ip+OPBkwkT3DNNe9K9YKPRzWVT2LvDu9TgVkvI76Ib1xcI08wJ4DPQBlk7oWbt09si4bPgHHKr1UEkS7YQJivbdyYj3XDP+7EnIlPEfurL2ZWmG9fWrEPN0Fwz2OUAe8YKMZPsSKS71EEsc80Y4+PDstWbw4MBa9viwnvBsJ5r3wTiU87oHwvOpzu72IQgW9s48HPneHqD3uV1A9EZfyO+aoBj3aN7q7zhS/vf/6j72/rUE9Kso2vbNEob2H6bo94o+QPIBzvzwGJZy9wamavKjKOLslUdi9JEoBvvxM0r2Jt8w8kD4cvSvMv7uR8QC+7cTcPbeZ27xQI5g9lvKQPXJVkL1baB++4WGkvaMU2z3edjU8H7FRPch6o7zUdqS9tWeRPEyF07xL4oa9K1+0vO3aizwBxZ69HsBBvD68Gz5BjBW+TnZju63uxr1cmJK84n3JPQlgh7wYUhq+koqJvCdxoTysJjG8W68cvUm8Bb6we1S8QKfAu0mbLLx5diC+JxbCPB3ptr331GS70VzYvBtZXb2D6YM9Hfx6OzMBsT37bRs9MphvPULjqz3o8pA98KKLvXXHHL4B4ou9T01CPZU1jj0CRtc9c86LPe3pIr7NaZi9GJGmPLqjaL0mizE7+NG0vcjjczsQdgi9nt7TPPc6qDwR3tq8Z40svVQJAz1xxM+8YcxSvREX6DsGAEu9XPQyvYZXYz2Isfg7rvYCvGWiOD3iyvQ8rYAbPVaysb1vAho8TcbHPO2yhb2SqV69bstXu9zyIrzBYj09mXJnOiDKv7wLgVA9OXSRvQyRpzwhDN49BB2qPcgyTb2LqU+8zHtKPUfMdT15HGo9kSQrPCCaVjyWvqC9KnbBPFWQPr3/usw8C77DPX7PxbyGYm48YwGxPGOgjTpsppe97mkSvZdtUjz1ja68KjAsvaOe2T1A9hO9kaGYvbf5T70zgBG77h5tvfbJ1D1byqk9bDN/vfASj73O5hm9gkYMvIkppL39/CS9e/iIvS1svLwvCzk93nIOvSgRAL0m6nY8UlqKPHmKjr0mbjc9XaekPMCFN7zU35s9ot17vXlo3T3J7Lc8z6C2vY7ULD0HIea9E5HfvQXH6T1/Ibs8cAlKvbEJ7zwwEDe9x3BKPRmiT7yxvSC7W+hCvGMzg7ttqTO79qyXPD83JDzCTFK9xT1cO/1mYjxL3bc9oIgtvutWHL0nsjw9D3+PPbvIS704dh+8CIPevc8GKr0t49S7XOfdPTN1D70U/zS9hEHuvWXEWjs1FuM9pb5jvTBcRbz1StA8aL2gPQGYPz10N4o8vzATvP3RSb30wRK9jyanPfGBrL1SVRq6tkwOvsTLaj336oi86ZMIvFUN+r1x1549yJJ0PB8P3jx7JUa9rf67Pc1ZiLptlrG8crDgu7G31r0g7h09Uj9UvFAyKLzSPdS8LqmbvS8Jnb0IxtU81J6EPRHwxb2v7Q69oiuxPE5OqT0aNqe75NP1PLy7Oz0ox4I8zWOkvAUthL0cUJw998knveVi/7x6P4i9haS+O/kZuD3osBy+1L2cPJ5dET0Df6S73wcsvI0g1DxMs308cyOFvJoakj19pwG9c6MGPWAciL04t289LR6uvY5wyjxxk667xlyAvXTUrr0C7m69jLOQvQegOr1t/1I8fhw1PasRVz3EBOc6LSUzvBKqA711v9i8gfzQPBKVab1NGps7xVGKPU/Vjz3JfsK9ykIjPeyzcT0mkIa9dliLveGOGr0/sbu9CLV8PO6ZvbsBDy499e6zO6+6lb3daoo93ROjvUHeKb1Z/YI9TPyivbA8JTwxWZm9otRpPXzqcT1xNyW9hbK8PEUvsDyGFbC8P1z8vBGpgTxHWw69hN07PNDc0j1qwf67yV3TvI8TBzxPz3A8pmrqPQ2EKjytBx49IE7VPD620D3AMCy9RxrrPEnnFb1aW029aNBFPAPwc73paqq9lBP2PFhQob1HkYw8CYv9vf9SBz1eQxW8Yn/1u7F0gr2HImu7PpNSPKwt7r3Fy7Q96mgVPQh4WL0ipx49UVBmvTdtDDuXpE49vCVmPT0JUbqNL489cggKPeqwU72MG1Y9q0U4vRv4RT29Mye58/C0PRyL6L1yNBS7mD2avTKiUj2DLKy79aaePTwBH70Q+ZM8TTUbOn29ZTx8CHW9zFoWPoe44TyT5FW9Bc2RvW7PYb2D4ta8Feo3vYvJqL0hIWs91dNeveFBIb6qnBs9BrV6PU9JLz1ZXEK9wBHOvMXXorw1GZC9Z4yCPTn//Dwe7I88uHlyvYzZ2b0Y7C69qSWaPetNR7yWlRo+4o21Pb3WIryi4q+93IcXvbEB1z126zK9PKL4PCKrCT1V35O9aH7CveHBu7xP4Xm8svJLvfFO9jxmxJI8AzBBvacgd72lySm9R1HJPIGWFb6ypak9F1rLOx6yQb24PR69IS8DPRpOVj2fKkQ9BfwlPasVybsuFpk9N+0nvewrtDwggBs9NYoZvIxFcr3oMz89tMoKPPEzwb0h5NW9tal6vTahADvz6V+9f+2xPDtOkT3FpCG+IxlZPX7VLTuosaa9SNkqvFdlAztLS/o8hcDevLENzD2faJq8ooW3vM4UHj4Izbu8CCIvPa/R4jzSr8m9RAYEPGBTIL2y6+U8EYiHvPa3mDw3Xk09LZMlvS48yjyytvE8ehShvQhvqz1sZIS94Lb4vdo4GL7evbq9k4CVve2Ct707B7a8o83nvB83D712uo48AbmEvYJIhbzF5QA9D9m/vXoAkLtdnHQ8apbCPc8Jfb3z4ho9ieA5PoJhlD1Ox8m8sXiSu3gb5z0HolK9W3V4vWKr5jyjroe9SHWPvSbnOb1W21c83Bp4vPnjfLx9JJI6Reefvc+vUD0Vu3o88BTAPQlGiL0Q99y9uqMOPeZlhD1tdUE9vnSgOyFsxD1GKPW8JhJnvccjjr0jagq9o4OMPWXID75ulyK9BmBPPUOlqjuuS2g9azA/PYC8VrsWU4C8Y9CZvVG6wT0lJwa+QpMBvXKnNLthKI+9nqSYvKUctL3/5x66HM9+PZQ5UL1vOLy6+VIDvARBADw66kk82qTwPEfnD7xEzNg72CCnPOWeQD0wCSw8HYIKvp+qCz729i+9P/I4vIRg3zsQc4w9LOkTu/10K71/B0s9yOJjPEOA2L3GL0q9lxecPXxVy7wGZZq8I99BvYQ8vL0Mv3+9YCuTvGIMxTyv+5m9NQZpOzJ9wL0gXd+8RR20PHu1y7wfewc8jThdvQ57Hj19PaO9qUVFvVOBiTz3Yb+8DMF9PCjVVLz5QFK9qSrgvS1rOT3fPu09OTO+PTjpzz1n+qC9Lf+5vGbNWrrviCA9Vr8AvcCE7r1zXbs9VcxNPsBwOb3vvBC+91Q7PdixLroPgx8+Gq8qO/2j0zzr0989SguEvOr4oj2YZyi73tnHPZyw1D3B+oM95K92vMO9kz1nybK8jeigPOMU/ju4FjG89ZWePVTFzL0YoYg9ose+vDZFobz2/7I9BZVbPC4fqzzsyuq9Cf7gu1ryQbzV5Pi9b5qXvXNuGD2pTCu94DNOuyKaCL7SzHG9iz4CPqe4uzy90/+9OHoRPuWV/71tE929aIDZPJ70cb0w+jY9MIkPO3wskzzcDkG7HExHPEOyHb261IM9R2oJPqlA2rrZv+u8339+vZcvizySni29swSVuk88TbySIZA9embiu327rD3DZTq94ZaGvb1gmL0LXo+9HNemPfMpz7xP+h+9CuoRvXVhUT1gNbu9B4j4PCdChD0hGGc94B0pvZQFWT1NyB+9Q/WvPRIsq73MkrY8YmbVPU55J7twG1e9+P26PXbKdj3Axce9n2s0vcrgk73ejs67lNjlvXt4ED4HmW09UQXRu4vI2Tz7BZI9QPQ1va+iPzy6o7085I42vel+2Tw0hwW+UkLUPbMf9zzCo3s9wGMrvPb+mzxC8rG95WjWvdURmr000wu9b/ReO6JijzzFau88mIHYOzr+kDpUR1s7wiYQPoQSijkpOya9sTdMPWUwjjvacJa9MxA8vJ7BFb0ISX49DeWdu8XuDz2aHNA8mkWgvS5GOb2E0FS959yfvXEWQj0ruEe8QTlavZiLmjuVMjY872OxvLT2h72ifEu8EycQvh6rJz5R2SE9lV+ZPR9rKjx15As8rfILu3D10LvEBlq9/6MHvUa1FL1tQYy9X6AmPCHZC724O5m9/CmmPNfJT7xI1z09s27CvCnNAr2r+bC8lisfvJCQo72WWl89N/uqvSnDATySSiY7hV6uPAOwqj0U1lI9XIwEPcZV5ryhB4y9SGDGvT3htrtL0w49Z1XzvH5L9Tq9KhO9oR2VvSjcmr3fugG9V9ofvLbhpz3Ek9o8kWBJvasdNT1MDBs9ycwcPbkr/7w+KZQ9gnnlPd/j4L2V8b29rMt6PXh7zLxgLcI9+lEHPnIBZztASPO80ikmPGSvVjtetOO84HauPZ0sGT3voVo99CS0vDdT7r0inaY9Wc6jvUekIrzegUK8pBOTvCjmGL6Wlhy98FWHPTBN8rwuI469zZYHu+1rVz11Knk8vjibvQw0lj00xcq91WiVvZlBkD0DZqK8T9qou5sXs71v7Ru87NYMvpZAbDu1ZS48qhA6OqWDEj02lGi92D+rvSD/xr3p5O+9nbeivPdPPb7JGIo8VVYAPuVMxLtbi9u9nSygPMTKTj3F6+c9KQkJPTi54T2msTc90DmSPfdCXb6xmik95JcdvUn4ZTyNq4o8eugNveVK4Lq7cYa9P0E3PuTzlDzMlo69t+cdPp4CQjzBA/M9tUcWPreFkT2h0pC9/3Wkveg6lr3iapm9BPR+PWfD0T1/PGk94bs5PYyNP7zhR508Y0xGvdbbrTzeKpa9Q4kyPedDo73qJbY9OXoNPZTUizzk+ve8uLhwvEq5Gb0hmUW9rqNHvQaE8b3Kexw9Gg4guyjQO7032zu+dXWmO+/TXzx1YCW9SJ0HPi7FwTwdDIm8VWYePK42+T3MXny+ax0wvTwRRz14UWi8u9WVPXGWzL1KvEY9ofrpPDRkGj5nnlk9pgIFvZuPgjtwk7w9taQIvcvK/bts9d67SF0LvKtgHDnMf5G9dwqhvf5pZb1eSXY96Nq5vUSKqDugule7jxS6PDg44ryiLdk6WbC2vTv/Jj0rwjI9v2gpPHNCrz1EmhI9xOLbvA5ngb12uWC8CEJfvLLMgb1JHry8KUu0vapK5b2ytZ693v+bPPQ62TthRgK9H1kfPCFcu70sRh09x3CgvU3Oor2nWxk9vMf7vWNGGL2U05k9HTufPZtC0zxAKoE9Nb0mvGRXeT1lIlm9HcURPvKYdj2VjaI9qsbFvBpRyj3Fvco9cSsdPLlhHjzxqsE7zHI5PBr1gj3Ii0M9lPaQu3WcQr1I02i9C2eeO8TRVr2OHOo8cOfGPBLFfL0Z+OK8GpupPWdVsDzRbME9NWolvTWZGr101rY7UIX6OxFcGr04fOS9R8oKPn4+0LxhQqE9FzyuvZaiPL0eQ3I9PoRpvZpEvzxPvXU7XESZPTTuJzsLUi49/1lCPZT0iT11RrO95mHyPCx1Dz22KwM9Cp9tPQVnhzwGK9q9q7uzvdcCbj1yPIu9rW3OuxSVR71zXvo7e5AtvOU6iD0RDB49hPAuvSSSu7z+fpk9ccCFPPraWrxft/W99+SdvQ6x270Mjlm9iSnRPQlPSDs46pO7ZuGEPbzSgTxObog9arsKvUlRar2HImi94H+RPc+yCr762708Oh5sPZvn6jy5Clo8pGePvDCFvz1Wdrc9ZCkHPZ3Cvzw+QVi99RLtvWumhb2hD369afEHvkhw/DygRuO9ewZiPTKQjb1NBec8Whkju7NuxLxs2FK7MINVPe/+ATskxcO9NFeWvTI2/rw42ai91re2vb43vz3RERk9rJWGvX1bp701NUA9AgjSvO8qmL1oUd884Syut7uqbrs7pBG+DLUEvT2DWjuNNtC98a08PTWrxTyyscu68rddPcEHtzzU/ca9fflHvYX00jxg6G+91uAyOyuAkrxskF69XsdmvChYkjsUJxo9Hk6pvbQwLz0R95q9fkyXPMWwRrtw8tE8acTUu0jrlL0eF7q9zh1pvUC4Vj3yeji83MZPvdvCQz1TgN68OrnNvYXW0buIE1O9a/5LPL3MCbzqdks7w3qHvLVsxz3rGla9cQObu2jKxT0Cuew8uscYvYxWrj2qazk9qEe6vRWxFb36/kK9ycnIPWtxiL0ml5E92qdBPXC1DryoaJE9+ZgGvCm9xDspysm7TmkDvEw/nDxKXwI8kNcQvgb8Wj1uF9w86JqCPaGn6LwUYp68YmPKvCcFJ71yVjW8DvycvCiYTz0al348qctQvY4MNz3hcQY9FgIfPnn46D1Sig29RLpqvZF/4z0rMsE9k81ePEe4EzorZrE9ld2APvHMbr2En+G9fS2ZOxpPTz1HXdU9KmdFPW20xbySSeo9J8j1vFRPWj0fv4a9rhbIPSjzDj1dhK47dF8OvdTvQTz3aIK9UVsZPWurhTy23BE9z5XRPcwiC76GS7I9jobXPIvrGbwgqfE98zKCPJ0uCz3iUwy+O7zyu4viIjyHRcC9yuCkvFj6sDyP7AG9SPY0PXb0d7xkDqW6viHePQCqmjyN4OO90E8pPnN3+L1uboK9dYGJPBIKir1Gv3Q8hYkIPOS55zvCxzQ9FrCAPcc0jL0OeoQ9lE/DPW4c8b0yy7o95wwuPS1aJL0OC0y9x1nOPWk6ar1GCmW87KhCvIKNzL2MU5W8wJUFPTVqZj0DNiu9VHY1PCNmqL3zWRm9vYupvKKGG70jWUe9/LqpPQFCqr1DE5W6lCOIOzIXtDxHC6y9pcX1PBfekr37BfQ8OcNSvHeTeb04a2881n+YPTwUATuY6zK9ExF4PH9YRjw+nAo7BY/RvRGNAj6Gww49Ky5XPJTDFD0IX908+HbAvCas5r0Lzbi9BdFmPZlnGr1fjY69IK+9PQg/Oj07cK48gDQJu/cz6rtnA0i8Vvn5OqxWsb2aXLS7DIfyvT9X0jxSDWa9QFDjPcwGoz2YJa68wr3KPICl1ryy+CS8ux+Kvcyxjj2e6De9Kl5FPROTyLqnibY9TNSAPF5eLr2ug8C9BrsvvYoNHz2ipJU8ZrIxvexO/TtPIGc6SIPMvT0XwLvzyEQ9hTU9Pekto73QAgs9o659vZpVWD3CaLu7U2FrO1OFiz2x2Z08WD9rvdSS+T36FzY9xtrtvaztFbxaAJC8HOkZPVyqwr1tatk8s3PzPOlgCbsquqI9l5aDPLjeEDyLiSA9QrHCu2ADP7wbx3I9xz3DvQu/Qj2ZBSo9qRSKPUegyLyVv4+8wM59u0tiEL0OUoO9ldFovNJhFrytaQA80m96vdlBGz1DwzA9x6iaPM0htj26RZQ5xgoXO3FCq71eZZ28/f4+vc8VRzz2rbY8to0uPWMEDTw/sfq9jjwlvslLpLxR2LI87SEqveF7Rr2IvAY9NQHOvES+T70H9Gm9BZ2hvesuCT1TYfI6TJ8JPLBUIbyPaYY9SSgHvIG4JD0ABQg+GGIaPCuHmLwOJS869+LQvEgcsb0dX4i9w2ajO2Ww7z3NwNm90F4GPcNfvDw5roQ8ADmSPRV41jvsIRi9UB93PIbm1byBLoC8ejYKPaUlB76/g8I977XkvLsyMT2KOhS8iTl6vJVkGz1xVsw8fq0HusEsr727/CC7GKvWPHKnVrxj9R49nhAEPQ3Gwz0dFa48+IkjuxjgVz0VlaU8cSoqvaYSVLzL9EG9Y0OxvNa4bT2AN789kTKoPEva1L181rg8XAsUPSTinDwfgQU9aJhbvGD2irxIpgI9wh5HvZNmtr0jjH09Q+UhvQ50gTxwK/o9fnB8u3ugPr2HfnM95mWpOhmV4Dsbuxo9KN0zPdIulb0F2qU7f2XCvc3Xx73L22M9LTwOPCi3rL18GlE8d4Vivbkx9r3vbl09zfMePKqpZ71q6I882koXPZ1ffD2pHlQ9b129PXGm0TzdIIi9zusHvdYgub1Xycw9Qs0cPTwdlz3tH5u8ljvoO74+gbtYtOc80TqkPZKtuD33n9a8usLSPe3G7bqPKUO9/ceNPVSHyL0UpBK8gHZCPALkrL3EiII7+/8NPe70jDy3fEI9neIwPEds6r1nO3A7ypsSPWvCcbyWmkK9w0gCPNxNxLwor/i9pXknvREbwbwlRh89qCPXvX6JFj4QBoQ9gc+WPRxCrDy89da7DeabPcKsYD25uaI9/RnfvHPC7T14gpy7suaYvUsl+L1yQo+7ut6MvZNctr1xify9GRsUvX2GlTzQtFQ8kXaVvOHaAL4k+O+69Ad3vBS+470TyIU9tSCmPSsprD1jLh09NlQBPf+Cij2sV729yDa/PDUdMzyixw094ZK1vN/guDyZ2qg7PLx6PIfCx7wDHi880Y+BvCM0Rr1BbIa7QC1YvIKXSLx19no9KAGTPYgZAj3vfUw9Th5oPHOXy71q1WW99L4qvWGtezy7ULo89G8XPMKw/zzSVsw63d9NvbIPnz3xIV68/tVlveL2x7zD0PO9zhECPf/TMjo3T5e93p2lPaPK4LwhCL09Rr5Gvcl4sL33Rn48vP+lPRS0ULyWGXI9/lCyvSUQ6r3pquC9vwmTvII1Gz3Nn6I9ZkYlPCTSJz6/I3K7t4gHvV2cLDzBmjw9UEhwvYpvxD3UvVo7vwl4PDfQU71kxhs9G6qWPR0ut71raVY8OZJ2vU3OUj1AeEA9aO1uPANztDwQGC49Je5Futf1Lb3YYYq9cRfqu7QzQrxcaje8YvhNPKvoajufQJ89HSTaPB01mbzu06i8/deyvZXftb3yHAo+AbotPRrbBL0ha8O8Xq+NPBQGCjzTjuQ9E/1RPavhoL0dQcO81VzKvagOHj22/IG9nr7nva9TIj2Kbjm9Wx+UvEuqfL1zJ4i9PvjOvB/VkT07y42828Y+PYa1T73KqAW+5JOevKFvID0IWwg+skpcPQHuRj0sImo9+KrHvN8gzr0Ju9i8MGuAvO6eeb0A9wQ90oBevVV4/ru2IQi99JY3PaQV2D30xca9oPYCPt+dVLygdJY9t4WsPU8unTxkyeK9JSVLPVw+dbqXgHq8rN8HPdzWGT0asgY9Y2W2vVKKJ71+Jh69k7MWvYf7hL02k+A9kAIkORWdkb2grWS8Puk5vcgun7yKAZg9NHtBPYzwVD2DKbg9MTIKPfLgkDztwOi8JQlbOw5F1Ty6nhO+DtYEveD7nzyEdPW7A6LIvKsXwT0xeeQ9H5I8vZ75+L1E0RI965QBPit8QL1KAW+9Y04PPfYXCL75DUi9K527vChAqLzR6Yi9uUjPOw754j0eRZi9VJYRPUSJTb35XXI9i5nivJ+Y4T1gGTu9eLJAO4j1uTz5SoK9DFcvPU2QkL30SdW6pmZOvXNe3juPkCw8aHZEPXIJZT0IrKM9QUHkvGIMpbxJg5u8255fvYrywj1mcum8HyAPPfjJmDyNpu+8dFc5vUuMvrxOxXy9gtt1vZoEz7qJeBK9KDmSvA3t6r03Azg8whaPvfsRdz2Vkos9o4M/PB3rlDx1z7a8voWfvUVG6T26Vma8gzOYver7PT0eI+k8GBBbvCGzqL0C4gW9T7rPO7hZrLz7OXK9pgT9PDNhXT0ASjy9znulvVYEdT0Mx4Q91JSUu+r4L72LU+c8xvQ/PFodjzxayLc8/as9vQsgFjwW/5I8f6O+vfbEYzyGPde8CDsHPOHWAr3Xt6g8bfmIPUpVOb2aJxU9Yn1/PHvI2zw7CAY7EYy/PbV30Lnv0/G9ka2jPFuDHD2DZN08G7lGPQ2loTt2Zc09Wx7gPZ/zsbyDHYi82iMXu/XGYD37xco7uvrQPQu9BD0Cpoy8IfdlvPZ+pr3Ptqg9HPB8vbtuir3Yro694e8ovX4sATzQ3jK7shwqvvwyHj06wRC9x2J6PWJrxjwCihq99XqhvV5xm7s82Yy9MUmjvH7sR71hASW+VIWLvTG+4TsnfrU9nX/fPQhvjzxsC5A9O85CvYV55b2GvzS9m/GUvPFxn71z+vI7kaYsvafPiD19fYw70dU+PFnpJD0eMGa8KtCUPElRwL37I309PDFxPZ1tez2ezZ+8iqC/vZH+JT2Qowq9LnmsvaUKQzwnp9695HsDvVJ8SL6YpTS9RsoOvinisr1+iqI9CawwvbvvLT0H0HA8OIKnvT1qED2Djf+9h7ACvepYkL17MUy9Jn1HvRhamDz+Fx69qgSLuyepMD06mjs9MZ04PQBKnD38dZm91IwavSwDPbzIMh28o0ANPeAg1zszqpQ9bF7RvGEQyT2jOU46AKFpPa9ijb0c/gw+SQTfvTAnFjtdnhq9GENiPJoMYb1OMNM5eKxzvUryBD32TCm9osKXPQxBvTzFArW9KtuiOYT6iTyeiQI8eTC0vBrarrvfRjE8sfzwvQVZAD6sruo7vm21vYk1nL2YS/C9BzwnPRY2AT68NkI9jrW9vQtUj7wv+Cw9cT2ePfYvnDy7lIw9bp3RPXIsX7xtY4w83gYmPiS1r73c03M9/WcrPSvb2jxxMou90DLCvTNPHD2ZO/m7OMaevJGozT2zzBq8CbrPPCI+iL2tMCw9mtjXvFhCh72K4mS9k1FmvKkkGL4kCyy9e4wbPZl7WL1l7Ie7bUZ3PZzIgj1Yvie9lsQSvZqbZD2Os+y9mNQ0vbu+Aj0yNkq8HxSoPAt/4b0t70U9xRYDvoj7ob3j8xU9875yPS1oGTyG5KK97KVAvVzzk70Mvju9LLKGPctRXL28Mrs7VxGAPW6H7D3S35o99+TvvLfaSr3Q1BS+CL1WO0MdpL1Ybjk9mRCdvYJkuzwvNU88Uj8WvdGDMb2Pr9k9Tb+APYZZhDyLP4O9imdUvTo/YD184pA9ToX1PLGtsD07qLU8EbFtPB6QJz1Gnq+9y4STPUa8ib0h4NS8smyRvfKCg7ySqxW9Ip95POBSDLsyzd687GC8vaNqlrz/eCE9ykHovfOxAb08xUM8HcSHvV7HK77s99u5nzV8PfJt0r0PaMA8P2C0PfBvOD3ZFl+9gPU6PFDjiz1Zrn29QXFBPUb9bz0o15s53vlYPfMTxLtvFtW8xe4JPYWLDj1IXK091ZUWvSotvzvKe9+9jdcOvhyZOzyHQ1+90CIdu4ttQLywBqq9LJY/vX6zrbuTk7w79MkIvRDtwb19rYq8ImDPvYoanD0/jDM95bONvWFIBr1nFrU7JpexPaa0Nb08CkW9xD4svZmKUz2TgIG8XtIKvVOxfzye40W9ilWqvCkMNb0kMmQ9omTOPGAFR72x4iO8KDAWO+jV+zww6a89LDEzPVN6Tb3McoY9wZZUvJFnpz29oI09UogUvKOqEDyHuhw8EdMtOob+l70ue6u8GW+fPDdQPj24s0q91tm9PO07BL1of5e9yQa8vXp81rzidb+9MNaRvWqf2jr6+MI9uQ2oPfHWjj3B2ye9+PV3PC0yET2hgys91UWkPR5azj3wDxg9kaApPVbKDbunMne9xUZzPXKjJr26zco9YhuCvSPGMr0cmn89f3ClPC2ycb2eYWY9bpofvVSqqLuMt5E9722QPbllsT00GzW9yiGdPYrFsLxa3HK99NvePOsH1r0obk29V79hvYmoUb3bsAG98WGzPbOGFb5XaMk92b+NvGg0bz0wXxu9K81UPBywgrwbdYO9xI3TOw8I1TsjJYi8lxyHPFz8sb1G21a76IiBvVqz3b32tZq9LKOXvDtSPr0YSyE9SNoAPoYcKb1tjGu98G3nvTryMb2VYLW8Dq5bPIqXwTkUD/w9Fk9cPBwRvT35NkS9h0yAOj/jvrwS+RG9sdIVPA3nfL21EbS8UMXgPAlQ6zvfoC48RaVyPbojurwqX9O99RCVvSud4Lz7gHI9+yhVOrQSDT0Z0Nq8CNEpvN3NuDxXHa89A+fjO3MkTr0ufw+9aSfQvbvBiLzQD+A8GWrTvUVxlD3t6za9keYKPXZylL1niJC99qy9PMz1Vj09CFO9PguIPWI1+LwZMwO+DkorvcMgwrwZQK49n6xJPXfbAL0p5s89E/EbvdgWTL0Cslq9WtuoPIiLrDrlALE9vPYAvJiWLj2iRDG9wNtxPf60wz3UJd+9YDWRPagHmL3JegK7k4loPcQ6nrtQHMq8DzrLO8LC+D2eolO9cTlvPW/lCj24E3K9CFLKPCJGKL3dQho9tAIbPRZhIz1CXZ49W7hQveopNL3unqA8VGOPPNsUurw8V6W9m0idvFndoL3l6dO9qkghvXFNIb6GTOy70u8qvU+FvzxJZp692eJQvIBTwbwJbxS8g6qkPAxhrD3g4tG8b+rkvcvscj3aarc8eeZbPVlQ7b2GVIs93kvFvYd56LxSMN68lBWyvOwBQL4Zqie9evb6PETsRL0+M9o85lwRvtUI6j3hHRc8vrKTvDYOODxdHfM8NwfFvBD5/T2QMLE9ENBrvRNQTr25ktE9ad3svX7JjzrOZAM+HZW7vRhudT215Rk97v0aPSaGnzzPjko9a28TPe/q1L3KaLq9wDbLPSTMrjxv0yM+igCMPAcR1Tw7T2s9vsdEvWm27Tx32Ty6A50IPfIenz2zoaO9vPEBPi5qjD2wph89Z86jOzgO9TygsCm9Q47EPGC577wLde48DtJUPesOMr1aT5k8qSYJO+rTE7xv94+8XL0BPN0fy7yFPBQ8mTEXPe2YXD1JMF+9O9b7vNV7KTq81aA8TYoHvigRKL16qpo7Ec38vGRQoD0nBpC9st+WvXEbsbtnrqA9HFO5vfPW+z3DXry7ZrqVPRAB372+rya8C0WlPXdSer3zmpg8XDByuvsCgr3V+FE9uMipPUlHkLz+DjI9GVPbPU4kmL39TPG8c5ctPXMhh7xfpMw9NgqxPZkEhT0kPl69xh40OrDQP7ynIAa70JmavHQcwzyMqHM8czkJvv3Hm71T7149EzkTvQRu6jyR6t+8V2+ZPRttarxoIoY80FelPWc62bxykhQ8jAfiPZ3djT0r7r29Qca3O0uOj73ViJM9xjqQveJtzDzsiLe81YE7PdRLbL2QqyS8mdzdvQ4Ccr2PUS89kd0VvbX8CT7FlvS9yf4tvR2Q8rmnd629oSx2PbovjD04WNu8cg9VPRLtkz0I0vA83TuBvb9wdz0I4tQ78YaCvdZZEj6RGbi9pBERPUGSxz1Scx09JVOuPU5HqDymkaC93AptvLWeIz04rm29hcWxPRWqXT2a/Kc9QRIevVijTr2fhdy8OJfzOzbECz0AB8K7N6WiPDhxqb0bbLe9rOI/Pe2Sc72AIzO89nKMPMMMvT3fVVS9narTu/e/Wz34oka9O+BePL3UAz7Hv5Y9ZUlFvagLPj2WI1+9LIcYPufylbzO+NM9SqNYve0tejwdn369ia22PNQf+L36Rye9gdkQPWaPJb1zyhU+f+IIvpuMk7xw0oo8WeyXvcEZ3D1jc7g97G6qvNy3nz19+vU9ceSuPElxNr32u9I9SsUTvXCaWL1l0UM9YnbUvMX+HT3cV609ZZqtO9oZ+DxGmJM9W2IGvn0GXTz/rlQ9WC2QvVV+Lz3E7kI8b+ouPVqH8zxdOTu9ddmvvONgPD3Ooya9lNNIvGkIlTtf4o69Wx7evRcypDybaZG9TKlIPcMOlTzLxds97TE5vQF9yzxO6T097fePvIWqRrzQr+I9PdOkPDTOcr1G3Ts98Ae0vRIRlDwc1IG9VSHYPQFimL3hMYK8E7QGvsKwgT3EOYG9pzuwvbsClj1brFy9LxiLPYUjFb4E0ck8NKsmvGitdL01IsI9QWGyPXsCbr2BV5c9BRRYPbj+KD2rktK7VtitPYcd372sdYu8FDnuO+FNuzzWKtY9JU6WvYsAtz18ZI29FEiUvNMKxT1fbTy9MIB7vUUb/Ls5+Gi924OYPHhLjDu1hge9M5OJPT1BvD34aZ09rRuwvdAgwr3L0bs9yfvDPKIfOLyOP7o8/5uCPbsRjj3nRJA9pgSOPGa7JDyVm9W8n+wJvlL9tTw1d7W9w8yPvcO3SL3h/Ai8gYKCvZmjYLzT2ji9/bWFvAf2bD2tgj69GluPPdDwIj717uA9IzRXvXgTQj3IKLs9PoaBva+MND0diVM84ampvKLGRr0Fg2q7gcGFu8oZ27yQzm493aWAPUyn772mKNU98QqfPdktmDwLMee9DPciPa63tD3tujG9W56OPZLyWzzEpSw7PpaevK8LlTzZp709s2MhPQnYZz2EhPa8iDkRPbAJDT18nA89qtTKvV/BYTooh3Y9DQPTvZj6lj1SScG785hQPAyqkj29qR27AwdevNrZ5DuESZi9+Ddhu6K/fLt4EKE9FyU2vJ2467yeNN29HhAsvDA10z2xpBE9RiLrvJqFIr0URmI9OzbCPYE9CL3JAwY9vBItvG3l8zy7WOG9D8xdvfOhwDyo4Bq920wwPdjRwb2Nndc9B3Y9uxDjMD2ciLs8gZERvd6iIb0+7SU98XTRvHHlDD1myZm9wPupPH95AjzpVtE9IgalvfnsBzwyj049H30Avlj5Hzx6LTw9chnoPByG0zycgY490/aLvHyseLuQsLE9wlL4u7EUBj63V6K8hFgWPTHe7jwpHHK8hmKTvQZRoj067yA9woyDvYp4uTskz4q8PHMXPfE6I7zxUxg9MHuIPY9lhjyMIQU8rG6IvKHlOj2zuES8YS+fPcJhU73Biy09A+IuvY08nTuXzRy80X2Iva1M/Dtg02w91r53vSJ+Nr3HHTw96K2cvLygtjv/dNo7JtE+PEj6vz0v/os7JQzVPQzEmb29yQG+fpWOvY7TujxPD5i9SDEJvJ9KVb7BbYI9vWgAPQTlw722Cnq9ZLADPbIHn73CKhs7MgoovsfIMzwzFsC9bGrQPV3pijw45K694Tu4PCVbnDx/z+Y4tuwaPbd0X71Sn549763gPThJtLzUmFu97ASYuxGIIj1YxI09UasDPra7MLyIFDu9IVAEvQpnI70zgcg9lPkevVR64b3pFqK9GUvpvUdedr3zFt0773UDvkoqVT2oMAK9kxodPEVtg71gLE29V3WBvbu6ET0exzS9cG/QPD8YxL0P5R++eGP0vQkPnbw+4oE927iOPfFU2DyoOUw8hS5YvEuHq71qHa+99g4GvcW0tL2nyIM95ewLvHPSdj0d/Ti98ZoYPb28pj2uVSa9+Sd1PGdFAb526B496F2kPLSbvT0NcOM7wM4yPV0NJ7wzY0k64lNBvWlxGT1Aare8EY9dPXuUCz3Ej7Q9NCCmPEXzb71jSqa98HNIvcBv/jzW8XM80OXdvDzxIj1klsg8aCH5vaNP67y/RIA9502bPaoagb07orA83A7QvPCYaTyH1069pFQuu9JqgD1UaI09B1PXvdUbND3r9Ow7gildvVklBb2GjXq92xjgPG03Cr7EgXM9JL8cPGMhJr3UTy89g8YZPXQ/GL2Y0QQ9E7Enu+KGazzIHmI8WNVYva4WgD0YLDs9B+B7PQqWgbsZ6vA8XbhQO08u5L2Ka4u9MQ54vKGDKr1tToc9Ki6lvMvzlTww+DU9yLeHPVBcfr0mdtY8Iaq9PBA2s71sAgK9+KAtvaM9arsfvFo9HWGovKn7GjznliQ961E0vaJ0UD3w6Ji96RCQvLT4uTzn280785MOPrr8ar3zMUe9iYhxveCu9joatw89SsyQvefdSj0nTqO90C6BvIC40bz9DqW994GMvF1COL096C09nVkKPaS2Bj2fjEu92nmavJEg2byrl5W7XaUXvDafTLyorIu3F4S2O58jtj2/X/E8rQ7OvEwBkz0amQo8AxPgPVLqjT1PMk49X7k8PsplkL0Rw4W9tXcGvBZmfbwgwF899wgKvdbOEr337/E8C6ubPSFpn715PkC9fri0vcuJs7wA4IY9+BDRO/WgMD0qogg9onDUu8xHfTuLfqC86Baju59jYj2y31Q3o0v7uItUFLsm+fm809URvHwAIj1vaTC9S+4oO1Ir2zzSnCw9nPzAPBoerTw2PTW9NwFIvTvyJb2awTW9m74nPWX3HrzoXLI9elGaOyvkyLn8nS08suYXvar1jbwLHn294MMoPalsPLv4s6M8QSuJvdfYB72IlTk9SrpFPd8W571uqTe9y/QOveGUljy5CtG85RQ1vUsfr71u8D+8b1yfu9lLKr1OU5o9xq1OPk3ABT3Mxie8cGMPPUEDubp83ea8YwQKPZlkn73ermY8FkYAPDyK/TsGYjY9MtT8PeAbhjwCX5G9EXzkO72xjz1pJrO9UehrPZdihj2T3sO849oGvg4TGz0e34Q9K/EKvAz6zTzGRqe72UUFPBF+Qzxn8++8rahePYYTZL0USYu9+zc7vCPmETxlhDs9to+4PPYHnz37xBG96kNfvXUtir3t9EI6wGIRPTVqALw5AKS7NUi7u8/wK700NSQ8YcthOxzgtL3Py8C7QiECPdCtyj1qA0G9YUQZvYnf+DwQ2+G9EX+nvCGlrD28P428gTqgPekTQb3s9i47/a2cvEuHYb0vuAo5QnnPvYviKT3qp8K9rnyqvcsf+Ltb+CO9svuJO7Qo7Dw8ukq9gqg+ParRJ71VBTG9tuJ6uyJgcj070i49Oh1KvNvOAD62ici9WEeCPTy32jym7JG7Xea8PGoNMj2r5YQ7GDjIvX2kyzwDit+9B6Cuvc6gPbxqVUw9fU5ePXcEu71d/5A8bZbivKOQI70/6LK9lr7Ru+5zr7xe6XO8z1nQPWd0Ej0nfIs9fsWjvGslWrwQRck9Lp8yPX/tvz1waVO961vPvNOf3rwZjga9LMgNPdTJID21iAk95MizO3fJyz2vBZY8m9+TvbSfnTws8zw9q6Fyu7VMQL7q1bM8CZOVPDDXD72ZNKe9gVdZPc1I5DykpL08FJD3PDxmP70wKFC8TWe0vJRYoj2ZXp89WkiwvGQdXr1u19e9Y660u55BWj16Bg88U3ZcPXpCLz2tdB49DK2APPpu8rwlEEo9n2zOvUr/zzuKzuY9ZQqDPOw4tD14cJW9Ct2VvVuBzrniE389GZTvPTTexr2OiWa8oOtcvonNIr1jdWc9r1uPvVJLkT0TC429lfQhPQL2dr2lQgC9RiiHvGNP+7o51qG9JVvYPQR3uLxqnhS+qgFtvRK7lzynQAA+TOdqPVhrAz7/W3k9uS4+PXrmc70C1Ju9lcz7vQ6c9jxiXKe8b0PbPNEJAz0vZBS8EX3dPSN6+D3NohS9AJgdPlY0lb2lznQ98p8wPitrobxA8zc9jqwRu6wLkDyH8Ym9XxVYPJ05o70cx409G/QGPuezBTzWV3U8X3VtPQTlDr7WZZ08fH0VvlMdAT0J0Hk9Jf3VvG60nb2SJqW9CC9svQcUJD0bj/a78ZURPbvNE7sDK+w7mWxtPROKojxnOI08RDkMPNyZKT7/Jps8gwv8vHKqI7t6Gx88DQK3vNFurr3cf+W85hsIPcyRirxluls9KCShvBc85DzISue9EKgEPU7ytrsP+Z29aD5gvRrv4Dp2pL09veT4vFOXsD3x1QM+3VRpPWj3jTyrVqw8nnraPFTbPLxpCoq8QIJ0vSJAOz2mIbC9cP6bPBqlojwx9ha9uv9AveJUPr17Hee7sVPtPbHjWD2pSQq8GRJmPOBair3klQm9NjOpPTQg5zvx3jo9x8DHPTT+Ij1DoFG91jqcPXLRuL0h40q9pgdQvV2sHz15k549aByoPMI5Sj4vO069CHUpPkSPEz3TDQi937g0PKNKlzwHDi6++hjovEvkF7091Mu9aPovPeMK/Lzo+jy9trwfvEFXOT1bOLc9PTFGPfI8rr0IWpk84txWvcWnC74PLzk80wc1PdftHz5Sx529cUmlPeJD0r01/449o5JJu3vp/TxpWVK9rUAIvO7bqrx5zGS8EDYovArgS71/IlC92PKOPYdfJ73Q0v09LIfTPYrMD7wWdFU96seDPAB5U71zxu88oqUHPp4b9ru3wlk9mx3OvWZ5EL0bVN27YXRnPR4MNz0XMCE++PuAvHPO+r2Wh5K91pkUPcFI9TzWsFy8JC2PvA9FgD08Jc89j7HLPK1wqL0HV8o98cW2PEv5kz3FCDE9uzdIO24zez3YOpe9qHmvPZVm4jthE7M85LbBO/UhaL3xTNg8f7yEvUb1EDmaF7C7xgZdvHO/ur3Ew4W9+2LkvPpVAzx0g1e8jLslPDbygL0Cmh+9bzdNvZnELbw3b2S9g+YRvGHmyLzJ2uq9bgKyvbP7Ub0ju1c9GnTvO1RqHzz3Fx69ck3TvbVW+73d/9i9hkmKvGRi0DwQ4+s7UiAePYptXDyDm0q9MaSOvemrbLw8TQ290G0IPALXbb2jqdo93mYJvNLiDj0QMVC8dj0OvdfaPT3swz28viSKPTzSuj32WQc9scVkPapOsL2wzYy9slBDvAhfz7w0buo8EMfZPLiB/D31IfM91w58vM4ZiLxSSwc9TfWzPRGwhb1Qlzs9kafNPWbHIL5ltOI9V2iUPQU+Ej3CFHI9sifQPFPNWz0bJJG94Sv1u9JLtrx0D6q8o8mhvPk2N70l/VC937azPcNtOD3IXwk78k6jvRVf4T3n6cm9nI1HvX/AX7wvWau9DzX1vbgSazsNoou9nDIKPoKOvT3f1Qs9f9tPvFYXFrxc07e9wjyKO1xsjT1rc8m93b7fPBnwNb2VCXi9ub+FPRQpwrxtTRk93+p5PaUKy72unXW8s2kKvsLalj20mhC96zKwPXfpybsSHWa8YdcOPctD9r1EJau7yO4HvcHjb72ulag87/T5O3mIgj08OTe9Cz42PGjbRL1CP9E9iGP7O5W0Ob0Va4Q8iAT9vfsgcj2C4Pu9k1aIPXlOGb6FIec9ruAIPgmGhT2EnaS9QWIjPNqxKL0MjXa9kYnLPeCYfr3b8yY9uKFTPF6yJD3vs/q9IpdmvSAKKT2a0ZI8Md9EvJhKGz2Ox1s9yhx0vcuoRz2pXVq8idUlvStjozyupw2+Snktvaq5rbyKE5K9e9KVuXk7hbxV0t08VSb9PLGsCr2gT/i7FMdYPendjLxLOTu8pyJ+vaqb3D0aHq+8ab6JvY3HMr30ImY90j2sPSgA2b1V4EU9JbDBuxkUKj0U0Iy8hIw/PN0FhT0BmKI9fqTAvDSDc7ylwLk95zmevZByirzpvY07eUB0ug6eqjzCfqC9/y8NPCyfJ7yRgac9qtkFPGgYqjzUTvg6xQtdOhqNKTogxlc9hdu+u3dN0z3aezW7+hQrvVTP6L3EQm69cY/5vNrDGb2Ot7a9Eqw7PAZMrTlxzqG9VHf3vQqzfj1TQxc9pclpPeopUL2AAGC93PSqPDMcBT0wd8S9VvT2PAsufr2mBYY9huhEPaHN3rwPwZe9loBQPdD71zwyJU486hiUPH4J+TybyD49ZAY5PTWBHTwW0Cg84YNMPJYymb0EDKI7EB6vu27xYjyz8ZE8dJeovPkHhDxPUT499ICDvX32BLy5Nwo9mYu0vUQwybx9YoQ9nvt1ObvcyjuSkzm93ZwBPiEH1TwNrdc9+MXHvUFyi72Yotq8vRdTvLGdnr0YNb285EhVvUGVTL1MB/s7X4QlvKXbJb2pI3y96FnNPDLBCL1LOjK7Il8GvQkOgD2pOme9Q+mlO9kDpj29EYM9lWkavMdTeL1M/dS8/6qOPQFMOD3SL0M9fsT4u4cdBL3lslY99hSOvZMlWL1cdQC9kPtKvTZ5kj0+Wxg8ZYwNvjRapzxOGl8925ChPHf0GL1Ocxe8B52OPILgUT2wehA9oy0RPtjbcr0d2J29DZp/vAE1pr3j4hw93ecSvWH8ZL0+aTi8te5CvWHlLL0aBO09N7rhPI4nkj3pZ4A9urG0vVRTkL1e78C9WdzTO9qLU7tDfIM9IS0MvvN1/jyseXc9iE1TvCxaFT0W5FM8xb76vPJME7yAPDK9cZgivRKhHT1MwzY+wefkO7TN6bydN+u50ROwPSMlgr23zMA9dM5RPbmBSrr7XZO8sKSFvb09Cb3iQ/y9GtmfvUpdxzvIQoA9ZvtPPQduyD2Z8yA8NDGmPTLLD71k8Tw9ru7OvQzM5b3x3OU9B4mlPAUXC72t7im9sF0vvNEQ1L3pFOM8VPisPXIN7r043Ay9dp02vhnn3Dx3xCu8ESHpvUWArT1odte8Oh6MO6VS4zwGeA68DI05vCuaJT1JRhG+MorpPV/fE72IdQC+knOPvW3NkDzP3wo+P1zaPT5boz1dKjA9liCgPK8Ttr0gWFe9Anj5vYRZqLuxyyM7XgHJOxLSMD2v7uu8OpGIPRozAT4J2c88JT8hPhCr473xE+e82QzVPduuvbo1Tvo8MTE0vrjHkruP7ou8cQfqPMiI1b01mSI98NjGvEL8z73LNFA81iwoPa9xbL2LJO697/0au3Vo6TwW6MG88RatveJmJD5VXWY9klkOPiiaSb2/Tzc8c/05vI53izzmP0g9bFaKvejZZj3qlHo9TQOSva/Nvjse/gE8jkJAvRpknj3UVHe8pk3TvYwksjzI26E8eflou1vMQryy56w8wilcveQhHT3oXGg9/8WsPQOqRzzwjsk9aR/KPWofSrrCKuE9SHQ9vfBZ3DyhU0o9UV0rPIof/DzTOZE8uZcKvrhD3b3Kc1e9yR8VPU0FTr2LTxQ8S0A/PTlMqT0TV3+8DJknPacZrbzwwKq8SR66vXc9Rr3e+Uk9bjEnvQI4Bj2uf+m9hMJaPfkZCjxO1C+9rSXqPbIjWz11hbe8bzWbPYZsvjvuOQo8Spcovao/Gr3i/CU93a+eutXkL7yAqaS7rKW9PQ1DKb6+qSk99ZsyvT/Dy7wRUfu9aeWovFzAiLwDxyU8uQ8LvaxUsD2Rqn26RmurPMtUa72qDJ69o7yCvPSNkj1PbmO9+yEJvWUK9r1dPyU9J736PEoQUrxIw0O9WRWLPUEeqjs+ndE8X48yPVLy07w6HRe9iFcCvHx/aDyftB69wJGfvPEkrDz81ey89LmpvGhBDr2pnTg8ib7mvEoN6z3pSMq90BO/vRUasrzRzu+8ZpUNvY0S4byLZs09tn+tvTeTrTyGck09lsrWPfIIEz1pTMM93tDSPP3Kx73SpdY8vRPavEZpaLwyTBg9GOIIvuG1jb2guSk9G9GuPSbZb71RFTe9vwKfvQ4Q2r0MTgW9JaBCPfjaCD25Cua81t34PIOPLj2WdIm9IrNbvQ0N57zOzHs9hxUevT9vHTxieEU9VwJXvD4QIz2odAY9qqhmPT64zz1aF0Q8PuqsO1gwp70gTwe9hmiTPQlWFb3PAau9HaGVPYZBqj318WW9ntViPQFqxz1qXh09veqiPEJthb2XUQy9yZi9ve1jAT5vQLq8VYR5Pfn2rb0hSKK8jH++vBBFmzyEEq+9LMoTOtw8kTlbE0M9rWTZPWsJJ7zSH5q7SPARPXEGoL2zGpS99SuIPNbw8T28Dy8969YhPubOHD3Z/7S82o9avbClyzvPYMQ9UsKSPSP9qTx+mP87Uf8HPTSJ2zwBT0s9/3o3vFj1lT3mJBQ96ghxvRa8mrxP2DM9CASUPGh+hT3k/jm9/3OzPedhxbzJMjI9RTLuvCe6+LuXspg9IjfWOx/kyblQNAK9XWU5PAYnPr1Mblo9uPMePZtC9L2VTn+9ld6kvelEwL0ZdM68nkWTPGexgDt8/ji98CcivGMfgD31eeq704MZveHgBb2jSry9lEeJPTx31DzXqga8fjCkPK6kob1DCYw8Dx8FvohFnL1LejG9wY4CPPzbVDyueU09VPJZPaDFojwTrZ09NZwdvWU+szyBzg89QJGevE22ojzKlS49jxBKPS4ed708Ns88H1aXvTy2Qb1F9we+Ss1Nu4BM+LxAyRc8Nh2dPblDOL38Zba8BNMlvDzxQr0BMCu938YuvciEsz0RIAA9550WProU67x64J69AE42PTAy1Dxbywi+ZE2Ru8Uwj71DIB294LE8vVTPSTtQkDY9EhepOwFZarycZJi8jOQcPR7MqT0RMVo9HxR6ur+AFL1c4Ou8sQCEPRbX672CFY49s+YBvRTAOj3PQ7U8neIbveQbujzN5NC7D0OIvZ75sD11Ym09ePs7vbd7QL0NYcK987wSvdlDJ73vInS9a6q8valbLr3uS4S97jUTvYEdB73rJ4g9mgamvJL2Vrx4NGo77Un4vNlK8zxO7jc9JljIvLy6iD2yDCQ9odY2vmIQibzXwR+7MzjXPEI5obuZHKa9sAPgvUMwhD35seA99AFwvStTI70tiI+9ONYoPYy/o70DcUS99Q48vEstEj06B3S9jN0nPDkJqbzk3qq9mhn5PfrFrzwtgDk9QByxva89t7rj0Cc9GVoHPUx3gz02Zso9dsDyPO4h6D3Qk9O8aTGxvX2RFb6xCGA95W7uPYAMab0y9O+8PgXkPfZazT1HA5U9WQjevCgNx71hIa09Acs3vTYFBz4g9Yw53Q/ROJNrmzwF0hI+tRAjvZDqAbyAvQY+2soKvG+5nj0cW6i9MukYPtSrzj3kYEC9szzKvX4CnDsiR/O9BRTYvOKO2ryoxgI+nfrSvPFliT2azrk8j05evDs3Q77nWh0+XJqwPeAbY7yDYhu+YhqdPM8Ulz2dwIi832CYPfS3Lb7FW1k8cfhpvR4CnjyLQeG9XFnkvaymcDyH+8M9LJWcPL2ljL0vups6soDJu9V81ry441I9OYr6vdz4TD4P2029x35hvUSBkz01JdC9S6upvckg7j0N4ZA7E5AqPP3Fnj09Y8G6ynMePaj9lT0Tp8Q94YIYvfa/xL3jPqe88oYAvRGwRj0GXts8e490PY8AEj29wq+8rzSKu+g0KLxGGZY8YRIGvBcEcb3OWi09EmuUuwZsLDzT84A9i/o7O6jVbbwJUp49Z6mxPZDAmLxg3SI+EADdPdq8ZjzEnrA7JIxuPEWJzrq3rlY9L/j8vN9L1z3dMr+9n6CavezYRz0LnrQ8KDxpPJuaXL29cVe9Hu/wvBtiar3Wwzw9CPoHPQTFDD4bsPq84EXMvfvbzb3Gv4+8TAesPRJQrb3Q77M7No8Uu9+S/TxSsd08rABFPRMViLudXuw90R89PGZfOT3hxSC98mGzPIuT0j0NbTK9vTn/vUfsvz1cnmi8z56BvQ+5QD22Ipc8quK6vHG+Nj0FOQa8bK3VvZBr4D0RaDM9purAPHfpIT0z2ZC9SBA+vLFj4Dw3FWu9PAcpPSf7krxHcVS96mZ/vVGrpDz8arI8cZQFvcsh2TxEblw8iXhivbzOvbwUlBi9hlY6vbfMA7xVKyq96T4LvWJAPryiKYg9frchvfJ+KD0RnOs85GICPUmtgzynlAE8/AJGvDVHF7yDSKo9DCUlvchliLxMaQC9DW0wvYuFSDxn2gc8tOUlvRe8Aj6dakW9wmR0PdR98bqElBY9UJXnO8Aj0713Nhs9uB3hvAVBNL2EH0C9RkmpvbWylD2obZi9g7GevY28uj0Yyxw87g5GPZrZr72XBxi9jSy7uwPJlDp8uwU+Z4SfPIPMp7xpcd88MeANvYufyrz0VK48OpWzvSanhLsKqaM92eInvhzVoLxBIRc9RwP4PCy7bT0XO6g93kZevYHBX71JXrg8cmxouzugU736Kbi9OYIgPbdNZj3YKwm92l2lvHNJWT1pr2A9oTmrvOBGkL3HXiy+ZPXQvf5KY7ytQ5C7FiO4PZ9umbzMTpc9FQQ+vfT09zwfgrQ9r3IdvSfpMjtRggQ9L8kzPe7pgD128bS72+ubvRyo2rx5bME9OlqDve5e0bxI7909YRmRPuq/wL2rPcO98f9jvXzGCT3OTt09tpgKvQ1WUj0BETM+Ym+nuyL6KD2scIe8YSuBPcvFBD6ZM+O8DJEivanqAT4/qX29Gx3zPE5pJD3o0q08Cb2wPT9eeb3+a1M9jFVIvSkhE7wlGlk9TJVoPQmZnzxQywi+tONHPX/zeD2sHwS+Sg8dvS19GzwJZsm90xp7u2N4K72f6FK9RXgGPlPu0j1j9am9eaEzPlbpK76baf+9DR8IPaLBnL2M2Ic9/+AUvcrYXj3j5FA89KLDPYfRtbyJZbA97QMUPrYBSjynJZI9/a0SPWYuujwkf046cfc8vXy+CL5LbkE7KOe4vWvMqr3UyIK8xSYMPqfniL0fOxa9DfqwPMXgQD0eY+C9qXJLvbHmYr34j6M8CuMmvRhhZz2gYY29lIOUvN8LIb2Qv9m76mmkPBBPiLwMhBs+FINdPaVsrDy+BhK9cY6ZvQGeDT10LbG9mmQxvXE8zr0Y9/878laEvZeFvLvdbMM92ehcPUV3cr0UiRq9i3QDPNm5nr2dXpu9A3HWPWReIb0EQMq8FDo0vcbB5b2zgba9YyCgPT3q0T0duqg8Tn6aPaVPZr0TCEY9z2VnO/Ftvj0aaUS9NxDTuzW1vDy7omi8XXg/PVYSNz6YA7A9NnkDPaT0MD0fwgc98LQgPZMrED3vMJW92iSgvF+uOL18Xbs8Du2evTMlhT3zLp48t36uPNQsWj0SAHQ9DxLTu1y9Xz0BxJ29MBYZPCBfhz2OYYE9edapvV76xb3p+AG+qxEMvbsf8zxssQ890HD+vXza5zzU0ba7+DrMO0u00L21fQm9IG/+vB4wzrxUvRk8O8bBPX/br7xRcra8i8zhvHJvzL2FAq+8yYGTvJawsrs5mVY8L51DPY9d6D0AQoe9FV6IvSnKhr3auNm9c9lkvAuWTD24x249abHDva5OD72MpK09jkAvvkLXizzx+4I9r5oBvKvmPzxXcyM9mQf0O5oRCb1BQXe9ZJ6cvKTY+Ty3yV68bwzVPfF5br3/GLG8jIJ4vfVvcj1HU3s8x1l0PNvXR71m/Ww9AE+TPf69pD06sfk8ni/6PeFpwrxZDys9VjuavPM+Rr07OOc9/0N3u36yGj4n0I27xJ8RPFigSb0NlYm81MD1vKjnCr2oyZE9QwaSOwuCrTzsFPS9NqHZu/i1cD1YKaA4nQqOPX1FBDqUuPi6IdizPPOGiz2K8qW8qhl2PWt2fLzfooI9RQ04PV6AaD1Iv869BXsBO6ingL0hRrW9g7NbPFt+O71oo3g86KmQPXGV6r3dKxq7PZ+zPF6By7xPHq27te4PvQ6tIr0/u808Wwq/Ojgepj2Vlyq7N7JgvGUKHr2itfi8TfuRu+TeoT1XAEe9XoSCPdSeHL1fcAW+2+M9PW72rb3b/Xw9D+i2PVvXYbwJlDg9Vw3PPIIibbwuDFk9TiOdunxWUT1krvc8RfDPu8XQ8LxGQKe8GRuevVUYlrwvu+297bK0vWGzXb3T9ay9FV6rvdSlGL1deQw8WxbHvXTohT2FS9e8GyYevNDkkjsBeYi9EHjEvH7v472tz8G8U4p6PIkOAr0glVE9Mw0PPdLUuD27nj09u4UMPDybuDzR1y8+V9+iOdOqvbqGboW8EU1RvXSDnj1glyO+SPkmPolPh73CjSu+NY9QvuNOPL5lSI2+Vn8cPg/FTT6Egg8+sJQXvjQcyb6OBpU9CGf5PR3HID5ZPiI+/RuoPgMheD7pujK8DEpePgw1KT7i+7w9OihZPq0dGT6VOuW9oBuWPsR8NL6S8mM+0aoNPhnLtT1o9oM7Z4yOvlKQmTycr428eJzavZ5YMTwkwgk+NoQuO4bQmL4luEi+IJTKPaHRtb7U6189aKiqPKBJfL7QLQS+xSPavUySRL1o60g+xWALPYfs6T19gvI9bsa6vl73Nr7SWKk9pO1avjSBzj2r6De+nCpJPXGG2jyKi0w+mCMKPNgkJD5rKhU+iPIfvHY+Ujz9epe8JgmJPCz3Hb4H1429Dg9bPXZk0z3sl1o83TJuveThGb1v/rE9Rkqrvfahkrrf6YC94vGbu6WmaT1uer68ZePPPfvit73VmF69AT2ZvQ9zlz2sKJM9jCcLvVoJvr17KBS+3UaHvXORxzqVRBW+7OLjPW6OhL1plZo8K2a9vHJUnzqn+ii9dKhaPd1uBL4RBso8MBNgvaObu73RBPm9x++NvSFLXz717KU9Jhwtu15XgT2k6Ew9FzbfvYXRnL3Uzd+9prXEPOSbzLzUiR89MHQNPjKb0Lu0GcM9KUsIvEZOJToNEug9O9devsU5HD2T0Fk9oju1PBA5wrsk2jU9xCuLPJl59LtCc3E9OxUiPflXh70IIvc9leJOPFwDJL1OPdS9EYLdPNO3YT0ydmI9hdabPb1gBb3fNSw94rBAvQ6cBL2r8Qq9id36PEL6RT2DLI29tP0PvXapC733mla7ZpsgPmvr5r3R6BG9MNaMPfoom7tS/HY9XOuoPfhL6Dwemui8Y4zCvEi/nz319Ac9lW9/vXwnFD6kena9n9QGvf73hz22n4+9qNPlPM+aCj1XNBe+PFYYPYV24Dzm4A47xeskPFNtr7wR1QK+WC4mPSQduTzi/jI9RfclPRedPr3VMAW9iBYOvZ9ueT27eJy9j+qcPWAoFzx4u+k9Af2/vPQBJbwncci88/uavfjHXD0bnb88tTcXvZ6Jcz25ybQ9b1favSj4iDrnUFA9ddJoPdR0oT2cG009I20buu40hjv6Mso81elcPVL+fLximQe9lCvru3IBxbxo8Jy8+RS+vU7Ubr14mgW96r8dvp0TGr3Vo8s6rESMPNqjHjwFWDE9+YMJPiguVrtspnY7So+ovUP1MbxOOkG8E0E2vTp2FbwGUH29NvtkvF8jyzwYE2a+iUcJPXR2bDxiymY84RyAParYKrxW6ru9BMGdvDRVab1sJVw7BcQBvM32KD7jjM+9BqiCvVUFqrwQGjS8kKkEu83Ziru+/qM9RdDfPW2Chj1AeNI9Gvk5PMuiGLwrhUY9OS7dvZUHcr3YDiy9SS1UPb85JD1zYwK9jnRYvMD2eD1P+a29J+AqPUMgkL3PbtO8DHfFvJclGr2tgVk9TsuoPbLpi72ACia90umGPE4ad7zB4/s8yUEzPfPx5DxdxWW7vM1xPDjt9bzIEya90KxCvGqjoD3POT69v+2JvbemzLwyUng9SbxwPLjK7T1Phrc84nGMvSLkjj1cAJq7Z4xLvaCkKT2HThY9zcBePJRBDj6NePM9m06qPbRuGL2OhAC9bH43vXYV7L3JIdu9vD7Wvb3hWr1+nxG9Or3WPeUMTz2ZZkW9xJatPArwgD1uK1q92QyJPQ+M+7wgaQC997aJO4YkG72Bn1I9f4aRve0nKb2UD3Y9GPK9PLXitD1yPru8x6+hvJ1+ML31X4a9HWgoPRIJ7TzdL3g9PFn/u/5DDj281bm84fljPQ1zCLzMW5U8tm0cO1ih0701xQM9FR9evERnKr0nqv86s4gcPal/LzyIit08nidrvNrThTzIZaU89KX1PB+v8LwwYc89UhflO3zBADxDaTg7D6crOWeZrjwUmSq8fCdSvBQXDD3WNBC9Un2rPPs9pTxV+ec9ttQ9vRGSor2uX3u9F0cIveaEyr2CuU29VgfNPCdlGz6hNq+8B1duPZmLOb3wXT09BWU8Pa7d+L0ONAC9q3yMvIWGmr3nNQw9V7JsPavPeTu9IZ07QaW5PCCcxzxDsF48UK/1PH8swbsXW9K9VPbJvJlAY716APM9fPNgvQI0Xjzx2NY8r5jzuwVmyLoVau67r11Duzf6xLtxdnc84jFmPZ5gtrzUko48kbi9PSGEz712U569abGaPNx8fb1w1He98ua0vZw6FT5Zc9+8ZamgvTP6oj0H+zY+p/BovQLbGD0zhZM8RGULPV4ZeT0wpau7xtKPPGXYrr2kPpM9/MRXPT4i+zztUS29WvVHvdCqdr0z4sM8BlHFvU477ryblJq7Y/NKu2o/BT3H5d28yY43vQFUOr2zJ5o8sFG5PH47ojxmWyG918nKPRo7Z73Sa7A82wLFvG3DtD2M1Jc7A6R1vP64+zx61ga99i5AvGo7proYXJM91d8JvUNKSr23cD89/WXdPI9/qb0XTeE7qICCvRYPLD3QcFQ7nspVvPVpHr15Zdi9I83gPZXi8ryAKZ69lOLfvPG6rzzjYsO9NCOAvVp5/LqKXBI86ahtPII2lrlOk+G8rPs2vdmtr73Wr6y9S6LhPZG6xjwwHZC81lwGPgEpKz1JWg883XZbvXTMnD0zOh68lkGmPMVzt71X3Y09z6jlvKb2Fz2e+Qw6U226PT4D3TzAaxY9qMmQPQAJBj2rR0s7IbvUvACi1Tx5Pyw8VqeYvOAZEz4YBbS9EOuXPb+hg732VyE9fEEfPcwMxzy80Lw8wViZvV8szr3HADw9JRWIPLB3pDzg26u9WI2lvTTGjL25Q4k9dBPbO8VSmL23Pc29oVA6vE9Hgr3cR8c9ztIdvuq1DD4UOFy9PxC6vNYSZL3AGb69zte7vL9xGLzElIm88wu0PeJSmrwKagO8XWI8vZV90zzBTeA9TiH1PQyMzD238tE9o7+YPYXfFb3fDjc8xO5LO1DYGTxHCZE9YKnlPDSuLz0DTA29glggPc3rwT0wprC8moePPOGxy72uD6U9MPOTu5jL1rp3a1U9RM/BvTJcF7ttXy899R2Lvaueib3DGDO7E4L0PZDxqr2fWzY86o4TPfNSz71wbIY9hu42vaTEhDwK1IA91dVtvTbhojwRhz69EI2APdEut7wQY4c9BoZ/vFvYxzw7MqO9oxiyvYI9Lz1X1Sg9diD8vdv4c70CQj49nXSpPL96s73+5zO9o8udvdjJFz4qWei7PAFhPIhNUL3JKgG+noPHvA9iEb3Qmuo9xIvMPFJLtjyvTAC73H1svT2lQ7oKx6i7gVYqPVs31r1MXCC89FaIvfSWrj3yZxK70PIqvUgQXL1u1Kq9se7uvP8vk7wNj0y9yjzCPIRUXD3LLSG9hf5iPH/PhL0zFc09aC2PPUgnmbz8QsG8R6/NPG3ls7xIScy8oIPIvW8eUb07w+y81fdJPs63hT34u7W94dVRueewr72FtZW8Wdw2OzrmWb3bO1y9n3exPNGKsT07TZC9n67LPF0JAzsKwQM8weMOvd+WGj2kZ3Q9DIHSvAK1tL1+yTQ9IHQcPNyjnL32aUk9yuUWPj4d/D1QJ5W93xFCPYSdfbzhknq99UGIPQ0fqDx7T7K9Mm/EvcEt1j0cbuG98NWEPdPwa71GGnW98dkavbJ9hDukLhE9pXjBOUhSKL2tGY485+fuuunpdr0IlbQ7dQTGPPHHATwVuNk8YLeVPJKptD2dGpE9jF+5vFMoqryTZAq9Zm1IvRRLDD0qcF09kq+FPYunUr1H38a8szd8vVznYj2F1Ru8XkUDvOlxqL2nv/u7WAMcPfwoTL3DENG8Pf2uvWdW3L1TvaA7TH0LPoxcF72TfLe8DcxHvJpFsboEDo88SyHyvDkcnzvVpQ69klVnvIaVv7r8EFg8RoyMvWIplrydvh470vgRvW3BQL3DIBE8aJRKPVYlD70+OVG9l7W1vSuzHL1XiyY9Ex6avDlEkz1vvGw8/ZgqPTBYmT2YUrM8EeT8O2YzJj0VRO29MiUGPD3biTwYuAQ9uPGQvJxP4b2G8k69XEUOPTFak7zwfua8ADR0vSA7ej1rXNG8i8i3vcvFhLtixsk8WyyuPLXqhTxDs2a9qNpxPGPWn72vycU8H2AEveU09D0lHRA8b31XvQwyhL2fAAK9Jy+mvGKR3zwRwS49T+7nvKCFmjsnjYM9IMCqvFOeqTtw4FW9psH3OxGz/zzc26w9AgqAvV/Uxbxh5zA9ti2Zu7ZmVbvVfxM93wS6POORlTzH+gO956gnPX/R2rxCKGK8XVszvQjSuT2UYys8QW2DvJgTFrxXRXc8PG2UvTgSTz2s/1g8pksIPQEIpLwoCay95NpGPfZJjb1sZje9nYAyvfIKqz3vBvY8veDPPZfgtz0YpNU9rtc6vCDmILvYYS++bUuQPS6/ZLwpmsC8aOcrvTIU7D3+AKs9Mn0NvrQ3DD333lu9PBE1vn/uCjutMhU8ItgFPpT90bw1NBU+LcrjPUSCwD3SUKS9bvYUvDf4+LyQ6K49F3YfPZkPLL6mTQu9rXJIuwY5Wb2kZIs8GWG2vQLZ0L3JOJU9htSePMK/6rw3OM+84hoKPsobWr2V/4S9NhzXvZ4BRT1Yt7y7rJHOPTESg7w9maY9SpgsPWw7lz3KPI862g6ZvFggwj3Mzag9XCoNPltZWz0ybn88tDMGvqQlCDyfEh29SDsPva/maj0sY4m6ycfjPQueNz35nXc91nnQPbtRCrzcaYu9PYtgPU4/ez3La609UH0XPnnOED1GyAS+aKSfPQ0rAj0mgQW+WxOHvYKPqb0ZOtc8TkjGPdNBmTwvFdk8Ts4GPSU5VzxP6QM+ydmCvXGNvjyg5zU9idzfvIzFET3WxO29DEanvDXwE71Pdi88KAwQvXYlpb3DjJe8+oAAPLdwGD1gAfU95PSOPCb9Fz01wwe+TxiFPI3wizsJaKA8LLmKvVoQcDuIXZC9hSyDPY/FPb7uwc49LQMVPDAYy7yCM549N8rYO+N40Dx+5cK9MbZeuq4deT13pl28x+6fPUCKAbzyZI69VzwcvTjxKLuvcqs8YNnzPctqMz0aJSc96pP4vB5nCrzI/tw9UVe2vXlFNr19aEK9wI3HPeOiXj1Ch7Y83M8RPbwpaL3Z0ZO9W7B7PXaugb3ONQM+JQlgPb/d7L14PhM+PQUkPPRGj71fUNy7CkqNPYFRhz24AOW9Pt4kvCOtzb3lLiQ72KFdvJt/pb0yR+M89eTMvJiGUDsFgWg9c0tsPbPfyrsI3vK7rbckPXKm6bs9lTM9hVX+vMIDCr2FluA6ergyPfsFEj2HxcK7VjgPPeoinT30JHw8cFCBPFRNmjtIFYk9sJmavfByy7y4lce94C+ivanYCzymVoG9Iiv5PJ7KRjzE2lA9+94IvQi1FL1ekC48u8a+PP3bor3i2x69lAW6PEcGhz2aAwe9uA2TO3IGNb3G/TW8izOzvfxH+L2UqNK8nuIGPthSAj30JRg8CGSYvfbt27v1Bdy7vS3BvBlB27wicQy9Sy2hvO/4+rxN8Ds4R+PIPcSLkL3h9oy9GaHuvInyO722I3A9+bREPJrfxb1Uu8m8y2qMPZipWDz1GW08TaSkPFndurx6R6c9yL0CvlVnc70MObm9/KoJvaZ+Qb0Qw2M97boHvj/+0j0gLuk8UTsePAsHdr2NWgc97CnkOskcwDyw4BC9LhzVvJ9mbDxHjNA9T2oOvkYCFD14Qs87EaeqPXQZFz1sIU4+kea+vOH4rzxQHxi9DX7fu2bi0rzJ0qw8EWM6PW3wm71lgjU7wvNYvc60kL2Z2h+9rPIHvnh1pT0ZCRE9D+IXPfBt6D0Ssgy9y6EHPBV74rwizbO9KsuBvC2vob1EjSu8mHoNvMnEi73XU/E8kh6DvRAf6D0drFk95CaDPUYK1rwr9vk7d3SaPdPdrL0HJlM8qsZfvGqFqj1c44K98D7CvWi1fLyBlSi9MtkzPZsJ9TyKHwG9miSNPffjE761jWM94VSkvTLgnD1/bra65tchPR8XgL1Jv7a9zCxAvS2gUz3v8r69ZPmRver+Zr0ixe69iIbMPcddED7gGSW9/TogPU1Pk70L9AK+dfIsPVk9l71c9648WBb2Oj2757uufEq9gawGPeRjez08G8I8oEoWPcRpErw3TEc9lrWzPNTTOTyjb5O9GfxzPBlpoj0imU44aGZoPdqUfD2p5R09IPZZvJ6+4r0ShOs8ieogPbMNhr2bDtS75hbCvOl2kj1u3GA8LXnavFFmxz0MmaY9KAQmvF6zXz2eHJI9lF8DPXmu/TvoRfW8f1gbPu/rdjuMkb49iyLgvczSubxQHgw9Cgf2vEJAkz2A30e8E8uFvUYqMr0uPi49JVMBvQ8uf7zpLB69LX9gvfXxFL2ZXJu9XDZhvSRE6bwXz6A87ZzevJ1kBz26AVe9YkScvVYnSj0i/Po8RqynPehxljyZGBK9/6MaPaoDHr3GXSK9NX3Ivbbwez1XnnM9RVq7PRA1hDzQALw8cbLIvI0MCb1Jq7i5ixoova14pz1ZqO48Y+EJPbzUbL06RCS9BzL6POzBAbzDjaU97O3bvPLFoD3dFSw9nHWrOxevXT2LKSk9mJcxvfqQNr0Gy3g94P4JPVuG1bt3NDO92zYFvTGPAb16l+68mngeu/hgfbx8gAU9g9qDO4Bgij2NUIA9pezPu85vv7zVKJ+9SKM5Pe2C0r2FTHa9tKtJPdd8hr3XerC9jbE1vSTN9juILa48LIULvCbRG7x/ouw94e8JvXDmLr3wpak9Il2wvR4cGzyhLxY8D3cYve+HPr35QKc81+W6uzwXxTwx4Mo9uvFNPb+3UD1L2Na8XzyQvPxhq72hYXs9yG8GPvy/c7qvBkY9ryGkPUK/gTyWEaC8ZSOhvWydDj1+QQ49EjO9vNJLQzwZdjy9LWUpPZNnHT0nzW29sZ+gPSQoejx7bI48tdw2Pd8ikj1YCtO7Br8UuyI2+LxTooY9yf3FO1ot6T0wDi48jqgHvR0ZXr2FIp87DYQBPCdwBbwIl348UErfvS0Hnz38fY+9giIivWPyqDup/qI7bt90vTqa+rxcKrG7yMkAvJpdtjy1UGk8v6SVPE0UlTyufsy9idtfvVEgFjxcup69lURUvR69lrwpng++brVKvcb1DT0ErTa9HWqGPfjwRz2F7aU9cTctPa3Hjz1tDes8S87Yveh1rr0UNDW99toevgOfnT1DECe8aaEevPBiyTzcUfE9snCMPbJ22j3DDMW8zQOMvVxQSD2Qpga+nJLkPWYFCD3keWg8cR00PZ88uzvexxI950EpO0dpHD3fdA+9KiUQPWY5iD2u85I9Fz1WvQ8YiL3RY7i9ExEPOx3EK77gG7c9OQX8PAvAoD0bQbK8WUtZvFDqBb2yP6i7MvsEvkdVrj1h5xS+n27evXOyij0RXUw+wRqTPQaWoTwohzq9yBHUPJ2m372gDtE9ddohvWsIPz1unZM8HTiGvU3mvTzsy/U9nelDvWNNrrxQm1Y95Ffbvc1Ddz3mPH66kMpZPf7+qzzpxng6PGnmPIN2BrsdA8o7kOQmPDeMoT1K9dc9Mt8cPejXyDzFoTu9e+ZCvXRWJ7yDtkS86NBIPO+Nir1j/h28U6SkvaZZAD3Dc6g8HTOKPJTOjjurdl49CrDPPXXYJrxVgxq9pLtxPXP85LsJ/XG9mS0GPbptwj32i6+9PWaXvAQ+P7yGQR++iz8OvuFzED27QSe9yzKYPSMjoj0aXSG8qRRfPOcZqj0fOa29yOF4vG+G/zuCubq8RZvWve2pDL6nanE8D1eSPE/4Br3snU897hrEPEskajyowmS8YdfmPGUsKbxBPoy8jzsJvXHSxT1lPmq9Ox/SOz8g6jx4OuM8dDTTPCGmzrzFveQ9vOKCOZm6TL1HB1a9TQJdPdL6SjxImzM9B69Xvd7Em70AlQa9tywFvTzyNT3ZNds8VGaxPOoMgD19zZW9fkoLvtIlbDyVaBA+sShSvCvtUD2bceC8P/M6PKBiRL2P4Ug9S6dOPBAcUT1LO8g9ISi0vel3n7y11QW7hxmEvEaxtL0gynA9TLTkPFIoRrxdqUe9mlGevBWvaD2Y1wW+PDrjvQfvQT1IJ7O9pnFdvdtQB73xato8eu86vlhHG75ZFyi9WIKSvZ29Cr7EqNS8xBtKPTMohD2e8YE9YavuPfupgj1QifO8QTEGvhYVNT4v3mK8JSudPG6i3T0Pa9a8X//PvbwEgj1ICdc9m2ecvCMxSD48Tak9OZOgPZ1HBD0qGbE8BbJzPc542D2+jKE9Y1SLvTotBL1pB9M9OtYEvRkU+726GzA8WL4ouk61RL4kvAi+d33WvDpS6r2O+mw9nui8vZIOvb3BDTE93BAwPEzbP724ztS9Dw0UvrIiDD7mvGk9I/UnPFw/JD1NpQ0+7nAmPQ1Kk708UsE8ZnAWvbQ9KL2cjFK9iOGZvbXA2D0/xYa9EfguPg16Fr2HvSI8jtD/vI5igrum5Ie9NPSRvcohhz1/Tyc9Vf2VPQSxW7s7PJg85R00vXMW4TzJniO9EU0OvTzlqrsCvgu9oWBlPSSsdL0lW8e9NZVlvRBVQjni04G8S2JXvBpVlbvyWhC8F4b7vVajDT7MxJs8CzKLu4qzfT1RDME88o1svcA9LLucVKy7IKVBOy28W705c+O8ioxePE1Uob3DpvQ8gwEovaYXFj2RTig9lQKKOxxxVTwxWOe8ZWuEPdKU/zyWv/a7n2uzvIpQwDwNgZE8gSzPvYrfFzxVmaK8QHGWPSWvabxMe4i9AEVAvcaZtDznVhU9m9OuO3mAXL2u0XA8kKwlO4qRGL2W9tg8TBfRvAo2Y700HfW80wEEvtU7Bz3olG69r7s4vSzm3r256HS9aPy/PfOqID3eolS9Q74OPQ7VGT1CuV881gaDvcceH70DGvq8LiAwPPhFLj1xYV69pfBYPfvI4zxYZcK9V/HcPI2e+DuU1aW9g4dhPW6PpDwe4rC8JBYgPX3cCLzDL0+9qXqVvNSDh71usx+9W5FDvR2PUj2NoCS9cCBiPQXaxD0WPNW79xjyvU5P4T21Exw7BMHEPWyqvLyUtD0946kWPZmiXj2DkeC8SxouvZYoxLxeSSI9NizyvNMXyzzffAI9se2mPX7w1zzkOZy8z8u4OyGpPD1Qf1i9inyuvBNpuL1ZLT89z17FPOK4qbzLguY8oGpBvLOCET0GdUM9fci8PZJj0jxp/PM8UtMoPHT7mLxbYJ+9z8nrvCBpfb3a70i7XxpgvPB/Dz7I69S8VHcYPdzfPzwOxWi92SKAPRPVCr2hbKw97+vNvVAfLjxSifQ7T/4VO1ZFPLxbYcI8kIpEudeo1zxbXwk93XW+PN0/Ej3jWR49eMEzPT+FvrsCuR6782qVPDwp+Tz1yFC9MviDveFvUr1PPrM8ikV+O6YJY71Iy2o9FFE3vM3jx718RCi8bBFIvZzQuj10Dx49vZWSPeDggDwO+4I86IXBPRAR1r11KAK+E1O8PcULvD1Fkf29H0clPSh/mD2WvtC7slXGu3I1YD2xmZg8r1z8Ok8tGb2EYeE9DNLqPQlFoL2Zqnm9nBVRvCVJB71IIKm9loJFvl1Q8z1M9Yk9MnjSvXj+hj2EZb29bJj8vXBgn7uaKMO9SPRcvWHDUD1kbEG9K+xhvr8rTj3ikH270MAjvbkXh73ddJe94rolvnTU1b1IFfq8S3DuvWrsiT1kC+e7oXGUvdVb7zwBLy29Io8YPpscFz1OonW8OVtiPR9O7L3VZLS8ef1pve/bsj1Wh4+8HTzUPFzSDz5pQnC90/SJPJwjuzkE+8Q9SC+ZPQl6ET3bWre9BSk5u/RN9TxgD9q9CbSpvYk2Drz4/CC9xBsLvgHJ9jtr5xC9OyERPXaVvzuk+Hm9QunYu7BaZz3w/w6++DhYPfeXIr1eaQ8+ymEcvXWmhz0CJti9kRz1PQhFJLvDJIS90NFYPUzQvDwD8+87C2GOOrcwqDxleRQ9XnjwPJ7un7uWqiC86X8ePU0Tkz2sduS81mhpuzIMAr0vgSG9wnz9PPXUgj0Xf129PXG+PdRbHz0faII8VJyJPd+5NL1V7vk8M44fPHDExLy/e/C5iwYqPQMuljxr1Lo8hqnKvU+tq72Wtqq9aOYRvZ4vfD26LVA7XxftOxMy2L2eb3o9Q/hIPb7qoT1s0ji9SXU/vHCHKj0ZDZ697zFiPYmuE72A7RW7x//0vY654b0ca9i9tqIJPYpJYT14voA9qT40PWWCxzx+bSG91aKSPPbsgryWhfg9Xxt1PVReFzt6yRU93x0WPSERLD3Sy1m9eBpyPZOACztVP149U+igPbLgLD7bPhY+062MvLdBa7zubay9cE1mvbii5r3Y2gG994PLPfFGAL0LcZI9HJuePJleg72pqcG9DG2+vKyIhj3jjR29+WVnvfld2L0RCqg8m9KhvFZ5lj0h85m9n82+O3CY8DyTCZY96eTHPEoajb2wHH88zZl9vSj5pr0LXdW73K2uPR3V/rwuR9q7B0zcPdcj3r3gFJW9VfKkPBRQAT0dupU9/GQDuxBxFT0RI/e8rt5mvaqUfj0PGZK8vgX4PANTHjyGqgC+DG88Pg+0lD3XUZy9bqjZvPFP1zzmHvc9JdCJvU7/rTw5Sga+fhXBvYDNUbxmnCe9dCzUPC0zID1vhQC982dSvM7Qjj1Ream9iVThvLqL07xGu0o9bj+gPcM4gr3i8PW8mMrTvAgixz0sghi8jM+OvRBhdD24uwi9LaKIPQ+hRL2EtQk9QbM/PuIblL1GEok9RAB6vcRMubyrXD29WV+MvUYWGj1zaJk9z+ELPU6yWb0CMqe96lFivDDLEr1UKAY8pTqEvVpwqTsHgoo8kPmjvZ+L2jz/nmq8GssWvaonrjwlPNU99lQdvbhrjD28TF69HlEEPWQcSD2qsAQ9LFuEPB2/7rsczbQ9en+KPcZLn7wpapI9r70mO2+JsD3D+Ei8/3KnPV5zsTzdgYa9dp+AvUqPkD2i8wE9vXcbuxopaT0AWd+86N6ZPY62gD1Qwti8rtL/PLb3ozu8Cd095YArOeex5T1qEfi9nVBMO3kx1T2DIsm8BiDkvKtChD1G0xG+KhNPPSSviLy+4lC74ke8O4U4mD3kzsk7j9ntvco7lD3rPXS9b5nXPf7wU7z+YV68kCOfPUofbj1ktTg93y2mPcNxE76i0g49URkpPSxbB77iTOw9vI43PZ/KDjw+clQ9h71dvR1jwL3siQI9zkr+vWAoOL1KHRm9fHoIvZpJy7yxF369HPV0PbZEBL1FJ+088cbSPCNqOT3Fw6g8Ccx3vCmINT1fDsg8znQSOyY2sTw5Nz69byF5vLWTBj1VW3A9KoC4Pbqq27wc/DW9+ScQPf1cxb0jETk9fa6WPUNpzL1yVsI8dTG7u4Tl1TsYrMo8fQ7sPCESDL2cpq49VwZnOnjSo7ysYMM9tGVnPVA9TL1TPji6MjOYPdACDb7yq2484L+VuxzNuzzIX9q8FPdOvNsKqjw8NgY9Jq4JPuLGfL3zFuS9RfC1PTFeST22c1u+D8UgvAIBHj6YGyu9PS03vOpl5D3HLiC8a3TcvbJXGT2fqNY8YW5UPevGADvIoaW9xcNUPVBGVb0182y8orcOvtpuHj7jUQu8sBaYvW+k9T1hrli9arh1vUeAGLtxz7a9p26RvS6Aoz0FJDg8oY6FvcwesT2OLl+9FmulvVLBUj2MU4S99G/SvVGsm7xS8X684FxSvbjdB7xIvWQ9e1slPDbCvTzOf968BsYiPvOW+Dznc5k8vMLyPFqxyLyaENi8qu6Hu65cmj0Ap0671JElPXKtdj3e+O+8aMicO/pnlj2qB2o9yiYHPZXB7j0gifE9J4AVPXyWQr1O3Ni9z5ZhPOibyL0uY6Q9GbPKvGLcJD1Fei29idJHO/TEh7yb54s9qMmlPYoewjx6WeK8v99VPDaPorxM1VK9WyIHPOGaIz1PTw89h5u9PI9kwTvh4ca6MpHJPGl7n71R3Je9YtqGvft5XL0x9069Vmw7PSP0/Ds3gbA6stirvbzWHz0VQr4967+rvcrqxjzc3jU5hivCPBgNJ7776x45n0JaPcz++L25e149k/8TPeC8Xz1eTRS+6iH3vGEn0T2PTDq9GhpWvU+huj1GMFW8DT8MvXOrKb1UI2k6MZYmPZlOgD0zhL893nl5vY6QBL0ofmI7BoVIvRyUlrxVLTO89OKtPSG/tTwg8sG8W/MuvQVO6bzAa3A9GcuCu1uHAD4FVFU9e85JvT5Rib3hNZ49B9dLvdCVjz1UcYA9wY3wvCkJVrwNVSq9P4E8vOA7ArthQsw9G8dBPdCql7zM18E8iQGFvbhmyD2WkLi9xf2/PU6ZkTzLxyy8bdVovJPMwTwhFB68mN9xPC5bL71b4Wg9XticvXE3Jj3bRwI8uHfIvNJm+Lyg71m8qWHIPA/bSr0ORVW95ZO6O7a/0Lxz2eq6XEZkPYv/qD0kBB68+/9NvWz2db27fOo8WWfGO5e7Pb3U6aM9rh4FvtQtpjrcivc7gP4svVwlgTtdfsS9M0eCvezjFj1plTs9XDzCPMEGzL29yTK9FU+xPabpQr0pbr299raYPTkYQzYaGy49yrdaPIKXZzwdnMc9sxFTva+PyTzpfqK9PVasvV53cT1DU8+9nVkwPtuzAb7pqDC94Co0vDUreb0l5N08woD6vLK/+jxHaSy9LFJiPa0XFT1ZEa09tD03PaOQmDyWroY9kb2nPU6oBjt9wJ687GWdvShgVL3uDVe77YDAvdo0EzwxfcG8qTYxPWa0wj3IRYS9ZvRLPeHx3L1Jbl89/uugvG9ZwjsgqEs9xlVzPUm7trzK7su9im4RvSIsS70aLh49SvN5PSuWyTwi7NI9UDpOPJpSlzwPoay7d2p7PeIQnTxJIL89L+mMu1GNA712Dc27XFkOvWcWKTpEtEw9c0FwvfJqULxWtVU9D2FHvRAflr1m2Qa9EGq9vJ55VjsBI5y9aNwDPeBGRzwB4q69zdlAvDg5qr07eM49/834PHt/BLzZtY48V2WWPbHjIryDBe+95ep+PQ9u1b35nFs80prdu+2dZz2Ab1O8SyKVvF8Utby8gAO9N6NBPJwiTb3CMvO5PydWPei8Uj0VKvQ8a7JWvBNYUb2GP509JQRXvcWa7b0CLZe9yF7qvFU0BD3/OLK7IUgxPB9Ylz04mDi98BOIPEpVvDxl30Y+Rhccvfif/72iUO28h6PXPa49+bwUFLg7fWswPUfCTD2jLCO8BY8QOnV+2zzq6Vu9tMKAPTqqjD0AT5E9Vf5ou4kkJb1Bwo08xBe1O8VVo714jt69qi7BPR8C+zwBTnm8esXxPQJ5Xb2JKYK9Yp4SPfaRSTsATD+90qUePsf9+Ds5qQu+s+NYPdOkAL5/Hkw9kL6UvKd30b0PRFG99Bx+vcJWlLxRpaa9rCUwvIMXZjsp3RY8iTyrPSZHDb3ea709tmofPZd5jLycrkg9z/hqvamdlLzc5Le8xZPJPZoGkj2GH5I8PMz2PWIfuzw6LQy9aFiyu7/jHz60eYA887gVPob9n70Eeaq9CBKRPW3utTwhE3S+GZtkPSDxWj7p20C9lpusvJbQPD4qs5O9ewELvfrlI7qkYow9E86MPcBQKbxed7+94wQAPZ6SR71dvEe94nthvqgP3j2ILj084hnwvb3YKz7+dRC+LPI4uxJsHr3UITq90THSveFzrT3J3o+9puMLvgbPQj7XZhu9t08tu6/b6jvLWRO9xtcNvtUWlr0yxZs8AxaTvWXr3Lzg0149tirXvWG0JbwD4rW9hWRAPl+lRD39SnI9/Vf5PHMD3rwwZIi9bzG1vLcFxj27Rzy8zxSTPc28Aj6uORK8dn2Du3nWxbwc/4C7N3E2PUFaij2SWyu9fXg0u1oP+TygKsO9hnlUOy5AUT1JLqk9dEgEPCeqYLoDHuw87eVGvYQl/rxV4jc8/WQ6vU59dj2EN+48gDqIvVpwDz7e93Q8ewE2vXFaiL2wVgU9CjCBPby/EL2zaHE88HW4vWqlCL5uPve82kIXvSe+Jj0BoIg9eKKWPADlCb1WfM09looKva3L6bzmb7O7jRPuPLTtGD2E7Ii9ilYrvVUKgbpyWZg76/HBPF+iF70ooOQ99dr1vDfDpz3odJe8/VqTPUDRLz7FeZG9fq2SPIn9ETx6WLy8kMWKvFD0gr1THUw95TbNPd67UD2N2fq8pS9xvUiQrrc4jwS+KHRRvbzbV7xKZZE9bRb5vIn6AT1lowE++pwvPUizmb1VQqY8SQcFvj16bjwwKlQ9AlqavSuz4TwVuee9BQtZvZ4xgj09ep+9LYDWPaM76TsCmsc8ds4CPaaynbvhK9s8zpOMvas9rjxQYZw9e8PMPC6e/r3b7Xg8QAmIvYOkIbzJfYu9QXisPCviqrx+ucC8wIE2vTyDAzztrT25chigPTuxGr2l44O8Tu2GvfuTpjwTfv69PkosPG6mMbx2rIc9UdBHvY91UbwyYS29H/mZPa4rbD3j29Y9fJc8PdQGSLzfNEG9ApE8vggmN7vnJS67T72KPAjIFz5wozS98a8bPk+Dgr25Fn8+85EKPbtFgz0ZKc86UaO9PVA4lL0lQl28955mPKfyg70oqg698882PvuXWjzM6sa8/rVPPdBq6zwZH4W8Og9BvUzDHT3Q0Ua8pV6LPYU35r20g3k9SsEHPo8vzDyvQOA9MWadPSZR6TyE9OU9Y2+hPQ69NLgNxa+8549cPCnCF7zFJZc7lVSPPVq4Qb2vcay9swqZvS7PHT2WTUy9IqRqPAwmRb3/fEc9iWsGPnXLDD3aXem8FiafPOj5HD4m6t475LC5vb6U/jweinq97oeOvZrbXb3pPew6ETaNPTEmurzpF+a9tbZbvYNxmzwu+3+7LvLPPBcFizz8Nei7NVr9vNxBML0K6869492APT4bfb1tZHY9tZKePEyvJby4Ea27BJG3vcWfpD2cVgk6htHdvD7BcL3jfMy8qDUDPRiPUL05phW8FXqHPfHKHb20DYY8xI+vvJpfrbwIcJ28E6UtPoaN6D1hpGy9HMANvCxEzr0HsEW8QlqTPLHhf72JqWw8QsNHvcAk8r1aZ9S9YzAfPVPdmr2pE7+7tvwYvBS1Ajzjb829pfKrPWyQ57zSr4y9XtPFOyxrpjzFef493MJWO+BNM72RpIQ9UJgYu63HNDyEHIW8oHKyu8BaQruufl29APlNPavktz3lGom7ynDDvazOSL3l9768VltmPSzBEz28O7e9sGzuvdb6171zZoa8wfigPc5guj0BPBk+BIP4PMP8xr1adta9uYUBPbQSKz6+Njg+tbzAPccjzL3mw1O9lNzoPIrxyzyEHsc9A0RHPU/qUT2byMM8NucVvOJsHD5N9io+6t+avczDsT1ZLD69O2DGvRZc5b3U3de9LZxAvjcz/TtzRyI+nUOOvNFmvb3KS54819QxvciZBj1KN8A8BXh2PUgctLvLSNo8A3CGvCNuHr6FRRi9vk53vo1EIT3xgEW7CqUjvUvWh71xnx69tciyPM0shzv4ywc9QWVMPSxrrz3R0Oc84r3AvadCPT20qLk9FTHtvSoMrb3pSnY9wrVbPe0rk7tVfGA934VxvQDhqz2m7rc9yCAXPWMOyTxpBmu9RNUgva93ErvQO7E8WEKmvLSYXL3H4+I8JcTyvBMYQT0yB9y9ACKPPQzUw71Ut0k9REUFvaomv72PP9E9iWNiPcehLDwdN9+8nctlO+Pi0js04EI+GWkqPL/mhr2Q+409VHCsvZVY673V3pc9UiaCPeFcibzCMeO8lToXvBb4Vr155So8tiaPvag4fj3o3p292rEGPHY1WjymBE081SOfvduaMj2oeyI9Lvmqu7afHb0YC+Q91E6QPbW3Mz0Y7aU8RfDuPNjFPTwbCIq9fTNQvB6jir0qLM48sHqQPexWkjrRx5K9RRCDPbbUhb2LnB4+KVmRvYQRQD3BgPu89HYGPpBnDb0ip1e8qUD+PaVtQ73bUZa97VdwvTb1kbxxQGi9mARyvW0WSz03lZw9kmXhvY0XTDy4X2O9ToUNPn6pyz2jNR+9wMJXPfJ3ojxScIc9CgccPW+8qTunjSm97Bk7PQ+AIT6EKVG9DnGSvSrszD0zDLO8PgG0vVZmlz0c/C69doCpPTUtNTyNDdO8H7TzvPCPBT6/aR2+yKyTvV/S5TzyrE48PlcYPfPkIDuGBxs9UtuQvddurbvnD/g4JtRaPJxhWD2xVXe9EqKmu4Dqjb0NAU+99nc4PeCzlL16W8y7OIK+vEIo17ygbuO9AdfuPVEHRT1DVc+9O1iFPReAR72V+4s9MQ3JPamGI71bnoa8oL7iPC8vVT1M6Hu8GaO4PXaeyT1UdgS9XNxOPZjouDyXt+48LMmOPS78ST05LhU9mQVKvWk3trxvGbA9ImSuvbQOLD3Xox29l8zMvH/wRb05WmE9IdRDPMtAhjsL9nm8n9OKPbBtizzzkwg+K3sAPeDMk7zqCMA8XserPd2vSL2YJQA9cBRzvSt2R71/fZg9GKZXPXSPBb7Hxi08Kqu/vOwhXL3eaK88PKmuPbD38j3tUla9M+QrvfXbhD34XVA96GCCPNNai72+ElO69dU6PdxGxr1XeDi+y2tGvY0lSj6Y0tk84cmBPcMTrT20qv88nKLbvVcCTD38Ahm9FSnLPXNeCz2Qfv+9C7kUPrEabb0CoaW9wp2FveWj8zy8ba49jJUYvarUcT0AkOm9Bv6Tvbg9nr10XaC9nizCOzLa/T3yJyK9j5vyO2/X1j3VEmO9sAfvOmJqQj0n/7o8fKejPZmgVr3gKQy9ihGTvMxyl7ssxfo8lddXvW7Thjw1tHi9u/gePdPWkjtFbe48TZsHPlBTkr0+fjO9ckQxPLgurLw5lVW9nnCSvSMbLj3fYwk9TQDYPBJwIr1Kh+m9eO2eO2UWgr07kw270wE6PH0w4z274bQ97BaPu7H3jb1sxta8Jg3oO97Nx7viuby97H6EPEcM9ry5+O+7IGxmPF6/tjxvRYw9bg23PTrQCj3qQ+A9rYqYvVe7t71SqiO9nLbvPWFxK7oh3b09QeDuPKfWqjw1xR++eBsPPa1sl71oVJI8yhSIPeRDPrtsPRS+/aMNvQ/9FTxyx6E9ZYmfve5qgT3s8PU8uLRnPbDFf73U7nY9YtQ8PAirBb00gCs9Xp8kvsPmpjzxWcE9XfqEvBQ6pb2jwzi98CS8PaR/Jz2mRgW+JJbEOwxOwruBZPG9xU5XvV2exDzShYi9z/uQvZmpSr3OSX28F/KbPAjhErwnWkO90CiAusa1Hj3W9wW8LL9cPX/oxryp2oc86cM9PeOTl7wf7M68DNAbvQIlfjwVYCE9+SLUuoPXm7zXVH07++Y4vbN1hT2XAky81pv1vLuiYr17xY086Zo9PEHzMT0scHq8FCe9O0gBzDoJy0e9GjScPCGiYryaYo68wtzOvHJ8Fz3HNUW9aQ++OirbhzxnXYW4IZVfvZdcSj1wUjY8Or3IvQSV+D1WJsK9EL6HvajbpD2sfBK83mqNPQA0DjtXEdW9ZRSDvKo2tjxTVQK7qaeZPOVbkjw8KKe9xSXKvOQE4b1K79k9HOUiPQoKfD1RZaE81bFZPCCNyDn7F5o9lWTUu/TwiDwROja+QtcDvawRdr1DoSq8fmiSvQg1A743GjC7p2blPfpNr7wigiE9RmK2vVXfnDwB7dO9VmslvTJ8mL0ct6Y9Efr7vPpSab0GNEk9Uhy1PbDpRTyGoGa9C+PIvUAiGT1ntia9hlsYvZVJGbzvhzC+pGmAPUysVb2KdN+66AXWPXHaSTxz+uO9wHwZPrehxzsMiEa9KTSTvBdwAj3SNWg9LvmEPSacizws7HO9b91GvZhSpD1yxBa9SajSvTaOir06VvY9oV65vJLUZ71Firm8L5gLPudXtD02vwm9f2d9PaGr8rwUZ587T20/vZ6lOjprx4W9tmYuPOtMirxnJSi8ZIrHvE/Yj72RVpw9aQwnvL9aOj2vi5o9cjOlPfwPkr01dMg83ibrPK36q71cB5O9KtyMPOlSAr4Ubrq9xEiqvchizD2PBIu9/ZQBuxEkZL1VOco9Wr+lvUtL+jykdLc8cNKYPasQ4rzOSZi8yHz6vZ8g9z2s/ya9Hqj6vPF62zwRrJ69AQL4vVqO0b11B8I9g8eePb1Qeb3FDqS8wAtEvXEuFbwXLjc9JU/vPTJfkj0wpiE9YZMIvePRzz1AJ889iys7vQaqAD0IXGw7rcllvZUV7L0Ry+K8Pyh1PtfPNj3qXOK7oKupvc7kAj2aMOA9ec+zu6xW3rwWKfO9eTSqvOcNoz3KNh4912CTPca/IL3IcIg9SqqgPJm9jb1Ijqs8VskNPhscQr3c9ui8mINCvYyafz35geK8HOsBPVh73DzOWQc+lL2GvVNUaL3tnjG9RkWAPV3rFLsDPcg8awvJvAg7ob1KHHq7GQv/vZwXR7wTk9K98GkzPR5cmzyvqbS8HPWNvYqn8zz1h6C9TL+fvRfRsL3av/C8HiFevbtdnL17aNM8/mj9PQR7qb1IHKG82hBKvMpkDTwWl0O9G7foPBCXkr0oa4w9FpxlPNzURLzOqgC8Ny0oPYE8Mj274EW9Zyh3PZJsGr0vsmS8sC3HPPlE/b17DMS8KbnPvBXCkT2DXRE8A4oavQDwAT0xtpc7AwSgPYHvcTx4XL290R2/vaHn3rsdhQW8JAXXu/hLxDxI/YA9Gz5qvVM52LveCtG63WWDvSl4rj1iWLe94nnpPShtfT1hOrs9acjHO5ny6D08mGG9/uQdvgLfojvWxS2971oWPjUntzwITwc9eQ2APfQo37vEfpe881ETPFS7DL1PpzS9V4axvIUIQb3EhmI8H5XavY2cpz04gTY7GEJlvZln8TycL/K7D1R4PS5Ch722NQG9dT+bvYPT472yfnO8wJMSvWyefDzFvEs9qDI4PWBfhr2kgOa8QkAhvfFErz1rZSU9CRS9vJIC9DrB9tO9g7LfPaWUtDoEFAU9bjuKvc6qRz1CY/G8x5myvTjWpj0NbI08oaZ6PbcIrzxggqm9uuaGPNoZuD2NwqY9+lOSPVrS+LwwoBW9E7qKPEAshrwa5tC9FSuQvFtpaTvDUWs9i9rUPPvlsTx3gwq9StmMO6dzET3DBu651awBPY+qm72fnZY9bIQDvolt9TvdmFQ7UDuhvbdpBL0IZZ09/zQEveKqwTzSROg9W6xJvWDoOj3fWpS8D+Q0vU4LXzxWAlE97r14vT+JhL2meTu9nUYhvLP3Db5xgT88WXevPIOLJz1F1AO+NnoKvYAQrT0t7n84LmLTPUmmBT57wuE4aJe/Pct3D72dKuM8NDzku9ZbdD35hMy9zzU/vT4tEj1KM/49GIJIvfhVmLvLC9W8v6SgPeH8sz3e0lq9sp/TPNZfJ71Tv0O8DAqePAmFLL1f05w9OCy6vcVg+DvKRAG9iCLJPdLRSL2WTia9cbNmvc5kmD3b/qe9ORcLuj3kzD1P+z89slAMPuCHm7329cI9IhtePIo+Vj0lIXK8auw4PQ2L/rv+ZD89CjaSvLEErLzvm9k8w4RovGr0PT7iO5K9Dhm6PGKWPT1Za8g9keQLvpuyPTwoZeW8/gCIu8IGMT1iTvo8eMq7u/EcAL08h7G96WGnPNEWrboxn4a91TmAuowXN71gqJK921G9PaI7ib1+L9K8gnAOvtZ8Hb2p4Tk7uztWPDqvcr3kv7M8lKevPdT24L2CqAK9xCTXvBTWdb2fyjC75x7SPMGCxry9LYs8YgjmPFIVYbyyEk69ME2AvQMBLLzIqkG9O/4QPW9U6r08lxk8FaPdPFg02zwUjg67NiKrPYbHrj18kI+7dwC8vMMiD71gDLO8t7m8PUs5Wb2fuqE84Ps5vI+23z2zL6q9qcoRPRdo2rwTXzK9uV9EvUxu0DvrOZE9OKSwvD9Ilj12pkO9V1rWvF0djLz+xBk9oTacPQAVIr3/Is890NGBu4Y1uTwPxoE92GxQPQbTRD3r41y9Cb+Wve8Ifr3Fgyq9PaeSvHYTJr0lgAA6tT/AOyBzAj202Pu8t2wbPlyGvT0FvSI9DRbpPYO2uz2j7b+9svgpPaifF72NkHm9L/MCvT2ByLy6/I+95qIWvJI8FD3ePXG81aHzPDabSztUQ4O9Ef6yu0rS6Du5Qo08dxAKvr0keLubH5a9c9zUvVGJkT3edYU83hAtvKJbJL1Uo+U719I8vvroWrsX8m89hd6oPBDNED5Ka2C9yULjuxL0Hr0pfYG9XXc2vgG8xj14A5e9Co7pPAMcGT2aStK7xB2gvIAwGr2qT3S95ujzPDwGyDxs5B09tMCUPWNrJr7TYLK78nbJvXDd0r0jhqO9OgtKvYWVKr3FINA7HzCovA3qBDzjHYI9XUgnvZOtAL2ZfCg9xQUbPUwdyT1aLMs5Cl3WPaRCADxD3jK9rskDPKeIyDsFL6s9z3qIOwtZ6bxgJeq6/3xDvROw4btiMW89dHyHu9yTZry/GcE9djW1vUhFDj0tyYU80VoHvgMNdr2ftIk810E6PeJS07y4Rs09WX3Xvews671V1/E9WUmhvKfH3LwqQDs8mjgCvt2OUj3kvZ09phr3PGXf9r13mjc93IxsvJ3P2b3hFzy8GCnUPXvBAT2NNRw9KRqBvQ8yxD3TURQ9dO/UParJpjw0EzQ8g9ikPI9e/zok8cq8DzTJvRQ3nr0GmE2932fcvQ6ZqD1UDMm8CVpUve+ZkDuZTMk7f2E4PeLoOD3IR4M9PqSovRa5HzsFGUK9ppN1PP0wRz2uz3+9Dc02vESSPjz5gwg+pryFPRkYvLwaqZw9xwkgvG3tS71m/cC8i6GhPQ/+az0CBMo8e0OKPG+Pnb0v7Wm9e4egvUz4ITzhTNa8ALCBPSv7+L28Z0i9i/scvAUTibyPzlY9HHGGvXpe6jyA3fa8zwJrvRBdRryY0QS9NMdqPRgmGT50AT68B51OPX7PFr63VPY7RbYkPZI6Azx6jwy7+8qqPd0glz1bTio9Sh4BvS1nWz2rIcg9XiuRvVZAnzx/y3W9i1pNPIlRHD7eZTW99Z3PvDoXLj4Lj9y8w+w3PYxfDDtCH/085sf1PASUojuhmoI92W+OvNQ2RL0vHqw9wVwAvZaAUD2+ePO9Gz2YvLHDjr33+EC9DZl8vU1Jkzpt0iM9yqWPvBD8Gr2ZkzQ9gTbvvJOokz1zMAI8pBNlvR4kFzss3To943OVvdZgQb3YFiu9xlVEvf/Oc71gNec8PDEIPWw0Ej32G9I89T4AvRkPsTyR7c08X4ilvVyWur1DTrO9wk4PPb9nvLtKML+9u4t5vZ6gIjy7gqo8n0vUu5uA2ruKaQg8KXTXPYHHCb43mfo8ngWxvZfEaL2X01u9VqQ6vb+etL3U8Rk9SO5TPa4vTL1O46c9y0k6vTEEXL1fgpM9V0K4PBc32Txfvim9tG69PPtpBz2dkAe8Xe6JO9h3CD3GuJ89n8ixu+v1eD23iGE9Z/2rvAGAOr3XiyY9al+MvJXBmLumsao9PMNRvak7uD3ngpw9U2tSvSGmyr0Qg1a7qRG4PXdKlrwcJ9k9t+fqvZNznL1VrM09+jf/PLJpTL3WyX89ura+vYlPoTxvihg9jGPTOqSVCb5VqFg9uT8gOhrvIL60Ca09fT3hPfyW4j1XZUc8vI6UvMcMhj0e6gc9dJBWPPCQrD1+Im+9svIcPUfJMb1bdbq9FlIxvf283jnZXbW9hGczPeuBGzxXilI8O52tPWqMfbwzvxq8zapGPWhPJTohA208j9gevYp0OD2OGUc9IOEmvCSJornrqq679uSmPfraVTvvFjw9k5EUPXRvBb0Lwa+9d4H/PPC6Yzqi10O82Q1BPYWVS70vUNQ95EWZPc1Fc70c6/C9w50SvVGW0z1CEle9LtONPWAiBr4zkEG9g8fePYG0pT3/oIS9yjMUPVUHAb7STgU9IXkaPWPJBrwNKwu+1pSjPSkzabzkmSe+6rzIPSliuz36B4A9k55dPZCgQro2rFk9pMV/umHI1z0F2HO97DNaPbsTEL7PQZY9heEXPR89jb1ErYK8JvQhvaq5kL3OqaC8rKSWvWPCeD3vYE2920s1PTvwp7xua6Q9bvY2u16EqL1+Cw09BCOquj4YYz1fxIO8Wd+lvWrjyrwD9F2934nfO/UoPzzbx4I93Ul2vMRXnzz00ea885N/PQnK67uCs8k9Ji2hvUllQb3XX8E8j1ZmvdGBw7sN9aE9B7Chu++Eoj1zsxY8TJ88vS37f72UZ4i9gK9SPQBihL0msB88VTo2vIbsHb0wF/M8SD/uPPKjSbx4GEO9Xh5Iux/3Tj0aSGA8NSjoPD4/kj3HNRI98lDWPM9IiDwm1tK9hKdbPFfVbb2eFao81jUtPgk9uj1xU5K8ykuNPOgtEz0AqGK9Xd0JvmJRTD25iZO9AhV2vZJnjzudyYu9qSOfPbSDmj36Ch89Sn0kPYKc3zxuImM8ajZovd7OaTuYCr29ZrkGvi2Thr3DoiG7GC3/vXk8wLy89JO9hy+QPBZ7Qz2llFk8aKLPPPYSqbv0h684MsAMvhzqUbh5nxc928+POytVV75Nzdm7l//mvYGGhbw09rq9Q8jKvLZArj2DGvI9ny4IPRpzWD2fScq8ogucPLqz0TxLKXu8rEv0OrO8Yz277du8+/9gvay+EzziwfE9gBNjPAd0zDxE0Js9c5Z7vQkGGL0DlO28jblbvZ3wprtgmME92YyDuv4auzuL6M655BByu/W6HTuJYUq9GMsyPc0Xvrw5HAw8rB2eO2WPCj7PXwO9ry5Avez0QzzUEV09TScBvNbXu73irkM8w4SdPEXlmb3lwsQ8eLpCPb+Vizzi1RO9WoU6PUtw1TyzEVY9go6DvLefBLyYYaA9GCIZPd6vvDx7VBC+/l3pPRJLPT3xMxy8WnAOPbHQAr0H7xO9+yjau3WD3zx35Ps9mYFsO2sqlb3VdK+7iqy2PR2g970HOzm80n82vWRLTDy2PkA9gmW0PU298zumi0s9glgVvHOHY7y3BJQ8ZBlOO4yWN73QeiE9CShwvSfFxzySjoa92ogNPZ7qzDkVmNq8zHabva7UKr0RhK65ueWIu1amjL1KK388Db0rvXOggL3eqnw97xlDvc1O3LwNe8m9VAZVPOseBD5aj+o64yJuvJytbrw+tqG9AU7zPZMXAr2qSpW7oPQ9PY7xyj2aBkW9n8x1OiE2QT2SN6C7Fgn7PNPWvDwXZlY9R2B7veOYID5hY+I9rFAMvSvijzzPXKC9ri+lvPBhij2Q+ps9+3+jPPmAjrsbfzi8zahoO24HHb7WJuM8QyV1veixlr3hvjg9BzL9u1bvszzum2U6wvZRuW+uZT2SuWC8376Ovblh9r0YOeE7Cft7vQO+oDyiWqO9GXyZvZOtp7xyQqe92X6UPNMdWzyjnrQ7x6wnPWgfDb3igIU9kTSWvKkU8zwqbB89A2vivT4UbD3uBl06GSyUPY1eUD31SW+9rIXfOGTvSD2G4668YSNGvSiphz2SFMc9ALV9PIHqkb0c0yQ9Fl9IPIp1DjwZNJM8z9IIPcjHFr057Do8fDqZvcz3bDxpTu+8wMRYvAXmrj3LmSA8pO8iPfbTzLttCl+9K0F/PV6IW7wss2G9PuFoPRhAF71eMh88uW6fPR3osrvj8Em9qJsWvYYAv7yoINi8EoMFvYCD6DsxTrs9s4FSvOX+EL3AyEM9m+CjPaE9Tb1fAlc9kqaHvTZqtT1Ml1E82nhDPLv1UztDWES93mhdO7Yxjrx+Ebi9x9GpPHerAL5MN7G88nNQPN7HCT2vUAM+QWaFPJKTG702jbi98+dWPbarnb3Etmc9BoZKPbZJor0NDZM975a5PDPyuz0af1K8BxBBPQ0Uojvn6z+8/hQ2Pbwa2rzBCcu93DBavBKnTb1FuCM9+hG1uyxuHr1OyIe9PPE8vY2F2jucQEw70261PB9XBj3/iqA8IfkHvSPJATrH8hC8Q4zrPOHaPL0pQjU9WJ2wvNtxA77N1lY9frYmvXZTbLvjBrK9mJHqO5zOkb0Zkac8pUG3PIuG6D1Mb+o8NE0DPpIwrT0rxcy9GmmPvfF+1rxJ8zG8wkAfvXkERb04rSG9ZrJPva+qgD3owYM9BYg/PSbdk7wMaue9O+NrPWjnhL0WUAQ9ICnLPfnjP72+ehi944u+vG50Lb2m+yK9hyUmvRbWHz1aDZu8sEGovRkfGT3e7Iu9rfvSPSffhz3Pvig9nipaPNF7hD1LQDU9PRZsPPCAwT3MI2y9/PE7PWAMSD2oP1q9xypovQV5i709HAe+FipGPX2+fz0wwgS8l8UuPV2Kwr2RWwY89RIVPFh0U72VuTO8JDyEPFxR/jxSJZS83w6Rui9d/DzgVGy8JfyaPFeCWT3TowQ9DZp2vXZ20j1lHSs86DWNvQG3vrwLBGG9X10jvVB2170vtna9QFGVvIxWCr6LAQk+u5d0vYbQSb08QZo9szWQPU7IQj36hGc9Qdkkvb3/VjsTMJy8fiGzvVCAmDwTXhu9iK/TusJx5rygLJo9K4vEvZUc6D1t1SU9H55sPPTlhj3uBaI94CosPmeWJb4WUcc9E8FsvRHmKr1Mm+q8lTkYPpDqszyBD8I7WLThvRTHx71r10K9KveLPFVIkL2Rml49qdvxvK1AHD76x7O9REKGPV20j70cqwE9gDhtvo5PTD0zQ2A8kpW1PBK1Yb46XVA8MMUjvdZKrT2zPDE9PeU3PHu01b1ZjQs+xGtbPTgvyT09cRi+MmvqvL2e4Dt7rEO9LhMkPY2yEr1mbLs91UWePdxWrz2txHw9i0hUPT18xzzPQmc909cHvSm35j0oimU9VhyJPFwUib1VRW09vfanPXS2wL26NJs975I4urmFHz74XXI9cDZjPUPZir1XefG8KkMjvZgFmjvrtU28J6LLPXcu2zuUIHE9vnsDvJALqzqoUgW+dY+KPJYlWL3ISwg+puExPWVBUj0F+/C9/+ckPOHo6Dv4KLQ6jOTiOy6nsj37+EC9Ely1vCO1P71DYLo8j5enu5FUjbxHAVe9XHQQvTvhbT2YycQ9UFkOvSVIED6vgsS9WDDRvD6zlLwRmWe9pP+1PD+tdLw8YS09nMadPX51n70kmGW9GhYIPRpRwD15H/I9gxo2PbgZYj1Ra+G8DZZzPeK0/70nfoK9IrJaPdIwQj1MEra9a9SAvRa5tL0GbTS81k3yvWC+cr0TxWM9grRNvYDQCL6GL3s8GajfvXf/Yr0WLUS9rfLxvQpXlL2co3K9q+5GPWzjajuEYYG8+tMgvEZ15jze5jA90SHDPfADEj1+IL48lSa5O8VZXz2Df5e8hOsBvGli5T0CyJu79cQWvZlAOz3WzRu+wSGbvTrBEDxtXq68u/VjvQc6Mb2mqzG96gVivXlIRb2LESy6xyADPvZ+e7xkGhk9uV7HvTzy+DzMpxu9NYWXvePeG7sh1mu98tPlvI7wZD0Z2Ww8xb9jvbjG/rxnChg+ujPqvNXrAT2ULIM8FhpWOnNDRTwi3g074S6qvTe4UL03hrg7DSn2PCz0erw4ras9Vie/PcExk72UW4W9lUaCveAlkD2gT729CaaYvZqEf717W549xI8oPhn/+72EwfA8USETvSujhT1uF/O918EHPeT9ojzwLsm7dBQNPiDExT2Ir4k9aGGuO3RZ1b0LrUw8GFeMvPxaOr2mhx+8QpIsvTqH1zxRncm9DAtKPef+C70LSfs8U2xsvaIviD3T12e9o78hvGGSsj39Ytc4csWsPCBYn73sqJw8ISOLPT/VAT5pyBm9V3lGvfprtL37wZ46nozOPBH/bz0ebbM9iOmQPOz5UjylrWY97bftObKtS7sOSkY8mDUfPk23irzc0dK8dahPuykKqzuW/ju8nbqIPYZ+CbwurUs9wYBRvRMuhr1yLF49EOyQvbCVmz2+vSw9OFcPvQmZm71AV4q97rNNvU/K+TwTNQS9Mz8lvc4cATwe/Xy9Yd0EO11yZb1FZI88dcTTvb9Xwjz/px89mD8gvdLbUz1Baky8hUOKPelqHr4oMdK6il5wvapMCT790m88ZeoGPaDwKTzInTS9iZ/bu59qZT3JbFi9J5dSPHDiGTzCSbU7x/3EPJxohLzSyiw9lemTvb33lT0neY69CeOqPLsgurr7Y1c9xC2turGxEj1/B5W9/A0nPZXIdLySWBy99f85vLpqqz2SE5S9/7TFPNRNjDs0k/E8F5KMPcFXrb2D+kS8tfzevKX4mzslRgW9GYQ+PRU/ozzLZ7c7W2hKvfUfOD3lQds9CVhnvUoxLj3AqRe9yevSvRy7UD39EZI9iyDSu2CSNz11ZC8907mivLXuWj1h3Ma9ICU9Pc69Ir1XePu7b57cOTMVhzw81Hq7n0/aPEcIdrycfAg+Ws0lPRq+Cj32gOE8u6QBvVg+ED1jKBy8f7MfvEsyUDw0/uO8DO6wvWuGqDwn40+9r1ZevfPyrLwmPWc8oWXGvcGtML1KMjo9qAgNPZjikDsBZem8caNhvLYbGL1th5e9M37AvTaZMbxJc7s51QddPf9Myj106qC9P8RKPQIoOj15ubc8E1EUvQXYmDzg6rW8alMqvJtPET16QdE9vmnHPJTi0b01gaU9bQfNOx1yFrwBRCm8Dx8yO7IKhL120fQ8JFe2vPqRpLyuU4I9udhJvdWj972znMk8eyVOvUVWWD0GU8k91LlzPNq907sm1p89MAmYvS8Jx7wrACG9ePxpPTK7uD2AlL09WHVZvUhv+L3PFvE94qiuO/Lgqz1BBQq+fwvOPf60J7441SW9LBWhPJUXRjxJNuS7HM1PPaOnyLyG0Eq947puvFsExT3UPic9nTIaPvQcIj7Go489y6aevEuMuL3J/r89PRmJOuZUnDwUA188HtBOvXkfqz2X+Uq8JX2vva2y5jy3P7i8mYmIPO8NCr1ZerM9gnC6vCXrFbzvpWM9PtuQPQHMHD0BPRq+wiCYPd7gKL5ZCRQ+sG27vX9bBD1NB0q9eBuBvQArOz56fAG9m2g0vQFMjr0dPuQ9YvbDuzNQGb4OBfC9c3srPnUvgzym9My8lpt3uolWwzu4n/49d7GwPNswBr6EMnW99wDWPbi8/7wX/FS92YgEvSf2Kb3p5vM8WoEgPTbMfb0lJvG87LfBO/UXiL0/XoK8HCuuuaFVfrv1VQE9UxaJvWlPjz0e6gO9CQ5XPCh7Tbp7vlM9zBhGPfENbrxwgGU6AairPFRk3jxgmcW9EgMxPcpjhztIMlG88mIjPU3fC7wn7lY8DkIAPSDSi71DCUa9apqsvLywBT0q4fU99VwfveqMCr21wy29plKOPUhUEz3sGxa9dyw/vaZ0Mj1Zcb48eWPNvAPS77tbEU88J1Gyve0on73v3A4+ZSKJPeYuH73UbgG9amJ1O+pKy7y6xf68dImkvC3xUrzXlku9latFvfhy1Ly2RIe8izoUPXrymz0Hv2I9sdeIPb1ziL3ZyKM8HFMoPddnmj3Uc7g9sKfQPf6gYj2qbyY8FhpFOyG0B7y0uBw95gMEvRFsir1uKSm9JLdXvBGEUr3bKZS9Hbg0PH4brD3SDSi9gKjMPUA0F72jVjy8JpruvUBGhDxLI+G9scxovJkpB76eOnY85+OovQsAcj2CBoA92WQxvQetzbxSrgQ+4NLZPP1Am73LGTC9yeyqPLXZEL0TUUS8Zm6iPUkTOL3hm948XhL0vMdMmLeIWVO5Fg14vSX4/7yJkTY9UI/SvdHNA75xUDm9bgydvFlgHr2+vJI9MWsyvlW2Jj1XaCg9Ux75PeNwtb1fQ5Y990Q5vYnkRTw/8hq9o2eQvYHwM7zW7T89oRZ8vQ+jkr3tXCu9xMtmPcJUzr02CTW8jv8avby23TvpyQA+hdnLvFAJVD1rl8A87NPWOwPxZz3zZI88dFKfvand0js+48U9AGDiO0kMsT1gePg9uFkOvXXk+jxzXxI8koSUPCCxGD79w/K8wsinPe8xQj1d+vG9tSv+PHML4z1T8IE4iUL/vN0QC73Wnqe94OenvKOZar2njhS+IO3FPB7bdL1Z1iS97G+EvQ4v7rqKiPC8pnI+vVpXTr7FOqu9JA6fvV6iHr74UIo9Rm8lPThG5bzcqA28X59svQmJID3ljJi8pqkiPNtf0jwYVn672vw1O4SH77wMHAM9fQF3vUwAAzxst6Q9ePIZPo82PboRvA69uEnyPHfFEz0yKfk7uzerPNh8Az1qazU9aTuXOnmzsToaCs89tRfOPE/5EbusHxw9dPniPL4zrT2c8QS9j5RTPcBd3byGJ7293vVkPVa387xBBfe9qt1gPfRA57szWEK96XVdvay9XTw28yo89pkYPJihVr53AZo8o2Muvfrymrx6pE89tPTmvGLeVT06uOO9PzcDPRgBbL2VT9W9ib6tPD3sRb3wSyw96BeBvfOJab2qLjo8YAzLvVj8Ib2Q8Xu9U7irPSIwMz5Nobe8rLTcOuJGoz1AOMg9rj4oPUiNBb0swc28hIqCvRQbqz0bl5s7Xj8GPsrynjuQiR29WtzTPa1lo71DOs88E27KPGMarD0u/EU87oaTvBoFYz08brY8Bq2JvRfDjD2mtJm9EBAAPdLYur2Jx+A8Fhq5vfUl7ryB5no9HGpVvbJIN7whAV69AX+CPTau/7uHPRO9gnwFvWMjczwG2xy8OhmEvd492L0jGdU8yx19vV8JD77/Fb09awNsPW5lyL3xX/o9AyaGPIoHp7ooUXC7sdLVPKEUsTydvKM89XIIvWWczjwZTxG99/bru8Ny37xqbLc93nukPHnLcD1yjP47W/+6PcM707zy1cU9U3X2vTL0Vj0azC+8byMPPZF8zj1mGpI8YtGOvHiosj0IVDm+mYyBvRZLEL7oNZi8XdidPADnPD3Dnfu9elcAvv4GVj2OqrQ8d5CqvJq8Pry8tzQ9Kj1OvJF2vz1eS0s7xHaHPCbdZr3Cz7Y98bIavA5c1bzN05K7l677PEDgA72ZmSi9NkpEvHShLj3JTKG8z1K/PTn95bxH/109wz+pvSq7Bj28WvW8+mMGPA+1Ab2QElA8PHmtPTyt8b3sv809NbOtPZO+2zuPEMU9640hvQD4OrzskDG9ABEmPW00xL2+VkM9p/xzvWDtOT2a0gA95OAvvTjnejvnodg87ooovfaUbz03jHM99hwJPTHruLqca1q8REbkvA9vwT0KhZ874ugEvV71urzaIyy9SnhBPGmjMj0tKtU7481pPauGUrzjOZM94cOyvdCVS73rc949T79yPZ++Dr0q21s8EAzLPZlA7jyOP6E9ccMXvX/5qbuYp9a8f9dlvRI3KT1l64K9TbOXvCnVUTsQvZI980JIuewoPj0S9wc9qsYtPR++8Dy3p+A8IBOEvPFNn72gl4o8gOK+vHSNE7zWwpU8zFP/vKdM3L3SbC49XNAfvH3BnT3rw+E9/DWAve23wjvff4K96hudPZ/cpT2uo0g957ifO3rMBj2UntQ8hJDFPNb8IT1jCz+9ON2/veRL5DvkdZW914LHu2UCLb1h0xg9gy1HPf1QUL1i2cW8uhrqPLpKEj0vXlC9j5yqvG51UD2xpVm7Mb8dPcOgAD3Sm4I8L26fvHwF9ToxK3k7m20HvmRRzD2ti589EiEZPHp47TzhJdm90WyPPKentDwiuWe9FV6XvV6UW7sqpMK8WjrDvI7KNb3ztJc8Jmb9PBGoL73scfO9DtxJPZ0c57xb46a94BiCvVVQNbw0G5Q9YA+bvEV9BD2heWs9TWxsPTtfTzztLzU8lNQWvaHHSz3D+hK9EfNSvRExAr1pwtE9B2WmPI8jKL30KF292suQvbC9uD23SMk9yVpLPZfpuj0cAgm81dUpPebLKj6imps9kjYePSezi7vDuDo9OnUCvQjXdT0G8y88OfBtPYQKPj2jAio93G9HvrINpjwWLkA9SPaxvL4cajssOC29OztlOXzKwb1CKBY+k6FIvbISoj33/aa72n79PDy1iL2FSbQ8YfhzPa7Mz70ET6u9M1pUvZuDNT1bT8W8M3PvPQhmbb0uApy8nwGTvI2GdD08OCW9vCb5PYXLhD1j5g69ElawPdXWSD2Ng129F3rJvHuW/rsiQAe6lpTMPbSu2rs2CoK908I9PYumvb22zxG9+9sjPTUVoL0q5DO9l+J5PPNeu72G8VG80WfTvJOhZTx2N6o8dRZAvUJCyT2RbMG9WT6zPagrKL3iklO9rSnuvD3hIrxTJya9D8hvvfZDNT1eY508KLCjPEmSor0oSs+8d256PXHREz0Wl4M91wWBu7q0kDwtnAI9cYoGvQcVDT3ID8Y9kwMUPW3RVj3iVJ47nAsAvK04n70YMRm91EmBvXgftr0G/aQ8Xtx9vDFFgT1/HAg9w0VRPI1+Jr38BKM9qms8vfjkZLrWb5I9+09kvQwEtD0SzMs8BVn0PB2jrT212lE9tf1hvReOGby0HxI8TafAPdy5JLvz5zm9rpM6veYTwryNt3Y8K+nyPc0atTvKI5c9lUzMu3WWGz5C1ls9sECUvUm4FD6qZJS9YI5dPXy0GL71B4g7OBx/vVkcCr37OgC8owEhvg9rKjzZTVA7d+YgPdA96buq8GI8If+XvTb4wTwewFo7G/ysPKVbMr1AzoY9bi11PY4aNT1fOM88IuoPvaysCjrsqKU92o+Bvb0zrj05fRK6ki2svdkEdryf/U49pJyvPSqmcrxP2+C6LcS9PffpibyI1sO8MeHOvE4w5Dh+WB09nSJyvTNgIb0BSkW9p3TYPTI8jr0jNIi9oU0svCUxjD0wMS89EgKZu4801D2MNxc9MhbPvCsCE7xmfG89BcGFvCTjtz0HeEc9y0kGPOfQlD2Fo2Q9DjQoval/ED1fyic90mYDvdJIWr27Es69BiamPXuAvD1wxqI9ePwPvVwg8j2vAm29OukNPnWKWj1yiKu9ygmYPEYwIb3ILsC7zsSvvYS/vTybkPM9z8c6PV2VrDxM34+9YRK4PaWYE7yK+4O9vRmHPHCtm72tN0w95okIPQ2uCr2KeHK8vWa6uiDt3L1/mpS9tTEMu2ViSbwY0WI9ddyWvTAmlD3zsPW81kAaO5YSiD0K59C9e7AmPcrzyL27ElS9StDkvINf/j3+EpW7qux0PCvnhj0HLJO8aCTFvc/BxT3FLwe+1N7MPaX4tr0W7qE9WDFwveQZkbyJrX29SJHUvOWMiz1oA2K97SALvfJ6gbvlPt28dhUXuzuBez0IoUY8wPyTvQgGoz0MNrS7SSYrvYfEcj1sbsS82XDdvI2c5b0T9A68QUO+Om/N7rzXXn49wFmOPZbqwL2vIBY9c+CZvAHEjr3rZSw9GmXTPK5ZxT2z/H+9rR3NPHvgkD3wthg9Q+MAvk0A5DyDdiI+RZWLvDigcTyEO8w8dczDPFNRH71FGbm9SB8yvDnLBLyY3EU9IVi3vDhWlTznWGO9E1BUvQ09lb0X3o28by3IvBArnD1soIo9tmKavTkjmr3LTXk8Y3JNPYMFGT0eeqw7o8wtPECHqD0srdM9RhTSPeCk67zHcTK8iruvvI+CrryF3lC8K1CSvU8wgT1YtfK9TgMcviur0b1wPzC97A2fPZpjk7z6gO28cnIbvTe7YT3JqZ69onOyvePTdr1qDFo8BMxCvSZ7Rj3s3jQ8obCJPCdqnD0jvY29H6l2PdtNHD1w1BY8MtDBPRJYqD0yvV09Ed7PvaMe/j2h9yS9GzMJvhLkl711gP68lMkWPRYJOL3qM2Q9XP+YPHImKL1MaB69hNPmvB/pqb3RGIw819ziPKrbxjzywA69TA0HvWOIdbxrx6o91sO5vN1nx71RLHW8aNwqvdUfizzwTPM8UiiEvZHNIj3tp6K9l5Q7vrGW0L16tN89B4RgPea9bbuWuZ49nWTLvLh7nD3kAuy7SS2PvPscBT1HQMW8TO8cPn8bRzx8TB4+GgCkPcA/+zzcDuE8jwSCvUGjqD2rO/U8uucOvIKxgr1d12I9slYHPbqjhL3d5Pg8K+cEPdQTXbsTM/q7mZ8/PgH0Or3fDIC8v2civbi/Qry/Tg297YgNPcreAD2CVxI8EFY5PAHbbz1U2sa8chSBPNl2Or3kAcm8pcM8O8fojj34LfS9B2JdPW+EHL03hLQ9Q9J4vRBdpTyhi6a91mflvJUNmr0mhGe839T3ujbHtbw/nlW9rB2dvRg30zwT4Oc95foGvDT5njznVzk9X9yxPVvFAz5jLB08aTNtvbKysTwfcv691T74PWj8ET40tHW9cYJnPf9t3r1ICrQ9UYe6PGrGSbw4XGY9x/E6vq0mnb345JU9sshCPZd95L3jQT89zezGPSmVND6vQNY9EnTMvT3pDL1RE7893JGiPHgSob2qivi9QfuWvapAajwW+yc9cmuwO0OSxD3hDO89tkMOvtJlhjzNa6w9cwEcPfdhHDxKk4s7mO+mvRmWtT24xqU8aC6/vBmZobuCITI93p1iPRJIpb2qI4o8SiJjvTdbSj3FFYG8f0IEvXY8WT6KPwO9yiafPckfpj3yGRK9kWldPS69QLqwRbY9EinnPLtdQz1nj4m9yictPV99qjxyEPS914yrvAxNgzykrt89WeybvZzny7wYnBw+/JW1PH/nnj1XYpk9xsYQPb74Rz0FE7o9y2YoPecePLtSADY+kX4OPEEAYj0+lp49H5KgPagUcD0DY4s9b0wvPnJyCb35Gus7l6McvrUyBT1KyKk9MTi/PIr6ITzQ/HU9w+mRvDB+Rr1OF6m8DqsMu2yaH76kCoS9TNFnPZCWJ7y21hA+lE++vPrD47zgz8k95tASvFOXlL2lIgQ9HgWIvGHFB77aWdo8PfyzvcEUzzy8ZIC8eJvWvAoHFj4lHBM8pofCO2Lf2j1wnzW85nQlPprpAD30rRW8OioTvIXAdz1aj/08926XOxD/cr28Sqw9F/i+vQ1nJLyJDDO9SbnMPLQyhz2CLmw9glFEvUaE9ryoC6m9HW8mPA4nhL1nyTM8plGmvV/eIr2a5uo9X/eNPdLmhb0BY2q86fIHPdy91b3OB6y8PU/6vUeMjL1/kt840FYEPs1Z37wiKDK8uTGePds8Aj0N4MA9+bDEvUb9K72YGU89xoelPYFqHL1yYk09/KsNvjVixTx66mQ9E+fwPc98Ar5A59Q8s8jHvbALRDwqipi9qWgDPQ5+mzy7IME9ZNA4vaudwb22txw96bG0PAIbSL1Lt+Y8VM2RPUZkrb20hOc9SSerPcMktr1hMdU8aSBKvHBLCj3wio89SOU1vMnKvb2GrBW9gLxgvlWMy7xmZpY8O8UsvKCzR71EkQi8Y6FHPAt1CL7f3OI9rzdMPPMAnr2G+IY9yOi3PbMSMD3a8Oc7VbbdvX3Hdz3lW8I9ztDuu2b/Ar1/zd+9CSuzvUgiyjyLomi9hzQKPK5qtTzFEoS9pzyhO1+V1rzxlY89kgZHPYlWUL3AxgW9igLkvOO3Oj35qDK9quhKvWCBAz50kF89n+gSPj1I+rwpsPy9ubmluzROkz1yx3e9xzCEvcOpGz6rF5o9A5jvvFlFzb0+DeK8bjYYPUJaHL1O3oS9YMVcvFSAjL0kpVO9f5EovRU+hT3bQGW9eXtbPCO/RD12FGm98BD7PF9wZD3bDgQ+QU1UPcfLVr1mtiS9oaYku8E8t72JuGe9Ekp0vUaZoT2ppwW8Yx8Vvcn1ErtwALC8qKtFvOCNwTzYCfk8/hrdPFe4cjynfIU82RA8vOjJbr36hBS7Xa2CvVAZkrz819U8orU/vQF8Fr1LK2A9pZypPQR5o7w/0zY9tTWpvR+twL2znbw9WPaCOqX2s73P9na8/MFzPGsbqjzuFpe8lkSoOeWRMr35TnU8sJHRPBhgVj2iSDq9mi6IvPSnJL0zSdY8QlGpu7TwWLxjrlU9QfkWvd7QPT30DCI9cHWsPeR46L2pJae9DeNJvTJrKj6WlpU9wC6OPXy+tL2xn+68rASJvA18hT0MP6c9cADjPYf1BL3Pfjs9GfvXvdjB0z0GLyw8rJWhPbrvo71Di4S9ZaGRvbgdKD0Qzb48w2irvSSAdr3GIps8IrKVPIjTY7szETS9DllPvQ2RhL24sYw9RyoIPMQGAr0W67c9iSq6vYKOGjxmAqy9npRqPXJUrr3S7MA9DaLcufJFMT0Cnlg9v6clPUEwH73I62a9hVlTvDwAnTrMVeG9R8DDvYyyLb1Zb+W9qaYNvmizoTyTo5E9eaCKPE8j2Tx74sk6GSOQPQDzej48BHC8RK7KPce4u7splbA98GipvXmOmbwHbUW93JyOPXu9Bj6ixRk9I0DmPdftq72Hib27RsHLvIPxF73lyW69cc/APNUoT7y0PlI9Qwl7PdGo9zyGjQS90ZSAPcragrweYa89+Hi0PWy8nT1mKJS8f8Asu6pyez1Jajc9Qz0zvjYxlbs8TwA+NVNivRchuDye/zE9PnLIvclhFz3B6Yc8PaanPaMDSD2JgBg8wSTIPE7ByDssE0y9wMb0vcvnDT0M+EQ9fPcZPZJDy72/qKq8weoYuzGej7uNQJy9KkXgvTnJwj0VrTI9Ry31u5nLtbrGKRm+IA30PT6kErtLhv69GxsJvFS3IDwNsGK9zFRXvAEvCrtCcXo9zEzPPFo4r72P1w09TV+nPWhLlTtHPbI8S9CSPK0JojwB+J09MGKBPJ1OWr0XYvY89X+VvKy1Vryy9J0887QlvG83u7zc55m96FRqvXmGZj2rUUK9BwGnPderITzM9As+u8KvPOmZZT0weNi7mgznPFcHOr3F3zC9x23vPJv0MT14hjU97pXqPNJkHbzJty69N/UNPYNHaT2MSqK8KBrwPKozfT1eRoC94IdPPRl60L1/3+E78gAqvXy3qz0+OCy7RsJrvS5ekbzt2EK8Q4gZPUysQb2mkwO9jceDPGd4h72hyOa8gDDIPbeGRTuxCzA9sAUiu3t3Ar1OIb099HBfveWtVTzvCBe90PC6PbjlC71qtSC9EQ7BPYZxv7uNbe09I17/POHY6D1RSju91ToavEdSsz2mH8K9H+T3PX0OE7wFm5i8XqquPQMPlrwJcCe9fMMEPdx9Zj2RMkg9sNlbO29/O70XXH89wdtVPdXbBr15BJ49PM3Qvcn7ILxTyaU7SRcrvelcsD1j3va9XuADvte2GTztRQE9citsPZNz57yUVq69FwH7PAnAZj36GsC9QFRKvA7EXr1gs9q9iMn0PV17Rbvp6cM8nWfavfm0E77lWe49pxDdO+EtLz35ft49qOi0PPEFHbwGlL28SphjPYgfiLy4q3M8Q457PBzGQD2T5Bg+82aIPXW6fT1j8Sy96KXZvRbJbL1akg89OSDgPVHrCj6FNoM95jndvUessr2/axE64VB+PM1RCT2IQok9h2otvQQRQb3D/1G9OlgYPgPVFj5ihaS94GQQPbjvGL0xOFO9cOfbuoXdtLtFKHS91Tq2O/orSj5MpJo9CgxQvdum9j3a+HK9tDf3PDlPobvuv9I89HhxPQ2Hbb3r7zw7/sAWvp54jD3z9qa9KQ8yPWoyOD0Sr4q9O4/5vaQPIb1Tba88NvxIPRZlbz3fmS89UtPIPfxElT3bdr+8Q/TRPS7X6DuGTw29abPRumj3rz3chQM+xUctvU5LNr0eH0i9sHLfO2xumjw5ClY9kRSMPeG+pr0/Eq08VuJlPE5eLr00nwU9HQvYvArbbT1cXua98mopPptQQT314eg8ViN0vaUAbT3gXok9x1HZPOM6ijwJxcs96siCPZTE5rw2n4E9VdgOvLH2AT2GgkE9xsrHvfGvKjzS2a893JFGPS4Ljr1tXG49cjEMOtDh8r3mApi7c8sIPTTeb71L+Sg98PsZPb04Ur5+vd89lDQ/O0M2Wb1N2Ys97701PGcEAr468/E81HfqvQt1671Fdpc9F9wPPTGmgTx4P5o79OHJvSNeXTxJZTa96cgtvUymEL6liqs9XXTVvU3Z4T135me9lSQkuV392jx+PH86SfnQPbZ+LT20fAM9oNoHPqbCYDw+K5Q8/1h7vee+xjtdp7k9fY4NvJM8MD1ZgrU8Ftcfu3RI7byZMC68hzFKvOr1RT3Zau68JPWePdJ/1jwbpDQ9ncHtO7tO7rwb0BY8thzyPAfb9jxlIg89lAURPdGuNT0EaPm8Pj7XPVtCBLxl79G9HQocvaQxuzz1KKc8VeqavER72Ty7JjO8s1Y/PKWPhL2bBgw+vtGovERvqzwscuE9gTcwvWEyXz0H50K8GWwBPUID4rxlUJU8SgSFvbZATL3qnQs9v9wDvanhtDvu54g9vHGJPaPPVbxrS5k8oCq3vAVdoT0dnAa9UO17PGFlNzwxpwA8nyJGO49V5Tx2Pfc8xQwePHJ0XjyhBPS92KOAPfSIID1yqJq8MRE1PeBeKry95Is9jFRkPdg8uz1dbKU8cIttveJ6Er0KQ/A9p5vevHxkCj0m0bw9/9KEPf7TirxIA169WGfGu5HtBz7ZwJe8RspUvWwM+T3DsHG9T9eCPIoLQr3VwYs9M9gru2nCAr5wGmk9L9ktPNKvDT4S6XQ9rACnvD4PLr09wCe96etmvO/3j70h1IQ9UpA2vL0ZEj7xZa68uB0HPRvJjbwQdJ29aHiUvbfonz03NRG9lkYDPobUJD03FyC8WJGQvfgKar0ttMi9RqpOPcpAvLyt3dq9ljiZvTyKHz7YuUm9qFO0PdveiDzmhOc7jNytvXOqlj3OUSU9B5MVvc0cWDyAB4y9rjpnvCHdMz3sGdQ9aD1Bu3jCZDzdei29YNxnPQ8sab2gRhS9N2wIvS1FVjzHtoK7EGeHu0c27b1RU8E9FmhgPFf5GroWx2y6Oeb+OyGrFD31apw6oBd7PJ3rgb2QJQa+DJMXPOqUPD0n8YY9t3zqvKG9sb2+RG88z4o6PX/wprxSpQq9gZA+vddkL7tdVmY9CzFdPYnMIb1ZEXY9NNpIvclBi700IKO81E9lPV6xv71q7LK9dwwkPtVZOr4Z0SI906mJvSDBxr0iQv47H/auvOKaVb2d72+96tTGvWtXDD1Q8gk9TLE9PRFvS70mNzK9JrcEvs39dLzgTqq8kRUmPKcrmDyHAD+9TWlLvYNKBr2GdCE+qo0DPYpNdjyR2+g9NNqCPZKw0jyEbia8Ty+3PSvbgDxz7628g1cLvVvFcb2voqK93NARvqCYnDynACm9IgQ4PU0VZ707bMW8TiqBPYHoEjuCS+m8u/ogvRCXjzytXYw9za7BvJscUj3zENI7b6KSPYLuNr3Ej/+9CIGxOwmMqb1v/DA9TPGsvWLnzjzVqd47I1BOvQ99L74QvBC9KicyPaSSzj0mWZk9WlWXPM13a7y/4ca8iL2hPADkkr3MQ3Q9r2HHPJe0qrxZBQG9ZCbFPBg4YT1O1QE9ufRFvO6qaL2zUvM9egjKPW36XT1OJho9dHWUvcMwxT1/UDe8su6lvCR1Rz3NaMo9u7O2vSj9jD1SBSy9O4T5PDi7tLy+z2I9z8AKvrwrHjv95+s96kOBPHFesLwEjNC8NVt/vWSpmr1RHAK8dELRvOrVWj1gp6s9GYCbO7B59T266g09bauIvftnsD2UCiQ9BqnVvemkqT27h6s8deJxPa46JzxXb3083c8Xu5VWIz2yDSq98TuVPTtW0rsKiX08434GvLXGBLvW1ek8PuScPP2cHz10VRM9PXadPPoZ3by6I6I9h5lIu34hfL1518o9U3GZuxRrqj0h0M49TwI8PSMSRD2Wmnk8ZjGVPTfv27ynW4O9WexnvcSJ1zwK3DQ9mo3XvZyqnbydPqi9ahmOvSmQa7wFs2q922eTPV1mJzz2pp08NshQvab4o7wvVRE+b2VwvbGtSL2uLba8cLpAvNDfib1ec7a6l74PvrJDaDxNQ4C9VNeAPWvNHL1iv9m8dtlwvaEwtb3iJoi9QUd3vReka70kPFE93nBbvUEIxjwvBUS9kfgZvXlrq7yKn0E9/XmOvQQTQr0LaKO88XP7POpMzb3RVa09eDtEPQgCib0z/ZS8uQkvvVga6TzOlCa85bi0PAaRrL046gu95ap/PQZNnDw6Ygu9jJR7PD4WqLxWygy9xJ6MPAEHArv0zeI8lcQkPH8eKr0Ajuw9MNlJPU4BNzw5qRY9mNKRvTZhAz6aBea824oSvQ50ibtZXJI9CEbhPCDLr7ysIqo7IZyIvA1oDb36jwi9j4smvIifhTzrPz08B3APvYviZbx4n5A9CRiEuu6spL29tn098J9qPQYFSzyiW6g8ItxMu3PShL1fBP48dvsKvZwD0ryA0p28FC4ivUrccb2UrYm8IQpQPUzmRL0e25c8ox14PUZAtz14XyE9qbWgPWRdgr12MT09ekrTPCRLrzghLCI+a0iDvW1Il72rEYM8W1F3PAYCW70Wcs49NcmhvQyJbTy5ez88yVwpPZLiej0/Y2I9jftpvTfnbT2Z01u8MAMNvfrMCjvUrNO8ZeYDPKuZ3TzfI0u9EGWUPVNHcz0qbV29WrhVvZ2qbjw7EYW9d5EWPSZExjxCZl+81KMqu4HvrDyXE6S8DoNDvZuDGr2T3mU9sqwMvioiCr6q4hU8omXku9Cc7Tyxihq98ds7PeQdIr64mMW8RFIAPa4agr2czoa9kEybPY4G3DwI2zo7H30nvWde7rx01QM8V8Cnu5pg3T1CxT896P6jPVJDNb1l8pC8sHKjvRYS1D0b7rW9YX66vTsAw7y+Ux+9RI3gvexoJz3YleM8A3DHu/TJML3EQeE95AeBvUdHED2He1g9TGuKPblswjxTp8c9ztysvMizIr0Ak/y7KUUZPCSBNz0QoqU8O0ZiPSDkjT37jZC9hPN0vZyYzjz584G7rhThPWrZd72GvwS9/6ruPMbSBb6YQ3O96me8PSCDkLugaTK8ioS/vDbZSr0uLwa9q3X4PDxB+bzkEDY8fZWwPCH1TD3QF3M9Bm/UvEfUcr1f7bC9/1NlvfXXLj15Vu04Inq3O470jTtT4Yo8SDA2vS3hpj3Q2RE9F1XGvBg0w7x2EQM9XSaOvf1iFL17eJ29dEuTPUNe0zwnoH89MsFQPcKETjwmzmo8R5svva7CEz2DRA29FPTYPUApK73UZAA8UrS/vZJL5bxcKbk8K8RLvWUjB733f5U9/ZIcutq5sDzHHi+8umv1PePwzryV/aw9ZEipOlzr7LsUoIS9qc2uPYN13bt2um+9Ed47vCZimb3caea9CBQ8PYBOmrx/0IY7K6kPvn8eRD0GhJM8NCSTvAKizbzytQK9fV0PPq2hkTyyNig9GjVEPioGQb2eyRc9luJpPCyn172TzK+9CBwnvUpjPb0s7Ao8DPPIvWGkwzvRKwO9yqY5vgJcjz3DHfk83FI7vZw/4Ty1tIE8oqxBvcwyPj1gYMQ87Trive9CCD54KrY9okxjvd8yoD3YiBq+98NSvcbkoz0KF6o9BeKGvBKyDD3jcCU9Qv5+PSKfZr17pg88WhjFO/Lg3byV4WO9pITmPQEPK73pEYK9zuJFvWddFr2PPdc9sVwdPHKx4zwHXQC8LDb1PYCSo73EDp69CEl1vdIwnz3293098huYvZMTk718bRm+BP4avRzYOb0sMK08bgbMvIg0dj3OrR+8h6qMPSAlOT0IGwq9/KmRvfi8+jyKIdC66O8DvtMguz0Vsw28sAVEPLasxDwJYmG9YMIcPSjNK71y2q094wCKvJ9wwLydvp08UDgmPfrYU720QEy9EJ89vTSWJ71NtrQ9duhoO1YAVzyTIQo9C3DrPBgYwzy9FXE9u3rku0AAFD23Slq8oTniOparirz7rMM83q5WvVZdB70yirc8eA9DvUmO5z1CZde8DUW+PGEHdz37iAC9pVRLPEN66TxWLWI841I2PX0m/DwdtJ08O5S9PPYTA72IpYu7q1kwvQdUCz3AUPs89iMVvL1vtzzdMKw8h150PHr9q71thAU9iTmOvfyF1bzx8869o0PePZz0ljx/oo29czljPXda0rwYJd+8iLZNPQBI4zyBFZY8KYmCPZhiHbytGXg6brGFvVzZC73H0Ky93GQIO8pyxL0SoZg8qGjWvJND9r2lw8o8UacFvJzKk70gaTM8opQZPbP40j1REYo9qLfkPdotzjvC+WU7+LYfPdNTaz2bT7094qSdvS8CJT2liKQ9Xqz1PcxtVLwIjl688n7jPaUUAz2doo29yftBvHVDN7v3jky9jXNdvGlMA77y5aY8LGZuvfE3ND1jL6W9lQm3vap9rD3dQba9fDD8uyOPT7yLZ6C9xIegvUIlZ72Sluq82v7pPQbna73eN6U8Zr43vWOvnzyxiDu9MlTNPaS6gr32u2Y8OIi4vQxIcD2FPku6UuKfPVDsL72//7q93xETPRiK+Lx4rWU+F1SIvanVEb1dkuw7IHTuvETuKT0rR3g9PvOFPBb5WT16TDE7aOqPvBr+7DwdAva9/XpmvYbG6ruBiyg7EpS6vQnTs7r4mYE7BjukvK37iTv32i29HhtnPDJNBb3cj+07WD2nvE7bL72ceR29FkObvJn4Grqxyp69T3OovcbmmTxuW/O8nx66vJftTT1saGa9A0fKvV6lZDy1s6u8InybvFhsB71RN1G8rIsAPRPTq73GIMW9v3H4PHZlDb0sQ/A73lCNvejcXjz7c7c9qu05vHF7aj1ZdrS8MSNUPai7uL1jONq7uwhXPc7RKz2e9wy8EOkGPMAUkTwKu8y95JkLvf7Imr0aJ029GuCBPSTp9r2P17q9Elh9vd0EY7wBxMY9eu8gvBnwwbySYn88UdkfvUNhCL3nS8A96dNcPdtYrj2ltQC+JKFivKEAwT0uiAO9gYMEPjeVhr1FxSI9lfh/vCEK2D0MvZ89TCQ9uKhtgrvDnKA9F2vgPHnZJ712aIc9JNhNvbrQWj3e5aI9ocRmPJtcpL17y8a99GI8PQmRsjy2uRM+5PSlvQkDKz2v6as9XZZsPXKyxzypkyE+cUA1vSgGqD3jpA67VKSCvUx9s72q5Gk9WMNrvBx6Cb1tyt+7IFf+PT8XEj6Xo6Y9uYpnvAWcnz0kVZc8fmmLPewxNT7c3Ee9OGMEvpALiL2T3Ts+FWoLvpwNGrzq8I68wY4WPtdzKL6H4Gi9t8z2PY7U9b3Zc5U9orAKvkP1dryQAOI8lfS4O8njEz0BP5Q8IHaHvcErOjzPu4k8pHmZvAtpET2uSys86CehvWxZFD7tBO48e0zyPfUIHb0uh8w8huk0PfqGAb3S5MY8Gh/7PIFNwTxFHeS9pcETPSGxMLxSAjC9AkIoPdBVkbwu+GI9m5nSvP3PPD1mbLs8nDOAPWQQ6rwHY5C9M4dFvOSms71QKbW9IEGRPNDTMb7lVmi9rAkIPQCG1jwjkxG70rwqPaadwj2YjdQ9s+baPXxpij34ty49xRL9vKksIr2pTic9rFkJvsuvITy91RI+/k+EPeEHDj5KWfG820iIPZBt9junm6Y9J8xjPSlYyz3jLm68Dp2tvRmTSr386pa8VRWgvTxTtDsf2yw9xlFGPTddDr0NS5K9Mv1uPdcpgz151l68RqUNvSCDzrsS6DA8HhbJvIvlsj2yic09IhtBPWAHOL2FIIk8Psy9vbRLhL13/zU8txdYvXM+oL2Hpna9aCWXPR2ERD3VOKc865VsvPJUFT75iCO91yxdvD4JiDz9H3e9Yw8AvaJSkzzaUEC99KXMvG68Iz2IifW8ySV0PWWlwbyCOes8U/yUPZWKAL53Mj8801mIvLmPRb2qSW69R2cPPNOocz1bw7e8duCNPakVOrxf7j0991AIPhwmZLyPAIQ7jMsfPUNGdT3jO909ArlAvUt0MT0ulae8annKvfvIgT24use9qf4Hvca79722vS0+CUcKvNnW2brV/MK8yv4zPD3ddj10G6W91xqxvErnXT3cXZw9WnUAvlqFRz2Pl8A9oEQrvXW4Gbz//Iy6zP+OPOLw2T2leYe99JPDvRIXBr4Gzse80ogrPZxPg729EDw9bOllvZgQfb1hbD67rdXbvfbiPz7dsQq9/xCDvFtoC73/DIM9VQgFPXnWVDztyJC9ob+QPKK4jT20WdU9ckvkPUoG1z3WuA69qgpQPMPjQD142gE+fq+2vN+cojeyO0q8XA5bPVndgr19YTg9yqoVPN+/d72ZmmK9ixhePbMnPj09kU+9MO0WPe3v1z3bRp29Rs4quzRnW73bh+68CVdEvYWvELy9Dpo9l6x4Pe1eDr6vvpm9BMq7uqa6irz/1tA8hUqTPK2tJL2Tiv89DMAqvNLjArxV5Yi9waMevRNWqT3WYSk6hj+KPA4FCz2h7W48C/AdPVDyP7wilXo9/jNYvIcoJ70ApBm+gc03PbWgqr2SmI+8XZ7ovA9x8b2ImH49eUwhvcrTPD3YUoG6MDjnvPfMd73rh588e0eXPIat7DsmiYc8YwkHvRSSDL4bydw6TL+KvdOfhr3o7RS+eJKsPSPB1D1yVYe8MQVzvRAEfj2PKpe8uWegPSaCHD0+Taa9UBmsvBAivjxDED+8FcVyvekDdT2Pfew8TP8yPmrmvTzTq6s9Xj8FPS/pJj2eZxA+eIaBPRKxnz3olKS9oMSfvJPPNr2h2he8sVVRPsbUabo5Q5w8cFozvTPK+bywxt+8Mg7jvaSRvL2wYr07NA3Lu//z1r0rE7A7GeQVvsWctj1CmdU9I5prvbZBQT0YrYu9yssUvho4xT1F+tm9ZX2BPTCrHLrIK689BIQOPD223T2qOUW+Qa83PPzh3j0xSQq9ihnWPOEfXD2kYgK9GQ9SPeMgQDzsJy+9X1VfvZwspT1ESww+7/2nvQ5lkrx0PQo98XKkuyzuuT0tqCc9R25/PU+57j0l3Jw6/ja6PXsm8Lw3/fs91r4rPfe7Arytpxq8WuIaPiOsHDuXjcs8ez6EPSafIbwrYgQ6j0fEvUnZnj1mxoK81blQPNPBUb1ePZI9EuxCPSpgxr0C+hy8wlCaPYBpCb6QZyG9MGSduFI7sLxrTFY9Ut7uPBAPlbz8GgM+tPOpvAT3dL0Dv/g9E5CJvRPjcL1xJv878TTGvB4nnT2qlYQ8kJdHvSZ3sz1wqgM9gMSuvbi9mT3RhsE9NAdpvR8TYj2F8QE9Fu21vYFktjsJWei8YrqoPC0QsDvEm/K8KTs9PvAoZL1CIIw8G10ZPkopXb1SUsG8nnezPDqXrr3tGVY9zdnivDF2CL3+MV09DqUlPdQNjb2hSNw9ySPBPGX6eTvNLqw8kEEFPegZwTwvwsQ9X2NsPQCJubx2eZo9G5G5PM66aT0KxzM9sCa1PayjWL2SpGi8u0mHPTXGK72gucm9tMuEvSa2DT48z5u88JsjvPJM67xdCVQ8If/tPfEJ3L0rI4+9AoAXPV+KQjoJNWS9u8CqPNQ7HL20UR49WCYtvdTVfLuBoay8IxUAPu/2yL1dZTQ9bwTcPaYpNz2dmJw9TLlJvNKwBb1x2O67aAUXPJHhxbwfhJu7PIvCPZNvKT4OOgO+ySbPvSOtMDxS+VQ9QsmfPcnoXjwuwBY9qX0EPlyCljsy9n884B05PRWTPT2oZ/09mSjZvD60izxoI8E9dJBnvejyQzy2YgM+F1SNvFvElD0XeuW9gUWSPUyqMjx5jea801OTPeBfbjwzXJC80Be7vbjmpzvMXpY8KC8HvoF2kDoZVLQ8YdCCvSp+JjzB1pi9Pkfwvd4RMT66Iz08KOExvVI5Nz5SNAK+7pXfvUeelTxszr+8zlntu2lekbxl2Ea9B2CcPDFcAD3T5qW9xp71PRYyYz2T0sS9BZ7ePQkPgL1Y4RS91IvrvTJlmr0G2+06e8ZgvceQ6L2wkCe7QnPePN02Q71Hbb8901iHvGGKjr2cKY+9s+uBPUuGAz1WrGQ8UhCNvfjXhrxqXww9bdFFPZYFyLxti4K6+niWPYvvPT3nm9M8ZqiPPeUzbr2E2So9QDhWPZL0iryYzp49NJNyvXO3VL1cfwA9PLYPPkIxBL5daMY9CgyFPUnUNL0oNhS9bMyOPFXwYLzkgxy+15WUvNN9bb3JP8g91DghPHcSAr3MrVg9sIu3vEqmOL0fCEa9CHJYvDLdZT24QDo9p77vvMw6HTxQFyk81MnmvcW1LjwfDWY88saPvYEhFrytxC89/eZLvV7R7T2NCpu9IVElvU2CY70GT689DP7jPZDFrT0hY/Y9DObVPcVSm71S7IU9zcf3vIBbrDxVXYi9W4FrPa/RwT1etCY8egVTvSuLsT0OxgS+DfWePCVC/zzMyEW9cDeDPVV0br3AuXU5Yf8hvXzNqzwqhZ89k2klvfEmhr327qE9iAjkPLhHvjtkbXa8oE+APadH7z1/Q+G6ZFVjvaORjLvNsV29d2aAvGwdID0qXTu9rLFaPd08Sb220Vu9lubavPzFvL1tNsw9u9gWPW/Tlb2xcx6+Fm8WPvXzHjn7q8i8UzdmPbtqTruFyA49cf0DPo/n6rq7mQ674EmuPMS5Dj19xcC9ejwCPZazOj1G4As8ivZMvaHVWDw/iuC9d+hnvbmojby+CWE9zEClvUbk3LwQKG29lmmePYBRdb0NgOI8gwlrveeoy7yn4Cu8CGEVvSjz2zwZpms7YaqHPcvCtTrU4Ds9WUJwPI8iaj04Ka48fx8TPVGutz3guye9/KFfPLscrT2h6Im864YBvYpaDj6lVN+9H6OevAoPk71w10y941GROqNNub0BuF49zXOfvKA4Ub0Panu93MuAvWRnLDxJiCQ9xUAHPYCt8LzKC/I6m5h8vS+2XLy1/nE9/rf7vJX47DyHF8S8Nh0kPYpcGr3ibZU9vo5HPdXPHz1bS+A85j9OPSW+orv98Zm9mOyqPXARrTxd7BA9zzeovX2xvL17PPw8lYCjOw2ODD3OSFo8MP2kPbPnsbz7rKA8/oCZvNzzory4dMM8skVPvUH5wz1lD+e8pGEHvZOESz039Zw9ej9AOwhaPjwhBdQ7WrKjPCxbLz6T0TC7SFygPB6CdDyBcWe4H3UIPe0doL1lh/08M/5QvUW/yDy3ALW6xsVgvJyRdL0N8wO9D+M9O/p9UTz44hA+44/rO96ieT2eZpW9zA6ovc9iQb11vis9LyObOyOdFT1PTwm9731XPFbMmD1uH3Q9NhpKvH/oCTwGMf08jmsnPTjpwz2tuLe8oFpZPQa8gzyFXrC8BbEzvETr2z0wIVK87iGju3DiQ7yF7Gc8WAomPZ/jCL1lw5O9yNOgvIevej04cwU+OXOkPIvTuz3JpUg9Of+hPYE467znkjO9MhRQPc6Anzwg4We95uBYPaXI/rmI6l09pMrzPN3Va70KvHA8ODN8PfibBr1i8J891qaQPSgInj0kQ4q9puBxvOQ4uD3Ke4E9/eMfvU/zN7tO9J28+VVbvXfaMr09IIM8j7TtPfwrRD3UzbI9szGNPSmflzqaF9u9qugZvDffjr1opbO8wgMPvajnBD0Nvds9Jg0mPeyqoby+KAe8uGuPvVSABj2CY8+9WXRuPXRcubqBEc48s/OJvASV/jwp96w5nAcNPY4+AL1RszQ9xbM5vYplbz3eRVY7haYGPomRkDwz1FA9O4qjPXuv+jzvTkg8WfAGvXbjZ7w3SIi8PbMEvftjmb1a3aO7UPWBvcrphr3qrSm8SJuovLxPk72FUGq8F2mzvbL9iL1SgYK9kvmZvQ3PlrtmFNY82NyRPSSoq7zbW/47K36fvBmFIj3R6gK97q0XvXlIzzu6nG09/6oZvQgBJj3zPDY8B8QdPTV0ez0eRQu8HqN5vdxS17zR/ai6P6gOPQEwSzvzak69yqtcPTpBtbsAJ6A7xPVqvEFfm7zhTb+96QW6PTPwu72WH768meseveFzaL1RhMY9cO6sPZ+b2Dtb+bo9GsW3PQz6gr0B5yo7YsoZPhey0LyW8dc9MbkSPOIf9D2AgEm8tDy0veBvGT23jom9X0fuPVxNUbvJV5Q8dXDzPGYtAj1qXHg8iUwovfKxjryxRgi+T88ZvGRkRT00hR084fZQvRPhYz10jUo9/GU8PdR6Fb5BFyA+FPjzvWMfpD3bhEw9rWH7PCWKqjvY+oG9xkLJPcNpnr2ntrI9sxuBveCdfD3Y3z09yg7SvNWymTxmOiU+JlyavYXN/72iMyi93OnbvSxrrz1Bkpw9e9XsvVa2Hz0RCso9YweYPe9o7ryz+zm7nXCevM2yir22ozo9Pr9tPfSJvrxb+D29Xe3fvPmJXDxsmBM9eNtePSg9ub31zkk9WZwFvFEZtL3JcIA9oRNQPcpFoj2zxCq7UtGKvJIXEDxWwJ09KpwmvWUPWzx19p+9eAIKO4tfkz0X9GU9FiOHPPiUEj0l71o9Q3CvPAigyDwQpEO8dUtlvcuhRzy5b/q9zEYtPbRwTj3csKm9+bYUvZTywzxiN8u9P4yqvb+3C70KNAG873n2PZ/ktTwWrfa9z8+CvdhcQL1r2lS9r3+bPFrMLb2dpXs9g6zcvWYW8TxI8Cq94nYgPW8zzjz7Wd69iUWHPSwHy7xZvxG9zcotO3HkCr6YGsY8WMMJvTxUVjtV+0O95sh9PY3GxD3DdLq9ivKQvUsdhDxiP5e9pShLPkj5cL2TRqi8hcu6PT9smDzmmwc9xSsJu31TCz6ZzqE8ERlkPZZ59DzYLOU8x8oFvVKlmjzBtaO7Jpi+vNMqBD4iece9rZlmPRpG37yxTsm8pD85Ps6BsD3LQEm9rsFEvXYAHT2rQ4A9PmE5vcwmZr3eDiY63VGGvZpqOT3l05y9h4rLvPOVGz2kBG87WQLVvdBEYD0cHeG99H20vf5hzbttSQo95FEtPNMU6Tyi/o28HBgxPJC6yzxktDW9wsp5Pacg8z29mLq9PeLCvM37RL1hIWe9bd3PPPVw0b04u8C9nTW2PGvHkj30rli65esYPUQmVLzilqE8T3jGPW0PDj5nKWQ9ktWhvOAzILzwe+y8eM+kPRGPxzwSOxE9tKyCvN5/bz2hcIg8sIWlO0Mh0Lw172U9BeYWvZnSbz0we4s9/OrbvAAppDx8gdk9QTeevd7Fwr2ONlc9ZAjKu7rsPr3AI6K9H2ulPcdljjzewoU9F+2ivct17z0790M8JXcKPX6RFj0zjSe8PIr3vCWaSr1UXS89UPPxO0c9ir35fkk8rIvvvdLwCT1Dbj47GCDLPG7tUD3TtAE+nlToPUpWcTwqcQs+3fQOPSAfzT2amZa9iddDvZ8AgD2sehY9/rjWPJB517wuSAc+fkTlPQ7PDb11OrS9qm86vGvsGT3J+NM9I/M+vTRQJz7vAwk+6qSDvMrElD0eBQM7DEcXvVV/3z00oyG9EgkAPWhR1D2RjhC9xxFlu3XNBj0cjm69RXmsOx0b0Dwk8aO8kWJzPJqT1zyl5gI9iLecPA4qwrs56hq+TQ3LvCQYOj2PEmu9f/YAuwQN6Dx6Qxy9O42mPXRkJrjaQpW93sWaPcg/Cj1L7Na8DB3mPQKIpb23Wfu9VysSPTI2wTu+3YI7UHE2vUcXZ7v1OGC9uhtfPBhlbb3vGNY9zIeUPZwburxFpug8LSIavoOFjb30QVU7sXBIO+Fa7DwY+Dy9VzGsPZlUJz4sLL08UmWeO/Vior1Dcz49Hi4HPqpvlb0G+ew9PP4TPu8IiDymvZE9fLDtvJn4c71rQpA9FoizPN87D7yY0aY8mSI8vUI9AT0apTk8SBuBvflHBz1+tzy9te0HPcBFgDyb03G7FEGDPQEgirzhcbE8yC+vvZMZmr08Nmk9zjNevTW4oL0tbhW8W0aovaALezvPOci9j1QpvXvM8z3wq069NV0FvhjN/rgGIya+5xmJvCXraD2Ha669F1poPfT1Ij4WIV895+3hPf0mGz4rmLG8Tx5rvP2AmT3kRuE55mVpPduwmrx3QIW9C4w2PWdplr3FMDc9eaeIPZToXz031rw9PHOlvZ1LXr3qnNI9u7MDPZ8ijDwzHcm9jSrnvTs3ID47yDa84nyKPfpawT0+DUE+QJ7IPXJSD71Nwnq8hF6Pu/38hzyz8kA8KZtePBA4ED26FhK9D4yqva7RIjxV8io9i3VAvU6Ydr3ftcy978SaPVqVM704MDY9AJRVPFpu1rwwJ8O8ick1vV/4h70dXMe9YKp3PYfgKT0lHyY972WyPaKwRD1/GjI9fLgFvmbVhbosbKC9cTAWvsvxdz32XiS90sEOvLF8kDlU6w08AnVUuJC8nz15C6C8t8IHPFJ5IL7aloS9vp/4vIsEvzzZgxW8CEXUPe4kXjvO21u8EJymPVVK3bzOc649hBXQOrc4rr1fblY9bWIBPo1dOL0mLm09GYhfvYEtqz31uww9PIT+PAedorsDxJY8RmEbvQwWhLzqL749O1n3vMn0kj30O6Y9KnkxPBlKh7znk0Y9Diu/O6qhBj1wdUC8SVMWvWUTMb2W9Wo9XoVgvUcErTxeCS88Mvxru4YiWTxNdhu95+rmvJL3jbzpNW48JxvSPUP+qTriu9W6QzKZPRxmZToh9XU8DXDDPTZ1pj2rHP87VjNhvVUjqDwVzQS8DYEaPQ+KxDxzHL48SbWDPdHG/j0bYUi9aV+0O0f99T0XMVc7ckYWPkxVmD34M3e9BqmJPMbgtD0QNpq9RLqMPa3Qwb30EuY7MPOoPZla9T3C9+y7Icg/PQ9w2zyLgiQ9RCtrvdaRXT01wlC5xDOzvVu5pbz4WcO8I26+PHieFT2yOlM88/qGvSLAYj2tZ++82nXxPUorMj3htJW9eaXhPVWbUj120Ts9+vLLverahDwQmHo8GGnwvb6eMr0uGyA869n1POKxAj5zonO9EAE8vYDM2DxY56E9uY0RvrF92j3jjw++4U/5u7pe8zxMAtS8jENJPJTHD737pei9gcAsPU7TwTqejzo85kOjvHT/Pzz6/KI8cGd7PPUzhr1SHko8uslCveSO0btiXa+8XuM9vavCQj1GYy09irqcPOD8vTwHW36952X1OxUCmT0CdCS93rnBvJW9zLw2AAS9Ze0/PFDZsbvWJxu9maJVPFKJRTyNuOs9WClAPMP5Gj0tgko9OFW8PKvNfLuFf/S885NKvYpmkr18HZ29JCYAvdM7gD05uD89wSOGvWTj0TxALhe82uecu+WtiT31Sby8HcTAvGsNWD0ZHha9zn+xPQy3FLyMkbI9YFqUvXwqWb3HS7W9Gs4nvU1qCT0rVeQ9ymzJvAoyojyfk7694T4svGiOpz1UKMK5ijTmvWz5dz1VK1e9d6P9vWKLUrs28eo9YTFKPZYQFD1APOg7PW7bPD+UhL1+8ce8usP6vSp5ODxgoZE6CKKBPV+XFL289YQ9Kz9cPaAybD15Bny9FFmLvfQONj1Zk5w9lc2HPDhT8jzBshw+UzmEvdB5Cb2JuAa9JwQGPca2gT31jF89JTvePX8yYDz0EZy8LjRTvHdHX71w49e7MRf+vD8Sibx3R5G9IBBsPR+fjj00Q469EYl2PPYe6bz7mvw7kL6OvAwssTt3zYm90AZrPVUS6j2T+JM8+uUBvUyFuLtB2N+7jBwrvQo6070x8qO8CoLMPVb3aj0xGEO9UcpBPZSKg72GBh68PY1YvRCEojp0wI88OaGLvTP4qLz9B4G9JJZrvRa8dz1WqLI94xChPI/0aLw8p4I9KEiXvQ0NADk6X2C9g74cvCPVzrxB3TI9jdsoPSiwAb0xnoo8DBwFvYhxGD4Ay9C9fCIXPaWK/Dxgick8QpfNPVjmgTwkQYc9dQrhPLbdyToYf8q916QWPcLcw7xvzqY9ZLWOvfKyVbzxl+48YqVCvP0FCbxejBG92/SmvccITTzYr/O8hntPvVtgHT3NY449/cM+vRhaL72vxGE9BSOLPFFT2rzAa8Q8jiiSvK2nHD3Ogk28RB8YPIM9970sB9c9HMWKPSelGz28EHY9QyyNvY4YNr2qdqY89YhHvFMANbxLkjy9MJDyvcvBrD1dz0c9PQUNPVKMGTxLORa9LF68vAFTkr2dvLc97RGLO64+n70iZ5u9IZojPUO52DwaHjU9wJ1EPBjWrb0ayYu9FqogvGAkcb1DAlA9NDt+PU84XbxbghG9aC9ePdJhnz3Lf649BtGbvCEchr0X/z49oa4qvbQGs73/rNK8htqxvZg1ZrzroWk9qV4SPduksz2nFBA9uhEdvdIcvb0lOkC+zbeQPFTOrryxjzs9O5RavVWgxzygmRS9knxzPcY/HD2x94O9HNNpvNzcur004CM9HU7EPS/h6T1RDLA8jSWAvXoWv7zWd0E8MElovYdVFLwkbe88ZSbZPIc9YD1ElxC+DBp6vX/r7TySGpi8WnHevCdK0L2cOK685/yLvf5ehj1znpw9TwjRPWJEMb2KIkM8wPPPvQKepL2qCjQ9ZwZBvGUrZjvMPmG8YotNPe/8Or09Hgc9C7EKvaRbSj3T8kI98KELvetjJD0MVC89ZwQWuyHLgbwelQg8Ux4SO7b/Dj750mG9G/o+PfcWsTzYlam7LPf0PIsbMLyFxd+9UNEfO20K3LvCf6a9jZPzOwLk6bw2YEC9O7VHPRHuDrw7uiq6UteUPVpxCD7WmVA9kx1bu5SCRD2Mcso8LukvPRaI3b1U9B09/EzvPLBngr3CCiC9ND+zvXKXID1dpy4907DfvW7YnTwwEoK9ywGjPdphUDzANT48tLNEvVNPYj1M46y9DbukPV4kBT61aDE9Q14QPT3bNzyfX9C9ModfvcA9uDxNqKe9pLequzN/Br6KZUQ+40hmPNbHdbwFqTA9n+hCPYNXyL0+2cE8ouqYO696lj3JWho5XptKPHzP3zvMbo+92WqzvQIOxj1ycd49u4hgPf3An71XXYe8YJY+PeJrxzzMDIw9xkzSPUrm9j0WVq29tVBTvQLW9jmuMHC9KVvKPd+urD3mJqi8v0wGvdx6Vz0DdYE8Ls8qvfH8nT0psiu+TUXUPSokfr2cCtA9elcoPYzpNj3Eu269+gOCvdPYOb0Wtj07DM9HPRVGmz1yQC29UDwsvYvD2bwyn+c8h7kWPZoujD1IzOS9069QPIuvbT1z9rk7TzSrOqEYBjxP4vW9EhyBvZzHgz2+uje8L0CfPXFgmr1QS7k9PVSJPT6ENT3n1Cu91ckAvVevDb0HR9W8fQH+PLKeIb7gamA9/zQhvDNlWL329h28tdIWvXuk/jwjddu98410vRkqa72V0oU9K70zPNdlBj2OJok9zk+uPbwKXT0a9oW9ONxqvCVgsT3N6UE9MbrOvU8L17wifQI9OYVSvfZ9vbxdcQy+csN+vZ/8rD1vPJO9xwMCvtx1VzwyfhU+Y8w9PSA9ub3jTkS+XjfWPGefjj3Bqqo9k6HZPXlBHr6yZJ29QHRuvVVKQTxny+49q1gcPs0e673X3Cs+W3savs4RCT1Mvii8XGRMPRectT1Hgno9OhBiuhb0IT2eelK9n2DqPWCGBr14ljW93LjsPSLiE758q1c9+9O7u6sF3bwQ48a8aNizPEVwG7780Eu8RisIPYpmF70zxjy9pPPAvQfWOD2UX6a9Y/FIveA3p71AX6y86giyPQiFv70f44y9AUO1Ose/BL3cRoe9ZPGxPaxHJDsnL2W9f8/7vAHt47x3ijk+OQ0BPvlMBr3sLMo9dmS1PLL/oDy9Ki693jQtPSbrZj2UgEs9vFxmPS0r/73RTHA7peM4vljmsD1UDqa8IaxrvPtRH70f3Jy9+BGGvVARibxumYi9E2oLPpEum7vpLFG993NRvWvMLL2LrVi8aOeAPYQRrbtmDTs9vbqEvKlEcLsscyU9aUbvvOVESbzFP9K8f8dlPaO3Rr0utgi9MgosPWDNF7zv5sw8DkpgveDLbj2Puo09YYaXvF9eiz0QFKe9fN4QvnrsS77AMEO89GBhvUiSLr0CwPW9QyQNvVZhFT14/709kIMFveC3Bzz3caW8hH1PPayF2LxXWQu7jNdDvEOURT2HoK+9fCHAPI9iM73y9S89B08Dvb9urTzA0NU8aWPWPaJpF73jGa692kbRPIWBh71xuwE+DuRUvaE36D0KKkm9CyccPKkkNz2l1VG8StwFPcyTmz02CWw9KxclPb8xoz0u2Y88w40rPcRcP70S3+O8JMSJvL/Rv7zyKpY9JKthPYxlab3lzMW9ADwrPXknDj05Xa09xCSCvaSiyL3c2gE9DO+JPeA1Tb3s5nM96wzfPeWDWb03OzE+HHf/vIRTP74jkeC9ep/lPQ/Bwb1A9pM9pE8tvGr7x70O/pg92ORGPYPtx7zVYo88V3u8vR+2iL1xQLK8RhoHPQCqpr2f1dY76eggvJ9MBj3Y+gM9lD1JPfLt0bxZt0G9tz8EPdrg1r0iTuS9jXU5vZV98jz87dA7FyTLPUsDXjy980o9jvx1PQChNL16DWm9vkQLPszuqr2UjWw9j4+ru+uK/D2A/TY6BwFDPRzhHj3Ayng9pNUoPXFVnj25YUM9xd6bPfJZOD3V4629y72fPRpaZLzGeX+9w4oePS/WgzwvGcw8OOdXPekD/L20zwa9ptsDPbP1gLy3cVe9RKUGPagvm71ensQ7W3qsPcqcv7xfCv29l1Ldu3lB57z6wwg9tNTNvS7HND3pM/Q82iaJPQIlYrvq2CG9U6ETPed8Yj39lg4+d41au1SOcj3DlVY9SiAAPQIskrybi2Y9mVG5PW/dTLw4xFc8XwA6OSA2s72OLD29zArQvERggD2cDL69kc0gvYcoW71Kpz099QCoPThTgbu7TDs6wRShPTP2Qj3um/E6/RKOPGBW3L3ddzY9PQ2iPH7vjryrYQ2+J7ivvSfRRL32f6+9iArIvc71o7ssenE9SW4GvB+Quj2vpes9Q7ghvbs+tTz3+xg+wom7vJVf1j01rpw996m9PTYBRb2aO129EJPRPNKNwzzlZtO9QjbLvdBzWDuOaqI7HJIQvXE9/TxTram8qbQ0vG2EEj0nutS9f9IfvQwocL08SBE9Qtx5vZSm57s9s929oLIFvZDMkDx6HyI+ajPDPYNooj16Drk9mbftvXQEm708XJg7WqmgPWHk7Tz07YC9T2jdvMzW4Du1bUY98JxKPS3Qxj15OSy96xb+O2Qgkz00NOY7lRMSPTBgKj0LNcK90Cmgu+Q76j1DMU+83wscPeYXVLzI04s9MgGEvAb9Xzwk6Lw7VWc1vPGTbz1RbQG+lEyYvEGv5LxjuJY8N4DzvD/6kb31jWy96CCkPM5o4T0ZD8i9VrdRPatd0bwqwFC9xFW4PX6oubxfrWA9zdZ+PILUrjzX0Jo8O3wsvZEoJj267fQ9u8q/ve8ATTyCPDg89EfVPOw8ezxaaui9OBmMPb+IwLrk/eq9IW/lvbeVAbw3Egu+ZPBcPUOS/D08xrY6lC84PkoCxTy6NZ89YewuPjLC3bwmXpI8s9N8PVugVT2fXtY8c/wIPmNz8z0C0OU90eJ/PenC/L3PY468cLuIPWQ6ATz8SRw+TBSVvZGiKz6Y+S09aCCDPfkuiD23HJE9cyafvWsJjj0GkQw+auUpO2P1Tb3jrxQ8Ghk/PV7+Kr1qX5e9WJtOPmQJez1DDPm85csxvvovoDzyyOY6TmrpvHUvwT1cdua9EAQjPuWcx72pMM48M07SPHET5bwnYqK9jl0SPir7YLy9y9i9saH1PPTaij35dp+9JIe/vESwFb5W3TE+6cq7vFPOpz1dSZe9irdGPWZDur0YPuO8/ZpSPdVGsz2V1Bi9Qh31PIS1HD4gKe89OzbgvedQ+TtVQlu8ScnZPd2uIL2k5pQ9C8DePcTSPL3awKU9SzeKu16yrD0WRaA84Yw7PEQ0jzqtFyo+Thl6PUcG5Dwxe5S7Rxi9PBDv1T15PKS9SRkGve+CbbyGmQ49LIADOjN6K71TejA9UKCHPImdkL2VgYA8H0QKvbnNPb2MFC89XuBQvRFvFr1Tgoy9Pk9dvcOZ8z1XFQw+e0L2vbPznz16YMy9WU4jvQjRoT2TjhG+5/uvvL02ujwMajm9Zd64PfuqrzxKsG+8Z5SXPRPxu7uebRM+aW0yvka+Eb41n7G9WhFSvS0tD72zjQq+wMc4vbJ9RL0Rj2K95IHGOk3oEr55RmY96JUhvQ2Q4Tzolda9+HFhvGJOHD43sVC94GDYvVxxez0A+yk+6R+qPYjn+z15Rt88KBVSPZSZcT2CAAA9JbIOPmR1zTtWkFA9rcoAvbcRAz0lEKu8lrKKOV+Jpb0Nit873wr7PZxZob36dEg995jgvQkWQ76pFQG9qM1ivYIn1ryqPhq+VaUDPqiGA76LEbM9T0TivXtG8L1ZM4U9H3NFvuMCAb7qai69h4qHvZsxtL2t39i98qQ0vdBOnz1QPBI+nWF/vjEE5D0qVRw9ug8+vTixjT097wq+TWU1vsK+Xrz3oeG9L4LSOylaTD6dD8Q96uWNPosDKT1gGiG+WJwxvbTaeT0Bk18+z64MPTxxtj3PywE+Lg6mvd3yGD0VJXo9Mhj6vH8daz1efRI+jK8GvseiLj6YfQW9HdxUPPRI/z0AGKe9+j6sPUPhK75VyMo97bRavU02hrzFKPW6BnDCPVrUnD1lahq+3mAAvpKJ2z3+cA2+2d0HPFnSHjzOXB++R4YavQxCib2001G9WyRwPiSsfD0Tkba8UYdSPSNRcL6gyKy9/nuYPX2jTL6Pjvc8nmM6vdn2dDwOJZI9ry0APqFzirtcH889P94FvLgW0D269Qc95EEovpDmMb6x83+9Ojj7vTUy9byNpg4+PRQyPv9bXD4cxm+8N8EXvt+3q71oYSq8tIYPPsmTuT1j7HU96yQwPobe1r1+LuI9bQZfPfP6w712x6M8FblEPh2aA77kiYw+yKFmvMHfyj3BWtA9A894vQ/JMT0DilW+SGWCPfM5S70+w5u7+onFPdGjWD1L3a88FhYSvpbgGr33/3c9qA6pvaSxKr0oJxO8lhrWvWBzNzxEmhG+2H2MvZa3KD6TIJa9AZJHvYY1HT2n0TW+9M7dvWac/LvCPHy93X7RvLgaDr2hFH+9b1n+uu6Kpz0YZBO9eKx0PQwZ0D2FEMA9l51tPIDe5b1/oya+404QvqlvNL4IBQG+GxobPrjDVD0vVUI+F+w+vS+4A74aZ6W9jiwdvcBK8T2NYyS9u3CRvSqcEz5Vhki+e5eFvJiUors5gF27JigAvftp4D22eNG9vkwjPjbLJzuRk8e5ahcEPsiYkTwS3tc9I//7vesOBL68c9o9mVSqPYT7Uz1cB7G6jMZSOmK3pL0k7709LlJFvBb+8DgA+ay9XwnhPW/iIb1jfg2+L3aUvCMKhDyvwP09Un+JvSmAkTtAPx08hhmCvWJTUL3UJow9uAgZvq3s0D0aVM+8PwtCOzUTsz2MZTQ+mywwvTuc1T23Yti9bvrpO6x2nj0HxRE90dA3PdRGlb3RBNK7NHc5PemJV719QJ88ArwBPkS3KT7EsL89NNW6PEhdPz4CNAE9mt3wvJunyLy18WM8x3ZzveR6g73ZX6c7NWJ4PW6+rj1ToAw9X4LgO/JVAD5OGIq8K23DO7VL+b2Tji29Xj7gvfWCmb0wm1M9U+uBPaeEiryXo9q9y9EUvec+yz2f37i8QvopvYYBfTyXP/S8jZH/uyF8Fb22FS+8E4bqvAA0ZDxXlKq9LVKnvEeinL2bDQY+BC7uvWwJ0b1Br7Y9GwyhvPfhZ7yeJxw84yw3PoQwWD1WHwU+i0gpvXUdwb06PI69OwBbPau6mD3KACM90TiIvRT1ZjzNiGq8LlUCPna/6b0GYsE8O1aHu+xZ8z0ewdC9C12rPd1RjDx/K7U9bhPzvQDJpLy4ISc9c28iPCwDLr3Oiaa9HNsWvbiWbr0Kfrq8w/TGPRG5QrzPh5i9NUxVPEdAYLw8pIm9OaCEPRHYYL1Ktay8XMMpPYXTPj1PUFC943PGvJYHOj3SrIs8amflPKE0WTuEF7k9A48vvWeQeL0Sl1Q8avOevSDIfL0rSOs8fCmqPXMgfTwsZpG9mvCQPFb8hj0a3D49uIejveRF+Ls43NG9jUI4PHeGmT37qDg91I62vRnRKz2ykiw9CyxDvQs6uL0HUES8x6UOvU7IujrvpZc9dSAUPQxS3zyrOVG9QdOYPCIbLj0hnka8M94wvSVx8julRQ8+mWq5vRSkoj3KypA83ZEZvQ+az7zk8b07Vw2WvJGQzj1UlZm9+8OUPXs8ZT0Rv489bcJ3PTOjAL28a6G9+tiuu38qcz2ir+Q8wTDDvaOXAD3rEVk9r98lOqn5vT2hSHY8L8NvvfB9Ab4VO5K8oGM5PftTjb26rV+8HsmdPPfuEbylDum9Y99WPUPnNL0kCa88N1PAvTAppD0Edua8e9NdPbbcaj3LjI89A44JPYnpGj4dMSK9LX2WvJtjRry5/sW8zeq2vc9TQD0g77o8LX2YPU7tLr3kzww+Z9MPvYcPoDzvqAw8OMaQu2pfJz1RmTq9GCwVPZzrFL5cwHU9JlKLPZrcET0FH708ZKDJu2jntL2mbQq85jaRvUR1Vb3QLgg9fFQPvfGhqry0ty09RBM6PVk0VDw3xkE9NSHmvLiP07wzZaU7Llx+PXCKjDzINwm9T2MmPUonNT0TUbu9ObrAPF9FGT1Nl1O9mYLUPAlU9rvFBkM9lt8SPTJ/+D1xFcI8wKHFvdfl3zuz+Fg98FXKO3G8mT3r81E71WflvMw3xz0b/3G9kD6cvX8Cwjxoh1g9XiNFPOSHiTvjiBc90Rv2vNFSzT25HUG9fhKovXhGz7zJEhq9J+z4unCOBTz0bIe9Fbi7vQfFC75/sEq97MLkvCvfPz2jLwa+MBIavQnRdD1vliQ86saxO8gl9T02t4I9RNQ+PfIlrz2pKoA8P2jRPTyTID0TGkO9mEysPfneaLxfDK+9J5C1PNcfSrw3I/I9OiIyPfUBIL4oJvi92UcRPAckoT1VTYE9YSmHvXQWibyQBw69BYwnvXX65L1L7g8+BJUvvZP5Gb4ewbG83CNYvYMwyr1EBTG8CW/ivcWEFz0MeD+84TafPatmGD6Z5pk9OuNfvTUs1DxZaGi9f7JtPWYpjL28RZc8/xoCvVpXlj1tog6+b1cYONfc0T06erQ89Pq3PTh03zy8kL27yXQjvktiUL6CLoq9nfBJPVG5M7tNz5U8Y4Cevd6FyzyGHSC9sUVAvaCv9jxC5z89n0m/O8x1iT2FBii9q1qaPL7DMD3u0nU7WjOjvZ93RT3R7T09unndPXXONb2h3g8+kF7dPQpJqL1COY+58b4Dvkldaj3I/WM9gCChvScOTroxeWU9dzYRvteCWj3vi/09XF9PPJTLA7xlki+9A/+pPV4DOz2XpEc7PTk9vRiT9jv4Oog9jMY1vby+AT0ZZlc9KIM5O2V1fb0L1/w9SqS4PT+HyjwV0hk9YD5Jve0lpz13vqU9MsJWO1RSo72fIvi8WcxCvZ+bkryFgqE9HGV1PI0bBD3fNtI85XCpPKHLpz10klE988+LPG9gJr2TO5C908kWPTIueD0gbMU8cZaUPI1Bfr0196w8mOyeO/QTH71+wgo9n7PmPKAi1T1Rrrm9mokjuatnar0Gm1A9CjKLvKOQxrxDDSc99WAtPQ1Xar0Qq+o86zZqvTvwIb1b4sW8b9/0Pe86ur2pWue9e9yGvNa/m7t8tzm9k/afPbi97j15dMQ9K1oAvGATMb3mN/m9x9Z4PDOh/L00Gno9SXquPexgAr1EmTI8ZOmkvNLQEz2h4WI9h7+NPXK8pz2ixrU90vCDPfOIz72o+Jg9vhHnPd6dDT1x8Ve9a0xVvV6gRj05dw29xW2gvbQ5BL7Cjc89ATmpvCmdyby01ba9uJLHPFpRnT3YEZC7iA5JvCtB4j3aJXm8aVGLvUG6gr0DG609DtmavT4XHLydBnQ9wzmPvZVrSzxK9zg9OVVOPTow+zvPSMG7A01ZveA6nT3kN3k90AsFvp1Pvz39th+92ZV5vH3TGT29TQY+ivl9vB9S4L19Loo99GmoPNOL0D3BIl+9LP3hvXcG/rz3+gE9bYTEvTEkND25kfO9vgYgvWrTab1HsJy6h0moPTx13ry/+768HgRjvAaikrxwkMu9yzVmvVTrBz1MV1s9E79sPVcSQj6ir929dt68PF9FyzxxugA912xgPSXKrb2OGkC9toZfPFUzHTzwlXe67fT+u1lF9T2IG2m9lG2DPcyRdr1/qym95SFwPIWZKL3qcAm+/N+MvDrWyjyllQo+cFRVPMI5FD05lJU6zEcSvd2zYL1JJPM9lBUNPgi/kr17GI29SwouPDBKlr1cOSa9i29SvZsK/7w3pVg7PEOMPWR5X73DPlE9HmWqvOoBvbz7Vgm+dEsvvYjj2LxMXC693c2WPWTr7DyLJZQ9/x0IvQPKKz3kClO9h+EPPKYMAD6xJM+9dLa2vIj00zwUZn09+hsCvbw4hb1b91Q8aVE8vbY6qT0Y3Ao9OZc4uzoHwDvRyoo8AyKBvDvqYb1Ag/Y72dFuvRe2h7tamz09fkjrPRctfbvTT0A98OfTOp51c73nYBQ9tx51umhBnj3I8wq9atuZPdotGz7ZEqI9VxJsPCSj2rtf1zO9Yvt4vAYRMLwOi5A8dyXVPfcIFD2dhxI94HuRPLFthb1hYmA9CsPevFZ+0b3SwgI93etIPWBno72CxIw8tGutPTwDqzx7YPY8FgoJvT+vnr1Y33e8pjJlPetlnry+GnW9BYcYPQVwEb2fN648L/kbvctkSj2RCWg9ChxEPS/dJL3FzyC+9UKkPVG+uj0F38o9qePAPIZmXr0EVaA9wWTuvA8287yRVwu9SE7XvVxjw7xQgGi97LRrPB9MbryCJLy9tWaMvVB56T3B0J876EuXvP5TjLtAiVy80xsYvIIxkL1ZbhW8vsNDPW+1cj2KZ266w12kvQOziT0EFRs9GVEKPXgOQbzJjkW9h1gAPtwDbT38zaC8zsGWvZD/K72F3Ue6ATGGPUz2vT3Fxi69TNPUPRO+QzwnO4u9dHHxvM1zzDzyhRQ8QF9YO+deBj12jcO9PqsavXgp07zcZJE9tZo6PVkkqT3sZsO85ll8upKmCr7oUjc8q+mquWRNtjyQTIg8x88svYeqgD1tq7K7DgWgPe7ZHT7eCjW9wZoIPYTK5z3pCse8WI/mPOIGZb2z7Yq9pmJgvHBy5Tyc0Oi8uCcrva41/bz5iFk9RKrEvGTEGb2lP9e9/x+2PfHfDD5FJ5s9wSQmvKdHrb3SwiS92nskvALgDDkfvzg9EvW9PCB9ib06Lbo737xjvR3NpDy4dxi9JumsvdSRDj05BRM67MaNvHmUHzzAESA9BmmqvQOMOr1ffus8bnEoPfDECL2eBYg8dO+NPaKZBrxRTZy7B71LvfTuTD1Aita9c55dvdAnGz3UwLG8fSvLvbilFTvUlRi9wTFWvVBpkDz75Cg8LQ0eumwFjDz1A5u9DlMAPvFNv7xdPpM9sIogux8ofb0rdDE9sGqlvaf0lD2MqrM8vSMNvpqoP7qcs829+KegPNGRw7tlNo49THHgudPP17qkPbM7z4aLPeAJKzt0tAu+1RuXu+35PbxegYI9IFncvKP1C7x7nls9axx9vTwp7bwvQls9bZsjPYW1z7wyKdQ9mAFAPaWqaDvqgOi87lqdvfoXyjtjsng96d3DvEkG9zwm2lO9VWmkPSE2DL0aZdy9m2aVvCxwErxks+g9wFlQPV55MbxL/SY9jM1APRxHvryYEuu7FgCbPN5tnrxApYa9UHZMPR82Y71ULsC6UMlWPMISursoUfg967BkPUyVFj0Z73Y8PlKkvJ4KBb63QuE8o89TvFEnEL0OM6U9VQj/vfrbA75S8Y87Xta3u7yWszx4Dw2+GhLFvXvVrLuD3tc87X9VvWp9tT1VNjo8f9kpvdfq4jxx3Yk9MGbgvVwyyzwIUDk700CEPS6pXzwlbOG7UtGaPT5TiLyQ8je8blt1PZIS6TyEIDU9xsRqu9xhyj3M71e8D09CPcxh1Do+yf+8GBw3vosyGT30QAS7MkINPb2gnj1ZbwC95hTRvfcHJ746uk89HLp4vY6w8rx4avU8E7JjvC4h6zx5+my90YKTPJz20zyhi8A8IF0YvIvEdz25u7s9r/LQO+s1yL2hRfM9D7LDOzFq5Ty4zqi9PDTevOOMrD1okcm9081QvHzqdj3FrtQ7SX7iPJ94L76M3ic81suPvWUwIz4g34I9p2pKvSXd2L32csw8ce29PYpEHr4uvhQ+fGk5PntPlzvDO1i8u+YPPgBCrD2NTZA9yrT0PZKNtj2/AiI99JwqPZNFID3pi1w9tZevPUWWgTvKDLe9G3eIvLrCvD1VOiW+oM/Lvbqmpr2xw8E8+OyCPX99er1RqGU+FtCPvbCvpzzm67M8PLLNuyFrOj3fcWS9hXuFvG3Ee7zf/Xo+vGpuPWzwIT3USl093ZZovUa5KL6eNQ09h+ZWvZ++pT3R3CY9WWUOvYpfbz1P2Zo8WNE/Piuy1j2MUvS99GbYPSPyn725eZk6OZ4QO7o1rL10N0o9NjvMPOz49rwt8TW9XjyFvb+IEr0td508vw5YPfZpRD3h24C9lo3IPI0LWz0ef9k9Q8jiu35bBz2ieIY6ECw0vQqV8r2JwhM9Fyw2vcnJ1DyAXm08WfaDPXIvST1CcH48/hUrPT9TCr4UKxg9TNItPUhToT3XbAu75AqtOxVOEj1ZO7q9O5vfPXkzaz1FSUc9n8/IO1k9ljqTHg+9htbsvSFu+jwFBBw8OdzXPHtppTw3MN27grpLvWPtZD1UmXO8xQzyPPVEVzyctY28g880PQLUCDxsm0c9lwWOPdnAkL06vhW9SSWSOnWX873nqVQ8ZZLjPNlOZb2H6RE960fWvMgyTT2YsHY8xeqXvWZAPTyOcjC83Fl5Pf8YqLytfig9/mlUvOAa+TzHFRg9TGyXPQrtQzxl9Tg90LOSPeiUhj3VIzC8fmkBvrG+kz2EaAU96npuPfaXwTx4o+Y9piDGPQ0AfjxreWC97R0evUoUzz0YXlW94X84vQRiFT2AeI29r+TavT0/Ez6qrpA994K8PZbDATwhctS8h/Y9vNeYpr12Oe48s1e7PY2NpT3WU9i8lDyivY9GozxI/Aw9MW8VvgFR57x0LkS8+WHJPSc+qLysFoW73DcavfcBNj3WvsC9XZcDvoYWlTuTJw69QZoFPfRCez1znF48EzYgPfU/lz2fS868AeKNPWWHkb3gtWc9S8rMvRz6Fz1agM69LLokPZPBEj4s9767Mrj7O9SF9T1xq4G90WDaO2fa8jwzbek9ngD4OzCrB73oQG29jDe1vJ3BqjytB2E8OSVgvcCLs70b9se77u0TPXIOBD2doiO91mfpvJ3Av706GmE9kzKHO25bJb4Opau9m1V2PY4o4Tz0vCw6RUjAPQbbSj3E95o9dv1ROMLl3Tw24Ho99sISvuCFvLnzDR295RFiPR61iz3b/hu9o9oAvY0XF709EyS+drBOPZkDhL3k1165d0uLvWKqvr0K/ZW9q5tIvQfDKz15nDC9f6QDvbmcKrukcFC+XT4avfFcmb1qo9M8bm6UPe5Orz3M7BO86dXuPL9hCbujWyq8xkHmPUsM5T1LdCW8Z63+PEiHDD5rW+c6FHMIPWU+oDzJEIC7OKCzu4wowzxL55i7Wunau06GoDv2W+k7wyGfPahAQj2VX4C8LrKPvbPpEL3ScUK8x1oNPq28lz2QHcW9a1EOPFyehD0qL6w9CFZ/PSeuwLzj1R69g720vclEXDt3hHq9lTdgPYO3tryYmMi9MBOdvcdWHL0iGcE88VIDPHbu/zxXn4685AbyvZsK67hLeVs9vR1bPcSviLzDW6E9pSPMPcJjgT3Mv9u8dkwJOz9Alr36sAs9zNDDvZVAiDwqtuA7SSWlPZSLcDzIAI27bucfvbuH4btBRNc9SNQiPVnDUz1T5vS9qYOmPTuSTr56YMy9SPZpvWE4DjzO/lC9OlGzvYyZ0ju6zk89LOzHvHnbgL19SqO9WvX9OsQ2vj0sj+c8a3pyvaHrnDwgxSK9GFcEvWX+nzzUtKo9ydASvXj//L1+lYY9q/2ivWhXgb0MrIK9A+XQPRccZjwunbA9Fu9fPW2phT3RD9q7nmvfvWEXdj2o3i08P3ILvR5fEr0NGLw9RNPnvcg6zL03c788A7mYPTLOfr3XUq09f2yYPeyV9j2H9bi8Gmr/PKFmMbzG8pu8/KXaO1Bpz73WLoY9KZwwvnNk+TwxcMa78qyxvGiVbD1xRg68JPIaPcfafz0QjSa942iYPNBMoz0BISG9qZOcvX4INr2FOY+9gWbevZk+5bxK/zS8Hno8PcQHQTr4eck92Fo4vW9YrzxJBk69y92RvISbyj0rfQQ+10kuvd9tkz1gTq49YOD9vJW3ar29Xdi9VGMGPV6fiT2B4YW9nDIVvR3MnT1o4Xs9el9pOxzQgr2P7/U9dzLAPW3pmDzLweo8unqqvYccAz0cWvI91h6bvCnXHrwmdD074/2/u8yBPT095pm9hfAbPfQzIT05/bE5TAX8PEwHtD2AKY48ZBOKvI1ms73BaK09QXU9PW/scr0K0Vk8wrSZPSBbrr2uexC+BGEQPebY/7wrr6Y86ii6veEym72N2Ew9nAEevR/JaT2VJ529T49svG8KKT3CDUE9Y4QYPWXcdryKHHG9dr1LvNInj71uoLY9UTKAPR3qM74fCxQ8v6/0vKUuoL1sQXk8UUIvPSDWv73V2ty9AgYSPVoRi7zZwoA8OmSqPO6Lmb2vewM9TIWdO4d5Fb2ayR09mzFkPa15yb0M45o9j2IavdGws7xzJcK9wxJNPUl1Vzy++yW9HCTGPWjF/zu2yak9IEI5PWFrCL5Il2u67oejPWD6zz3KT4C7019uvTZLnbyXFaA8O3NjvQlhnL0YUK49M92UPP4hNTzPxBC9fzUmvVO0s7xJVNY9h1hVPeTpFTzOsLg8BKYXPQ6PPz0hc5G8toP7PXnDhL1Fxow9cW8bvQCnuj0xSJy9DBPJPHDthD15lmw9mHYZvcymZ716rIW9xXWEvOo3VD2QDqi8+zjOvTIgnzyu65S75VnSvVRy3b2AjPo8bmPCvQvbn7wxft08VL99PHd4Ir28/KI8CpczvarpgbuC5F29bwV3PWOKrT3z39Y8sFcCvcppvTylC2K9QPfavAI6Uj0tAeu6fO0EPKZKPT3t9re9rAErPe0P4jwSEYC8f69gPfJ0Hj0eEH29yB/fPB8whLwSqUI9peU0O5cKWr1mi9w9RiwBvloP9D2d8bK9GfFNPVfQkj3nNQk95moqPeWsBbyHnVe9kcTyPTEP9T3tJq+9WNQlPF9CCj4wUKS9wbVLPS6S/D26HwS82eSZvdoQGDwVO+O8HXo1vab3BL3LEeq8JygSvT35qjqwVhc98pvWvFwS6r1kMrQ9B2eWu1MGVj1Zbcu7bL0DPRba1T0oX3I9HkxcPRNaQr5LLng8kGmwPCE7hDxIDp09vDvNvemCDD0Tlzs9vt4IPXfdjb0G8629xmSAPWBX2j1qed27RW4EPqD4HjyewD69Ey1PvWntv73GPFI9BqjavUz4EbxUPUu95TN9PFqRlb2lcYC9x1JdvHA1YDxnTEI+U36uPdaL7T230KE9MrbgPap38b36jxa+EytuveR8tj0GlXa8FqRTvecX9r1qxKE9FRIbvAK5c72KvhI9dAE4vXSUDby74749EdkfvomdGr3wH7O9aBphuvuKyDu6bbE9YAfFO2mdib1wmRK+WRcyvrcYsj1xsdK9TSrhvee4qD2QTtS8pP8+vTt+iT0xAgm+qloMPg+MED0pkG+8JYqpvabexL2MOxE+DfAKPS4X9j1iSPY72A6hvZup2D3wKZ49u40oPWcWHL3J8Z49r55aPf7JzbxqC5G8EWucPRN5YL1xAQw+K0AavmELpL3Pd/674g6HvTm9N72wP/k9ejiJPHoaUD6L1LY9zpTLvGAsfb3Hzw49K6A1Pe/4qjz1yoa4kTqlvSKrMz5/XAI+9JGcPTldlLxbqEg7QTOOvQJtMD2mTRa+KEuhuypA7j1Kmti9z4FVPXsbej3+h5q9qAgFvcG0yD2F4jE+oVaIvQjybL2GHAc+0oOFPX7BNz4fEHi9So7EvEj84TwWQ7I9UwURPRit9T3S1EO+SttJvVbdNb3pO1K99SEWPXL97Lxlqku8Va/FPFfVhz3U/+s9Sf4xPUyJAj2Q76g8W41IPXssoj15yPI9ksmEPB7mwjwCSzc901ePvXpA9T1sERW8A5/QPO3PKz2HWee8wamZPX790j3lfYW9O/GbObN+OD1qRsC98/VFvIIn0DuqMaG8nuQAvBxftD0w2fo9DvxruySLsL19aG49TAciPOvQiDsMjuc9OE4DPrejWjxjoY898sU/vXOcpT3oJTS9xf6FurKf4L1EAje8nJ1nPAczZDpQ9mc9YG+dvSrRajyVYIu9lk/8PRJdxTy0MY09O2hDPczh0TzXkz4+gYm5OxuG7jy/HCE+M9QZPa3eBb4zmxg9MKrQvQV7HD3BHJy8+GR1PQbxOT0aYtW8mFxoPW1i7T31dpi9kBjlvPIYVD1S5fC9M++XvdSIbr3+2c881WsDvjcO2jwdD9q8FoBbvbhsmb2MO8k8oiX4PP/7Eb2uaRQ+3a2IPcQPoTuC7Z69Q16kveR40LrwGCS9WXmqvR0EvL00cVM7smyhvGVf07ztaqG9wSW3PTNMILy/EiU9Ps3EPAs4R73Gabu95rvdvdDNOj1zzAq97U4tPYYlSr3wo7K9sDKJvVQinDwhIpM903gwvSlkIb2X8XM9sbdSvNGQhzxTSOG850YIPshOBL11BlE85NqSvXi0STwNlmc9hYRPu8i/gr0zw1+9WwUAvlum4bwsJQA+gHEDPg4pSj2D64i6vfSuvbrl573mkMA9MtSPPby8hbzHY/o8uJCmvVKGub2qB9i9zdQovEwY3T2bZs49TxiQPW4yvz1DeQC90FebvEtmnz3p80+9oDfdPB0CYz0OMtQ9XyYCvOeYdjx59m28kaUDPgkPbr3TwzM9u2uTPa70Ej72mda8710mvdQIKD3yO049xdx5vQ2z1Lxigxy9Zyj6PbSqeD3TT3e9aucPvhADoz1zdxc9lc3hvSCgWL2iVQa+/59BvVa3QT6ROze94dngvcq9pTwm95+9UGxvPT6Ft7wF9sq8wrOSvTkrzD3Rlpk9jUiYvbYeqLw1aAi8Ohw2O0DwUDwzkys9BDAPPKQEPDx+Cmm+/3kBPWj+/zsnGbU8U0N0PLDdo70gaRO+oc+0vWd5Pb1VunW97mRHvEBOCj4WLyY9PhjvPQOxjr2BsAQ9xx/jPNxyQr0V41k8VXXpvDcX3r1VEOM9f7lNPZhWbz3ysBW9d2DJvdWQhT1rUqc86rmlvUglP7xLCvU7c2WivIawET4AS3C9yOr7vZGZET2M7r88Iv2UvJN2J77iLnG9O2HePTHf7DzP8tw9qOL5PDqKhr3BSoC9vYkVPlr4C71NAaI9Sx8kvdHI8T1Bi3m9CyllPLhIHT0LqgS+yHBsPA0OJj7huqq7E5YDPkg8/jwGsKc9JmzkPbkMZ72k/nQ9rSkXO/BMa7tPzn+9CHs7Pul8kj3aWxw8pnA1PeRqkz0hB348rDQMvHSgvDvubI69NN75PdvghD19XNS86YOsPeJ7mL0l2tu9aG6gvXcORT2nzTK9jRywvX0HVT1str29jsIdPZkWrDvN1GS99CuxvV/do7thkNg9naUIPTrCYr0rJLQ8I8NPt4nnYD0XetG8gLnqPHaGor0U4gG80MfnOy/8Wj2UnaQ9Y3uFvbPlp719jVC9hxEXvHYU8j2+LSs8RO8pPEnjA72R1xK9mHdNPXJEwbwtyYc9ajljPT3NpDzZGOi8JiBkPecewDy29u890ShgPYiAfjtMiky82bGDvIXqa7zGDSs9sROBuyCdzD2yu+S8bWrEvNETa71NMIe9+cJTvrGG/b3LBZi8rTcIvGGygr1+W/c8Lq7lvdYMkT36p3A8cZuTPTSGTT284Nc87N/ePDl3jDyvESy8rpCiPTQ6Yz33IBU99JUBPVp/Bj76D7A8p6UjPaoFGD23Xeq92zMBPFKjCr27Vyi9nlmpPNnUED6mSLE8TvKGvYEgCr7JiXA9VaJkvU6dUD2BXQW8E1jDvXC5cjyMAsS8xLATvakEaT20eSW9ryqvOnkVzbesqMI8FbUXPln+2Lyc2Ba+BynxPKz2oD2Cwhe98WIAPsVUc734xYG90JNlPYyD7zztqkg9E3yzvHwubD2rsyc9Si2mPU8Qpj23UiO9uSwIvVYDIbwVCso9EhyTva4TID0tsfO9taMBPi3dOT1spMQ9ZT+rvTZLlz1GpQA9IHjgvbWBsjx7Mtw7Ep3IvS4IJ74CisY83abMvKM6DT0E2QO9JibSPXTdLrxGaou8vRlDvavwPD2jPKc8B4SIvCgoW70br1M8iZyzPPGjML1UI407Ki8nPh+4mr08ke671aC/vN1FC74apLE8PZPrPOhsFDwpJJU9Eb0UPELAIL6awBQ+K5UCvU9/tr07LAQ8BhsqPPG3rD059j49JcK9vYbcy7okwkG8oWqUvcTeLDxAbGM9N9lpvf5ZkT3gNSC7BgLNPVX2ErwekpW9jDIHvsHI4b2TUAA9zzABPtbopz1Nz5A9vmGdvXQagDwHj5K7bh6JPajrubvbyKA9/ZGuPK2+t71BeAY992fsvO87nT1sAT294ueiPIjEMTw6ICY9b4fMvFEJsr0Zxyq8gS9WPbnPLr0mx4c8NhW4PR1EAL4sh727zATuvIWxa7yQaBi+84mTvY6L8Tw4pQS9QLJBvuoAqTxX+0m8rZ3FvB2d07z9gBm9A87mPXcNNLzP8Zq9YExAPWuMJj3bkv68hTUCPYXVI7wvyUE87HGpPX68GT6+qc68JvBEPtjyvDzuPYU97GVNPuxFmL0/Gce9GlShPOjvUb1qcDU949ZQPabws73SqiO+q9n9vHhkc7wfv669UzlBPZV6fz0fiAu8gsb0uyCYhD1BiMy6p70WvZ5LrL05ise9kayOveMUNTuSEUO9lfmDPBhkP70b++E8TCQxvZcgsD0qpSy90jYcPRse/zx9+E49wQDEPfgY6LyvbLa8szxGvRItwj1MkMe8GLMEvrJv17yL37c9aCtbvfZWZLupkBy96gEEPczauL0ws/u8/i/dvStWXD143Lw78EuaPWlSfbwqC7C8W2vVPJBSSbwZgSC+ELLEvHIN27xsLq89IJYyvUL+ET7la1i9ExCRvaxVCT3DLhc8C9vBvKIVkDlH/308D5P1PHz6obwTgVs6GvicPbB3YbrpLKM6M+LoPb4FZ7zCndo9KPGAuy6UNT6VzAW9L8gsvE1NjDz7w+K9VxgzPSFfVLyA+pw9I72FPfqrHzzMHpY8F00XvbP7DD1ZVXo9Ub0dvUIySL0La/Q9yPWBPNDAM734EiY8RVrEPW3whzktSaI8XU46vW4mmbzW//u9Bns+PVeZwbwUQx6+UiQjvQnhYjxQpAQ7y5DvvHcwvL3rI4m8VRhQPCCI/L2gno29gkJ0vH+X9L0i5JM90aklvhP13rxxHbc9isXKOh7Iwr3/wCs9zRWdPIOt9L0kmT29ACqQvU49nrwNrcs93fulvZQJszqnzYM9u6UNvR22mT1LMxc9yJQPvFB2pL2uGKa9Z7JBuhh8grx8CaG9gX4KPZ+pzj2ynQQ+QHqvO1KK7Ts2VIM93TPdvcJjID2WGW29kxlnPFjD4b1+twI9RBSoPfGi5zw6W2O8OOqlvaX0nrwz5Zw9+hIaPgjVLbwNBqe9w9T6O8DafDpysaS8vc0hPJjxDT2ffIw91ITrvdi1tDwvT707rbaDPPV0X71hqnE9X0IXPfhoGD3995O9aEgOvrPOdL1Cuqs93YVzOxdaZrtPShO9fWk7PY7ZnbxMwQK9cGbcPWjmbby/IWC8tUi1PDSSrTyji1A8nnv9PYGbgbxdMai8gG6/PMcsErylj9q71n2lPF2C8j3Xz588UFENPckSOz3ngW+8zDYtPS89Rzwf6c69z0z1vd/0iL0rL+I8JFVpPQLksL26SQ09j7mQPCJRcrxxu8G9N5w/vXn3Jb0Nz528YXzkPeWG3D3goqi8pUinvfKrgjvOeai91DTavazkiT27x6S9TdAzvmrbAT3aLvM8zXXevSFdnr2mwve7fgaTuwbvKr1tNCK+0EeVPan6Oj2v0gK9NIZGPYATgz0rH3G9t01tvbs3wj1vCiO917CUPAOJuDyyFow9wWABPSToLD0FCDG9g9SguoM1Hr3yYBy8tEm7PeAEEz2z0Ie9A8cIPZAB2Tv+l1m9wOWLPdIBJz37xFu9l4GgvPl/Mb1VYq08QwmVvfb55j1OSAw+j8sRPAhtszy/WzS9T0GjvBn6mbsgEz+9yfbQvHQduD0V77i7GMLQPRO4H7ycE8e8+H3EPT1OVD3R7bG8qszvPJ4ZNT3a1aG9o+y/PT8ljb0Qq8c942h1PMBg/rthddi9SNv9vPNPbL0CzYw9J4oVu7HwZT2u65U7ZOYUPcj9tr05M0M9MCRevZQQUbsVu/u9tYOUPbePSL0hAtW8FyV2vRatIr38naK98etovTIGmj3/1iw9i5SDOgJgzDxry0a9Ld4FvSOT1byHFcU9NC8Vvu3Ng77xckQ8bOLBPFqYpr1V7I+9x/4AParqGj6dqw69l1sbvs7hhD0cvKg6+dHtPJYHzbvgGnU9YYhQPSorAT6GL2s9TuSjPAu0Wj0UX9K9po6YvZCHIb7eZj490mcuvf4PGb6KX329dXk9PRAQMz33h9C8HqR3vSvu/b19aRs+sug0OhlGjzxBQTu9TFw5PfhSsr2R5Uy91j9GvRlxmb2CEU890RIvvic8wz0Uv4i98V5kvE8rrj16KVK+cGqsPeL1gr0yopY9+/4avuj9oz25D749qWb3vVfOgj2N3YK9uDtbPXtaPTw3eyK9NacCPsqxjL0M5XE9ZYe6PW+Fp7xs4Qa7PktzOUhmz73vVOQ63NYJvgJJLL2z7Lg9LpkCPs/wDj5/y9W8uQPru/qQmL3AKX27ycpLvRNKqb35BQ08q5X9vA8oSb4XE0O9XW+CvRBpETz8CAI+0AQXvQ4Kij29RGS9BHwnPZWDHz38x6m9OeW7PZTbF71D4SS+3jxxPrsY4DwQtjg9AesmPQ9tlrwZCQ8+VRCbPALqc73xrc88vX7MveJeN71tf+s9J0HrvdDyKr3LSmC9OxMCPIHQ471UqoK9Loy/PTwW/LwFuLq97AWAvWerGD75u3q8dMaiPeUVFr7jsxg98kFkvdKART6ImQK+SasePs8dJD4g7Gy9RNawvZT2IL4bHhK+MZTHPVIvoLxDvSI+AyZDPrulAT7v/tI8sNXoPaAaur02LE8+aaqMvalhXb2Y4UW+YsPnPRdQNb1fjI6+7DSrvfkl2b1LM0G9SK/MPbCt5r0wr989GfcqvQiJ+TwLMLs9p1lDvgUBsjw58L+9JDxevmwJJz4moS49WzH6PQsNVb1AWmc7O11qPYzZkLwG1ju+0tjsPHK1sL0uQcC9DK7tPR0YnzufVTs9L4EAvguBbL3YXvG7ARWPvQqGejzw3Ie9ejLhvSzS571gVaY9zNHAPZLjQj3kCUG8bYYKvhqe3L21zDU+V86UvVsS7T0xbWE+6WyBvRLFjT1biZ29nTZ4vm1UrT32uUe95OZKPt7sAT7D+Ak+oPQavesjDT4Zvig9xpOrPRLZHr2uroE9Fr/au3BXCz3mfZC93XlGvofOo71vRcK9BVilvP3rtLxEY7u9ganaPbyRarw7j8Q9p9mSPVNpLb4fnLc9eK1mvaxEa740MkM+etWpvPpf87zG3gO+1FWEPR/AkzvYviQ71/UxvrnPgT0HRLo7ol34ve1ETTzG7is9ktwsPjY3UL4V2Lq8EU2xPQENB76PqGA9d8tsPeK/Qr5Zu4a9ED+YPIv7Gz7DGEw8ugQFvasyHb6fjQq+ERl/PuTFQb3+5Kk9S0QPvn7Qkzxqufq9VX/dvYi1Iz2zVy48/ZSgPfNLxj2nAt+7jdy5vEwNkzwkNrg9lSZ/PaRtvz0ytOA9cFGCPXcHx71xGUu+Y5+zPa2ey722ljo8wMb1vPsgFL0kisc9KkjxPDlRHLsdi209p68OPLOb3rvE8JC9ZVatPWM7JbxUusW9urQwvR3JFj09Ch49vPldvpK9lz1e9JG9IpnkPUCqa729k9e8B84nvQJUMTyPfvk8PdW+vSe8oT2uTrO9Z0xFPXTSCj12mF2+2epSvaOBuT1uOzo8ZIClvWudIj2Ug9G8AJT2PdveED5WAAm+H3zXvI5QLD3Gcv47JB6QvUYjlT2YkRS9bcOWPVqil70nJRS8d8eevfO6pz38hcY93JJqve/nzL2aam89fcHuvOi5ETzc8CU9mawWPYk+HD33du89xrOQO1ozCz41ZYg8RN6GPLCd4TxwMzU83X/AuroNOD3wp6Q9I2+0PccY6TttXWI8+MMnveft6LxEuWs6fwjPvCKEQz0Jrxo8yPShPVNQiL06FRG8ltrFPW9XJrwkjGO9QB2JvQQ98TvkOZk7W4PgvGITg7wdIBg8aX29vKxcyTzp2wS+MOFMO5M8RDwhP5Q9+Y3xPMCoDT17Fr68uY5JPcr9HTy7xoW9cQhNPWraWT1+N7m8gKK8PRlDzz2IjCI+2+Lcu8AluTzzaxU7AxayvTdpzT03JKE9s9tXPBtHoL2vRLE8qznjPeFqsT0SuLW8KYyeO40IC72A37+9awCrvLDqsDxtUQK85H+1vcjbFbzVJKQ9OWTXPV9+grzmH2+8P9GDuWOl0z0rSTk96TMSvpl/Hz2Mi3Q8w21bO4UNXT0ZpcC9WeAzPfrLl7xgfpy9OAh/PdAnhT0GAVm9kBMXPYqJ8DyxonA9HoZPvaPHkbyeQY08zR+8PGA07zzYC8895uIJvY4rbT2n+pC9Igg0u0X7rjyy6b+904K8u3OVYD0PInm8MeH7Pe08j70SvQO98zldPGSsqz0RNSW9QDNAuwxi/zy0UFs87KPkvNQOYLyKGGe8V/OnPBYHcD2X0CO99U8CPESn0jz6/ym8XAhMPWNGjLqrWGA9qSSwPO+T2Dwu1a09NotaPKUS+rwtVYK8xXVRPM0Ulz33DoM8j3yDPXGGpD19xtI9DfT5u4ViO7tfmxY73o+9PDYb77ynmZG9Aj6cvHHUpT3p0YE9K1CuvWN+gD0ZRLo7YvEAPL2sIj0HG2S9SIAqPdvdmryb+UW9K7J8vX2QQD2OWTe805SRPad1E75zSqS8E0mvu0f5ALyd50M8YGjMO5lJYzv0jYG9qrXaPRBLbz3pkPE8Cm6evK50vb0E3jI+YzHLPHNCprxogkm9zOGFvSVY+7xjXxS+AbSnPZ9bw71NxcU8tC2EPdh96T1q+P6916EmPS7kpD3deg09ArIOvrj7nbzv5RA9NJ1FvaPKnD1mjqI95NChva9ZYT0IBNW8HK9SPcbEWTyOxRM+nsfmPKeOiLpF2Sm8PFkCvme5qz0K0rY80iBaPdRD6r0Iwkq9Aw28vO+i072GvxU9u5cXPbftFL3NCL67R/zBvFDyQL0Dwje9p2iBPf4xCDv8nt+7ZQ0NvaFOwj1hrj09DHYNvJZHCz3Jt7w9DzoEvu/3JDzF2y69D+aCPbYIn70oRHk9Ly5KvSEKSztoesc5QqS3vdFnoD0Mis69c39ROmD6kzwytP29vD2MPcDhBD3j8tY9kVoEPsdZLb1nWAE9QA0cPRozRj21nks99HY2PX0coT29+ls9mqTivHg1Eb6w50c9iyiZvew70Dv7F0c8jsuHvAyFpj2qGo48Ap6svZ2s6bticiK9VuRSvXNrTb3A8Js9tZ6hvLcAgb0RxpG7ZZ7uPAymVz0Uq2C+nbnhPTe+k7xI6L49+zRIvQx7HL1L+KS9K31IvKkUyT3GC3S93iX/PDLre70GNog9k8WgPCF7Nr4Ogsu9j/CUPVdSbDzBYYC9gLSUvOPQlLwpXio+d0ZkPUBGBr61OIG8kLuUPU4wuj1yTtg9dLwEvcrN8T09hoK9qqXhPdpIpL0katk9Ef0cPa6/0T0LoAe9qmtwPI61ILyDzki8dbOrvVtvTb1+s8S9Ui/0PWE4C7119Hs7jUuQumBd6ryEJEQ93GnZvCd1Lb0khwO7limNveEuSzxErp898of9PEf85TwZ2dA7Gi+BPT/ZmjxrvKK9L/0CO1U0EzwHCoi9PTK2vbmWWD3FkCq9LRmbPDnMab0j0Ik8IPCnPGAuhrzL8fy85I/qPCH/2TyqxaK7rjQVvKFVpLsyjOk9mVktvXaqDb1O24Q8bJQPPaum8Lzhgn49Usgru5cBAT0URQS9zdbRu1yE67znDZQ8bIarvbUAxrxj9qw9wVoVvoHEvr1Czhi81x4FvR+LljxhTkO9j703vOr27TsJBq88ru/gPBwPRb17ea68vCd4vVXMjj1Mipq8KoEsPiNYUj3+OcU8tGOWvdepUz197va8fUXOvRMlmj1MzTI9gFtbvJEZpjw7DQg9dp0MvIw9oL1zVks9opqcPYmYPb2Iqhc9iWn0vERbPr380cy9iOk2vY8M/bqlabU9Ua3UOyuHQr0npwK+qxKPvdggJryOWm09XRIavJqLMr1kTiu9CEh4Pcm3lTsyFhk9MIuVvfyQG73Lnqi9FRcqPb8Xs7szzTE8ylzpPI4QCT2H16O9aczvOzEeoz2CrIK9h0DJvZ2rWz2jFKK93QUKvo7J+jxYgj89zLcXPdFRTj4bV+S9cGJfPTIumr3w5rs7LOagvI2yOL08NSg8cThAvfhsyzyZ80S8mT99vfcIk70Xrws9WdwYPKFv6j2Dt+G8x9SxPEF/Tr39aYS6lDOIPMy7kb1227g9X7GmPfOxvL3kSl89DCJLPW2+PDtr4LA8eSCduy2xWz3mcYE9VzpwvG/g3jyLiQm9jERMvC/WhTvJera8/77XPF9WI70BfRm8ltXGvVrWk70F4Bq9915pvCW5Gb1NHIG78tC0PXSycT3aI5890nv8POKDgj2vScI8IqMbPlOeAD4ZVwQ+qYukvQiTrbyGJQY9r9fOvfDRNbwiOIS7SbGqPUMgnjyhGQI+YLrYvZQLI7148VK9Cp2WO4x6hbyqnMY9Ddo8O4cezLydY1G9078gPMWhqL0WjCi95+B3OrlZe7zvnpY9ASfCPcGQQb248V69n5C2vEtbsb0QvgG+DZXtPWeK6z1JDu88TLFUvTJMMj34/yc90gLDvR4oxjzms0U8KqSGu7ZixDw20Hm81NxGPcXVRT2BWZ49tFuuvcSuILyebbq8765kvR5hNzzd2Q69mIGQukLjTT3Tuta9w9arvZxq7zxCLco9aV3OPXOCQ70codi9+Gc1Pex8RzzQVK4793wgPeQXAz0iBSm9t9fpvBQ4p7wc6328FIVBPdrZk71Nn3C8e8ZJvZkYUTmi+Hu9BECkPYg04TsE0oA9ENXLuzJwRjwF/2+9a/c2PL2Ebz2cXnq8vp6OvT0DpzxR9jE9EGhRvV0/S71VeU69CTCUPVqy/rsw8R89l3pivcfEMD2FM3W791woPfkFqr2KDbU8R5ujPXuK/r0hBZE9FqHdPSJHrDyyzX28ZsSLvfBYDb1Ir+e8T984PWn22D3E70o7/Ke8vb6oC71hiww8jfVlvfe5jL3smcy8ZtE7PSf51bzVKqs9c5bUPf+TlD2x1DK917sLPUoyqzz0Ijo9c0gNPgEEXLuZXqI8iD2wvN+BQ7wY+mc9N82avQ6RU73BdXY9AyyzPb05372dY8281xP+vFlZrrpUBU28o5W3u8S3xb0lyJu9wlUOvSy1db3/9N28dCACvLOl3jwarNM7yKEfPYfgQbtfHeE8ZwQjPXjJjD0dq3G9UOEfPbeY/jxzE6C9qcJ0vd+TLz2tegK7IzEPPfJqmL3aIaq9ObS1vekPqDunDxQ9DSOmvDY/q7061p87mrSROxAguT34mvM9TKd3PJMLOT3kEaM9wGMmvdQmOzyz/6g90AM2PcKs+b3Rsxw94bZWve5uJ72z2I89LvKQPOMvl7zdp9o965E3vfQHvT29vui9eA4tPFap/b2gOiw8PHiXvWcn0Dugi+Q8rnh+PbhRzTvs53S9pGSsPBbgdD1p/jI83pUOvXSCLj1Ayqo7v+y7PTpEkL1aGKy8A/rkPe7lY7oJiRK94ZQgvfTUnbzl2h+9t21WvDjie7yer948ccBDvQKomD2LKUG9MJJbPEIvaz1FZVg9EVKDvVLyVzwcPj68uPQivTH4Db1MYqo8DEP3O3Unmj213vg6ALoIPIdUfzxk8q+78GCGPc+FdLt0Nf88wmJiPZ86UL1sF6E9ZbjuvBrrDj26gPW8PjK9PObWmjwGUX+9eQbOOxlFzzt6sqK9LDT7u8N+jjwp3y+9NS6yvdNU+70J3yA7Z4LhvLmF57xpM7S9nchyPb5TaTqSJ+49SbFGvXdVfj1E+rm9sq5SvKLlDT4Pf+A93YYIPKUChryiaE89NkWDPbdtgL0ua249XwFLPeFb6DtgRq49RPyuPL2yiTwYnvi9vFgFPvwXoD0uFvc85dy9vUfoIjzloVo8f/I9vGQK5rynCbq9IDU7vWdiT71e+Tw9kJ1uPdSeTb1IQQi9qDXEvMRiBb7AZeq8hw6ovAOPd7x9hLw9UOsAO7IdMDzXU2U7T3p9PWs30Txqgrg8P2sVPSFgeL1mn0I7f7CIPTyYnDv8TSG7YZ2Gvd1+27uflKc6AE5rPOCztzypbYQ9ZULpPBovjLwrrIm9n5GyvGLOH7079oU6bc7APYbl6rz2u8a8XoiSPWaWdr0ux5m7oSEEPuhNoLua3gQ+zY7wvbRFKDwzj2E9p6DKvCr2qDttNpq7BpBevDbr9Lseq549PoZ4vdUppL1VJou9m7SpPBIOQj3y+uI836KaPKU11rxEAiE9B/dSPU291r3GmQa+lSeHPecbID1GA4c9CryTPPrLpL29O4K9unw4Pahr7T10nAa9VJifPX2PJ76Rnc48I5TsvL4okrxlVzq9FwCqPRyzXL013tO98z6yPcvuGT7LZ1k9f+jmPaKpKr0dqH87G6UPveD/DLwD5cg8F2qkvRRy6byzwle9mxmOuo8eLr5k6EG7/TjQvIHSx72yvB+9AOusPCVIAjyphkY9JAhjPZHg/zyaW109OdmovckW3rytfig9gaqWPeqiiz3lWYK908WUvYExDTwzrpC8w6bAOzw9r7xGTDm956+wvQJYKD1b/Ru9su0pvQTpzr3igWG8/YmZvXmbVz3QrO48etRmuxQfsb1aevk8+8pcPPDuQr32+Us8njlJPX7O7LwV3Do9W9jxOgj/mrwSek292fspvSAGTDz9zoY9N5RWPbx/xTwOv7u8NmxsPHi9Ib7kQuy8CpPgvOShYz12QY89EojwvWEgkj1LlMK93rrHPWMD3r07wSw9GQcEvoAt5b0njgo951I/PHrklz0ZGfU98LIsvTpWHL3QC9E875/PPWEMoj2ZMAQ9Dy/gPT/glD2gmsS9RO4rvrgg4T3AGrW9sAtTPTtH47yEWRa9DMKbPTNAMD3jWGs8ATSGPDyUwzvPnD09fyc/vYlXtj38ah69uIGbvQWAKL0ZM9g8vPD4PDznRr6KTcs9RcXEvefKqz208X690puFPK+SV71+8Qu9ZoOzPY+t6r17w4g9fyOfvfp8vD2YhyE9a+5gvqtAiL3rj+U9lHwpPdI4sL1Bakc80rJ/vPihBj4bORg+BmfsvaJZCLxido09G57lPP7Lqb1e2Wc8NL+qvfbv6bxDdiu9hXbSvZN3Mz6iJ/K9nMSMO6jsa708SIo9YvSFPRGjj72z9ss8ISofPBiw1z3Col298KsgvGFv+7yLmCC9b3Szu4JKkrwA1b075cWOPP+ZHb72Lyk5FRvOPfEzAL1sTYE8uhI4vVQ9uL0Rryu8pP4BvZftbb1LQ/09C47uPW8Hjj3E1UK9a/fZPfmztj0G+5e95kBrPYg3vLxmLXm8pdUOvqAYhT0rqI29ENDrPfOwEL7PEM892VdxvfAPozy4uMM9rcXQvMtKFTyAyzM9N4WRvTDJprvY8gy9kpNLvWVORD1zwNk917AOvG55Mz1sK4m9V0IbPSCM9jxMJ5E9RITcvaCZjb7UjdI9xc1tO9kPyzuJSoM7UaAhPkG7LL4blAE+kEf9vTwDKT12W1c9MwiSvLyNWj37kDK9Yu/BPfRJrby7Bcc81fKtO2l0AT7j9Qm9oHQvPIP1Iz0BmNW8rnPUPZrYD74oIuG93HHKO7ssxDwhN3M9mRQpu18ckz0SlFo+mNWfvaMoij3joEY9VeKCvbbOq73PcKs8qIXjvR76Dr4ZXTY9+3JHPXFZhz011++65GOVPY6UAb3g+L+6G+F1vXrZ0j01Gfa9SQ7HvZMRQTzc/FA9jTjLPWdz0j3Z8bO96rOlPaOOEb6I+Kw9RAsfvXr7eT1RV2A9kf1pPdzQqj3+v+293SBQvKnBl71b6Us8oXNPPZfqaD33J8M8ct2NvWi+ubxNhMe805ejvCddJ70ipwq9p6xUuwj5Gb2e+y482+QivrWbPD14MhC9ERtRvCZjaD0+eqk9AL4dvf4++zzd3Da8CmTtvGkeljxGNtW9OjowPQhJ47yAN6G9oEokva0bmr1K80W8a2gRvZYfoLuOndO9WA5ovX4CLj24PxG89iIsPROT6btdzqU97qAgPd8cNT22O804kly+PDJb3z22oeC8DMnGOtGDyTwj8Ny8j8cyOyivhD1+iZg9xFK3u1K3JT0DwSw9pYYLO30qKbxml1c9EsdqvTwGPr1ZBty8nQ5qvGhGdT0jG1+8hkyevP+S4jt5Hau8DuK8Pam76j2Mk1G8h3mtPK6Hl70Ecoi8CYAtvSpsB7xLBOu8SRNEPXxd6byMmh89h51pvXRHIb1y+Ko8RKicvewa6r1YB9E7hXkXPXzoOry6gRC4onebPLX7bDxp0Jq78xrZvWJUO72EqZ48RImkvTast7z9ULM8Vkr+PDHOpDwAFXG8nwmmvEbbNz0OYDs9ATcNvTLEZj1AZNy9ME+ZvXJ/0LzrjV49LO4oPQMoWLuROpg9L30YvQdOAb2l5gg9kIuEPfCeXT3Da5m9XXOGPVPQDTyFzE+8uoNVveTaDzpPkeC9e1QOO+GKorzPMxa7NlpfPHckDT3PqCW96N1XvcXXhju5h6866Eq0vNvOOT18AQ+9QlCYvIlbmjs/xKa9aurGvIP4Ej0WT0C8AU6QPRR3DD05DuO7wm4EPf9cST3Shyq9jw+CvYCbnrua+ym952m3PM4A8LtIU4Y94z2KvMuamD2UFtC8lmi6vTv6Jzyh7X89OeJhvGJEu70g93W9h4E9vIQBkj1wLSW9XM2ivHMWMj0wTog5q+EfPdsbQT2sypQ8CmmRvXo+oDwu8Oq9an8Kvtwpn7yftZ+9KoMEPWXWG7zRC7c8LVGePT3Sjb3JE168dAOPveq91D1C76G9lkqiuRyT673RMSm7u4YgvZukCzzolKu8zDkRvh5jsT32u4Q8kFndvaNjtj3/1VW9GgUEvLauqr3w7IW9CLjEPCtykTxBBSu8XRoSvZxuEj4jE4I8KHZhvNkZ3jxnGOK8tTs+vfFRZL0koR08vvuSPM9W8bsvQAM7N5UzPJQCJjz8JbU8gqOlvWQy67xNgb29Rf9qOw1JY7xanoG8AXrJPagdozx9EYK89JYIvIaQT73SGCg9eA26POB4Qjo1ZV66ZmVEvXS6gj3RKKI9r3ioOx6jHLwquaC8e34IPrFCMT6GgW09vbDdvPWe2j2Ytuy9uA4IvsxYjjr9Ro09sLa3veGeur2vz4A9bVkjvafjbT2xqF09PFpaPU+xMTxfzbM8jGZlvalBv7x7duA9UJecvW30Cb75WD49NgiTveJS4ryIl7U8Q/RHPTKa0LuW96O8SyhsvWwZCb3nLdU9MQwlveREQr3QjsU9qqIbvbhxkb055cy9BovDPOf2oLqjcRY9L1wKPf8ecLwFdtG9DleZvRnQ9LwaxZ05H+GYvdw9Ar6xiuA8uLo/PT+vyL0mXeu8rADmPaIH172WkKs8439CuzDFz738kTa9+PQqveQefz3lDTo8wZw5Pf7Tizwn9GA8+k86O8Bjzr0RhxM9OY8RvKdTqrwihCG9vSG7OkuNcz0NSgc8igjcvDjlK7u+5A291fdFPrmKbj0ESpW8gjIYPTjBqTzrhOO942CWPFkxnj3UzHg9esLmPZkUxjx8LQI8PaNwvKMDNz0nGim8qwadvMiz9jzpF5E71Q6iPA0t9LvsM7W9geGfPA/F3b0j1jC9ZcJivKKtwTtGtF+8UnB+PDn3eDy1j1c8IBBnvDbWvj2Y90A9jwfhOgkvgr35fY88GUqQvc5YNDqEpgE+9ISqvfrxkTw8tcO8yBwtPSbKO72V8Ly98j32vSO8bj08x6470bcnvZ0tqr14xjS91pByPdcGiz3Pu8q9ezcKPtUd5LwDHyG+SVhtvc0wG70YDXS7un/EOWzigj2AiJQ8tCePvXXwHLyPbpC9valmPU75Rrw1rk899uqcPH2U3bwlcBY9Hl6TPeD5pD3p3BI9B88ovcdiIT2YLGe8F8h1vSgUZj2xuF090+RDPDGGij1xoGY9E3HAvQgy9z3ssYm99kuKOfUGFj3H/vc8MxXXvK7dor2rpo69deUDPnIdl70BYbW9dwnUvCpjGT23Mge9vIihvYGrs72hBAO9aoprPX+o3LwoAwG8B6ebPK+eK71S7a29Jk9rPVWoD71cx5Q9vilAPBwnIL1piwq8Eu4wPXIcAr7H1hg9B6o4vZVjFL0xwXw9f54iPUjaqDzAXxK+tyOsvEupZT0MiaY9waDbvVkNer24YIG9pMbWO5aqo72qkKM8vilhu+/TgDxiIJg90Ow8vTw2eb3mlKG95Cb0vc8cLDx3lXO9fu3mvEiZgz3gAps8n+mAPZRiJj19pDw9DsyGvBisZz3QNKe9ERUvvdO7xr1D30y9Lk07PUrbs73FKpu8GF+mPEwDLD0I7DG9lTxCOm5Gbr2aP7891J5fPTo0i7wsxSm9dxSovOZjyzweDhC9BMoZvb8et7thgHO9rIIAvFkjVr2ZVgI7cKW/PFDJwbxRsaK7QQa1OyRDoTx4XpA9yIr7vFBTW70ycVI9yY8Pu8GibjxbCpM9iAS6PfO3hLyQoFA9BXZ/PArTWryrNAM8Q8xpvW9acD2tgXc9mgCcPNmLPLxuRXQ83X2CPK4xorwqtMe9qvlRPbPF1L0bpuu8xpSAvQdwiL33ClE9TAUhvgMODjyGc8y8VswMPflC0bx8Yf294oKvO/HUmL3YMQ6+gK+pPDiq7T3a+GG9P/h9vP9nLrzDXQA9KOwrvdXN9LzWHgE9z8plvFobFL6y7aM70COUvV9lEb1Hems9FKSAvIWEsr375WO9bS+hPVZ0Tr3hQwE7tyg+vc2Rz7z0ix69ksibvFlZiT1sDQ8+PQsFvXJIML7ZSjY91tSHPXtf7TtQ8Eg7syUivUUSoTwPgYk9DBiyvZsx3LxnXUU9n6B4PTUm+DxZnlW9i8imvCb0p7rJq5S7uOwAvSY3Cj0ESHy9iddbPBJhmT29hk89oJHZPFBxOb3djMc8ZB8yvY6+yLz6NIm8xmI+u/MzXbwwUZ69WO3Ou2qyF73PL7W9mzGWvKecHL2ycK28M4rsvAnnmL21oju9guI/PBD37zxbWfE7lginvDLCJr15yHQ9CTPIvOd0YTyBBAq9dUYtPfnCGzrd3948k0plvDy5krtYB5g7/r+AvPaqgr1sY+s7lJ0Mve+2hbw0EIs7kFpMvU6RujxL4ZC9xkJ+vBR2QT1XSR69/fu+POjcPLwrKJ89elCOPV2CiLyXcsQ9FPFnPXuSZzvoejs9TEJTu8JKyzvYOuW8ImLmO4klxT3febM97DgTPD99wLxfAGe7PdS5u09dI73op2c9bb6OPcusUT3uuQo99xDcPG/EgL1khno8J513PcTOw7xMO+Q87i8SvXDP3L1+ImU9zOcxPfsc37w4PJq7SikoPbmIpjxra9w4Z4w/vXjq87zVLqy9A+JmPawWOL05CQU8tD2APSs3MD1uxeK9s1WgPbjXgb2VNpW8zqRsPWl46TudIm89OpC3Pd5bLz2REIu94FYaO0MqDDw9VAU89ZrQPYVFjr3hUmQ7o8UEPSI8Ob2/jXO9q9PCPTsOX7vRkTg7k+kTvfyZZz0Gs+g8sTMPPUHiQz2c5Oi9V/HPvYcSbr0BynU9eq/CPbBxujwEeou9pg1QPSFatzrCZim9um3iu6PkJz6H/8C7BBGrPbi42DxNOTy8VGuVPXKu6z3oqS28qneSvUjaEryu76k8kYWiPa5mSz3uDPq9LIvWvfIpkz2eWyS9XlivvVhgnj3OQmI8Lj8bPXMSgT0CVLW5BJKSvVx7mLxB8wO9pIgVvQ6tJD16WRG+OZ3fvfjc1r1hLeW6ofY0vVCdGD2SzNY7UzxXPdg8AL06SPy7/V6xPftVgT1MBCm+xa1Au5f687zSifK9xJU/PVPupbyFtwO7n4jyvEkjbbqUHpO9oQCsPUTN/D2j/2i9/XdPPKgxDz2PW/u7Wu5aPfS04DzP+N297YiRvTlfEr0Q9TC8bTVJPdyxQT1wfwO9yC0FvfU4szpZm1w90U2xOwDo5z3WSMo8B5eYPbLdLb3v0gO+aYQDveckDz2M6c66zxNUvWi+gb3S4eC8l6hSvu8wI7ykV9Q9iuwJvZVyqj0n5Ts8/IKsPGksfr1XYGs88cmVPcI36L3egK49wnHMPNXxmjynpwG9Vf7EvU9v9Lyhmwy7F2ajvSNcDb2acgO96SgqPbpEITz4yAM7OC+wPTWW+jxniVs9N12/PVel+b2pgUY9JLdwvIS+ij1YW/+9tkqsPf/fQT1Bmdm8PZWfvMylBDxRkUs9FVqlPOoFJb7i9Qu8UZUfPU8Iir144QU+ysmbvZ1PC76WR4E988SuvEtDq71iaKk9nj6zvXZ4Wj3W2hw9CEfkvUbdNL7gUd09ebMvvFJEPT0ipx69dLpcPOvCBzzdzgo9ZTUKvSuqx7v7sRq9JgCjPQt7hD0EbFk9oBH3PPSPb75oCEI9nxcfvbSFuz1IyhG+4+FhvKPgGr4Kx5I9GkpyuxI0vL2nIug9omd1O1HNz7xkZVC9grlWvUfUpbyQVYQ9rNCqPSReWD0c7cc8wFLuvYHzYr2d1rw8D6+ivALAaT3T0AO9zBYjPaK6Db2Q05k9MOtbPcd5XT2SE8I9B14FPUZW3ryP24m6fXDCPWqq8D3jA8u9hKpKPeruwb1reLA9kYiGu+DtATx5hg09fnSOu55SWbwzPZi9Nk2uPNj4u7zBHXu8S647vEHcwD0b0Wm93Zp9vXUkHjyTVGO8dtX9uqZsazyiQzG8Yqhwvfl2Mz3pkvy8fV9HvSI5+LwaDqA7wp1WvQQe8TyY7Ro9DN1CvaEg0jztWdu8xkpKvRNXnjy+Zcm9rDAqvfYFMTx0asW9zluQOy9f9j3Uyb+9sg2PvdL0w71aeqq9m8AMvV464Lt+FoU86amHvbn4AD3AitS8cY1WvSca0jxgaUu9RDStPFc/mzxjApk7idG9PWchGrtGrHc9wDQ5vhHL8r3KVRY9aJyfPb05cD177TQ9zlfYveoCK7x06US9taQmvjcpBT2sOxK81HEKPY3Sb73Z1HI9aerWPFex1bz4X/G6Lg+mPUEJtb2oXC6+o27RO5uCDD5IADQ9Lv9XvpXCA7307xg+vkF9PVgCjj2G/d+9NgN4vXEqFL6QsMK94JxxvUrY0Lw6/rE8WJCBPchc9zxSsMg9LGSAvZMZ5bwghIk9YGIyvhy9k701w569EY1RPV78gT2aRBA9gGEjvafkzr04h7+9+D7mvDRJWbwbada6SHAvvRVf0LsmDxC9R9vKvVbNRzwD0JQ6eDGTvGRkIDzt9ou9yUYzvbAA/LzRWw29JMQEPqZVWj1yBRA9U9SnvMxStry5t3U9Y5W0u8jVyb08i+29dYVZPT3sk73whj69Up6yvYE0sDy25ZA9q0lTPRrTUz2Mp7M9xSJ/PLTMHb3HRTg+KQC9Pf1Xl70FAWM9AtqYPLfahT2V3wM9En6uPO853L1VtoW8WXyQPLqSwbzVkZw5r4qqPKuaqLyn5Jy9YdPrPUdoo70NNoA9Klq0OoVLLL28dS677yytvSd6RL3gzMQ9hUOSPZJlTb3y7/Q9qIG+PCwbaDwL1jC7pFS1vCLu9L1ycrc8nVU6vTP6kL1htYu9fncRPVEPeDucHom8Ttj9PJLbXb1nyiq9m9udPd2LhD0q+JO8qpZtvODazbw54YU97MbwOzSuK7yyhIw9Df8ePdBnuj2clzI8285WPW/Wuz1rgrE8epbOvQ6bW72YsjI8uUq/PGSEkr1HG0A9WwNZvc8CY72wZho+ad+gvf7KL70Q1Ym9NCQ0vQsysr34Uks9/5ZKvAjXEL0oDxi98z63vW2Jlj0Ryjy8E86JvRjcZDy5Uz68l/QzvPS8Ajxw0b68hy7APLA6BzzD3jA9Q9SZPageJz1YMYW9udG+vPExdj2Mzmc9tESxvKygbr3YhZ882sa2vOwlyjslam09WEcZPdZRVj2XQWA+5gRNvGkZn71w6YK9OhGJvSW4oz1V2RI+l2APPWUQlTyWec28UyMXvDL9m7yiFLE9+1qvPQbwQTs0BO48mWqUvJJEDj2Obo69fDJBPDVtBT6Xbx+9mtEMvTBiwz0Ercc9AxH0vQ/Wur2YUbm9QpgevZsMJr5Tgck9cdDaPMLiPb2kVQw9A5RmPCYRnr1EKm68pqM+vXJ10ztMAQW9vGyIvZQm1j1J2ls962uxPA7qgLxjElM9tpOOvN5Sxb2qxte9UHoBPfRynz1wkds8gyqlvSHMEb3Dsni5P0pPvQ2goD3saGM9NI52vWQOWz0G6xI8GsFgvR9Mszz2yXs9dPtKPD98oj2xE2W8543PPJZPCr0ed0o9UqNUPYYG2j16ILU9gbBSvbpGwzsmI3Q94mCDPN7Th7298GY8I6q0PfKUJz1MBEk7y/3zPNZQpD3rEYO8I++GPfsvDT0rEps880+NvbtoTLxeaRy+Pu4ZPa5u+jxL6489tqIRPdWbJb1s3Fi8ljrjvI8G1z3yHSK8s1U3vVQn/D0FfMu810e8PTlcbTu33Yu9jZOLPJtAjDpSl0G9Ud2KvPkmwr3y0/8974ruPEH6R7ydjmm9Kek4vcqQkb1vysG8+hAYu69xkjzYVQs9ycxcvSY/GL5R2+O9pAmFvDdj3b2cXy67wKAXvRwrwz3Cuq687GQfvf18ij2FPmm8ZYkjPBbrDz1Lt9y9j6OTPeBmtL188Au9zRmkPYOKlzwDM5e9f7IRPLlelLy6sLq9lX5nPFnvcz3dfA29cGaHvJ1H1bzyM4w8FZ0fvKwTiL2VEC89uzokvZN3CD0GlpE9x/x4vTbxE70cUuK7sogBvnPWtL0IHio9VP8rO8kwW70WfRS8seiXPcgJD7xL3KI99LxRPe9le71yqRw+ZDpoPaDct72c9TC9R83gvEiTab2XJuu9JfMBPWSAtj1YQt+6XgIGPlix7LzUUG4+DKm3vbnQCT39z+g9sANEvVDBfjxdmTC9f266PUTKVb0eajQ+EsmbvSbrjbxrcR89pfUdvdQsbzorDUM9FfWhusxJNLwGA1i7KP7Yu2h2EryrovQ9o3qIPMCDJT4NNkY9dJ8LPRTw8jt35Oy7V7zkPRqEHzw7Wjm9TYRMPSt1KD1H0GE9AdlEO+19eDwl6988UbnzvXwh5LxmovG9ta0Tvc47vDzvmsm9bNUDvTapKj3U7Nq8SPYtPSPxHT5MLrq8v48DvacrJj1Assg9sjAvvUs5sL0ux4M8I8wHvoE01D3y6iI8AchWvbl9BT4AujQ9icatPZFQiLyebq+9f5HbvNd+8D3dVrs9XLaoPROHbTvCJju9Uv6SvZ4LsjzCF/M8zFafvfEPP73/xka9N9N9Peh5Qb7CJa294R0SvDfjcz2HoIu9+LF0PUYGLb3LHEk9jCc0vRiJ57roD6c9kJ+0PXbGbD2pAXU7J4WovEu3ML18+Y49fOp+vY1z/T3QT5o9Qjsnvf8xb71pHn49YHk0PQg5ib2YFGy8EpUTPn4dk71HLRa9idC5u/QLHL006EY9ib00PSes8jx0fSs9ryFBPejgAD4+Tqg8epysvU8+Az1mzb+9nCpCvbr1C72g3ke9yzXqvF4FRD706lI96MhsPaPO3L1WtrI9E5jIPWd8AT5npBs9OMJxOht0RL1qg/Y8IbnuPPMBt70TlbA9o1VLvJxGh7tcoao8quv1PBxt172loba9Crk2vEVarD2OC/i8ZTMVPDhYGr1pCXM9dXvgOziagj3av569iv3qOgxZsryGzVU9stuYPLmf0b2JtRK86Wp0vEIkMT1e/d28anCuPEtcMr2h9ha9JjfbvBRD5zv7Ule9wBgKvRqpbb030JA9ZHNyvIIJB70JxUm82bbdO0DYAL0g/N+7xt2rPDeApT32EB+8h/yRPN/FPz1HI2090xvKO5CfVz0pSwG9McUIPZkpq7o0wJw8uY4FPol20jsYcoS9ymrAPRp+xDyitVc97fLQPQo50jx/g7U99PzNvX9x0L0/IiK+NitLPW1wM713PlQ9BL2RvRFB7r2de2I90DnhvEghKb1yEwk99PxUOjk0Tb3yop65717Luguglz0wzXQ9qsY7vIHgojxdEfU8WYfLvAE7iTxVMCu9p98LPeFtP7wiq3e9A6fHuhkxRz0K79a8hYjRvQu2lT1qnRG8PmWJvUGaB71oyWQ93smlvNLTp71r8O89hrFQPVOK4TxcH4A6yqkrO6ycVr0ChMg9hqBIvcEK1LzsJqU9Y6+WPaDmgr0lIek7i7oDPPy8qbyHhAe9aaZGPY7XQbyI0IW8S84WvCtgfj1QHPm6QR+OO+LgBr1aT+g8jjaRvR8pl70aebG9pOtSPXywwz1IdUo8j/QGvEknjT2FNYy9XVKJPGuUGb4NZ429TlLQvaFKfrwNkbC8AFUtvfIX3zwaB7g9Q7ESvVsf4jvqg8U99MZovbQ/5bz7FlC9pZqgPUwfgT2QzhQ9JianPJGV0TtMXBI9eqmePFO2h7yuNL+84VP+POyB8TzgXbq8KBHyPUBfkj10XFM9TXU1vUPd1b0iLJ+81IQxvfkf/b3GDqq8aASZPewSQzuH5GQ9SlDKvBmLcb3N0JU81yFivVmIDb7OrIo8Fl+QPb6YLT0VG04++eerPYVJVL2e4YY7oTeyvUVFoz3FllC9CPJyvUhM9zyrVNo8MKTlPLucqTywgkm9O0GHvYzlrz1wIdS9Jwy5vcDH9j3ebqI9us28PedPQD45fTk9m5LyPTvGCb1EL2A9wbmSvIwwfLxxTzS9V+r/PWMYnjzbS1284zauPYZvlbyD/za9wNq9vVVQWL2IRLe63iZxPfYc1LyvFxA9rWt0PHkNWj3MYJO91+qDvPn4mj0HbCE8I30XPFSbBjztPKG9jQlCPbWieTtGkrc9IzqiveqTZT0lR0i9QGdVvX1IWr16Z967q52svFPBn7xgMFS92iWVPIt+YD3NtAG9VKzIuvxaIj3h4Xa9hpTXvIJGXT0f+PW8Ty6avJqqHr3cw9e8c86GPLyplT2SZKI9r5/CPcQtH74wRcO8rdftvevwyj3Zdr28mCYmPQqRiT0xxAE9rp57vU9Cqz1ScwK9rySoPN8KiT0htFi7FAQJvXItqbyhCDw9Z3Obvd9m4bz8bZm74HHFukbYlLxodqG8pGQlvY8tBL3CrM+9YSnWvXSPoL0zrMS8AtaOPZkQMr2HoAc99od0vRT1Hr2IdY89jkSEPHrNOL6aFF29vXmkvNdGTT3Nxz09VUzrvHe4Yr3S3cu9NAO+umqZyDxn+Mo9eUGuvBVW/DyGosm9uWgfPeTsjz0lQYU9UQsHvpJa5rzeMo49CyJfPQdAwbx2Nc88aTJePNqy9Twt14C95CVbvG3+DL1ia+G9au9yPbfulT3Thho9ukyHvXwMIz0jUOY8ByYDPazmBj4OzWO9HbdfPXBD4z2yxZE9R78BPjSBq7qLgLw8wQoRO4Cqtr1IMmc6ngWuvbRd9DyFp269YkP7POnxB77lyeG9LJFpPXD+Tjxvcww+jJpbPQAuoL0v3WG8r7kFvY0pwbvscaq9H4BUvS8V6rwmZZ88V+kKvoyTMb2aY5Q8D5UGPcBmnD1g34Q7db6DvU8Vjb37uHO9cCfmPMLWC7359+m8TlqZPf+Py7oCddW8G2DpPTPohr2aCUk9+HEwvewl+z0mDcy9+0vMvb+rn71zVbK9LOazvUSluT0Plxi82O6NPZZl9T3I9Ik9queJPd3kc7wgVYW9q5WWPRZMrz0TJNU8M4rcu0xJ+Lw0N9877SE3Pd9+Iz0Zcuq8H/FMvZVWMj3QJ7I7s9DzPM+MYz3RqTw8qkHnvaSUkrxywJm84RJCO3/kjTzwRCk9n3yaO9YAQDzcx4A9zvYkvm01O73+wIA8sO0xvFoITrzVoAA9+l/BPM8i/b1+XWc8ZQsrvSVT1TyI9l+8YFOzvciycL2YM4M92g8ZPZTA6jzx1EU9wgWPvY1BCL1qPvE8U+uru2+h6byicOa8lSWTvIhW4LxWtmu9qCYovaOB070Y8Ss9Q6tMvOleEb6MDGS9T7xQvO5D0T0l8FE+69iVPULWbj0XxhG+ArE3PFvMeT1xcIE9JfEsvT6nmzz285i8MfAEPZUQILzDiG49jmWIPM6LYT4P34w91hs9PejjjrvFC989npvYvHuQ5j3us/49gN0LvoW+OTvU3KQ9fvIQvTcZwb2UrI487psyPfxeJ74qABa+Xw9pvO4y9zybdZE93gt/PBL4Sr5KIS49sREAO4ySdL1otIK9o6davfrTLD5K7bk9Y+XNPBeDurwVftc9keUPPTcKbL30o5K8VZiNvAPigj1uyO+9MsrJvIayMD2buxW9pZVEPXUcjDqofDW7DLQ4uQyTnb35/UO9EK/pPPCCnj0Nex+90bX8PRuv27xuPk29iKE6PLk0nTseKuI8oB06PYkbtrzq1rM9xMlZPa6hy70hKZ885XQwvZPpd71amUY9vxovPP76TzziXJe9Ku9qve5TJL3yzja88dsQvMiCxryQ2v49UgqFvZ5JNL0v+We9Dsjau6AhUT3yOPW82UI6PfBAo71aejA8lQOEvdtBVDqmhUW9ozhJvLfmJT0qRsk8Kg0oPXDbdjycgSA99V37vJH9UT22f6g7zBG8PKUGdb0Ipvw8hnJ0vNIRiD2Bo+E8tFMOPTZe+73FtMS8/J8cPbV+yD20SLs7MgIWO5eEaz0oP2G9pkUBvo4pqr20iaU9odExPbWmbz35kdg9yUBpPT3hsz2pwsg9DfRuPHTXF7546HC9YLWoPCjyj70tf0M8TJIgPIlcy71fkiK94y+aO10NAL1evjC+Si3QuDpVYj25t6y8NRLNvAX0Cb5UKsk866KtvdwkGjxrFpA8knQTvf7Q6b0+h989FNMZveUvubyXLCC93dpDvTxkwLu5AoC7yz1DvUqLTD2zVLw7Yne4Pdc1oLqI5bI88r2lvTqdHD2zLne9PUvrPZz9Gb00rae8J++vvShVuj0AW3G9MWH0PP5ng726oI29pqTZvFdy9j1holw9knF/vRwt3TwAkoO7rt8OvcanET2SgI69wysOPE5vbTxip9s9Za4ZPE6kqTzbtzq9kKGPPWpRJr3ZGhU+p9ZCvl+qA7zT25O9/FsWPI9hGD0GnkY9bdLSvb0KGT71eXa901v0PLuKyrybFYa9LmVJPQuF5LwuBqg8W3MyvP2UuL1fe/Y8baqTvQ3WvL2q4Sc9g387vbnyCb3/+Yy9//6JPQmisD1dxze9JScvvJ6/ib2T7Lw9NHyUPYteEL4xsSs9bbTyvQulxr3cShy+PunFPX1RTj0d/FU9sKWiPZngoT291Dm+jrrnPYrOlj15ePU9zmxvvgP5LD2rW569S16bPfjXfrtsWhc9oWSDOyGdnjyqmoU90duOPGabs70vDa49SU+wvRSIPr1YDQw98C7kPL/Ci71rJh+9rbKevO8GlDxWi3U81PKRvU1TSr3JgLU93/cCvCiLxD2EKf48Kmk0PPK0xDyMIUQ+oKkpPJg7pTwbciG7p1you1ifeL0Nuhu9jk+2PLb72rwBf1Y9INGKPB2rwjz1BZm9ulZJvQWC9jzadlm9ORxBvernQr29KJs8tuU5vSxUHz1SZMi8Hd6IPVp9Ez0K5EO9zosovXygdLxlUMI9HFumPYLeij09PQc9B9HUPTc7hTxNq/G8wKIcPGpqmjuIsp49FnOFPSlq8b2eyWG8SSJZvFgelb3ModK7/XOePUG6CT2OXcs90cEvPr6INL0NCau8bQo4vdf5vrvF1UA9gmchvRilrL3R94i9wuwevTWTFr2+yyc9sdi0Pasgy71WZX2919rNPYFDSrwhJBG9omH8PPtMUbzkArk9mvARvZTwnLzjsOW9LwRRPZuIX724wSo9aNc2vW5iZL3ChZY9Hd6DvSqCBL0tcSw9hbixO30vQj22HhK9GpS4vZBkujwL1+I9ScX9vZ/2FT2EbVa9/bUWvScxz7kHOYO7enrCvK71Gb1EcfU8AHXAvAeBaT3dVhC9/AcHvBDryD2+XNc8wObYPHCqPL0f7Sw9LTY2vLZ8VL3sGkK80vZAPbu9hj3PaQG9DNhHvBYPQr1ODD29D8RoPNKU2zvgoD89kbgpuzsxlDx/xW48Cda/PAh7dj0YroK9bdWKvQ/TBz7S7c08lciFPJ5qnz3lHAU9DwFSPd0g+zxDzzs8LHlvPB7cA70ZBGA7dt+SvOWFq72jFWY95AYHvlsIdzxEHWM9svyJPRYSEb5MMQY8h1eGvK3kpb0oUwq6KItgPctwyr2rxoc9bYSCvacKOr0jgf88tHG/vHkdyr0xoD49GaOzvG8ydz2zjPI9DwjDPavBN7oTXDa9JkySvWgqPD2WIiM9qviSu38zGj3QMgs7aiwYOSvY5L0y8Q89YTwCPcKvMD3nkfy7BD9cPIEfjT1kaBA98eyKPELWFbw/JOA78X6YvJ97hT3Bj2w9kwTAPSQaljwLTqw8wmnhvXeGHL3rR1I9al1LvQWmFr17c7M9ITdVvFZ/pr2gI0g9uGXKPKmNzDy5CGM9OOoDPs6VFz0FPEu99724vNCGPj0mpuE7hM0QPZrcFjzJogy8SvmXvTz2lT2Eb9e9VzpGvcfRGj1Qrqo80hmfvMPsjLi/m8W9tw2OPZMEA7z+FPk8CmTGul2rTT1Xj2A9xt64PEuXiz0FANa8BocJvRgOpTxIHq482ik3u3zC7jscWWA97zTZve58Db2lfS+9bligvXZTQb0xq8U7DFDHvMddC76rQ5Q9+vdlvWsfmr2hQrq9Ulx/OQH3ID7AQRi9OHQyvDOgtj3y3jU8twqWPOzzg71awEs9B+ENvDIR970yqJa9NGmEPeohiDy0yIS9VeKqvSKF4T12Eza9y3pyPSJFD70huja+WB7ZvQQKLb5r8WI90SJwvUwGqT31XoY93jYvvBftprwD40s9cjrjPcT1Kj1L79s8P1nlPPF5sL0zFag9JU0YPm0uPT04cjU9uu9bPa5f1L1zIiO9UknlPcYAPjyzp7u9lGEevogABr10pwS+OwncPfIBTT4SB5Q9BGvQO4uFE74Q00+8hkCbvd9KJ72Yoge8t31uPV1wIbyFF+W8wDdCvVxIcDyPF3290g+wPT0MRTwot9M9VeOpPMi++jzxIbC9FCCivdqE1zzxdBK9eHWYuwAf2b0T+3a9f9gEPfK+9D0Dyi096sG/u1T6iT3iDeK7l6KGu5NYH7xHpOO97FgpO662YrycbTq8jMCFveNApTwu87E9edr/PE3b5j117IC9dkWDPMJrCj3jiEu9M7nyvM/m0rwmgKk7ljQzvXavqzhYmlW7ZI2GvABpNz0f0z29E6AMPbQabDygvus8mnHXvHMavTzi2sq8X7pUvCSFij05loO9eB0APW+omD0Wqx48qFiwO6TtuLy1WBs+6xPJPL30wT0Pp6g9XsRbuzetBD3NYdE9wYArvfzPqzyMT0A9AgqQPW6GOL1KTzU+kOETPaD8HrvK4lK6kbb4veimMT7z8sw7AhBWvAVa3rwR3C09SOUtPJ2V7bu2tJg8XoWTvaEvsLx3Aho9u1WFPaOmqr0jona9Ov/IPEgFfj0BbIe9Dy4FPHe4Hz0siaa7PElgPf52oTpOJ0i9T0nmvIIY1r32kBU7OB4nvcJCDD01qAW9fSTZvJJE5L1R8fe9ozkAPcaJpT1quYs9dAusPM+6VTza4qo85Av7O9pAhb1M0HQ9LsqkPHgfW7zv6LE9kkjnvZuqx7xXuDG78kFiPEOsjLyzu7+7wOfzPFk8Qj0lG7i86AeGPcXJGT7EmRY9gPttvQYJXr1C8vQ99XIRPTohaj0K5Ce8kA76PRt7uzuiHG885HeaPKNTxj1LoFW8BYoTPebsPDwbhBK+uLrevQTEcj3YFxK9B7kTvNcZ6rvuRI48gSpJPPYEmDwaw7W9Jfa7uwkl6T31rbK8FneavagCkD2gb5U8UfILPiQRVD2fQYw9r5hPvaO76Lw2o189c9GpvTyyET3hJJO9EUfHPWxtFT6Hf/09UP3xPYyxn71CUd68owZxPbQPEbxZmJg8iJ5/vcfswj3yTMe9a2ivPYI+obkp1bs9FlMMvUM7j7pj9Sg9PFLUu87dnLyGm9s7ONmPvSA7mj0khdo9sKV+PQdqOz2AnCM934uIvVFCNjwWBXY9sgxfvXdzUD1VPDq9A2WdOwoOrz0NbzI9MjZoPcKHPr2vanu9XX0ju7WTLz0KMdA9/cniPf2YwD2K4wO6lkDDvDg+9D1uqYK9e2bRPCEm9juuqRs8tN96vabWEb2Z2ck8z0P9vZIb7jyLWSC9IzNfvVFhRL35oLe7qmZRvBEO/jmTdPk9Ss9cvU9dwj3MZOM9QpvNPOB6Hryrvl49gXqzPORXJz36OEQ7QovIPAabcD09JzC9O/VYPR2qiD0z4RI9uWqIPQRBQT0FVew8uYDnvM7EVT1cTxm8X3fjvIk0jT1urxW9RetzvfKssD01lta9jUE3PQdrPD1nwrs8qROcu13qiT3XOrG9qG03vZ2YEzxgbPU7L02QvRnML71pjRU8+JU2PYwTO71svbo9g2eQO2mxWT03ibc86/oGvaRaNL07S868s2OivUk0hj3d1f08hoKHvYk+MbyKWSW86E4Hu+MvbT0ACeY8wtTLvIxM2jygnZU9geFqvXT0CT2KoJw8q4B9PVgQY71/SAc8NDLgPL0LtjwT5ac9ZDGKPX19cz3u8907UByDPZwQ/DvMlyU9vbUyPFxwTL1G5SS9JQckvQptErz1BIe8nF6XPWsEVLzAjjQ7qY5+PTaiLD12/hY9x6kGvMFsDT0ZW4C8E0crvoPEXrvL6hS9bsKXPe7VkD269IE8rpI4PULxIr3IN8g8AXn9PHeSqz3yHy49C3lOPfyOarw6jT89t7QgPdYRLz28i/u8m5uKvZUEfjx15UW9UYcZvTGn9bxlFxk9+FufvRF0jL1isww8GHHpPIzZvL118YS9bUMIvte1xjz9ZNE6fns5vcWgOD0Y4Bs9JZryvI+WBrw++tW71WuhOwmYrL0Alxe9ajQsvbFwkD2CohK90nfkvAnoPbyhw7c85//vPLGNhT2OG6S8peF2PT/aDjtd1f08dmbSveBCjTs9+c89jimhvCtF57zBMb09ejMJvnvFdb0V+Qe++LbuvemWnb27fww+fb/+vZpNDj7TZmA8/Z75PVZvhTyLkBu9/1FQPfZY1T3zOuc9yUsyPhIuxz14GdA8skg7vPP7QL3Pamu6qjAVvfjjKj6Vx2U9qfMTvVHbG72mSe09WOmHvUMhsTtOBQc+Mx8nvQ/jiDz+4De9WUrwPDsHHL5pBrm8xyjFvGGF6DyXPve9UtqMPTnQ5zyxzb+8HeAhveeCeLsTMOc7v5sXvjl7gTuYSKA9IQlBu81YnT0tcaW9RyeTvPT0ojyFsV+7BzsSPA57JbzcstU9B5ybuzzZr71Sigu90jXKPOcRFjxxBSu95CIoPO6Irr2gnvy7zjsevfUI6jxV68O8QsHgvGiiUz35Wbc9bsmpu6Pppr1QQfW80R7nPNn1fbv5Gaa9mk2OPCmdRj0bDJs8nCruPFdHLz1ujd+8PQUlPb7NvryNW8I8ZfhovHcdS72gTEO9+tn5u5dfWr083Mo5cS4EunOfL7wD2pm9yuq0vaytibxV2om9WSAiPcmszr2u+Lo8zBasPW9ObD0fyaY8WTroPJw2HT2oyKg8624JPW6wWj26J+o8uOyVPVuhKr1reSG+zWP1vMy5bL0hVyM9f24LPoWGWb2yU0k9p6YQvQP6ED05QAY98Qksu372pr3V45A99CylvWBUnL3Q5Ie8yyW8PZHJET4viCY9V8lzvc13qbuiF4Y9xGOqvP57jz0wuTg8lvWIvR0dCL51cBo9UXTqPVSqFDvuWo49fi4KPjpB7j2ScCw8WN/oPPq9/T33G6I8Fv4FvZbfe73qS0S9B2rVvTEobz11iq+9iwqAPT/0SbsdgqI8iaAVvZLVqDze0sE9xdvuPei6rzyMmTS8ayo1vcBOP7y84va9DwPrvUJ/GT3dIZk8WC8sPYSHVr1NG4Q830L3PL0FCD1mOaQ8di+9vTe9GT2VAWA90Sc1Pee87D3FKOC8mNcRPZ7x3DzNx4i94Dy+vX0vkjwEbOo6cJUDPt6yYr1KC748N7uKPdwf0L1CDvI8hPHYPRd4FzzS7by9lB5+PfzSMDyHE6W9V2pkO9c84jsR8Es7rdxevJ3tgz1VQTU82idPvUZbo717Ydy8cP82vYwZp7s6Q0i9pfEBOzabv7xqJew6vdy9vTpj4Dt9ySS9tS2BvDcoDTsJlcU8jPYGvttmjbyZbac7edgEPfLJIb04oNO99auAvTYPDr2z+PI8AnKRvZcYBz4dFHc9qQL9PL4ldjwMHas8jQAQvCknyjx2k3g9uLflvR0ClLxcpxC9fVOqvD9YBLwDcAg9HvF9PWn9uLzNMYO99AyMvRtLuD3DppK8QQcKvvMOkD1Daow8gXE9PRjSNj6QDTW9FZw7PcgtKb1Emu27VwfbPUUvGz2q8ZI9zBNlPkEKkT38tlq9WyXhvZi9VDz+FJW8ptvfPVCAybzpE4u9ZjuLvabUhb2GZMw9gsyhvbHJizoMN7+8MkRgPc+kab0YMNo8U42CvRjV+juL5vQ9QWyrvAt3VL1yHLu9PaZpPPwwJr0NRqM96IbOvDAbar2w2dG8S9GaPZjH9T20mDW+WlIVPuawJb4b/mg9qp/xPURYA7yxCru9vBJVvXrgijytRw09tfujvDkRw71/apO9yqARPpDf5D1hFQE+o0ervNMfMLzi/C89AOLlvGSTkb0zh9Q83mYdu3G/RT0/f1K8Dk7OvVrFnzztxLW80RybOwYNjL2OARU7gv6rvRNPvLx6xvg8IHVIPA0cVL0KX0C99puzvSPyJ71WssQ9a0j6vRzaMb0renq8VigXvR0mijwsglM9etc4vJGPxz0wiUM9E2REvX9eJbvZ1Mu8u0nRPG5G6L23V3c9+J5QvLL2/DyLj505T+v2PLXwDzmW9oU7aw8KvKkSBb2zKDm88PsMPHBvqzwa7k88rRrzvflp+DwmVYe9qvKfPBJ5Vr1XniM8hjibPeFoEb0rPak9CKucvX2EbL3QKDS9u0kvvbgOzbvKM9y9s+qGPa+9hL3r3U+9X3gePsg6JT2YzDc99GbTvKbZND2E1wo9GD0PvQpp+714GqI9/tc3PncNaD2cpgA+oTf0PXB08D2Qzli8kYK5vZ2Q8rx17Am8wBzVvEBOHT7bsp29kFX0PaGSQL1FMy69h36aPYu6HT6/2ZC9fIwjvNblVT2RvHQ9oNPTvFqwCT3xMPI8vCXGvdw/BbyXqR4+x5McPTNpaD1lQNy9Uj62PBLHEL3Tppc9QdulPRqiFL6kT8A9Am0Rvo5bHj2P+YA9YLG4vZFjrr1iDbk9D0Pvvbsrt70hkS872Pq+PSVWEz0tIjQ+WKcWvhxuwj3p7Zq8R6tBvTNH6b01p8o8hC1SO/Qfsbp/A+87QKUTPQlVbjxCh7c9MmqgPSC51jzojY29QxoRPSdXib0VqlI9byXNPaUtlD0UaA69WJ4xPJfmvL2nZBi9sPacPf37zDzVzsa8Xj0UPa1bu7zPp1Y9Uj0RvlzQMzy7uao8/AwlPdXyg70Rium8Y2oCPcnGk71//Li9H1yMvHzlkD26Ko69KJ+hPAZ+/j0oE7C9yCYnPELlSr0ZfcG9PInxu4OD1Tt2TdI78KnIPYkvq71VRq47zQCNPNAwtj10yRK9U9MHPU0G6Lyp4n289WX7vUtQDryY/l+9oEeIO8yJkrysiUg9/Vk+vSAivb2+9lE9gdazPfpYlruWcOW94KYXO1ql5b1i6us9zeL7vQkMBT0EOBg95fOovTj6Fb6vixA+l465PEDs0jzBm8K8/gz+PKhMJTwJEvE9ujgLvZXry7zQAfe83hwgPOd0urqSimQ7Hn7vvP9ayT2sV9E8ZT0yvf0MHj3Xjgm9Rwl3PCvGsDsvoRw9ursqvM6kDT2YPJK9ubQpvWHqyD1OpZs9ULmDPUuYDL1MEIK9Y0XeOxGEVj1+Tum8z2WDvVZhaT3ZXsO9ic6gPNH4db1oRes8WoGTvZfw3DwJMBC+LjFAvQmm6bsdXKQ8pBNLOxvABTyPPVm9yBBDvX7/qb0goT2+1NeIPUPWOD5eHo67hjzyvMoqTLzU9YW9rF2MPagiuL2mRQI+baubPJWByb0ksiG+ObowPUFByryJGiw9nO3APJRA5zpneUm9IK9FPH8aFz3mKU676jJwPXI38LwfO6y7HarKvHwVyjwH8Io99AruvHWCZryXb7o92eZivbwjnr2hSJC9cRaLPE7qiTxBlQQ96LqSO/R4Cb1MIwq7bmknPozXPD4LUY+9uA2UvBa4rb1fC0U9hp3VvECInTzizHw9iHXpu8j8o702enM8j2u9vAkZsL0DOzy8D57+vbPP9Lw7HBm9GapVvWoeh71mbOe7iU0gvcnBMDzv5Oi9IZJWPdkzhD2k5RO6Xg8rPfkjpbuxAG28jD8IPaeFaT1Weo27p+pUPUZ0JTsyQ5M8bhwkvdslC72Kd5M96/njO7T1cb08b1Y81v40PRv7dT2W27I9kjxZO9QCDD29p+09QfinvTB8y7yTAe68GL5NPC6+QT0v/zq9Tz1kvFlsC73+I5G9CLvhOlkCgb2u/oo9q2HeuxTBYD3v7zm+koMAvb2AyDxUvU29abV7vOX7tTxBavi56u/5vETV1bz1Vjm9w6/jPdkhjr0u5h09bXYkvXKsDD0amBa90r60vPx7ZDzt3c+97q+tuzbkn72fGK88w1i3PSbVnr3tY5e9XGo1PUUA9T1RLfG9xC8SPtKl37yJQwc+gY9evWJmurxuNc092HWxvDX36T3CP/M9PWyxPXgbN73Mzb67UBQpO2gItT3sqOe9eRmcPXvZ2btMaIG9wadtPTYR/72WLIg80ycEPnMfYz2ag5M7b+dyvJTvlj0lGKI9gzKCveHqET1akoA9d7RMvaACQL3qX7G9V5fXvd4JkD043mm9P0Ugvpx+bzyAvs69OnCmPK3O670NUJE7EO4VPQYzF76xUPM9SuIQPs/PEj7vYRi8v3NGPIS7tjttSTw9Xj0MPrJBoDxrVvM8cUx1PKopOr06HBQ+aDC9vSKsCr3E4qy8GFSDPSADtz3I85m9azOyPUNzSz61yNy9qu/bvIdbdT1SXoa8CebPPXNv4TxZscs9u8UovWVyDb7t5F66XEHIvKwMaL2jiy29l5wavSarCjtArpg9TVbkPdJ3JzuxaYo7SZReva0uKj3rcDq91cTevauHgLlgHLE9yNiZvXU42b39kLM97Uk3POTgyz1z4M+9mL5EPQKZG73nVYS7i5k1vMqyK73/Mts9hb4VvduqXz3tKIW9NNnwvWWZyzxI3X07R3IEvuPvl72axRo90aWNPdzkFD36c0y8d+eZu/Dplj0rKkW95PtzPWkXH736Lo28rtEjvbUNkr2bHaw9pAYEvhkExzxIsjI91hyXvGk1mrw6XnE9BhzYvNlOFb3GxGA8etEbPF65Az2Topm88t6VPahITrxnE5+8BG3XO3YuZ719t4A8+G+GPS63r71jmJ+8x6rOPGssoT3eUk09P4CkvI2qPjwssKk9Am+pvF+v9bxl6Kg9emg2PWu9DL1u9Q69UHRQvZSFGr185Bs9VqJDO+GM6rytoC89IASvvNaUszwmBuq9m9x1PS1mYz2Ikp694QyLPfCI1TxOdfA7Px38PAoQwj1yxt+8dEAePcIkrjwyJXo9huQdPSdeqD1nQpC9jUp/O4tv0r3oydC8UhOvvF8TJLwT85a9kNvVPCUeAL4fJ927ios4PWw/tLy+U629/mNKPUqEnL1x9Nu8WCBFvfrspj1XrAQ7fFKfPXooqT0MLq09cJjRu081SDw8ajw81FVsPJp5Dj6ousK9ejvKO4aORD14Pyg9JibNu419uLzaFaS70u0APqp6VL0AQIG9RM4wPSgpND1Brra8+VUoO9vTaT2mYvC898ROvHayZ71qivY89d2BuyNalbxLCx29E10Uvmw/B7wQjqs9tXCFvEV7SL1kM6i1Tx6OPTOOJ7yw4ys9/BauvZ498D2UE4K94NYwvfnLjj3h2nW6XpGnvccuoLsAp6+9Ns/tvCMHG7zDCxA7kT0aPSuEqD1zfty9J/OWvZEZVT3r+QI6ZuogPgHm5Ds6jKW949axvCIoGz1Sjks6K/dxuxHOGj0mdyO9c28Evsmtmz1Khoi7hHz4PS2+r71t/V+8gLF6Pf1uTL3QqNe8AoEwvTx4b71Tt9+8lZCAu4/8rj3q1aK7hoeEPTwCWb3dw+E802RQvVyQcTyWaca9GCG9PYZ5pT1DrGQ9kBzCvGcSDb23uSA8AgjrvCiaCr5XaW694LxPPQloBj62ZGC9B2EoPLAL4TxnsTy9xsUfvW3Kqr3uXtU9JS2svFVgYb1NIfC8G4HuvQDhgrqN/aI9l0iHvJ6qRz1pc6O8remeva4kBz30rPs9K28IvVZ4N70HG/48ZGlmvXJmoj2670I9v8ZIvfGaeb0q5K+7xY+TvZodmT2NlfK6lyLevDF/cjzTrES8KNXDu0cdRrsBtts911KKvZhXcjyL1A+7ZK+Ru16Ll7xoIqE93Rc7PCs/8j2JPGm9PX60PMXFcr1x+qK8CsnKPfgZxrrKuEq9BBVvvewIV73Comq8+VJCPXCar71irSC9Zn6NvRaQuDw9t9W9d6XdvCH3AzzTCYs9BX+CPAvh9rxUnM69WUHMvd2mCL381Dk9QQoUPimV4r0NWGM8GbbpOTxEi7xlLNw8JPwDu7baor2YZGu84pUlvRDI6TxXpz68ObSsPbM7C71uUq492AfzOcvYgT0WAz4960WRPdS/S70nX0w9KL+GPQLarry6PbM91QBqPZVyYT2zeZA9OVSkvWpr9j24PYI8C6qjPbuRJr1D+D28czXGPc4KkD1AzUC9qZldvf8sODyvXga8hiTEvJyAbTw/ANW9pAGAPRqw2b0LNO+7bja+vAF1gj1bCuG88hAsPccqhj3Us5W8Z52svb/n8z2pZMM6gk8evWFTwbwlXgy+XoQ1PTN8jztCMJW8saGcPH3hqr31r9E91MFLvdFXrzim3SG88zNgvbOglzyu+l+9YKU9PcGEkL0bivi9fqksPbjhab23FS69AArCvR0B8jwvwbK8wKQ2vWvkLb1o3BS+dn4NvDZVWD3e9RG9ae4HPus5gz0uX2g9tz/RveJBaTz2MW89+mz+PBlPvL3h0U09feqXvZ2YMLxzcMC7Gg4zPvVK7D1NZBu9WmUCvTSRsj0TPl07pAe0Pe7lij15zuQ8eN5NPZfxrjxYpSS8hDpDPWyoAz2tkq68czMBvvXQuD34Jx49D3sXvQMSzDz4vLG91Nnmux92trwp96A9DllbPc5XoT1mIJK9kC+BPBgeGr7iyIs9uwFEPUCWnr0zKlU+63kdPTOikT3BY4I9QLCnvbPhgrozWIU9ERCCPATpnL3atQ8+MQhTOjhJQj1b9Cq9/BVQPQOm8z36yJY8XKXPPQwleT25KD88+LcYPRpVnL1hMQE+9oH6PQ2KuzxXC/s9oXivvHc2oT3+ObO8ygXLPfyfmb0B8MC9Ku+ovWXOYD2ErUC93IOYPK20rryGmAy8FviDvCmHurxkhdY8Rsy0PL5wkD13hIQ8ajNXvLiLZroSYAi9a/PoPIYn171gkD09c0V3PIedzrzjWO+8IQcqvfpYeLw6fZO8K8qCO3Zp0T3bhHY6kGXPPKqvBTyaaNY8N87UPQ28YrwJIA68i9gIPm78mz0uAki9cZqvvNL+ID150M+72G/wPaPfg7zTjRK9gZUYvVf9eD0iGI+9F3twPL+/cb3GqZ88YWZFvVepwbzZiHm9apYSvRILrL3oSKc89g7XvRm8rL3B9Hk9NxX0ux8gNbxWvDq8grviPNM/sb0OQok9/WkyPapZhLuhmNc8TYdjPWAfP73njPm9MIudO0bWb72zpnm91KgsvTXtcbxMv2k9N7vwPde4hD0+kow8SdhmPcl1sztcxaK9lsQDPPf34rwcIBI94bJWvTF8Kbrgq7q9TZK8PTFN/ruCSn49N8B0PUCPmL07EIu9dF/4PDt5Z72yxbm9XbbDve2OwDxxtXi7D3TSPBRf4zzUscQ8tPcLPSzJqz11VRS9RN30u9QwkT30aa+9vG+qPe99Zz2JR1E9ikmhvd65Rr26+cG9vDYLPB1l8D040d09pQ22PfeGqb0azai6sSBAPecMRb3DiJ+9fP92vR/kqr23x4Q9UcrhvKYZhT1Pn1w9Ciovvb96DD4IjC+9+hsQvTIGyD0ZrDw9YjQxPYgp7joWfwc8LfNOPQ3ru7uNNEs9P4jaPFie27xVqK28T1qkvWXMXjuMPFI7h/ZXPbaAMDwcjdA9eT6wO6Ethbs82+U7KhdcPKMuqDwf6MS8eKaIPQAHxTzxdeY7BDo1vEzO87xYI+o9souDvXyPy7zoaTG787bhvCZhQr1hYCm82nY8PRNsxDye8zi9c6BqvZ8N4zu44Ik9xj26ve9+JryTwji91sPSvW8qkj2pgRC+q+muvAGl0D0GBro9j+1uvS4tpjxbeW69Qwo4vLG3FL02Lw0+vkYPPKF0uLw5iji9Be+BPYIEC77VR6m8jI32vbVzoDxLJww9Gf8mvUwquj3u/8C8tIL5vTVkAT5TJvq6isiZvdPYVz29Ys+8b0uyPDv3zbyr8Z+93Tpwvbnl5L0taKO9OpDKvX5PHT1hndS8RDMiPXTmMD0Y3J89VWS4vcr3EDpBvHI9iu/0vW83dj0TEQ2+PoiTPVeIqL1lUGW9EEuRvUJEyTyVdPq8I3tjPVtlFj446Ti6/IJnPITNsb0Q3PA8xTfvPa3qkD2IyWK8O2ufPPvZeL1lOQ694FWrvcUeEr2S4Vm9bgEUPM0Qa7z4D4E9FYRnOwQaO72nXOs8466+O8MeIj3atw+9nmM3PRaUiz0Lhku9MYVVPe0iNr5m/2c7b6jFvSvY9z3ogaa9gxWJvR9PPD0te+88aouwOwNbaL094je9WOIxPUo+kD0iTLW9dSLGPfX4vLxuk2y9PakyPoegWL2X8I27dgGNve0Rx7yJBtK9U8iaPI93FL7AePK9aZIZvTZCFLxTwGw9gTUWPZjFeT3uHOw9W6aIPSZejjx0NPG9wnxzvVXO3z2AJhg9yijvO7pxY71oqBI9cFz4vDCW0jwoOwC9iNocPra/yr11n0a9S9KSPeNfLLyCoJu9uNFUvQwOrbz7R5e9sB0WvEeHh73kXt48kQPKPZE4uzxGSGQ6SjL7PKmPnDjBifi9vgtQPDTWuzv17W08mS7uvI1LbrxLLy49QK/9vEERRj1/WEC8kY1APciEw711Jes8qxuNOy+aL72KZsQ7C0crvTMvHz1+AZQ6FXR6vGuu2r0syU+8Dfnfu4og/b0lEmE8aju5PXglOT199WS9pAf5uzkjtj1mrvu8ceHfuyU54zsSzdI9wG6+vM4xx7wGuG67MLShvMqDAD2J7bQ8vHkzO/A8i7y9Dfo9s/CgPP4xHT1MIsW8Hr4BvvE8gbuFdcW8Q0/lvfj3JL35foK9Udo4vTxknj1/v+u8lqG0vNcJ7TzzjUw96SkzPkCzLj3PoxM8McmpPCrho71UAVu9ghhBPU+xejyobbG9EvKFvIj3MD2+0r49OyezOwuUuTxUJTy86DpSPQB2wTwj9ES9p1oXPdTTfb1dIOw8YZFRvb+8zT0zzQq9Li7wO5btmzyHr8u9ud6lPHIOlL0bjzi98y53vaRMeb11aXc9pqh5vWvszTwbBIA9Gq/9vSrMKD47u6w94LthPP3Y/z16zJc9mYoSPlfZyb3vZwA9sWMNvahYB75jG6c8TgamO29b6724wOw8Wya/PSYPgL1i+8q92JEcPmaKzjzH3JI9geQVvXn79LzSO9K7IPnRPHoPmLxwcb69w96GPMWiNb1B76K9XchnPWmflT2Xy5k6oh4Tvq10Fr1GkiM9yJcEPfo7Srx7Uza9Lb1VvWErhr3kvCQ7aImyPfN+v703qAI+mC2GvFRlUD14Z8W9RhmmPZiatb0sS7c9D5yEPbJVjr34dlA9lNoEvaxsNj1dooe9GCq1veOAAD5jwug8wnXxPee8rj28qnQ9ZK0HPCeXC70wQq69VlEHvuan5z1KEwe65H+EvBbOqL0TlAa90lrWvAJQkz17Cq+9uA08vLUT87yB1mG92D/kPepNAzxZkZy9DvcgvW4CD77tFIe9xMTuvMS2ibzSI7w8jOfvPYY/ozx0K4+9qVhavOM9tzye0Fk9NIBovTtn4j0mszi6n5EHPWPKrj00dgE+zXxIPDBNXT3Mync8HlgyPAoISzhuKqu813uEPdnFKbxxpFu89jSYvI1RbjwVvyo9wJp4vVl3ij2Qlxw9koZFvVlCuryJpqY9nCuCPLYjlb17XPA9wy0EPeh1uL2Dukc3YgMrPNqWxzwvrAm9M9XCPfk+hjwZvbO9fqIQPZoYbL3/2EI9djoTvc7N/7zEmbq9ui8Cvd3ApLwwWNc8J9Ulvegvmz39qnG8yqlfvNjSLbzQSjY94CNZPbRMGz1z4z48seN2PMdDer2voC89JwO6veaW9b2mzzs9lQAIPDHh7rw2wmK8BIqTPeOq8buSp5y9OxIRvizvhr1r1989w3LMvVkmIr2/bxo+NK8TPGpftrvR1R89fHmgvG/DyD19yI+95FHyvPoTAz2PxgA950kfPbTKxD0yOUw+YLqePW0xzb0niGi9NwtQPSGDqb3SYge9+K32PfE1dbuZ/Tq95GCCPNWJ+DxopFs9VduhvEXdpbxAdHS8duVLuqmfLby2Qac94b2Tu0AcC72B0287TprRPFSKzz0Z/1O9soQ7PUV+nj2AkgQ8IEyFPf+lxLyWtze79p7XvP9QY70nham8GmOGvfALLz3mkK88WDvuPc+nhr3cTBQ9rlarvVR+cL0Opwu95ViePatZKj75Fau9oZMtPSwm+b2sRVO9i+fMPQw3Ej5NgYo8Pq65PP63mr0ZbLu86IMNPc76bz1gIlo9GnTJPQxrUL0b9u28jf1vPcX9tz2M4iW9AqA6PPTwljzdnFC9oPZPO1us870LSTS+pFtjPWfrBD6WvBI96OVWvpJD7T31P6s7zsahu8ogDj6lycY9+x7tPQWFJjx5Uxg9zK8WvpYYDz5uln2+VhKQPWvfij3OHLq8I9PXPAYgy717sOY8DAGLPaBSwT2NLbo8VT07vRI8qT3PROS9jl1oPYtf+jz/psq6Dv+bPcWJhj2GZHO6byAlPeHXIL5z6SQ9LkRlPV1/BD1epcg9wX5Eu10UPr0zKri8qJqpPHk1BD5BsYw91h8uPTSBdb1Hem29mdzyPIU04zyTcLQ8rabXPfjPiD15Www9JRmLvN095T3GKbg9hNiNvSEeojy5Pr69ZY2TvQzJMDxw9g69MPb+vbm4YrwfJuU95Sk+PeLGvr1WV7M99T8TvQqrr7wCl6g8ZFkBPdtFpj2/+hA7Mm4wvN2k7r39WsK8HynIvdDdoD3fVoY9uVBhvbcvD77N5mG9Zw+iPZIyoDzBYsM9Vt47PZ4Tqz1E4Ds8vW6lvW2qkz3RWYu5L1HfvZUyITwv6gU+H21Sva0Qlr2278O9uPqdPMVjxT1WsDQ7DTkPvSZsir3XpLE9biWqvYfx9ry4u7U91TcvvG/Uk7qNHyk9h1m5vSyzGzsjRgc9bknFvFpE9zzmmow9hKs1PMYLRz3L/q08FhTXPAYQdTsMqWe85xeuPDjevb2V9Bc9ihCoPFBN5Lt/0rO73vKeO9NlF76HPnQ9co6pPU7/qLoIlXO9Xu/wPL7B6T2QqTQ8H7qrvBBbujvbsYe93LIaPTUqXb2VdPG8O4SwPFVN0TzpUCI9uTBbPYJbBTzI0fC8poNxvUP1CL5WuZA9YWb3vI03DL2YFPq8OaFSvZOUwL0pO5283ZBJPdzp87x+dJS8CXMAO5oL7LxolRG87ySpPSZKXb0UeX+9gXvlPT3Xm71CT1w9ubVQvLFoor2hS049PIeZPcCPDz2wV648GJ21vTsst7zMdhw9ipg6vUUJvLxvaBE9wvHwvGaVe7wSNxa9+yb1vANo3j2vha08S7CnvGydqrwivpk8bDu9vcw7yz3WwG08oBdTvmJdmz1vOw07csmyPahxxr3LBdi9chtsPdZTor1F5Xa7r6NPPc5uCz2Zzi49SnJ7vVhbyDzCfC49d9SdvFQiXT0HCes9yxmFvGTZfz2WS8E9B01PujlXmz0E2j890XlvO/u9rjzr/w6803gaPe9u1T1cFfi9L1yLPdG3Ej2tykW7TzzkvUEXAb1DLMw8+g/4vdHYlz0e5gU9/SGtvUKTSTzn5hG8gFiWPIHNI71vRca8MNxKvbsHmLu8wUy94fo2PZTGD73QgH09mshcPW1SZjqAIJY8ZxWEPZ4koT0/Ous5A/AmvS0aNT1dlJ67H3aIPNeDyjuh7jA9jhXzvH9lL75CnQc+JYwRvMwENL0yHc+8ht9kvKRidD2QagG9uViHu9oSqbwew3E9GNwSuiBPGj0wwR49CVaFPBvK+L0yi049aj+VO8Bl8jxpTy88qHyDvIfGdzyfUkC9/jmEPMVEtbygeym99M0yPGQjbD3BYrk9oqbdvYbrDr5hTrS91oOMvEfmNryHnPw8HJwmvTQryTzL3Se9fwsRPVu54z1fIe48rdomPaDnizsLctQ7uj2dPJ9q2TxU2zE8VtiZOyW7Br3hOZI7bOt1ve1Hkz1k9ze9ebEevQEq+7yD5Va9F0jEPCk/S736x6M9LdGZuy1ErLtNfx699jIQvCrrVbv304i94SnaOsKK47wkSqQ9+NlYvdKk1bxh6qw8bex/vW/+PD3TUjE9X8i0PaAV27y55RM8CPEIPRV+Ur0HeJo81nX2PE0ZIzzmEY49RRs+POkrtjtSwCY9bMKDPRUjH72eUNs9wSakvSxFi7tRHJo9b1fkPVt/hT0Vzio8g+C8vaXrl71RTYO9fvAYPZAHODvZqhK+/bBOPK7fqj36jKy9w4UdPmhrVr1Ye1+9+O/ePDzDtLxp+ga91elPPeqTTb1jA2U91S6ZPRDHJD17nSc+o6QZPQrSCr2aMa09KkSpPalzubxANbe9B0SAPYuhLLyp5Cq9iO9IvLrlaz07VMe9+KGSOmHeZzzf5PY7jU5iPLGgaj2bsvk8xIzIPJ5nZL2qbQ29Z0xKvbqNqDy0goO8fZkrvdklF73jGIE9AwV8ur4N9D0Uyni8epnjO8AiCryyE1U9TRIgPZX4rz2lDkK9V/LDujk6kDz9iq09KUaNvPf91rwuG5O9ZXhYvbh4X73N6w68FMg3PNM8YT2mAaw9qEVgvHu8cT2zZ2W8EQGKPMqqCrxNZJA7RwFRvbQw2r2/YDy9Lo6mvX3fDDxBEVm803sfPSQjwT1Xyy89WaWHO+77mr3rQJA7zC6XPHXxGL3DHgm9+c6XPbmoiDwDzIW7tDCYvIwTPb0bCYc8EJfZvRZyyL37QIw8NO45vPU6WjxuxaO9j1NqvSkIxT3rzDA8uBsQvAkVFT0+OKk9iDkSPVEMgb3poA27I35xPHqhwz3sNrc8I3OoPCL2372ekIq9IfXguwv75z0N4cK9mIJvPbWTiT072T69cA8DPp1xDjwIjeE9+m3LvYfhG7uJyQC+bQRXvI0Qpr0O/O282pYaPLagQj0jg9a9pmAjvQp1oryc0O08OhPlO0hrYz0+9qO9erHrPNSqy703qQ2+LZIavlg/A73iVxY9O2ECvDrPSb0mCKC9mTEIPSAigT0o5hQ+eKd4PXvDvDmffm89isGwvFrwkr2ZFFe9EWc6vUpAP734DbS9yBFmuwC/zL27LiO9CVMdveYp2jyb/gA98dLZPOChsbyVNau9byEsvZD8K73Uejy9R3h2Otj8Wz0qPTs8LGCOvY2GIrvXx6c93MLQvHKhxz1sXIE8+4a1PJIpgr3IGjc97eyfPOx6ZT1llxA9lUipPV2Z0zwgufc996mSvd+BeDy2b1Y9pWljvIk3pT0PZww9apFFvZltdL1jOtu9V37+vPT9MT0GskQ9oCrHPMShlL39TLG9iU4QPUKUlj24OUU8dsbsPGNeNjzYM9q8ipcAvT+LOr2tBee8WgASPYdLU72sVDs96O6Ru20hHz1OjY29i6RfPQYOEbucDRw7pwB/Oh8gcD1QUn48BEl0OrP9JzzBplO8YV9UPIrfnb0wVbI9hwtUvaEfiD0Tkt+7MGmBPRJJtDoqhgE9vcMIPZpJJL24Xq86L9gmPZADiLy0NQ49u2gBPbjnWT2InlO7f2t6OeFMmrniqLC9guVQvdbuhj0obl47q4JFvc1iyb1OnhE8PUsUvYer+zyHC0i9pqk5vicnLz2iM1o9IBjTvcmDmT3V0ou7ZyywvF7euL3NqEe9c7xHPcTTPT3XUNQ9NKUIPnbDCrylYV093T4yPXoOjTwqCHq96ZP9PTKoK7wDl3M82YU5vezmS72XCkY8mwPZvYa4vj14HA69e+L2OyMcyr2dJBw7+727O7SqpjzkNhs+WI+Jvfxdv71t+gK+0+djvGYmAL4hIeQ9OOwzvKPIU70SJFq9dPHZug6h+TzdYJU9IXa3vQPhgz3nZKw6BMoOPWYztzy6oJY8stOrvK5AMj2+9km9oRdjvVCoKb3khBu9Ak8pvdz4yT3BmA69xzYWPoaYjjz/7be7ZGvEPCE4mLu56Jc9mVGRvFa22D1rD0w99U3gPEA2/r0SfuI8wRuUPBZ5270zlj096XJ7PSwMCL2eFde8oJuevTLTNj1H6QO9xJDLu8vHGD0Y4R28MF2HPaTX4L2KNMk9bhkxPXnUAT0Jqu29h+ndvfETZD3L2DG+LIDaPR1l6rtyLUS9cmhPvdrJJb1v18e9Cqq1vWmU/z0xMw69VTETvqVMFL7GYIU71YFYPW0VNr3YTiw9hnYWuwbAqDz9HrO8M4T5PEH3VT22x+Q8ThysvDwJnj1F1DC9EAunvYuvsT3n8Uq8SZ+1PeC1Wb1DBaS7+LUMPbqxmjpXSau9VJxFPW4jOb33jFy8JKeuvb9XCD5l8lA9q1ekvXmjHz1xVYk9wy6tvHFnVb0oEk290whjPff9Dz5NmYu94hUIvZEq6Lxmd8u7fbUaPOpouzxkayc99TaKPeH+4L3Jt7+9VOBOPXirkL19AwO9t1dOvI5t17w4Bum9OdWevB8OAT1dH6U9of4qu51op70cela940axvBmueDxNNm49BXk5PG+/TDyDvFI9tvbguxEukr0E0o89Qt6kvUrddz0nVAU7U8UVvqpPBT2mbGE9JQWWPf8+Kr1pKss8TNxovYkTmr05igK+HinLvRiwFr73jXm9V3xAPaqG1Tx0oZ89XIYGvFI71jzJ3XS8zuqjvfCTNLyI5xa9o5XkvSa57jxaJHi66Qv1POoc8Dyy/qK9HrTVvC0C/j1jmoc8sjGTvR2LOD0aHj69C8Iyvbl8mz3vSKI9KW8QPjJW1b38asQ81Okfver6AbyWUM69Se+XPJ2Orb3DC4S94uhMPcYZFjtepBa9grGpPEQQvzvMVdG9TL/rvOu3lD09CA898Ei3vaNygrwemQE+SM0jvXmI3bqo9wE8m/LNPDVrozzQrb89nDDPvICXIzzCktw8UzlVvarVQbxkglg99OkvPLBcqLs6Bcw7RboAPD4ifj0WygS9HJEbPkb4SbxRkG88fH3GPPtyhz3lA8+7F+M+vIpasLsPncs6xS4aPTJjZb3FON69RCXcPdXcAbwRim88sjuNvYLekDz9Mw+8bFNOPUH3NL2MUV+9uOgZvVkhir3+LQY9LgZYPd7IOTzuLBi9qxA4POszczvRqpY8sLOnuemRWrzGl4i895p4PHki171AB0u9dJzCvKT1bD3Ylpq8Q2asvHbXVrz8wGC96G80PY2Q5714odK8DZdKPV6Ubb3lgck95bSauqEJyryja2k8YKuWPWE/u71QUrE9iU4ePT4oTLwrib28peSpvBGdSDvPsj692ll8vFHCM77CdFE9VvDPPcfg3jz658I90AuEvbPoQDtvVIU9+B6OPQnVFD42rwQ+LcLgPeqrrT0MHZU9rb+JPSeE3DwEUWq9qYukPTmKar1Fv+K8JBq9vBRgiDteuNO8LbBGPiaFt70ABiE+6eBkvHacSr0rUT09oVifPTKdz72Z+ZG9kIjGvQU31Tt4EYi9sQCFPebHqD3DUT29dd0UvYlN7j3Rbb68PcqHvYCS6jyvLxw7ceO1vZUmCLvmAbw9FJcWveUfiD0TLMe9n7SIPZA5lLzpySm92PovvSm9VrvZhBm8ny4gvT6eqLzEVBq9jvGyvRinjT221rO941e9PXOPW7wxzLM9ufOSPS0zkT0C4xI9uwOFu6fVp7xGPNs8epqlvQ3OnjrXb7K6xfB+vb/HrjxVlUM8EE2DPeKyLrwCZgI9r4EAPRF/ZDzmnpo8MLGVO1BBRD25MZI9wbRJvZtfT703pTk9MiTHPJAlrz3DgAE9GpRmPcfQr7wtQFO9DkxqPZAIY7w/Q7S82NNIPfmD6z2urjE9a0eCvZ4F0L0NtBM98xY+PRO0ar1QrQ89r7nMPAPCWr2ZlZa8p9DMOzNAPr4j7GI9TBTTPPWCiT1lwSo9LqWmPX0qzL2nl/I864iePWOyy72cAsG9HidxPUvHM70kMBk9VcCavQzkPrxYgcA8SADbPaR/Sb1NqTC+ClAvvRYzfT3PsIa9589CPaHIDT3iwMK7F+GgvOFbhr3mEik9IOylvZ6g9DxNU4Y9WEHZPISKmr3zsHA8/bUZvesYET7hE8S7G6LRvUv5m7wYiqg9rr1fvUc+Z72WGVg9jnH/uilbW71GQOw8/DqcPB8hUz0xT/88k9aSvWaBr7yYjpC8Fk5rPPzvfb10Emi9/gNBPXNQOj051ye7rp6nvO4dFT1jHc891kfOu3kcojwBkhW+FG1MPM1TsDyuloY9XZRjPcua/jzV52w9x1IsPdmmsbwIsRa+jz+SvU58nDyEjm89tol8vQdAi7uKTlE9UMffvZ8/hjyclym9t/pbPorBGj3KHhg9KiQIvbGfFT2MOB+9L4tRvRYYyz2LspS9yIaWu+jeaLzJT6M9LjlfPYxMmz0slOG9qBDaO5kK971n/XY9Wy4SPWeycz06hhs8JIB3vGAeVT3OQxi99wvDvTcEHD1lZck9HPT3PDnSSD23sta9g2+ZPW/X1T1UZas859vavNqdbj3/qwG+Yi4svaboID6hVU+9xuzUvXqOh72ex2s9nMLRPcCFHzzrYDy9bgWPPRMOuj0vosO9h44mvgvPFb30tGQ9pXkmPazV+rx23VG96JzNPbQXz7uBlLA9Q4xcPVbIXD0174O98paEPbtKkb3o0ha8GObkPTkFCz5Vxcu7FuirPWXwE77Pxow9or7BvOOoKz4glaS6yuvwvEAGs7uqfCo9G4AJPWkwkDw3PYY9iZymvbVlrbxRRMW8IiMcPb6x2r0dcss9Lfyru+amqT29IU679626vSZSYD0LXO49mgt2vX72pzwoE4g8nlEBvhbahr1IeRg95Xj4OmFKiLwgPAE9icyYvcOCwr0Hpdc976OdvVWBsL0IBIQ8obW4uwvbgj2hEIc9DPBfvYxWgb1QJwQ+NSvXvVRBxL24jha+OUCYO5TulL3VV5499ZeePba7Qz10p7a93o0zPe6InD3YEpg967u6vGBJvLsyLDk9enl0vSccyz0ZOck92d4NPVXV07zE62C98XTRvUwfyjy7NN08bP8ivVShxTxP4eo9OJx2vW/F+jxVyPw9tTqJPUwwGbuWJAs+tAZ6Op71Tb2Y+Ry8VkVTPGEONzuY7xe9f2S2PINeDD2ltwM9JFy9PZwJxT1S10e99Q+LPWR0mLynTvk8ZwXXPZqKhb0Njqm9YgeXPP+C070e9u+9rQgiPnr0ND24wgo8cdyyvTr9mz34G9a9yz+pPMgW7T2zy9w9ngoLPkZCB77Mh+e8gF9DPcyeDL2mfe69uOuMPee2jr24JPc9XVo7PQBNhb1qjZs9XklCPO93E76RQUO8SdbxO07f3r3ctLG9yMlKO69tCD3dmBU9IblXvekrYbznABs8w4/nPKnOzzzx7IM9xOVgPATDpTyhkIQ9B4eTPJagSjwfHpO5dbcvPbhj570ZjvM9fFUxPQgRiz3t47W946IjPMkvujzJfNK8qhKKPDwWND1vHsY8GEopPJP8Sj0OycK8xRNavdKEALzmkhY9paMDvbWTlD2CA/g8Lc8GvUyl2byckXe8DpDPvbP9gr2wp4y9k8BxPbOrCT7YWxo9EGHOvWXnmz0/MMs8BjG8vHOcljzco6290dcTvuFIhb2sJMG9+4QnvYdhLD2R+ds8pFA0vfwymzv6i+A91OAxPIC95r09xEW+dnMSvVsoBT7txaY9Q2o7PRdEEL6bgnq9bnQmvLdnHD3aSTu9SWNCvk4VPzzDVG4917XkvGdrujvpyY89rSKgvaZmlT1kktu9u4WXvV3P6zz4dvK9lTFIvVPzVDvD0R89mAv+PY2cHb5EoDk+Y//HPeWkbbtZl548hP2IvWz3Lz7VRbg9XouWvbXSqb2/OkQ+Se0Avo7ePLwzWY89od0IPsGzib3sG7Y83cVmOweR4b14i4m9NadkvAgLRL2+wug9D4cDvaOgGjs0mP89JtapvRiYx72hOQQ+qhwKPY+dC71rNhm91jcdPZNA7zzBZFI93t0nvcDCiT3L9m+9hRDTPU4iST1fNSI90tblvWiVlr2Yn0c9C9dKvQjVsLy611K7exSRPcp84TxENM884Enru4omfr18tJg8oWMfPT9zmD3+TWY9S9ySPY6YAr3GJ/A9TF2evU4n7Tlvc/68bOW/vHF9kjwSWVE6Uu+9PWe9pzyftkI9O7KtPeSmxr1YUp88BLT3vFr1ijzVv0Q8GEiivL/pBz63QhG+/+kbPrD9jjsfXgQ9K4VovbxExr3OJ1m9Nw7FOoDuHT2ymDy9m1PZvOBzSL3WJdc9wzXivF782TxnXd69RiSsPPLcBLxrVay9DbXiPBn8KDy6Kkc9rOFmPY/Fmb3/Zxm9GA5MPdOnjj0raRy6ZiynPYCTWr2GQKQ6oQlrvT6fPr3Y5Dq7/KHUPJ+jbr2PxR69zaIPPsymLL0EeNs9nrvNO/L+hr1pIpU9PwUWPUBH/bwbeCk9GG4lvFULpb3ri4G9P4DcPNm4pD2n3bC8YReZuzp8+byntqc8DHHWPZ2nGT2DOsC9I2kNPS5LVjy1eQa9m4covdlpSDwnwo89dJjovaPPNj1wNb07a/8ZPiZqKb3fUtS9zX6DPRF8qTuszZo95SZuvapjgz3pRKA9pK4+vW+OoLvvwSg9JYdwvdeEWzwwq847VSZivLjdjr1MyY09BiAePcfswjoRBO+9ENtxPRkG0by2hfa8/vYDPe0DIj5JzAw+zPiWvYFgJjzHGvW9NwOsPWecPb0cTVc8dd0FvWGHLT2krdm9Kg+PPbg3tjsh9bU7lcGhPdLVsj0C43G9s5gcPdqIpz1yT8g93NSZvZwVI7xzTPw8A55aPJgMCL0omek9Om8qvBpf3DziLHo90L1SO80MODxOUOk9RuVruX/1cb2xHUM9JkVGvbRuELxZbCY8aG4TvaxIj72RrN294lw4vDe+nr0pGkU8vMCYPCnXkD2RHSu5wz/GvBksxr13+fi7VAGRvVu3Pj2w2tg8r3YGPrUSNz2y20I9fXDHPWFX4jxLLoE86jq2vd0zD772aGG8Hd6yPT76uT0nS/89cOffvW60S77PB8Y8+p7PPUdRJj1xuom8OiwzPRKimbzTSzE+sCWFvdfu9j2kpgi9EJ5/PaTlWT2pk948H6O1PGBLRz4j0xk8NHUrPgYSFL6QvjI8eXkIvt3AUr1sa0A8V/sEvqYc8r0iUDq9o+/RPZ16pL1vQyW8TFMivtI56jzloxu9jVTlvZx36j1BDOm96aOpPFQoBT4gBbQ9/xYQvn8FHz2mlcM9ZntKPAZVrT0l5Li9yAW1PQNm5r1s/Lo75HJOvW1S2L0yKDU+tL8EPW4pLL1S70w9KEYXPQCENL1dmLe9N6nBPCxsob2BEJq9+6+/vc0LBz4u7hQ+b1AePuNqCL6Ho9m9/V5KvXM/aj3fJnw9g4JGPcjYqD0QA0s9wA2mPSwOirzoSJg9HLhHvFjG3rznck48zfLtvHjQyTzez0c5jiLuvA7Pij1kHrA9zFifPWvBir2vHoQ9xkIou1OCTj2Lc4C7sILjPGOVtruUcjq9AHXMvBmFsb1YQCi7UUWBulQXtjwkXxe8obPqvaZYX7ybTHg9XNDbPe+n272Q3Ay9OU9KPWmUpr2Wuyw8V3khvSD1gD4X9g484/C8PMqVpryGeYq9PkyOvK7qfz3dJMc8WaXQPWQgYLrOOWs9jBYKvPeBa73jVze9KmXgPfVkIjzjKk89yS62vYn8Gr36tW08y7W0u9Y+DTl705c9qwnSvLOBGD2RnIY9B6iZvHBVAr1YTMg9yTxTvePpRDw+toO88OW6vb+0qD1G4Y47/u1YvZRJ3TxGq4Y7hbqhO5j1Wb20NbQ909AiPHwdFb0VPRI9sE7zPf+SrT370ZW8+JS3PHSXLzwtKKg8cWKmvVcFQT0vCUy9oXW2vaRwZzyf1w49hli1vMsgP72+tZK9PNBxvcFj2zygDsU8zVMtvGzyJrw+fEK8P8Z1vR2THD0470k87x46vaiNcT1Ctf48KxbvvH4Ckr3aggw9f96PPbSZRT3JHeA8ry0uPZKJpLwrqK69Cc6BvWgntLqw8/K7A2q5PZdd6bz0N649KK9GPQNN4b2TJFI9QuuovfbLoz1wuXA95/vKPSjFuTwbNpC9FMqGuwKAyzy1G4A9gME2vBRZ3bvZzQk8i1yEvaA7jL3jsOI8qeKnPR7Vsj3pS6w89d+JOb4Znb0EwGM82JYTvQRLr7wj+Z89TiW4PcQGPL1tJEu9YA8fvEhpcT3f0uI8X+G8vKRdhL0xmbw9iUNuPSgBKr3WFEq9qEaYvAhiTT2uace9zXcbPFHJ6zyzBgg8w4xDPL7dvj0WMcs78VYRvVZ8f71p08w8P1llvMFRWrsRdKu9UMrHOr3ii73Wldi8HUpjPSLyi70WBF+8CaywPL2n5z3qB7w9oWoHvn4+N71ijLu9B3RaPnEu0T2mVjA+7fypPd1h8j3AZhG+iyqgPexhcr13f4+82s1NvTfIRj0DLDi9kpADPbu1wb3trHy6cLUTPrGkXjwM6YQ9ZkWQvdy2lDwCZLY8zFwWPRYGpL0QJ5Q8J8hyvSXLhrsrAre89w/EPVWNTT2KQmO9psRqvXFrzj0LtFC9uf+4vZU5Ub0xNw895lW1vXM3prxyKA0+shgKPargAT57Lcm9o+bRPKFbKTyx7q+9oN4fPq95xz1ici6985YavpV4XL0BlRq99paaPWnGuD1/DFm+GqHWvBe0b7xrGAi94FypPaj12Tx3yQw9pfsVva9Lmzy/4Zk93fBCvdsbIb3z5hc+jxebvGABmz3Qow+9sEGwvAG1g73fjgU9OmCYOlRv5Lx3Sjm7qgifvQvyUz2XcNo87+dRPBArnDsiFq89WrVsvGWnpDxS3gI9CAK5vX8Daj2rVdO9QoeUvfSRFD5OMog9Qz4CvglxEL3qEZ+8M/Tkvbb+ej1OA+08QPcBvdq7F7wQRzw9T5CnO+iAoL0pRJu7nQZ7vcfHDj5KMYI9BI8Evr/2nDr/inO9fnE5vIbBIL1zJuE8JDylPIiVU718Tyw99MABvT/57j3XIgo+XfkivtZWaj2XAwI+kpRLPRYiOb2Y9Qk988rbPVJ3Az6Wr1Y8SvnLPGGulj1mWgq8bAaQPdpQNz7h6vE9NVRHPYed5T0FNP+90eg3vYTjcz1I7Qc+9aqTuxabKz1NYIG9/CVAuYNizTx/xyy76MINPeIe3D2+jia9Eb9cPfCT3jzkGLo86Q0QvVDa5bys6oU94UyyO5Mfejx36SC8mEHsPSewLL1q2+C8vr5vPb0uPz5eIZi8kyO2PLtJMjuFoaE90DWDvebsyLzp2bS9VUMCPtTFkbxoa+c5OD/ePf9mab0BQ7q9VWq1POTv0TyNOY69OruePO5+cb2cgKQ8MUBgPZ43Db7v6mk9iO82PCooyLyUp+67shmuvebiNzuF/rW9eeVevcZ2ML6+tqq8s/lAPQPVXL2dp/E95YgQvbORwD0E2FY9TpOcvFOH7TsT8zg9YWz1PdM5UjyiAgg+IaUzPZaVFj3fIvW9aHVdvfbmuzxkvqo89mIyvb80lbzAeGy8qIDgPH8gqzvpAFa9QwWBPZpjRb1Ob6E8DbAevVEtxz1dxya8ghqzveVBvL1Shdk92zoUvceiET6swKc95kOavHa/YD0wH9q8cvQtPQwRiTzemZA7icZrvR09bD3jBwe9ExSgvYDDcbvEUae8WpInPVn5L7yc5SQ9oF+NPDZqUDw1/a+9s1hoPQozA7100ok9shgjPQEOuL3GRUM9gDnMvJu+Jr5kao+8XQMVPIsnnr2AnV28XzXPPcncdb2qc369RMLsu8Olzzzn52i9+jWyPVyLnT1dbsi87XdHPe7TdL2/mW48VqPPPL3T6DvkrBW9BamnvRseI72gOZM9x3REPBvUpD1rdT28bx4IvY4IVTtQmrg9c6RyPTo/kz2RA1A9NFpfPUd36TwFKqw7v9JMPfDqRb2ji9i8mVkfvkrqFj1iyNi9zULkOymH57zsuog9QlUuPWcM2r3UoOq9GLaGvROanDzJH2A97MPpPEOjmLwz5v28+ZudvXKTCD60BaQ9P1CrPeemtjrQ8SG9dQMTPkDw0T3QTvg9MA7vvItGjr1XnPO8QDuAPRyewz3scyq+TaOJvaRRJT1k8ou9cp/fvV2Zz72AO/k9WBlavPhfh72w7s09zFE2vWwtuD2n0pc8xd2OvQmCILxFGac9aXqmPWY32L1/4d064DzpPNFBOLxJgoQ9LO66vBHMHTkcnQ69iYmAPTs4J73ecPk8o2hBvFTJqbxkJec7b6phvecv3r3m4Iy9D+ImuhKNijt0JJ+8tJ6XvZZQSz1O+aa9o5dVPCaM8LwdMQi+2hdePW7Az730ynw9yAiFPR/c4r3E8JQ8XYe2vUcAhL2VAdS91JgAu+M3gr3Lc9U7FtmHu7XvPzxd2RA+dyxKvYCeSDxKOjS9PIOAvQ7Hkz1QIsC80VY+PTCxrD1eI5g9kycKvo1gFb2/d6e82tszvFnVAb0zRzq+/z+cvNzUSr3qgwW9BjqNvS8eOL2Lg3c81TBvvIS4oTy6z0w94KsSPeAZfb301rQ8sCWhPQ40jj0c4CM9S9m5vJBw6zxdzgi+xnA7vDjs+jxdFXG8P8IgvqdCLTzqGNC8TVlnvf72Srwmx0U9nvZgvbTbqjxCyJ69026MvYYTID5W2/G8bFwVPGyc/j0onjo+LtUtvUZSTD5a7u49YcDgvX4FCD0Thg0+QhrTPWBOh7w5Cru9JvCwPbg9GT0IHT88Wd0rPesQjLyhgCg86EuWPe2EGz22Qks92kvxPN9WFL3EiS88uzLovLewez0eKHu8xSunPXb16b29AB48XFGvPIdRoLs7eUW921ZlvCY3Cb43Fhm9oqCvvdzJFD2rlRS9q/R3vV4OCb06EO09nnyavJSdID4V9iW+/CaEvHYTAbwkG0Y9VXYHPC5SHT1oSM49NSzfvPxr6LxcP0G9bQ+YPamNgbwnEqI8VO+JvKQGKbsIL8K9HCCsvU3ipz3mAYu7UKbsPR8qBDz9x2Y8rMAVvd1MSb01aqG8OOdpvhW1ub3HQsU7Ox4Gvvh4nzzxYdc9/Fhqudt8Njs/eJO8xUnYPJnocr19+fE8htZGvfXUJ73BaiI+VPeFvb7NUz31QJ29cbKZPT9Ezj3poKi8vmLqu5Lk5r2HvgQ8WUxhvTcaHL0SGaQ9ePMUvAaB+byrmc49nVr/PIbVrz3H0Q27JMDkPZ3NNr0Ah7w7t1cKvUIMETxkTg4+6GyRPe+ITDwSC/k7mDrfPPgfg70rmBQ8Rk/svIjPxD2XrxW+kWvYPYXwUz3F1NA7iFesuwH7ur2tj166xNtgPeieWrs4ZyI9or2jvfehyL2ySO28Us63vC5YLL2fCGo9nYXrPM/Z5T0foam9cL+jPJitEL7d3Y+9BNSouq3QpL2IaZQ9w5eOvYvi1TxZ+2w6RKs8ve+Tgj3IQNe8TtR+vChudj0yXw+9HlxyvX34cj1A0wg9c0i4PV7rJr2lW3496ImSvembCz7GNFu9oYeUPeRnx73HZd28Xdfvu5caoTxhXgq9jZgRvXv8gb02LTU8drJkPCALCb28O+I9Wu5cPYSs+b0fxVc9+XWkPVNCiL2ZbJ08GgURPkHS7jxPg+A7kh/3vXYQIj2TCN886y+0vRqP8DwVLos9p/bOvTpe4b1dcBu9l8yNvR9Kmz2C0yy9LSwUPEOSEb3VqRi9MaGCvTId3Tva8NS9CGVCvCHlBb7EVpg9BU7QPNvw+T1s+hu9gvdVvbYelr0bZxm9WdeDvZo3zzu69EU930YQvdFWSr4KvlG9O7iNvas2rD1J2F8+oA2tPXOXsrws1di9R8L3vXMZZj1eQvY8Rw2jvdUaWDyYV1g8E/MzPZRExbxG6ty8W46UPaRxQj6nW4I8w3uTPV1ODj0pOV49iWtTPR/ZBz4Wkao9s+GZvYZ3jL3Edcs8m3qmvXbP1b0OO0a8EK24PfvoRb45qZi90jzlPHLzVDygeYs9vDkmvfxG0L1zk8o92lkQPHFEkr1Pc/K7kU+bvVIpAD56W4s8RdKLvE5Sir05mgc+uktVParz2b3UvR681EzDvbsKCz3xyJC93ENbu2pRDb2XwBi96DN5PS/e5z1gGcM9cV+COy7EJL1shpo9ME9Fu1glwr2aOyS+hrRmPKfAYj11KI09jfS7vRse3L2EWb09rI4ZPbyMvT3ZRxA9RNiPPZeEeLyNLyK9OahavW+pNb3v0yA9JMwUvVl0WLyW7UM+DuMTPrlLNL1rBCQ+NHezvVP6Wj21QFY85q84vMWlJ74+upq9VYgVPVD6V76d/ru97IPsvTHYIT6POCM+2dhzPJJ0/r16K24916WPvXh5n70zk9A9hSJRPODEN76J2GY9bhXcveM6Ajzz8Gy9YJ2hPBzJLD1LUF49MoLmvK70ArwCAqg87ZEevOhs1L3wu9m83GnLPYHb/rygQzS+wZgwvTO6qb2dwdQ7c6+oPV9Vw7sl/l89uwDBPaqVCLwLUNQ5hfC7vIgxbrzxPBM7oHQQvZ3TEzwyie09LdQLvbeBkTtvOQU9jSDLPQ9vqz3N1UU6YC7zPRf52zwnhNw9fx9xPDoqGbuAvKE8XWzwOxM+Q72CcD69UcZ1PYO0dr2bXyS+FtjnPEa9HD1yG4q8uiQhvufRwTwnMqA9cPS+PFZ7dD2PWyI966yevXjbazwp2Ha88F0zvigkED4yCQe9UgPMvE/ZFL3W4mC85ZGAvYeX3z3qOp+9E48ZPHocEL6ZfR699JVmPTJv6jwdCe26AN2+PJbcBzwV/Cg885+svRpwl70poKG9OYFgvZ+dM75otSS94BJ5Pe103LwvHtE9o/PLPQcCA764BAQ8Wk0wuwU6ND3gPEU9yRt7PSxz6byT3xm9OPhVvUVuQj32jvg9ZFLTPfA1qj0B9wS9EqlavdW1aD0W9229rgQAPtYFPjxnmlM9TWUtva4Dv70O3Ba9UkeGuY8cjT0ce668cWJSPUJQ2jwlEAa+KtdwPRHhkr30oae9QhhYvGPSnbwhpjg8/b6ZvbilhT0xHJw9pX/vPRPB4LwkUn+9P2KtvOD/uruJeRk9nM9qvSoRWj2v5Mc9+AGiPVvVcD3o2BU+knk5vvYI+j2Ytoo94GAcPdnHZD2rBRg9oSqOPS5dGTzfAeo7a6i+vMA5GjxUYx491bTlPbrYE7xZoj86Ux/SPJ9bzTz3P+u8v4KNu4TRXL2YHNI9g/2PPTNzJT1Q5U09Z1paPd1IgL0x4T29IfSFPUs1lL3Kdfs8LpM5vEUWvz2/KT49zgJ/vRGRdj0xCGc9tWmbvZ6IJjtRJa89HW46vP/MwLuKzrO9j0ulOxQIcLxjyqk5l+iwvG84KbzwTUe9jYC6vbcmlD1MUeO8epRkPalusrzszYw9RgDXvNGIL7yhTba6yU3BPWTGIz2jXq69G1wNPqPSoru0mAI9g+qRPclPAT1YzrS9XdfGO5c4tzoxPko9u4+5PZ4My7209/s9YWeZPTwLMDxWKko+O49TPQPYur3rYYm7wMaxveoE87wxIaW9ZOPwu2nzRb1tCuQ8fB6ZPQyivb2L37q88TPDPGHTZL0dgp89Rm+7PWZ78z2ObZE93I+6vZaVKjxpiwM+YeyPPGcqtL2F4Iq+88YhPO6DLjp48eS8+LP3PJ5du726ese9RVUfvrcyLrzIkFS9yKttPOvzlTw9Nq29ZlmevYIVRz1xW8q8ZnIvvACqID7GMo4873fhPVyn6TxWHQO+NOrRvdujGz76Y++99cndvSMToz39BSw+h+4XPmp+FD1n8ZI9aJE+PSZynr1lHCe93LeavRb5Hz0xe6g9z43UvNIDRr2X+Zu8VjFLvbZJQ7zsvFM+qdutvR5suT2Otfk9/mj2vD5Kwj1gJZo8s/e+vbzzpD26oh29hE6kPYYUAj18YI89JJ8nPc06Hz19pOO8ebMePTaqDj0DYvY81fD/PZ5pGr1PYta5gZnLvFaIVz0VidS8gOxvvXihmDpKeX09+T0FvmqZvb3LPiU++BEUvX5b8DsZfwU9EG1XveLMlD1m2AA9sND8Ow+mpr1xwDY9NI/oveV2rT0GgVe9RPjjPbVQPL1BUos9YZbdveyHI71CFmG9BlWIPefbBz78gow98WCvPStSIL2ejrW9Ny/4vHnHZjwW9RQ82GdbvSsQC7xde769rHUiPW/4iTwDQlw9wdF2PQMK9b00IFi9+YgvvPuAiT0fXlI98V8OPhuY6r0qpK89vByMPTP4xjwfpZG9jmavPQtgED031xK9XsgHvo37YrzqmaW8akK9PYK2Ur12HGy9y20PPqmTPb0F6IA9ajkxvXlGtb2RKJ+8I4vLvZgbhz02rLa9qvH3O4OSYz1afOG8+j6uvU8H3L0H1pC9onw5PRQl0jz0CxK9mn23vF9T8L3QSHi9m7jCOy+h073MtmG8gFG0PY0OO76AIJO8vg3rPdOU7z2GObQ92cJkPabImL1F+zG+SdU3PXW7tz0vN+w9fHVlvetIHT0Vz0W8abQevhzJxT3JrPA92O8vPYLNabyGh6a8WnYcPSB3iL2KMvu9Eib/PW6WSzx6Biq96tp/vaqTUb5RTSk9CopfPZlNmL3aGHu99PI4PaAXMT0gdgE9kk/mPO/iLT7BFuu8RhAhvbyEIrrb2u28dXmyvUQ8DD2yqNy98IV5vTWdUz32EZo8H00jvD05cL0bRTg7a8wgPWcLejzbaaw8lrFmPSXW7DzPXdk9mYjnvXoQJj5Ys1i8EkSXu571Br34dxu9bGaYvaTyFD2z5qg9ryFLPSLR5L3cwNq8er+OPUotq7ysFo+8eHiBPMUs6ry+Y/O9Uz+aPdzhvT3Lw4W7eiOzPK25n72eoBS8iZa7O3ubnzoMhdI8Tpcpvau8xj1FJA496HeaPNjXsrwXvSA+gFNsOxEtVL23iIA8XT6PPYO+cj0G9lU9zaZEPe7H+jwlyxc9pinCvDL7Dj3ouC89v4glvIXl3z23cpW9S+SsvKajFj2umoa8CBXHvKiKAz3K1Dg88uAjPNPrH77h7l27ROjfPflNGr6TuYc8rm/mvMzc+r1bP3e9vzk+vUNaJr6W4gc+a8w2veFhm7y2o4Q9gk6fuo0DZbwu9uG8KopPO9FOIz4JX5S7DrsdPaC9Er2AZDQ9r32TvVC0Hj17tYc9z0d3vb0gsbvCHEm9Nqj+PRJOTr0DoDS9bjeGvQGm1r2Bcf07P2MPu1A/fj2qPW88uL0VPUUgRj1eZBq9oFPXuyWFNr0jt5I9jKndvZwfQj5XAha8O6MBvOm4Zr3r+ki9uDZ9PJxHvj2KQxm8cBXyPJQSpD1pvpU9NMn/vNptEjykOqy8i0sUPRq0nj3WAWe7u0VwvDIzrr05yf28L/CUvX8JvjztabE9bys/PQ7kHr3g9qy8hghxO7QXQL38qPQ9yr6DPbe3JTxNJ2w6np0lPenppDylvbe9b44QPGXiJ72TZ2g8carfvftXTjxVwak80rxbPdxJmz1RlT09KE1ovSmnXD0mYQy+tdsrPtm2Ej7BL0M8otkeOYCJPb3aIRU+uDWHPcCRxj30K/w6gRmEPWtnLbz/Z4E7sB2ZPeo6BzojEMS9kup+PY4LNb7c1X49s7Q5PETDLj0SLYy9ExOsPJCxAzzufK29VTonPZafUT5fTX49GZ8IPZzBAD4T3tq9F9wiPpHPgT1k72O99dejvSu/Lj4o98+9imaqPVLYMT0CfI+9SYLsvX3xkTrhRCg8BkIPPXNgFbx2OxC8WjtmveCzYD0K6vM8iLorvZDMSb1HEGq98sHKvYperTq0gxO8V5alu8yfer2TGps9UDQGPYOU7j3lURy9qutGPd4zcb1+9QK99OiJvU3CEj7r4KA9aXZkPNUZi71qoR2+GNDMPZGeEj570M09E473Pcv+wL2I3ZE9YPYGPTiQizz5IwY+Rb12PCqfpbzvOZO9c/2hPtGFyj09sFA+RHXEvAc2db1Q+Ge93NdMPfMPFz52rGw9HXQrvfdbmL3eO6w9BcakvSpGtzxvCSy9SIuNPHl7qTqba8g9yoVDPa2uWzxKfnu9aYwpuv4FLL47d7I93lJXu9b8JrzkImc9aszNPa2TAL6NPiE9Uj9HPf3+qLyDFAe9GWz4vdMWJ77ZMpg9pMX/vcLgYL6WDyS86hUsvb1aAz2vHY89v+l6vO1r1D04lYm9iVSdvBAQND5QRK89GOMAvtJzoz1jaX690xwePfnwTT1xrkw91o7UvR3AxrtCPRy9AJnKPPK3Bz7fYsA9/GJhvSswkDx2stc9xX+RvVVUjT1tsjK9mWcQO+vqoTierGY947CcPV5JLjzj3r+9+1PLPQnhUzx0iBC9x6NjvF7uCL16dNY7C5fwPNJo6b330qc8RSUGvX7HRr64dDq9b/hpvTBqHrtFbOo9Go0DvqgAzDz+g6Q96i8APhTwkj0g/dC9OcOGPRDhwz1azKU9s6acPHZ4A73yYog8AtXbPW9+mj2pTFu9b6XDPO4EQL1BcuS7d+ogPdfCJz1jtjy9lHXkPJRdmT3RyZu8/XDGPQROybxGfm69f/RCvVwEc730W6m9rVOMvW3AOT5t14+7g3PPvADtDr5E1wW+FjVOOwujizs+7u27ORgMPmSnJ7yzWRI8aHO3PLFwcj1uoca8PFBLvMs1BD6P4zs8+aepvAZiOz0ZrmW9lVbnPRI/LT3MwJm9JZu5u87fpj19RiC9trMnO0cnwbwRKoi9a7IVvjwKqbzClCy9rwd8vGibZDz7IBa+JVRovUusxj2/J4W8QEOivTq7ITwsUyK+Wf5RPXupxDycbGu9WPZevV0+nD0I0os8gDK0vIXJH7scZ7S8rssFPKKPBz0syDC9XxyvPVfThD3ICCY9HdfqPOESF77ftWy+7TE8Pb8w9T28gMs8qLxaPTVeLj7r1CG7KCmbPWb8TzzZTIQ9ATEMPmCdRj0bWdE8Aopju20bir2q38w8iM/nPfyeaT3fa248+JFvPRnLhzvvuGO7evztO1mNjL0NLq492jJ9vYGqxjzsDGU9mTq5vS/olL26/+w96KpCvohScr0evJO9aIoQvYbRhb3NSyU+oNYxPY9Ikz2Do6e67p2AveW5ML3tUIW8tminPQEeAL4M3AI+yaLOPOerTT1Ksby7tbi5vN96xzz3uBA9JMk/vWTcmLycZ+W9QtCNPXR1gL3p4V09qswhPINcQrzav+A94YKhPaENkLxyOEU8mIGxPSx5JL1F2KO99ko0vV/DSD3LxRk9o9oQPoRqCL7cjP29GVfqOxd+D739nC89I6RRPYX+Yzwi6b+8ek2KPQUNuz0yP9A7gUeUPWY5v7z3rNA8ScTUvAfgIL0aSaU9pD+jPRxJTT35bsU81/zwvNf2uDzTlAU88xjLvYnzGz2gkuQ9CVdsPERxDz0fxE2978tevZ6FdL2fwuG9K1t5PfH1F7xZTvu794LdvC9fXz0JiFu9kipYPZkLKb1nwo09IG7kuyHw7zx4A6K9fcZBPX1NSzwv2qG99WEEvKpB4rxeqFc9np6VPRe7OL2hSaq9w/PrPZm7cL2ZTkG9UqiYPaxDBz4MtBA8ZU3ePYO6rr1P5VQ9JOSfPMdhlTzYEmu6NngBPfKU6zzX1ws+L0qqPKYLSz2ztoO9tstIvXIbFL7HwWu8dHU2PSLDFzzESqm800nNPX7rALu2FeK9Xf+TPWCBOTymfXI+jISwPVIrnD0RZ049H5UBPJOGmjy9s+i95MbQvFIvVD3/hQ49olEnPfwZ7j37IXW9p6J3vejnlzqOcpU8W2ZrOynyAr0u5OQ6CskLvMy6kD13Q9U7QlGcvBOmYj24Tke97b+MveM2OL3G1hu8suruvEbImj2k+nO9YraovMDZV7yv7WW9i4CQPU3DCT3A4VK9DPd3PJiGMj76awu917isvdUvXr7cuFC9lctCPN0hoT1ySAw9iUiJvSgGQT3QPGO9aVApPZneyj3e+DQ9QTlFPQo6fj2AyN28wTjAu3y/mjwR1A29DQMevKshpz3WLyO7O9P7O/597zyb6Vs+JMEKPV3t/rzrgZ68wGs0vANXqjzgrRu7ESG4vd9b5DwO3xY+QToPvp+Q+jxmg+09+H0ZvJC7yjwbF/I7If3oO/Z/37zaA7s8eDMsPKJOLrnuRbc92LxzvZ3v5LxUj009zoGTO5ps5rzUjuk9QnN9O062uzyfYZc7v+NxPC6dhjyJyrI9xYfOvCAnLb3MFLs8LGo+vT554r0P4kK8P4h2Pf8fZjygF6+92WuVPU9ZqD2gSJQ9kzQBPsQhUD3Phoi8FCyovdHN4Tzfa8e9S1UZPMxBSDywzfQ9y256veAqkzyU8AI9PMi7Pc9fuTtWAY89bKplPWAx1rz6spy91lixvG6xW71k6iO9Nk0IPTJAnj2Lw7Y9wA9mPOzY2ryNXUK7wh8BvaRtDj22W7i9d6KiPSk6d71HrjI9fapLvHwiE73inEy9O0hZvcWcST13D5W7KhdUvM5pir2hpjI93MOJPeGAFj2lcB89MFlrPTfHnb2e1qw9HjCdvcAtATzAVxc9yIn/PCnCeT1hVr686YgAPHo1Hj23VOm8QtF1PffHzL2VHOq88NiOvSgeFDy6yYk9VKF/vWvetTw8POO8JL5dPbRj6L01VZI9Q0+ivQUFcr30NZM9iQa7PfdfRz1o4I09pZ4DPgklHD0Giu07z/IYvb3+VrySTJy9pUu7PQXPXz1m4Pa874U7PX2g+TwwSG29UMgnvTcFlz2FagS9hyPBvDzJdT1X+QU9tOrAvQFkDj031KA9xp6CvXaCj7uVyM+9PtqhvadOLb1+VoE97DJMvWKWRz1DP5m8xzO0u3F9wT2bSN29McM+vATFqD2TBGg9E9xgveQRebzVFVu9GMOyPCqUML2AMWW99lFMPZWRjb2jcvw9O4xIvZULkT1Qr4281U80vB6KLDwliJq8P4juvBN0xT2zsi89FujwPJAOGb3Hp8o9l3qRPTJ4czyzlBg+aTZ8u2MiML2hH069ApuFPcYOcz10zyI9XhM/vCrjmL2Y+jG8WtQNPUee/zz1lOu8xCgkPI6/Qr3pUxC8YgRZvHiQpr2d6Mi9g3UIPprhwD0Q1lI9WoWFPRK/1L3vBGI8CQPMPDtkojyfEWU9QCqlvRFoVj24rk48VSsBPLh2Ez27TQO92a6fvDajuzzjF529dRBpuyYpF72UB947I0YtPXJ4er0vmqi9A80yPQQUDT3kD0e7wTSVvS5E3DyNGx+9LqiKPAvOxj17pJ69PfOFPXOPor1Sa8O8Tp8DvnGQwbwMfkO7TZKjvPjNGL2du5S9It4YvoCFEr3QYkK900dnPTbEujwro5s8ZH+5PFvrJz1MG2u92okSuzYLXL1e1VE9othavQWQ9zwN1+88Kbw6PYispT0hvPw9BTYxPS4OxTuldsA921Mru/Br4jxCNSM9zFTnPRl/Oj35QYq9wUkQPl+31z0rTc686v1Iuz4U173hsaW7KUsyvW0kab0HQKE8r/D9PR7Z2T2jIPm65nxAvuJmeD0mGJW9vyXLPT/RnbwIPO291D/cupnsAjytk5A8BD7UvV7Rjr2Ro2e9ka2OPO2ckD021bK8i91EvYf9v72b/4y9pX4Iu/wvhr1nSzM9muZ8O2RitjwjILA7qxvUPAAG0TtlEw48tcaxuynFfDy0tCU9pSl7Pd5xBL09vQa9mpaHOTsCkL2PgWu8BuGDPAeI+Lz5lGA81rVvPX70xz1iiaG7LFNAPXJldzw+77e93di/vaTaGr2BySg9UbX+POaUej12d7W8e1g+vRGNJj3sGeI9lKJ3vB+ANTy6LKS9zORLvWUI2LwMxfA8lCVKvfvdj7ybrE29WEnQPQ/DkD0en6+8b0GSvR/szzzN0lg7i/XzPFb04zzFtpk96wvpPRpVfj1pJY083jS9veW48D2xcrS8VOsFvnZLwD1H1S8963PWPB9vPTz8TBK+NJwWPoL8tD3K1MY8IRtEPd9Rwj1k19a9NmehPcK/o73zi+a8tR3JvGeL27yPz0G9b8LcvCaJmzzdKqm8KuCSvcgJSr1yrzU75AIhPSwTnb3Mu549q8ThPP6NjzyfJne90yhBvJqkLzyqT7Y8dI+MPZT18LwWTF89c0EXvSZdcLwbaA69OkQAPjN7mT0XErm9e/R+vYYPU70EiZ29PB6VvSfABz6bMjo8J4y6vI9c2D0z0309X4IPPThxbr3tbk68njKtvWmPir0ykna8ItZpvZLKsD1wH4Q9/88BvuFSKTyAW489A+dePUTjnz0j0gk+LiS/u3aOYj1quDC9NHV3vRz1oz0ooA49rB4UPtu5Pjy1uSW9a/qOvYiNSz1wwWw8P+rUPOkSBz4ZL7U9/VgfvZMnCD6BHZs9VFUlvFArDr4apDu8WddivFKTNT2XAra9LQjRPLADj7xXgcO6owLoPcKbirwYbOk5jloavdqnHjzAJXI9iUwPvqoPnz2NlKy8V4Ruu8ROmD1DVma9gL+avRYdAD0qGRu+iJz1vGFmpTtnrsC8YOxNPoQ9uLzF82s8BxXDuyvzsr2+GZw7Uk/FPecBxb08rQg8AhDYvNh3gTyxxQw9v4zvPLu28rxry7Q9YwKCvUQa7r1HmOE8Tss4PuxL0D0uevs9AFCjvaXXWLvngHU9EohuPUUhID2AQsu9jlmzvD+2ib2mR0O8lBW3PSVSnT2/Trc8UmyBPX2yx71uGJS69vlhvTI//7xP0Rw9aEOwPK1ic7118gi9AyuevZe7dD2m1Zi8Xa2TPLzDcz3oCAA9yix0Pby9Wj0y1Gw8QmiJvcRc6jwtx7m89x4xvOIEiD2I4Bw8DhtIO23K2bzbWVG9qrKSvVrnILwAV6S90x5PPMvovroFIja8CZhevXYhzDuJPLS80JXHPNPwqrz+XPO7pnhFPfHMLLw8ICk92P0HPawDuT17Mqm9GCdqvUocSD0z0/s9uR7FPQIezD2AutO9zzRgvc2bFb7Jnri9LNeEuzR8Hz1rbd08mQyLvd4ohz3OGUY9cxKyPa+e7zxFYNS8ixpYvLCyo7wyl4C8Dc7JvB6J4r0Lhd26gcZNvBWEaj5E6928i5/zPVISv71yG0089Y6fvBsKDD5gMYG9NbagvaW7nrvsvFO9MTmBvU9ucb3HNjq9TfNRPRl1gb3KxsS8CUaJPVo5/jwA/qC9g0AsuyvIYz2rSO69mDXHvRtcEb3HPdo9UNtUvDDIBT0XmfI7Sk8OvgjRjL3u9do9FCI1Pqm3ETyYPKu9M4B+u/fi1D0xUa49KTAWvvT8xjz0ud06LFp8PAfoH7xhMne8qPIuO6V6jju9Dha+rFcJvNUrxDxqk5+8C0WEvf6Xtb2tTHy9V9LJO8GkTbyQbdM8IQLbvMJG+zo2EGa9rLyxvdFnXz3+05S8Yp7LPeHb8Tyc7my8u3UgPTMflTv5jMe8KDQhvYMPQr1cPYa99Q0qPYvXDDw8Sme8Uk7ru0rKEL0Vp6C8VfhJPYwh0b1LKgW+x4aJPftlrjzbbYW8W0QuPa59nDz4NkE9STfjO/1+grxBB5o8b6GmPPRPVb2n3hi9MQyzvWy+AT2c8Du9R2SMPHsTtztYuyw9C5whvQzIvzzCo/y8Ljp4u1BcD724mhs9bWeaPcbFhj3wFQY7OiPMPdVhy735ah29mKm/PGDAxbzDyMg9y34HPYj1uzvozcc8Uil3OjjFVr30iYM9EHwbvc3x3LuSS6Y9uVZovACBdLycOzY9R4kQvgtDHD0nH7Q8J3cJPHR9gr0LkoE92I+Uvb3Ph7s/LXq9sAr0vJAQdD1fpdm92SxrPfAZ3ryMeae9KgJUvkspm7ydTP+9ydr1vW00QjylGPW7dCc1vBgw4L3YuSm8zdPkPNUwdr3vSQq7e7GTvQdO0D00MYe7DRlwPBeDJDvQURq8fe1rPLrU0jyewJk95fokvTN8Xj0Evzy981DKPRxbHT1/CJK9WQOYPUKpbr0GNgA+4iW6PS7UNj73fMU9Q4njPOvIVL1kK4K91e/9PS3OYL3gXY091SFdujHMET2z2rC8XENTPMMCmjxiUJs82YVVO2jO2bz5mPC9g7eKvfqHJL0kiQq+dgy4PErbqj1kfZu9F9c+Paqogb2lXDk9zqE+vN1n/z1ekgg8b+a2OjEpNDxK5mc8nfG7vccLVDze7Sw9WgCIPU7o0LwlgOI9lJUNvZ3YC70IdQK+VtSPvBzhdj0m3KW9HbWOPXnckL1g2pc8vYC/PfYcZj31rKe8JYmbPLkNo7zo8iw7E+UVvnlb0zuH4vy6wtAWPHz7tD2LoJM9s4dsvKNUPbq4t2U6TVIjPZkR/b2sbB299tmXvWlYDDxOB+69tAruuwpo7zw+MKy9lUeqPRFWf73VzpW8MnkoO5TnN72KvrM9YajbPP2Zjr0SPhS9xUhSPLUAwzzsKyy9cEh+PFNjEz6lJ8k9DzH5PWjTaT2YZA29euOVO15WC77cpQO9IJZ6PVgKVL2pkw49vNBgPXI2XLwKpIs9HmDZPUnObz3/zIK9gnUPvTDYxr1MeDO9cTQBuQBAGz28gdM9S6tSPSsLnz1gc5a9G+u0PVrc5rxyDIq8O0R1vbz1hj2Slp48xREyvObau71/nbi9KklcPVzWkD28CS895KSAuxrZy73aB+g8jGYsvX36EjwZLLA9TYiSPYSVQj545668bsAHvT7dVj3NBtA8IYiJPdJVU7ycG/M82Vq2u9Bzcb10PWk9NgNOveemJT20QZI9reHRO7Ucmj0JXIA9w4vYPV1NTDwm/C08n+4dPTe9Db3oZKo9byUNPWBQfzycYAU+Q/rhPMl2Iz3wq669w0WgPSMGLD1HUCS99nASvQZPBzxwcZs9MK+Rvb2WTL1qgp49Xj2EPNPaMb0ujfS83yUGvX7kfr3J2RS9Qs1CvG5s/j2jwFQ88oDovPpzFz3Ue9+8PFNbvULBtr0T88y9cZY9PV8PQD0jqCk8eVn7OkHFJD3Fhym+agx/PSSWhTuh+S69qKOKvJgw3j2caOm849oSu6lI/byd8909TjMmPo1XXz2hVrk91lsxPdX4Nb2afE29bWeSuz3DPT4C++89Fq3CPFffBr7jiRG9ZBqMPQWdK72hwbc8brKmPcJZYTpyDyQ6eHiuvBJwpz0PMwk9jH6tvRx/Z7zrVLA9zwO6vcmIqru6FOG9g/6uvdRZmz0VoCc+EN+mPeMIsr0yOQM+GLhZvUE9iT2aEYI9FHMIPl1zsTy8xwU9ZHJvPDyFob33mb+83Okmvl7ebz2OOOq8yY2aPdiBD7ysl5m9uaAJvnevO7yoP4U97oTRPBYWtT0zSbM9Dp2hOpCvujx0dAE+fXslvZSZ67y2Pdk85Rf1vY0HML2ioDy9WgLXPUJfOT7OE5S8cbENvm3wb73F0Nu96yeXvWtn7j20DqW8NWLMO6Bhy73wNCc+N9TxPHzmfD1RmPE8t0rFPTKIqLuXA1w9WjixvDFHgT2HTbC89HrWPV3FlD0XGGc8Q5z3u9Bqj705Nz8+OLkCvJJww71OR0O8apFZPLOImb15J2K9gHc7vXaWiz16PTY9GMTnvcPZ9ryP3sC91H3fvUii0LuBgT+8AuPku9G0nb2PD50905ezPA56ETvfQ3i9/EYBPWeRqL2AHj+81sXSO0JSST0RJMs9nEePPU5d5b2UjWs7yKAovWdyEL2ARQO+EoQ/vHgxfb07Jme72zEyPXfbRz2dQ889dLKbPehjkT3k0gE9/bC9PLbJ4ryByZ67WsYqPV0QlL0WHZw7TdgXPs1J0zwzRVq94aJxvTdymDzCfGO9X4lbPf2cRj1ig9c854u7O6y1tzyIXO06sPeIPSRyfb13mFa8s0C1PSkkhD1f8ti8rP/MPUtTw7sKVRU8aPw1vc2/cz28hzY91e/VPGStnb2o4n890yLgvCWcyr2KnYI95an5vC0nBT7X38u8+HXSvLWOq71U66y6XP1/vQPyAbwSkvO8v/FHvZB5KL0PRvc8/MVkvEKA0DvH0ng82tHTPHWIPLzuw8Q8e8boO/Ojgj3QMVa9RFC6vfGvlb0h1eC8PFiGPeTLMz39jPw9scNHPbaTvrwHoLM8zFNhPAMKjrzXQ6Q9LSnQvMQVGr0wioK9u2zsvI5goz0XjTq9HY4RvDhVxzzaGHe8/7cLPfjwHL0jzCo86CfJvMGIPz0aEjg9duQAPD68jT0fdVO9w3ObvP0dhLwZSKQ6dDw9vV8Xyb0vaaI9x8revEGq8zxlEt+9JhcgPcIcvby5qJm9THbFvIfAjj0G9nI94ulMvRpsQDydz2w9H/oDPEz0jDwOJKu6OzlQvdxj2LwMhUQ9skq2vDVoKTtef768S9IuvAFHBj1vmdA8wnLVPZ+ZbzzIU109RGZIPKR7YL3nupK9SozjvdIDSL25PLC8NBbcPSSNeL3mzqQ6jeugvCq79bw5x4I9KpewPZMSJT3qHtE8EF/WvAeVBD7sdQQ9ic6XPZlfiDwiUic8UiCwPI0jBD2pZHg9mE2EPeXHWbxqOF08gfaGPf9BLr2YZhi8BdX3PBvY0rxdc1m9d4FePdiJbr03AL69ZWjNvSDpvD23Qyk9eD2JPMdfxrxhpbu95yUWPVdKpj1IZUW86v1lO7pFDr4TTIw6coS1vB9O87yWTpq9mY4qPZFzbjyj6Dm87RtUPRv1Fj4HGg88H823PRKOYj3xUYo9UJqPPH4Udz0Khb49JL/lvT79+bxU3oC9RaefPMMSM73VlvC8wJwpPTE/Dr27yJ495GGdPCY5fz0/d5a9RITpvDXElj0aqcs6KDKVvQSf+Ly0n3w7OcYMPgPnOz3K3F+9brKkPNBucLyBRBu9w60Nu50rTz32Ojw5EDIJvQxMlDgXLCo76DYSvQ6Ol717t1i8QAsRvkOOjD2ba2i9ufsRvaiVPT2ZPry89Zuovfc84b1d6TU8YlCQvYiyfLvSzT68xTqlPDhJqT1LOYi9QXgRvPSiqj3k7y89lz4CPhxNLruGcz09lTUzPGahF7wETjo9ehYNvPXFu70haTK9Dqa2PaJaxjzLMxQ942oIParEBz4RfBG8mHAzvXc0Pz3XLi099jqZPZ1/AT1GRJ68O01UvLmVBT0pm+g8l5i8vfcks7yFiBk93Q61PVC8+7w82oK9yvJgPe0lij12hns9AoBsvQrYrzwKKpm8+akpvWWOg72voBy8CeRGvXfw5by4Xyo8/708ve9ECb3NRMi7zkMTvDCZpr2jXAW9B31wvGkM0jp05IA8POlNPXhi3byqspC9pX3ovEXQd73QTJi8aaUwvIogCz7nP+I8wjNjveXDlr3yV2u94cOGPN4EjjwT0sc80qjMvH0boTxY51Y9EnkkPel5PD1iOC+9bz5qvHFD6z0E1V+9szYyvc8NWrzKeuw9wIZMvXVRu7yaVxS9LqRzvcJz4jwx1JE98o7NvKJdJD2vMVA8FPHhO9adD75L+JK9B0PtPf3TNb1wDzG942X8vHyDPb1TxyA+pNxGPXtp9r1RNhM9BCOkPEC/gTwZtCe9md7FvGHNcz3/j928FMUyPRT9xb1hKhI9Q5dTPF1GmLzCnXO9mKrDvJjzpTzVU5Q8giMfPRgGGLzluT09Cr02vUMh2jwZonM82P8OvX9/BL5GPs49n/nEPQmL3b1BVtg8Mt+dO10ccz0sTPM8VRl6vAojx730mhi9ELL5PHMDNjv03Da9wbtqvNSVNz1Vi+k8hgVSvOpH+TybQNS9MS8DPhD8Dr2IeIw93ezwPHgFub1lcVg9TQjpPWkeqT31Buq8pCKpOsk6Az783kk9+AeYvEy6mj2D9VQ93OXEvPBoQb190mq90i1hPb6zfj0QUg0992QYPbOa7b32nmG7YQ+HvGeGCT19EBG8r21HPtMa671UWwg96HW8PCloIb29hTi9Kb8FPVshJ72nJCE9kAXvvdegjz1SlY+8zhLLvdGzBr68biU8YOZnu8rMEr1CDpI7BWwoPTip+T1jRQI9hWcPPuhgGD4RzuC738YPvcBL1j0BjDC+Gitvur8vDb2wiIG9EZnru1hj8D3Cpqg9cteTPYtLNb22FDm9WE+ePcmhnr3CE/885ReJu8mR/LzfB+28RAsJvFSYjj3RVo68aEC6vdQjjryU1EW9iODsPQSNAby1M5A95+c4vUtBDDzrr4m9nkIyPSj5eLwhChE8OKqtPQtZKzvcAl49bogDvazA0r21Ou89m8h2vYETxrwCoFU8OS7yu3H7LL3yY5c92z3lvRVAjL02fE09Q+p5vcesTD2jkYU8eGfNPNNjvT0u7gC9Vv5avVmKr70k9kk9t+3Cu8xrpLuBmJ2959i0POTh1TyIOzg7qh/HPVh/5D3ZpbG96hD/vMzADb3Y4SA9IsDqvBD+Fb2QYqq8oElgvXxoZTyMNfQ8QDKYPQrS7TvvYCm+op0RPdlw9zxz8gQ9UF+2vdyCKTva9aS9vWbwPEKsGzyALwa+Fcq2PUzk3LzfHLI92G4ZPjbkkTwt8/28SiqkvZaleL3bpiw99qcCPW7O7bx973o9Y6I/vXtFjL1ei4S8zpS2PcB80r3kCAa9LD+tu6wlM72Im1296fyWPbSfdb1hkX67yqUwPXpjaj3K7ow8cL6XvGiohLyfQAC9TXEJPAzobLw9zQU9Y46FPeQ0pDzjEgG9M7/FPW/2njuTxLc7FzPSvXNfiL0k6n89D+SOPYUEbr0tAWM95xGNvSVlvLvMfhA9JuefPdd8Zr3GB6U7iCqkvDbG5TzkU4e8TP/GvRkx+bxAaXY98HyGvU3Rzz11iBa9b7vbPMZjRb15jiw9u94MvewhRz1OtbW9SPi0PXp0lj0x7Yc8pjcAPcrQ4bxe2HY9BYbeu1ZWa718SNg9bhx8PZdCLT0vPoc9MS9uOoi2gj1ndlK9Av2Quwt/AT2CPLG95AkBvPwKV73nF1I9dOavvYMxCT3TXkq9EO7hO1VVtjyAcDI9PkXJPKummT0JSU49CZP7u/T+4D1MytA8+U4nvrkgmT2RCPS8zZHiPdlhyb0uQNC9zXK0vY8Riz25v4K9jROXvCxmd7wR70W9MR+0PSDwfz30vdG8pkoTPq2tqLxRnsq9gKGGvZ11YD23PtS9BVApPlFtA71DV+48NgCLPUpS0z3MJ5C7U7eOvasVwj2BfeU9NiP6PYoJF7y/lhO9rTfvPFkQDT6JaPO9oi1hvbPE9r00prM8zTuWPEFmcj318dU8IMOQPbGfhr2bBCE+SoiyvfTrEbxf6nw8blpzPPZWOj0sppe8zHTXvS96T7tu+649cpOTvaZLg73dvQK8JehzPU2Ti73QvTC9MyYyvnHDZ73Gawy9xs2KPbKKPb7ztQ08W+ASPWGEXT50dru9/FwVPZkMH76dFQc+ElDtvf40NryPJR89g8DDPYTT3T0Eo4Y+ddaUO3+Hor0Spru9dM7TPcV/Xr1HbZQ8GXJCPJZeCDsFvC492131vHez1D1Jfww9W8cSPWNcP72Qo6m90BEsvewDl72Sgcu8zkvlvLchmT3hKBA+W3SfPdchyz0r6QI95eTJO/0kE7p+cNM9tPYyPPxHyj0Y8BA95fp5PaMvmz2j2/s7v0gzvSu47L3IGUk9ANrdPEX7/r2DTds9YZYXPfA7nzvHhc29cEO3PX9QGj3Fqz+9K9ikOnVkhD1Nmou9CHb/vU++Xb1BtGk+FF9PPmCw0j34fa29Fk6DvLLUGDySLh68TDiIPc7wkL0E3bo8M+5RvbOBYj0Hwxs9opgXuz+6Gb5D40G8PP82vBgHqjy1+jM9HSwdvcqGnL1NDEq8cX0KvhJMqb2QKP28V7o7vJkoAj3nJmo7g/SWvcp/tDxDcAW+RoPcPLB9Lj0SnJI7nUa3PR2n2LwFWUs9WXJJPKnOjb3sHDY9BT/4vFVPez0FKyG9NM3jPPkAkT1pOFK9BIunvASMbj13yZy8X0Q2PQeElT2wNi48FyHtPTRgdrvAUMq8LN2Rveb9Cz1t68U9B7SLPURgkT0DWHm7cL0JvSUMkT2dEEM9AT6SvZgkHD1kzwS+TyshPZVl3jzdWhW8BDSUPV5juz1hGzC9sYAnviepRD2G99Y9/qkgPWqlNLy+s5i8VpmNPVDAljyb3fg9h7wkPtXqSr3jmou9AnMMPdhQczya/To7E6H/vA6J2T1+sQY+vqFovb2IWr1mvMU9Ky3tPFAUhTtMFLs9jsrNuwniDj0QJfY8odPKPBvukb2hmxc+fHayvdLGFD0U6eY8rpr4O5kxqLzo3xA9c8GoPcM5Kb2T8DU9EeDkvYbkCD7IpAq9Ivs2vI/OkT0gy/U8cvlxPQC4l70asHU9sO3Zu6MyITpYlMS8R1vOPIZ0OD1lAmI+gatSvWdEZ7wQwJA+4Al0PAeF+L30Its9+XvTPPYuLr4b+SO80lgavXOrIj2Cs4m9UWb7POdTAz7TotQ8b91uvAF0dj0pBOK7SZWRPcyWHT0A0lG9ZkWEvDLd3T1LQD0+TzxsPF+cdD0caMI9Cf3PPVjQy72xBr087cpRPUQgRb36LTW8NMgyPvdNAD2IUr49undGPZudLj0bNbG8svssPbgkXTyLP1k9il/TO7KMNr0bcDC9DmXvu1qJbL1NWUG93NsiPmAFkL3ngJo9J2mfPSRzkjwgi5Q91zJRPL0EGDxvn+y9rKbXPIg+2jzi+ek8iB3PvFLCVj2shYQ9JjmrPcgYAD6NBFm9vIkUPko9Sjy/RBm+3iwFPrEHTr0IbH+9b48wPXDD2bzL4ji9AwpQPRYdI72fA0Y+TjfUvCRLaj0T6sI9VsOgPK2KTr0zWrk92w/8vHUTGj3+z549Czm1vYp8oD1dazO8oiGwPTxfiT0y0gI9ReaWPe03V72OsKm8snqoPHO7Gz7/JAQ9XanZO/Or+TtEYW+8D5lpuhaV/7s/yjq94ocWPtF4nr1lro28ucrcvBY5PzwQwW+9iPp6vadgvT2rDWO8V1A8PT1inT3IS8G957YRvPCPj72n5KY8tawuvRcu/jxjEIc7rYpmPU5x/r24lgc95KzOvN5Gtjy5gqw8uwmtPV2t4T0x6iu9ZYkyvkEqWj0yTEe9mJ8qvufPaD2kJHu9DnxyPXPHzjo+bZS8OXCxPTVJ1b2+LW296QbpPOhEkTzO8h29Gk/ZvP+iAT0uOW+9fquYPPcjHj2BxT09YIInPcHnsrtMs5883Ys+vLFjET5XyIa9HefqPXoibj0Jreq621+ZvUD+CD2omo29fqaWvRwbrjxauVK9FFZQvPcmIrwdCww9mFQ4PS7sizz1d408U3D2vPuQLD0SZhg7cAMhPc0B9Tu5yoQ9ei6OvVB6AzvcDHo9zRKNvPN+3L1G/hs9bPDVO6eA+jx0p4C9iPWPOx0GJ7usAPI80DYNvm1ABLxon5K94NTjvHapnTzqY+y9po5cPJ4mVz1c3BE9nhEEPRjt/bw2O7g9kZ2cPYCy8rvrf0Y6Cb28PYhGoz3uVEy9TXlLve9mUD2W8aM8wACfvElLAz4PIQQ8x4PXPf4WBT7WXWu996QtPkbFxb3FYQ49nuNTPQuqhr3RsvG7Y4MVPn6Narogt4Y94uXyvP/Hkj121g490isrPa68ZryD0D6902PNvbcD8jyL6t88LfVnPIo/mjxVcyi97/npvW80obydGha9KiwovcXnhL3e/m09v2KRuxZi2D0nwhm+lFprPaAJurwN59s9/iDuvR/LQT15PQa9FvS1vZBt8D1ViDW96490PSEwMb28RJS9XJ8aPc5zt71EQJO9UPyNPcF9Eb2Znmu9FJYGvaaxdD2rZzK9M3/ju4lQmb18TIE9VenWPUxNZDyWJl09QnLCvQ4F6Lq2a8u92hVcPV5N5b2ml+o7QLVWPddez7wHvMo9EhciPf1QcL14amk89rKtPYquCT1iRSi9D//BPQxh4r3G6As9SQ2TPUVEzL2c5VW97CIlvhJiOT30rp06t2QevWxUwj2EyZM8Gmb2O1kLI73DpSq9Ag8cvdg2zz23XNa96/KjPIkKRr36nTk93NVvvWbI670leFq8kWO0vaYrr7xq8Vi9mey7vLWBTj3kxAK+26sRvfHy97zTgzo97KwJveR7dT10uFe9AlrzvJWtMbvMYN69UFiEvdMmi7xYVGw8srWJPRU52Twq8+k6KousvPGOtD10aDG9wRE0PfPhrD3sOxw8eziivPnYGr5Z5Ew+ybvsPI+L9T0pM9I9qXEqPfEbILyMt7E8bNAxvYA7srzyRoe8+ZijvRDy+b3FbpG9KWdxvG73mT2+Jic8k2SRPZ+pCDyfXPM8E15nPC0cjj0Oxt293RHKPFHqUz39grI9rIVhvaVQ+7z9Hde9UAvavU5jtT08o4287sSaOzYRn704lUo96y1evQczqb3rHMG7BFcnvNwwXbxSKIS9kQe7vJRQST1FDR8+2OfSOw4WoDpqowA9go4GOzBoxb1EsWM9vkBNPW8Upr0dUso9HCrCPVFC3jwur+U8YFkivoOypbz7VZ88MXfJvOn2+j3StsM8XnxMPfGt0bzx7Wa9y17jvUESkbvGMbg6bw6kPZY0Hz1GQKi9eu1NvdBfiL1vv1A9eFIpPeS9ez0RKcK8XsmovfsgZz1CBzc8bmg3vPIU6bwjaAK9aVNgPBBuRb3XNiQ96GMBvSqOkD1yFsy9Bg4+PSooybwRUpC913e1vJKSw7wiO5k7YT56PXsStr3rsYa9efCAPXR3aT17MMw8PyjAvBKe87w+pSa8ylRWPRO6Zbwfc489pLexPOzw+b0y+Z688J+zO9tESj0qdN49VKQnu3STMT2CfoG98P8MveDKfT2jDdw8B/vPvJfth72Rtg89w8eHPQoosT3ukYg9KOiXvff9ajzBr0+9+RRfvV5RRr3IZ2s9f3lBPfMuGj1HxHG9PSUgvZ99CbupPnm886U6PHZdQ7zGw8G9Mc3uvaqGE7wXOpQ8fAMnvDc5vr2f7YI81+6ku3Aybzurs549yyMDPtUSaL3JDz292YmTOzI03L3tFQg+dVdOPefA0rseH9u8MEeOPV3pV71ZuY08ToLPvbf6Hr2ERaW9UpPYuwT4Ab3wldK9vWAivBicBr5BhC08i1wsvaIfA73A74w9EMW7vZTYRr1r8YY9UMb+vXV5Hz0UBuA9U/stvepPET26Q5q9K6qbPfdNkT3fepK8y6ICPiYnKD2Ped89VJAWPqDTZD1o1sg9C4tMvWLEaL1PFdE8r4JcvM+MVDxpu4s91FZnvFA39LxEAX49WFnSvOLHqLyr3Kk9Cc9NuyYdpzwsGWS9wJq/PTPGwT0NkEW8iIpovS3GMz0cmjG9U2TUOtHsITyLApI9kMWKvfuflj1w9qy9E8GZPJU4nr0oOjY8JAM8u0lvgr2SRjM9tB8+vLNysL2g8Hw9UKgyve3HD7y9X229YNUSvTBXnr1GtPo8j/HKvadrjT2UTtS99GSsu9Dy+b2gEwW8Q+gmPaYFd701E3s8tF7nu50IWr0w8c48DUVMPR/CI7y/TgE+zbbEvVhUrzsx+pE9wQwAvHTg4D1q9MY9LXiIPSeuFDtAHbq9ZzwdvUzHhTsjEwk9ltWaPa9gvD2hxTO9Zo2HvAVda77MkPM93WkvugzAKz2TYqW9ZJl6vITeYT0F5jg9QGkVPbFkJL3u95M9ShtxvLp9Xz21s7k931CCPAnKJzzxRhI+T49yPa7Jh71q+bG8hTDcPVHm6jyUA4w78y7dvJYBLz2vsZS8w2UpvVqHqjzG55G7xYupvMxwrL2dggW+RdUaPWnJuLyT5SO+1Z9SvMhaEL7JBY48+2cfvDKK070LsCu9npwAPquDAT1GVJu9YSF/vRTW6Lzo1L097hZ6vfbYqr1rFiE9rN0+PIFK/T3zpd66lqmCPfMAuz15nsm9R2CJvY/T2b2XBsi9QEwXvUqLA71s7fM9WTUPvqN2Bz6qEDW9sW5GvWAGEjyGdzO8pIYTvWP9FL3SsJW9ZvgnPdd8kr2C5GI9Ij9wPfm957zk9xm8SlmFvd8nwbvZT1y8JVbiPPEBKbyZFxY6M1qDve5SPLz7D2y9O2KSvC2e671EV589STaUvVyNBL3NZQo8coiEvIh5kz2uhxw+E52jvNtWyb1VcrE5gi1rvHlU0Lx6JT687gsdvpWkrbxYahQ+mJTmPKDTr72cmDy9rzyivd0Frb3jGSw8RIboO8diOz3RUUi9H5ruPCx3VTqNCx29s9BjPYu9BD2U5js99yfJvVdQhb2nDYC9CDCZPbgRU7v2XpY9pJMbPac4Wz3gyQc+aahnvcTW97wUAk093OBTPD4mODv7zhW8AqXGPXdoQT1YeUS9VyE7PcoitT1xT2m6u/z5vMJXkb1sq9Q8kbTSPeLoobwe2Uo94TghvdzbKL0eM069YExqvSyJtrynn9e7zluRPeofkL2N5IM9V4MUPVJq7b1/VoS9AcuHu3+Hg70LTUy9KvNiPOVYu72bbQk998VvOYrdv7mKiKS80WagPRudxj2jEgk8V+6zvO6Tnr0G7KU8+CkAvY1iQz0+52+9ULerPP9smT12d5G9h7IavZ7t0j0Osim95f8dPa5vvL2DFjg8W23GvP/VjTy/d6Y881cmPqWWOb2qlgw+Q8+VvTyUuL2zJ8q8XdJoPf2TM728cDw9YG8LO1hVHz71n+A9KG5DPBcdJTxSIs672XMQuwMgZ7xv+Ue9OyMcPSTuDjzNlKa9Sv/cPTjETL1DoSS+M2/YPaICqr100BC94r4nPSUNNL0UbYi9TOCHPR/9XLvRgIK8/fo9vWETnL372GG82CHAuy8WbbxFxge+atCWvWxfjb2MSty6oQT5u6QlvT1woMm85ZUHvdHiRbyZ13+9x5AXOzkUZrwwCY49d99mvUDrSrzOHgm9NB3Iu39/KT2oPw4+PeiNPPVArT3z3FU8pJAxPcal77xoLzq9nADZPBFNhj242NO9GVz5vFkV9D2/xdm9zVCmvMfhGj0IosW98N+5PdOaF734YNM900JaPafFubxyuWc91IqrO4Lz/Dzta7E9Lp4DPeY00j13tVg9jpHBPLBC0zwee+684d+vPUHLpT3mwEu9dbsUPbfKZD2XtbG9F8y3vXJwPj05ld28IT0AOmR6Eb1naKw8x1hAvU1JGjz7r+28BKwSvfnnX70Vaje9lzcsPY1UubxOcnc9aJgXOz+u/Dvp1go9v7KdvHSjuLza9le9KLONPV+0hjwI9os9tggovei/kT1Cmrk81Jo8vapmKD0+3yy9e2K6vBt6XL2oRcY92sibPVK3qj2ruwQ+iQHPvQu4JT1X86K9L54kPugFkr0AVCU+TZLHvVf8Vj3cTPO80PiDPDio0TxDyK0960Eyvc+yvT1owiG98XKOvDOCgz3J4qM9s6CSvBnRZT31/QU80B68PEfg4zz6v469exIUvV8Ph7rlT4e9RuQXvZGxJb7S3z496o0JPgIqkb23Vws8PHmLPfUbPz1Ttgy99Wi1PePCSL38Vjs+IlHZvYJOuLsDc4M9cN53PFFO3r2jYRc9c5DkvdRpAb5l18G8B0BXPKfGdbwayg0+ilRBPcfTHzyJaXu8Si+GOwj5hj1/su08T69cvSCq27z4UMG89gWNO0Pg8zwAB8y7nedzPUoDeDu4n2k6ex+7PGNRgDqpQya9Kzh8PdreRrq68su8y2/PPc5MJD4jImQ9FahMPeUEljzt56o9QjqavZWTcrwfaqY9vy+XPWtjpT1DFZu9nyi3vVL4ob3LNnm9dLgxvd10H70Y3Ms9GRSAuvJY5DsuOwW+6nFAPRqoZD1DHEq9VZWwPXvVkz0Pawk9o3TTvF7a/D2ihae9/9YEPjeVE712jEC9PQLsPct6lzyS4Y69cPjhPEiOyb2N6om9RmMaPfvqjr114jM8PXCBPZ745r1UEiW97kQNvQ//krwUtrs9K+AWPt3hMTpqykK+oUgYvhKzW73+TPU9CtFpPRi/yjpAuqu9ITKyvYdxIL4rwTW8TP1ePeKZOz0qUJ67w2YRPbfsTL1mQLC8q8X2PNwnmj1qR+48jn6APWBJNjw1VxI9QL9APcGTGz7lUFw9ylVtPC004zzvkgC9rwVEvJpm+Twrj6S9+UscPBNxBj4Ip+K9xe/lO0CymT0vnws8VF0/PaRcQb16ZYM8ppu2vZeRYT3/hae6lwycvA+e2D0ZD2W8IMUhvb5tGD1rZ9k8grqpuxm/pz2z8VQ9mPsLPe97JL0FqQ29Ldz4Pb/KqD1fN6u9xhyyvKJAJr1bUAW93iqMvaiC9r2YgVq8efKJvE+Fyb1C1fw8Sy7BvXpHtT3Jaos8kV/RPA+WFL5KKn89iZUgPdLC0rzlMgS9E1AVPuJvGz1hI3K9Eu1Wvp0gjzw2A7K9kzObPNn3lr26Vo87XE/PPeGW9Tyaxgc+EKo5PRLR1zyZGcO99i+Gva45sD2d4628+Fcnvcp8qbxhD2083iibPLEukr15CJY9AF0BO/P6jz317lK91sJUPUX95LxQ6Ts89eQ7vS6/TL3Psu09cpqTvfNzzLzr5TM9lgWEvXrwYL3Gje49AtPfvKO1yL3C1ds91ztiO2coCj4tLec9mV7ovebukr1Lzza8lt80Pk0b8jubw8A8LAgzO8K2rb3DsvQ9sDXOvQz0Kz1Ewoi8jdNivRJm5b2aQcg9wEluvYv0LrzA2pK8UG3TvcK1NL2Mbl69OslzOx0/0j160Lw7F6s5vEof1rtmPTg8FodwPS7Dkb1X0169pO0oPY16CLwWqSU8NukRvRoO97267EA85bmJvVjv97w9lPu7OiD7uuf7qbw7ULA9qJpHPTTMvD1xPg28g6MAOsxClzxMr029w5vavAaaeLxRchg8KtJXvXvuWDw2bQq9S5uQPShto7xPAay69zA1vSxUcL0qbpQ9Lg6evHEFrr0oyhu9KQedvUT8mjw9Y8m9BAtZvfjnjjs2dV+7PzNBPWWJcL0C4409NdHKO4XNV71Et3m9qrGavHnNvT3UEmk8v9sjPWCX6LyJO8s8mWnaPNIaTL0v3Hs91O0yuyx5kTw/5C69u+wxPX1oqrzxLew8kRyzveAjMTz2wkO9HItlPZCSlj2kFDA9NyoxPTAb5LwZ7BA9ARrCPQ7BAb3IWJA7NMqavbcyRD00vBC9vGx7vJ5WRDwfqQQ+9bTgvfgULD0nFp+8b5dvvQ9M8juCCdC8RkyRvdNl3z0pybK9JsiaPRkSbT1dxKW8QRx/PIAqKz27uLY9aTqJPGYxubzssko6zJ4jvWvchz3n5+c8ciLovGlwdD10Byu+SB91vRcH7z2caK49o3jjPSYy0jxOdgy+kuCzPMxIrj3ckr09dgm6vOt0lD3JQjI7vZKTvJegnr2row0+K6V3PdMBZjzkZrO9lL4wPnHJxzveCh277gBEPUd4vT1SgYu9DcSnvfRXKL1XAtc8DNktPdXtoT4hV6i9ymtOvTtb4b3tHd47eaTvO3OM9rxGcuI9vDAyPhiKkr0ZBRg+7TrOPNBlNj2uN6o9mkyXvZOSG70qAri9QgSZvdz6wrsHQ4w9zkmvvbnFDD6bXCi+FPXcvI7OtL2Syjq9dFMRvsjSg7rSWvK9cfj6PbjDtLusITU9HjytvcBqBL72cxE9/XG2vT4jQ7yms1289b49PcCj8TzhBGQ99p0uvUUyAj5nbKc8CQSWvI6hZb2/Xn89UE1rveoJKT19Ihk87FzjvLuiQT2QQLA8T0/pvF4mnr2T6Sy8gO2gPdZO5bz+/pa5xQK2PXqLrL21yww9Rh5/vXvL0zzfkiw9vje6vU58vjwd8A8+jvYdPdRZEr1G+jG9p8hQvL0BPD31rKk90A0rPkMHOz393YO9NVtKvZtq7jydcBe9LRVWvT+idT14fC28lbGsPXDylL0Yqqa8xvEVvssXErxmCJG8eD/9vEKBJ70atEm9aQuyuw9hcL1DPBq+SnMlPXm27b1+TT49MexduyD8DDw/loM9VpYWvYLyBr5rf6G9ncAVPVXoAr31Bd098rTGvPrgqrwaOoE8B3GePb3jhzzxNUq8cIYNvEcHqj0dMiq9kME2PUXlHL0IVMY9glREvaPHur3JDCa9rvhMvJCLzbz2Cis8bRqbPBhemjyF2gi9rJsEupvTwr3FrRq94vaSvdDuULw+AyG+78hzvbYSCz01TKi9wIBavQqHdL1gHgI8MdVTvJ2S3zsI/Tc9wjUFPZAeH737s7Q7g6xJPTsLjzxQ3wW9DHUXPTeGpTwLA8y8KJJePTd9K73+oZS99GCBO1+ZETyjdJK9baRWPUAsVD2ZuI+9EHzlPLeoAzu+0Z49KYx5PeCsMT1rMFc7oIDzvTnetbxisWe7Zb3DPeCSBD2uOGA9AQ8LPXfsGr1fNKW9aziQPHY+tDqY/FK9BMOxOid2xT2qWUQ8oAnpvX1AwbzqIji9abWyuzxEGrykiRO9FqYBvjhqzLwDPEu9+T+EPI6yWT3ub5M9dl+6OVB60D1HSQy9YzvBvQMAszzW2au8VgtDuwzKJ72LR0g9o2aXvRY0FrsRn3m9DKbLO8ZJP7oh2f+8rnOVvE1CPLvkrg09lFEcvQUtFbpUHW69zimkPS4eFj3MBoe6nfuHO+5BqLpx+EI96O1EPRb7qr3pwDA6sNRjPDKhlz01UVY9DH3xPMNB+7s/zxK+OWkaPNefpL0k60o907WRvVvfmb3Znqe97vR1PftQkzwPZMO9Xlw/PfRfSr1h1AY9Nmc9PjTJXr2K5KM87bhNvTvZWr37FhE9G/bSvJon9bs+yog9ggguvbzgPz0abli9llbWvVG1PD3wXZm9C3yTPI7ACr1jlEE9F4p8vLpbNr22DQs9jsscPeHlYryoEiI9Zg4MPf3OjD2Cgw68taG8vScyZ72E+xW8IdW5vZcpCTz04+g8h5y/PY1i0LzddBq9W8BXvA7dzrsHuik9Jx4UPTxeyLzBD1S9nlRTvJ+u6LxGxQ69ZmhKPci8xbxJwbk7T9ayvHn9+by5TJQ8I/qRPg/A6jvrSZI9g6TCvSZ/jjxsapc9zQ0rPcXiWzyVpR+9l2YAvh/gjL1bHAm8jK4dPU8kmTnQ38i9x48dPp7JTr2AheW9ytnnPBoUOL2kb069fzlAPXfRcj0v3HU9Vfv5O3E6/jwkVu49X1xAPOlGoT3G4x2+Rw8tPivwcz2WU9w7VH4NPGkqhz0Xucm9QbkrPTz25jwLWYu7xrupvH4VE70Pxla80SVMPYELxbyZpQO9M7ohvSlrsj3fGci80KLKOzJbnz1rpgM9hS72vNn2fD1LPw09XLJSPb6Ow7tq6AK7zDdePrm+Hz6cqZy9xhiwPDBRALvsJL28BM4BPkCIIL24lNi8oh5CvMaMPj2actG7VWYgPv4EpTuSm9o7ike5OvUDg719vAm+GAELPWu69rxMjvw6aVU0PcuOgj0uuBc9NpLOPNEOKT5RlD+9wOuJvC2Jsz0mwty7MGrYPQ2ZYjxGhAI8bOh4PQg5ij0wXqM8V1Aevf00zj1IuRA9B9HUvcK9Wj0OKZw9zazxPbTn8L05KPK8N2UmPfVXjD098d29H+dHPe9n/7sHdee60RyXvZY0X70prLk9DfIlPR8nOz0YkMG7t9EZvYulDT0OZN89jTRVvROohb1tesK8cfSJPMnp5T2HkW895A/ovdwm4jzWg6+9cUHjPcipKzzNht87D2OavbTV7L0udfK8cPfBvK5QEb0XAOc8S987PXb8WD0V38S82PMCPaXhi71d8ga+Z4kuPbSb/LziMXw9V8QpPb46hT3RdAc8kgrivHiCfLzLtKk8O+KOPZSwBz7C5zu8yjSuvQyeCj2BPII7BT6nPcJvwDyZHn28o3ZTvQSXUjvS1ty9t7KLvCpbgD2NFbE9upn+PemwQL2orBE+p2EmvUU8gz2fILS8/QWaO1VmxTwGxZw9YQKFPQMkBz39hsO6HPtHPRnMbjyxKck9At0/vbLJd71djsW8I+DyvMwLMb3GJyU9j7WKPJQwzL0kQbS5E1T5u1dEsz2QNeo9dNCsPX6Hnr3Xlj8950qDvS98F7sJaWS79BpPveRtPT1cHd28/92zvIZxIz2r8hS9lruUPex93T3yXba8fRi4vAZCibyJVhg+KGsfPQo7yjqMG+u45MktPAw76T3gL3u7PSMqPYSSgL0AwYo89259vf38YDpGzQa9HPhuPewPtT2yYY898EclPfwNvrx4ll656RZOvd4U37wnDQ29k0kPvNVQej20Tn29+Y0oPIU/CL1hWmG82MQYPEnRezyIUBi9Z1oEPUNUZT0v+o48H0WgvbrrwjwLUmO9JqKwPBraqDyShDw9ul1QPcBVWj0MEYO8WVa/PHdPYrxGWqW9Fx6jPVQFDT1nxd+907WcvaWiwL0R/4K9hVKHOxrDpT2He0a9HgWHvHivzrtsc0K8eWQkPEUgsD3+N9W7+0gVvCaSELzvvaO8e29SPBs66Tx+efC8Pe4mPd7W5by5rWA9HRdfPeuDqLw/hdW83JLLvGqtSL06k+Q8CkgAPUxRQ721bg48VpiCvT0Pxj0kBCO8KrKxPUrnejwIAOA7HOtVPGtwkj2Ny5O7oMMuPRVt272QuWK8rsLYvYGxkTwVGP+762whvMmgCryrhkI9ADt7vdY5aDynoOe88vLevQkdkb21XgU9ohcsPHExLbxvFGK9x+LWvZT9ij2587M7tcJCPCbfuj248zS913GEPFpTbL0Q4Sc+H1gEvbSy1jvKliq9hGp7vfLDi70sZMY9rjEGPshkY73NDQ49dh4KvY42HDyZqOw8rzu7vXZhITwAPMo96wBYPbHKyz3s4gQ+n75KPYVYN73a1288hL8/PWXp6bnM8Ts9JkzcvNjew70JUbU8ISbePH8bob2KBEQ8hUVaO6O9gjxkGCe+iyIfvdJNAj2APGS9ddnsPPY4pDqz4vy8+my3PeruSbxrKqs6bA4PPe4JHb7xi8y8MVmhPNEJtDxO0OE8aJEdPAluij2rz8e8AXGVO1VNnz2Zkbg8RbSlPZznKT0HVQw8EnmaPcZNBT14YtS8EwWUuy0jwbxYsQE9gfBQPVc4XD0TBrg9VL7GPdJNDj3x4VQ6dsGfPVwAYTtfQjO8R0DMPaPFgz0v5QK9dGFPvc3jxL22pZa9EiIVPlwz9zxXeto9oEwCPd/yAjydXVA9qgR3vSRkirpPzFW9CQTpPPAz27znvra9wc3tvbifY73Rx+S9ZJzoPcEGJT1clk89rWQkvbywhb28n7W8P2HNvXktGr2041U9HIWkvXd5Fb3ZsWC9ieJIvbyCdz0Iqwe+vV4KvDju0jutm0+8cpLnPaBKGbwwQ8y7RaMovJiT/7w6wu48N90NPlNkfz0keF+84M6KPZqEEr3m2YC9vBnmvF53BL5YSdo8oIO4PYV7UjuMerG8BKKIvWS7QLx+0E+8xFb3vCoWN70RAZQ9kMeyvM/IiT0KsM89UfnBPPvDC7yc3GQ8UWL/vK0HhD0Wxl0804GRPT6+tjz2LZU9T6mRvIzzOjxGpTK9qsC+vKxS2by4N5M95vpJvdLxp7zHdd08nrzRvSLZjby2+4c9syk5vNEtpL0ls+o8UD9MveAT97xMhUs7SOXIvLWfB74qKZG8WTEyvQXaF71g+JY9ZrdNPQnz3btamJ89hRmaPO+f2btsFRg+08JyPass1b1pRZY8pZW5PKsJUT0bqMU9JZKevJl6nb0EOoU9+fKIvbeo9r1ogzU9VokGPG6m/rs4BL+92N/8vEQ6jb0c2LK9MNXzO/GXd73ztA25VL8dvSfYqz14tug8NCZivYWH2bzjuwC7rCO6PHyhAD1Q1gy9Kg+YPFPz6DzywCc9nhlcvSrjjr1HbIY7ToC4PZbmhjzdsQy9ZHyAPOi9LzzlT7c9FKAOPa2+T71WzrW9Q8v3PQfyZD3GnRS9Ny5DOzPNpLxOxwO9PE3APP+UuLtihv07cb+IvKqHkT3i0I28f5IXPaJy2D3/aP48i88hPQOpPj0WSXS9ZJN2Pex0Ar1LGum9VKGCPetg/7wEjmO9wnJGPTJALjyLcc66Ai/oOwKzozyyXkO7aAlRvPg7pT0tPse8mhtCvM8Ot73w8hI9E3iGvLkvaz2tBiA94/LjvYaDxbwoE/e9TXfMvFGWUz1hQD8+qt4CPeabE731agE9UkOePflTMLxI5qu7HnWBPbTpnjxnJHm91EVoPQASCjzaZRQ8Xeb3vDZqHL2z/iY9B2VWvCwLUr3QN9C8L62fPQYKhj36bee9Cu9ZvemCYD3X5kG85QolvT/WpbzlZBa949bEPLzVlz04Jju9EScYPbuLfj2ADgS+2tTIvLxQKT3NLry8BA6jOyXNCD20H2U9E3ETvuC+07xscUk8yrq/uwLpqz19W3U8FquSvQ08szxlpn+9YGFOvVg1FLxbM829OEzWPdGhODtH/v48idnePVjC0Tw//+w9PZTTPXW4br13zC69LUwRvpbYrb08Njc7YM79PUkxpT3KIWi8qbwZvbo2pDy7R0M9jNgZvulmGzuRejm9gLFuvHcUlj1KoJ87LZDYOzjd0rxEoro8D8xGPcJF/bxuPoS94U/TPNy+pT1XsCO8i/wwvsMy0720gH67umoLPR5qizyO6Ia9tzqZvW7qE73foCi9NnzkvVYpHr13zim9yqbzu6swwD06rCo9bcIlOzxGZzyhiNa7lGuUvPzRmL3xjS09yHEJvEGSeTzQSVY9CxLivJoYa71/sIu9RiVavZ3ptbwFc+y8EuFaPK3b9zvnfzo9CfwBvVDrRTs6gYQ8wO8EPs9tjz3vDbk85bxNvQYDAjz9XZK9Hz0VvV/4xTxTug696aCvO8Jyijzaa1+8sJV2PTjDGj4e6Es9uletPXmo0r2GHNk9cZviPGhXTz3/t8e9cwcvPdGdXL3zzfu5S7O5vJwjYr1Htpe8X2T9O810mL0wMZu9E6+iPVudAD4v6GK9tjs2PONuqLsa8Gi+R8VRPYHuPbygprI8iDagPVxqqL3LePI7SyxYPXGuKr0G39g84n/gO3G0Tz0287S9+xN+PY9Vzj32XI29AQxovMxV1Dv7seE7EgqPPeMBAj4SnKK7QGYsvOShejwVY1c8qChVvUuZhr3gKUW9S2MMOz7kvz0YLF69Vgacvaw8Dj6yAIY9DhNKvfrHvj2S/HO8TxoOvtgbWD0CQJs9gJm9vQ1pPz0Kpya9hVxRPU5gtr37Sbi94myBPN4q8byvtzo7chPAPfYTHLyOtnI89wMCvKqJcT1j9Ja9vbLxPVZaODxRCn+8+6mfvfdNjj2LzZO8Kyq4vJGH87yjXJe85dXoPG9gez3KPRC9XT4OO/S47D3Dtge+4QsKPUDPrrv8VtG8sqYDO+sjsj2Chgq+mkZSPZl4WL36LDC8P2mFPHfnez3BckC9kljsPDH1OT2KS4K9dEdEvQPCjL32cnM9GKwBPkhNZj2xsY08mdKfPRg4zL2qwuq9ZRXwuyQGh7unpny9z9F4vV5s0T39gsy9ejrTvJjZEjwDKja+gZvqPIiFvL1ldbW8MrVFPUqyHj0ft7i842oAPHfRhjsXbvi8CKgPPv+/ij3uSwY9W5/5PL7vQr2Ki1+988nAve0Rvb0Qj8S62tKSPYeYqr2TSt+8Y30ivZxWsj0ELqW70jOdPfpd3D28cIW8++SKvGOd5ruQOoG81wcTvs4uFL4tPo69GgcNPfJ2QT21/6o970hvu0jsp71JCuU72AqiO5ZgT70sFTI9AquivUBXELwd5QM9ibuRvbL6tD0ZnPg9DGYfvVn8wT18tR2+/DK2va6hED5w7x49EaNYPVCKKD47Zx29JnzRPcku3j3SCt88Y7T6vMJ2lDzAGpS9btAXvmILfL2k8Tq9q4OvPYs74DndTLC9awqmPfimwT0xL6W9OZDLOPFApr3egPw8/Xo1vHm2lb3YfBg+NWqtu0FQAr6gDhs7SiZDPdnfVb0oBkQ8Y4qzvYNLqD3iiA+9TbqBvUU1/bzew9E8/oCKPSpI2jybFoi9ONBMPQixXr1Wev294WEru0lolL0b+yk9VSvjPEM+6DlDzIA8qC4zPtysNT2dObc8XvlmvZkxzD1QTU09+AX+PSoTv71Ty/g9I8NCPpBUZr7H1nM9w4zYvbPOM76spB++S3b5PQGojD3Zpl4+XWKWvPQBND6VMFI9+Hc9Pds8sz0j2yE9FnGVPbXVcL0sYfQ8mV6NvdebU7ypdmS97osLvfex9rxYuLY9Z8MrvbBBOj0q38y9Q6WGvX2S5TznqBW86DW8PZQytbvwAtO97hq/PbqtgD2gEak9c4bFPIH2Zr3dvjI+8QrLvVsSbr2ltlE8auM8vflA1L1IYeC8EoNbvpNZwT2kcGG95LH5vQn4ezzrKWC9aX1gPX9Yj7uwwJi9YHeDvanw+zxQ+A8+uD4nPdzXEb1ZgSs7GwwPvRbQDj2G2r49FjSEPREwIL0LYl08qROrvH+kaD0n7+Q8bn8yPcSrqj3mM/w9/GihvReXcD31A189us14vY0t0jypQw08FfqVvbCfOj2lPTo8pw8jPSDFBjyKPVY8tSjQvEDp87weh4I8pnCOPU/3gjwqkwe9B0wyPfbcEb2YIos9QMBrOqjhz7yq6Fm82q42PARTC70tKdu7bCNXOyysGb3Dlw88OS5LuwYElr3isnW9/5+jvWJp8jxbmg88e35AvU9Jvr2VSKC9xnM5PRr05bwA08Y98e2rPQupIzwo5Qi9+B9HPHGwbjzWxAs9N6+OPVj6kbsegIq8FTMoPJUNAj1YWKO8PsaevDlCzLsLuoc9EUqJvIY7C72LpIC97VgQPSKqAz05IDe9TlW0PKaN2Dx11Ho93jiKvO8uAbyWlhA+tATKPD0/Kj2EQ8I93WFbO0FD6r0sWPk6s7XHPd4Daj0PF2Q7hVMPPMfqrb1CAQs+vsMXuzHCkL2h26s9SJd3PTPc2j2nz9w9HgMgvapGfr0jpKA8BuMFPl/4mjzmYMG8fH9lPWZnj7sACBi9j8/3OwPOiT3Utiu9h6G2ujzDdTyPvjS9zWOVvOWIBr5CXq49s8tNvNtmuDtJeBA9+1gOvNSrobwZODC9Ku5uPWFTNj2mfho9Q+gDPOExkr0L/tM8JRnRuo4DqD2Xe+I8UpTPPdwsEj7rraA9V8jzPMpATT1gEoW8yHN9vKq1rT3qfCQ9J4l1PK3mtD2tOxg8ejcqPY4i0z28fB69HRnRvAd/fL15rZ4910IOPjjyPr35Fri6rBaGO5vjHT2paQO9cRSlPLKFMjyTVgg8FXElPWt7Fr2VGIy9vaMuvdaRn737u4K92u7gPYfXczxMon68W3nivCl3kLvpQ2u9aKugvOiLHL1ycW+9LpmWvSVzFT4jPk+9MIqBvE46DL0iTYO9hzFAveYcgL1c1sy8r6GZvbVDoDye1ry9dPlWve/yir1rIY08FwnHPaIWhT1EcWE8YlKyPcygEz0fTYK8JQ1rvSWqhj4atUI9NiArPaEKST1168m9dE69PaHiP731M+c97NJ5vV+RGDxmBag9x2KfvWlmGj0DQ+M9YmpRPSFCjT02fp269HK+vOjYVT24PU29QJilvcOcRjzVYjQ5QR9QPSv32zyYJek8FZ9GPe9drbxkS1u81i3QvPMh7zwXYX+9kHCBvCxoG75FSMU8PLTEvANsAL777L89tOs8PVkv87xhspe8GOtyPbwjob0wlCu8WORaPfFwtLuI9Rg+e/hqvU7gSr2qud29zGb2OmWs/r1KyKM9MNGbvE4ruz19or880S1qvTl0cDzBh/C8Oc2ovR7ZUD3BLhO7K5wxvh4QFD7ycE++rR9GPX7pHD1UCpc9NEkpPN3XEb5zZEM+IGwePNIZM72aNcK9IeZRPdQp/z2EkAC+d1DzPcvIMT1E1pM9tgMGvmuXJr5lpqm9ByDbvVepD7zbO3A89ueEvf+9HT3c5Cu82lshPvPpQT36IBc+0M/OvbRQCj3f/CU79Q1+vSqxCL536zI861UKPkjWAb1zClm+0dEXPmHhnbulHsk99BnkPTS5ULtBDfw8Q3vIvZ9Jpz1Sj3i8vS1lPmKdiL2qmvS9Ea+YPbZlPL1oYpk9+yp1PTszqDv3tDO+Oor3OmTggrs612s93TFnPhyqvr2RwQe99e5MO2szCz3bj1a9f148PjiqJb18kvi8Ir8JPWTBqb3txQ0+wD8TPaOG9T0E73W7MCtlPYxuv72t+pQ9T7YwPVmGW729cPC97B/PPOLcEzyGvIQ9be9HPDGuPr7A57Q8si62PeBlkLsEHQG9VFQIPdQyaDvqXuq9UYQwvLDJjD2MuKW9LwTAPN/kDL4KL+y9vjvUPQslFj2i1gu9dN31vUCjmT1Kqxu9HpabPONqQzwquAU9EhKEPQ1Rfjy4OBI9MC5AuzMtWzyOuEK+Zt2pPfZrVL2ckRO+WHHavdqBJj6PWhu+f+U2vZr7rzwnsc88wzvAPH9/7D3/UvG8HP22vEznvj2DBl+9pnRTPSEYhD2mnGu9DmVlvfEVuL2oxNG9GfbvPHvwCzxsNaU8iEKmPBHItjwvTPW95xsdOw7Eqz2rn448a8H2PaHaBz2JFmg8mPCtvEzMqD1EJc48DdLtuzMKqT0AOHK9b3olPTa3hr1xRJw9YFwGvKT9pjzh9be9BdoSODkl8zwhMg49okXlu47DJb2qlNu8gNhRvUwAEj1t1r47dxLDPcJ3ezzSda87IoqAPXQZSb12N+28kH1/PYsV2r3bt7U9X6T3vRW0Dr7hPfu7VrOtPB63dTy7P189K+o9vJtWy7ygs4g9mjFZvUFLmT2pr708R4cUPKiftT0jXiS9Z9kUPJmihD2ri5k7izoQutLWAj2Fihg7KW+0vJl7l70zrpu80HXvPWKg6DziaIk9ShGxOxr2jj3uKac9d75lPThbqj0WI5g7T9GyvRN3+jx6MiU+9pJgPAedmDu3TTu85G86vMyRjL3HgVc8R8mSPYQylrw15GU9z8MbPDfx6b3fbS29M73ovTGsgT1PLto7k0i2u439BL0NHxg867uaPeR+rj1ZDBG97Jqmvc6QRL76syw982LcvaA/az0Zc6G7qVrMPe/9Ebsk7Ek8sHilPXYwdTqMv6i9gdzFvFtnqjxrQOI73xUIPRWzyj2r8a88jKAXPIk31r1bFnw9sqT2Ozs6HjyVT9q8o0mgPOvgoL20lEw9QaeJPDS2FjwerEA9N1FvPMRIy715djc8V5YJvV81VLyDkRw8EJgqPJ5xpD0wal493oQUPZ9Avzy4RLI9ElEkvaFj6L1lihI9WgjcPespML3XMt+6j6yIPC9cuz1+Twk81yrEO8xs4bxrol29M3hEvcxw5TonIn89ZI9Mu58d8TzDurS9JZ7WvQl2iz16xgs+3fgEO3s9VD34N6+7IJ0APVnMdz2LuQW9tcSuvVNpejtRseG86k3CPRmx8LzQaZU89DS7vFML97sspUa9nVmHPR0kgrsKFh497i5QPRo6uj1flkG8r7F8vWsh+rz5vBE+koBtPbQhUT0yHEs9xX+RPLXRijy/Psu9f+rnPE46j73eo988oj0+vLePQD2TGm+9uVvxPXOXwr3OEx691YdKvYzPgbzYqG08N9WRPZ+cAr3xLPC8iZdRvBYx3Txae747puZSvT12NbtHS3M9b0vHPUxN1zyGGp67BoP+vMFeX7yV4I890ANaPJSSm708dY49qAQtPTle7Tv0T348JNWXPSEuUL0WEv29g8PlvGDK0jxzzW696TqtvI2eiT0Uuc670T4IvS2J4D0pLcu80sOXPF81gb18bim9InJyvUJsLTyjNGU8oA3UvN+RqrwkQrM8wva6uxrZgj1pKGW8ZQpvvYznwTwNpgY9FWgAvV9SgL3KM4e9s5clPEiHCj1ITvs82okzPZXOOT2Bti68FiW5vQFFAz2HaDo976biPYQXkzug1A49JjPVu36dVL09ZMU9scwYvSn3iz0FFqe8yY+5O52mw7w6qb486wgYu7eQHDwIw9A95zWsvXV22b0bAQ871ZK0vZ4uYj2u2tk7I4vjuzrB1LsIeQq+Puo/vTvU6D0O+we9ogfEvbg2DL1bH3+5+PZEvRa6Cr2N6jY8ICXpPREUCb5eJC29X9noPHi6U7zO8ba9eKyuPd8dK7sBorO8V5WuO/OGvz2ttIO9Qdi4PefTRjzDAJC90MxGPZdMD7zOPLs8rfqvPWWFPL0WOpu8YG4KvDBfRb2S6II9Ulx8PGilrD2P+GC6U6XouzNWq7yTaDc9l2yEOxITGb1SH2c8zev8vOtzJb3azgc9frvmPXWp8z0OrDs8s8WEPKT3pjyhtas77HWKPFJ8XjxdmpC9xJDGPc1mUz0hpcq9xHVcvDwybjvUtWe9nHBNvS7EjL3lQbA9lbBWvXg1YbsSDsQ81lWgPdpnJ72ubYY8nWEBPHrBjDyMA0Q7pQgKvNOO5j14xB+96NuaulDsBD1ydKG98mfFPMGGSD3WKmC7ZoYSvT2YQD3D6J88gelSPZmoND2xaoI8UzajPAi4Jjz7Mfc64m4XvDv6vj18o5W9XKMMvnyQoL2+DX69Nsp/PXb90L37j7y873Y5vVgT6jtGMo68dXakPcBjF72Umz89kd4EO+fkgTsVyKu8pMRkPe8CVjzjR0w9n98EPVjs5Lq9IAC9N2MsvfBAoL2MtoW9bZI+vEDmTb2e07Q9QTsDvDpGkj2Swe687x8YPSqm673vxje8vTUyPAybE76XgHq89ux7Pbft6DwF6NW9OU95u2M/Sj0xfoY8ICpmPZm4Ar03VhM+8/w1u4lFOzwHonm9HTqcvUhgST01Zg68Q8CEPZjp8jy0KHs9tpFWPJQ40TwvGgo8niKpvSURBT2v+UG9l2d5PVo3Xz1WAEE98wVYvfs2BD4KJ2Q9wutLPURZMryG6rg9Kb+MPV+pIT1p/sw890xcPf3yBz7VZAw9q9LePMKlFb0yzkk8VB2CvWsMFj3JLLS9TMXfvESlnTyNvtw9ypmWPMC6kDo4Eoq9JieNPLpLCL0MwTY8CinIPZYJ5ryDvYk8OxOHPWeuEr0eUM08oH0vvYcUmj0MxOi8Mq9hPELlzTvIEQs+ypq5vQVBaz3Em1g9st3jvP4I4z3rtSq9Rib3PSJnobzTfdG9ujlivYmemr39Qwm+eyAgPswosr3Xacc8A95jvXh5L7uPktk9DNfEPe6l1b0Pdg49msGrvAe3sLyHQQO9LfI1PTN9Zz3Pej+9RMWFvc3n1jtmcgs+crsIvXCDqT1MrgA9fxuFPYurJjvpO827gvLLusreTT1AhJY92/bHPcgAar1w3cO9DDB6PZIsB73IVmu9PModPa5u+TwQGLK8Bj2svIYT2zweppk8LWsLvu37Qz3n2KS87wK6PL/DEjyo11K9B3SOu5i/dz2K+re7yD3jvBHTgr06Iti82POnu+Zr5rzT1qg9fYPCuuGzI70vOiO9D+q4u4HonT0yQf47FRoQPRt17zqRf789XJ+ePAkKB71yDE67HXllvHjvF73VF3m8stuuvFFpFrtr0bi8HHUyPeNy/Lx5wfG8gjbjvLQDkj30D8G9aQOYPZQUyTybswk+8n0KPB5uVz3EXOE80AuYveLJ9jymyWC9DeInPX0IArw2Gwk+WMRLuyrLGj0SfI48hH4Pvq/rp7zE8a49kMY8vdHTkT00L5W79A8OPUZi4bwwc7U9Ce/4PPJM6TwcpTm9WXvEvVBYmT3oMIa95IpfvS4SiTxFLQU98B68u2WPmb1EHC09Xtf/PJ1YHz3XsZ69vNeDO44cUL3h87I84g5oPUhnpj1Zfok9j4R+vMoPxjqB5ZE8ETIqvQm0j73nHO48NxSHvRvR7bwykI+8DP4sPd/qML1LnWo94ICGvVPtB760CGS95OCVPKnPPb2a14g9BYhnvbXLDLw3LXC9JkL5O6sfBD0ZD0A9r81ZPUkowTyfu+29Q3DtvEV+/b1lldS7MbgPPLkqJLwSKYy9vB0LvQ6aBTwfCV099LkzPda2K7vOOnM9M9GTPP6NqD3DDoO93OI4PUIXIrypg1E9O6WaPV85Nr1nRAI9M3dWvA0ykDypGqg8EIGRveWTwby9VwK92fKvPfUd07xCgFQ9G4SIPLvPsjyCD8e8TyQsvQp76Lyh0ac962mRux5Kb72KzhK9oQQ0vEgsZLobGMy7qVzPPDclR725q2K9ffuvO4VkVjw2Dk49BXW3vAIGBb6hZXM7aVbbPA+XCT54Ct87zgFEvbK1kr08PkW9AnyxvDwroL0HpEk9phZjvLelmTy99gc93EYFvkgLvrrmTy49vNybPYpr8D383Qg9ynjXPFFEprsJYXU9UOnxvbhYhD2hOo89BtRZPB0MQ71tumG82jp/PGMUV7xCunq9bwOhOu/Wgzy+srY87OcDPkAlST1zWKG8dZKsO8m5c73xJio9KzFpvSpuoz38jq09yFGTvZ1zE731Ioq7r4AovS0Jqru4Tyk9u2/GvVRSnb2ZTbK8SYahPdrOVL0K6Ua9fnigvLpquzyMA729SOcsvg6pnzxjoGE9ZQIbvVLmbrypIKO9YLL2vFeRlLwUM6U8hRqLvdEFij2EKl09y0CuPdYAjT1JxTe+vEu1PS1eS71tEXq9AAzGvN9k4b1MVCg9PPh8vRwHb7zHzui8cN55PQQTBj0pkyq9RcDTPZIC7jw0OGU9s7/cvOHLUT0aYhi6CBcJvJtSuD1bCuI79rumPUy3XzwCljw9VCUsvRa6jD02rXA9NeqpPLwKRL1h1yA9ogm3vdF9Ur0kE1I8cZqWPT7fv73iciY8jvJqPHxoXL3mAjG9ElkWPQ72kzwBrUo9J5/0vEOWzzz4g8U7CSkJPExi9bwu/aO8vzFOveWTMr33K7W7WNX2PAyBvjoJFyU9UJp3PT4pYT0JsxO+ixBNPR/hJb3shii8OXboPRupFDy2IqQ9CIHcPMALoT1bLd+8GbavPXRtMb07qK68NArpPYdygj3/n0m9d/QdPaF5nLsUIRa8s5UJvaCrI720snI9QFTVvIvKVDzgPFu8+essPTEuiz0O75i9WErJvePp8rrk/Zc9aGGivP/byz2FaKU9BeSkvYKKZb0U/Q2+moGUPe/Khbq7rpa9mNmnPUs4c70x9rA7Q+ZAvStobzuSZoo9CcVSvrHJkb1tZSw82r2TPZO5fT0EIog9ArOIPdDQHLnANgM+vDUhPFdy+Lzsamm9oqmquzIZnL0L0cu8wxAyvaSJvrwjYme7wO+8PCFlE73KVAm9KMzDvbwhEj51NLW8loSLPbbKwb1YxVw9zn07PcJNlD06EuO9ZdbEPUshRj00+1U9bUOkPa5x6z0jn4+91DcJPo8Xrbw1IWo7/0gRPZj5mjyAAmy9lTuhvcdzvDxVvWw8Lyy3vIOXJzxtmzM8Oe2MvI9srj2PxJa7gVFiu/y+bDyt2Su8/+dUvCSMyz2ZdI28Pr6yvSQWLr2Q51S8uNX5vDiRkT2aYYG9nKbrPIvrwD151Za9o3zRPM+HNzzD4Au+iIQHPXB45Dt0jLk9Se4Evd/l2L1Jcj+9MOXfvBMPwr3sbRS7oOCyO7/XG7s1jxy9sbgOvf2PGb2GVmw90FLevJqFzryfn5e7E7UJPl8uCT1kq6k9bGICPO44l7sdi++8s+DQPMwiBzzz/OI9mjCIvVaJJT2qXkG9BdzCPAGl7j2i1ZY8TFm8vRaKR7sgbDC8OB0MvJx5zD1Nqgw+MJ+KPH26n7tBlZ68PycAvXwUSr1KXV47yQlIPX6KlD04de48z4aQvLb0kbz/Vpg9FEZsvbNVBT3Eio69NzwkPFhO2ryUzS087dPhPPukoz0UPdi9SlQPPTzr7rvPA2M8ofktPbBvCL1Kks299hoMvQFHMT3NsEq9C2mbPUNtvD01wUa8rC26vG1EU73Knf49tQ8Wvk4Obr2mfa89l0G7PaJ1J72WHAC+FOy5PYJNlD3ICoG9VBmNPR52GL1iYlA9m59MPKH6hr35uI689raxvTnYDj5avMW8PALKvNSrnLxKCKM9XH3rvV5eyb0h5CC9anmfvKPuMT1aKNk9SfgcPCBLBr4ddFg9BbNqPT/qGT26nQs+HYHHPczktrxtObW99+n8PaREXT3G+Oi8pn9YvCiFETwyuVW92W5dvXteSbzY3VG93Ry3vXjBv72N8gE9oLGtPGFC1zwD6oi9ZPMIPj1aVj0PAV09/kplPTXSCzvFXtm9luU7vIi3/rzCji+9IjSqPUEYorxYbDW9ibciPXVYfD25fvc8CjFPvbDohj1RtL6917R2PNFwsT0ghqA8Sj3oPYr5B70LbzO8LnWpvY26sz2O6RG8YpxNvaVWJ70i+L88JL2CPQQJ9zyZIp+9OAOnvVfbPL2A7Ea8hXcgPYfGor03Aw89hBcoPcB4Zrsr2pS7vcEkPW1Kzj1DQoI8IiMQvdrfgLzt52M9sS4HPVyN0r0hJqy8zga8vIXlzLzc4oW8Z8CNO7dvpT1Hlfi8y4frPO0GOr26th493fs0veqKYz1UOmg6N771vAINoj1wLP68j1upvfiPjLwylRG9MVLevFEyKTx/eEs9KZqxPMCLDbzL7ge91ueoPDXwuTxSqNe9cnu0PNyUirzlVl28IwAkvNruvDtfGz67MwWLOlc+yT0P3DW+CgWzverY3T24QG48Vv5yPB3AsjzTPE09oebVPEGydT1OkK+7e5FZvYRMLj0rYZg90FGPPcI+CD66Rnq9+C85PVE+JT2IIXY961Qmvdx1DD5a6XW9wSr8vSdEAz43xbS7ZQitPOg5Zz3tzfw9134XPU/b8ruunCA+lUcGPcIjLr31SrQ8UwG/vRJfzb2zaCW+1LZKvaWBtD2oh5E7wvuNPH6h3DyBLQe9CrkUPKeIk72q+qu9rzzJPHKMZb1ELfW8QWRRPdNuzDr7QFA9FqsvPm3OLj3urJg94fcCviGZCz3w3T89IpPRPSn7tLx/mKq993m2PVCNNb5C+eC9RgwIvS+fbb0PHgi9k9AYvGgLVDw3ZxG8n3VePXsfqj32b/g9QQidPHWPfzyPN4e9BJOPPZdULrsjiiI+eUoPPdRH5D3bggg9dAiwvNJa3b3mkKQ73xinPJhul73VnBU9dyaBPMW1sr1BjzK8OdMJvvhjAb5QWde901DOPc2Uer3s7gm+X7B9PUbpQbyxi189dXnlPGqipb3FVrG9UoroPDKUrjzcaLg8uUbkPds9Xb1YI3K9T1V6Payehjruasq8QQF5PfrTID0k+JK8QTXQvCPJqz1WCny7Fx3IPYUsxb2z6mU9s3qbvRwEH70mCVU9m571u3M+rj1ltjY+blWxPZoE3ry0yMA85yjOPZjfFb3imIu9eqnkPeq1RjyMNpo8JlF1PaOExjyE1lg8OzW9PSsc4zwIi6c8M5vEPeOOGL1G4uw9GtLRPfgHYr0JGr48yfc9PSRr1jxMS+C97Nm6PKOeCL2Y/Ka9XJoSvSf/2z0sLZa9N6IePfbkGLy1ciU9+moGvigymTyP0yg9FIQLvE77Tz0N+3A96UW1vJU3XT35r4G9SS3HPJJlFT3KyZm9KRIiPfUIrT1vE5y8DG28PJSHtj3i0fo8c4BGvfBGbL3lcTA9WAMVPOkqID5U6ja8n4ZhvPwg1rwwTBi9kmWcOzajLT09+ls9mMl4vWtn77wVscu9NK80vfXDNj13Zho9cdEvvTJ2BT77HEK9ARhPvTMNIj1MEsM9R1L7PHfZrb3639C8r+fKPETUHT7O1aA8tp0ovRQm0z3l/Ks99DwMPWMKyDu8TI09YA3yvPVeSb0QkoY83LbTvTcfjjxRfVy94sQ2vGeaRr2h58E8wDXGvQsnmbxpyRS++H1MN6oMML3Me4o7cyn1uu/XB73EOYu94jXpvPsCdrwlY8c9E0rIPELn371bpiC9C1oUPqGrgzs9HKw90Z3XO8T+Fz3W7J+8FRfCvDaEnDxcTBA9p1dfPOu0hb1p0v89JBN1vSysj73zFv29h0nKvHMskb1DOfg8pj7dvGO8gb18adQ8zJUMPZ3bDTgTgga9d4sqO86Ulr0mcHc9Yw0KPSnaBb64ihw7cDywO24FrD32x3i9zG+OvI+VIbs6g709dQe/uzH4OD3tmpy8QTFlPan1DL1PzIQ8jbl5vTyP4b17hc482PqIvNcRbL2J6zU9LrKZPaPMfDqJnQk8XG1TveHlnLwMpR08iIDYvFLpXL00j3w9izeZPYaMnj1rici9dbWMPfEltr360KM9YZFMve+ZTDy57Lq9eldSPYP7qbnwvAI94ZgWPIw52j3xC8m9PjmdPe0YK74ck8C8kWPqOgFfD75xCU68oNCTvR4+U72sY709djMdvYY8ND0gcLS9mHeNPRfxEb2dQoe8RPgFPTXxYL1ftOq8PThxugk2vj1zJQm923rEux4rur0XS/y8oOkTPRv7wb2oGFq9L5tfO/8PczvDj7s7cYQqPSNtoT0gTq89D4MmvuvWYjsVIiu8MTAhPV6P2bwamoI8t9fvva5yyr3fqSC9qmSYu3g9DjxLU2k6FnsJvCk2P73IkY69PTZFPXhgRDzdcNO81nYYvKL7qz2gC1S93+3evXC/lL3HMFw99QCBO88SEj6kl6a9hFyXPYH4lL071eS88YJmPYnuuz2SLLu9dIuvPSeETTzEpqI9gY6CPZqnmb1su7G8KV/7vRGVM72HpP69BI5GOuzjRLz02Ze8/N3JPAjyrDt+fig9e1IJPvwXuj3w4Ow9fvRbvItp9jqUtRG9CPloPAGoyT2zWu48AgjiOtnPeDwoYg09F4zOvRBkiz2VQvK8q7nVPQxl2Dw1coY9P3p5vbtKETyjiky8xoIFPRByLT2753c9vH+MPTq93zyegYO9FgGNPN41970ZJRC+h183vRAbar3rJ0Q9keervDDDgjsR0rC7en2EPWHFCz0T9dm8sRIDvb8i5DyOLUA9XwYNvfya6Lzod689WweJu0rIcDxM0QG8N1wQPWhBajyzMeg8p9yvPakoPj2TKue8KJgcvbuOzDxXTka8zJGkPLwZMbxbmS29ppEuPYaXJT1ro/G8iUJ1PUTkdbyu40o9TdaPPW5rx7ycAoC9iPG2O/cBTDy/TaM9H5JBPMCuED1XVIo9qk1ZvQHWVr2wV4A96MqNPZqpg70MgIO8BOqUvfTSnrtD0be9P53bvdkXGLx3ytm3uRMiPQMQbL0pAMS8bUoDvW+NIb2x1de9OIhFvV+cjr1Gtve6jnSUvMHx7Dxkc4Q8roaaPe4AiDzAIj+8p8/ivMBPIL3H3ms8CgbcPSLm0L3Q5JC8V2D6POD0qr37ACM9/mu6Pd3CRL23ECK9J2o+vRsJKLzryNy7IJt0PVvKHr5d+2I9Oo+cvHWtyj27BAQ+UOWgPejm/b3ryGs9qxS1vDDwkz31zMq8BdOkPdElMj1FxVM6pUVEPZeIMr2be2Q9Kbruuz64zbymGOG8AfWSPA3bNztHfVi9nCRZPbHMJryfhQw848E+PERsyzxqDiO9pREIveAJirrMytu7UPupvHWYEzzzbqw9O73IPOYwhD0Mjms93ERnvF3gI7z+zsI9kWhgvQRMiDx4CyG9nuxuvSd4Fz1XOdu83y56vT4Oo70l24w97jvKvO9wmr0B8bK9MdWtvAZi1TycEqS9zJSFveDWnbxA/QC9h35EvM6m67yBsns5Zpn5uz89HL2ZQCq+TC7AvFFxrb2rIt28gkzkPR3nST2JuKI9buB7O9E3Wb0+pcY9jk4xvGS2Cj3aIH+9CtENvhtOab1XmtE85XTqPWZrEbxaaTg8cXGfvQjChT1DAz+8Tk1tvaYb0r3WOxq9QqeovfAeST0uuYW9M2ijO+7rY70jLB29U3hcPblIl7xxXEI9OjuHPALGkL2DbUI9YMYTvYQsOry3hCs9X6S2vEAJDj2JMqI9gvKxvfJ0u7zQZxe93zmpvF8iXj1Q87i9YT5sPc4lIj1EeZA9nCSsvD2XSb0XGKQ91xehvJjDwT1c9yE+QwwpPRczFj3DpVe9T/3IvdysczwYxQU+AMHLvRTxpj3pYlG+Ut2KPTjf7DqVujM9f/1CPeEKLT2aVuy9/Ls3PLw9vrwwy3Y9dMAhPhKULT3uDOk91l+svX5zELoQl8U99JndvHMlLj2244C8jmw1PNVG/r1wvo893xfrPI+8PrzJTxS9ZC+/PR79jD2drIY9idSdO/zZCzz9yTg+GTnoO1Wn0r0HGsi9U0+QPHopUz3CdQK9E7ubu6LPAr4Z7fa9EP50PQEbjj2FNuW8cLAtPkLqor11dPY8ES79Pb03Pb0VUQU8SDWsPSxn+TwSNwG9tqyTPIQsBD6pppU9spOGPe/tX71blQS9HZ8mPS4hBD7HIJC9QOiKPb4WLTzX+TE95n4gvat5wT1X/088uveqPCHBgTwduas8XC7CPO6Ps72TXO05A9/mPNLiRT0qX2O8Ie2VPX9POr1BTso9zu8AvX4u7z32AV69IwIBvR5tt7wf0pa9dvWdvUwD3L0Q++u6G9vLu/TcAT2+Rl29+GXPvOOH3bukG6I9fLUvvHt2T7wUVBe9nTZZPLie9r27p9c7uFAWO6VHE70DG6+90RkJvfDtTj1Neha9KA46PVaaFD2azoC7owtnPLf5pr3HabE7mixPu1eiIjnf9LU98qe4PVmgOb2CVJ89BUXUPY8CDrzuiBS9UuQ6vPrO+TxkqLg9CWGJvaVSTT25S/s8aYCnvKboj737A6e96/PWPSPwhT0k/gc9a5DVuv2DZ71em+W9GR3EPU99Oz3u0LE9+pNbvUGQQj1CKSC+HjPmvKKGGr1lzM09CJNAvTSiKDte0gC+K5aCPIHz5zxKp6W8TVKjvT6bKj14NJE9cR+KPZW5Mr3CIjq9gRaKvbwFij2NrNc9qDh2vLDWdjyFV8m8TA9NPfrAyb2sjfu8AjGOvVmVbzv4eoI9tQuaPSvUSD0GGZg9KXuMvS2ckL37lzM91B9yveD2eL2piqK894USPapv3b3EGZW9njiZO5U4Cj6rrSA9kJkjPXj3u7gjdJQ9WKUDvtgrgTytDyO9UbmDvPwH4r1JABK+kYGTvQFE57tgdKc9FoNLvZlgybxJ2BS+8EFSvSr3QT10Kbo986C9PQaBYTuU0eg9xt0Svm9fM7w17JM9CjcYPM6FPr2wMKQ8oMI6van9L7wzASK9gqhVPHBB973bPh89hT9EPbI5Ir0xOmc89euHvZ0FXb3f2Rs92ho2Pb9/yDyVwXk9SwDmvCBWAz1oII69IuQ7vSmGgrzph2o8ac5SPfeV5zzqJrY8I+6YPKZyiL1aWSW96b2cPa17Er3CwVy8ZreZvavEXLxIDrW93rbQvGxHDjzALgc+zWhjvJTdAD3eh3E9x5AUPbCjur2Tbm070P2YvOSlHb1dHGa9Vbb3vTA6T70/JOA84i3HPCuO5Lwth4y80geRvV6wkb2woLg92OGnPb2+0T3bhhY9kt4pPo1HSL4Sdkm9SFzdPNKBsbvmvv+9T5k2O95lXr3RKZU8Q7I/vQ4UrLwPp+K9VnOSO6V9Gj1za7W8tuiBvCT/Yr0QpSW9aNalPBC9kj3J2aW8PySvO3dNbL2NWoA9T0WcvVr2h72I5Y69gtoePBjKLj3fzCk9oc2xPY2XQT3NkQC+sOucPERoAj73Ys+9t936vGwBkL3YQ1K8vOYBvuZtcb3zpT+8dmULPuw0lLzWRTS8Jt0sO0ZxDj2CDRq+ppFJvfwLADtd9ZA9PTASvWgdaTxERMq9YMD0PSXGCz0s9Ou8vecivKtAZD28UJU9yz1oPQhR7zx/fTw9dkrxPTXSaz0krQM7fEGFPX9PRD0o0yW9XfXfOx206DzzZgG819sEPupzoz1KOR49nNxDPSLLYb2mngS9sGGTPN4447tksys9yXXlPA/ucL0w10I+doYUvje3nb1viNC9K65rPfSTqj33crs9UKKXPbDuuTz/MsY9TF1dvF9srb29e8Y9yeUnvRaTC76/hrs9eem5PCfR+L30C8E8hmAQvlsjCb02cmu9XY8EPBt0nj31rbk9j3+/vTg9wz3ll688jFVnvsT8nr3xvpc8xHVqPfHs0r39a6a9Xdpmvaffkr2I1NM92zuFvVSsjj1xXXM93vioPa+j1T07Koy8Hh9YuooX/TxpmBU+biAQveL6Fj7tPAo+sZDSvBSkWL2PFl48wDqmPJaVRT1rdw8+BUO0PXDFej2x92e9mW6qPCB3tb0U6Ho9gT3pvCZodb1B7Ym9SpUWPtRZ47xOLC++WzaXvSpp7j2lXIw910cRPpokiTweBVS7DjxTPUBJjz3R4fe7YgozPklPZ70qdnS9U1nHPYUXiL1kThu+kyPSuOqD0L0scv47nneYvS2Yvj06+N09wo3APTOuQ74svpM9hbgevb6/XL5mnaC9ypegPNjQ5Dp97++8tMYdvoKVWr0dNTs+140RPa5krz3a7eE9JGaFPm3jkr3J0bA9mNlaPTK09LzCSEM+T/QoPs6cQz0HxSY+47wFPn2VYj3OQVI8dPswPD0TB757ZMS7IZe9PIunnD36GNY93PcQvBOrw7xlxB29wF+5PINKOryvH6O8ywtRPd0JXj4csqq8fjUfvqp9Kz3/bwE9nYqGPWg2Zz00l7Y9RTAovTskJ7xggRS9yKMyPB0HKz6gO6+9AC07vvNKF72RLhu94dQ2vuda9Ly1iAM9AfOHvLm9ar0t1Y48TMKRPfcMSD25JCe9ZXyXPBuwf7zXNyy+lOtdPXS+Krxcn0E95+Uqu5Jew7xywiy7lKaePYFBBr1csgY9VQ+HOg2jWT2Tgg+8MWYAPhuKgr067Mw7TZd3PR1pgz3eUxu9WAk/vVZ85DxaGsu9/VBRvPWHEb5UTII8uiWMPZ+HCz5o8RE9C8JBPXKzFD2Ao2S9JQZzvXFrGzqASbw85eBHPUI7KL154PU9sjiOvWkilr0UMIG9MUfKPWeLpjuVlUW8G+o5vSSdt7umpRS8XSaVPbWuMD3RsjU9UtOUvQaAEb6k8wi9WMGjukLe2L28cGO7TyDSu9fOwLq6FUk97tLiPMeJhzzw/wI+iGPbvUTaUb1DVfE8w2c5vuTNXzxeTnS99sCEvckuZ7xGHq69FELRvUY2njzTGqO9mgTwPPtv8z1I8Mq8TS+uPfTSCL0k6gs9pIH8vagk4j3GmAm9arA/PBpBRD6nLvS8bT9/u91Qbj3TIP28tplkva0Qo73Pvn09PWi4POR12jx+fJ68Y3P6PJhMK71xpp+6MtDYvP+3n72aRto8j12ZPfF6rL0ZQpG9WisNPYLfFzy/FFo9dX5fPVJYMj3B2i29UU9qvO2qlDyxq9i8Od/KPQH8jLwVqEW9eHhnPV7BRT07yRW9qsmZPFBik7s+YxK9IOnSPPrILT2sqzS9PRA6vVCPdL2KRTw9KGmUO33slz0sEp+9Zj1APQ3uR71OD8k6pOAXvoGFhby09sE8ZSCZvK8/xz2Niyg9r24tPf3xrz0ZtOK8jII9PFXDxr0e9e49Kdrdu/aIjbzqZF4982tvO9gTKL2TODu9gsjEPLppLj22c+u94WNiPSRPij1TsEG8JH7NuzEERj1SuTO9YBdkvALooj257di9t7CqPffb3rxk0f08yjTvO42i1DwhF6S8xZhWPIUY6bxoB2A8CceXPS7+W71gprU9/jrBPAv+aD1oHJG8Prc5PYu9GD1vS7E7mOPCPRfC2zxjwrm8cmQhO6/d8DwarcC8+8+APX/0BL7UBRg9OliEPdNHpr0Tlh49s/kAPslH0r0Z5aW9OVMOvbbCBb0bgZm8tU2PPYEk8jsyVgy9I2gWPAJ6QT2EhmY9y9S9PO6Yrjy9A2Q9vaQZPaokzD260XK8yf+SO/dw2TyWOhi9tQcFvh1h5T3/EF29hp0EuvNzk7xlEoY9p/egPJs9Ez1sDk69hEtyum2LYD2U3ne8MGPOvN36h70ojBe9BiazPIVPLb3TQJg8pOEjO3ShyzwvF/k7RO1AvATrErzGZiu9LDw+OdvsBLxNozO7T0ruvEFJIT11P7w9wX9GPVIeWb2ojEM9anOIvdrJ6TtNPnU9/Lh2PTxlNz1LiCY9obI3PQ3R0TwXRHU9OrWKvPj5L73Ajv+9cMG/PYaeyj00bNq9K2qSvWO5lD3pImK75PCUvaaV9z30H5u9nJ0jPjaELr2gepA9rXj9Pb/QFb46ROQ9qIHGvbl8sj2/J6s8smsRPioxIT3wndm95H1RvVh+kj3NlLu85AuCPa0zmTyUWYO9GBiCPcdB3btCxKc88zj6O7huAT2Ze7g98oFpvdv7mTptkLQ9WBIkPdyoqjv3Jus7cOLnO9MmCb6CtR69RMdIPeyTqbyHVVW9pCiGvYEwgL3M9AY9UOAMvePWi72qzrc8byx6PRY31Lvhju+85mWovA2goDy2SNU9prIXvC9T7DoFwDW8TKmEugA4m70nHyo+gzuNvcqKHjyqEIk9OJ5LvXTqT75eFb893qyPvf/95j251GU9dsriPAfw9z3alOw5sWncPNlJ7z1gwFy9HKFUvemAo73HqDg7FKJevaEFDb7OM3E8UKScvfzLDL1dAa491XiCvPF8Bz7/tsC9oL+bPap+jT1ZMxK+yp+xPYPfxbzUlfq9YhSXPa6JZD2HYVA95oyUvSJpyjwvUGc9F8i7PCOTvb2c4FE8aUAbvVrz7bwA/nI9oWi9PATwbD3brC++/zPGvKm/aD37cwS9iLh6PG3ODL1LQ5u9OzQgPUButT2ZpUK7G5o0vQSgDzvZa2y9E2kbPerzRz6tt3i+Fb9hu8AKCz5GsPg9RAKxPYWzW76C5WO+Xh5OveVu2zxa0j29KW5uPfViljsP+lw9l+7APYkNlz0mz449BJ7UPJVMML672dy98GoMveSXKr4OyRE+sfHZPeNAWj7TlBW+qAOgO2ZES70b+7o9MuNPO39JYj4jaAy+6YDxvOkTeL0QQKS9YndSvk9hKL0yeqm9uhD3vLP3u72Rj3C9dX7fvcrHID4BEEo9bVcJPVxfy70/2A6+JHwpPmx5ob0kziE+PuZGvjb407mNfPe9u5dbvSAilb0mtD29ARYDvj7CFz6W0Qo8gp2rPamjIT1yfSY+gk6WvLPwH71qyaY97LYhvIaWMT7JFzW+epThvYn0/r1GmCu9Cln6uxaHLbyprqY9oL8DPr7kVT3kqhO+nvqdvaVjn7xPbT0+lEyOvUHHJD2iezc+QcDsvPF7gD3KKka7CMmJvcHZuD0AF4k93Ge2vU0APj69F+M80ENRPfIZlT29IVG9YEUbPWkFK76SwMo8Wmo2vBplDr3RT7s9jJLZPfMMgzvLuB++C7xivdyC9z3nLGS9eQQhvXC5pztT3b69Y7XhuQJyjb1ZKrC96CQpPrtbrb3lEJq9W/S+PJ9tJr6Cj969XOAHvGUhgr04IJO74o47PDEtCzy4ZeU8xHgYPsJae7x2zx89Y80ZPbgeRrqqtNM8hy0vu/L6Sb2Xiq09FF9PvQ5uBT75MlW8joYovb4xSj7NPQY9f1qEvd3XKr0vvfC9tYuuvL+Cij0oWYW9eiF3PY0PVr07ewU8NRAWvU7PSL3JC2K91+0yvTtERL1Zxjs9qravPWWlv7yr0pO8Cw/4PYk7YDxs1Cu9KQKVvWtFEz22W9O9hDfKvWOhhD3M3aS9RxXHvR6WfjxLo1O8NARAvVJMC71KTMa8Yo4GvUVkAr2+IxW98LMYu7Feuz2cJuq8KdKzvAKMpj3mywk8IPxMvcz2BT6hnoo9jGJivUgKuz3rsqI9ZQ+HPRLi3Tp3p3y9ZrALPTJcHzzFN9A9NN1XPrA0gT0kVIs9geyAvB1YoLxIGSA+5MsCvu1mEz1TJ2U9hI4zvcQbAr0b0bc9bcMUvh/eRz0N2cO8LIEnvZwEib1CNJO89OyxPVVzFz6AkJu8AXyrvRWwID6t1t+96g3QOzTRcTzrjF690O8BvvAexD2PSMg8puhdPEmn1TyH6Jq9LF7SvKVY7r0pqUQ9ebnMOwSn/L1p0Gq8GxDYvZvKTT17Nn89eqVWvKv7kTw4Sbc9HHZevLhSiz0Ky+s9nksCvpvkhTxsqEy8c9/HO1URkr1iFkc95sMjvWuL6b1rG949NduiPSSVoT2pz2s9Q0IPvv4Ljz1OBNE8PP1BPkSqgrxp3Ow9mFI0vhYaKb6YrPs8iwWavXi+uD1jYqu8wJG8PRuIpD1u6xk+vIIyvtmX2bzPt109G4EHPEIGiLyB0ew9gR7UvRdvjz0xhku9HFsUPdVfnbyU8gS987HZPU0zBj6Hel68ppcsPknxBr3fgLY9xXbCPC+FDbz+VPi9jdUtPe6CA77Kfyy+ouU6PZwIWD1f1EO+RrHePZRPiryMp9g96CKQvS+ROj1z8Kw9KnjovA1cCr5fyO09bFz2PdRe0b1glwI++z0MPb9R7zpQLyS8yur+vHkljb2nOIw81eQ4vnT8X7zJpTe+WVbcvAmr+L2pE6G9qduAPeVgz71QCjs95yAKvfI1D714t+69G9OMvSEWx7ykPKa9nTQPvMLhBT6H5cU9IS13PE+Rdby0pFG+t8nRPdY8pbwat1085mOVu2w5Sb0hehc++0amPbGuuTpl/sA9BSWcvfjTfz3x9zU9qqfxvNtPELwAZkY9UAhjPm2G/7zo3uU8KtVSPRU+QD0CMim9rmP/PFdia7zwtw89auH+vTDAQj2Qz0c9Eo+EPWjbQz2gtZ+9gxU8vR9rpbyQ8Sw6JJNmPLGWIT1FSry9culQO6W3Bz1VQOS9UH6EPAIwwD2Kz3e9skTNvDCHbDwoiYq9Y0vlvKsZmr2VqMm9D99zu18OPT1+5327mF2BvPNwFbwlbC89+E0suxhWHb4DzTa9iYSWvdFxpL3RxMs9SzylPWZZHTweE4M9sEPGvdPHKT0qy469uqA/Pbcvdz1Afoi7DvHmPfTCMr2td8A990L/vA3Hmz2lvSK8rjjbPOAZID2aBSo92Y+CvfvIhD0rUqK8x9BMvXo1vL0wZL69rMHru79IfD2wQXI9daCAPePah72idZw8NNKZO8izBTyCDWA9oPsGPR/7Rzx1YH48GJQ7PAYX670p5Pg9j6fmvfJCaj0U3Iu9cKQivCdDfz1KLG89nkKjvSlip7yi58u8bpvKvezMbT3t6Ee8DpAEvRwqYz0FjhM96kydvcVUbLvXOJW8fVKbvU3BGT1L6Yo8u9ENPe3LFj02hdg9WYvNPe9BwDwIGZq8gh9mPJqNjr2ZOvO9K9iFPUhoprwhL5+8dWr1vAjxAD5n+uE82valPZqybT1oYX68K0uJPEeZnbzfk2U9oIOnvVK8mT3CPeU9qpIRvbfQorys8ek8RzRiPbkU7jzQo4c9I1NDvTpEAD2R6yC9WkeQPWK+tz1P5gQ+zZgnvSilXrz+swS9IPS3u35sQz1FEVu9y6ecuzCxm73EqHA9TR44vGSm8LxacyE9LaADvoJz7bs14kw9hNMEvQqHhTykIQE9A68UvTlYvzxFSHg7NAQFvXOMSr122iO7Cf4hvW/jpb2GrDm8aBCfPaxXwz19IgY9ECkePZS1sj01/Oc9fyRbO2umU7v2JAK9NAONvUhDnb0NKps9HWhBPIXSKr19TZU848DTvaikZL1YV0o9TI2SvKnHPz0rsla97H/8PW/6mT00GAw8QxsxPQaMEz2I1629B8pMPRD3pzyY1+29MuEFPUmGcz0v1oc8E/mIvQivrT2v6Ys9dBmxvBNufD3xGka91pAgveXcdb18yz09iiITPOEDATt9QaO8ar/ZPb3FBT21wCY9QHD0OEF/vbsHlJE9r4+Xu64CpD3x/JK9pZ0gPI0rJj0I9Yc9lLI+PRrV1rwlePA9yYeUPcIxWD1xRyM+jSfcvS0amDwQ/PW7EzqwPb094TyPhZE9thmqvK+OB72ca4q8JNP7PKaJ+Dzk5he3U68cvaJ+YjzuYW09mMo7PTH/nLy8Rz89rv3EPBrEhzxI3J+6w6oBvtefBjzgyC+9JjrXvN5jgb0Qthu97Q5uO/fFjD36Yck6ikCxuxo4kz0mVq083cMQPS93YL36pwy9ZZvNvBULv73uRLg8keWSvLoP+TzOW6W8AaeFPX4VE7sqyhG8cOGaONDiUjv6C3c7MtuavAB18L15lrw5kEHDvaXVaz3q/Tq93ufqPFOh1zuMYF49D6n5PFfsULpLuxG85inzvIpTKzw0rLo9wVCgvdaFuD19FgW83PmkvCHkjL0WBis+qJ+wvLoNyDz4inQ8khtaPNtzczwkPIM9ILMGPDaphT2yr5I9bXjPOk+F8bwClcg91+iZOkbtNL0mndC8HVP5PF1hNr2oxJc9J65lPaf8iT2z3NU66MSrPQPpFLzC70e8z9mGvZydBz2ZbB29qSEovVTenj02SSi9AXefOxBITT2QGOS7L1jjO3L1FD325G27FApuPK12xzudBoQ9jWPjPXaYS7otLTS8qeq3PScIxLwn55W9mROPPc1a6LpMc8c9DLfvPUusu73tybg84VidPBoAab01uFM6GHE5vZ5j5TzSjh28xcBdvfeYgL1TohA9WQ4GPXtxeT0dgy89f5Q9vUuOBD4b1Z49rWPNOqsgCLwqnTu6380TPc77kbxu95q9CipQPaRKJbxn0em9XgO8unef+72cRIE9xtfFPAA72r3A/Iq88ON2vO1eEb14Eyk8lEaXPamClryTqq09vbWKPZgqAr2YmM+9qAhpPNGupbt0lbC85txNvarA+D1WFxi9QHunPWpw37yd+aC88LBfPe4WnbykLdI8JKL1vP0Grz1yRBU8+KjrPO717D2A5sG9KUbcPI8ts7xdC3C8O2u4vWP5VD3YdK+9gFmAPbEYND20zmO9Y3hMO3JTqb1VM4W9hIEMPXghfTx8+6G92ULKvMkWFL1yCnq+BbFqvB9RjT2BGd88Vw8ku9pMND3rUrq9KZyjPDHLSD0dhY68CwoePbQTR72rPYA8FaAZvT7QCj5Tu0g8ZXeMPdROMj0H2xA91MpkvTH4oz3Eg+g8JHCguMBwgDyPgiC9rJ2kvF6F/Tz8cAu9yeEKvfTtc73pATo9sCEfvAhUvz2Ui6I9Diq+PJ6Hej0xIti8uktxvRaBt72Objw9l/L2PP2mlb2Li0g+epIBPe3LV7ypyJI7tO/NPDjfSr0ky/g8+p2cvVCfl72LW9s9l2nHPMjYRTy56ik8eDoFvaEPTD3G+f28O3nZvOGFhb32hWA9BESZPY+Szzxtqb08wqhPvUVTrL3gvTM91sSDPUHYE735jYy8Aho0PJf+mL2U5m686p/NPcL2NzxLOSW9DLfSPDB7l71K0VA9zdstvV6Uzb3XSHk8UgURvXjKcjzT3ow9r/BpPdTM3jyfcRC8yGl2u6UdsL2BZIa97nmyvU5Xlj3L2RG9zlegPH89MD31h6u9M+OHPcmCbT1RLq28GF72O95Zob1hOjy7oQCjvS/Op7xPo2s9doaFvJUXdz14W786Ui9KvJBDGrwtJ2M9kw3AO204PT1amXa9q1scveaOFD1lf7E8ap4GPoUgO71UjY08YGPrvV/9f70On8e8I6JVvE0hgjwn0a887BwEvRglEj1LqBU782KlPRqUBb701ci7Rjohvf1gp71bXRG9wwQ+vQWzzLzZLsA9sQ7CPSpWMT08+gA96uCDPabvMTokDRi83HeQPWxb3zzQ0qY95HcAPYTvtD36Uj87xubRPIvxUz3FdBW9sA3NPCJUsbwTAya9FCAavWK8hTztCpA81YvCvYInxL1LDwQ9E2GkPRwCk727wmU8J5uuO3ImyrydMn+9rL+1vHDMmD23GPc6T4mQO7XIeL10Ive8vl3AvKxqAj3x9pu91SsLvcu9r7yfQm47Pn23PePdpTxbb4y9NgaAPKyMIb2aBh491j4jvpwih7yxa6Q9/MMwveYN+D0FRm48ESSiPdEX6b23h7S9+WvNvLlz7rythZM8T78EvMrTfb04gUU9ILDHPGUlwD1Gep08S91LvT8PLr2IsIK87uU4vZL8b70yff27L3SLPG75xT1UISg9Px2PPQDYgz3ky4G9RukDvlM66DujuWe8RFIMPrF5p70VRpW68HOJPLlfjD2xnLs94d25vDnM3z3BZn89+UGdvHOPEj3EI/S7QJMwPZZYDjz74Is8fB2avPuFqjuV2Ei83vl4PesFKLyQPie86Om6vZwOoTyABx+8KgA2vXdsnTws/Ik8JPbivGCkkb34AY29HqK7PfhUAz5A+cE8QEddPSoiNzvTUoE8AQFHvmKESj18bns9GZeJPR4k3zpEBIs9yfOuvdgN/D2IaLO9YzJHPBeB0Ty5OzO9VvD2PCoYVzvK5aE8EVkEvakKb70COFA89q51vB2odrpTeVy93RS8PRMV5buVQCo9kNeevbIOQ7wAPV29FO0LvQofcD0c5wc97xD2O6LZAD5iyLy7izibO3a1ST2yuSa8HfW0uwZ8DjzGCkS9udGgvfnom72KOU083G7wPK3rLDz740c9PSehvJsiNTxTmVG95hkovIivab2WgLq9b+nQvXcPrr3Zqh09RgrwuqDDD7wd4hg85ZcSvWAZmTzc7Zk9si+ZvIt3Ib1e2ne9y+K2vWhX4r1lD4q9xY2yPP3dvr1oT+M90pv0vIdzLj2ESpU9natUvegAfTzTZXW8/WZXPZKetTzV20A9yDXSPWOGZ70EqU+8uEy7vD0v9TuEjQA++v3CPJYgczxkVvC8N2hPvBG5djzB3UK8CrFBvKP3572+6do8z+HmvZqVM70qCKA9NvqcO4BJzLxj0qw8pRZKPQUKNrvfMLq89Wevu8OkDr7tHCE+o2BOPKjHnT3P5Cg9/XkVPeNhAj6/LEU8SSP9vOQkUj32lpq9tQ25O/VfXT0x0oG92YlguxheKDwyoLc8cAndvSIQ5zvIM5o9HeQ2vdEsED2ImrI9dFCyvBfrpr33xhg+L/mRu3P/br2AqPs9qGUHvUNQKD4R8lO8gz4KPuLTJr0HdOs979DavLxbWT2WYIi9MOniPXBr07wpwH+8j8bHvHMMaD0CY7+8HD+iPHHjkT24HmO92nBDvRx1nrw+thw8dL+5vBEObL1hQ5C7Dl6tumOaQb3JGtC8x+8TPbIh0Ly8Rny7AnZgPXUWxbwroLu8WTLqvLTnST2WEPw8+tX5POoh2zwFcgE+e8OcvRujTD0QOaC8iPeqvTaSzzzojqA7kekNvcfYSjxSlhY9PmNEPdQqNb2nP/i8mxX5vZ1qxj1Ot4+93KB/vcHHlLtwOPo8KNicveaShb3toFq7cpKMvRHeyT1CJDC85r6NvYbb/L3Mf7C7J9HfvILGdj2VIvE82rdBPTlDprv3pqA8ONgrPOHJJji9tCm8VncSOyYRqL3LmIo9VwPKvHnVDLzTp/s75v6Cu45HEb2axmE90+lcupJTgL3JZqo9R26gvQDqDz2WXOA71rmvvORghL2f2RW+QM3jPG4EAz54sWU96tAVvr1UrbwD4YA9jGGVvRdFLD0Fxe+86PXYPXmGEL0Vdyg9Mpw/vasICr2kR7y9OAjdPAyYhj2pZ7E7SXCcPasgarxmx5G8oBZ6PWNPur3YAYy8JZ9CvCbzrj3xNcA9O5IePg3qxDxtjAK+Z0SIPaRbpDt5N8M97LzKvNls9jtWmmo6dBPoParw7r11rLE9ePeBPCqkiT1G/+G8ftGdPQfLh73oVO87P8HavOoSLDx7dII9C0HEPYOtS700K1q9Cb0LPFVLc7z54GW9cuZ4PbN2Qj0wmJC9rEUgPSbqrDzMyMo8BGxIu2SF6LxU6mQ9/Xa8vbxOX7vL8Fc95yq2PG6Il707O/u9g+BXPeQTt7viwo896uLRPQjHcD1F/QW+rmOIPZh2Rz2+vAO+R47IPIZ/iz16lcG9b8l9va1TPzx3jIu9+e9LvHPJtjwVLqm8NL7OPBFgsLsmyG695sNBvX+o3z30pu48CzN4PboFAr235cg7hMEkPSt9hz04QII9vLyrvZOWhzysWSk+75jEPK0SEb0TLyo9vapXvF/+Fb6JPSe+UqSlPCMPRL4JYbW7U/QGPihcZjwT4zs807gpPrb51T3J+yU9TMNmvJYg4z3fRFe9vm+tPRI1rLsIvJg9Kty0vQlhvbx2vv09fdOnvfTRr7uF4yQ9/9jpvFXDuL3Uqtg9bZVRPU3Jiz0ECoU91vuXPTm+FbwXLMQ9e4DKvb6Iqz3FTJi9zQypPFNw2719cCo8lELYvbrcQL1ekde9yYwzPU1cCDybHiA93W2hPS++Zz1//qW8WFujO7hMHj05lkE9h4wMPUfHFL5XBxu9HD7mukhQnD1qxIC9Kv+LPTdYxLyRaT29ixvcvOyEHj1BJNq7c0JVPTXFwbyFzoM7vdQpvOi5grtFW5Q9jc+SOhm3ubywrls8LXe0vHAG072qKry9O0kePdnEQz4nQzW91j/oPE6fh726k4M+83q0PRoDj724jB89SbYvvUvgPjoaXHq9YYevPbKO1TxKgzq9onvROxh0r72NoZ+9MUwLvh9z4DzslMC9/SiAPQ17T73XBOc7cWihPa0PKT11hfm9PLUuvHUuG74x3VE9+3VAvbp24T04uQQ9nycOPcPZi7op43k9xszUuitHQz1loP+9Bc6qPDiBJL6zo6A9VjCQvGKy6z2vbAg8t8+ovU7sRb172q89mWmVPcs01j2BfGe9Q45RPa8BOjy5Mwy92d3uvahHTjtEKKi87hnnPUqAz73wbIA9C/rJPXKYQz1LYUy9GQkKvphOCL2p/1c9rlcZvY3cWr3CHWG8xo4FvTw36DwpESW+xw/jPTjagT0bQl88hL/HvVJA1zwHk3Y8kAGAveidJrwQPzk8yIqbOtMnbb3+0KW9x17nvFjXEj2Zxx+9+1Y9vT6j8j2aKfg71XjsPa2eUD0y/8+9REM/PZhNy71Aq0o8wsmXPeau2z1G0hc+9kC6PUhRUjz6shm9vDFrPKRIib1NmBE9fk/DPP7mP71s7z49ELKXPPc8ED1YPsw9jY+PvffCFj2JjMe8J9jpu0EwP71hs/g7phtdOka+9TzJyuS8UkkYPUMZFT5vqsc8vvcjvY0ve7xF/j+75W3AO2HdTjocck68n/vavCDyTz33x7c9Z9aHvY8YNT2e1TQ9D7w4PNTjTj0jYPo7OswgPGIWIr0bSyk8e8EXvcrtkT2cP5q91v2HPHsOwj103CW+WdhYvZOpx7tfzSM+07NMPABzQr2QRkE85uDRvY3OYrwHEB+81uiJvbQvHDsyKIG8R/xQPGqKsD3pZgC77QnfvXjvRr0Dpye9LojbPf6olL08lIK9JvmHPQbLTT0M9Yw9xgMzvO7fCT24rxq90NghPV/TlD2k7269w92aPX/Z6jw0KyY9xlccPg3ZEDwSVYK6CppUPPcIGb18nTQ9RTcFvne+Zz33ifc9U5lhvL+93r2pRZa9nB7zO0gJ5jzruuq992n2vC8PIT3RcEu8EgmwPYai6DxHszA+jnCuPYorMj2wTQM8igsSPcGuLj3SgRm9q0LTvImQX70yDRM9Ihbevd2JZbsExHi9IlryPSIjJL0Wx5A6mI8LPUc8gb31vZE8oRVwPeOTpjz/4Pg8EDlaPB3Ri72iQpg8T4KaPX/1vb2ygJ49pmBou6rBEbvCkIQ9iNR6vbAU4bwR74K82Fq8PQ2aMDvxpgg+yl3OPSmLDbrmW9890jubPABnDb3xnNE72S9cPP9DdLxMZbU9LniBPbtZEz0bCAE8nNiAPbf1irxriAC+sKvTPelgLTwZ++w8f+iavJX3Ij2tDKW9N8cIvdqGW7wSLg++ECyJPafTnL2WO/S8RwJSPKtnhT0Y48W8XK8uvfX9ezzy8Xc8IXbBPHNi172v56K9C1eAPfVeRb1ALgS9lrxFvZPFCT5zxdc8JDw6PeZKaD14gaG8SbztveJzAL0dWhe+iZWeu5iEzbwh8QW9TIVzPcWjgT0MBnm9iDWqvIZrDD2Krua90aJhvWbwQz0vwQW+wKxkPJhXDLxLkJS85SbjPRFcPz0HhAw8pyloPZJpQr3e5sm8ScuivGnH2TqsnUC95McQPRJpIj0uZbw8npkpPZJ4Lj3dV2u9Ok7VPJcnlj3hrs68bNqPPYEkzrvTOVA9VniBPaOaEz13OMG60bhrveh56j0lKyk8T+TfvavXDz5e2ww9pzpsPKI5x73Prp09Ir6uPSlfhj0b88W8su2Au5dPq7z85pa9PR2/u8sxpLp1keg9eGlQPEV1rTwurgU90HMHvccyI710Rvc9NDyIvaxrM73ghGo61r1VvUeWCj57Exk+ZU1VvGgJqDtzUQG+hnyRvdaBAjqqvD891ZDCvXF8AL1DF0y9tvbaO7EJ+z3ojZ49mt7tPGDw9jyLJSa9qm8evaEYXr25YD+982YZPK79SbpzvBI9Gky3PHOMubkcHh099maIvHpLg7wzTNY9WOKjvSu7lz2Cpq+9DDt2u5TPUTxc3LQ89/dxPYXCyL1C4oA9TcSoO3+eEr2B+oc9Lf5yPS1nqD2Umwa+4svtPLrwnj2ZkPw8kiEIvjTrG70jT5e8YGyhvaIGa71Bd+e7eYg2PrFicryjPEw7O+gRPO5ZVLvB+2K8tqAWPa9h971A81C9aiBLPRCmFz0zJkM+0C/CPT3yGLwwRXm6cOq0vQ4G8LwuiH09T3s1PsGdpb0G+PM7MMrmPU9uWj2SaLQ9A2ApPOiYir2XZa08DRKYvZQmoL1Pqnq+aOAPPHs+jDyhVLI9ZniOPjJM1L0wB1A8SIh1PUJAAb6g/Sg9NBf7PSDpfDzt9qE8+NPbvXWAsL0inhA+hVhPPQtJqD29M0y+28ZCPeL7ir0GkcO8u2iFPVflVr26jpE9Zyu+vUG6ITwkUMU8bw2yPTkKyjzQvi28GCY5vdwL7z3mWe29kj0vPKRtbz5iCr29ob3WPdrz1L29bZ+9Ps7KvYVvqD2qTRG+iB/3vZqDyD3J6bc9n1AGPhq3XTxLf529PsJZvNgdj72Fs829SGsZPvbG+LxoAIs6bzwkPS5qMj29ulC8X9VZPYh8nD21qIy8SvNMvTIlaTwnM1k7l5uUPLdE6D3utZi8ajnUvBlCJj2L8iO+pe0TPV+qOz3TWES8GK0xPoadArxxFrs97jGRvB1Uvz0mtGU92RCAPcxHsrwdLlM6oxzLvQ/q8jrWr7S8QAEbvF8ehjpLro29kHrcO6TugL2DqGI96p5rOii6AD7MEcu9ADJqPdaHE70wwjQ90vGnPc6w8r2W5UE+WJtZvQ+7Nz2CZxM9GvE9OlX+lD00fEs+xVQPvRTOpb0HUhc9L0qsPK4E/DtMkJo8YqggPZ8AtT0oyeI8velkPf2fgr3gNpQ88WI1ve5rXz1RAua8jOBnvdL4KT3d3yS9QbShvX88bb1oU069+Yi0PedVTj0a7Da8L5HXvK2GJ7yHTY+4b0WSvZOs8DxgvM48fIyQPR023LzIujk9hP6xuyWjwTwJPD89GapOvSErOj33JZw90uU+vR5TKb0n7NA941zMPTgpM7xfBsO8f5MoO/4fZL20uim97uUzvNj0xztp5Ay9pm4rvVlqCLwAKpe9DO+1veieS70svqI89/6gPEHzC73B/zE92nAXPdHOtDzXvGa9pECfO/TrFj2TVCS9IDVAPW1QHz2ZlUu8XRroPGF1pzwhx1q7fE6HvXs3HD7olvk8VltAvUhNMb0Aox69ep3tvOzVpzygNiC9eXhzPaUTej0XwYw9R/W5vcHASD0H9SA9WE1cPcBoZ7vHjEc8Dk+JvM6rfjxylIM7RaWKPfNSez2chwE9H5zvPEXrALzSNIm9/GZfPB0pATw3vRs8pgB6PcTlOT3dtWk6/4+ePRamFz0QuX29Oga4ve45Hr1aJy+9dVgDvTw4zTwM5bM8a62BPTnsHb7rB6C6sYc7PexvL77U1OY4/y2KPAw2pT27o6q8CbufPNwBXrzSFRG+wjLAPddrgT0LQQi+3P8QPXkgpzydkQ07yEHSPBZdjz1+Tza9RBvgPaJgPL3Q0po8iHG9vQVn3DzDe8A721TdvPq7hb1mtiK9JVu9PWBcKL0d3+Q8GkHfvGu32b1fdqg9zJ2PO0tfWzy/8xI8+LA7vL+IRj1lkjW8oSO0PePqfr24kVC9e0zcu7IOjz042N+8QR2UvO4tDjws5uk8VLTlOyhrLb115pa97BrsPKPHgLy5zNS9Y/5DPNiVUr3QYBg9nQg9vZ7qxjrTEXc6ugr0vGzC1LuBX3Q8lGtqPUWb6z0Xgpe8keAAvc4Qrr0NGic9KVrgOy0BCzyLly29GmOVPf/WvDzlx2892kyWvHetvjzNFBC9W2AAvSg6AD2K3A+9pIuYPQQFAL3WgwU9T1iKPaXTiT1HAwC+aXq1vQMeoD1eLjK+UonSvD8s+LrlE2U99oOIO35tEr4uPdu9HpW1PGysOjwsX1k9GcpuPO2HY71G/kw99AZivYmZQ73BZhg9PHpVPf7EMbgHKIY8AsJXPQ8bi7tLK/C8dNsjvVb1hzwTByu8+WIrPeuCbjyGlP+8Y3UtPhIkr7zSs3c9jf5/PXwhd72QQJk8m3XFPF/SiD20Yuc9pd/XOX7XtD3XWim9hNDEPL2rBr2j6io8Lz6nO+ZjXTxD2E49canNvI2AO735iQe9krN0PR/eAj18C5o8rPqJvKTNJzyji068xuZlPb5/NL3cgq27VsCovZ03E77WXWo9rWUNvV3Mjbu13oG6ytBcvAJxjr0RfGW8EB2pPdKT+TpXLPq902RgvaNLnb2fZug8e6LFunwVsD2dEXM94JDPPQ282Dx1crA8jnrgPJgdhLmvObk9hX0evLgswz2CKQi+2REBvqZYXD0TLfS9FDuEvcJeyTyff649DRrLvbfm0j2nUUu98WKyvEQzVjy6/uS8YbwFvn05Tz3/Cug8gKH8vD8+4LxwfVM9bQFAvfUX/z3DgMm9F4iqvaupx7v/xHm8W0WYvJw6Fj09BZe92yYAPnUwRj1Dk0a9q9xEvc+eDz7lXZk9VRPhvaZ77j0Z+yu+TpT7vakoY70tvpc9/xM4PfUY5L1JKg49s1/evL74m71rZRE9b+YAvZjwpruysT+9Q5/MvDTPSz1QNJg8+d78vAh/jjxCI609zX5EvfjDQj1ujmK9UgOhPINeyD23wNy9wIGWO03lTT314Nw9zPRdvRn1iL3wPwY+2ZaUve11EL0fx2w804OAPRg0pb1yROQ8A1/tvR3MR70LNNs97JMvOpK1DL2Edh490tldvIkDhT1wbXa9tOjGvbTLjr1IZoK8r4i2vYyJ1jvDzWS9lE+LO/XV5DzYxRE8xQkBPXmGlD09G3g8io4xvMmDxD2JTJ88fcy4vPW3Pb2whYk8gXqqvZ8DDL3WWaw7+irdvLBxjj2F6UG9gkflvQGourzxxDo8nnYlvQpNRT2vzou9JYhzPR904b2lna87xu+BPQNe/T1E3jE9xFXxvMFXZj2B8Pc9M2kGvWC03T1P+ZQ9mYDBu4uokTwN2Yu9yiAqvQeSGLw/7Xo9YgqQPY3jpL1xTQa9jFMUvUyf9LyMOa08FEmTvQ/efzyD3zE8cYoWvl9cCr3aq3s9ZN9NvNNhyz18ss68gDGCvWxSBL03fgY9lOQVvQq9cb20lgc+wlf4vTRtUr0I1z496eGHPVCxjr3X7t28kS+gPTMyZL1qrrM9sCkLvb4XiTpwi4u9fwXYPYB+Iz2hZ+G7kQvFvQdvCz4K28O9ah+EvESToD0eEMm8rHucvb2TED7RYo88E5PQPLK0MzyXsxy9TBe9PX65qT0gxHq8Rw6TPX5TPT4NAKS8ytIoPnOcCL40K+E8x00FPbGXfb3Hu4s8Yj9UPS6Q8jwvE4q9rQeGPQO1QD2E83u9xtUDvsQRfzzc8Fa8JNHHvIudkzy9hZu9IgzzvbiAsj02FJy9uZqzPNNoTj4cTXA9tbi4PRE8Vj2OOAg9OX+qvVcGgL0KaKW85ToYvrWXqT1E9Lw99+FgPRgf4r0NDUg8qpWDveYu8T0n+WI9pbt2PaE7IDs6iAM97fYPvr5VCD0LURW9TrxkPO081zxdDrs8I/sivVv7G72byP+8jwlOPYpeBD79COm7fpLNPCy1Tj0TDCw9gJ9UvcQpizwc2De9z7gMulNKDrwoQZI9FFibPQABET7ndNe8LcePPbOoTz12r6E8Liy4PS9uZD3RDzW9XledPfv+cL2TfbI7KFOWvY30BTql1Z69W+D/vNVh1jwhDEY9QiqIvVr/YD1w1CE9vvUyOup4L77JDoM9gjQGPZEyJL3EqYe8QdAzPVrcgrxJaxI9wjt1vRLOfj2ktCQ9vbG3vW27cbxN5t48frJtPQgds70dvO89KpPVPUXBwr39cla8JpKjO+LWmrzAP5s9opy/vbkPZb1uPse9Xa6oPXYiBL3lfwW9fJ2ZvCBI+Dwe/IY96XJFPUeQlj1WBwE9MriPPUTTkrySMBU93hvePJ0rnDqKkq08+B8gPe7TLb0aVFQ95s1NPSZ8ZLwoAOM9t6wXPlm1ID5NyVA7LqSpPVQt/rvjRSk9TNjMPV+agzxjnAW98oybvUi86r326ig8waFXPXDEn71iC7w7qNXlPULWRDqCUaG94uE3u7iWILyb3sG9cuHmPfJFbr3xfNq9TCGEvKPwAz1ZYYu9E7AcvBwmk73cCRG9qy+KPZsh4zyXddA8Q0x0Pb1Q0Tyq8XC8J8JCvcm0LL1qbMm8lBjwPD47hb001k49I5MNPjYeVzxC9tu9EfpBPeyPiT0pOac8yobtvAymxj1IuHq9Wb79vHBzxj2CK9m7uwY5vYhbE7w+TSc9GxHjPEy91jw1cg+9NIqTvM02ab29UgG9YoGRPTRdQL0cSx8+O4KfPfYyzTwGqj+8NQksO4h4CT4u3728R4cYPlyeLj25Jtm9ftuUPKCVHT4lKL68ZKykvF0U3T0mf+Y83kugvZ2mIL0pnB298DAivnIdLL1NC1U9IRGFO7//jz3b3Lu8274fu3lCvjxlEcC9y/K5uokdNT1uBxY9U69QPcAasj18OJg8DjScPEHxj70r8Be9N0+rPeQzpbxTcfq94DWVvNRlDr3fT0g9oiM/vWM14jyIv/09JDyBvLmzxz0cJyY92pScPd1jnz2JhtC88JwJusKFrLisxAo+KBDsvPwf1bloJ9m8RbDhPHRGGr2wHJK9qcuYPTHCaL1aOgM97QZ5Pa/Elzx0QUc9fAyRva7werx3SMw9TtxnPcp1XrxCN9i8W8pHvXg3tLpNSYw9zNYLveNTxz1MtPg8FLAIvWiGorxCqoG9wOqQvN2l87zojN094faBvHlOBb2ATTK9lbYYvdHbVj3VSwo86VK7vb/34TxLwX+9cD+QvWi/0L3r5o67JuVFvefaXr1vfbq75uPgu2RZqL0kIpM8wAyyvX79sDzi//4890A+PYGcnj0Ippm8Dymsvb3qdb3O3xg8MLEtvglUgDxRz7m8ZTQavWEQ3TxdAKS9eOY1vScTDD42liA9EpSovfXAkLxQt+Y97BSQvZoC3DxuB4o9GBo5vZ1IDz2t4gm9coQvPdPbljvucXo8sADDPYl0OTy0GeA8M7X8vOuC6bzeNdY8ihwmvEWqDr2lNd0376/SOrsKIL3HKoY9KwCGvBnUHLy2FQO9LMAcvNGXQD1L1p+773+qOzgWtTzCtyI9RT/jPOg04zylZgI+LSd2PQktbLxwfEy8//qdvKCwNj3mbU89DLyCvAtPaL1rmeq8yH4LPXwzTL1E/Km9/UeWvWQzvr20GYO9p76FPfYgmTypfW+9VIt8uwDW/zt7QaI81JulPGSL1LsKwe28u6WUvAOAOT0t0xq9jmRGPUTPjb1LK0Q9iU0WPejZkToyZeY8DSO6vJvDZLxVOdQ8S6LgvK7OIj0n0866LVJmPcOojT1wvko9uGGrPO9/ADyWCXG950LhPNvEDb2scc28dqOPvLLyLT0zoWy9iqx7Pfw+1LoNUYA9x5kovBfkrrzrAvU8PiIHvW22lzuRvAS83jlgvTeeij087+s72krVvWFen71kLsI8KWPnu1AOeT2ocvM8GYBBvD6Lv7znKPu9roQ3PGasBb2wvYI8W3L3u/sVlb3Ims085/PQvO2KtT2mbWe8g0pkvOv5+L2Rzai94S1BPHHVA71vCa49S3PqvePTFr62Cdw8khLVPLDmyz2QMLc9SUpHvQxDojwcJye9WdJoPUidaDx1PDQ9PQ+BvUZEir1Qyj88yaUEvd3zQT26Fza9/DOSPVl84bxd9YM8zjGBvf67TL2Q5Ey8ExN8PBZLcD2D65+9TFkqvcMizj10JjG9X1c+vGu6qrsBMm29uk8Vvex8XD3opqS85rsqvAtgXb1fXkw9nFC2PDkTkLyte0G91pVcPTWd3jzuCAo9Cq+tvYwPgLz9Rpk8fanGvdgFDz0EHpc88xg/PCStrD0nqOs8hUpUve9OcTwLm229zlKevUJTpj36qTU4Ke2XvVQDtzzF7T+9mU5FvI68r7yueIi9PnazPW2CYLzMxyQ96CEIPubqQL3QUN+5RPyFvQ/Pq7yi6q69vLv5uMv4sL2TsB49jGC4vLUZeb0/h4u9aotuPZp4rjs8gyI9D92avZMQwL0CtfA73yDyvR2Wpbto5M+80PsxPa3mHDyawpm9Y/bAO1d0nrvLpF88bckYPXq+TL1GEYM9YP6Rvf4FAb15pdM9p2OJPdEAbD3uhwA9Kb6CvUpJuzyP4Ne8/LEOvZ4DHr0Q+oO9/rHCvQQLyr2/VyA84iTQPUXHIz0zJz68hx1YvetxhT3wDMS9YFyzvUY3ozwxO9I83GCBvqs7Bj62/Vi9/w/yPZy+3z1bsYg8k2FXPeYpBr2j5Rk8zAfxPUWNHT5hPLG9eugTPSxPsL0f7Oy8qdsbPWJqXj0sbbY8Gy3LvUrz0b3rDAq+dCupPb85czykiwa+CGVovU13PT0lLqS7xgxHvYug3Lymj9U9GZgYPm7Q9L0ukN+9kqkOvgy3E72yY8488GggvZ4SYT2Zmdq9sTclPQgmg7tyNJI9fXkXvtzVMD6PLOO9qWeoPVTGxD0aS+a9aL/XvUOfAD4/aKQ9V7AnvmqinjwIGDc7QiHRujElzDvrji09tDfkOxxqCT4B8wi9I8/dvYfWXDy0Kac7RdTQPA2+/DsDIqi9XfMpPehs5jxcWVU9Yz4DvbwUnrxXlrc9JEnVvfw0Cr7v5LI9OMAMPfc5jz32fYa7mOmJvPDiAL0A4VA9Kh5Xvr6rsbzhpQk8EUqWPTFHAL1A0g8+dEQRPfamJT2s7XG9Gb6PPQ0RjL3ML/S9Wza0vJ0T6z2t0As88G42vuv0rLz87iY+ew1AOh4ohz11sY69dhpevZ6Kg71BHuu83uAHvZsmcDzwKP27nEH8O9TOWD0Q+zk9C6qbve8jQDxu8WS8YHmivWXDsr1mgWu8dAnFvXHxbj21lN07QSi8vT3Pib20Vjm93+YEvh8X+jy5wuw8PWYUvUqchD1iHC6+R7mIPWSsOzwNHJQ8McBAvHvUWrvbxbS9Jb8WvYs6FL7KQbE9DpdXPeoI1DzJGV491WatvWS3Fb1YhIw9ZXE2PBiiITxHrVW99kKXu3Dm4717DNk7pJrKOw4EfL0oaua9jQu6PdBYsrwxgay8PrsDvfDKiz20AjQ+zg3HvDlg5b31qeO9oPl9vbTaYTz7XjG9q4uAvS5rs72eibe6CaE2PXoyO738Zhg9dIHpPZPjs72qJZE9ApLrPeqpLb1Hrgm9zHwiPdrHer3Y7Pq9cVMHPlNk5D1UNgm9AVKjvN8rNb22JWe9gDt6PQR5ujs9Urw8f8lYPZkXwr0wox88uPgsvo/rPT17arQ9Gw0/PRY2Yz1LsOU8oI3NvRd+sr1XFRa+wHFxO2/TGz43fiG8ig+FPfN6ub0D2Ge91WvIPfZoZT0xFuK7VUYgvIogBjwxGS88YpzCPRMX4Dy50ys9R2KmvW7mAz2hnhE9Bpgfvb4u4LwgRJO9EKVZPijX8bzhe9K9v4jgvV4aSj2jn+c8XWg+PRUQdLy7i7G95KYlvrnPzjxGcSo9HyeSvVnkgD4llee9OOMnPB8qDj7ZB968bwLLvcKeBT5xnpY9uprjvb7s4T3aAoc9e2DtPfPBcz3qVq29h0WbvZ7poLs0Ow492Mx6PYd+RrzoYeO94Sd6PFWMJzxAysS8OX47vAXYHTxlVRK8SMfyvOLqkbwA6bA93b5eO4I4XL1QwH27ksDEvJNoFj0yACm93PTuPZF0l7s1Qo+8hSWePKk4rLxG2jy9zuSfPbXB4Lu785o84xG0PPSmFr0kb3g9WLSwPPE5sLxek7s9kK2iPKIbKjxtatc9UQR4vecEHb4lgY28cjxrPS1E8zwcmrw9vWXdvR2PUj24NXM7EQUgPBBXf70NREg8VdHevdUeSj12DRU9lIe7vayGV70b0kY9PJvXPP5i0r2/6hE9xgEJPSSyPbwPtv47FOIkPSu3gT22bQg9Zpc8PUV4FT2tdnE9s1OfPARtELxja8A9e8k+PVC2orzpacO8dNiKPfY0aL2t1a29158LPfu8tr2AqAU94iqNOyWiXrwCehU98dRLPUP9Qj2cpwe9KzqUPceAo7zu+Dg7QSS8vego4Txcro49KNLnPOfPF74fFYC92njUPCnPi7yxrsC9EGKsvTJzh72ty7U9gPRjPHfHKr0AWqE8FsrfPJSFkrwJqTW9K0PavVDBOLyGplQ87wIjPo69vDrAYMm8c6DUPdobDT0b+Za8QVFLPfl1w71Zgw29Wz8yPf3TOb0i1vG8PY0cPTADI71b9wk+oNFAvTXf6j1++qE97B2cve6+1D0KQsY9kfiCvOlnO71ONBk+uye/PapZSj1Vdb67pUi5PWmoiT2PE1C9ALGFu1RZDT5vdqA6pADXPHGcnT0MujG9R9afPGl+/zzjUow9ah4pvRVgxT03quu8zN0+PD7OJD27xXK9jrmXPMvEiz3CfOU93EPIvC3j4TzWXlO97QgjPsLJST3oxzo7+N/JPOlMKz2k5qs82r0kvv8zALxOBLY8GmWOvIAamLzrQCk9Z0vgPPzGgT07s+g85EFPPVdf6D2DOA09nMSgve9AAT4jORC72ALWvZXCLz2GV5e8f/zcO+t9Rzzfqcq7j1dnPd8OTj0gDgs9viDMPLrAN7x4XDA9pVSWPUizwrwDv6q9vvT0PS+MmT2ynDo9+ZYPPNA1Xz07UoA9JpptvT2BgrxIlSM942ivvYd48D29KZA97yOivMlSBTx2ftG8rtayPb+X5bxQqYM9bWSRuxw+nj1VD4I8SmyfvQ89Rrz3jmi9kCbFO47oPb3qu8A9/KYJPbIosD0URQ69YQYFvONYpD2dmiY9dwXIvDBdhb2FD2a86FN4u3r2y7wIeDO83CV6PNhrkTz5Xao8N7mUPB7Vlj2IW+89TG3PPCtoj72s9CI9D826vBL+gL2gtLQ8koCLveSQKL21DCk95D60uw776D2nxLo7o+wxPaUoRz3smta7BTFrvIf/BT2UScs81NW4vSOcnj2QssI9xwiPPTiTZTw8f489mx4wPdSFZr0uvx292kNJO+/xor2f5pQ9xs1ePYI5vLtBGNa5e2kwPWCxVT0T9Kk8DV5YPZdx4Lw5XZI9UN5+PXgmV703+IQ87USvvLn4NrzLE/i9SolxPYpjrTrR5L49omz7u9ohT70Xy4E9s2mOPV2bhrzlDS29Upp8vMvZ+rsCYIc8XdMBvEDsojyG5ms9TbvLPWkIPzzerdA8+p0MPnmmfD2dsPi8LnjIPHzJGb1eqpy9mYJzPbU6Rr05c9+8iKuXPLLeZL3+yRA+fmDRvG7UdD0RIoo90nipO9hJLj2Z4/89r7TbvYXTv73HFWs9itP+PDqOBrtyGSK9tt41PcKHlj09yMG9OjNgvaKLwT3zNMy9W3JMPT6qAT4xloK9lbpdPa8fjry7IN886Q/ZvZu9gT0KJ5Q8buBpPBaxiLtxXUK8xheIPY6WMz1Pu8I9ZrheuyEUJ73fE2a9JHwdPm+yvbyaVyG9JpHrPbhtnD0x42O8Y0jlvdqtKb3YRrW7uNvEvfB6CbzjXjs8rkOnPCh6iz0Ff+u8xpaPvWg6Wz59Dx49wBO/vcwasT3oZYe8tagrvqpoqT1P18q9FEw6PJVYALzv9F49gccOPgUGK71kAzS99WCNPdVibTy2Zg0+sLSGPRImVbwuLyO9T56qPVVSdj2bsNC8Kl1oPJ7gUT27Gt09hZUYvrlTs70CdOk88+QKPKuUoj2TFng8gdtgPGENTz3GirW8TANPPIZcSr2gAEo9rsUNPYxJxrsWe7m9+KxtPFUcursfm6s9G6QlPY9/l7wMF0O912jZvRs3gT16dOg6MLaUvfP2nj27QXi89C4cPTzPkr0PAiK8vocIvYroyb2usfC92r34PCn16Dwsnk49PL5ZveAzir2B2Os9s6c7vR+y9L0SiYo98SibvODOFL6/SM08nBUSvlEoMz1jnf88KvXfPDEO4T3WHtq87t7fvOVmMD0iyP+8XKlBPIMFO7wyrcQ9jc+wvZy5Fz4cWn09nIqIPeiW37zIDIY93tWkPVdC+r1qL0q9JpdHPaSAg71uUY89+34YPp4hpT0i2Ya81GNLvCaDKT75PmG8cPK7PKU7bL0HeAU9s/2+ur3gb71jbWi9Rdw/vDFBer3J9Hi86AeiPdAP3rzRgSo9Ftflu/wpXrwHJME7PzH8PDw+MjzrtKi9Qvd8PHRz+7qBlpO8mESPvUGBqTwjTvA7jXAKu/hCez1M/T88rN+2PXa1Bj1grha+k7RSPWuj/LxnmZm9bDpIu2Bw1TuHKQQ9m8+BPdlgXj3rYLk9SaUJvel/lry0SkI95amHPff/3b3fcPm9+FvOPX98mr26IG49BD+ivTwInTzhNL88xsoPOyTHzTwIN8o9xcbBPKREmDsko9G8Dee7vMvfPD5F6cy7jrWTPA84kTz4UB091rQ0PQSisjyqQWW9p+7mPTLvND1C2q29sl9EPHe1Zj2zgaU894EyPPXeKL1ZvBE9yTGePTip1jyTizU6ITlIO84kQT2hbI29TF56vbpQdz0idrS8+f8lveuaU7xBd9088Hkvvcyeeb2JNV48stI+PsstRz2N0UC9N9l3PNZq2j3BTga9Kvi9vdwmETwZrwi9BPb1vIs4Bj23x0K9UHMnPnn6w7wbYEU9jMinPVSiQ73Bj6k9meyovejnHb1q+Rg9xp+NvH8VuT1bP9C48fHDPeufsz0csyQ8PHT6PJKiaDy3x3M9xLnxO2tAkT2S9s27mo0OPfAsfb3mVD09AR6zvXMqqT0FHkg8V83Nvcay4z0cFnc9c/iWvJvSUr1i0hk9KouXvAYlFD2pilU9W3L2vUCfEL0aIAW9QEnjPNK97b2GxG49GlAvvdubi71m2M+9Wie3vBCFVb1YxGe8wAYAvQPa5bpaCUa9LeGhPddojbobIuE77IE0O97lCj3twKS6Z/f1PE2VkD0DkUa92eo4vhmyOz2AKT69HmO3vd1nyT060pm9ALoPPegtoz2rHtA3gVHDPTm1obyVhdM94LUAvfUa/Lr4LQc9jZK4PcUMGj3khZC9zGbEPU3twL1h9rE9aJ0fvQBZrz0EKWG8KZqAu3S/Yj0XunC8qjt/ve68uT1YGBM9lxnAvOkTNTyMUQk+L5rSvQpwF72Zs329JiYLPtYWFL3P4AQ9M83BvW9faT1jd609eyfyu33gtzs+83U9TwgXPh6Bnr1g3yi+znhJvfjb87yLlyU9mTzHO6GXmLyHrbY9l0mWPR4287y20RW+0LoDPrwQyT1QysA9hD1hPc2jd72wfOq8p6j+PcBVv709dae9ASK3veT9xjz6rMQ921mJvUw0nD2S8pS9qy8svibM7D3in8a8gmUEvgpwGr3MqWA9+Lh+vRrx3T3JBz298N3nvOFhEj2Nk5W9Pc2YvYLomD3DZdM8wZYqPGfkWT3Av4o9Z7WnO0u+S73RMT08NVHvPEivr73sZdS89WXGPefN0zsOBJ49ePu0PPnd/jq4WWQ9TooTPqxMYD2jo/A79pX7vBFBlj3/iuI996jEPClZNj17BNY86aWovVpa3bw4glo9RuubPQGAbzwdHRY9MZCSPcTNnzs49c08kv3yvapL2TygWVy769HSPYvljL2Hwmi9SKrWPIiXvD239Xq9VqX3vYu2OL346h29ecG3PTUOhT3IXdO8gkBNvTyoRL0KoBO9jVwUvW+iXr1dooS8grgQPZIbIrz5b7s9o8iqO1hooryrTEY9afD3vVua0r1zC8s67ISevSc1Or09wx89Q4sFOpZIYz2DgCu83/2BPbuP4T0Oy3K9UuvDvfZYsz3os0g8eoTRPLwtjD0pi6g9Hbi3PGB5K7ymwrC91eaOPHqZDj1M1kU9zBCive7BuTynLKs7hZajvdSM871ipmE7crWfPEARaz0LZZw9wYgFva/WfD0a7go9oi6AvYTq9TwyrAk+iR5KPU/FdLzjVL88XNJTvY2nIL3wK/490tcGvXOXFL1y8YW9/6oDvKIjrT0QKPS870yBvPmt5Tuv6Te+Rhbpve/NWL3c85i96liLuYyQCr2I9UC+AEIsvm25n73rKF09GEdxPXX8rz1Erf27a2Kiuw5aSz7A6YW9hKIiPjftmj256z+95BlrvXvXCj6FWfq9dgD/PSX/o73QDmE93b0DPICr2z1o6/Q8+CagPec7Bb7J4AC9q2UYvj0dML7/tUi9Re7ovMu0ATxvgcM9Zb+TPQaCCj1De7U9+JnzvW5bKz3XQiE7K4WGPRRfir3W1fw8m1Jgvk5CAD4A6xs+8aSAPRx3lj1Zzpe9MXFxvSGuCz1mozS+XTdePXu8s70zlXW9N8bQvVGvnLx3sc09wlEmPlBaTb5ADJ+9/XedPQ42lT22A5Y9Nk+tvNw9aTuSHdU9uiwWvrTTwLxLk1k9vtimvNz/sD0ykny7yJbePNFIBTxyX0K9wXIePXkd9jxlate8+kGkPOvGqTxohSW9rYNJPb0uCr1LwSy9NH6RPdmy3bxl4t293lKUvZp9JT35VIK9kMCpPQ0Rlb14zaS4VPNZvYSG0Tw6JrO87DHfvf7puryctj8+qEBfvaXlVL3p4Bk9BxhxPJwfkTw9mCw9BrOXPb05ST1d0gk8yZMlvvhsgT0/Zfw5wLpIPeNwiz2xRtu8xH4gvrVrdT3o3RO+vkW5PamYyrz2/zA9DmqBPTEYIDzzYUi8THi2PRAF3TzID+29yKnDPCenyDwBUjc99A8nvf//wLzWEag9Oxa/PWZ0ODz+wJk8MV/uvIUQQL0p2vi8RTKhvaXz9bw3QtM9MeLxvJWWzz0Ltk68paz5vAKbWj0RSYC8EoHKPCpJtDzl5H+8ytZpPJH9C70kn5c9mfAGvdtEE70OgIq9TXdMPea5Hj3abbC893kGPcciATz6v1M9TJzvPZXaYT2pGEC9/swpPB61yD1Sxuk8l1G1PPYbU72Lg3+8kSBYPeov2L1TrR8+Rdi/PPbsLL3ZePA7QyDCvYxKkb0sDKA8Ew3nuxXBBbyao728D1A6PXtogbz+vzM9KFENvQagWD13A/08gL/UvdD7YD6+KeY91UGYPXBlTb0mi4+8xCrNvCD9vD2k8ZS9huJ2PJG/ljuQ4b28+FpRPF68HL4xXd47tR8xPalBgLwKJMg9J4QKvjfIaLykiYg9uAOZvVsiSzyH3hg9IR1wvTGvRz30lVM8xXSiPVS+gb33UtE8oUEvvUF8JjyeI3S9QpcAvoQrUryZ7aM9Gnb7vLm1Gj7kbRm91iLhPP8Sir14n6I9zjTQul0qFb0qFPW89z6yPSDzID1eEI29qtiLPV/7Hr3G0JI7k7kNPh6xAL7Rvc69ZMg2vfwFbL3HOag7tkp+PaanGrwCmfU4ithcPTE+3710Rhw95A9bPAz4u72dYdA8DHfhPDK14LwvB449NNwtvQl5szwQb+89j2iFPSRVYbwDkwo7hc24vZdxHL2refi9ywbNPPJ8Gj7HLgu7Ht+OvHf9Hb0cGIk8f7j0Pc9lCT0/dC494akOPGP7iL0dJqG8EgXHu9dkuTx1RFm9+oBAPH38Ar1DbXa88zsyvZ5bQL1xX5o6oO1RvIdTyby1TfY9lQ3NvSM4Lr3atKS81uF1PR6ggL26nta9ITj7vEEJ9bw6aSi8+uEUvWdpbT3Bykm9UBAFvWt8jj3ERPe9qgkUvlgavbzlx4e8+rKBPRr23buvR1A9X4B2vWhaWT3UWdi9/BE0PUDB4Lvbjum9FBTDu8dMKz0TxTa9TzskPXSAi71+2aM9/TGNvbestb06Cf48njhrvV/GEzysAFs9M0CyPBFfJLrgORc9jNeTvBnFpD1M0OG8Z170PWqcmTwxhVO96NxCvf7b1z3lKDI9IAUzPLK65DysCDQ9HYx4vAecnj1ippa96wSDPf9Xcj0ZCW+7+IiQvUUCC72M49Y94/6MvXtot72pHoM8foTCvET/rDyQgSw96LaBvQpLhDxk94S8KaBTvSBoX72byr09vktdPduudD0TsAA+riwzvFHraDy9CMc9e5tgvb/ngL0bwpy9sH5QPZ0tGD7FGYy8pddNPcEzrTx4SKW9EeQzPS7WuT18lAE8O28NPMFQaT1q34I7yETYPEwozryKpkm8zp/YvCBcq70Y1ig+rHgRvfBQJz01vhA9tvAhPdtXIT0qyPy8G9zuvN5ypT13cdM9Vbf2vWLhfT0z+LA9Z7rHPUHZJLzfTam7x0xLPfJimTyMkqG9rMkAPUp2/by27nI9SfzivIDxGD2ifMq9A+4dvc9wZrqCKB+7jVT0u87LQD0pfwq9aZJavdnipL2L5sG9jl9mvCsI/rwRv8O9Vd8UPgNWMr2bLl+9NOGzPeYBjz1L+h69FW/cPbnoz72Qs5y9aLcxPMztKj1bjd28pmfMvefKVT12i7+7LmlhvbZBkr2RZiy9Dh7evNS1OT3NUDA8y7zvvWqFkL088za8ulIkPqv1ir1KhgY+CboAvXKLSL2yBCK9WX/jvYGKYz1UBfE7kPmKPV4lmL00IKI97z+EvcGvhT18x2G9+UOJvPpXpD0QJVi9GFeVPGaVrz0TqI89+oB9PUbe3j3Rusc7irKDvddXATwSN668D2FKO4aZwj0nIKE9ixtYvWZKWLy2O1o9XUkYPbU+UDzD+1e9CXB1vc0Zvzyypos9yF+rvYP0tj1CYAs9yYgXvWzDUb0dTZy8PFWfvX1WNb3LsAy+1IwavknE+j0yIau9cMWFPI0PYrzFTB085fTvPDYVyr10RZ89qKwWPlX6gbsKdCe97OvdvTA3pL2Up1S9sRaUvO0WQj3rw/U9lLqAPPRhtz0VpEa8gNeUPZ31gL28qgU9Mf6Fu0gwRryF3gU70D2vPQDsgr0NPSq9VNswPK2p7j1UyXO9wW27PZqYJD1XOAA8+uamvDMJgz2uK3U9djEtPRbj+L3QwWE9xF+RvTyVQ7x4tik9i8v7O6s9hLw5dDC6qhkOPV74sz2dqRK9p7iMPIFYVT30bxQ8aT0fPRDp5jtlN7A9ASwTvCWDtDujEcG91LWtPMJXCbopMaI855jSvXAxDr03OJW7M/uIu01Cpz3DEy+95ABgvWmIdD0GGc+9cd6nPXVHSD4jOem8ETykPSVyFb03kA+9eGKlvZLpBb2WQjm9pFm5PSYcvDzew6A9iAHzO9rtq72/L6m9RC19PLPRBr0lDe08+JJ2PSRk2D1wqBK+aE8ivl6aqTz1WGQ+4FoXvdiANz2I0l499badPeb40T3zKPg9oAIdPbOceT2ZDeY77UqDvP8xwL2SQxc+uW5HPjNydTtSXWE9MnIFPRpVdT1+FRC7TtyXvNctvr1NA8U9GfIKPcp7E7yQoj69VYk+PcO7bLzsgpA9rAwvvupZkD15uFQ8WNuUvHEQRDzoDMS9TFkEPpT6dL2NYsc9QM/MvemQXT2VSAY9K78jvgbpEz2SfkE+LUoPvXSooD3P5Cq9/DcdvHfk+TzBDQY8fjSMPdudgD2+jwg9XSCbPOgyNb26eTy9ZQeHPLlYbD3Av1c91jp/PRbEkj3xx449g4DTPCHXtDyKuTY9tqcqvJF+mjxpFDI9YRZPPbPOmL1jpsC81WHAPZ8nizz3igS+ImuVvVC+Bj0WnMO9uOdDvVHYED0uiLo7ejyKvdlrbD2yagY97/F3vcOAmzwdKiU9sJkJPGQeTD23Z4q7JAXaOLcBoj1V1mW9mQuPPdNIB7x+0yk9BE6IvM7UkDz6ekS9CS/DPDDk7LzMIUA9BHCDPQm5mrx6ZqK7aeG0PAaUWr0U7Ye8p4dSPIa4ab5DeBq+cGanPIKWnjwWZt29Jed5PT4UAz4Unsk9d64CPg+wgz2aY0Y9uh8qPQEmxj2LFMg91f/UO3Hnjr2MGVw96sJVPbkVijxNYhs97afPu0M/Dz2R0TM8t92NPZodN7we+oA9yydJvWdI9ryDKZM9AbSavbQztb2bLdY9jp0HvvvXij15Gbi9mdXLvL4WTzw8MQw9nbaZuykN5D0YfyU8ZPziPOqCObvfeRG9WmIrPTkEqb0KBsU9TKqNvN1ImT2O1kU84R2bO+X2/jwIasE9ZnLdvEn+E73HKQ6+ONWTvWjEnj2iPtc9s2LXvVEMCr3/17K8BOTOvQfSjL0+Cau8zzPbvO4IwD2g6969t00KvTwVHj1R4gI74pXpPUngbr3bDr29PYKDvSigjb0ZLQg+KPYyPfFeMT2VhrU7PKAKPZr2W7zq0fw8IPumPVQ+J7zwszW9tuRUvZmmRrukCWA9OXuXPUqgtLyNd6q9tSaiPZfGf71Uz6A7+kstPWPzQ73zi1Q9NKpPvYUxnjwsOBC80xfGPRjsEr2XbMO9sSk6vVH40L3oIZ49f6aKPZSFXL3+4Yy9MrDmPJrzGjvcCPS64bHDvUyUlj1DrpQ7WAa2PbiAh7xunRe9TsUJvXSEoT3IusI9oM+Lug7W3D13hFc9J09uvRW+Tj2JqgY9MThVPO3uPLwICLg9FU1KvQBojb1tuII9Hv6NvcCsUr3bZZ670N+OvdXeEr0k6nC9T+MYvY9hgLyLVrM8r7dpPZdUnL0GZZU9nOH5Pa75Kr1ewKU94D71vCm0Vj7T2AG8ke3DvGzDcDx0hWY9BbuIvWW9uDzvMWC9SIPkPN7Bxj3A75c8/BO1PJgRHT1yP+u9XQc0vUAhm729eVE9SLf+PT8LiD1Qh7+8gjOsPb8DCz6OHuG8I3SmvfmWeDwVvxo9vZfmvOB2Qb2RMQE+0G2NPKRvQD0dLsC8ENutPVggCT6AsO49ey+PPaoWnD2yVU+916gQvotKcT0zsBA9xpEZPJQWFL04ehY869UovB9F9b2Kn9q7lYuuPEyxiTwMuCA9ot2evKsfBr3IbZM9lSsZvRJLCD0sZ9o9kRSxvRwaXD3cGhO9Jw85Peosmz2r+AY8D/vQvHJkhbsXLqm8PiRIvPxehrviYYy8ZKeDvFyCd712zcA826TKO1py3LxpC4s9zwkFvo/1sLvrRQY92piLPKdEKL1qL2U9eH1jvHQTYL0W5sS9sJBnvJKogDy1oTM93NYBvfP8WL22KAQ9TvcQvYE5m70euka9ZN13Pf9ZUjtVxis9EgI7vayym70e6UE8AmK7vJ85TT0cnoS93ecfPQOccz2sYUq7VfZmPphMoT1AEWU92wOJPYyIx7x1lr09EyAMvsT2mz0jAkI9vvcCulccwL3eLGk9PTO6vY57Fz671go+J2PjvW5se7z4jCK8OlQbPT73Jry4O7I8WAAFviYFjLxzex29o/3svfFINb3OVCg8AMUUPkLXxr0bj0Q9JPR1vVuVw73CVCC8EhTOvfgR8r14HcS6BLDVPXXguDzpxvk8B6xgPIHYTj2CLhA9/3qnvHYfzD1u4Ok9lUVtPXCxyrydC9G725qEPH3qB73+DI69bZnOvQhZZb1ah209IQjrPfCMqrwLn7u7mYunPMl72jv3xIU9I+QAPkQMCr4Cexw9uTX0PHp0Fr2AfBG8WEU9PDSvp7sLcjm97gWFvfdT/byBrA48QMJLPDsbjD2Lqt08NSB9PSKxXbyRJIA8mjlDPCD3Gj12OS89cyxUPezeeLoAqCc8KJYFPegSULxSHxS99WdxPWd1qDz/kGM96rdWPIZ2kLyR0pc93P3+vLjOrbx/WyG9DJ3oO2Sfgb2V/Hq9UhLaPFIHwD04cwY8OesVvCuCkT3ri4Q9ixxlvPwXNL02igG9j3iqOoY8x7yVcLe8h4kjPaKGBDnCbpC9vK8dPJxA+7xiquM9tug+PX1807xdhZK9WOjwPJ1xXDt2GaA7Cu7pvKYgDL0ASem6UlO5PHTDab2Y9EO9sj+MuzlGmj0CjmI9nL1+vAswc71/rgu84k/EPL2wZj1xWBE9x0XdPbRxFj1MJsK7QyiXPU1RfrzFfzw9Kj0JvfmfMr2KrbA90wMovEgiFT17Q9o7uwsKPY9vGj0I3Iu95C2zvLom2bsItOi6VMd+PTm9J711C5G9tVmVvRBmr73wLag7joJCvAd+hT29Lf08ZJgAPIM2u73y6BU9SBU+vf7GwL1C68E92kL1PKsOK71mDH29SDHzPQZ7ETsUmYA9ctuyvWFVx7uKSBM95RIgPREomL2DZ5e8ZuT8vdibyb3pEF28sW0xvd5YlD1TSp49K4QfvccAbD0PU0g9XxQ2PAGnGb00e7A9Xp/kPCdugzxK6IY9lDKdvFv4tz0gwJQ9rx8BPTk+ZL3bX7k8rVgkvd3U5LxSfKy84TVOvSvwR73ZIfW8WBdmu+XgAD20wiG9h8B+PZ9rebwDQpg8tglevTNsMLypYHg9IfoYPWRNwjybSwi8B246vTFq6zvjPjk9hHhYO0Fskj1wWxA+Fp1rvIKShD1CDoO96xY2PSIlHD0fCOC8t1n0PfNSmjwBzgU9XP2dPelJeD2lzqY8UJxOvSauF71A3Jc8sLsAvJoEZT3Fg7G9GY29PGUJqbs+gBK9kWadPc47x7yheRE9Ki4WPdbfPb24KKA9XIgtPWy/cj0HjFQ96NGDvO3ZgLwO6dS8/vJsPKMcBD08fSI7Es4gvTUZUj1JZb87QKl2vZCpRDyey5M9ZYXRPF41/ztPazO91i0VvWXC8j0Z1D89sKe8PfYD5TxQunk8JcPkPOAhGz0rfI69F7HFPeSd3zzjm+S8Td6NvQkLWT1XmB89Kw2YPK3QGz2TZ+m8UGYhvQCa0byv2wI8wb5Fvbjjzrzu+Fw9td2wvHqez7yDcIW7mEk+vfmw67v6/cI8pvmSvHVVqD0uVxc8zlnjO859cT2cIHy8Cro6PBr7qby2rLe8ro2PPC0iQj0WFqG8EZJRujMXfTyQGBw9eC1MvWP1zT1UO629sXpsu1Hxpb0mPgI9noo4O3TJCDzmThm9s9SpPPSBTzyhqYk93eG4PX1oar38Qq89it0/PR2eZL1pvZ09HgZpPVW9w7wW4Qg9OtTeuziXsD3twya95phiPYwZgTxUL6G95WyxvKQPXjwKEGQ7qLU7PQURZb2eM8C9aNzLPWyWBT3GH3C9+qlLvcx+87zTI/E8mY5fvTb0qL2wNKY8bJAMPaLnM7p0ola9BaPZPcBqAz0Rp7685djBvCyBIT2c5hA9KcJlvWzwsb0mhk49MpZ9PEG8/rwkW1M9MZ1SvXu4xLwNkV49F9QyPcnfG70iVsI9f1Y5vSYzursf1mG9VRbNvRlhPjxvKJO9fP73POc0q7y4PYI8HRKEPYOqbLzNYy08v+YUOxxEpTvEcZQ8CAWivJZkhrxSuAU9MjyoOhski7zTpaQ91fMzPaJ6cjsheTu7gAJOO0QYiTwgaYc8FQ5RvZ365Ltupkc853+BPSw0yrx62Mm9OloovayKzb3Ns789x5iROw7wjD0f63o8IyKIPPITBzyUF7K7Nq+pPD0XXzykg0q7H7c4O/BzGj1JXWa6XUwqvKlTMjxu42Y7zjhXPQzRV7yyJAO9ZfkbPUwq/LuCCzm9INvMvUt3E71vKaG9c6pnPZZHPT15eZM9JkVUvFjhB73J3sK9xYnAPN/vvbxi77O8KDZ4PZ4iib1fXSw87IEzvShRQ73uaLa9R/hXvRd7mj2WDom8t51MPSChzT0YOCq9hLePvSoHSjt04h27w0YkPLoTfz27S8k9+6S3POJfB7ztwcW9IE4aPc4eLrsdPoU9if5SPWdNVb1Edmk9wn7Gu/VJqr3HcMC9xa59PRh1Gb6fuTQ+EQURPMV94jx/tyq9GfNmveVhsjzrJYw9hvLMOwHsBb1iEek9b8gqPR2KqL3aWSQ9iV1ZvIzk6jwRDhQ9bCaivBsHFD5w4Ks9ihq0vLaQ8Lx8y8a8JY6evQ+WGL0Zld69XmBDPQaY3j2h28m8isbDvN03p72vlQ89khCsPSH9KD2BS4+9FbkJu8gtUjzHJBm9m54+PHCOQT2t+Jw9yPT2vAZruLw2Arw8YWJrPMecnL2p83m8Tlm+vHy4WrydsLI9vYSaPXNoJ72O0cS6OiSOvXFroLwdaci9tiFhvZMSEj3cxm89g6MAPGuXHLxg9wu9L5pYvJqbRbwjc6W7rFAhurIPij15bj66jSIlva2egb1nu1E9qmOpPUlAvL2yuxM+kXb+u22Mnzy1LQ89zKxVPfJZPLypnNk9maA+uwINqj1Ofl09CRFDPQP5Br5LzIo85U4Uvu8aqb229JW9X0THvQBmm71dWvQ8MkYWuxAjRTzWSoA8x6epPNIJUL1NgiI9+ujGPeUjeb30maK9Z7SUvQ8KG70lVO0813DFvHok5D1g+Fq9xwiHvI/AQ72K3yE9fLJ7Pb+1XT3ASBS+U9UsPZGXEbw6A968xhUAu30gJD2Ji849g5MgvUr6NTwONpk9qb9Mve7Tvz3+IbG9AMK7PItdqr33CB+9QKZhvclUXT0E7cy8znMovTEN3zvLDBq9p+b0PIPoO70YseS8sFLAvSI0AT2DuhW9xoicveEi3z1dzQ88cZupPYQKVz1FVyW8TCmqvSdTjj3+HX09Eq5Au46mtD0nHCe9Whhpvbc5ZL3ObJs92e/mPWVy0735acK9f5AJvenbcL1Sxmy9AExePaGMOb2LrDa9oAz4PO/Vlj2GCJs8zSA8PY9zJj4wrY+9E4IcPOL5R73hFMo9zjDWu+43Hr38BfU8g31qPTsUYT0HpIU9XsIwPRFiPj3NHim74vQqPZNECryjlQe9TXoFvbWpPzu9e8E8R67HvH6BPr1hjRM8wyHDOj/9yjpV+wa8JP9ru9FVwL3WKBg+tGscvaq8sbxcd1k9+cWTvagunrxRreI9i1ZsPJRqMj0H6mA9WViGvTlijD0frZK9GJY/O0jFLD1g99w8mWBjvbhz0Lz3Qzc8qPCFvcOmG73RrSK9IteIvDAGozzJQi69FjhCvf8/Uj3uapM7IL+Ru6YTdLwCYcQ84XsJPK6n970kOqA88et/vBsLGT3kTRW94cElPLAUUr25Uqc90+ISPRU9Mz1tvmQ94V/IOql/pbwu5DQ8/nUePS9kqL0zoT086ZQbvbxeJjxa5hG9OGA5PAvHvDp0gEi83DvXvL/02Lw+lJK8pz8cvbGEWj1cIQU8AAbmPD2gID7pqD49c2MGPAqSEzyAptg6w/vBuxp/qL09zLc9ThKMuxtSij1kNgc9wnjJPIpcnLyJtqA9XIIkO3/BFz2qy868MzilPC3gNr5leIY9QvOdvej1or2FZCS9aSk5PeRAGb24Bbi8rn8bvWVxmDti+QA++e0sPjmuhj0gv3g+7ywOurF88rv/R429C7XPPTNj5D2VjwM+1QQtPqkNATyKH4K7T2s1vSsbvj1IkY89fWodPp9T3r1OcV08SSiJPbbBsD2Ge9Y9dj6EPUei9Lx5dTg+qo3GvMhTGD1wSNg8INy5PYUIh7v7P6m82CGRvXoQBDwr7SU9K5FdvXCqsTwKpBY9in6gPFpNDT5UXX297gTQPZn5bb15oIa9ZDPDPVHurT3l/zs9E/JnvSNvIT76vjG9JWKyPbEV7r3gGhY9pfDCPfcyIz0ffgm+0E5LO27Tzb3+v7S9t9IIPfD4sDzBug49dQEaPeoigb1BeeU8pIEhPvvvfj3bD629JjudPVKTAj3BNZk9eaU8vEPExLx0luc9WkR0vXKaBT4bXk49/3nmul4x+r2i66o9EXoVPXKV9LwUKQG8BEEZPgYO5r3gTC89jQ01vHRr4j3X7Y48swE/vRaBm72ub5i9GAJRPEK+KTsEoF28+n2QPYmRMb3o1zE9x8eAPNUISLuvnRa9Uz2KvUCFhDzAtmg9CTIBvVxLmTx7YCI9y1VzversYLyD6V29wpNdvEcvCL573ka9pMYPvk3QgT3dSEe9g3rCvGd8Fj1qBqm9zaEeva++FT64LJM9vCrWPAc96r0etsg8+F8zvVd5lD0ixJc6/8/3O/WgND4L5sq9KmLbO8VmtTzT9IM73+SLvMvKiL1Es6Q8a1iFPBuQGz0EQtM9Riu9vBjQ1zxbeuE7TkOIPL66YDyn0AM9+p0EvPc4p7xSX2Q90N1EO1ZoXD0D9XA9TbHEvBSecD2r+bO9glJhvdwEdj1WLhs9hRQLPaKYL7wFp0+9L1FIvMZChTyJlwM8Mr8mPelR3T2phZy8TVGaPUDGs71T7dC6IXi7PfyfizoIinM9zxG4PWrK6Dxq6508axjuPXgC7DySyks9EjZtvSEwY7zYUv07B02GPTCiM7zVnZs8UleZvfdtyLtSVsc8D56dvUS5UD3AGsc9mHejvLQyvTkeqbg8jkbCPfVMor3VccQ9V9YTPQdNHb0qdOW9wIpOPZGEkT0+9Hg96oLjPWOnwD2BOp+9m7AZPUwUrL1jMgA+noLQvIkK8LyUV0G9yFYvPDmsxbsO2Ks9AiaavIISGzpYtrU9VlorPO2mgrykL869KqLGvEq9vbqANrO8McyZuzO2Gz349YA9HsWiPUMKXzzwkPc95rw+vdV2xL2gWAO94eNhPF86T7v7BQK+J7O/vHpk27wpbDC9p2SQvWYWyTseV0O9QrzbPYi1Ib07ec89pbAKPgKYULubQzO+E8eUPZWnc71QwW49wujjPHwn5z2Ob2K8nW4lPT8KcrxQHae9IWnVPDT6gL1u8Ym9JM6FPZ9BcbsJ/Zu9WSkIvrG0BL1wKIw7y07+utx7Cz6nxKa83CyEuoQZS74IIJQ98050vQjxQj27JQe+hz/XPSYRBDwFW7Y8vXzfPRWjFD6rgqO8Gz+nvX+EKjy6VeO8nn8SPlpvDD5GqGI9RVWvPPxwE73rwIE80znGPaRRuDqUnPE87NiqvRSxAr7jh6481vGCvaYKQL22fE29oJauPGT4Rb2lTKC9oI1BvdMShr2//Kg8FpnPvYnN1T3Akx06bHxWO7OSCj4y8wg9ZNwBvgIlJD3CYWE92k6vPU982r3JTMO8YfJ2vbcPLD3RxwW+gGafvUAT1j2Si4W9k86CPWu6Xj1j5E69AOSzvVsLXD1bwz+9XcOavO9T7T1mxhQ9N18IvaA3CT1GATK9AI1wPfc1Aj3b4Fw8qGzUvD6TLjyTg2o8rEmBPQ2CuDxtoyq9heNwvcpX27rf/Cu9zvAZvY+sv7y6wuo8YN0xvfaySr3GGii9H6vqPPxB1bykLgi9hCgKPQi9iT28OVa9as3rPQvDVruHAqi8v/qqOwg0kb02zUQ8fOp5PR0427zbDMm9coJIPVyEf7smFEU92lnmvEcIKjxCirU8vz/HPUzlzLwkHII8f/PMvUrO570/7Ve9l130POZIvbxn38e8AjEvvZiDDj1fVd083L/0OlproLw7zXk9pPsvveubKD3vX3O9C06gu0g+Rzxkhoq9KQN+PbKwlL1oyiu8oYk2vNVKHr20CSK9ziiFPQ2sDT3/Vcg8/JIGvUb0mLwU0d+7wAN/vA7wCr1z0Yq9ZQOPO0glRLzvVsE8ePEtPFMumj3P26S8RwHCvUFQVrstL+w9vdkePc5cZbxV+++81YiNPTmgDrzYmsg8/tKaPPq2Yz0e4qe8J45NO+CIVj1Ne3U8bJ5Jvb1M1TvK3yE9Ij4TPZQQujx+Znq9qE0TvNF1JrweDKW6qgz9vKLeJDvYo/U7YFGgPPBWTjwP0xe9zlSGPWqhiL35efm74i1lvPY6hLz1ci09JKlyvYogCDuHMA69YP06vYdYQb3r2zU9DwZqPUvGfj1DDvE8Nk4wPeljFb2MeYQ9qmnBvfB1HDrV0HS9f2jEvIn0WT1rrco9cfqBPSUlWj0ZmOw80oudPUwTO707nZK9556kPR6fUz1oK9m8KUsGPNY0lD12tFU846SFu+n22run1h28I684PSTEpbwUZ1g7VI8pvW7lZTx8Dsc9FB2/vH2zBj45KdA8GmSePHn2tzzHsUs9OxoIvRrG2TyekSS7jq+XPTtblzztLtE99arPvP5v4zw1MRC+NXv2vHzOUT17DJi9ndhlvNBU4jxcSQ299uMfPVF3VT2YPOq8lkcwvd+QQT3h+QM+gpB4PAwEEr2yLhm8qGCyO4C9qz24hfk9mbohPSsIw7wSAM29MyisPQc4nj26PUA+AzfQvLXIoj2A3YM91RUbPlWEjj35/ek8M3ElPZEs+7peKnK90xZEPCtagD1flTk9BJUBvRJS2r2ePNe8FJSkOx96Q71CTqM8zN6WusQErD3ZjVY9kRYOPf1LmbvqgFU9cmpjPPnqQ72skpY8x1AWPqQIXT2E2aW9IEscPX7KDjxk1R09iskOPbPfZ73Ne6k9QW68PJUU2L2O0Ag72Sq8vaapZ700UWM8AT4KPdxl2D1DIdk9RfG/vDE5Qbt9t9w944q+PUiMPT2gNJo9PPhPPdNotL3Pao+9syoEO+bO8D31HrY9/TwDPpIWh71JSA89j763vWx8gD132eA8sNDrPUxZF72dBXA9hbA/PXU7tz1NSxY+4wKxPZn/Ob1qlJo9KeO3uJpMnrzENxS9TV8IPoEPm72FoI+9usEBPUZNjL2jSIk81q9qPQN3nb3G3Lw8mqeavGwHK73PE5e9ieTIPbyJOL11FQO+YubZPMzIBzx0h6C8LlNCvb4QvDuTD6W8rLkvPuMII71OD0M9bhUoPgzbgz34x/e9KD/zPT1KEz3uUK69QakYPKttT72AUw47ufD+PQnKJb7p+se8RSCOPUh4AT5bDUs+lXrOPVwoBT5IEqu9yUeRPQmDe73XHwm+f8wsPeoEZb0yaZ09+1uaPTaIOD0H8BY9X4r+PbFJoD0e8bM9MiPlPdQ5c71oYFe5XQxGvUdKwjusSAk76pKjPaTvgb0TT3o8O9s3PHuq6z1zR8y9q4LFPZSDsT3wrr29+oGFve1kybwDog89wDyIve4b87xM7Bc9GOCHvTZVczx4F+M9T4kAPQsod70tLoA9LQWLvctc8D2SSXk9tyiBvaJ6prvHtO+83/gzPaSjq70HbcE8TfEzvqomHD0T+DG+ruqyvD92nz0BcQy+5PAPvdjK5jx1+iu+LqhLvAzL8Lw4TzI8MYV+vJyDOz3cb869tkbIPaBXs7y8+Se7e+WkPAq73T0/oHO9BdHOPakLizs2HdI2wd6xvd+4iz1VGTm8tDNrPa2wOD3z1rs8ATPbvL7irj3ZLR89bMzEPNeu0Lzpf8U8exqkveIbtDyS8bM980FdPcKPWjw8VQY+GcdFveY5FzwDZJA6FTqqPCYmpL05Uk69XXkBvIdhkzs1R1g9WTavO0T4kbyj/EK9w8ynPSgQm71ycaK8HCAlPc84CrxBZFs9VXyPvND1C71Ebh09efivvGNZwL2feSe8733Kve2Bdz1XHBI+xVmrvbtedb0A/is9Bf9xvV44vjwXQRK9TKmFPeeuET2TWq49HOEZPlOOBD3HFde7jtYZvmW84TmQQqq7abySPPZrkz2A5JI8rQ3PvHmBVjyf0ls9fQuPPQMPDbzHFVC9iAsZvrvafj1sUj68aSU6vOCo+rx92HY98eYLurcVV71rUpY9ay6IPNNPrT1KvQ09revBPU/B7T0m8Ag9VRIPvV0/Tz3Nd7K8R95vPXSJ0D3hGCW9I4EZPkc03L2y7Am+0kwlvdumpzwjIxY9v5zEvBQIaT0a6kS+/Tb0PcL+mTu447e82jxfPb2vMryOdYW9NDjiPd1fOb5M6RG+uj5oPVmk4Dzpx4g9Rt8MPidNBj2mNEs95pTAvVVpmD1RsRY8PRdqPeu8YT2N9iU9RsJ9Pcm5xrypi9E9DrAhPQ9dcj0MUnI7mTewvDCTQbxh9RO9B3afu60+gr1EBsI6yCdkPXlser36Gjg+hn+YvDAamDwyhoO9Kw8bPT4FJj0otZY9hoLUPTESlD3pSeU9jCtVPUbK/z1YohS96WdXPbRwt7x4Op68vLgbvLdCSD30rk49d6c1PTE0DzzKSuK8aUP2vOalE72I4cq8mPanOeV9ID29I+E968T0vd/F/DtdzBa9J9fEvLkBQr3nz0K9TMs7vYPw1LywiRC+CFfKvfNoTTsawG29DMYavV2ygj1ljxu92d8oPCk20b1dFgC+Ma/OPTXHFj76fTc6csmevYH7Bb403sy90kmrPfrGgD0o4nO8ol61vXFQzT2d4Ga8d2xEPb2AXj4fL4M71029vCZ0JD6c0GG9e++JPZHW1zua9Cg9aMObva8NZL294H69rLg2vUJrEb3hrJ493F9LvUq+mLt7kz68wrulvXnL1Tzby+w8PrHQvWO40DuH64y6Wx4dPfrd17zUOsI9RmU5O4FCU70h4GS9BFNlvVhs0DxAZlW9nd5YvV7ppT1DFQg9jQrDvRC/4bxzFQW8nyROvYOBerymYfQ9N1DxPN90Fz1W1vG9YBflvd/j4j0qYu49evqLvfdMjjzqALy9iClsPcIn3z34Q669yx4/PUZBKL0VkYo8X3ZzvZNPyDxrn6M8bZioPTpRejzgRgK+eDQ9PU12wz3Qi709TRyCPUODijxiwpA9VhFPva8Ab77eX1s9JWkHvoNGxzzh+TC9iKpIvVLlMz78RwI8OFSUPfWcoDydy7i7Id84u/HnL7wNLiY9oDyWvXw1i71RL3o9M62UPYvAlj25yDq+VHXdPWjd1b28qME9HiM9O1YLEL1sBUi8XIHjvL3Buj0zZRK9guZQPu1Hvr2vHdE9+pfnPEQ+Xr0SSda9o1Q2PggQ/Lumzh++ixaQvViMSL1ieUs++qlePUbZLb0qCak882+LPURLNru8hfG9OGkvPT2ThDyQLRi9lk5Hva05hj2qMM09qdacvMwwyT0OMh49ZTXmO7Ypnj3eZLw99yeMPXHAfbwP0Og8nmwKvfcKAjwASja9sl0pPa4ckr2q7tU94J9rveTSIL0K+528Vbzauz1JLzwQp/u9/yoYvY52ir3thg69c0+8vRXImr0Q8/I76lJEvQklhD2kLl09w5MSvsjPxj0jLtY98CJfvC2VrTxRMFk9QXZwvTzhp72ojss7qWtdO6+oMD2iNSG9YlidvSz70TxBuSa98Phxu4/oND34FZS92INTPZkz9rtlPzq9u7b4PGslYb0+QSE9aLBivYGC67qIJra9breGPcLyWLwiNDi+O8Q4vufUs70tRpc9Mctzu8dtKzxSFh8+vsNNvKYRhb0z5sy9vWbfOp4dez2FHRg8EDoIPhGcJr3OaJu9qFFlvaedXz1buWC97Iw4PdWBVr3L9Uy+11/yPK11ID2AZ768XJSzvZ8ibLw6bIs9PzGXveiLOr2Zsbw8puuivAF/7z3Wmzm8rN0hPaDkSr6W5Os9w9UwPTFrsT0k0Yo9MUCBvRNjFjy/zCY9clmKPXx8cL1GgPS7YFg/PdeojT0x/v6987K3vYs7HL2QeQc9eLY1vkRCGb0q5Le9atmhvMnuXjyQzUA9caxTvXi8j7y6uNe87LAGvVWP9rv+AbE8M7njvbXUor01TxC7xdsZPd8VfzxMWnW9SvJHPWEChj1rsdA8RZxDvTMSnD02BNy8Pwh1PRrkAz0oS5W7R6JMupskTrwpDJc8FDVEvaACs71rzA29WXptvPcHWT24jKo9yDCbuxdjbLy4gZU8IQecvFR2lb2Qr44910KwPG+45bt5VF+9Ml9cOu//T70hq3W9HE5tPcmmvz1OOPi8lrlpvZasRb0U6hI8YPJXvZtpuj017ws98uNyvSAphLwquSY9CdE/PPYrBL1ypsW8FoZrPYnrYb2lWde9BEY6PXGQlD06ZOe8tn7HPVmALbxT4sY8PKykPPLlL7wmj4m9oo95PcQrir0t3z86qC64vAqzSr2NK887RrDkvRFGlLqtmh09rfUePdkYTD2N7DE9nN8TPQS3rz3XCLY8dVrWPGfpML2szEc8kWFbPWukAT2GXgO97mRRvFMxWb0JZCs8ZtXrPPD9BT6Ni5k9xpzFO4PcTz0J5qK7vHfovZ4HgzvcB7I96w+IPSC24rzFi7U8iOC1Op6LNz1IuZk9AsdCvSWQTr0vsYO9DHUvvv7jI71vH4a7mnhFvfWoGT2sQ4u78StZPO/qbLsTSiW9RhHAvORPmD3xnp08cAVLvbOyBT19seM8gwMYvUY6vLyh2lq92BHTvANAPb27lJI7vJwOva//tT2UO/i7ZK1XPbyqqLwsCCu9Y7uuvLmReb1R1/m8/iMHvYRVljtmgQi+ItxivBXuD71OvTs9A8cIPsaPtj1VHAg+ejW6PaP7Oz3M5LE91uxcPfkCkz1fdTS98tTqvET0Iz4uk5Q98mCYOgSs1DtRUYA9gSfiPabQ4Lwz+3m95PWCvQtE2z2i+IM95IMBOzFazr1GxlK9C/2yPdMlGz2J2Su9xp13PL5m8r25i/E9ANWzPSlSBL5Uz9w9iD8mvk9Fw7t67Ig8uN+OvDaZsz3JKK88/mDuPRaf0LxU9Lg9GVABve3gIj16adA81zgJvlEiU7ws1649SU17PdXaBb3jCsg9/ZKQvblFu736wru9IF8EvrFnO712d3q8cr6yvdr/Bj31Tt28ED0fPbDa87yeH6A9N2YTPbaSlz1XrOA9lXAwPRKtezme1069YqnOvclXFr2Gvjk9eYxFvJaAJT0JyQ29N2ClPY5Inb33DUI9RZ/PPJQQhr2FMyQ+fY0gvRhkkjwALoW6sdCcPUDREL1CwJi9Bb6RPTrNsT0El4c9Ms10var2Br44wAq+ecB3vdZurbyfwlc9zZOLPVpMT70fTmo9P+HBPTwsBz0RQBy90TSWvI1ilb2KzTM9MHnmux7Zij0f4p09sfcUPapplb321SA+9FHkvadZHD5k6Ua9/LCWvNb5gb2u+ik67VoUPP4W9rz/BGm9yEqevIgsnj2IjJW8SrfMPZ0OED1Deyc9rTkxPOesDj2aL189lfNCPRkkVbxUjKA8I8LAvcfmqL0B9SO9wciePParWr2448w8188ZPZbxOD150I29GRlBPYTDSb0O9tq9xpviPALx4LwOevg7HSOqPQGFez13Xms9Qot9vRPxPD0xGLw9w0xuPQq6XTr8k7+9ihYJu0jeM7onuD49r9mEvMgj+TuL80k81bYcPBUTKT0nmqS9F94cvetWQb1hbGG9CetYvKTqPj2UlC49K2XIO3ZJM73M1Eq91tPPPDOSJz0pmIY9CLwIvHqPpz1fmlu9VLwgPBKgZT0RX+U9ETfLvU5ymTwhLsg7zq8svQMj8bzWZrM9L1kHPbjE2Dvbwuk9Wo5QPGMgALzXJpC9xoHHvDic4Tw/J4q9fhBxvdzTkbme0dI8C5QiPCShBDynWEE8zXMTPFbtFT2Ec+E7T1FHvQ684TpTPJC9F21APE2rkD0PUZ06sh10vAcDBTsL4LI9WAoiPbvEPLzIklY9bx3+vIXx5jv4Wrq7Q7GEOxi3Xj0vCoY9NfGdvbCe+bvw+uW8dEtmPXq1Hb0DhDy71IepvZaqXb0/2Im9EdaIPZZB8jxO0QE9pm/tvdelIL0OGM89DbsDPhcwqTzg1/Q98kyIvRS3E75zLUi9F4q2OqFpwT3Ccxq9yI/ouzEYH71b5n494lqRvDqEjj0wLGk9oRp7PRLSiD09NWW7Lgb6u5TP0LzqSrI91/vuPfCIP7x4kAA9h3BwOqMzwb2YPZI8RNoEvRIOjb2xz448DfjgO04wj72PSsQ8Gp86O/UT1rxkxWy9Cb3DvF5htjyDRpC9VIUUumeQyDyj95Y919CovTXWET0zGlY98LMJvZCjrrvTtsG9KyGxPR1M5L1P75A7s6VIvcVMSL1g3K48Ob62PQShprz6+Ks9ohzfOw610r1fF5A9IBWSPf76sj2gVee8YrM2veWhtD1Wufs9fHIEuZmI9TskZ3e9tq3nvTmBfr0SGXW8vhcTvQeQpbsefpg8+NyTPdCrMr2XCbA9obubPck/1DxI2Uy9TeofPYDw3bxUpDu9i5prvEbJJLtuLYA9J+7guadKHL1/QhK9UdaJPd350Lxaxiy9tuWhvJlcEr0XZnC92EPbvXIi37w7yoI7ZefSvIAhBz0N/NW8EJOwvY8Z9LxqgZ86iX2SvIl9lr1Q0x09alPbPUBoWbvRQZq7XSgsPeuWzD3k0he+yT4Xvbk/mbz5i4e8GKLYPBja5z0harg7FpQiPYHRPz3BTs+8g68vvawqcz3M7WI9bi8sPTtEcb3g46e9q3k8PdJhtD2+/kO8DyQEPfPN4LwrGAA+p7AUPkz7hLywGcA9T9HDvWf0eT0QiWY92L5ovHYNJb4tmCs9mZ+HPS9bOrzn1Qa9LtXSPG+2KL3UjQM+IImANtjfWz1ph6a9Y/xDOkzo3D1XDBa9U0rvvHc+wztN7as8XXu0vd+QqTxuh8C9xM+Zu7zGX7w2mHm7gxFqvWSmW73rxq097sGWPQEtLT6G8Py8b0R2PAGy2z1KNCS8VUXTu+yzSr1KPx8+3ORdvVLSFb3C7W+9oHbYPJvcCr1aBae86q2+O+4227s51KM9CZo3vo6eRjy/cqw9biQGvv5x5T0PlJO8XK8PPVKAmD2WEZs9bMMCvIp5Z734hNG7PoFVvRMq9jzTk5c9kinRvY3FWL2N/he+PcfLPAzkiL2/gZi9bJDgPBGQBD0SNpQ839XIPN2UG71pi4u9WZvpPPLTgDw93Yo9ZONiPenM0jstuIW9kwxlPUw3Ajz6RQO8nTntPH82kLyMULI8jlgDvgj+tz0ciZK8JWlHvCVlYL35vcg6zC0vvQO/ZT0b55U7DmQuvb7jLLxhCxs9IL6Bu73xur0eR+q7zV2sPWNYLD0RQAe9s1gIvsUN7zxN5Za8Ow3/uxcAmj0z4s+8TZY+PWgJWb3QCJw7h4W1PSmDrD3gWxs9YIq0vUBDvz0KMcm9vNcmvdw73bx8+pO91Cq2vMWArry+fBc9yqsVuj9l3T2IUEK9hvDKPWcMe7u+BtU9dAQqPo6c5j2Purc89NVAvdNHCr3KADw9uusKPnXVAD4tdyY9gpZpvQV6T71Pv688waqnPbDP2L36Lh2+UkPuvCudlr0WDRC9YSfmO3Hew7xHpZy6TSGavQJrnr2zAwQ+Eb67PAzk1ryH70A95gHPvB2iV718s5y8D7fivP6SpL3HM+Y99LdwPYOXoroKRwq++viYvBtW9jxeQU69wbyEvCUKUT02Iv89kTVlvYsmLr3tLkG9HDLAPf7Jqbx4vps9aLKNvCowEj37yY89K0kxOrHOI7wMuJq8/BkBvmJ6S72MZZq9B767PU5o3LzE9yS9emBiPdH8uT2z/om9WwzOPZpYAT4iFao9LsXvvMWBQzs3HOi8UQFzvPmT0L0ym3I9Oyl4PLqyhj2mK169q5+nPZHnoDwroJG8Ao3jvCplZz1YGKO9ufCFvdgfMDx5NYi9+zmovbB6nD1ltgW9x6GHPb1RCb63hle9IADCPP2sGL1gt7K9+CqSvL6buLteGGG9oGwzumw+hb0QJA4+F7dkvpbjer0e8vM8pYYJvWNKwbwqLs093UYXPoT/2Lv7WCo9hcbCPOYDsTsuLZQ89T3IPI7KPDtxyzA9C7CxvI22Hj798Py9kTPHOutZD74OgTc8rW4RvZsUg7tJlJa7WIXgvULj0r1s40U8ly/oPBQGq7tqNXU9cF8+PRJvULpTGAI8vPtVvbef4zsDZBi8TFohPXEymT0A+c09mghbPZXaFb5LxNQ7ssYAPdzKiTzdAC68nw5RPAjmI7vhymU8XUdkvS5Wgr0DHqS9c8uaPZVVX72NjHm9VJjyvGkirT3lSPs98CfNPdbbSb1xZLg9L3jpPN9Uuj2dkl69iKCzPZa1Hz3atjA9z/SbvRHPlbzXK5o9DN0HPeQQXT3n4gM8DA3IPS3ytrt9Rlw90N0fPrQEvL1Iycm8xrAHPVyMZr1ksvk8CeUzvJsQPT17j9C8ppboPEhJSD1Z+JA98W1OPY5vqD2fyRQ9wGUoPQTKpD2GxW68ynXXPMMyqj1MJ4Y8nF8HPRTqzjy1hqO8wh63PIThkTuhcFS9reO8PS890rx9xV+96/y4PM03lj0Feym9jMcuvXVe8T3Vqaq8k/WmPc33Ir3CEK295RoTPQju1jsBxM48fRO2vQ8pgjyunpi8C5aPvJHQRr2XUgk9Cb1KPCyIDr3Zf349ODBaPVj47j2pF3o8tPWZvSZp2LtXdSa94agkPRQLqr34uFS9xS0oPtEoOz29Fz89QD7FPHMUwzyjQZ47DLc1Paz1hj3qpyO9Qyb/vOLXA71OaRG9DCmgPUVkgrxwvKG8PquhPTLW/zxm8xo+McEcvekvEz5gA6M9cHuqvRb5N73mrSc96o5wvM1fzD1eBx093hVCvVo1/LztRN+7jCrBPRbVazwsO5O8SYG9OT7zKr3q9/O8gEb4vHPiArwS07c8u9ctvfqG5z1XMhA94T1QvXgdAT1xSog9CgtoPSokTblkjbo9kM2Fvdo69rx/sZO9yU0HvIS+fzwkI9u8xuVzPbbFSz2rszK9OQjjPBCuCb1NlLM8vPmTvRapXD2vWmk93rK0PIOx3DpLfz49lSFXO/0kIb1VQcs9HJMfvo0O7DzialO9AAAAAAAAAEEAAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/AAAAAAAAgD8AAAAAAACAPwAAAAAAAIA/pGpXP0BRCj/Oei4/sFQ7P7p9CD8OlFg/8JDRPsaSaT8+OZ8+ak5zPyePcD7w1Xg/OiM1PoP2ez/zJQg+KLp9P3Z1zD2YuH4/N2+ZPdFHfz+wNmY9aJh/P/usLD29xX8/XIEBPTzffz+mPsI8k+1/P0KrkTyj9X8/SXpaPCz6fz9X1iM8ufx/Pxm59Tso/n8/XES4O/f+fz9dLoo7a/9/PyA+Tzus/38/A2kbO9H/fz8gFek65f9/P4rJrjrx/38/bRKDOvj/fz+LlEQ6+/9/PxZqEzr9/38/JRfdOf//fz9fy6U5//9/PxSoeDkAAIA/U3c6OQAAgD9x1As5AACAP7fHaD8zEdW+2Vp/P1FNkT0K8mY/sujcPhI1Pz8DOSo/G1QXP+x7Tj+20+k+ab5jP/ZHsj6l+m8/gvCGPvXydj/5b0s+peV6P9MAGT5PIH0/iNnlPfNhfj+uhaw9Dhd/P8hwgT35fH8/qzBCPU62fz9cpRE9jtZ/P1B12jyx6H8/PtSjPOXyfz9Ut3U8ofh/P51DODzb+38/DC4KPKv9fz/dPc87sP5/P+ZomztD/38/CBVpO5b/fz+AyS47xP9/P2kSAzve/38/iJTEOu3/fz8UapM69f9/PyQXXTr6/38/X8slOv3/fz8TqPg5/v9/P1N3ujn//38/cdSLOf//fz/DgRA+JnB9v948Rz/NvyC/10V+P6h/7b1jIXQ/YxiaPsIJUD9XLxU/uCQnP6LnQT9tLwI/KW1cP6doxz43yWs/bU6XPu+QdD/ibWQ+kox5P9juKz6eXXw/LDMBPkP0fT/B/8E9T9l+PwiTkT07Wn8/TWlaPcOifz/F0SM9kMt/PyC59TyD4n8/SUe4PGvvfz/HMYo8rfZ/P0lETzzB+n8/EW4bPA39fz8SHek7V/5/P6jPrjsR/38/ExeDO3r/fz+Tm0Q7tf9/P2FvEzvW/38/Gx/dOuj/fz9Z0aU68/9/Pw2xeDr4/38/Dn46Ovz/fz9+2Qs6/v9/P6q+0Tn//38/z71BvzBVJ7+U7xA+O2x9v+1JRz+dryC/pUd+P7wD7b3eHXQ/sS6aPqYEUD94NhU/vB8nP+3rQT8tKwI/q29cP9dhxz6nyms/IEmXPsCRdD/GZWQ+CY15P7LoKz7hXXw/iC4BPmn0fT/F+ME9ZNl+P8iNkT1HWn8/bGFaPcqifz/byyM9lMt/P0Gw9TyF4n8/okC4PGzvfz/KLIo8rfZ/P808TzzC+n8/dGgbPA39fz+nFOk7WP5/P1jJrjsR/38/WBKDO3r/fz95lEQ7tf9/Pw5qEzvW/38/HxfdOuj/fz9cy6U68/9/PxKoeDr4/38/Unc6Ovz/fz9x1As6/v9/PxB8db8sPJE+ZDUSv/wjUr/W2qU+QDJyv5zgWz9EHAO/f/x/P9RyKbz4P20/llbAPqvKRj/xTCE/VFIePxksST9Ed/U+QKlgP5+Buz4EN24/7hGOPnzydT/5T1Y+n1R6Px48IT6Bznw/lkLyPd8zfj8h27U9Hv1+P5FziD1hbn8/9bZMPRmufz/Yihk98NF/P/5N5jwZ5n8/z7asPG/xfz+BhYE8z/d/PyVCQjxl+38/u6wRPGn9fz+He9o7i/5/P97Wozsu/38/irl1O4r/fz+MRDg7vv9/P3EuCjvb/38/MT7POuv/fz8KaZs69P9/PyYVaTr5/38/jckuOvz/fz+MD4++uM11P6I2er+AfVi+dOVrvlMdeb9X8xI/VJ9Rv014cj9vP6S+1DN9P5n4Fj6JMGA/NC/3Ps2pNz8RVjI/aYwQPzJJUz9QrN4+g4VmP/19qT7ikHE/2SqAPmzZdz9vIEE+42d7P8Q0ET7BaX0/wRnaPVGLfj83sKM9Vi5/P9GcdT0Sin8/WTs4Pa29fz+/LAo9s9p/PwpAzzwG638/RmybPDT0fz+PG2k8Xvl/PwTPLjxF/H8/zxYDPOf9fz9Zm8Q70v5/P0lvkztW/38/Bh9dO6H/fz9R0SU7yv9/PwWx+Dri/38/C366Ou//fz992Ys69v9/P6m+UTr7/38/RjAoP73/QD/4+1u/V+4CP262Nr9gTzO/aBtBPiFoe79v6Ew/u3QZv6f7fj9cXra9RIRyP7n4oz5ovk0/YVUYP3PrJD+zzEM/TEsAP02IXT/fYMQ+xWtsP2DzlD5p7XQ/UNNgPurAeT9VMyk+KHt8P7pG/j3pBH4/aOW+Pa7ifj8yPo89gV9/PzPpVj27pX8/YDEhPTvNfz9UyPE8c+N/P6ZStTzy738/UvqHPPn2fz8q8Us87Pp/P8vvGDwl/X8/x1/lO2X+fz/HAaw7Gf9/P778gDt+/38/LnRBO7f/fz/sERE71/9/PwuT2Trp/38/ZiijOvP/fz/Es3Q6+f9/P5VGfT/2/RS+DHqPvjO+dT/TLXq/GSBZvgpsa76BJHm/fQYTP+aRUb/tfXI/NR6kvuMxfT+iLBc+xStgP3pA9z6mpDc/X1syP9WHED9UTFM/0qTePlKHZj8aeKk+6pFxP1ImgD4C2nc/ixlBPjhoez+OLxE+8Wl9P+kR2j1si34/UaqjPWYufz/2k3U9G4p/P7M0OD2yvX8/wicKPbbafz+OOM88COt/P6pmmzw19H8/JRNpPF75fz+1yC48Rfx/PxMSAzzn/X8/P5TEO9L+fz/2aZM7Vv9/PwoXXTuh/38/VMslO8r/fz8KqPg64v9/P093ujrv/38/cNSLOvb/fz8yAdM+1T9pv7X85T4euGQ/Rphwvxrurj4CrRu/ATpLv+oflT6i5nS/oW1YP5+6CL8v438/OubyvCKebj9Gcrk+HYhIP9UhHz9m9B8/T+BHP5Q0+D5L6F8/sa+9PnbIbT8uwo8+qbN1P/XjWD4WMXo//y8jPnW6fD98NPU9kyh+Pz8SuD3C9n4/mB2KPc1qfz+INk89Fqx/P7lqGz3O0H8/7x3pPHblfz/I0q48E/F/P3gagzyb938/iqFEPEj7fz86dBM8Wf1/P7Am3TuC/n8/K9elOyn/fz/juXg7h/9/P7uEOju8/38/hN4LO9r/fz84xtE66/9/P/1OnTr0/38/+EQLv2TNVr+zCHA/OfyxPmzpHL8XRko/bThhvz5o876CcKm8+/F/vzhAMj8Bvze/a4J6PwrxUr7S03g/MbJwPqRqVz9AUQo/znouP7BUOz+6fQg/DpRYP/CQ0T7Gkmk/PjmfPmpOcz8nj3A+8NV4PzojNT6D9ns/8yUIPii6fT92dcw9mLh+PzdvmT3RR38/sDZmPWiYfz/7rCw9vcV/P1yBAT08338/pj7CPJPtfz9Cq5E8o/V/P0l6Wjws+n8/V9YjPLn8fz8ZufU7KP5/P1xEuDv3/n8/XS6KO2v/fz8gPk87rP9/PwNpGzvR/38/IBXpOuX/fz+Kya468f9/P1z/f79yBZE7K01sP//zxL78OMe9MMl+P/ZNf79n25a9IUGpvoybcb+5GAI/kHpcvwE7bT8Rb8C+bZ5+P25z1D0qJmQ/wD3oPiYGPD+Duy0/s3IUP4eQUD/NEuU+xvJkP4uHrj7kqnA/2wuEPvlWdz/LB0c+LB57P3WrFT4wQH0/ctPgPehzfj+hvqg9KiF/P/s0fT2ogn8/c+49PYG5fz9rcw49W9h/Pz2q1Ty06X8/7jugPHbzfz/uUnA88/h/P2o4NDwJ/H8/vCUHPMX9fz+Ksco7v/5/P8b/lztM/38/hfdjO5r/fz+B8yo7x/9/PwQyADvg/38/GETAOu7/fz/YXAm/0AZYP8KY0z5/HWm/M43lPh7UZD8+qHC/JpauPiaRG79VT0u/QFKVPvfedL8qeFg/8akIv5/jfz8ADfG8HZpuP/WGuT7xgkg/WSgfP4fvHz815Ec/ZSz4PpDqXz8sqb0+w8ltPyG9jz5mtHU/P9xYPoExej8nKiM+sbp8P6wr9T21KH4/ngu4PdX2fj+dGIo912p/Pw8vTz0crH8/HWUbPdLQfz+FFek8eOV/P3jMrjwU8X8/vBWDPJz3fz9xmkQ8SPt/P+duEzxZ/X8/tB7dO4L+fz8u0aU7Kf9/P+iweDuH/38//306O7z/fz932Qs72v9/P6S+0Trr/38/IiDXPm9OaD8r7aK+VLFyvwQbWz9wZQQ/QNg3vy4mMj9MFFO/ndkQv+e7cD23jn+/huE8P+jMLL+jnXw/APQlvsCrdj+b9Yg+Nt9TPyuwDz/q6io/HJY+P4NqBT9ufFo/QJrMPsOraj+2WZs+de5zPyWfaj6VMHk/bKEwPrEpfD/QvgQ+ANd9P/RVxz3VyH4/npWVPfVQfz+4bmA9jJ1/P2lWKD2hyH8/d4D8PNzgfz/fXL08fe5/P/EBjjwn9n8/a/xUPHb6fz8MuB884/x/P9mL7ztA/n8/lKKzOwT/fz8ltYY7cv9/P3sISjuw/38/64AXO9P/fz8xOeM65/9/P3KYfT/XBAw+hQVhv0gk9L5s9H8/rfmZvGukvb61ym0/sqh1vw8NkL7lpDW+rvB7v9dVGz+pfEu/WNt0PwFqlb5vRnw/3gsuPp4KXj940v4++ls1P8OtND8agg4/2apUP/VW2z6xUWc/7t+mPmYFcj8NT3w+fRt4P6YQPj41jXs/ZOQOPsx+fT9rndY9K5d+P2gRoT0CNX8/Xa1xPdONfz9GRzU9yb9/P4b1Bz3j238/Hu3LPLHrfz8W7pg8lPR/P1ZeZTyU+X8/LAEsPGP8fz98/AA8+P1/P/dzwTvc/n8/1BGRO1z/fz/3klk7pP9/P14oIzvM/38/vbP0OuP/fz9EeSY/6HpCv1zcd78hFIA+gPlVP6yJDL/8DS09e8V/P3Xgf7/3Iv48B6fOvrE4ar/px+k+cMFjvwXAaD/TMtW+1Vt/P6rekD2G9mY/79XcPkE6Pz8wMyo/01gXP3d4Tj+D2+k+aLxjPyBOsj6A+W8/RPWGPk/ydj85d0s+R+V6P08GGT4aIH0/zOHlPdVhfj/li6w9/RZ/P3R1gT3vfH8/rTdCPUm2fz+eqhE9i9Z/PzN92jyw6H8/KdqjPOTyfz8zwHU8ofh/P0VKODzb+38/CjMKPKv9fz9ZRc87sP5/P4NumztD/38/cx1pO5b/fz/Qzy47xP9/PyUXAzve/38/EGiTviwpdb9nugm/NstXPzYw1D4S+2i/px3lPg/wZD8uuHC/MD6uPkl1G7+kZEu/koSVPkrXdL+xglg/QpkIvw7kfz/WM++8GJZuP6KbuT7FfUg/3S4fP6jqHz8b6Ec/NiT4PtTsXz+oor0+D8ttPxW4jz4jtXU/idRYPuwxej9QJCM+7bp8P90i9T3XKH4//QS4Pej2fj+iE4o94mp/P5UnTz0irH8/gV8bPdXQfz8bDek8euV/PynGrjwV8X8/ABGDPJ33fz9Xk0Q8SPt/P5RpEzxZ/X8/uBbdO4L+fz8xy6U7Kf9/P+2neDuH/38/Q3c6O7z/fz9r1As72v9/PyUedr824oy+qys5PpfHez9t2Am+fqt9v3o6Rj8F/iE/qrBJv0+pHT+P40a/QC4hvwUo8j1ENH6/L21EPy0sJL+/3X0/0O8DvlvedD9CVpU+BR9RP7WpEz+zMyg/wPxAP7EWAz/u41s/49vIPmN6az9Db5g+E2R0P/onZj4uc3k/Iz4tPklPfD8zMAI+MOx9P5d8wz3D1H4/MLGSPatXfz/1Flw9U6F/PyoUJT3Byn8/0pz3PA7ifz8Usrk8Ke9/P95BizyI9n8/YtxQPK36fz8boBw8Af1/PxTo6jtR/n8/3iewOw7/fz8zGYQ7eP9/P7QeRjuz/38/sJEUO9X/fz+zQEC/hAopP3p6TT/1sBg/RWckv7w7RL/sKnc/LFSFPsWoDr/rkFQ/BzBnv7zk277jynK9xIx/v8raLD/S1Dy/FE55P6qnaL5Gxnk//3NgPgUXWT8MrQc/LzAwP465OT+6+Qk/v6JXPzT40z7RB2k/GhqhPjv/cj/wcHM+FKl4P4dTNz4u3Xs/Gc0JPuGrfT+c8s49jrB+PxJOmz1LQ38/xAVpPdyVfz+XyC49TsR/PysWAz1u3n8/6p3EPB/tfz+zcpM8YvV/P2YlXTwI+n8/oNYlPKX8fz9uufg7Hf5/P4mEujvw/n8/b96LO2f/fz8mxlE7qv9/P/ZOHTvQ/38/aXkZPr8bfT/3bX4/VIDivVK2c7+SuJy+Fc18P9tfIb5B9oq+B2R2P+iLer9mPFK+Xo9wvu3VeL+pNhI/GiNSv7lAcj82hqW+yEZ9P4H4FD5TX2A/J4X2PnncNz/TITI/cLkQP1wqUz8B9t4+s3NmP+e3qT63hnE/aVeAPqnTdz86ZEE+oWR7PwJoET7rZ30/9GbaPUiKfj9A6qM9wS1/P/vzdT2+iX8/w3w4PX69fz/SXQo9mdp/P6mJzzz36n8/fqObPCz0fz9hbmk8Wfl/PyANLzxC/H8/YkUDPOX9fz804cQ70f5/P6ujkztW/38/l21dO6D/fz87DCY7yv9/P8i2aT8i8NA+guImP6AgQr9L9ne/eJV+PkUkVj94SAy/O2cpPe3Hfz/N4X+/d6j4PNpqzr71RWq/yPPpPi22Y7+3x2g/MxHVvtlafz9RTZE9CvJmP7Lo3D4SNT8/AzkqPxtUFz/se04/ttPpPmm+Yz/2R7I+pfpvP4Lwhj718nY/+W9LPqXlej/TABk+TyB9P4jZ5T3zYX4/roWsPQ4Xfz/IcIE9+Xx/P6swQj1Otn8/XKURPY7Wfz9Qddo8seh/Pz7Uozzl8n8/VLd1PKH4fz+dQzg82/t/PwwuCjyr/X8/3T3PO7D+fz/maJs7Q/9/PwgVaTuW/38/gMkuO8T/fz8QL1Y//DcMvygKI70QzH+/G9gvv/UMOj9+9gk/0KRXv3o2sz43zm8/ROV2v5NUhz6xBQ+/cFJUv8hSqz4nPnG/SvtcP5g9Ab97/38/Q3eCu9fJbD90mcI+ozZGP7cCIj8KyB0/oZhJP8KP9D5W6GA/l8m6Pidbbj93g40+BAd2P4N2VT48YHo/cZcgPg7VfD8/SvE9jzd+P1QgtT0y/34/PueHPYxvfz9M5Es9wa5/P8jsGD1P0n8/3WDlPE7mfz/1BKw8jfF/Px8AgTzg938/F3pBPG77fz+0FhE8bv1/P4Sa2TuO/n8/IS6jOzD/fz94vHQ7i/9/P8WGNzu+/38/FQURvG/9f79NzDW/vDw0vxtHRr6zJ3s/fXIWPtE4fb8nvR8/eQxIPxAXYL+Hi/c+LVMyv5usN78BTlM+hX16v5/5Tj8CqBa/wDN/P36Qob0B4nE/t6ynPvvdTD+ughk/lBMkP7uBRD+aKP8+4/FdPxk8wz5cqGw/+g+UPt8PdT+Wd18+atR5P78rKD4qhnw/Arn8PRwLfj8mur09LOZ+P1tdjj14YX8/oZdVPdamfz8VNCA9281/P1BM8DzN438/nzW0PCTwfz+PJIc8Ffd/P4ywSjz8+n8/W/8XPC79fz8r9+M7av5/P1vzqjsc/38/9DGAO4D/fz8KREA7uP9/P+ehWL+/Zwi/H+B/v2V9/7yL8bc+iehuP4aoir76bna/twdWPwV0DD/2vTy/wPMsP9kAUL/EOxW/3WuYPT9Kf7+J5j4/EZEqv8/4fD+HCB2+ZzZ2P0Y4jD4UKFM/xbwQPx81Kj+IOD8/W84EP3zbWj/Nnss+auJqP8CVmj6SDXQ/8XJpPjNCeT+hvS8+ozN8P90SBD6b3H0/G1PGPf3Lfj8b05Q9vFJ/P6hKXz2Mnn8/QHsnPTHJfz+mN/s8LeF/Pz5mvDyr7n8/+kiNPEH2fz/95lM8hfp/PwDoHjzr/H8/z1PuO0T+fz+UuLI7Bv9/P6sFhjt0/38/TwFJO7H/fz/802e//i3ZPmquQL9rjSg/9S9NPwoVGT+BHyS/xndEv50Ydz+m24U+c9QOv5RzVD8SH2e//ivcvkfycL2Djn+/KOssP9bFPL/bUXk/2WZovonDeT+xpGA+EBJZP/u0Bz8YKzA/Y745P0v1CT+VpVc/BfHTPnMJaT98FKE+KQBzP1Focz6bqXg/+0w3Pnrdez8myAk+DKx9Pyrrzj2msH4/eUibPVlDfz9d/Wg95JV/P0jCLj1TxH8/cBEDPXDefz/RlsQ8IO1/P2Btkzxj9X8/ah1dPAj6fz+j0CU8pfx/P3Kw+Dsd/n8/zX26O/D+fz9i2Ys7Z/9/P5O+UTuq/38/OIcHvni/fT9d8dC9Cap+P341fz9K4KA9SClmv6wo4L5kqH8/V7hTvcTYsb5FD3A/MvN2v8Luhr5CnUO+HEl7v3g1GT+/F02/KER0P2E7mb6Hhnw/ByMoPj2ZXj/W3vw++PM1P7EUND9fCA8/olBUPxUy3D6fHWc/44unPrHncT93V30+pQp4P7LZPj6yg3s/U3wPPm55fT9Hgtc9JZR+P3K9oT1PM38/u69yPd6Mfz8sCTY9P79/P/2GCD2W238/V8fMPIXrfz/AkZk8fPR/P9JTZjyG+X8/RLksPFz8fz+KhgE89P1/PwVDwjvZ/n8/Ga2RO1r/fz/Xe1o7o/9/Pwg3Qz+BnCU/D3UaP30nTD+AoWI/8Bzuvo/ff7813AC9sN1uP9spuL5fUfC9Pjt+P2v9fr9CwLW9YMKjvnKNcr/m9wM/EF1bv/nWbT/ZZr2+JH1+P5Iy3j0Zu2M/nuDpPkWOOz/mPC4/3AYUPx/dUD9RYeQ+Fh9lP6r7rT41xHA/EKCDPlVldz+pY0Y+SiZ7P1YvFT7ERH0/aBjgPXx2fj8AMqg9nSJ/P8BhfD15g38/6089Pfe5fz97/A09ndh/P8/31Dza6X8/G7afPIvzfz81im88//h/P+OhMzwQ/H8/2rQGPMn9fz88CMo7wf5/P9CAlztN/38/GzljO5v/fz8O1XQ/OJOVvmArfD/mejA+LUEAPyqOXb8TwWy/GMTCPs5iRj+fzCG/vjP0PXAsfj/R/H6/APa1PbrN4r45g2W/idHaPkZxZ7+QE2Y/yYHgvsqlfz+D1lY9THVoP/F31j6Q+EA/gjgoPwrwGD+LS00/EX7sPgAOYz+FY7Q+w5VvPwaRiD6xuXY/xepNPkXFej8k4Ro+DQ59P4Wt6D2qV34/IKauPUQRfz+0CYM9t3l/P4KWRD15tH8/6HETPYbVfz85KN08Heh/P3DapTyR8n8/k8B4PHL4fz+Aijo8wft/PynjCzyc/X8/c83RO6j+fz+GVJ07P/9/P172azuT/38/KrSKPldtdr8nmVY/aZULv7byGb2y0X+/YScwv+jBOT9sOwo/p3hXv3LDsj6t428/a/F2v8X7hj4O6Q6/uGVUv5GDqz58NXG/FgVdP9YsAb+J/38/2F92u7HFbD+mrcI+dTFGPw4JIj80wx0/apxJP6yH9D6J6mA/KcO6Pmlcbj99fo0+uwd2P+tuVT6kYHo/sZEgPknVfD+TQfE9sDd+P84ZtT1E/34/WOKHPZZvfz/x3Es9x65/P0PnGD1S0n8/lVjlPFDmfz+//qs8jvF/P3b7gDzg938/GnNBPG77fz93ERE8bv1/P6mS2TuO/n8/PCijOzD/fz+hs3Q7i/9/P+njKb+zgD+/aZl3PltneL/niBC/mEtTvzJhqb7ulXE/YL2APm/Gd79DPA8/oy1UPywcZ78rONw+oOEpv7qCP7/H/XQ+t5B4v5W4Uj/oXhG/GYp/PwiWdb1QqnA/vYquPp43Sz8gsBs/qH8iP0LQRT97ffw+3bReP04awT41GG0/VGiSPnhPdT/+71w+Z/h5P/FAJj55mnw/h9T5PY4Wfj8Fjbs9nex+P8q6jD0XZX8/NSNTPeCofz+NXB49AM9/P+KI7Txy5H8/ByOyPIHwfz+gloU8Sfd/P7NbSDwZ+38/xD8WPD/9fz/eV+E7c/5/P/L7qDsh/38/5HB9O4P/fz+k73y/GPQdPlYD+L7v9V+/CO9qv4lky75t5qw9CBZ/P6cDfr3bgX+/cBI9P2KXLD/q/E+/P0EVP/nVQb8yOSe/w4EQPiZwfb/ePEc/zb8gv9dFfj+of+29YyF0P2MYmj7CCVA/Vy8VP7gkJz+i50E/bS8CPyltXD+naMc+N8lrP21Olz7vkHQ/4m1kPpKMeT/Y7is+nl18PywzAT5D9H0/wf/BPU/Zfj8Ik5E9O1p/P01pWj3Don8/xdEjPZDLfz8gufU8g+J/P0lHuDxr738/xzGKPK32fz9JRE88wfp/PxFuGzwN/X8/Eh3pO1f+fz+oz647Ef9/PxMXgzt6/38/Bt7Ovo4saj/VYnO/O7yevjT6fL+N5Bw+n0H4Pq7kXz8yGL2+nuZtv3pTYD9EsPY+Vk4yv06xNz82WVa/hvcLv3xQKj1Sx3+/d6I6P2Q5L7/LM3w/C7ovvlgpdz/kX4U+paZUP16IDj+4sSs/F+M9P5IVBj+dE1o/7a3NPnxvaj+lMJw+IsxzP33oaz4lHXk/XJsxPrcefD9+ewU+0dB9P/5xyD1axX4/EGuWPQBPfz85r2E9cpx/P+lGKT0DyH8/Ten9PIPgfz+Ea748S+5/P+zMjjwL9n8/3SxWPGb6fz9cnCA82vx/P0Xi8Ds7/n8/XKO0OwH/fz+1dYc7cf9/P00qDT+qj1U/wDFov9qb1z7MG0G/DhAoP0LlTD/4eBk/qdcjv7SzRL89Bnc/EGOGPhkAD781VlQ/GA5nvzhz3L66GW+9P5B/v4P7LD/Ztjy/oVV5PwgmaL7MwHk/YdVgPhoNWT/qvAc/ASYwPzbDOT/d8Ak/aqhXP9bp0z4VC2k/3g6hPhgBcz+yX3M+Iqp4P29GNz7H3Xs/NcMJPjesfT+34849vrB+P+FCmz1mQ38/9fRoPeyVfz/6uy49V8R/P7UMAz1z3n8/uI/EPCLtfz8NaJM8ZPV/P24VXTwI+n8/psolPKX8fz94p/g7Hf5/PxF3ujvw/n8/VtSLO2f/fz85+n8/t4ZZvPPewL5JJG0/IYiTvlokdT92w3k/BKZgPrHjWL8K/we/e+V/P5UE6TyCXs6+rUhqP6+oc79ODZ2+FoghvnnLfL+nWx4/wiRJv62tdT8S64++kuZ7P6OENj7/O10/ts4AP+6AND+YiDU//MANP8IrVT8ZHNo+EpxnP/jopT7VL3I/Z9N6PoszeD8G8Dw+zJp7P0oKDj51hn0/6VTVPXubfj94GqA9bzd/P4E6cD0wj38/9jA0PY7Afz+6JAc9Utx/P+Wzyjzv638/KwOYPLf0fz/8/WM8qPl/P+/4Kjxu/H8/VTYAPP79fz/FSsA73/5/P/cykDte/38/93EHP+c7Wb8uHrY+/EFvPzuXiD7VuHY/8d56PxH0S755bXi/Jzd3vhdyej9WJlS+JXVwvoPXeD+v73u/+bo1vknWgr4WgHe/7dcOPz1xVL/iPnE/pk6rvrCZfT/R4As+QjJhPxJ/8z7gwTg/2DMxP6OFET/YnVI/b0TgPoUiZj/Svqo+X1hxP8AhgT5guXc/FphCPshVez+7UBI+i199P4/F2z2RhX4/1fGkPRorfz/cf3c9QIh/P92lOT2nvH8/tzwLPSDafz8K2NA8s+p/P0aenDwG9H8/iOZqPET5fz83JzA8Nvx/P+0YBDzf/X8/eR7GO83+fz+XkZQ7VP9/P8I6275fWGe/xLNlP9EI4j6pUj0/7VAsPwcGUD+LNBW/U1R/vwEklD0p+mY/uMbcvipfcr0qjX8/eL1/vwGFOL3cmbO+oLtvv1EN/T4JjF6/2QxsP5Qnxr5f2X4/qPrBPeDuZD9kIuU+Oeg8P5bFLD+BPhU/4f5PP45i5j59nmQ/TZCvPrt6cD/w14Q+pTt3P5I+SD67Dns/gZYWPns3fT+mNeI9AG9+P/TIqT1nHn8/A8V+PRuBfz+vGj89orh/P6tUDz3d138/KPzWPG7pfz9eOaE8T/N/PxLPcTzd+H8/flU1PPz7fz+F+wc8vv1/Py3yyzu7/n8/OPCYO0n/fz845X2/6ggDvoMddT+JtZO+2wp8Py5cMz6SugA/t0ddvwnpbL9aAcI+p5RGP22PIb+ZXfI9eDN+P78Af79SlLQ9CpLivvaRZb+p/to+mmZnv8QbZj8kYOC+DqV/P8a2Vz3kcGg/DovWPmDzQD91Pig/S+sYPxRPTT8xduw+DRBjP0pdtD7vlm8/NoyIPlu6dj9w400+pcV6P5fbGj5DDn0/J6XoPclXfj/Vn649VRF/P/sEgz3BeX8/ao9EPX+0fz+VbBM9itV/Pz4g3Twf6H8/c9SlPJLyfz+Yt3g8c/h/P8ODOjzB+38/HN4LPJ39fz/gxdE7qP5/P9hOnTs//38/6r4kvy3yQz+GBwE/4RpdvzAjbT9Z5MC+lQnXPb2Vfr83/0K/Nt4lP8IRGz+QsEu/eZGVPlLVdD/fvHm/JRthPlejB78VHVm/5LS3PjP0br90cF8/G+P5vmD8fz8uWCw8Z7drP868xz7B4kQ/HJ8jP7OLHD+ojko/EH/yPkZ3YT+oJbk+Aa1uP4Y+jD6DNXY/o4ZTPoh6ej/5Hx8+5ON8PxEU7z3rP34/dnazPeYDfz9Zp4Y9MXJ/Pw8ESj0+sH8/doQXPSXTfz9LROM8xuZ/P4RvqjzR8X8/HKB/PAb4fz8Isj88hPt/P7PADzx6/X8/kpnXO5X+fz94raE7NP9/P5+9lz61f3Q/nhxhvsm8eb/QMhU/RQdQv6Jbn77JSHO/774Fv8pIWj/hwc0+G2tqv+nT6T5cvmM/xglwv3D2sT64ohy/3HxKv8hikz73KXW/TRBYP+pNCb8t338/S54BvZXBbj9tu7g+yrVIPzXoHj9wHyA/171HP+Z8+D491F8/Sum9Pve8bT/Q7o8+IK11Px8oWT5kLXo/oWMjPl+4fD9egvU9Zid+P9VMuD0Z9n4/m0mKPW1qfz+ceE894Kt/P02cGz2w0H8/UGjpPGXlfz+SCq88CvF/P05EgzyW938/S+BEPEX7fz9JoxM8V/1/P0Rt3TuB/n8/GAymOyn/fz9Lu3Y/bIWIPrZkU78pZBC/GPJ0PbaKf7/3Riy/uVs9v8rsbL60DXk/DLgzPsQGfL8zWxs/knhLP4sTYr9ZNvA+cREwv7PWOb8yeVw+9v55v0kBUD8nOxW/hE1/P9ELl72kjnE/woqpPu5rTD9uGho/NqYjP9ncRD9rb/4+AidePw6owj7Xxmw/CJ2TPjQhdT/ax14+Od55P4umJz6zi3w/CfD7PTsOfj/wIr097ud+P8DrjT10Yn8/EO1UPWSnfz8ZtB89K85/P02M7zz6438/m6WzPD3wfz+NuIY8I/d/P4wOSjwE+38/34UXPDP9fz/2QOM7bf5/P7hqqjsd/38/vL8+P3S8Kr/XGX2/t6sZPiWX9r5iWmC/6bBqv6CCzL4gQqk9zR9/PyKLeL09h3+/FOY8P+7HLD+nGVC/KxkVP8+9Qb8wVSe/lO8QPjtsfb/tSUc/na8gv6VHfj+8A+293h10P7Eumj6mBFA/eDYVP7wfJz/t60E/LSsCP6tvXD/XYcc+p8prPyBJlz7AkXQ/xmVkPgmNeT+y6Cs+4V18P4guAT5p9H0/xfjBPWTZfj/IjZE9R1p/P2xhWj3Kon8/28sjPZTLfz9BsPU8heJ/P6JAuDxs738/yiyKPK32fz/NPE88wvp/P3RoGzwN/X8/pxTpO1j+fz9Yya47Ef9/P/ttIr5Ewny/fwYfv8udSD9F7V+/nyL4vi78f7825TA8M+XGPvfkaz+mQZa+WLp0v8R7WD89pAg/z206v2lxLz+celG/qicTv9QqiT3YbH+/RvE9PweiK78Jznw/40chvptudj8oq4o+a39TPwc9ED+8iyo/Tes+P7kYBT9Lrlo/hhbMPm7Iaj8L85o+x/5zP9oBaj7TOXk/ECowPugufD+3ZAQ+8dl9P1LOxj19yn4/si+VPeRRfz+v1V89Ep5/P5LjJz3tyH8/K9T7PAfhfz+k27w8le5/PwahjTw09n8/DGtUPH76fz8ISx885/x/P1jo7jtC/n8/9yezOwX/fz8ooWq/4MrMvhTpoj1UMH8/1Jd/v6naZj2sbWi/AJnWPjjgJz9jRUE/eIQCv9g6XL+KPW0/kWLAPoZyIb8nrEY/lx9fv3cD+77/dgK87P1/v+X+Mz+ICTa/W+F6P37ES75DgHg/QAh2Pr7bVj/SLgs/7OktPznbOz81AAg/9uJYP/rF0D4ywGk/upqePktocz8InG8+meR4P6FqND7K/ns/j5oHPtK+fT+Xo8s9OLt+P33RmD1MSX8/10llPT2Zfz8/+ys9NcZ/Pwb8AD1/338/o3bBPLntfz9AFZE8ufV/P0qZWTw4+n8/nC0jPMD8fz8IvPQ7LP5/P5aGtzv5/n8/Me9Uv+gbDj8I1Dw/ptssP5SKUL8QexQ/+iUov7YIQT/pp1s/KnsDP/uZMr/CZze/zoN6P6TWUj5bmQW/zF9aP9qJar+NNc2+HbGpvaYef7/Xeik/tt0/v3yCeD9a5HW+T1J6PzZ7Vj4kGVo/lQwGPwk6MT/wuzg/gOEKP8INVz8XcNU++7FoPyFAoj5OznI/RjR1PluNeD9gqjg+hs17Pw7QCj4No30/kHjQPZWrfj8oc5w9f0B/P+W9aj1JlH8/4BIwPWzDfz/yDQQ9791/P50RxjzX7H8/eImUPDr1fz+Gx1488fl/PzAQJzyY/H8/uI/6Oxb+fz815bs77P5/P6EDkTy79X8/kP1/P01EDbx3hsK+vs1sP4rQlL608nQ/Hqd5P++bYj5isFi/u1AIv2Ljfz9/DvI8yMHOvsoyaj8ynHO/vFqdvpcPIb5I0Hy/n20eP5oWSb9/snU/JcqPvkfkez9EtzY+JDddPwzXAD/NezQ/so01P3i8DT/DLlU/vRTaPs6dZz8y46U+0jByP4jKej4aNHg/SOk8Ph2bez8yBQ4+ooZ9PzxN1T2Vm34/sxSgPX43fz/XMXA9OI9/P3UqND2SwH8/2h8HPVTcfz+TrMo88et/P679lzy49H8/wfVjPKj5fz/C8io8b/x/P7MxADz+/X8/1EPAO9/+fz/Q1Fk/gHsGP8fROT+jFjC/feIvPggyfD9oewE+9/F9P0vkfj+cW7698KVyv/0wo77kMH0/UUcXvgKljr4z3XU/aj96v9vaV77eXmy+IhZ5vy/gEj/ArFG/rHJyP6lgpL7ENX0/jsQWPkw1YD/tHfc+9K43P8JQMj/9kBA/EEZTP82z3j60g2Y/4IOpPtmPcT9hL4A+19h3P1MnQT6OZ3s/+TkRPpFpfT+aIdo9Not+Px22oz1HLn8/raV1PQqKfz//QTg9qL1/P7wxCj2w2n8/hkfPPAXrfz/jcZs8M/R/P/ojaTxd+X8/VdUuPEX8fz+LGwM85/1/P3KixDvS/n8/mttmP21G3b6UXX89goB/v6SpKz9k6j0/DHoFP/ByWj9v2mo/msPLvq4Gf7/ZeLK9G4JyP4AFpL6m/xe+/il9P4lifr85sOW9Ay2bvpH1c7/f2wY/NJlZv37Ebj9crLi+cUZ+P35W7T0tE2M/L2rsPj3TOj9iBS8/7V4TP79TUT8rTeM+smNlPx0irT5m63A/dPiCPpF7dz99ZEU+2zJ7P2FuFD7aS30/qPXePXp6fj9kV6c93CR/P2cZez29hH8/fVk8Pa26fz+ZQw09A9l/P3Pi0zwT6n8/FuaePKzzfz8yUm48Efl/P+a3Mjwa/H8/YgUGPM/9fz8RAck7xP5/P+gT/T2zCX6/DHYivyfYRb80fHY/WEqKPl4yUz/BrRA/RIY/P6LdKb9BIX2/wucYPkctYD8EO/e+vxKAvP73fz/4+n+/0vlKvE9Lv773dW2/1dT0PovVYL+jqWo/AKTMvgYWfz8g56w9XtBlP2mU4T5m6D0/2KsrPycmFj/mV08/tuDnPtI9ZD/cvbA+e0NwP3jAhT5LHHc/wqBJPgL9ej9nohc+fS19P2PJ4z1gaX4/iviqPTwbfz+CRoA9Un9/P+5wQD2ht38/cFUQPU3Xfz9dfdg8Hel/P0daojwh838/aIBzPMP4fz93mjY87vt/PznvCDy2/X8/r1/NO7b+fz9WrES/gOAjv8y5fb+wMAi+DmV1P1/Xkb7Q6Xs/+zw2PswzAT8FAV2/1RBtv4M+wT5rxkY/LlIhv3eH8D1yOn4/pQR/v6sysz1ZVuK+rqBlv8Yr2z7sW2e/9yNmP34+4L5QpH8//5ZYPXpsaD8qntY+MO5AP2hEKD+M5hg/nVJNP1Ju7D4ZEmM/D1e0PhuYbz9nh4g+Bbt2PxvcTT4Gxno/C9YaPnkOfT/KnOg96Fd+P4uZrj1nEX8/QQCDPcp5fz9TiEQ9hLR/P0NnEz2N1X8/QhjdPCHofz92zqU8k/J/P52ueDxz+H8/B306PMH7fz8P2Qs8nf1/P0y+0Tuo/n8/Iil0v0TnmT5C31C/2AMUPyq6KD88h0C/HH54Pwordr7gRFg+sTl6v5e7T78cnBU/oBonP1TwQb8hZ34+RPl3PwSCe78Z/T4+2g0Cv/qAXL9V0cA+Didtv4o1YT/rcvO+KfF/P5lQrjwh52o/BonLPlvkQz9YzyQ/+58bP/tDSz/g9fA+keBhP6rttz5I6W4/O02LPsBXdj+EFlI+5I16P0gJHj7Q7nw/3G/tPRJGfj9pOrI9XQd/P/G5hT0kdH8/qp9IPVexfz8QeRY9w9N/PyKz4Twf538/o0KpPALyfz/Q3H08Ivh/P5dfPjyT+38/5cIOPIP9fz/qHNY7mv5/PwAAAAAAAAAAAAAAAAAAAAABAAAAAgAAAAEAAAAAAAAAAQAAAAEAAAABAAAAAAAAAAEAAAABAAAA/////0AAAAAAAAAAAQAAAAAAAABAAAAAAAAAAD7IBT0Sdp08gkVePCgC2DykbA28bxHRuu72Ebzh6o88Bpn/O/uzIj22LNc4Hq1QvPlnpTsIP4a8g42NPIcTwLd0dpM79l+8u2rspjyh8Va8zQjOPO1wpbv7nrs8IKq7u8Jq5DtmR7K7ymQCu5RlAL3sIr88IGK/vFefpjxgfhW9i6qAPJ/MG73gjKI8qK4hvVL70Tsuo/G84nPTO+aLN7xQcp88pj/ivAQ+8Dz6GPi8Z/5ePFCEXL3RiQc9upSFvO/hDj1xk4m8YY69PMJUA72QW8Y7j3rEvJadTTyHvOC8GdGsPFn8Kbyem4A82LJ9vGGjAj38k9i8jDqGPOKaNrsCAAAAAgAAAL03hjVOKFc/+L9qP15wYz+l+V8/GYtxPwjebT+h3XU/Py16Px30ez+/+XA/4fV6P50WfD+qxXk/Set7PwjsgT94Qnk/woiHP5ckhz/TnII/kkt/Pw9Lhz8AbXk/z0aDP0l+gj/xU4I/t+2LP5T0iz9MU3I/CXWIP89thD+iHYY/YJ2NP1Rxgj//0YA/8id+PzNxgT+IkIY/gTOBP107hD+RlYQ/++eDP9LKgT+C7YE/cKqGP2wJiT9znHo/HsWCP727fz/quIY/wTV/P8l2gz/SpoA/H76EP8tFgT9OYoM/po+JP3a4ez/syoY/1ayFP6f7iD/Xu4g/oPWDP6Socz81X4I/AAAAAAEAAAAAAAAAQAAAAAAAAAAsHOi8x8Q3u2qlMb2FRE48bnoevP6uq7x7c868fFq8vLP24bzHmzW7wvkCPcl8RD2T6WW9+xFSu9Y+PLzjSvM8v1hZuwF0Arzbcx67TlCovCTrDDx4QRW7wxKRvNJdhrwxDIO8PALYvObnE7zn4iY9IwlLvYECRL2vcaS71fDRu/RCizxwTzK7M/wIPN5a5LwtZM68NIoMvZzd2TvpUGq9WyIivd2jmbr5n867MA2dvPZawbzXBwK9ThGEve7AVDmfL8K8GJxNvebvm7t2c0q8ul2ZvO/m8LwH14O9TSj+vK3hGzwKUVA8SaKXvIGQkbxcXjs8YliQvM48mDuKfkO9AAAAAAEAAAAAAAAAQAAAAAAAAAB5ODe7U5+gOUixP7toaF48cz8svHUrEzyQTg88ZtJPvAzIETwg5h48yKk5OzKHTTvuvoW8G68gvIhcQrzzUwu5FoOPO59dlbqgUvK6jA5ovHB6iDsN0RA7O9pvvPhdmLxHVEo8ra0TOzgCMrwWTSG75RYhPIWKODwsKW48EpcTuxnv9Du0/au8cVrsPJ0QAb1CXI48dU3VvBLcoTwxG9y7cd/LPIhWirtQ6Tw8QB+ou02OLTyfIZO8aS8dvAMWCz3OHQA8WRIsvFKH7zqL3Zu62rR8vJpsE71aL8Q8uN5yvLspBD1pSZY8iqCOOyf72LtJJjo6EBmHvGv8Ezx6Zb87AgAAAAIAAAC9N4Y17Z6DP2Ihaz8YNHo/vm16PzJkjz9ah4E/PSyCP/BrgT8A04Q/uYeDP3gbhj/8fIc/pnCEP80phj9XooU/c5iEP1e1jT/5h4o/2OKAP2w4gz+agIo/kj+CP8hjkT+mvIg/ZW+EP7zxkD8Ldos/Y8SGPyD7jj9zGJA/FaiSP4JmjT8j2IQ/9xeCP2iXiT/acIc/yoyLP43WhT8fjZA/53aCPwbyiD+W5IY/nKyMP6Vohz+qdYs/eLaGP4L5jD8o3oI/BEGMP5bXiD8B54k/ZSCKP+pphz8HDog/xraJP5omiD+fc4U/qDCFP1aMgT8mvYo/EbOEP5y8iD/914U/C+iHPwAAAAABAAAAAQAAAP////9AAAAAAAAAAAEAAAAAAAAAQAAAAAAAAABKrAm9oXwfPZTG2Tsg2qO8cZstvEm/oTxZZ/C6ju6sPRpVSTymPrO8jLm7vKurBL2D8Qo96omeurUfHj1WMVk9lz01vC5a7DxHyDS9kltsPSsg0bwkE/68BJrivG/UtTtoqb28OLccvR+7VLzFfYE8TQCZPAFb2TzwRc88wcpHvWAaCD2q+RY99hlWO0q+z7xaSJm7nACUPHx2Ub3SFJI5WxLfPNsXGbyWcPC843mxPEdVHzxmp9M7+H2yO0BaW7w1Ep08tB7EPGJ1xbz1Z8q44bpdPKuNWj3aNAc8yzuevLqpvrw/rIe8ii+vvfctdjznv9w8MgVOvR23hDpbsE88AgAAAAIAAAC9N4Y1V7ZwPxxcWT8DWXA/pyJJP18geT9ShXU/+UdiP+yucz+dL4M/T+h1P1uPfD8B5oM/NNSBP4x0fT+bFXQ/TT15P6VneD/ZX4I/U2aBP5jngD+B4HY/pvt3PxLMiT9WbIc/eNt9P0behD8wbYk/yBd5PwrKgz/IYYM/4iOEP7V4gj+k94g/NUyFP0KOcj/JSYs/QeyPP2iegT+rNos/jiKBP43kij+nxYE/Vlx8PxQ5iD+DCIU/K616Px4+hj9lyIQ/VwSMP9yZgz/D83w/dgeBP/Nsez8lZXo/dZaBPzL7fT/E9mw/pwiHPxFneT/3mII/1rZ5P218hD/rjH8/MqmBPwAAAAABAAAAAAAAAEAAAAAAAAAAtomYvRMLV70u+R68Pbp3vTGqDL3QKcE7MPeUvIgUsbyX2887j1NMveTm8rzS6vC80r8nvOaqUD0c9KG9Ql6UvMMHXD3ReEq728KzveCbkLuiAgy9AvIRvUbnkL2ADEO972myvEACmjzPDT296ctRvLnxXL0M5yS9RebfvL4inb0IPza9IYFUPUrqYL3G/Hu9LCZkPMoeCD05k+K8fRIFvTZUGb0s4Qe9C6LvvGSkQr1OxXk8tk2RvTVH1LxQjC+9SP59PcG0q7t56PS8R5eFO2rq7Txk1oA76h8dvb2uvjxrUCu9wURGvJSxpDq+Ak693iDUPJR9LL1GLwU77ZZCvQAAAAABAAAAAAAAAEAAAAAAAAAA7ZAcvUQrET3Kjdu82ikZPMakFr2iBYm8tgUhO1v4JzxbxLE7Iu2+vMprPzykpBa8Oks7PdO3J7uhgqw8G7VmPY9fybynUxi6EtmtvGvIpTwMPlO74ScavS1mDL0OI5k75NTAvKPVgztUGPO7cSrzPHfDlDujJIE8VtiPumlsOb3z8wU8OZ0KPe5SxbvddQW9ay07PCeVcLzWCBu8+zyevEXa8LpbUaK8k2gUvW85+Dwb3D69nAgOvJoBcrsxbo87eNUPPRjTwTzHjQC9aphpPKL/jzz21Oo8mFO1PJoCL71/cPq89EnOuwGu3rv6EQs8OvCOPGhmCb3fST08bVMkPQIAAAACAAAAvTeGNdne3T8Ct+A/DrXuP0Tn5j8HTPI/8mr1P8Rx1D8vYvU/1EzmPzVn4T/uHM8/Y7n0P7Yz5j8pytY/9HLfP4qq4D976No//V7iP4Qj3j+msQFAB97xP8WM3D/9hgJAwyfoP+1E6z8cW+s/ax3+PxRa+z9WYtA/6hDVPws92D9t1/U/kNvUP1Rb3T9+HOI/HI30P1zm+j/g0PU/gzDkPx2F7j+wCNk/+OvbP1bu4T8wA/c/q5PaP/d75D/IKNk/UgT1PyHz4T//HOM/0ObXPz+l5D8OIto/7S/pP90D6D8JGeY/2l3QP5Cu8j9hMNg/n/DnP1729z8G5+0/L6ziPxkh5T8BAAAAjd6IvQ9hk76gVNg+y9ItvkSRfj4pfSK+fya8PijpK743a668CQfNvTJnCr4+6D08KUnWPt8N3L7scmO+k1yuPrd0yjwet7I+WEgwvk0pjT5fR1k9T9HrPWGMGT4lnmS+5eJsPWCk/j6wFiI/GqNavdFSgr7ZygI/XaIIvnOF3L5b270+2N2HPSIen77BhKW+zWv/PZK5iL4SDWM+fpqBPoJP8r6F3yC/jHO4PnmjWz42Jom+f3O1PlxzA75oxsi+wQ8Yv/HRs77J/wO/E0MEv/vb2r5OmE48lKn6vntYOD4cd1G8+oYCPmLK+D2rJC6+95XqvqIZgT6gpkU+XrT5vi3pNj5G0A6/yf/uvhu8Yr3Yyq29x++bPvAGJbx8+L49pIYAvsmhY77gfCG+2OKQvjEXqL7OlSY+MZSivR4W3rtEsw0+06MKvo75Irw0Tx0+TRm/vcsUKT6nGto+84IRvrr+wz7IEeg+AZRnPvEwFL44kYe+/fAvvTRRob49yR+9K5lfPh+K4D5ufsS9uylnvssZPj/uvA0+z+3OPjCxDz4GSa+9oS80Pqey8T5BsJo+OGBUvjrDPL4ug2g+3bh3vT9Dtr2RXja+7+86P5Lknj4Rc8c9cdGRPSpwhj5O5qm+zhacPtDlIT7l5x4+hj5kvSTUqT5vmCQ/dH9mOxzu7j0gtoO8Y6n7PlWbyz6XcxA9XRdtvhGfSr23nQi/RfpJPr2RcT3lleG+RNDfvpoDNr2/RtY+hX8cPgsjn74ogfQ+5wzYPifnCj+B3Wq+Mg4dPutwGj8Rwj088LrmPol2Vj73nFQ+CE+VvPlAi70q0Om958Z6vo40m74V+bM+Pw5APRROBD7XcNA+uMqiPEYyfr6NRY++mu3yPV9jM7qBw6Q+bEpBPbCN5b1EcqS++Udyvp7W8z7zWog+/2QAvnMehT4Wvbs+KmE9veXrEj5iHa0+IdSAvvQktD3OOOM9c9RUPZgxrT5k0m0+Ygs+vfbLrT4IcHg8TPD/Pj+vR77w8Bg/STNZvrGdOz5oNIg+l9TCPE2iGr6IJ2a+tldrPAwBKz6W73m+lfOTPohIbL5OKo+8drY6PgkJ2T3IVa+8FsfSPiAfoT2FOm8+Kbm6PjIWmz4Fy829xjS3PbRDw71itdG8ffZcvjn3Mz4A8lW+usBjvYYF/L4JCOG+MZGDvtkaYT6RDug96oikvkF+Xj6Py7o+/wyRvldG8b65xIC9g4R4Puzv3r4cxTQ+Ya4Kvm56iD6xkve+2lQRvlLv8D6FMpO+zPVrP/doL762QgE9vdZbPebhU7wQjoq+L48NP4JdRL5ukpE+2fuPvZS2GL7HtWw+D61FPk+kKD3QMym+3gUvP44Hg7zQ+km+aHE9Patwyj4Ra50+UHkXPttnuT68OA4/+EQzvgv/YT7fDtM9z7pKPtOl3z501/4+2TkTPhBfuT5+7EO+ArykPvQ3C745Bsa+7adjvYzxID4P8b89BMyOPhEvRD5RO0e+5mS3PLQdkb4V52G+OG4oP7F9cL5F+D0+3lk7P9Vx7z6Sp5C+sszoPiAKB76hqtC9OVeKPpdQ7T77TrK8ZHgNP+WzMT9NoRg/wM4fvm+fe7rXvZU+OnPCPVswNr7ARQk9baGXPYs6Fj/TmxU+o03qPU0hAj+5ZQU9uXspvk+VLz5r+eU9lQU5vszJAz+S9oi+pnWePr967j5eMYm7KiwWPmmOCDt7BXA+wN3OPYr1Rb5eA/e+iB3KPsQ0Hj7D2RY+5qx2Pn73G77cz+a85RUDP8xJuz4hN+u9MxSvPhYaMj79+hc8eq0hvvMqJLxWO6E9zqliPkDwlz4fz5c+TklSvCuNoz5ASrE9Q2K1vUNlaj52fXo9AFjnvm93/L2Jj5++mtafvnA6tb6Sr5s+0lpqvl1Acb4U6ou+COJrPomu2r1yFda9pjt6voworD45QKa+sISqvlxPur6nCt69vV2hvt1eoj6stYE+MFSBvQpSH7sMfFA+RmFbvotfgr7RASq+e9mgvlQtLj6dMTo+fKxxvhpxCD4oUGu+Q9HcPm+L/z7wAbA9JHtMvs6hjD7Xvqg+yIMqPu0bXD0nVcu9WFrsPVyEhz1mTdM+JFW6PgR0V7vR86c+szfPPu8/AT5pZg4/kGMTPuaYxL2YmTQ+nGqYvnVEoz419hE/e8glPjFwkz1P0ZU9uK2JvlasTT59OkI+xEyUvnpxKj65aR0+b98QvuG0ED/SPx6+tXKfOwYQnrsDXLu+v+WXPldlBj93KVC+2X1PPz3MsD6WSwO+m2MhPxJh0T2nJxi8No57Pv6oNj4dDKE9RrwaviIDgjo95h299a9ivgzt0L29PwG9j3RsPgkJwT4CEJ++j8zDPn0xRz4WPdm8ZUayPTr86L0qFbY+8+7uPhINiz6m0sK93+ISvfZHib6qP9E+cssQPZrq9L2hNbq9BDWGPgjLnD4wMMC92QM9vigOC77dH6e+9oIcvQUiDj47QuW9CwlbPiNY6T5vDA8+hq+nPl9H0byKK+2+cR4EP1ZECz/pzkI+NCZ8vgXAj75n+gw+6j4FP4FXKT6pzjY/0KdJvskCkD12zkw+qmtkPltdfz5Rth2+XNYpvfZsAL5WXRQ+cKbyvFhGlD7Hpvw+xu+BPp/NwD7BFo09cEwKvhDnRL537J89Dwh0PlUAJb4voQE+AZTlPZEiMj4rRtG8EW4avoNIu76OdCQ/T7fmvGMyx72vmMs9t7KwPlc3D75YhPA+z/wyvdOi6jt/KJk+16L+Po8PQj59oqC9xlIVvkQjj7puDjo/So4LPuR6wT06gQ0+lXLYPmZF6D72cV6+DWxZPtB4WLs+OZo+qOH3vSPXCj7IXvm9iI7EPkyexT4oHkU90SPIvQmYbj5UZGU8hz5BPsVqrT6zqgw+YVmePX2Akr6zypq+vcZwvFTfVrsl/36+4kSvPoVTnj2ogc4+J7cxvpSWR75Pk8c8UAqjvAWV3z51Z/Y+005Svb25Rb69HWi+uCe1vbnoRr7XkD2+6yQlvnDCEj98vqY+S+zePtKqo74Nf+U+kGagPoyIqz5d7Ee+hNYhvtvnXb36qEq+w3ZSviqX2L7T8ZO+wB7kvre/DD7Qsxm/w0epvcT8+r0qbNs+82Qevh7J8DwKMrK9ohaMvhkItbw8n5O9OFSHvuNIhr6Kv5E+FNRuvn9XqTu9TI++xteBPfrqGL4OxiM+8XySPt/Y2D5y0aO+XpNFvsUVST7K74g+FFTNPnixsz5tjqG+/FeMPTtvqj6ioQO7HDmVPg2MFz6j8bC+aZewPqLQvb3924M+KHTCvmlSeDv50/q9xP4iPqihaTs4M8o+U+4DP+2O6D0JQ4K+Yvs1Ps7/Bj6I4au9kL2EvXashj4yNtw+4qylPjhnjr4DSaA+LBSAPph+5b0kdfg+EvmBvdQIhT4GroA+g2pBvr+7bj5vNdM+EgZlvcdNab7475+7uHh7vmeymb0yuKO+MOeGPq541D4bc1G9kXbePmOdjz4Ps0Q+YS+YPiavpz7pRxQ+satSvrJT3z17kJq9Ogf0Pkh8lT51JlC+0BsBvqEBjr5aw/A+j3ZOPyaWer7qgVc+pkx9vRcLPL4ZAR8+bsI2vlWzFT7vDmA/6BIHPkiqqj5KBWA+WLpqvopJOr10Q+I+fKIKviN4ID5F3nC+MGQvP0HyCD018/Q+DcPVPbpY4j6KWKI+cfBUvumsnT47kW4+5zi0PdeIK75DJAw/631BPhnrd743HTw+ZZKSPjd9ID46Sf88H8rSPtID2z6nEu69pJl4Po4jPT/dJpM+BNFNPsKp1z4fCU69+uEGP/TlMT5/ba2+A4tJv7gWcD6CZ9C9CqbePpr1jz7iono+qy5lPr/IcT441RG+unSVPhLa6rxsOoG+Iy7FvqqlqL6S88m93fHEvoNUiz51V5C+pGyEPjEq875Xy+89A8nXvhRxDr/H7/O72aUmPir8T740QiO+IOYSPjqpQL6aXJC+a2OTPb1LeT755cC+bHC4vtiooz5+Pny+yc0/PhpgbL6XWxG9031pPqiPaT7eqqW+8pERPE/kkj6H6A0+DGFjvsbacL4kNea+AXjtPoSlTD0VDZY+KlIGP4oiPb6lM0m+Fp74PiJyZD7VGy69CfKgPgEBmz1XVww+QIqKvo4xEL6AZ6A9R+8cvuKrMT4Grog+DNl4PkCnCD8zfM69i2v7PpGuNz6ooH4+TemRvpNTWj4vWa09MZc9Pu5tOL5W8Tc+gr7IPbYDiz6fMxY9dgMzvh88HT5nqbI9GJjzPmRcUD59vX+9w6OPPWQBm73V1Z49Mkh7vd3KDj4GwI+9sj6SveASpz5WEo4+PE6qPSHPb73aeaS+zUZiPkHbkb5qCTa8CWarvsdGlj4Zr8g9tu4SPlOmUr0mvX0+GTT8Pf3rlL6ADDG9axIXvYPXmzu5urw98AOLPhgVoj526sw+hBO/vkfEpL6hbC6+1DuFPBhkd7ypxwQ+f9JGPRoYD7/Bb66+mo0zvrH/Ib6W156+d7KAvrPl9j0Cq+C+xj5ZPoIPg76XIKw+7YkMvzsQ9r0+PAS/TLfmvTNT7723ZnE+mxuTvQbsRr0+lM0996GmvTMiZT58+i4+NcYoPpQpij4JFgE+IOP8PVQJsD24mQ8/k0nxvoOxub6kwhu+vyS/vvIA2T5tKPy9bGKMvK2tq75CiiU+aXS8PlpXgT4D5oU+wZ2evPgfNr3JSqk++Y9+vRNxUz5iu6Y+9AyPvpL6zDzhMpa+yOQrPonxqz5KJji+FaYYvjTL5TxYpwO/444ovc/LJ74WX6A9FdU9vgFzpj6p7s0+zZQOPa3zrz5yS5W+9K5WvhfALr6TT3Q+L+GzPev88L0uSQg9WxvePkPNEj5Rp0M+p49bPl48HrwL5xC+BNcRvQwLOr4wX5C9d22iPk2qhT2HkHA+HtiOPoBBIz7R45S9Sk2xPm+0hL6kAjM+/SiMvXYHYr4MUqG+ybGWPcRNr71Hhbc+iXOjvXcEJT6m8Ys+J0Sgvob+srw5Xrg+kPACPedqhz7IR/k+SY4qPpRS7z7TWLO+LiUVPdo/277gHko+7UajPeR6pj5gcIO++uxTPg841z37bWe+24dnOzNbID6X/ci+WMSkvsYPAL3sttc8SvoPv51XCL6Gwgg+4tXLvsh7bb7brqk+2WqDvirndr4eqiu9x422PoJbSr6QEi0+zhmvPQdNe75SBpq+kBQ2PItv572qA8C+Ghn7PUud2r4yUq4+EpSfvvotHr/VFca+I8gmvoH+oD30Gry+gKnlPXxGkj797JY+fm1bvsMusb7isUw+qmODvpEDN753GYg+Z9B0vrxkzjwKUa+9I37mPcfuOr6KKpA+kCUsP2ZImb0WTbQ+cF6Ivgwx8b0P2CM+5i+ovsSvzr1wWRS+BmgVPrQulD6yoEI+5meuPlDB5D5hMg4+gGIVP59ftD6LONU+6lwWPxx3zj7+12w+OXJKPWK3Fj7Qh5++V52VPqOSiz0lFHI+TrljvVR3yT1j/iQ+woYrPmr3LD5XSL+9/N/jPunYEL7Zfg69ynocvTITir7dtd4+hnT4PYGIYD4ETFG+lzBBPcP2Bz7QJDM+g24gPiK68D2bxaM+NpgdvgGQbz48Htq+gUdgvn0t/715nCs+bs1APmBR/D3O8SY/DYQzPRpa3D5LJLI+6giEPsqS+T3+mF29DWybPjp1mj6V8LW+hvwhPXiajzoNjLW+BmSZPZ0Ol751YLk8F9mbPu7MJb5PgpW+anyIPtW4DT7DXqG+i3CEPVEViT7zTuq+SsiVPmSpJD7xdFk+1Papvr5M8j6/E++8Ty4FPtZHv77bxNg8YLhyvlitW74UQEI+uTKfPoX0oD6tI8o9gnTYPtcLnz7gOPw+Box3Pt4QKz9ImUU9Len+PUSzID2O4Ag/Y9yTPn2TJL5R1cm9KcE3vrgBmr7mcgC9ohzevV65Pr63OwI/FLW9Pq6KHT4I3wW+3h3SvYwA3L6Dm7A+YSYivd4B773ksOm+65FiPjYpDzzt9eM+A26qPnTDCT3b4ts+c/sHPxn7w7u37oE+fOmjPXvWAL7r+ES+hXNIPl4B6T6Ch3i+xE3mPkM7RDuhMia+wyllvrqYq77Umaq9DCukvnsFJT691Uw+y0nPvrWmy75TMoM+foOTPrxu272Pu7C+oUwiPXy9rr438Hy+hkKXvvBWPL5gOcy9K4uVPsZZob4aZoC9rt1fPmdYND3C3ri99jGVvg8Sgb198+W+qQrcvTA99L6SxAA+Lvc9Pqf1cL4zKwu+mAXtPR6lKr7CJrC9ddW9PsU/lL6cjum9VZHevmEJ8T273IU+IgczvqzuPr2FkQS+L57+PRMX777OJ4U+zOrBvJZ6oj6286k+tolXPNkXNz6bIpc9MgW2PgoMST4/8qM+1XjwvrhVNr53Wr2+q2ObvuEJ4L1lm2+9ic+1vSOIjL5tGBs+i8I5P1fyuj0BLz2+THUBveRRKD0XjzK98/hoPluEbbtAbBU/nMRhvZc4lr6ol4G9zVcGvpkjYT7jQq2+dn8cPjOSJj5FNCe9zM41vhR4TT4wOiy9z5XBPrUMkL6dN2s+zh+YPmSQJz4AGzw9nQ8MPqjT5D6NKoc9yi/XPfyyPL7NB4W+tUIkv5VM6L7fMKu+xGYAvxi0tz0kpZ8+vl03vs1jSD1Z2gS/mbYgvuBvXL6C9ZI+G0uqvfmCLL1vU8I6l2dIvgF4Lr67hPG92rcBv82vzr7bLKe+pxz1PUw1oT0Libi+0y2bPvmbjj7gHaY+hUQiOvcIur5vJtK+nqQzvRIvpL57Xr++jkmHvssms76GvDC/obiWvguLab6upCC/wFawvoHHlL5qh/E9ktZwvvqEzz0KK5q+KnDoPcXU2L6b5+m9aviZPVCuCj0g7P6981BjvjQTbr7i8Eo+YA4UvtSCoz22e8u+P1CCvqI0RT4z9AE/KzIiPqECcr6s7i2+AgctvUDvTL4zxoI9DvC/vY0orr0YgZe+RXLMvVW9qz78yOM+UniUPtcQgb5G5bc7DKMYPlvk+b3ZqwU9KzzQPoxBsj4CcOQ94iYVPqcEqL6+kGi7qkuPvk+ZCz64HGK+g6EgPtsu8L5mZBi++ZFIPhH+Ij4RCoa+O4a+vNWLI75HJuO+1FXgPRu6sjw9rMU+RVjBPvqwoDpmWvc9k/OwPo7DW75z95O+aRSPvhfxHT6Sphw+H72BvvTICT6Jdz88q4LvPWd7b7481cW9GVJhPaXR2zykMd88iipVPvRu6D0292A+7LwpvpmqPj0VsWQ+WlbRvprqmz5cF3C7hsKMvlPxGL5dhvW+aOuaPhBZob5YaEq8MimSPY7ghT63IRM+Ri6AvmfViTwAFKa+REJzPj0m2b54Zvm8MsyKvgiY9b3ByJS+RSDhvqawSD7hNWg9hVQpvclpUj7bG/U9/PKHPYtFJD3410I9yhYGvWe+uD4Mu5c+ZANZPsEPrz5H9KA+DOyGPjA3e77rkQG+o9S2vO24tT7Yq/g9xhXqvjRY7z3Co8K6Iaurvp2suL2xawQ7yaxAvnm8vb1w2oM+/lLvvQ69oj5SXLe+3Rk+Pkenwr6tdXq+kaGUvqiHp76mrSG+mjnwvEB8yL60khI8dUE5vzuoFz5cXJk+D8szPryYdr577w0+4VaFvhjoBj6izl8+PumuPrdM4bzPW9m+JDh/PuRXWT26/we9LUM4vvZtqb1Jq+c9czWzPoKFeD0/qpO9OroOv3Bo4b3SAMO+I9S/vpj9Bz4XVsC+nDXOvnbcAr4BwYu9evadPXqVFz0kQki+BkmgvPBNTb6bC5A+eKkoPRHN6L6nNLA+UB7gvmA7AL6QIiw9xgOgvvNf0L4D/Ai/W60nPe6nIT770SS8mMgzv248i755tGQ+njS/PaQiJD742CA+cMcavXEixz2bDTQ+xT1aPgeLAr9l4Aq+ofu6vc+6vTsSEau+CexmvuYSjr11K1U+faBWvi8BPT677cq8OTJLvmPjkz6jC4A+MA+WvVSCUD7hkJ49Vvx3vvb1p71ZaT68V3YTvvjOzTzmdrS+ZyKlPrMnnj7ZKeY90vTjPdWPBr4JOpc97W2kvaM9Dr5rSm29p1QkPvZEtb7+or49L6MbvoUHzD7cUxc/2XHEvm3Cfj6B8j8+BwQKPRrfaT3PKRI/8Vn3vLjt3752pLq+BgWtvrz/Tb7k96c+YpJdviCdpL6vi48+0miBvlJehL6sEsW+3XDgPCQw375Q/4C+cQmHu2Sdpb7lCD2+50PVvuvCxjxZ0E69xVmQPu7zFT4qn6Q+sYYcPQJ2Sr6pUzO/WvB8vpL/YT7QuIu+LqDkvqLIlbzMyo69OcFZPhfYlb6/7GA+ryXAPahUvr4FnZo9DCQev6e1Sz6vVNE9wyGbvQk9Fb5xfMu+PcfivRcglj77wUY+osC/vkVNUr5RxO2+8ISdPsedN76bNMI9CwCJvSsY3b6ZV6M+RKrPPQOYT75B67W+ETGbPlMCaT5OGyE+TmRpvi4DOz6wCdC8B9LzPm9pnr2ciNG+qVqrPq9wuD1qatK9BRqRvng2hD4DwZU+lSODvWE0oTwYnPq+HkIrPivq/bwwNHk+bp6zvj63l75aoWo+OQC7vtSX8b5Qf9K9SNALvmokBb4AsB+/SyuLPVZxlj1V8vc97nUsPrf39D2w0Kc9zkn9PFxTfb5MP1y+ybbHvq93iz6ZuxI+AcPVvjuI4j2bQnc+2tabvnFSfL4VvNw+2kv0PKx9jD4DJm0+3sGgPuna1z19J7o++YWSvj1LJL4yqsc9sTzjvgu/Tj2ETom+pau3PXA1P726bcM9dumzPuSHdr6Z3qQ+dYDhPf1UwLuarvg9eoG2PnwmPr6ji9U95w/BPgef4b7lm34+c5EdvhjgQT6gUai+AG3yvW97Rr4r2VU+8I8lPaoV5b3hXAI+WMpbPrKoWD4bEJw9yY1ivZ+j4b2nAFy+qHgdPucUI766D/4++M9UvmiT9D5kWfy+CTfSvEjqdz5oFoY+5ulPOhO+Lj1tgCK+W5EXvr7mOL51dvW8ipZ2Pl8Zpj4+KLO9PUAGPgkgPz3RkrG9zOQ6Pcrnpj0/8e08xyWqvV2agD4J8Yq8AGU/vl2doj7/7iG+Jb2UPqcQl76dZqM+x2wQPvJI9z4yBbG+ocDevqiejT7sZ84+bxToPKK3YD4lj2++OhaGvTnEKj6Oz5g+UOPkPKY9lT0JjKo+UshJveI8pz6DfIS8BqgIvjH+ILz/rrW+fwA/PqMX2j5MiUW+ckHXvUXlFT6TI2s9Jx7cPrtMML6jvgg+SgcmPrcMp74LdQa+iw7ZPuyW5r6ZRtq9VhmDPr5aaDxoxaM+wFwAPmgGHz5bgUW9EOSOvlsQ5btFB3u+IvtHvTcahz7pKiG+vThLPglf/r7wCGo+9SFFvhvFmL64faq+UZMwPkGxR75a55m+mciTPXyS0T2XIkc8l6vHvnTuIz5TMF8++1OEPvA0XL5lu9u9XRcAPiSrrT6b/OG+WTxzPvK44bz+vmw+GTb5vr5oij60z2i+BZEHPsRf7D6oyEy+4Pp4vjfNUz63No6+fVi1vUeNEb6kWKE9ilzKvat2Qj6Cz/w9RKmQvo0bLD4DwjM9/QT3Pjgttj69ox8+3gCWPkL7lz1rHBE/GWAvPgWiD77Gdb4+UdcGPzvYhz7ITIk9K+wgvq3Wb77TuKw9dbgTvWRgSb7z7rk9vZ1uvpB2DD9mNvM9NjV5vUig+j31Zws/MwWEPvfo6jyFQqa+mTJ9PtcNBj60Lsi9wr4Ivu5nIj7pHma+ti4ovqi1cT6kcPi93mEUPt2rjr7APqY+ETyQPmhyOT6+OfQ8Yhk9PqRAzb5V2Ae+UtxEvgEVDT39yxg+5zrbve0+Sr1JbaS+K7q6PmN7sD7daHW99pyqvk/69r5/sik+KhkNP1BEz74TqAc9S9vavmBOdr7Zmho9Sj7iO9XTTL7uTtW8m/l6vuLir75jyHi+lsdKPrLbbr3R4Cg+mahrvmbytb6xiXw99gOOPuCsnj3Xj5q+SewEPk3E6r0JrBG/biqgPuaEc73Y1aY8c/X2vtaXRD7EX2W+gyx2PjeSfz2T6tG+t7CgPRSOtbxnhAM+cvNOvWhA5L5K/+e+XTYrv72unb5e0rg+rJ4ePaYIHb30Qqw943ijvn1ZU70s45E+3t4pv/9MiT5ULEa8cOijPdIor76Udw0+2V1zvhxaib7Awta+oXW0vukoo759Ksk9WuShPilyxD4Lyxm+FfwFPatcMD6VlI09JJ+ZPiRIsL0n34s+CpeqPWyjhb7UsFG+dzdYvlFrBb1bRKu+0u/uu5qka75R7ny+32uZvprlEr1st6K+L8itvJlsEr7lqFo+yBxcvqzB0b4mktm97wi7Pda0Kz7HYBM9Hz+PPqpd0L5gMZO+GMa5vfBKT74wj629zu7lvgKSqjyotEe+1xOkvUam2j0VKcA+rOwevim6qL79Ywe/B2MRv7tFfj7jMma+zowAv1nPwr3HSjG/gonAPbzr8TxR+4g+ri2EPcDgKb7Y4bG+xocwPpX9jL7QHT8+lx60vpkdrr7MwFY+joaLvrFek75b3Wc+gW6Ovbi3Zb0eZBO8yowUvnAair63XZk+wGqJPtushb16rTi9Tm7gu4le2D2ZK5a+GIVEvmBKujyDA+Q+04lnvnbEub7HJCu92DX0vbTux72kNnC+jOnJvun1wL48Btm+CroXvqemgT5fh9A+OGKtvYstED+QKdq9OBiMvVJPbL3VNGu+zjmLPRoGCbz+N9M+09aTPu0KPL4zotY9pg4Svp9ubj7ciZo98bEZPiBUq730LeG7gIRPPk3Mkz4XpAm/S5T5O5Zejr4hiKe90/+wvX255L3/dFu9QnNSPrUgAb7rytY+bmmFvdF9wz4iv2E+cWSzPpCrbT1mRCM/8ZatO78W070Jwji+egDQvtxkur6Jous+meByPRHTXr7kGjk+KeXUPuoZN77Mm7y+UV6evhaFj75zRUY+4cR8PpeRr74IzgU+hVEKPqVxaL5o+GC9pD6vvud2jj3fnVk94C0nvjSb/D1O9uM+VpzyPts2ML49lA0968HrPddWy75iLGG+w6glPkgDRT5qaFY9t1nFPglveD588Y4+97atPSZ8iTtJunw+D9HHvXqmV75AnJC9jxSRvmU8Zr4Ssey+hLIhPlSp4z5Yd8U+WqQcP6bOkD5b9yo+OkZoPpBQFL3KIJi81JowPXeFGr5357++Pui9vUWykj2AK0a+wHotvk9anj3Qwue+njOsvlefp74O+kU+mNNxvmB88zyQT8a9FOywvsDt3j243sU+unARvmI0p76miow+lXidPts1gD7TkKe+8F3nPTRux74ymtO+IQdFvBH+LD5j9Ei+i64gPmh1xT4UPK8+FOfhvtVzlb4XdaU+J7nivgrGkT651ZY+b1uIPlpoGz519oW+CBCKvkB+tT3rXI2+gDu3PpZK4b141YA+0t5rvswdF7za5tG9qoApvk47hz2qru09o0RmvPTILr5M0o2+X2tcPgBA1DzRkxk+Mh2tPpj0Nz7YUDe+1UvGvoiJjr5F7by9uLBJvVeoOD59Y+a+TohDPhrpAT0fsdM+hjdAPrnCfr7zxCm+CiaLvivJT75wuKk+jWM/vkbMAb/Prjo+ATwWPnuboL4Ykuc9f28JvhMf9b0UsJq93mUvvqzQoD6jfYk+GkyRvhV6p740LnC+d4qrvqDvy75UUEA9ra5DPjp/GT26ONy+yp44PmM1zz56zAw+wjixPliCg75N1JS+5P0JvSiISL1IERo9YcKRPvajhr5zwlo+V1zdPr5fOj2nkPa9Ih63PWnKnDxNHD2+wau8PsVahz4p9NW+K4+4vP0ovz4Z9E8+NdyMvb8XET1aqXm+FW5fvlxgZL5k/L2+mHsFv3esOr7ggsC+cN3cvhyJPj4qU5A8QVMoPQ/8Ir4FVai7unWCvv20iL5RK0q+RNgkvewjlL4tDWY+A5RXPSxP2j6xZzI+ZzBsPVvu6D4IiAW9h/LFvkNkf74+Oxm8szXIvmWveT28wDc9Mb9lPvxOgr5r7o++XBF8vZDOW74I+hC+Z6yoPikVkb6vHKI+3UNKvoDq1z1uyZO+UY1EvuPfsT420oc9A/g8PkNVMr6iNkW+z1P/PUtMGr7WqB++wMydPhTiprwFsjC+m9OSvoBRQz22mzk+lMUEPqMgdj3iGgI/yJquPsCUoz4gEM0+1FxLvtoKiz7a5S0+pEiGPgu0j73F822+xVmiPgpVYr6HR1M+ckPKPZpQlT70v8y9HrYavjozLD4T56C9qrOKvqctUz4WoxM+eFuGvjlCpb6KNCK+XUXRvjqOZr628WA+RRWKvldJbT6BlDq+eCqdvrDOsT31g8O+GBWbPh8pF79EdY09ENVRPtpX8L2QhDc+GRpYvVDpUj6THtY9Xb8cPjdrMb3XAkg9qP+HO5/QxT1kXJ6+/NLevs+Vmb4AtUS96JS5vgVqtb61R7K+X347v0Zj1j0PhTg9ahKKvgq9I78n+qM+2tAWvxmrUb5ZN3y+wL1GPh+BFL6WSoW+JNhpPrD52brRBcC+4qDLvU97eL6zapG+e8nYvfCC9b4WX4c+K72WPs2fmj2lhRC7Y3dxPrXnl76SNgm/EmC1vhb9Pb/xr6C+64vZPZykCL+Nn/y+JFSLvUW1gr5DtIq+k+gcvsFgmTwzIBW/WpsTvDeArL5gR9G9My7UO3sJ9zzdDRo+nrwBv9/ANb40+YM+EvWKPebrzT6oV8E+nZvVvY9Bnb6YScG+RdGSPtIY9b0BZzu+BS8hPnHLJ77amcE+X9WMPT4bAD5/bFA9qYO+Pq+80zrXLi69kiRovsW3ar25nz6810lQvgt4AT+EMNE+UDmmPLfa3T7Djb+9s4ZSvjHHfb6IY60+agcWvhBUAz+aon6+5qt3PrYShz4u3X0+Y1jLvQ97F77cT/G6jj9kPh6wBj+llsc+s9zaPh9Slz62psm+ZjptvhsloTtzGvO+zPd0vq9xn76zLQk+1JgevvsUW77lDLW+GMW7vqk31L4Ru4K9OY2SvfH9HL6j+gs+IY+gvgNvg75F2ba+wy1zPmkTh76+p7q+RzlPvukkVz77QiM+Z9UJPq0Ftbxds/S+ChuovgNJZL5wyvq+0HihvfAFhr3HG2U+rpgxPp0cPTyYXxC9+DaJPlr3qD6fao09/7yrviLgmT6Eadw9GmAFPkmSvj2aWj++qss+Psj3Qr4l0fg9BEEgPh50Yj7tjMG+G/ygvh+G9L4U+Z2+GtItPqQRZj0uKCC+U1kYPgzl8bydiLG+fyBmPW7DGr5VY+K8USa9vr5h0750wH++gxOgvngibbyJbJS+ETTZPLI6Mb6DVx4+XI/Nvq+cer1SmYk9CZk/PrklsD6rJBq+1gpRvrkcs74ldZm+FI0svvh7u74qHDS/3FOBvptkNL+TQRe+MrXvPWwBkj7dTsS+ofupvpcC0b6QA5I+EFZXvhhW1r5308y+r57MPHeUHz4MhI++tiSdvTXGA78xAjC+PBcDvxaKr75LQUS9GK4YPHDnuj1CPSQ+7DmGPtyxGT00wpG+PgDHPsKGXb5Cnns+k14Nv/nE4D0wIom+XDVlvt+q9D0V0cK98x6xvAk2fb6GhJI+6ecIvsq96D5L8mg9x4VSvtQZhb7i4R4+NyLBPbdHl77cMJ8+HeuKPjusKbzcPPM9Ei0tPDy807uBVpE+3ThCPq096z1gzRa+Kzl6vqiRTj5+FwI9hBtdPQRhir4xOcG+NnHFvk8LRz6O1PW+xtQUPb3Nir3QWgA+Rb1+vi5Vqb49FFs9gIkHvpKUGL4jpqW+j/XlvoC7vT2I4cA+D9adPhPHpz5m768+sBnTvuyjyT7NRVu+1YKtPjHtR75BrOw+FOl/PpJ88D6JGK2+sjCGPg4NxD6nGJE7XeDWPs5oc756wgO/9g8Cv7HhlT41pR8+QGVNPuGiyb5IsJM9pox7PbVfJDxh7Le+0RiKvbiGxz5aP5e+KygmvpAAiD5zane+PWu/vu/rcb6G28K+QSkFPW0QnL20mQ2+/Fa+OWVxq737Osu+2aW/PDX0G77CsVm+EY26vnSCUT3fEQe9/QqKPlTZfT7WHDE+98c3Pqrknj4UugE+LWrkPu7Si76KYym+92zBPtAcg75Kvqe++RhsvsxsOT4uar29Nrhwvml1OT497YE+5pfHvr0kZL68G02+SkERPjP90L4ngFQ+NUXOvltXgj4nG1++u2niPqOheb5d1qG+MJG2vtN9rz5dDKU+YaA9vxuiub5+B7k+WAUovjVglD7S40e+wwmFPu8Gor6bfqG9crKjvltQab7IB+S+UVXTPcp8h71N6z2+Ajc+Ps1Obz4Yzwe/hxN8vt37O7zJupI+cLiVu2Q/ubwfjqG+DHsIvtnibj4PvFS+/62GPvqhF78pMVw+FcwpvJHMCL8OHzy/l3fvvUGQhr67/X++ZMlhug+elb4gVE+9M2EBvo6soz4Imyg+X+YyPeG8770Y12g+Sp/avscTx71a5/C9cd2NPtgoqr12cKm9Y/qnvhHQLb56SIw+7Tn7PpIfAb0P3KA+ljRhPgR1jD3nVuc+QAzXvTG+ab4YXU0+SKOyPWtAgT2UCkA+4I6iugGNqL67e/29imhvPRy70r2eEQ4+y+ssPcueBr6xWvM+JIG3PndJUL0Cfbq9D2gMvoJLDj9L9+4+Z968PaumqT74EZy96cAyPh+GqD7REpq+Uhp3PUq63b5V3xq+Xqi0vYZUHz6+o50+CxOQvEROAz8Faas+r7mXPl1p2D3LeBy99jZnvW7wZL5jSyY+mEsUPohIlb6DG2k+k+QaPmL/i770CAq/19imPQG8qr7gP3a+biWWPajmlr6EHUC+hnCMvjbFBr/Tdr++9sVAvK0dy70kEv69DvYbvr7ogz6V+F4+cM3fvSL6YD0g/wO+iuxYPkL4P76y+Rc+0N+yPur9Cz1rm7Y+pXlivatfpD43y6c+mcksvtCOVL3cjK4+lUmBPrqNgb4lavY8dxqNvv8Nxz6FwQs+ZSs1PmPMb77yRto+mcLGPrdIUT7wlY4+zyhcvVQTST5aGA8+xv89vldQPr0H364+jt/NvDBczrwT/Q49KZjCvkd3Gz6uG6w+P0Ksvuon8T7NX+W9EEEFvtpmw7tVTz88mhl1vYG7Hj7y1N6+QDskPq6+Yb5E57c+/TM6Pm6mET78Qbc9HR3avfY4sL62+zk9jIiLPqAKiT6JE4i+2JsJvtr9xD6OWOa+7OgAPjjNvD6iLrQ+ad7ePp9vwz5buZi+xKqwvlEbdr6c7YU8s2+qvga61D7c2io8YzrfvphEJD5YFEQ+jq6qPkH1rb6UxwK/KaHbvhT7q77GDqm+Q3b5vfJpl77xwNq94mXbvcL4F74scms+e3UqvcdzWj6Lj9q+WmOtvZU1vT3c27U+i9yaPiWDhT59Eii+V99mPkWfcr5GhRO/NfOzvv7CQL445a++nekiPrphjr4edHs+DGTnvtnNvr7E614+F63OvrgQAb1VzK6+9DCfvuVPbT7dhqg9U2J5vnN/xz1BnO8+YYsRvj8h6b2eSQ6+NP6rPiDpwj414ye+f9U6Po7y0jy01i48k1YuPkqFyj4coS8+iqqpPsH5Db7wA+A9X5uPPnNhHj7pnY69IqmRvhCrmb0B796+YCW2vfLbab7d/5y+93p4vYziID4vy/a9UEItvfu8jjx7AYu+I0/Nvl+GAz24JZw8qSKtviW2QL4gPNA9pe3Lva7SjD7O/nY+2dBrPnr3270/yIA+urXQPjDpoD7JNgk+WzpqPp3tvz6yw3W9SRlQvS8rjD3Ht6W+vxu/PVSQSb4xgQs/j2GHvsmCmD6sOIW+k/G/PtYcSz2l5a896NyuvuQ/jzwbQNo+5DsAP2jnyz5agNS+AosQvWxerz1MLIE+VHp4vkyrmj6JAxk/rjBZvWWUjz7ISJq+qA/XPlRUtb0VlwI/KqJiPlhClT7Gpmg+11GbPo2rhD4UCy4+x9qePgDnMr7ufpE8xWIFPuP9mb58tb8+D6zXPnTBqT7LGaW9ORSWvqeKFT6tdp4+j/K4vqpmD7+f2jA+gingPe27k77wCrC+J9WEvt0Vhr54ePS+0X/QvOpNuD38u129fnC1Psm7Ub1ua/E8xiVLPl+8oL4Bf4M+U/whvoqOSD59J909z8XWPYQPjD6ao7a+5O6NPGE/tz6p+6O+DLwyvUI0sb7XMaG+6KlkvoJYmb4co9c9LDPfvq6LMr6FPgi/PzUFv2WLzb67FII97TTqvnAe3r7UT/6+HH2hvmMOUD5GBva+JpBLwJzkIb5FlYC9xfoGvk//3b0F3eS74gzVvQDLWL3rgIe+vSOTvFRY8L3VX4G+XPZWvMK+67ypr4m+8OcHvknEqL3sS2a+gFXmveY5Cr42FwK9X6wTvWc13L3j6SK+2P6LvD6VzL3oH02+UCUmvBHUMr7WPWS+bLYRvZm9g77mcRm/ES6AvlbJHL4GgDq+rtMRvgfzJr6X8yy9HuqSvj7nPr7dfhq9SaHsvbH1Zr2zEQ++uAVVvuDEn70f06K9/////w=='
};