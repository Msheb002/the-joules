const engineeringQuestions = [
  // Questions will be added here
{
  id: 1,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Ohm's Law",
  difficulty: "Medium",

  questionEnglish:
    "A 24 V source is connected across an 8 Ω resistor. What current flows through the resistor?",

  questionArabic:
    "تم توصيل مصدر جهد مقداره 24 فولت بمقاومة مقدارها 8 أوم. ما قيمة التيار المار في المقاومة؟",

  options: [
    { english: "2 A", arabic: "2 أمبير" },
    { english: "3 A", arabic: "3 أمبير" },
    { english: "8 A", arabic: "8 أمبير" },
    { english: "192 A", arabic: "192 أمبير" }
  ],

  correctAnswer: 1
},

{
  id: 2,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Series Resistance",
  difficulty: "Medium",

  questionEnglish:
    "Three resistors of 4 Ω, 6 Ω, and 10 Ω are connected in series. What is their equivalent resistance?",

  questionArabic:
    "تم توصيل ثلاث مقاومات قيمها 4 أوم و6 أوم و10 أوم على التوالي. ما المقاومة المكافئة؟",

  options: [
    { english: "10 Ω", arabic: "10 أوم" },
    { english: "20 Ω", arabic: "20 أوم" },
    { english: "24 Ω", arabic: "24 أوم" },
    { english: "2.4 Ω", arabic: "2.4 أوم" }
  ],

  correctAnswer: 1
},

{
  id: 3,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Parallel Resistance",
  difficulty: "Medium",

  questionEnglish:
    "Two 12 Ω resistors are connected in parallel. What is their equivalent resistance?",

  questionArabic:
    "تم توصيل مقاومتين قيمة كل منهما 12 أوم على التوازي. ما المقاومة المكافئة؟",

  options: [
    { english: "24 Ω", arabic: "24 أوم" },
    { english: "12 Ω", arabic: "12 أوم" },
    { english: "6 Ω", arabic: "6 أوم" },
    { english: "3 Ω", arabic: "3 أوم" }
  ],

  correctAnswer: 2
},

{
  id: 4,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Kirchhoff's Current Law",
  difficulty: "Medium",

  questionEnglish:
    "At a node, 5 A and 3 A enter while 4 A leaves. What additional current must leave the node?",

  questionArabic:
    "عند عقدة يدخل تياران قيمتهما 5 أمبير و3 أمبير بينما يخرج تيار مقداره 4 أمبير. ما التيار الإضافي الذي يجب أن يخرج من العقدة؟",

  options: [
    { english: "2 A", arabic: "2 أمبير" },
    { english: "4 A", arabic: "4 أمبير" },
    { english: "8 A", arabic: "8 أمبير" },
    { english: "12 A", arabic: "12 أمبير" }
  ],

  correctAnswer: 1
},

{
  id: 5,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Power",
  difficulty: "Medium",

  questionEnglish:
    "A device operates at 120 V and draws 2.5 A. What electrical power does it consume?",

  questionArabic:
    "يعمل جهاز عند جهد 120 فولت ويسحب تياراً مقداره 2.5 أمبير. ما القدرة الكهربائية المستهلكة؟",

  options: [
    { english: "48 W", arabic: "48 واط" },
    { english: "122.5 W", arabic: "122.5 واط" },
    { english: "300 W", arabic: "300 واط" },
    { english: "600 W", arabic: "600 واط" }
  ],

  correctAnswer: 2
},

{
  id: 6,
  domain: "Electrical Engineering",
  course: "DC Circuits",
  topic: "Voltage Division",
  difficulty: "Medium",

  questionEnglish:
    "A 12 V source is applied across two series resistors of 2 kΩ and 4 kΩ. What voltage appears across the 4 kΩ resistor?",

  questionArabic:
    "تم تطبيق مصدر جهد 12 فولت على مقاومتين على التوالي قيمتهما 2 كيلوأوم و4 كيلوأوم. ما الجهد على المقاومة 4 كيلوأوم؟",

  options: [
    { english: "2 V", arabic: "2 فولت" },
    { english: "4 V", arabic: "4 فولت" },
    { english: "8 V", arabic: "8 فولت" },
    { english: "12 V", arabic: "12 فولت" }
  ],

  correctAnswer: 2
},

{
  id: 7,
  domain: "Electrical Engineering",
  course: "DC Circuits",
  topic: "Current Division",
  difficulty: "Medium",

  questionEnglish:
    "A total current of 6 A enters two identical parallel resistors. What current flows through each resistor?",

  questionArabic:
    "يدخل تيار كلي مقداره 6 أمبير إلى مقاومتين متماثلتين على التوازي. ما التيار المار في كل مقاومة؟",

  options: [
    { english: "1.5 A", arabic: "1.5 أمبير" },
    { english: "3 A", arabic: "3 أمبير" },
    { english: "6 A", arabic: "6 أمبير" },
    { english: "12 A", arabic: "12 أمبير" }
  ],

  correctAnswer: 1
},

{
  id: 8,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "RMS Voltage",
  difficulty: "Medium",

  questionEnglish:
    "A sinusoidal voltage has a peak value of 170 V. Its RMS value is approximately:",

  questionArabic:
    "لجهد جيبي قيمة عظمى مقدارها 170 فولت. ما قيمته الفعالة تقريباً؟",

  options: [
    { english: "85 V", arabic: "85 فولت" },
    { english: "120 V", arabic: "120 فولت" },
    { english: "170 V", arabic: "170 فولت" },
    { english: "240 V", arabic: "240 فولت" }
  ],

  correctAnswer: 1
},

{
  id: 9,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Frequency and Period",
  difficulty: "Medium",

  questionEnglish:
    "What is the period of a 50 Hz sinusoidal waveform?",

  questionArabic:
    "ما الزمن الدوري لموجة جيبية ترددها 50 هرتز؟",

  options: [
    { english: "0.002 s", arabic: "0.002 ثانية" },
    { english: "0.02 s", arabic: "0.02 ثانية" },
    { english: "0.2 s", arabic: "0.2 ثانية" },
    { english: "50 s", arabic: "50 ثانية" }
  ],

  correctAnswer: 1
},

{
  id: 10,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Capacitive Reactance",
  difficulty: "Medium",

  questionEnglish:
    "If frequency increases while capacitance remains constant, capacitive reactance will:",

  questionArabic:
    "إذا زاد التردد مع ثبات السعة، فإن المفاعلة السعوية سوف:",

  options: [
    { english: "Increase", arabic: "تزداد" },
    { english: "Decrease", arabic: "تقل" },
    { english: "Remain unchanged", arabic: "تبقى ثابتة" },
    { english: "Become infinite", arabic: "تصبح لا نهائية" }
  ],

  correctAnswer: 1
},

{
  id: 11,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Inductive Reactance",
  difficulty: "Medium",

  questionEnglish:
    "If frequency doubles while inductance remains constant, inductive reactance will:",

  questionArabic:
    "إذا تضاعف التردد مع ثبات الحث، فإن المفاعلة الحثية سوف:",

  options: [
    { english: "Be halved", arabic: "تنخفض إلى النصف" },
    { english: "Remain unchanged", arabic: "تبقى ثابتة" },
    { english: "Double", arabic: "تتضاعف" },
    { english: "Become zero", arabic: "تصبح صفراً" }
  ],

  correctAnswer: 2
},

{
  id: 12,
  domain: "Electrical Engineering",
  course: "Electronics",
  topic: "Diodes",
  difficulty: "Medium",

  questionEnglish:
    "A silicon diode is forward biased. Its typical voltage drop is approximately:",

  questionArabic:
    "تم توصيل ثنائي سيليكون في حالة انحياز أمامي. ما هبوط الجهد النموذجي عليه تقريباً؟",

  options: [
    { english: "0 V", arabic: "0 فولت" },
    { english: "0.3 V", arabic: "0.3 فولت" },
    { english: "0.7 V", arabic: "0.7 فولت" },
    { english: "5 V", arabic: "5 فولت" }
  ],

  correctAnswer: 2
},

{
  id: 13,
  domain: "Electrical Engineering",
  course: "Electronics",
  topic: "Operational Amplifiers",
  difficulty: "Medium",

  questionEnglish:
    "For an ideal operational amplifier operating with negative feedback, the voltage difference between its two inputs is approximately:",

  questionArabic:
    "بالنسبة لمضخم تشغيلي مثالي يعمل بتغذية راجعة سالبة، فإن فرق الجهد بين مدخليه يكون تقريباً:",

  options: [
    { english: "Zero", arabic: "صفر" },
    { english: "Equal to the supply voltage", arabic: "مساوياً لجهد التغذية" },
    { english: "Infinite", arabic: "لا نهائياً" },
    { english: "Equal to the output voltage", arabic: "مساوياً لجهد الخرج" }
  ],

  correctAnswer: 0
},

{
  id: 14,
  domain: "Electrical Engineering",
  course: "Electronics",
  topic: "Transistors",
  difficulty: "Medium",

  questionEnglish:
    "A transistor used as a digital switch normally operates primarily in which two regions?",

  questionArabic:
    "عند استخدام الترانزستور كمفتاح رقمي، في أي منطقتين يعمل عادةً؟",

  options: [
    {
      english: "Active and reverse-active",
      arabic: "المنطقة الفعالة والفعالة العكسية"
    },
    {
      english: "Cutoff and saturation",
      arabic: "القطع والتشبع"
    },
    {
      english: "Breakdown and active",
      arabic: "الانهيار والمنطقة الفعالة"
    },
    {
      english: "Linear and oscillation",
      arabic: "الخطية والتذبذب"
    }
  ],

  correctAnswer: 1
},

{
  id: 15,
  domain: "Computer Engineering",
  course: "Digital Logic",
  topic: "Binary Conversion",
  difficulty: "Medium",

  questionEnglish:
    "What is the decimal equivalent of the binary number 10110₂?",

  questionArabic:
    "ما القيمة العشرية للعدد الثنائي 10110₂؟",

  options: [
    { english: "18", arabic: "18" },
    { english: "20", arabic: "20" },
    { english: "22", arabic: "22" },
    { english: "24", arabic: "24" }
  ],

  correctAnswer: 2
},

{
  id: 16,
  domain: "Computer Engineering",
  course: "Digital Logic",
  topic: "Boolean Algebra",
  difficulty: "Medium",

  questionEnglish:
    "Using Boolean algebra, the expression A + A·B simplifies to:",

  questionArabic:
    "باستخدام الجبر المنطقي، يتم تبسيط التعبير A + A·B إلى:",

  options: [
    { english: "A", arabic: "A" },
    { english: "B", arabic: "B" },
    { english: "A + B", arabic: "A + B" },
    { english: "A·B", arabic: "A·B" }
  ],

  correctAnswer: 0
},

{
  id: 17,
  domain: "Computer Engineering",
  course: "Digital Logic",
  topic: "Logic Gates",
  difficulty: "Medium",

  questionEnglish:
    "An XOR gate has two inputs. For which input combination is its output LOW?",

  questionArabic:
    "لبوابة XOR مدخلان. لأي مجموعة مدخلات يكون الخرج منخفضاً؟",

  options: [
    { english: "0 and 1 only", arabic: "0 و1 فقط" },
    { english: "1 and 0 only", arabic: "1 و0 فقط" },
    {
      english: "When both inputs are equal",
      arabic: "عندما يكون المدخلان متساويين"
    },
    {
      english: "Whenever either input is HIGH",
      arabic: "عندما يكون أي مدخل مرتفعاً"
    }
  ],

  correctAnswer: 2
},

{
  id: 18,
  domain: "Computer Engineering",
  course: "Computer Architecture",
  topic: "Memory",
  difficulty: "Medium",

  questionEnglish:
    "Which memory type normally provides the fastest access to the CPU?",

  questionArabic:
    "أي نوع من الذاكرة يوفر عادةً أسرع وصول لوحدة المعالجة المركزية؟",

  options: [
    { english: "Hard disk drive", arabic: "القرص الصلب" },
    { english: "Main memory", arabic: "الذاكرة الرئيسية" },
    { english: "Cache memory", arabic: "الذاكرة المخبأة" },
    { english: "Optical storage", arabic: "التخزين الضوئي" }
  ],

  correctAnswer: 2
},

{
  id: 19,
  domain: "Computer Engineering",
  course: "Computer Architecture",
  topic: "Instruction Cycle",
  difficulty: "Medium",

  questionEnglish:
    "Which sequence best describes the basic processor instruction cycle?",

  questionArabic:
    "أي ترتيب يصف دورة تنفيذ التعليمة الأساسية في المعالج؟",

  options: [
    {
      english: "Execute, fetch, decode",
      arabic: "تنفيذ، جلب، فك ترميز"
    },
    {
      english: "Fetch, decode, execute",
      arabic: "جلب، فك ترميز، تنفيذ"
    },
    {
      english: "Decode, execute, fetch",
      arabic: "فك ترميز، تنفيذ، جلب"
    },
    {
      english: "Store, fetch, erase",
      arabic: "تخزين، جلب، مسح"
    }
  ],

  correctAnswer: 1
},

{
  id: 20,
  domain: "Computer Engineering",
  course: "Networking",
  topic: "OSI Model",
  difficulty: "Medium",

  questionEnglish:
    "A router primarily forwards packets based on information at which OSI layer?",

  questionArabic:
    "يقوم الموجه بتمرير الحزم بشكل أساسي اعتماداً على معلومات أي طبقة في نموذج OSI؟",

  options: [
    { english: "Physical layer", arabic: "الطبقة الفيزيائية" },
    { english: "Data link layer", arabic: "طبقة ربط البيانات" },
    { english: "Network layer", arabic: "طبقة الشبكة" },
    { english: "Application layer", arabic: "طبقة التطبيقات" }
  ],

  correctAnswer: 2
},

{
  id: 21,
  domain: "Computer Engineering",
  course: "Networking",
  topic: "Subnetting",
  difficulty: "Medium",

  questionEnglish:
    "How many usable host addresses are available in an IPv4 /29 subnet?",

  questionArabic:
    "كم عدد عناوين المضيف القابلة للاستخدام في شبكة IPv4 ذات القناع /29؟",

  options: [
    { english: "4", arabic: "4" },
    { english: "6", arabic: "6" },
    { english: "8", arabic: "8" },
    { english: "14", arabic: "14" }
  ],

  correctAnswer: 1
},

{
  id: 22,
  domain: "Electrical Engineering",
  course: "Signals and Systems",
  topic: "Sampling",
  difficulty: "Medium",

  questionEnglish:
    "According to the sampling theorem, a 4 kHz signal should be sampled at a minimum rate greater than or equal to:",

  questionArabic:
    "وفقاً لنظرية أخذ العينات، يجب أخذ عينات لإشارة ترددها 4 كيلوهرتز بمعدل لا يقل عن:",

  options: [
    { english: "2 kHz", arabic: "2 كيلوهرتز" },
    { english: "4 kHz", arabic: "4 كيلوهرتز" },
    { english: "8 kHz", arabic: "8 كيلوهرتز" },
    { english: "16 kHz", arabic: "16 كيلوهرتز" }
  ],

  correctAnswer: 2
},

{
  id: 23,
  domain: "Electrical Engineering",
  course: "Control Systems",
  topic: "Feedback",
  difficulty: "Medium",

  questionEnglish:
    "Compared with an open-loop system, negative feedback generally improves:",

  questionArabic:
    "مقارنةً بنظام الحلقة المفتوحة، تعمل التغذية الراجعة السالبة عادةً على تحسين:",

  options: [
    {
      english: "Sensitivity to parameter changes",
      arabic: "الحساسية لتغير المعاملات"
    },
    {
      english: "Stability and accuracy",
      arabic: "الاستقرار والدقة"
    },
    {
      english: "Power supply voltage",
      arabic: "جهد مصدر الطاقة"
    },
    {
      english: "Cable resistance",
      arabic: "مقاومة الكابل"
    }
  ],

  correctAnswer: 1
},

{
  id: 24,
  domain: "Electrical Engineering",
  course: "Electromagnetics",
  topic: "Magnetic Induction",
  difficulty: "Medium",

  questionEnglish:
    "According to Faraday's law, an induced voltage is produced when:",

  questionArabic:
    "وفقاً لقانون فاراداي، يتم توليد جهد مستحث عندما:",

  options: [
    {
      english: "Magnetic flux remains constant",
      arabic: "يبقى الفيض المغناطيسي ثابتاً"
    },
    {
      english: "Current is exactly zero",
      arabic: "يكون التيار صفراً تماماً"
    },
    {
      english: "Magnetic flux changes with time",
      arabic: "يتغير الفيض المغناطيسي مع الزمن"
    },
    {
      english: "Resistance becomes infinite",
      arabic: "تصبح المقاومة لا نهائية"
    }
  ],

  correctAnswer: 2
},

{
  id: 25,
  domain: "Electrical Engineering",
  course: "Engineering Economics",
  topic: "Present Value",
  difficulty: "Medium",

  questionEnglish:
    "At a positive interest rate, the present value of a fixed future payment is generally:",

  questionArabic:
    "عند وجود معدل فائدة موجب، تكون القيمة الحالية لمبلغ ثابت سيتم دفعه مستقبلاً عادةً:",

  options: [
    {
      english: "Greater than the future payment",
      arabic: "أكبر من المبلغ المستقبلي"
    },
    {
      english: "Equal to the future payment",
      arabic: "مساوية للمبلغ المستقبلي"
    },
    {
      english: "Less than the future payment",
      arabic: "أقل من المبلغ المستقبلي"
    },
    {
      english: "Always zero",
      arabic: "صفراً دائماً"
    }
  ],

  correctAnswer: 2
},
{
  id: 26,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Maximum Power Transfer",
  difficulty: "Medium",

  questionEnglish:
    "According to the maximum power transfer theorem, maximum power is delivered when:",

  questionArabic:
    "وفقاً لنظرية انتقال القدرة العظمى، تنتقل أكبر قدرة عندما:",

  options: [
    {
      english: "Load resistance equals source resistance",
      arabic: "تساوي مقاومة الحمل مقاومة المصدر"
    },
    {
      english: "Load resistance is zero",
      arabic: "تساوي مقاومة الحمل صفراً"
    },
    {
      english: "Load resistance is infinite",
      arabic: "تكون مقاومة الحمل لا نهائية"
    },
    {
      english: "Voltage becomes zero",
      arabic: "يصبح الجهد صفراً"
    }
  ],

  correctAnswer: 0
},

{
  id: 27,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Impedance",
  difficulty: "Medium",

  questionEnglish:
    "Impedance is represented by which symbol?",

  questionArabic:
    "أي رمز يستخدم عادةً لتمثيل الممانعة؟",

  options: [
    { english: "R", arabic: "R" },
    { english: "L", arabic: "L" },
    { english: "C", arabic: "C" },
    { english: "Z", arabic: "Z" }
  ],

  correctAnswer: 3
},

{
  id: 28,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Power Factor",
  difficulty: "Medium",

  questionEnglish:
    "A power factor equal to 1 indicates:",

  questionArabic:
    "تشير قيمة معامل القدرة التي تساوي 1 إلى:",

  options: [
    {
      english: "Purely resistive load",
      arabic: "حمل مقاومي بحت"
    },
    {
      english: "Purely capacitive load",
      arabic: "حمل سعوي بحت"
    },
    {
      english: "Purely inductive load",
      arabic: "حمل حثي بحت"
    },
    {
      english: "Open circuit",
      arabic: "دائرة مفتوحة"
    }
  ],

  correctAnswer: 0
},

{
  id: 29,
  domain: "Electrical Engineering",
  course: "Electronics",
  topic: "Rectifiers",
  difficulty: "Medium",

  questionEnglish:
    "The main purpose of a rectifier is to convert:",

  questionArabic:
    "الغرض الأساسي من المقوم الكهربائي هو تحويل:",

  options: [
    {
      english: "AC into DC",
      arabic: "التيار المتردد إلى تيار مستمر"
    },
    {
      english: "DC into AC",
      arabic: "التيار المستمر إلى تيار متردد"
    },
    {
      english: "Heat into electricity",
      arabic: "الحرارة إلى كهرباء"
    },
    {
      english: "Light into sound",
      arabic: "الضوء إلى صوت"
    }
  ],

  correctAnswer: 0
},

{
  id: 30,
  domain: "Electrical Engineering",
  course: "Electronics",
  topic: "Operational Amplifiers",
  difficulty: "Medium",

  questionEnglish:
    "An ideal operational amplifier has which characteristic?",

  questionArabic:
    "يتميز المضخم التشغيلي المثالي بأي خاصية من الخصائص الآتية؟",

  options: [
    {
      english: "Infinite input impedance",
      arabic: "ممانعة دخل لا نهائية"
    },
    {
      english: "Zero gain",
      arabic: "كسب صفري"
    },
    {
      english: "Infinite output impedance",
      arabic: "ممانعة خرج لا نهائية"
    },
    {
      english: "Infinite power loss",
      arabic: "فقدان قدرة لا نهائي"
    }
  ],

  correctAnswer: 0
},

{
  id: 31,
  domain: "Electrical Engineering",
  course: "Signals and Systems",
  topic: "Signal Energy",
  difficulty: "Medium",

  questionEnglish:
    "Which signal is periodic?",

  questionArabic:
    "أي الإشارات التالية تعد دورية؟",

  options: [
    {
      english: "A sine wave",
      arabic: "الموجة الجيبية"
    },
    {
      english: "Random noise",
      arabic: "الضوضاء العشوائية"
    },
    {
      english: "A single pulse",
      arabic: "نبضة مفردة"
    },
    {
      english: "An impulse",
      arabic: "نبضة لحظية"
    }
  ],

  correctAnswer: 0
},

{
  id: 32,
  domain: "Electrical Engineering",
  course: "Electromagnetics",
  topic: "Coulomb's Law",
  difficulty: "Medium",

  questionEnglish:
    "Coulomb's law describes the force between:",

  questionArabic:
    "يصف قانون كولوم القوة المتبادلة بين:",

  options: [
    {
      english: "Electric charges",
      arabic: "الشحنات الكهربائية"
    },
    {
      english: "Magnetic materials",
      arabic: "المواد المغناطيسية"
    },
    {
      english: "Capacitors",
      arabic: "المكثفات"
    },
    {
      english: "Resistors",
      arabic: "المقاومات"
    }
  ],

  correctAnswer: 0
},

{
  id: 33,
  domain: "Electrical Engineering",
  course: "Communications",
  topic: "Bandwidth",
  difficulty: "Medium",

  questionEnglish:
    "Increasing bandwidth generally allows:",

  questionArabic:
    "تؤدي زيادة عرض النطاق الترددي عادةً إلى:",

  options: [
    {
      english: "Higher data rates",
      arabic: "زيادة معدلات نقل البيانات"
    },
    {
      english: "Lower frequencies only",
      arabic: "ترددات أقل فقط"
    },
    {
      english: "Infinite power",
      arabic: "قدرة لا نهائية"
    },
    {
      english: "Lower voltage",
      arabic: "جهد أقل"
    }
  ],

  correctAnswer: 0
},

{
  id: 34,
  domain: "Electrical Engineering",
  course: "Control Systems",
  topic: "Stability",
  difficulty: "Medium",

  questionEnglish:
    "A stable control system produces an output that:",

  questionArabic:
    "يعطي نظام التحكم المستقر خرجاً:",

  options: [
    {
      english: "Remains bounded",
      arabic: "يبقى ضمن حدود معينة"
    },
    {
      english: "Becomes infinite",
      arabic: "يصبح لا نهائياً"
    },
    {
      english: "Always becomes zero",
      arabic: "يصبح صفراً دائماً"
    },
    {
      english: "Always oscillates",
      arabic: "يتذبذب دائماً"
    }
  ],

  correctAnswer: 0
},

{
  id: 35,
  domain: "Computer Engineering",
  course: "Digital Logic",
  topic: "De Morgan's Laws",
  difficulty: "Medium",

  questionEnglish:
    "De Morgan's laws are used primarily for:",

  questionArabic:
    "تستخدم قوانين دي مورغان بشكل أساسي من أجل:",

  options: [
    {
      english: "Boolean simplification",
      arabic: "تبسيط الجبر المنطقي"
    },
    {
      english: "Network routing",
      arabic: "توجيه الشبكات"
    },
    {
      english: "Signal amplification",
      arabic: "تضخيم الإشارات"
    },
    {
      english: "File storage",
      arabic: "تخزين الملفات"
    }
  ],

  correctAnswer: 0
},

{
  id: 36,
  domain: "Computer Engineering",
  course: "Digital Logic",
  topic: "Flip-Flops",
  difficulty: "Medium",

  questionEnglish:
    "Flip-flops are mainly used for:",

  questionArabic:
    "تستخدم القلابات الإلكترونية بشكل أساسي من أجل:",

  options: [
    {
      english: "Data storage",
      arabic: "تخزين البيانات"
    },
    {
      english: "Power generation",
      arabic: "توليد الطاقة"
    },
    {
      english: "Cooling processors",
      arabic: "تبريد المعالجات"
    },
    {
      english: "Voltage regulation",
      arabic: "تنظيم الجهد"
    }
  ],

  correctAnswer: 0
},

{
  id: 37,
  domain: "Computer Engineering",
  course: "Computer Architecture",
  topic: "Pipelining",
  difficulty: "Medium",

  questionEnglish:
    "Processor pipelining mainly improves:",

  questionArabic:
    "تعمل تقنية خطوط الأنابيب في المعالجات على تحسين:",

  options: [
    {
      english: "Instruction throughput",
      arabic: "معدل تنفيذ التعليمات"
    },
    {
      english: "Memory size",
      arabic: "حجم الذاكرة"
    },
    {
      english: "Screen resolution",
      arabic: "دقة الشاشة"
    },
    {
      english: "Cable bandwidth",
      arabic: "عرض النطاق الترددي للكابلات"
    }
  ],

  correctAnswer: 0
},

{
  id: 38,
  domain: "Computer Engineering",
  course: "Microprocessors",
  topic: "Registers",
  difficulty: "Medium",

  questionEnglish:
    "Registers are used to store:",

  questionArabic:
    "تستخدم السجلات لتخزين:",

  options: [
    {
      english: "Temporary data",
      arabic: "البيانات المؤقتة"
    },
    {
      english: "Permanent files",
      arabic: "الملفات الدائمة"
    },
    {
      english: "Network addresses",
      arabic: "عناوين الشبكات"
    },
    {
      english: "Database tables",
      arabic: "جداول قواعد البيانات"
    }
  ],

  correctAnswer: 0
},

{
  id: 39,
  domain: "Computer Engineering",
  course: "Embedded Systems",
  topic: "Interrupts",
  difficulty: "Medium",

  questionEnglish:
    "An interrupt is used to:",

  questionArabic:
    "يستخدم المقاطِع (Interrupt) من أجل:",

  options: [
    {
      english: "Temporarily suspend normal execution",
      arabic: "إيقاف التنفيذ الطبيعي مؤقتاً"
    },
    {
      english: "Delete memory",
      arabic: "حذف الذاكرة"
    },
    {
      english: "Increase voltage",
      arabic: "زيادة الجهد"
    },
    {
      english: "Change resistance",
      arabic: "تغيير المقاومة"
    }
  ],

  correctAnswer: 0
},

{
  id: 40,
  domain: "Computer Engineering",
  course: "Networking",
  topic: "TCP/IP",
  difficulty: "Medium",

  questionEnglish:
    "TCP is primarily responsible for:",

  questionArabic:
    "تتحمل طبقة TCP المسؤولية الأساسية عن:",

  options: [
    {
      english: "Reliable data delivery",
      arabic: "توصيل البيانات بشكل موثوق"
    },
    {
      english: "Signal amplification",
      arabic: "تضخيم الإشارات"
    },
    {
      english: "Voltage regulation",
      arabic: "تنظيم الجهد"
    },
    {
      english: "Power distribution",
      arabic: "توزيع القدرة"
    }
  ],

  correctAnswer: 0
},
{
  id: 41,
  domain: "Computer Engineering",
  course: "Discrete Mathematics",
  topic: "Sets",
  difficulty: "Medium",

  questionEnglish:
    "Let A = {1, 2, 3, 4} and B = {3, 4, 5}. What is A ∩ B?",

  questionArabic:
    "إذا كانت A = {1, 2, 3, 4} وB = {3, 4, 5}، فما قيمة A ∩ B؟",

  options: [
    { english: "{1, 2, 5}", arabic: "{1, 2, 5}" },
    { english: "{3, 4}", arabic: "{3, 4}" },
    { english: "{1, 2, 3, 4, 5}", arabic: "{1, 2, 3, 4, 5}" },
    { english: "{5}", arabic: "{5}" }
  ],

  correctAnswer: 1
},

{
  id: 42,
  domain: "Computer Engineering",
  course: "Discrete Mathematics",
  topic: "Set Operations",
  difficulty: "Medium",

  questionEnglish:
    "If a universal set contains 20 elements and set A contains 8 elements, how many elements are in the complement of A?",

  questionArabic:
    "إذا احتوت المجموعة الشاملة على 20 عنصراً واحتوت المجموعة A على 8 عناصر، فكم عنصراً يوجد في متممة A؟",

  options: [
    { english: "8", arabic: "8" },
    { english: "10", arabic: "10" },
    { english: "12", arabic: "12" },
    { english: "28", arabic: "28" }
  ],

  correctAnswer: 2
},

{
  id: 43,
  domain: "Computer Engineering",
  course: "Discrete Mathematics",
  topic: "Logic",
  difficulty: "Medium",

  questionEnglish:
    "What is the truth value of the statement P AND Q when P is true and Q is false?",

  questionArabic:
    "ما القيمة المنطقية للعبارة P AND Q عندما تكون P صحيحة وQ خاطئة؟",

  options: [
    { english: "True", arabic: "صحيحة" },
    { english: "False", arabic: "خاطئة" },
    { english: "Undefined", arabic: "غير معرفة" },
    { english: "Both true and false", arabic: "صحيحة وخاطئة معاً" }
  ],

  correctAnswer: 1
},

{
  id: 44,
  domain: "Computer Engineering",
  course: "Discrete Mathematics",
  topic: "Implication",
  difficulty: "Medium",

  questionEnglish:
    "A conditional statement P → Q is false only when:",

  questionArabic:
    "تكون العبارة الشرطية P → Q خاطئة فقط عندما:",

  options: [
    {
      english: "P is true and Q is false",
      arabic: "تكون P صحيحة وQ خاطئة"
    },
    {
      english: "P is false and Q is true",
      arabic: "تكون P خاطئة وQ صحيحة"
    },
    {
      english: "Both P and Q are true",
      arabic: "تكون P وQ صحيحتين"
    },
    {
      english: "Both P and Q are false",
      arabic: "تكون P وQ خاطئتين"
    }
  ],

  correctAnswer: 0
},

{
  id: 45,
  domain: "Computer Engineering",
  course: "Discrete Mathematics",
  topic: "Counting Principles",
  difficulty: "Medium",

  questionEnglish:
    "A system has 4 independent switches, each of which can be ON or OFF. How many different switch configurations are possible?",

  questionArabic:
    "يحتوي نظام على 4 مفاتيح مستقلة، ويمكن أن يكون كل مفتاح في حالة تشغيل أو إيقاف. كم عدد التكوينات المختلفة الممكنة؟",

  options: [
    { english: "4", arabic: "4" },
    { english: "8", arabic: "8" },
    { english: "16", arabic: "16" },
    { english: "24", arabic: "24" }
  ],

  correctAnswer: 2
},

{
  id: 46,
  domain: "Mathematics",
  course: "Analytic Geometry",
  topic: "Distance Formula",
  difficulty: "Medium",

  questionEnglish:
    "What is the distance between the points (1, 2) and (4, 6)?",

  questionArabic:
    "ما المسافة بين النقطتين (1, 2) و(4, 6)؟",

  options: [
    { english: "3", arabic: "3" },
    { english: "4", arabic: "4" },
    { english: "5", arabic: "5" },
    { english: "7", arabic: "7" }
  ],

  correctAnswer: 2
},

{
  id: 47,
  domain: "Mathematics",
  course: "Analytic Geometry",
  topic: "Slope",
  difficulty: "Medium",

  questionEnglish:
    "What is the slope of the line passing through the points (2, 3) and (6, 11)?",

  questionArabic:
    "ما ميل الخط المستقيم المار بالنقطتين (2, 3) و(6, 11)؟",

  options: [
    { english: "1", arabic: "1" },
    { english: "2", arabic: "2" },
    { english: "4", arabic: "4" },
    { english: "8", arabic: "8" }
  ],

  correctAnswer: 1
},

{
  id: 48,
  domain: "Mathematics",
  course: "Analytic Geometry",
  topic: "Equation of a Line",
  difficulty: "Medium",

  questionEnglish:
    "Which equation represents a line with slope 3 and y-intercept −2?",

  questionArabic:
    "أي معادلة تمثل خطاً مستقيماً ميله 3 والجزء المقطوع من محور y يساوي −2؟",

  options: [
    { english: "y = 3x − 2", arabic: "y = 3x − 2" },
    { english: "y = −2x + 3", arabic: "y = −2x + 3" },
    { english: "y = 2x − 3", arabic: "y = 2x − 3" },
    { english: "y = 3x + 2", arabic: "y = 3x + 2" }
  ],

  correctAnswer: 0
},

{
  id: 49,
  domain: "Mathematics",
  course: "Analytic Geometry",
  topic: "Circle Equation",
  difficulty: "Medium",

  questionEnglish:
    "What is the radius of the circle described by x² + y² = 25?",

  questionArabic:
    "ما نصف قطر الدائرة التي معادلتها x² + y² = 25؟",

  options: [
    { english: "5", arabic: "5" },
    { english: "10", arabic: "10" },
    { english: "25", arabic: "25" },
    { english: "2.5", arabic: "2.5" }
  ],

  correctAnswer: 0
},

{
  id: 50,
  domain: "Mathematics",
  course: "Calculus",
  topic: "Derivatives",
  difficulty: "Medium",

  questionEnglish:
    "What is the derivative of f(x) = 4x³ − 2x + 7?",

  questionArabic:
    "ما مشتقة الدالة f(x) = 4x³ − 2x + 7؟",

  options: [
    { english: "12x² − 2", arabic: "12x² − 2" },
    { english: "4x² − 2", arabic: "4x² − 2" },
    { english: "12x³ − 2", arabic: "12x³ − 2" },
    { english: "3x² − 2", arabic: "3x² − 2" }
  ],

  correctAnswer: 0
},

{
  id: 51,
  domain: "Mathematics",
  course: "Calculus",
  topic: "Derivative at a Point",
  difficulty: "Medium",

  questionEnglish:
    "If f(x) = x² + 3x, what is f′(2)?",

  questionArabic:
    "إذا كانت f(x) = x² + 3x، فما قيمة f′(2)؟",

  options: [
    { english: "5", arabic: "5" },
    { english: "7", arabic: "7" },
    { english: "10", arabic: "10" },
    { english: "14", arabic: "14" }
  ],

  correctAnswer: 1
},

{
  id: 52,
  domain: "Mathematics",
  course: "Calculus",
  topic: "Integration",
  difficulty: "Medium",

  questionEnglish:
    "What is the indefinite integral of 6x² with respect to x?",

  questionArabic:
    "ما التكامل غير المحدد للدالة 6x² بالنسبة إلى x؟",

  options: [
    { english: "2x³ + C", arabic: "2x³ + C" },
    { english: "3x² + C", arabic: "3x² + C" },
    { english: "6x³ + C", arabic: "6x³ + C" },
    { english: "12x + C", arabic: "12x + C" }
  ],

  correctAnswer: 0
},

{
  id: 53,
  domain: "Mathematics",
  course: "Calculus",
  topic: "Definite Integrals",
  difficulty: "Medium",

  questionEnglish:
    "What is the value of the definite integral of 2x from x = 0 to x = 3?",

  questionArabic:
    "ما قيمة التكامل المحدد للدالة 2x من x = 0 إلى x = 3؟",

  options: [
    { english: "3", arabic: "3" },
    { english: "6", arabic: "6" },
    { english: "9", arabic: "9" },
    { english: "18", arabic: "18" }
  ],

  correctAnswer: 2
},

{
  id: 54,
  domain: "Mathematics",
  course: "Calculus",
  topic: "Partial Derivatives",
  difficulty: "Medium",

  questionEnglish:
    "If f(x, y) = x²y + 3y, what is the partial derivative ∂f/∂x?",

  questionArabic:
    "إذا كانت f(x, y) = x²y + 3y، فما المشتقة الجزئية ∂f/∂x؟",

  options: [
    { english: "2xy", arabic: "2xy" },
    { english: "x² + 3", arabic: "x² + 3" },
    { english: "2x + 3", arabic: "2x + 3" },
    { english: "x²y", arabic: "x²y" }
  ],

  correctAnswer: 0
},

{
  id: 55,
  domain: "Mathematics",
  course: "Calculus",
  topic: "Optimization",
  difficulty: "Medium",

  questionEnglish:
    "At an interior local maximum or minimum of a differentiable single-variable function, which condition is normally satisfied?",

  questionArabic:
    "عند نقطة عظمى أو صغرى محلية داخلية لدالة قابلة للاشتقاق ذات متغير واحد، أي شرط يتحقق عادةً؟",

  options: [
    { english: "f′(x) = 0", arabic: "f′(x) = 0" },
    { english: "f(x) = 0", arabic: "f(x) = 0" },
    { english: "f″(x) = 0 always", arabic: "f″(x) = 0 دائماً" },
    { english: "x = 0", arabic: "x = 0" }
  ],

  correctAnswer: 0
},

{
  id: 56,
  domain: "Mathematics",
  course: "Ordinary Differential Equations",
  topic: "First-Order ODEs",
  difficulty: "Medium",

  questionEnglish:
    "Which function satisfies the differential equation dy/dx = 3x²?",

  questionArabic:
    "أي دالة تحقق المعادلة التفاضلية dy/dx = 3x²؟",

  options: [
    { english: "y = x³ + C", arabic: "y = x³ + C" },
    { english: "y = 3x + C", arabic: "y = 3x + C" },
    { english: "y = x² + C", arabic: "y = x² + C" },
    { english: "y = 6x + C", arabic: "y = 6x + C" }
  ],

  correctAnswer: 0
},

{
  id: 57,
  domain: "Mathematics",
  course: "Ordinary Differential Equations",
  topic: "Exponential Response",
  difficulty: "Medium",

  questionEnglish:
    "The general solution of dy/dt = ky is:",

  questionArabic:
    "الحل العام للمعادلة dy/dt = ky هو:",

  options: [
    { english: "y = Ceᵏᵗ", arabic: "y = Ceᵏᵗ" },
    { english: "y = kt + C", arabic: "y = kt + C" },
    { english: "y = C/k", arabic: "y = C/k" },
    { english: "y = kt²", arabic: "y = kt²" }
  ],

  correctAnswer: 0
},

{
  id: 58,
  domain: "Electrical Engineering",
  course: "Ordinary Differential Equations",
  topic: "First-Order Circuits",
  difficulty: "Medium",

  questionEnglish:
    "The natural response of a stable first-order RC circuit contains which mathematical term?",

  questionArabic:
    "تحتوي الاستجابة الطبيعية لدائرة RC مستقرة من الرتبة الأولى على أي حد رياضي؟",

  options: [
    { english: "A decaying exponential", arabic: "دالة أسية متناقصة" },
    { english: "A growing quadratic", arabic: "دالة تربيعية متزايدة" },
    { english: "A constant sine wave", arabic: "موجة جيبية ثابتة" },
    { english: "A logarithmic increase", arabic: "زيادة لوغاريتمية" }
  ],

  correctAnswer: 0
},

{
  id: 59,
  domain: "Mathematics",
  course: "Linear Algebra",
  topic: "Matrix Multiplication",
  difficulty: "Medium",

  questionEnglish:
    "A matrix A has dimensions 2 × 3 and matrix B has dimensions 3 × 4. What are the dimensions of AB?",

  questionArabic:
    "للمصفوفة A أبعاد 2 × 3 وللمصفوفة B أبعاد 3 × 4. فما أبعاد المصفوفة AB؟",

  options: [
    { english: "2 × 4", arabic: "2 × 4" },
    { english: "3 × 3", arabic: "3 × 3" },
    { english: "3 × 4", arabic: "3 × 4" },
    { english: "2 × 3", arabic: "2 × 3" }
  ],

  correctAnswer: 0
},

{
  id: 60,
  domain: "Mathematics",
  course: "Linear Algebra",
  topic: "Determinants",
  difficulty: "Medium",

  questionEnglish:
    "What is the determinant of the matrix [[2, 1], [3, 4]]?",

  questionArabic:
    "ما محدد المصفوفة [[2, 1], [3, 4]]؟",

  options: [
    { english: "5", arabic: "5" },
    { english: "8", arabic: "8" },
    { english: "11", arabic: "11" },
    { english: "−5", arabic: "−5" }
  ],

  correctAnswer: 0
},

{
  id: 61,
  domain: "Mathematics",
  course: "Linear Algebra",
  topic: "Matrix Inverses",
  difficulty: "Medium",

  questionEnglish:
    "A square matrix has an inverse only when its determinant is:",

  questionArabic:
    "يكون للمصفوفة المربعة معكوس فقط عندما يكون محددها:",

  options: [
    { english: "Equal to zero", arabic: "مساوياً للصفر" },
    { english: "Not equal to zero", arabic: "غير مساوٍ للصفر" },
    { english: "Equal to one only", arabic: "مساوياً للواحد فقط" },
    { english: "Negative only", arabic: "سالباً فقط" }
  ],

  correctAnswer: 1
},

{
  id: 62,
  domain: "Mathematics",
  course: "Linear Algebra",
  topic: "Systems of Equations",
  difficulty: "Medium",

  questionEnglish:
    "Solve the system x + y = 5 and x − y = 1. What is x?",

  questionArabic:
    "حل النظام x + y = 5 وx − y = 1. ما قيمة x؟",

  options: [
    { english: "2", arabic: "2" },
    { english: "3", arabic: "3" },
    { english: "4", arabic: "4" },
    { english: "5", arabic: "5" }
  ],

  correctAnswer: 1
},

{
  id: 63,
  domain: "Mathematics",
  course: "Vector Analysis",
  topic: "Vector Magnitude",
  difficulty: "Medium",

  questionEnglish:
    "What is the magnitude of the vector v = 3i + 4j?",

  questionArabic:
    "ما مقدار المتجه v = 3i + 4j؟",

  options: [
    { english: "4", arabic: "4" },
    { english: "5", arabic: "5" },
    { english: "7", arabic: "7" },
    { english: "25", arabic: "25" }
  ],

  correctAnswer: 1
},

{
  id: 64,
  domain: "Mathematics",
  course: "Vector Analysis",
  topic: "Dot Product",
  difficulty: "Medium",

  questionEnglish:
    "What is the dot product of vectors A = (2, 3) and B = (4, −1)?",

  questionArabic:
    "ما الضرب القياسي للمتجهين A = (2, 3) وB = (4, −1)؟",

  options: [
    { english: "5", arabic: "5" },
    { english: "8", arabic: "8" },
    { english: "11", arabic: "11" },
    { english: "−5", arabic: "−5" }
  ],

  correctAnswer: 0
},

{
  id: 65,
  domain: "Mathematics",
  course: "Vector Analysis",
  topic: "Orthogonal Vectors",
  difficulty: "Medium",

  questionEnglish:
    "Two nonzero vectors are perpendicular when their dot product is:",

  questionArabic:
    "يكون متجهان غير صفريين متعامدين عندما يكون الضرب القياسي بينهما:",

  options: [
    { english: "Zero", arabic: "صفراً" },
    { english: "One", arabic: "واحداً" },
    { english: "Negative always", arabic: "سالباً دائماً" },
    { english: "Equal to their magnitudes", arabic: "مساوياً لمقداريهما" }
  ],

  correctAnswer: 0
},
{
  id: 66,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Kirchhoff's Voltage Law",
  difficulty: "Medium",

  questionEnglish:
    "A series loop contains a 20 V source and two voltage drops of 6 V and 9 V. What must the remaining voltage drop be?",

  questionArabic:
    "تحتوي دائرة توالٍ مغلقة على مصدر جهد 20 فولت وهبوطي جهد مقدارهما 6 فولت و9 فولت. فما قيمة هبوط الجهد المتبقي؟",

  options: [
    { english: "3 V", arabic: "3 فولت" },
    { english: "5 V", arabic: "5 فولت" },
    { english: "15 V", arabic: "15 فولت" },
    { english: "35 V", arabic: "35 فولت" }
  ],

  correctAnswer: 1
},

{
  id: 67,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Kirchhoff's Current Law",
  difficulty: "Medium",

  questionEnglish:
    "At a node, currents of 2 A, 3 A, and 4 A enter. If one branch carries 6 A away from the node, what current must leave through the remaining branch?",

  questionArabic:
    "عند عقدة تدخل تيارات قيمها 2 أمبير و3 أمبير و4 أمبير. إذا خرج تيار مقداره 6 أمبير عبر أحد الفروع، فما التيار الذي يجب أن يخرج عبر الفرع المتبقي؟",

  options: [
    { english: "1 A", arabic: "1 أمبير" },
    { english: "2 A", arabic: "2 أمبير" },
    { english: "3 A", arabic: "3 أمبير" },
    { english: "9 A", arabic: "9 أمبير" }
  ],

  correctAnswer: 2
},

{
  id: 68,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Series Equivalent Circuits",
  difficulty: "Medium",

  questionEnglish:
    "A 30 V source supplies three series resistors of 2 Ω, 3 Ω, and 5 Ω. What is the circuit current?",

  questionArabic:
    "يغذي مصدر جهد مقداره 30 فولت ثلاث مقاومات على التوالي قيمها 2 أوم و3 أوم و5 أوم. ما تيار الدائرة؟",

  options: [
    { english: "2 A", arabic: "2 أمبير" },
    { english: "3 A", arabic: "3 أمبير" },
    { english: "5 A", arabic: "5 أمبير" },
    { english: "10 A", arabic: "10 أمبير" }
  ],

  correctAnswer: 1
},

{
  id: 69,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Parallel Equivalent Circuits",
  difficulty: "Medium",

  questionEnglish:
    "A 6 Ω resistor and a 3 Ω resistor are connected in parallel. What is their equivalent resistance?",

  questionArabic:
    "تم توصيل مقاومة 6 أوم ومقاومة 3 أوم على التوازي. ما المقاومة المكافئة؟",

  options: [
    { english: "1 Ω", arabic: "1 أوم" },
    { english: "2 Ω", arabic: "2 أوم" },
    { english: "4.5 Ω", arabic: "4.5 أوم" },
    { english: "9 Ω", arabic: "9 أوم" }
  ],

  correctAnswer: 1
},

{
  id: 70,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Series-Parallel Circuits",
  difficulty: "Medium",

  questionEnglish:
    "Two 8 Ω resistors are connected in parallel, and their combination is connected in series with a 6 Ω resistor. What is the total equivalent resistance?",

  questionArabic:
    "تم توصيل مقاومتين قيمة كل منهما 8 أوم على التوازي، ثم تم توصيلهما على التوالي مع مقاومة 6 أوم. ما المقاومة المكافئة الكلية؟",

  options: [
    { english: "4 Ω", arabic: "4 أوم" },
    { english: "10 Ω", arabic: "10 أوم" },
    { english: "14 Ω", arabic: "14 أوم" },
    { english: "22 Ω", arabic: "22 أوم" }
  ],

  correctAnswer: 1
},

{
  id: 71,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Thévenin Theorem",
  difficulty: "Medium",

  questionEnglish:
    "The Thévenin equivalent of a linear two-terminal circuit consists of:",

  questionArabic:
    "يتكون مكافئ ثيفينن لدائرة خطية ذات طرفين من:",

  options: [
    {
      english: "A voltage source in series with a resistance",
      arabic: "مصدر جهد على التوالي مع مقاومة"
    },
    {
      english: "A current source in parallel with a resistance",
      arabic: "مصدر تيار على التوازي مع مقاومة"
    },
    {
      english: "Two voltage sources in parallel",
      arabic: "مصدرَي جهد على التوازي"
    },
    {
      english: "A capacitor in series with an inductor",
      arabic: "مكثف على التوالي مع ملف"
    }
  ],

  correctAnswer: 0
},

{
  id: 72,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Norton Theorem",
  difficulty: "Medium",

  questionEnglish:
    "The Norton equivalent of a linear two-terminal circuit consists of:",

  questionArabic:
    "يتكون مكافئ نورتن لدائرة خطية ذات طرفين من:",

  options: [
    {
      english: "A voltage source in parallel with a resistance",
      arabic: "مصدر جهد على التوازي مع مقاومة"
    },
    {
      english: "A current source in parallel with a resistance",
      arabic: "مصدر تيار على التوازي مع مقاومة"
    },
    {
      english: "A current source in series with a resistance",
      arabic: "مصدر تيار على التوالي مع مقاومة"
    },
    {
      english: "A voltage source in series with a capacitor",
      arabic: "مصدر جهد على التوالي مع مكثف"
    }
  ],

  correctAnswer: 1
},

{
  id: 73,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Thévenin-Norton Conversion",
  difficulty: "Medium",

  questionEnglish:
    "A Thévenin equivalent has Vth = 12 V and Rth = 4 Ω. What is the corresponding Norton current?",

  questionArabic:
    "يحتوي مكافئ ثيفينن على Vth = 12 فولت وRth = 4 أوم. فما تيار نورتن المكافئ؟",

  options: [
    { english: "0.33 A", arabic: "0.33 أمبير" },
    { english: "3 A", arabic: "3 أمبير" },
    { english: "8 A", arabic: "8 أمبير" },
    { english: "48 A", arabic: "48 أمبير" }
  ],

  correctAnswer: 1
},

{
  id: 74,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Thévenin Resistance",
  difficulty: "Medium",

  questionEnglish:
    "When determining Thévenin resistance in a circuit containing only independent sources, an ideal independent voltage source is replaced by:",

  questionArabic:
    "عند حساب مقاومة ثيفينن في دائرة تحتوي فقط على مصادر مستقلة، يتم استبدال مصدر الجهد المستقل المثالي بـ:",

  options: [
    { english: "An open circuit", arabic: "دائرة مفتوحة" },
    { english: "A short circuit", arabic: "دائرة قصر" },
    { english: "A current source", arabic: "مصدر تيار" },
    { english: "A capacitor", arabic: "مكثف" }
  ],

  correctAnswer: 1
},

{
  id: 75,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Nodal Analysis",
  difficulty: "Medium",

  questionEnglish:
    "In nodal analysis, the unknown variables are normally:",

  questionArabic:
    "في تحليل العقد، تكون المتغيرات المجهولة عادةً:",

  options: [
    { english: "Branch powers", arabic: "قدرات الفروع" },
    { english: "Node voltages", arabic: "جهود العقد" },
    { english: "Loop charges", arabic: "شحنات الحلقات" },
    { english: "Component frequencies", arabic: "ترددات العناصر" }
  ],

  correctAnswer: 1
},

{
  id: 76,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Nodal Analysis",
  difficulty: "Medium",

  questionEnglish:
    "A node is connected to ground through a 5 Ω resistor. If the node voltage is 10 V, what current flows from the node to ground?",

  questionArabic:
    "تم توصيل عقدة بالأرضي عبر مقاومة 5 أوم. إذا كان جهد العقدة 10 فولت، فما التيار المتدفق من العقدة إلى الأرضي؟",

  options: [
    { english: "0.5 A", arabic: "0.5 أمبير" },
    { english: "2 A", arabic: "2 أمبير" },
    { english: "5 A", arabic: "5 أمبير" },
    { english: "50 A", arabic: "50 أمبير" }
  ],

  correctAnswer: 1
},

{
  id: 77,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Mesh Analysis",
  difficulty: "Medium",

  questionEnglish:
    "Mesh-current analysis is based primarily on:",

  questionArabic:
    "يعتمد تحليل تيارات الحلقات بشكل أساسي على:",

  options: [
    {
      english: "Kirchhoff's Current Law",
      arabic: "قانون كيرشوف للتيار"
    },
    {
      english: "Kirchhoff's Voltage Law",
      arabic: "قانون كيرشوف للجهد"
    },
    {
      english: "Coulomb's law",
      arabic: "قانون كولوم"
    },
    {
      english: "Faraday's law",
      arabic: "قانون فاراداي"
    }
  ],

  correctAnswer: 1
},

{
  id: 78,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Mesh Analysis",
  difficulty: "Medium",

  questionEnglish:
    "A single mesh contains a 24 V source and a total series resistance of 8 Ω. What is the mesh current?",

  questionArabic:
    "تحتوي حلقة واحدة على مصدر جهد 24 فولت ومقاومة كلية على التوالي مقدارها 8 أوم. ما تيار الحلقة؟",

  options: [
    { english: "2 A", arabic: "2 أمبير" },
    { english: "3 A", arabic: "3 أمبير" },
    { english: "8 A", arabic: "8 أمبير" },
    { english: "192 A", arabic: "192 أمبير" }
  ],

  correctAnswer: 1
},

{
  id: 79,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Superposition",
  difficulty: "Medium",

  questionEnglish:
    "The superposition theorem can be applied directly to determine which quantity in a linear circuit?",

  questionArabic:
    "يمكن تطبيق نظرية التراكب مباشرةً لتحديد أي كمية في دائرة خطية؟",

  options: [
    { english: "Voltage or current", arabic: "الجهد أو التيار" },
    { english: "Power only", arabic: "القدرة فقط" },
    { english: "Resistance only", arabic: "المقاومة فقط" },
    { english: "Energy efficiency only", arabic: "كفاءة الطاقة فقط" }
  ],

  correctAnswer: 0
},

{
  id: 80,
  domain: "Electrical Engineering",
  course: "Circuit Analysis",
  topic: "Source Transformation",
  difficulty: "Medium",

  questionEnglish:
    "A 10 V ideal voltage source in series with a 5 Ω resistor is equivalent to which current source?",

  questionArabic:
    "يعادل مصدر جهد مثالي مقداره 10 فولت على التوالي مع مقاومة 5 أوم أي مصدر تيار؟",

  options: [
    {
      english: "0.5 A in parallel with 5 Ω",
      arabic: "0.5 أمبير على التوازي مع 5 أوم"
    },
    {
      english: "2 A in parallel with 5 Ω",
      arabic: "2 أمبير على التوازي مع 5 أوم"
    },
    {
      english: "5 A in series with 2 Ω",
      arabic: "5 أمبير على التوالي مع 2 أوم"
    },
    {
      english: "50 A in parallel with 5 Ω",
      arabic: "50 أمبير على التوازي مع 5 أوم"
    }
  ],

  correctAnswer: 1
},

{
  id: 81,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "RMS Waveforms",
  difficulty: "Medium",

  questionEnglish:
    "A sinusoidal current has an RMS value of 10 A. What is its approximate peak value?",

  questionArabic:
    "لتيار جيبي قيمة فعالة مقدارها 10 أمبير. ما قيمته العظمى تقريباً؟",

  options: [
    { english: "7.07 A", arabic: "7.07 أمبير" },
    { english: "10 A", arabic: "10 أمبير" },
    { english: "14.14 A", arabic: "14.14 أمبير" },
    { english: "20 A", arabic: "20 أمبير" }
  ],

  correctAnswer: 2
},

{
  id: 82,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Average Value",
  difficulty: "Medium",

  questionEnglish:
    "What is the average value of an ideal sinusoidal waveform over one complete cycle?",

  questionArabic:
    "ما القيمة المتوسطة لموجة جيبية مثالية خلال دورة كاملة؟",

  options: [
    { english: "Zero", arabic: "صفر" },
    { english: "Equal to its RMS value", arabic: "تساوي قيمتها الفعالة" },
    { english: "Equal to its peak value", arabic: "تساوي قيمتها العظمى" },
    { english: "Half its peak value", arabic: "نصف قيمتها العظمى" }
  ],

  correctAnswer: 0
},

{
  id: 83,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Frequency and Period",
  difficulty: "Medium",

  questionEnglish:
    "A waveform has a period of 5 ms. What is its frequency?",

  questionArabic:
    "لموجة زمن دوري مقداره 5 مللي ثانية. فما ترددها؟",

  options: [
    { english: "50 Hz", arabic: "50 هرتز" },
    { english: "100 Hz", arabic: "100 هرتز" },
    { english: "200 Hz", arabic: "200 هرتز" },
    { english: "500 Hz", arabic: "500 هرتز" }
  ],

  correctAnswer: 2
},

{
  id: 84,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Phase Difference",
  difficulty: "Medium",

  questionEnglish:
    "If voltage reaches its positive peak one-quarter cycle before current, the voltage leads the current by:",

  questionArabic:
    "إذا وصل الجهد إلى قمته الموجبة قبل التيار بربع دورة، فإن الجهد يتقدم على التيار بمقدار:",

  options: [
    { english: "45°", arabic: "45 درجة" },
    { english: "90°", arabic: "90 درجة" },
    { english: "180°", arabic: "180 درجة" },
    { english: "360°", arabic: "360 درجة" }
  ],

  correctAnswer: 1
},

{
  id: 85,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Wavelength",
  difficulty: "Medium",

  questionEnglish:
    "An electromagnetic wave travels at 3 × 10⁸ m/s and has a frequency of 100 MHz. What is its wavelength?",

  questionArabic:
    "تنتقل موجة كهرومغناطيسية بسرعة 3 × 10⁸ متر/ثانية وترددها 100 ميجاهرتز. ما طولها الموجي؟",

  options: [
    { english: "0.3 m", arabic: "0.3 متر" },
    { english: "3 m", arabic: "3 أمتار" },
    { english: "30 m", arabic: "30 متراً" },
    { english: "300 m", arabic: "300 متر" }
  ],

  correctAnswer: 1
},

{
  id: 86,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Phasors",
  difficulty: "Medium",

  questionEnglish:
    "What is the rectangular form of the phasor 10∠0°?",

  questionArabic:
    "ما الصورة الديكارتية للمتجه الطوري 10∠0°؟",

  options: [
    { english: "10 + j0", arabic: "10 + j0" },
    { english: "0 + j10", arabic: "0 + j10" },
    { english: "−10 + j0", arabic: "−10 + j0" },
    { english: "5 + j5", arabic: "5 + j5" }
  ],

  correctAnswer: 0
},

{
  id: 87,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Phasor Conversion",
  difficulty: "Medium",

  questionEnglish:
    "The complex number 3 + j4 has which magnitude?",

  questionArabic:
    "ما مقدار العدد المركب 3 + j4؟",

  options: [
    { english: "3", arabic: "3" },
    { english: "4", arabic: "4" },
    { english: "5", arabic: "5" },
    { english: "7", arabic: "7" }
  ],

  correctAnswer: 2
},

{
  id: 88,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Impedance",
  difficulty: "Medium",

  questionEnglish:
    "A series circuit has resistance R = 6 Ω and inductive reactance XL = 8 Ω. What is the magnitude of its impedance?",

  questionArabic:
    "تحتوي دائرة توالٍ على مقاومة R = 6 أوم ومفاعلة حثية XL = 8 أوم. ما مقدار الممانعة؟",

  options: [
    { english: "2 Ω", arabic: "2 أوم" },
    { english: "10 Ω", arabic: "10 أوم" },
    { english: "14 Ω", arabic: "14 أوم" },
    { english: "48 Ω", arabic: "48 أوم" }
  ],

  correctAnswer: 1
},

{
  id: 89,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Capacitor Impedance",
  difficulty: "Medium",

  questionEnglish:
    "The impedance of an ideal capacitor has which form?",

  questionArabic:
    "أي صورة تمثل ممانعة المكثف المثالي؟",

  options: [
    { english: "jωL", arabic: "jωL" },
    { english: "R + jX", arabic: "R + jX" },
    { english: "1/(jωC)", arabic: "1/(jωC)" },
    { english: "ωC", arabic: "ωC" }
  ],

  correctAnswer: 2
},

{
  id: 90,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Series Resonance",
  difficulty: "Medium",

  questionEnglish:
    "At resonance in an ideal series RLC circuit, which relationship is true?",

  questionArabic:
    "عند الرنين في دائرة RLC مثالية على التوالي، أي علاقة تكون صحيحة؟",

  options: [
    { english: "XL = XC", arabic: "XL = XC" },
    { english: "XL = R", arabic: "XL = R" },
    { english: "XC = 0", arabic: "XC = 0" },
    { english: "The current is zero", arabic: "التيار يساوي صفراً" }
  ],

  correctAnswer: 0
},
{
  id: 91,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Complex Power",
  difficulty: "Medium",

  questionEnglish:
    "A single-phase load operates at 120 V RMS and draws 10 A RMS with a power factor of 0.8. What is the real power consumed?",

  questionArabic:
    "يعمل حمل أحادي الطور عند جهد فعال 120 فولت ويسحب تياراً فعالاً 10 أمبير بمعامل قدرة 0.8. ما القدرة الفعلية المستهلكة؟",

  options: [
    { english: "800 W", arabic: "800 واط" },
    { english: "960 W", arabic: "960 واط" },
    { english: "1200 W", arabic: "1200 واط" },
    { english: "1500 W", arabic: "1500 واط" }
  ],

  correctAnswer: 1
},

{
  id: 92,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Reactive Power",
  difficulty: "Medium",

  questionEnglish:
    "Which unit is used for reactive power?",

  questionArabic:
    "ما الوحدة المستخدمة لقياس القدرة غير الفعالة؟",

  options: [
    { english: "Watt", arabic: "واط" },
    { english: "Volt-ampere", arabic: "فولت-أمبير" },
    { english: "Volt-ampere reactive", arabic: "فولت-أمبير غير فعال" },
    { english: "Joule", arabic: "جول" }
  ],

  correctAnswer: 2
},

{
  id: 93,
  domain: "Electrical Engineering",
  course: "AC Circuits",
  topic: "Power Factor Correction",
  difficulty: "Medium",

  questionEnglish:
    "A lagging power factor caused by an inductive load is commonly corrected by adding:",

  questionArabic:
    "يتم عادةً تصحيح معامل القدرة المتأخر الناتج عن حمل حثي بإضافة:",

  options: [
    {
      english: "A capacitor in parallel",
      arabic: "مكثف على التوازي"
    },
    {
      english: "An inductor in parallel",
      arabic: "ملف على التوازي"
    },
    {
      english: "A resistor in series",
      arabic: "مقاومة على التوالي"
    },
    {
      english: "A voltage source in series",
      arabic: "مصدر جهد على التوالي"
    }
  ],

  correctAnswer: 0
},

{
  id: 94,
  domain: "Electrical Engineering",
  course: "Transient Circuits",
  topic: "RC Time Constant",
  difficulty: "Medium",

  questionEnglish:
    "A circuit has R = 2 kΩ and C = 50 μF. What is the RC time constant?",

  questionArabic:
    "تحتوي دائرة على R = 2 كيلوأوم وC = 50 ميكروفاراد. ما ثابت الزمن RC؟",

  options: [
    { english: "0.01 s", arabic: "0.01 ثانية" },
    { english: "0.1 s", arabic: "0.1 ثانية" },
    { english: "1 s", arabic: "1 ثانية" },
    { english: "100 s", arabic: "100 ثانية" }
  ],

  correctAnswer: 1
},

{
  id: 95,
  domain: "Electrical Engineering",
  course: "Transient Circuits",
  topic: "Capacitor Voltage",
  difficulty: "Medium",

  questionEnglish:
    "Which statement is true about the voltage across an ideal capacitor at a switching instant?",

  questionArabic:
    "أي عبارة صحيحة بشأن الجهد عبر مكثف مثالي عند لحظة التبديل؟",

  options: [
    {
      english: "It cannot change instantaneously",
      arabic: "لا يمكن أن يتغير لحظياً"
    },
    {
      english: "It must become zero immediately",
      arabic: "يجب أن يصبح صفراً فوراً"
    },
    {
      english: "It always doubles",
      arabic: "يتضاعف دائماً"
    },
    {
      english: "It becomes infinite",
      arabic: "يصبح لا نهائياً"
    }
  ],

  correctAnswer: 0
},

{
  id: 96,
  domain: "Electrical Engineering",
  course: "Transient Circuits",
  topic: "Inductor Current",
  difficulty: "Medium",

  questionEnglish:
    "Which statement is true about the current through an ideal inductor at a switching instant?",

  questionArabic:
    "أي عبارة صحيحة بشأن التيار المار في ملف مثالي عند لحظة التبديل؟",

  options: [
    {
      english: "It cannot change instantaneously",
      arabic: "لا يمكن أن يتغير لحظياً"
    },
    {
      english: "It must become zero immediately",
      arabic: "يجب أن يصبح صفراً فوراً"
    },
    {
      english: "It always reverses direction",
      arabic: "ينعكس اتجاهه دائماً"
    },
    {
      english: "It becomes infinite",
      arabic: "يصبح لا نهائياً"
    }
  ],

  correctAnswer: 0
},

{
  id: 97,
  domain: "Electrical Engineering",
  course: "Electronics",
  topic: "Operational Amplifiers",
  difficulty: "Medium",

  questionEnglish:
    "An ideal inverting amplifier has Rin = 2 kΩ and Rf = 10 kΩ. What is its closed-loop voltage gain?",

  questionArabic:
    "يحتوي مضخم عاكس مثالي على Rin = 2 كيلوأوم وRf = 10 كيلوأوم. ما كسب الجهد في الحلقة المغلقة؟",

  options: [
    { english: "−5", arabic: "−5" },
    { english: "−0.2", arabic: "−0.2" },
    { english: "5", arabic: "5" },
    { english: "12", arabic: "12" }
  ],

  correctAnswer: 0
},

{
  id: 98,
  domain: "Computer Engineering",
  course: "Digital Systems",
  topic: "Counters",
  difficulty: "Medium",

  questionEnglish:
    "How many flip-flops are required for a binary counter that counts from 0 through 15?",

  questionArabic:
    "كم عدد القلابات المطلوبة لعداد ثنائي يعد من 0 إلى 15؟",

  options: [
    { english: "3", arabic: "3" },
    { english: "4", arabic: "4" },
    { english: "8", arabic: "8" },
    { english: "16", arabic: "16" }
  ],

  correctAnswer: 1
},

{
  id: 99,
  domain: "Electrical Engineering",
  course: "Communications",
  topic: "Signal-to-Noise Ratio",
  difficulty: "Medium",

  questionEnglish:
    "If signal power increases while noise power remains constant, the signal-to-noise ratio will:",

  questionArabic:
    "إذا زادت قدرة الإشارة بينما بقيت قدرة الضوضاء ثابتة، فإن نسبة الإشارة إلى الضوضاء سوف:",

  options: [
    { english: "Increase", arabic: "تزداد" },
    { english: "Decrease", arabic: "تقل" },
    { english: "Remain unchanged", arabic: "تبقى ثابتة" },
    { english: "Become zero", arabic: "تصبح صفراً" }
  ],

  correctAnswer: 0
},

{
  id: 100,
  domain: "Mathematics",
  course: "Probability and Statistics",
  topic: "Expected Value",
  difficulty: "Medium",

  questionEnglish:
    "A fair six-sided die is rolled once. What is the expected value of the outcome?",

  questionArabic:
    "تم رمي نرد عادل ذي ستة أوجه مرة واحدة. ما القيمة المتوقعة للنتيجة؟",

  options: [
    { english: "3", arabic: "3" },
    { english: "3.5", arabic: "3.5" },
    { english: "4", arabic: "4" },
    { english: "6", arabic: "6" }
  ],

  correctAnswer: 1
},
];

export default engineeringQuestions;