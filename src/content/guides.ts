import type { SiteLocale } from '@/lib/site';

export type GuideCopy = {
  title: string; metaTitle: string; description: string; subtitle: string; lead: string;
  tips: string[]; highlights: { title: string; text: string }[]; facts: string[][];
  hours?: string; admission?: string[][]; admissionNote?: string;
  sections: { heading: string; paragraphs: string[]; sources?: string[] }[];
  route: string[]; notices: string[]; faq: string[][]; address: string;
};
type Guide = { mapQuery: string; sources: string[]; en: GuideCopy; zh: GuideCopy };
export const guideSources: Record<string, { title: string; url: string }> = {
  "church": {
    "title": "Cluj Tourism — Saint Michael Roman-Catholic Church",
    "url": "https://clujtourism.ro/en/portfolio/sfantul-mihail-saint-michael-roman-catholic-church/"
  },
  "palace": {
    "title": "Muzeul de Artă Cluj-Napoca — Palatul Bánffy",
    "url": "https://www.macluj.ro/palatul-banffy"
  },
  "gallery": {
    "title": "Muzeul de Artă Cluj-Napoca — Galeria Națională",
    "url": "https://www.macluj.ro/galeria-de-arta-nationala"
  },
  "hours": {
    "title": "Muzeul de Artă Cluj-Napoca — Program de vizitare",
    "url": "https://www.macluj.ro/program-de-vizitare"
  },
  "tickets": {
    "title": "Muzeul de Artă Cluj-Napoca — Acces",
    "url": "https://www.macluj.ro/acces"
  },
  "obelisk": {
    "title": "Cluj Tourism — Carolina Obelisk",
    "url": "https://clujtourism.ro/en/portfolio/carolina-obelisk-piata-muzeului-museum-square/"
  },
  "franciscan": {
    "title": "Cluj Tourism — Church of Franciscan Monastery",
    "url": "https://clujtourism.ro/en/portfolio/church-of-franciscan-monastery/"
  }
};
export const guides: Record<string, Guide> = {
  "st-michaels-church": {
    "mapQuery": "Saint Michael Roman Catholic Church, Piața Unirii, Cluj-Napoca, Romania",
    "sources": [
      "church"
    ],
    "en": {
      "title": "St Michael’s Church in Cluj-Napoca",
      "metaTitle": "St Michael’s Church, Cluj-Napoca | Architecture & Visit Guide",
      "description": "Understand the Gothic church in Piața Unirii, its later tower and Renaissance details, and how to separate a church visit from a stop in the square.",
      "subtitle": "Read the church’s different architectural layers before planning an interior visit.",
      "lead": "St Michael’s Roman Catholic Church, also listed as Sfântul Mihail, is the church in Piața Unirii. Its architecture rewards a closer look than the skyline alone: the main building, tower and interior belong to different phases. This guide focuses on those distinctions and on planning a respectful visit.",
      "tips": [
        "Begin with the exterior. An open public square does not guarantee access to the church, its tower or other interior spaces.",
        "If you hope to enter, check the church’s notices for visitor arrangements and services first. Leave room in your plan to return another time.",
        "Use the full name and Cluj-Napoca when searching maps; several Romanian cities have a Union Square."
      ],
      "highlights": [
        {
          "title": "Gothic main building",
          "text": "Cluj Tourism identifies the church as a major Gothic monument, with origins in the city’s 14th-century development."
        },
        {
          "title": "A later tower",
          "text": "The tourism listing describes the tower as neo-Gothic. Compare its vertical profile with the older main body."
        },
        {
          "title": "Details from other periods",
          "text": "The sacristy doorway is dated 1528 and described as late Renaissance; parts of the interior were later reworked in Baroque style."
        }
      ],
      "facts": [
        [
          "Local name",
          "Biserica Romano-Catolică Sfântul Mihail"
        ],
        [
          "Setting",
          "Piața Unirii, Cluj-Napoca"
        ],
        [
          "Type",
          "Roman Catholic church and historic monument"
        ],
        [
          "Visitor access",
          "Check on-site church notices; square access is separate"
        ]
      ],
      "sections": [
        {
          "heading": "Why the setting matters",
          "paragraphs": [
            "The county tourism account connects the church’s construction with privileges granted to medieval Cluj, including the right to choose its priest. It places the new church in the Great Square, on the site of an earlier chapel. This helps explain why the building is central to the story of the civic square as well as to religious life."
          ],
          "sources": [
            "church"
          ]
        },
        {
          "heading": "How to look without assuming access",
          "paragraphs": [
            "From the square, make an overall view before concentrating on individual architectural details. Treat the exterior and interior as separate parts of your plan. A feature described in a heritage listing may be inside a restricted space; the mention of a sacristy doorway is not an invitation to enter the sacristy.",
            "If the interior is open for visitors, follow the posted route and photography instructions. Avoid walking into a service to complete a sightseeing checklist. These are visit-planning suggestions rather than a published church timetable."
          ]
        }
      ],
      "route": [
        "Locate the church on the Piața Unirii map and observe its overall silhouette from a public area.",
        "Compare the main building and the tower, using the architectural distinctions above.",
        "Read the current entrance notices before deciding whether an interior visit is possible.",
        "Return to the square guide or choose the separately managed Art Museum as your next stop."
      ],
      "notices": [
        "A current interior timetable, tower-access arrangement and admission price were not confirmed in the sources checked. Do not apply the square’s 24-hour Maps listing to this church.",
        "Allow space for worshippers and follow the church’s own instructions. Ask before photographing people."
      ],
      "faq": [
        [
          "Is this the church in Unirii Square?",
          "Yes. The county tourism listing locates Saint Michael’s Roman Catholic Church in Union Square, Cluj-Napoca."
        ],
        [
          "Does visiting the square include the church or tower?",
          "No access arrangement is implied by a stop in the square. Check church notices separately before planning an interior or tower visit."
        ]
      ],
      "address": "Piața Unirii, Cluj-Napoca, Romania"
    },
    "zh": {
      "title": "克卢日圣米迦勒教堂",
      "metaTitle": "克卢日圣米迦勒教堂｜建筑看点与参观安排",
      "description": "认识联合广场上的圣米迦勒教堂，区分哥特式主体、后期钟楼与文艺复兴细节，了解如何安排尊重礼拜的参观。",
      "subtitle": "先读懂不同年代的建筑，再决定是否进入教堂。",
      "lead": "圣米迦勒罗马天主教堂（Sfântul Mihail）坐落在克卢日联合广场。它的看点不只是远处可见的轮廓：主体、钟楼与内部装饰经历了不同阶段。本页帮助你辨认这些层次，并将教堂参观与广场停留分别安排。",
      "tips": [
        "可以先看外观。公共广场开放，不代表教堂内部、钟楼或其他房间也开放。",
        "想进入教堂时，先查看入口的参观与礼拜告示，并给行程保留改日再来的余地。",
        "地图搜索请同时输入教堂全名与 Cluj-Napoca，避免混淆其他城市同名的联合广场。"
      ],
      "highlights": [
        {
          "title": "哥特式主体",
          "text": "Cluj Tourism 将它列为重要哥特式古迹，建造背景与14世纪城市发展有关。"
        },
        {
          "title": "后期钟楼",
          "text": "旅游机构将钟楼描述为新哥特式，可比较钟楼与较早主体的轮廓。"
        },
        {
          "title": "不同年代的装饰",
          "text": "圣器室门框被记为1528年的晚期文艺复兴作品，部分室内曾以巴洛克风格改修。"
        }
      ],
      "facts": [
        [
          "当地名称",
          "Biserica Romano-Catolică Sfântul Mihail"
        ],
        [
          "位置",
          "克卢日联合广场 Piața Unirii"
        ],
        [
          "性质",
          "罗马天主教堂与历史古迹"
        ],
        [
          "参观安排",
          "以教堂现场告示为准，与广场开放分开确认"
        ]
      ],
      "sections": [
        {
          "heading": "为什么教堂位于城市故事的中心",
          "paragraphs": [
            "郡旅游机构把教堂兴建与中世纪克卢日获得的城市特权联系起来，其中包括自由选择神父的权利。新教堂选在当时的大广场、较早小礼拜堂所在之处。因此，理解这座建筑也能帮助理解广场的市民生活与宗教历史。"
          ],
          "sources": [
            "church"
          ]
        },
        {
          "heading": "如何看建筑，同时尊重使用空间",
          "paragraphs": [
            "先在广场公共区域看整体，再留意不同部分的建筑语言。外观欣赏与内部参观应当分开计划；遗产介绍提到的细节可能位于限制进入的区域，介绍圣器室门框，并不表示可以自行进入圣器室。",
            "如果允许游客进入，请遵守现场参观路线和拍照要求。不要为了完成景点清单而打扰礼拜。这些是参观建议，并非教堂公布的开放时刻表。"
          ]
        }
      ],
      "route": [
        "在联合广场地图上定位教堂，从公共区域观察整体轮廓。",
        "结合上述建筑线索，比较主体与钟楼。",
        "阅读入口最新告示，再决定是否安排内部参观。",
        "回到广场指南，或另行安排艺术博物馆。"
      ],
      "notices": [
        "本次核对的来源未确认现行室内时段、登塔安排或门票；不能把广场的 Maps 24小时标注套用于教堂。",
        "为礼拜者留出空间，服从教堂自身要求，拍摄人物前先征求同意。"
      ],
      "faq": [
        [
          "这是联合广场上的教堂吗？",
          "是。郡旅游机构把圣米迦勒罗马天主教堂的位置标在克卢日联合广场。"
        ],
        [
          "游览广场就能进入教堂或钟楼吗？",
          "广场停留不包含任何教堂或钟楼的进入承诺，相关安排请单独查看教堂告示。"
        ]
      ],
      "address": "Piața Unirii, Cluj-Napoca, Romania"
    }
  },
  "banffy-palace-art-museum": {
    "mapQuery": "Muzeul de Artă Cluj-Napoca, Piața Unirii, Romania",
    "sources": [
      "palace",
      "gallery",
      "hours",
      "tickets"
    ],
    "en": {
      "title": "Bánffy Palace & Cluj-Napoca Art Museum",
      "metaTitle": "Bánffy Palace Art Museum | Hours, Tickets & What to See",
      "description": "Plan a visit to Cluj-Napoca Art Museum in Bánffy Palace: Baroque architecture, the National Gallery, official hours and ticket options checked 10 November 2026.",
      "subtitle": "A Baroque residence and an art collection: plan for both parts of the visit.",
      "lead": "Bánffy Palace is the home of Muzeul de Artă Cluj-Napoca. It is a separate destination from the public square outside. Choose whether you want to study the building’s exterior, see the permanent National Gallery, visit a temporary exhibition, or combine them; that choice affects your ticket and timing.",
      "tips": [
        "Check the current exhibition list before choosing a ticket. A permanent-gallery ticket and a temporary-exhibition ticket cover different visits.",
        "Use the last-entry time, not just the closing time, when planning your arrival.",
        "Keep the museum’s own tariff and visit-information pages available; holiday or exhibition arrangements can change."
      ],
      "highlights": [
        {
          "title": "Palace architecture",
          "text": "The museum dates the residence to 1774–1785 and names architect Johann Eberhard Blaumann. It describes four wings around an interior courtyard."
        },
        {
          "title": "The National Gallery",
          "text": "The permanent exhibition follows painting and sculpture across the 16th–20th centuries, with particular attention to Transylvania."
        },
        {
          "title": "Changing exhibitions",
          "text": "Temporary exhibitions are a separate ticket option. Consult the museum’s current programme rather than assuming a particular show is still running."
        }
      ],
      "facts": [
        [
          "Museum",
          "Muzeul de Artă Cluj-Napoca"
        ],
        [
          "Building",
          "Palatul Bánffy / Bánffy Palace"
        ],
        [
          "Location",
          "Piața Unirii, Cluj-Napoca"
        ],
        [
          "Checked",
          "10 November 2026"
        ]
      ],
      "hours": "The official visit page lists Wednesday–Sunday, 10:00–17:00; last entry to exhibition spaces is 16:30. Monday and Tuesday are not listed as visiting days. Recheck the museum’s notices before travelling.",
      "admission": [
        [
          "Permanent exhibition",
          "16 lei"
        ],
        [
          "Temporary exhibition",
          "12 lei"
        ],
        [
          "Three exhibitions, including the permanent exhibition",
          "28 lei"
        ]
      ],
      "admissionNote": "These are the standard exhibition tariffs on the museum’s access page, checked 10 November 2026. Reductions and exemptions have eligibility conditions; consult the full tariff. Tickets concern exhibitions, not a charge to enter Unirii Square.",
      "sections": [
        {
          "heading": "Look at the palace as a building",
          "paragraphs": [
            "The museum’s palace history describes a former private residence whose uses changed over time before it became the museum’s home. Its facade includes the Bánffy family arms and mythological sculpture. Looking for the central composition and repeated facade elements is a useful way to begin before moving to the art collection."
          ],
          "sources": [
            "palace"
          ]
        },
        {
          "heading": "Choose the collection you want to see",
          "paragraphs": [
            "The National Gallery is the permanent exhibition, arranged as a chronological and stylistic journey. The museum describes a focus on Transylvania within a wider account of Romanian art. If that is your main interest, start with the gallery description rather than choosing solely from a poster for a temporary show.",
            "For a combined visit, decide which exhibition matters most before paying. Leave time to read labels and revisit a room instead of treating every available exhibition as compulsory."
          ],
          "sources": [
            "gallery"
          ]
        }
      ],
      "route": [
        "View the palace exterior from the square and identify the museum entrance.",
        "Read the day’s exhibition information and choose the appropriate ticket.",
        "Visit your priority exhibition first, respecting staff instructions.",
        "Return to the square for St Michael’s Church or continue with the Museum Square guide."
      ],
      "notices": [
        "Photography and filming have separate conditions and may involve charges. Check the museum’s access page and staff instructions before using a camera, flash or tripod.",
        "A description of the courtyard or historic rooms does not guarantee unrestricted access to every part of the palace."
      ],
      "faq": [
        [
          "Is the Art Museum in Jósika Palace?",
          "No. The museum’s own website identifies its building as Bánffy Palace."
        ],
        [
          "Can I arrive at 16:45?",
          "The published last entry to exhibition spaces is 16:30, earlier than the 17:00 closing time. Recheck any special arrangements directly with the museum."
        ]
      ],
      "address": "Muzeul de Artă Cluj-Napoca, Piața Unirii, Cluj-Napoca, Romania"
    },
    "zh": {
      "title": "班菲宫与克卢日艺术博物馆",
      "metaTitle": "班菲宫艺术博物馆｜开放时间、门票与参观重点",
      "description": "规划联合广场班菲宫艺术博物馆：巴洛克建筑、常设国家画廊，以及2026年11月10日核对的官方开放时间和票价。",
      "subtitle": "把巴洛克宫殿与艺术收藏分别看，也一起理解。",
      "lead": "班菲宫（Bánffy Palace）现为克卢日艺术博物馆 Muzeul de Artă Cluj-Napoca 的馆舍，与外面的公共广场分别管理。先决定要看宫殿外观、常设国家画廊、临时展览，还是组合参观，再安排门票与到达时间。",
      "tips": [
        "买票前看当期展览列表，常设展票与临展票对应不同参观内容。",
        "安排到达时间时看最晚入场，而不只看闭馆时刻。",
        "保存博物馆官网票价与参观信息入口，节假日或特展安排可能变化。"
      ],
      "highlights": [
        {
          "title": "宫殿建筑",
          "text": "馆方将这座私人宅邸的兴建记为1774–1785年，建筑师为 Johann Eberhard Blaumann，并介绍其四翼围合内院的布局。"
        },
        {
          "title": "国家画廊",
          "text": "常设展以绘画与雕塑串联16至20世纪，特别关注特兰西瓦尼亚艺术。"
        },
        {
          "title": "临时展览",
          "text": "临展属于另一种购票选项，具体内容应查最新展讯，不能假设旧展仍在展出。"
        }
      ],
      "facts": [
        [
          "博物馆名称",
          "Muzeul de Artă Cluj-Napoca"
        ],
        [
          "馆舍",
          "Palatul Bánffy / 班菲宫"
        ],
        [
          "位置",
          "克卢日联合广场 Piața Unirii"
        ],
        [
          "信息核对",
          "2026年11月10日"
        ]
      ],
      "hours": "官方参观页列出周三至周日10:00–17:00，展厅最晚16:30入场；周一、周二未列为参观日。出发前请再次查看馆方临时公告。",
      "admission": [
        [
          "常设展",
          "16 lei"
        ],
        [
          "临时展览",
          "12 lei"
        ],
        [
          "含常设展的三展组合",
          "28 lei"
        ]
      ],
      "admissionNote": "以上为2026年11月10日核对的官网标准展览票价。折扣与免费入场有资格条件，请查完整票价说明。门票针对馆内展览，并非联合广场的入场费。",
      "sections": [
        {
          "heading": "先把宫殿当成一座建筑看",
          "paragraphs": [
            "馆方宫殿史介绍了它从私人宅邸到多种用途、再成为博物馆馆舍的经历。正立面可留意班菲家徽与神话人物雕塑。先观察中央构图与重复的立面元素，再转向馆藏，可以把建筑本身也纳入参观重点。"
          ],
          "sources": [
            "palace"
          ]
        },
        {
          "heading": "按兴趣选择展览",
          "paragraphs": [
            "国家画廊是常设展，按年代与风格组织作品；馆方说明在罗马尼亚艺术脉络中突出特兰西瓦尼亚。如果这是你的主要兴趣，先读画廊介绍，不必只根据临展海报决定。",
            "想组合参观时，先选出最想看的展览，再确认票种。给阅读展签和重新看一间展厅留时间，不必把所有展览都当成必须完成的项目。"
          ],
          "sources": [
            "gallery"
          ]
        }
      ],
      "route": [
        "在广场公共区域观察宫殿外观，辨认博物馆入口。",
        "阅读当天展览信息，选择相应票种。",
        "先看最感兴趣的展览，遵守工作人员指引。",
        "回到广场继续看圣米迦勒教堂，或阅读博物馆广场专题。"
      ],
      "notices": [
        "摄影、录像有独立规定且可能收费，使用相机、闪光灯或脚架前请看官网访问说明并询问工作人员。",
        "宫殿资料介绍的内院与历史房间，并不保证每一处都允许自由进入。"
      ],
      "faq": [
        [
          "艺术博物馆在约西卡宫吗？",
          "不是。博物馆官网将其馆舍明确记为班菲宫 Bánffy Palace。"
        ],
        [
          "16:45到馆还来得及吗？",
          "官网列出的展厅最晚入场为16:30，早于17:00闭馆；如有特殊安排，请直接向馆方确认。"
        ]
      ],
      "address": "Muzeul de Artă Cluj-Napoca, Piața Unirii, Cluj-Napoca, Romania"
    }
  },
  "museum-square-carolina-obelisk": {
    "mapQuery": "Obeliscul Carolina, Piața Muzeului, Cluj-Napoca, Romania",
    "sources": [
      "obelisk",
      "franciscan"
    ],
    "en": {
      "title": "Museum Square & the Carolina Obelisk",
      "metaTitle": "Museum Square & Carolina Obelisk | Cluj Old Town Guide",
      "description": "Explore Piața Muzeului through the Carolina Obelisk’s link to Unirii Square, its carved details and the Franciscan church’s different architectural history.",
      "subtitle": "Follow a relocated monument to understand another chapter of Cluj’s civic centre.",
      "lead": "Museum Square, Piața Muzeului, offers a different focus from Unirii Square: an older civic setting, a commemorative obelisk and the Franciscan church. The useful connection is historical, not simply a list of nearby photo stops. The Carolina Obelisk once stood in today’s Unirii Square.",
      "tips": [
        "Search for Piața Muzeului or Obeliscul Carolina in Cluj-Napoca; this is a different square from Piața Unirii.",
        "Use the outdoor monuments as the core of this stop. Treat any church or museum interior as a separate visit.",
        "Check the current map route and conditions on the day. This guide does not promise a walking time or a step-free route."
      ],
      "highlights": [
        {
          "title": "A monument with two settings",
          "text": "Cluj Tourism links the obelisk to the imperial visit of Francis I and Carolina in 1817 and records its move to Museum Square in 1898."
        },
        {
          "title": "Carved stories",
          "text": "Look for the city arms, scenes of the visit and the Latin inscription described in the tourism listing, rather than viewing only the column’s silhouette."
        },
        {
          "title": "A different church",
          "text": "The Franciscan church’s present Baroque form belongs to its 1728–1745 rebuilding. It offers a useful contrast with St Michael’s Gothic architecture."
        }
      ],
      "facts": [
        [
          "Square",
          "Piața Muzeului / Museum Square"
        ],
        [
          "Monument",
          "Obeliscul Carolina / Carolina Obelisk"
        ],
        [
          "City",
          "Cluj-Napoca, Romania"
        ],
        [
          "Focus",
          "Outdoor civic history; interiors have separate arrangements"
        ]
      ],
      "sections": [
        {
          "heading": "Why the obelisk connects the two squares",
          "paragraphs": [
            "The county tourism account explains that the monument commemorated the imperial family’s 1817 visit and was originally erected in the city’s main square, now Unirii Square. It has stood in Museum Square since 1898. The same account describes Museum Square as the town’s main square from Roman times until the 14th century.",
            "For a visitor, that relocation is a useful question to take between the two places: a monument’s present surroundings are not necessarily its original setting. Compare what you see today without assuming every element has always stood in the same spot."
          ],
          "sources": [
            "obelisk"
          ]
        },
        {
          "heading": "Read the surrounding religious history",
          "paragraphs": [
            "The Franciscan church’s tourism entry describes earlier Dominican use of the site and later changes of denomination before the Franciscan rebuilding. Its Baroque appearance therefore sits within a longer story than the facade alone suggests.",
            "If you add a church visit, check its own entrance notices. Seeing the square does not establish a right to enter the monastery or rooms mentioned in a heritage account. A quiet exterior stop is still a complete option when an interior is unavailable."
          ],
          "sources": [
            "franciscan"
          ]
        }
      ],
      "route": [
        "Find Museum Square on the map, confirming the Romanian place name.",
        "Observe the obelisk from a public area and look for its carved narrative details.",
        "Compare the surrounding church exterior with St Michael’s, using their different histories as context.",
        "Choose whether to return to Unirii Square or arrange a separately confirmed interior visit."
      ],
      "notices": [
        "Events, maintenance or local works can affect where you can stand. Follow barriers and posted instructions; do not climb the monument for a closer photograph.",
        "No current opening schedule or admission arrangement for nearby interiors was established for this guide. Do not infer those arrangements from an outdoor square visit."
      ],
      "faq": [
        [
          "Is Museum Square another name for Unirii Square?",
          "No. These are separate squares. The Carolina Obelisk’s relocation is one historical link between them."
        ],
        [
          "What should I look for on the obelisk?",
          "The official tourism description identifies the city arms, imperial-visit scenes and a Latin inscription. Observe from permitted public space without touching or climbing the stonework."
        ]
      ],
      "address": "Piața Muzeului, Cluj-Napoca, Romania"
    },
    "zh": {
      "title": "博物馆广场与卡罗琳娜方尖碑",
      "metaTitle": "克卢日博物馆广场与卡罗琳娜方尖碑｜老城历史指南",
      "description": "通过卡罗琳娜方尖碑从联合广场迁来的历史、石雕细节与方济各会教堂，认识克卢日博物馆广场。",
      "subtitle": "沿着一座迁移的纪念碑，读另一段城市中心历史。",
      "lead": "博物馆广场 Piața Muzeului 的重点与联合广场不同：较早的市民空间、纪念方尖碑，以及方济各会教堂。两处的联系不只是“附近还能拍什么”，卡罗琳娜方尖碑曾经就在今天的联合广场。",
      "tips": [
        "地图搜索请用 Cluj-Napoca 的 Piața Muzeului 或 Obeliscul Carolina，这里与 Piața Unirii 是不同广场。",
        "把户外纪念物作为这一站的核心，教堂或博物馆内部另行安排。",
        "当天确认实际步行路线与路况，本页不承诺步行分钟数或全程无台阶。"
      ],
      "highlights": [
        {
          "title": "经历两个广场的纪念碑",
          "text": "Cluj Tourism 将方尖碑与1817年弗朗茨一世和卡罗琳娜的来访联系起来，并记载1898年迁至博物馆广场。"
        },
        {
          "title": "石雕上的故事",
          "text": "除了柱形轮廓，也可找旅游介绍提及的城市纹章、来访场景浮雕和拉丁铭文。"
        },
        {
          "title": "另一种教堂建筑",
          "text": "方济各会教堂现有巴洛克形态来自1728–1745年的重建，可与圣米迦勒教堂的哥特式建筑对照。"
        }
      ],
      "facts": [
        [
          "广场",
          "Piața Muzeului / 博物馆广场"
        ],
        [
          "纪念碑",
          "Obeliscul Carolina / 卡罗琳娜方尖碑"
        ],
        [
          "城市",
          "罗马尼亚克卢日-纳波卡"
        ],
        [
          "参观重点",
          "户外城市历史，室内空间另有安排"
        ]
      ],
      "sections": [
        {
          "heading": "方尖碑为何连接两处广场",
          "paragraphs": [
            "郡旅游机构记载，纪念碑为纪念皇室1817年来访而建，最初位于当时的城市主广场，也就是今天的联合广场；1898年起位于博物馆广场。同一介绍将博物馆广场描述为从罗马时期至14世纪的城市主广场。",
            "对游客来说，迁移本身就是一个值得带着走的问题：纪念物如今的环境未必是原来的环境。比较两处当下所见时，不必假设每个元素一直处于同一位置。"
          ],
          "sources": [
            "obelisk"
          ]
        },
        {
          "heading": "读懂周围教堂的历史层次",
          "paragraphs": [
            "方济各会教堂的旅游介绍提到此前的多明我会使用阶段，以及后来宗派变化与方济各会重建。因此，今天的巴洛克外观只是更长历史中的一个阶段。",
            "若想加上教堂参观，请看该处入口的最新告示。游览广场不表示可以进入修道院或遗产介绍提到的房间。室内暂不开放时，安静欣赏外观仍是一种完整的停留方式。"
          ],
          "sources": [
            "franciscan"
          ]
        }
      ],
      "route": [
        "在地图上确认博物馆广场及其罗马尼亚文名称。",
        "从公共区域观察方尖碑，寻找石雕叙事细节。",
        "结合不同的历史，比较周围教堂外观与圣米迦勒教堂。",
        "按当天情况返回联合广场，或另行确认一处室内参观。"
      ],
      "notices": [
        "活动、维护或工程可能影响可以站立的位置，请服从围挡与现场告示，不要为了拍照攀爬纪念碑。",
        "本页未确认附近室内景点的现行时刻与门票，不能从户外广场游览推断室内安排。"
      ],
      "faq": [
        [
          "博物馆广场是联合广场的另一个名字吗？",
          "不是，两者是不同广场，卡罗琳娜方尖碑的迁移是它们的一条历史联系。"
        ],
        [
          "方尖碑上可以看什么？",
          "官方旅游介绍提到城市纹章、皇室来访场景与拉丁铭文，请从允许的公共区域观察，不要触摸或攀爬石雕。"
        ]
      ],
      "address": "Piața Muzeului, Cluj-Napoca, Romania"
    }
  }
};
export const guideSlugs = Object.keys(guides);
export function getGuide(slug: string, locale: SiteLocale) {
  const guide = Object.prototype.hasOwnProperty.call(guides, slug) ? guides[slug] : undefined;
  return guide ? { ...guide, copy: guide[locale] } : undefined;
}
