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
      },
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
                    "size": "44"
                  }
                ]
              }
            }
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice_1/stack_1",
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/mul/y",
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/BiasAdd/ReadVariableOp",
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/layer_normalization/batchnorm/mul/ReadVariableOp",
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_2",
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
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
          "DstT": {
            "type": "DT_FLOAT"
          },
          "SrcT": {
            "type": "DT_BOOL"
          },
          "Truncate": {
            "b": false
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
          "begin_mask": {
            "i": "0"
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
          "end_mask": {
            "i": "0"
          },
          "new_axis_mask": {
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
          "begin_mask": {
            "i": "9"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "shrink_axis_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "end_mask": {
            "i": "9"
          },
          "new_axis_mask": {
            "i": "6"
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
          "new_axis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "7"
          },
          "end_mask": {
            "i": "5"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "shrink_axis_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "batch_dims": {
            "i": "0"
          },
          "Tparams": {
            "type": "DT_INT32"
          },
          "Tindices": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_1/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2/axis"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice",
        "op": "StridedSlice",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice/stack_2"
        ],
        "attr": {
          "end_mask": {
            "i": "0"
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
          "new_axis_mask": {
            "i": "0"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
          "T": {
            "type": "DT_INT32"
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/2",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_2/shape/3"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/strided_slice",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape/1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_3/shape/2"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Prod_1"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/add",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/stack"
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
          "transpose_b": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "Tperm": {
            "type": "DT_INT32"
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
          "shrink_axis_mask": {
            "i": "1"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
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
          "DstT": {
            "type": "DT_FLOAT"
          },
          "Truncate": {
            "b": false
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
          "T": {
            "type": "DT_FLOAT"
          },
          "adj_x": {
            "b": false
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_3/Tensordot/GatherV2/axis"
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
          "transpose_a": {
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "Taxis": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const_1"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block/sequential/dense_4/Tensordot/concat_1/axis"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tparams": {
            "type": "DT_INT32"
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
          "Taxis": {
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
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": true
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Tindices": {
            "type": "DT_INT32"
          },
          "Tparams": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1/axis"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "batch_dims": {
            "i": "0"
          },
          "Taxis": {
            "type": "DT_INT32"
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
          "Tparams": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2/axis"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice",
        "op": "StridedSlice",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_2"
        ],
        "attr": {
          "shrink_axis_mask": {
            "i": "1"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
          },
          "Index": {
            "type": "DT_INT32"
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
          "T": {
            "type": "DT_INT32"
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
          "N": {
            "i": "2"
          },
          "T": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/concat_1/axis"
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
          "N": {
            "i": "4"
          },
          "axis": {
            "i": "0"
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
          "N": {
            "i": "3"
          },
          "T": {
            "type": "DT_INT32"
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
          "axis": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "transpose_a": {
            "b": false
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "adj_x": {
            "b": false
          },
          "adj_y": {
            "b": true
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "new_axis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
          },
          "end_mask": {
            "i": "0"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
          "Index": {
            "type": "DT_INT32"
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
          "Truncate": {
            "b": false
          },
          "SrcT": {
            "type": "DT_INT32"
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
          "adj_y": {
            "b": false
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Tindices": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const_1"
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
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Prod_1"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Reshape",
        "op": "Reshape",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Reshape_3",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/stack"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/ReadVariableOp"
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "batch_dims": {
            "i": "0"
          },
          "Tindices": {
            "type": "DT_INT32"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const_1"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/concat_1/axis"
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
          "N": {
            "i": "2"
          },
          "axis": {
            "i": "0"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tparams": {
            "type": "DT_INT32"
          },
          "Tindices": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const_1"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Prod",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Const"
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
          "N": {
            "i": "2"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "Tidx": {
            "type": "DT_INT32"
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
          "Taxis": {
            "type": "DT_INT32"
          },
          "Tparams": {
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
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/free",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2/axis"
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
          "epsilon": {
            "f": 0
          },
          "num_args": {
            "i": "1"
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
        "name": "StatefulPartitionedCall/intents",
        "op": "ArgMax",
        "input": [
          "StatefulPartitionedCall/vistalk/dense_12/BiasAdd",
          "StatefulPartitionedCall/intents/dimension"
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
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Prod_1"
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
          "output_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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