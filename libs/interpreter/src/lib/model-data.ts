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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/Reshape_1/shape/1",
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
          "dtype": {
            "type": "DT_FLOAT"
          },
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
          "batch_dims": {
            "i": "0"
          },
          "Tparams": {
            "type": "DT_FLOAT"
          },
          "Tindices": {
            "type": "DT_INT32"
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
          "shrink_axis_mask": {
            "i": "1"
          },
          "end_mask": {
            "i": "0"
          },
          "new_axis_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "begin_mask": {
            "i": "0"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
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
          "ellipsis_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "9"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "begin_mask": {
            "i": "9"
          },
          "new_axis_mask": {
            "i": "6"
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
          "N": {
            "i": "3"
          },
          "axis": {
            "i": "0"
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
          "new_axis_mask": {
            "i": "0"
          },
          "end_mask": {
            "i": "5"
          },
          "shrink_axis_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "7"
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
          "out_type": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense/Tensordot/GatherV2/axis"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2/axis"
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
          "shrink_axis_mask": {
            "i": "1"
          },
          "new_axis_mask": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Prod_1",
        "op": "Prod",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/GatherV2_1",
          "StatefulPartitionedCall/vistalk/transformer_block/multi_head_attention/dense_2/Tensordot/Const_1"
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "transpose_a": {
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
          "new_axis_mask": {
            "i": "0"
          },
          "begin_mask": {
            "i": "0"
          },
          "ellipsis_mask": {
            "i": "0"
          },
          "Index": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_INT32"
          },
          "end_mask": {
            "i": "0"
          },
          "shrink_axis_mask": {
            "i": "1"
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
          "Tidx": {
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
          "Tshape": {
            "type": "DT_INT32"
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "transpose_b": {
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "T": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
          "keep_dims": {
            "b": false
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
          "N": {
            "i": "2"
          },
          "axis": {
            "i": "0"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2_1/axis"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/GatherV2/axis"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2_1",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/axes",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_8/Tensordot/GatherV2_1/axis"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice",
        "op": "StridedSlice",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_1",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/strided_slice/stack_2"
        ],
        "attr": {
          "new_axis_mask": {
            "i": "0"
          },
          "T": {
            "type": "DT_INT32"
          },
          "shrink_axis_mask": {
            "i": "1"
          },
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/concat_1/axis"
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
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
          "keep_dims": {
            "b": false
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
          "N": {
            "i": "3"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_6/Tensordot/Prod_1"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/MatMul",
        "op": "MatMul",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/Reshape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_7/Tensordot/ReadVariableOp"
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
          "transpose_b": {
            "b": false
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
          "T": {
            "type": "DT_FLOAT"
          },
          "Tperm": {
            "type": "DT_INT32"
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
          "T": {
            "type": "DT_INT32"
          },
          "Index": {
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
          "ellipsis_mask": {
            "i": "0"
          },
          "new_axis_mask": {
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2/axis"
        ],
        "attr": {
          "Tparams": {
            "type": "DT_INT32"
          },
          "batch_dims": {
            "i": "0"
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
          "keep_dims": {
            "b": false
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/concat_1",
        "op": "ConcatV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/GatherV2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/Const_2",
          "StatefulPartitionedCall/vistalk/transformer_block_1/multi_head_attention_1/dense_9/Tensordot/concat_1/axis"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/free",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_10/Tensordot/GatherV2/axis"
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
          "Tparams": {
            "type": "DT_INT32"
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
        "name": "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/stack",
        "op": "Pack",
        "input": [
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Prod",
          "StatefulPartitionedCall/vistalk/transformer_block_1/sequential_1/dense_11/Tensordot/Prod_1"
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
          "keep_dims": {
            "b": true
          },
          "Tidx": {
            "type": "DT_INT32"
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
          "Tidx": {
            "type": "DT_INT32"
          },
          "keep_dims": {
            "b": false
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
        "name": "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2",
        "op": "GatherV2",
        "input": [
          "StatefulPartitionedCall/vistalk/tags/Tensordot/Shape",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/free",
          "StatefulPartitionedCall/vistalk/tags/Tensordot/GatherV2/axis"
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
          "transpose_a": {
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
          },
          "num_args": {
            "i": "1"
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
          "T": {
            "type": "DT_INT32"
          },
          "Tidx": {
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
          "data_format": {
            "s": "TkhXQw=="
          },
          "T": {
            "type": "DT_FLOAT"
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
          "Tidx": {
            "type": "DT_INT32"
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
  model_data: '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'
};