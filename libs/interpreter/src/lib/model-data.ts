// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

import { ModelConfig } from './contracts';

/**
 * Model config
 */
export const modelConfig: ModelConfig = {
  tags: [
  "<PAD>",
  "<UNK>",
  "O",
  "B-aggr",
  "B-aggr_avg",
  "B-aggr_count",
  "B-aggr_dcount",
  "B-aggr_max",
  "B-aggr_median",
  "B-aggr_min",
  "B-aggr_sum",
  "B-aggregation",
  "B-bottom_n",
  "B-chart",
  "B-color",
  "B-equal",
  "B-field",
  "B-filter",
  "B-first_n",
  "B-from",
  "B-greaterThan",
  "B-greaterThanOrEqual",
  "B-layout",
  "B-lessThan",
  "B-lessThanOrEqual",
  "B-mark",
  "B-name",
  "B-number",
  "B-percent",
  "B-position",
  "B-series",
  "B-sorted",
  "B-subject",
  "B-target",
  "B-text",
  "B-top_n",
  "B-value",
  "I-aggregation",
  "I-chart",
  "I-color",
  "I-from",
  "I-layout",
  "I-target",
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
  "y": 23,
  "you": 24,
  "can": 25,
  "bar": 26,
  "bars": 26,
  "number": 27,
  "numbers": 27,
  "line": 28,
  "lines": 28,
  "lined": 28,
  "and": 29,
  "x": 30,
  "as": 31,
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
  "use": 59,
  "using": 59,
  "used": 59,
  "blue": 60,
  "is": 61,
  "are": 61,
  "were": 61,
  "average": 62,
  "mean": 62,
  "avg": 62,
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
  "top": 74,
  "between": 75,
  "order": 76,
  "ordered": 76,
  "encode": 77,
  "equals": 78,
  "equal": 78,
  "bind": 79,
  "binding": 79,
  "bindings": 79,
  "assign": 80,
  "assigning": 80,
  "assigns": 80,
  "into": 81,
  "turn": 82,
  "turning": 82,
  "right": 83,
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
  "lowest": 94,
  "anomaly": 95,
  "anomalies": 95,
  "delete": 96,
  "del": 96,
  "set": 97,
  "sets": 97,
  "settings": 97,
  "larger": 98,
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
  "sort": 121,
  "sorted": 121,
  "horizontally": 122,
  "expand": 123,
  "expanded": 123,
  "stretch": 124,
  "stretched": 124,
  "enlarge": 125,
  "enlarged": 125,
  "category": 126,
  "categories": 126,
  "negative": 127,
  "negatives": 127,
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
  "smallest": 155,
  "so": 156,
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
  "ascending": 216,
  "asc": 216,
  "labels": 217,
  "label": 217,
  "labeled": 217,
  "labelled": 217,
  "which": 218,
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
  "high": 228,
  "largest": 229,
  "replace": 230,
  "replaced": 230,
  "display": 231,
  "displayed": 231,
  "displaying": 231,
  "displays": 231,
  "axes": 232,
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
  "low": 244,
  "trendline": 245,
  "arrange": 246,
  "arranged": 246,
  "pattern": 247,
  "markers": 248,
  "marker": 248,
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
  "entries": 267,
  "entry": 267,
  "organize": 268,
  "organized": 268,
  "organise": 268,
  "insert": 269,
  "inserting": 269,
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
  "large": 297,
  "resize": 298,
  "lone": 299,
  "alone": 300,
  "rest": 301,
  "them": 302,
  "extreme": 303,
  "extremes": 303,
  "selling": 304,
  "sold": 304,
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
  "alphabetical": 370,
  "frame": 371,
  "framed": 371,
  "region": 372,
  "before": 373,
  "zoom": 374,
  "zoomed": 374,
  "longer": 375,
  "reference": 376,
  "references": 376,
  "section": 377,
  "sections": 377,
  "list": 378,
  "listed": 378,
  "form": 379,
  "formed": 379,
  "thin": 380,
  "thinned": 380,
  "re": 381,
  "margins": 382,
  "margin": 382,
  "frequency": 383,
  "frequencies": 383,
  "available": 384,
  "shadow": 385,
  "shadowed": 385,
  "unit": 386,
  "units": 386,
  "paint": 387,
  "painted": 387,
  "\"": 388,
  "truncate": 389,
  "thicker": 390,
  "after": 391,
  "break": 392,
  "broken": 392,
  "extend": 393,
  "extending": 393,
  "histogram": 394,
  "who": 395,
  "degrees": 396,
  "degree": 396,
  "based": 397,
  "last": 398,
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
  "alphabetically": 480,
  "clockwise": 481,
  "outside": 482,
  "write": 483,
  "both": 484,
  "past": 485,
  "divide": 486,
  "code": 487,
  "coded": 487,
  "coding": 487,
  "later": 488,
  "thick": 489,
  "charge": 490,
  "charges": 490,
  "wide": 491,
  "pinch": 492,
  "losing": 493,
  "calculate": 494,
  "reset": 495,
  "provided": 496,
  "provide": 496,
  "exclude": 497,
  "excluding": 497,
  "away": 498,
  "till": 499,
  "just": 500,
  "another": 501,
  "company": 502,
  "companies": 502,
  "symbols": 503,
  "symbol": 503,
  "abbreviation": 504,
  "colorful": 505,
  "differentiate": 506,
  "categorical": 507,
  "user": 508,
  "users": 508,
  "earlier": 509,
  "level": 510,
  "levels": 510,
  "b": 511,
  "save": 512,
  "elements": 513,
  "element": 513,
  "repeat": 514,
  "style": 515,
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/free",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape/shape/3",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose/perm",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/axes",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/2",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_1/shape/3",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_1/perm",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/mul/y",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_FLOAT"
          },
          "value": {
            "tensor": {
              "dtype": "DT_FLOAT",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/2",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_2/shape/3",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/transpose_2/perm",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/axes",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/axes",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape/shape/1",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/axes",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2_1/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Const_1",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/3",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_1/perm",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice_1/stack_2",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/3",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/transpose_2/perm",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice_1/stack",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice/stack_1",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/strided_slice/stack_2",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/moments/variance/reduction_indices",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const_2",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/concat_1/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_5/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/mean/reduction_indices",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization_1/moments/variance/reduction_indices",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3/shape/2",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/free",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
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
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2/axis",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
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
          "dtype": {
            "type": "DT_INT32"
          },
          "value": {
            "tensor": {
              "dtype": "DT_INT32",
              "tensorShape": {}
            }
          }
        }
      },
      {
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/BiasAdd/ReadVariableOp",
        "op": "Const",
        "attr": {
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "dtype": {
            "type": "DT_INT32"
          },
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
          "T": {
            "type": "DT_INT32"
          },
          "incompatible_shape_error": {
            "b": true
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_FLOAT"
          },
          "batch_dims": {
            "i": "0"
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
          "Truncate": {
            "b": false
          },
          "SrcT": {
            "type": "DT_BOOL"
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
          "new_axis_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
          },
          "end_mask": {
            "i": "0"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
          "begin_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "ellipsis_mask": {
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
          "Index": {
            "type": "DT_INT32"
          },
          "begin_mask": {
            "i": "9"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "end_mask": {
            "i": "9"
          },
          "new_axis_mask": {
            "i": "6"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "shrink_axis_mask": {
            "i": "0"
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
          "ellipsis_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "begin_mask": {
            "i": "7"
          },
          "end_mask": {
            "i": "5"
          },
          "shrink_axis_mask": {
            "i": "0"
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Taxis": {
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
          "shrink_axis_mask": {
            "i": "1"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "begin_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "0"
          },
          "new_axis_mask": {
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
            "type": "DT_INT32"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          },
          "Tidx": {
            "type": "DT_INT32"
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
          "N": {
            "i": "4"
          },
          "axis": {
            "i": "0"
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
          "N": {
            "i": "4"
          },
          "axis": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
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
          "N": {
            "i": "3"
          },
          "axis": {
            "i": "0"
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
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
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
          "N": {
            "i": "2"
          },
          "axis": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "transpose_a": {
            "b": false
          },
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
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
          "transpose_a": {
            "b": false
          },
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
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
          "transpose_a": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_b": {
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "Tperm": {
            "type": "DT_INT32"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "adj_y": {
            "b": true
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Index": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
          "end_mask": {
            "i": "0"
          },
          "begin_mask": {
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
          "Truncate": {
            "b": false
          },
          "DstT": {
            "type": "DT_FLOAT"
          },
          "SrcT": {
            "type": "DT_INT32"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "adj_y": {
            "b": false
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          },
          "Tidx": {
            "type": "DT_INT32"
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
          "N": {
            "i": "2"
          },
          "axis": {
            "i": "0"
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
          "transpose_a": {
            "b": false
          },
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": true
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Tindices": {
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "Tindices": {
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
          },
          "Tidx": {
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
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
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
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
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
          "transpose_a": {
            "b": false
          },
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "keep_dims": {
            "b": true
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "Tindices": {
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
          "batch_dims": {
            "i": "0"
          },
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "Tindices": {
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Tindices": {
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
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
          "ellipsis_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "begin_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "0"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "shrink_axis_mask": {
            "i": "1"
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
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
          },
          "Tidx": {
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "N": {
            "i": "2"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Const_1"
        ],
        "attr": {
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          },
          "Tidx": {
            "type": "DT_INT32"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
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
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "4"
          },
          "T": {
            "type": "DT_INT32"
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
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "4"
          },
          "T": {
            "type": "DT_INT32"
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
          "N": {
            "i": "4"
          },
          "axis": {
            "i": "0"
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
          "axis": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
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
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
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
          "axis": {
            "i": "0"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Prod_1"
        ],
        "attr": {
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          },
          "transpose_b": {
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
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          },
          "transpose_b": {
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "Tperm": {
            "type": "DT_INT32"
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
          "adj_y": {
            "b": true
          },
          "adj_x": {
            "b": false
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
          "shrink_axis_mask": {
            "i": "1"
          },
          "end_mask": {
            "i": "0"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "begin_mask": {
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
          "DstT": {
            "type": "DT_FLOAT"
          },
          "Truncate": {
            "b": false
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
          "adj_y": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "adj_x": {
            "b": false
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Tindices": {
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
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
          "transpose_a": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "keep_dims": {
            "b": true
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
          },
          "Taxis": {
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
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
          "axis": {
            "i": "0"
          },
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
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
          "transpose_a": {
            "b": false
          },
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "batch_dims": {
            "i": "0"
          },
          "Taxis": {
            "type": "DT_INT32"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Taxis": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "N": {
            "i": "2"
          },
          "Tidx": {
            "type": "DT_INT32"
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
          "N": {
            "i": "2"
          },
          "T": {
            "type": "DT_INT32"
          },
          "axis": {
            "i": "0"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_a": {
            "b": false
          },
          "transpose_b": {
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "keep_dims": {
            "b": true
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "batch_dims": {
            "i": "0"
          },
          "Taxis": {
            "type": "DT_INT32"
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
          "num_args": {
            "i": "1"
          },
          "transpose_a": {
            "b": false
          },
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
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
          "output_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "Tidx": {
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_b": {
            "b": false
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "output_type": {
            "type": "DT_INT32"
          },
          "Tidx": {
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
  model_data: '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'
};