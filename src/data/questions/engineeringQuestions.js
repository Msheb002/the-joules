const engineeringQuestions = [
  // Questions will be added here
  {
  id: "ENG0001",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Derivatives",
  difficulty: "Easy",
  questionEnglish:
    "Find the derivative of f(x) = 6x⁴ - 5x² + 3x - 8.",
  questionArabic:
    "أوجد مشتقة الدالة f(x) = 6x⁴ - 5x² + 3x - 8.",
  options: [
    {
      english: "24x³ - 10x + 3",
      arabic: "24x³ - 10x + 3"
    },
    {
      english: "24x³ - 5x + 3",
      arabic: "24x³ - 5x + 3"
    },
    {
      english: "6x³ - 10x + 3",
      arabic: "6x³ - 10x + 3"
    },
    {
      english: "24x⁴ - 10x² + 3",
      arabic: "24x⁴ - 10x² + 3"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0002",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Limits",
  difficulty: "Easy",
  questionEnglish:
    "Evaluate lim(x→3) [(x² - 9)/(x - 3)].",
  questionArabic:
    "احسب النهاية lim(x→3) [(x² - 9)/(x - 3)].",
  options: [
    {
      english: "3",
      arabic: "3"
    },
    {
      english: "9",
      arabic: "9"
    },
    {
      english: "6",
      arabic: "6"
    },
    {
      english: "The limit does not exist",
      arabic: "النهاية غير موجودة"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0003",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Optimization",
  difficulty: "Medium",
  questionEnglish:
    "A rectangle has a perimeter of 40 m. What dimensions maximize its area?",
  questionArabic:
    "مستطيل محيطه 40 مترًا. ما الأبعاد التي تحقق أكبر مساحة؟",
  options: [
    {
      english: "5 m by 15 m",
      arabic: "5 م × 15 م"
    },
    {
      english: "8 m by 12 m",
      arabic: "8 م × 12 م"
    },
    {
      english: "10 m by 10 m",
      arabic: "10 م × 10 م"
    },
    {
      english: "4 m by 16 m",
      arabic: "4 م × 16 م"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0004",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Definite Integrals",
  difficulty: "Easy",
  questionEnglish:
    "Evaluate ∫₀³ 2x dx.",
  questionArabic:
    "احسب التكامل المحدد ∫₀³ 2x dx.",
  options: [
    {
      english: "6",
      arabic: "6"
    },
    {
      english: "9",
      arabic: "9"
    },
    {
      english: "12",
      arabic: "12"
    },
    {
      english: "18",
      arabic: "18"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0005",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Integration by Parts",
  difficulty: "Medium",
  questionEnglish:
    "Evaluate ∫x cos(x) dx.",
  questionArabic:
    "احسب التكامل ∫x cos(x) dx.",
  options: [
    {
      english: "x sin(x) + cos(x) + C",
      arabic: "x sin(x) + cos(x) + C"
    },
    {
      english: "x sin(x) - cos(x) + C",
      arabic: "x sin(x) - cos(x) + C"
    },
    {
      english: "x cos(x) + sin(x) + C",
      arabic: "x cos(x) + sin(x) + C"
    },
    {
      english: "sin(x) + C",
      arabic: "sin(x) + C"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0006",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Infinite Series",
  difficulty: "Medium",
  questionEnglish:
    "What is the sum of the infinite geometric series 6 + 3 + 1.5 + 0.75 + ...?",
  questionArabic:
    "ما مجموع المتسلسلة الهندسية اللانهائية 6 + 3 + 1.5 + 0.75 + ...؟",
  options: [
    {
      english: "9",
      arabic: "9"
    },
    {
      english: "12",
      arabic: "12"
    },
    {
      english: "10",
      arabic: "10"
    },
    {
      english: "The series diverges",
      arabic: "المتسلسلة متباعدة"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0007",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Partial Derivatives",
  difficulty: "Medium",
  questionEnglish:
    "For f(x,y) = 3x²y + 2xy², find ∂f/∂x.",
  questionArabic:
    "للدالة f(x,y) = 3x²y + 2xy²، أوجد ∂f/∂x.",
  options: [
    {
      english: "6xy + 2y²",
      arabic: "6xy + 2y²"
    },
    {
      english: "3x² + 4xy",
      arabic: "3x² + 4xy"
    },
    {
      english: "6x + 4y",
      arabic: "6x + 4y"
    },
    {
      english: "6xy + 4xy",
      arabic: "6xy + 4xy"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0008",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Gradient",
  difficulty: "Hard",
  questionEnglish:
    "For f(x,y) = x² + xy + 2y², what is the gradient at the point (2,1)?",
  questionArabic:
    "للدالة f(x,y) = x² + xy + 2y²، ما متجه التدرج عند النقطة (2,1)؟",
  options: [
    {
      english: "⟨4, 5⟩",
      arabic: "⟨4، 5⟩"
    },
    {
      english: "⟨5, 6⟩",
      arabic: "⟨5، 6⟩"
    },
    {
      english: "⟨6, 5⟩",
      arabic: "⟨6، 5⟩"
    },
    {
      english: "⟨5, 4⟩",
      arabic: "⟨5، 4⟩"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0009",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "First-Order Differential Equations",
  difficulty: "Medium",
  questionEnglish:
    "Solve dy/dx = 4x³ with the initial condition y(0) = 5.",
  questionArabic:
    "حل المعادلة dy/dx = 4x³ مع الشرط الابتدائي y(0) = 5.",
  options: [
    {
      english: "y = 4x⁴ + 5",
      arabic: "y = 4x⁴ + 5"
    },
    {
      english: "y = x⁴ + 5",
      arabic: "y = x⁴ + 5"
    },
    {
      english: "y = x³ + 5",
      arabic: "y = x³ + 5"
    },
    {
      english: "y = 12x² + 5",
      arabic: "y = 12x² + 5"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0010",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Second-Order Homogeneous Equations",
  difficulty: "Hard",
  questionEnglish:
    "Find the general solution of y'' + 5y' + 6y = 0.",
  questionArabic:
    "أوجد الحل العام للمعادلة y'' + 5y' + 6y = 0.",
  options: [
    {
      english: "y = C₁e²ˣ + C₂e³ˣ",
      arabic: "y = C₁e²ˣ + C₂e³ˣ"
    },
    {
      english: "y = C₁e⁻²ˣ + C₂e⁻³ˣ",
      arabic: "y = C₁e⁻²ˣ + C₂e⁻³ˣ"
    },
    {
      english: "y = C₁cos(2x) + C₂sin(3x)",
      arabic: "y = C₁cos(2x) + C₂sin(3x)"
    },
    {
      english: "y = C₁e⁻⁵ˣ + C₂e⁻⁶ˣ",
      arabic: "y = C₁e⁻⁵ˣ + C₂e⁻⁶ˣ"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0011",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Kinematics",
  difficulty: "Easy",
  questionEnglish:
    "A vehicle starts from rest and accelerates uniformly at 4 m/s² for 5 seconds. What is its final velocity?",
  questionArabic:
    "تبدأ مركبة من السكون وتتسارع بانتظام بمقدار 4 م/ث² لمدة 5 ثوانٍ. ما سرعتها النهائية؟",
  options: [
    {
      english: "9 m/s",
      arabic: "9 م/ث"
    },
    {
      english: "20 m/s",
      arabic: "20 م/ث"
    },
    {
      english: "25 m/s",
      arabic: "25 م/ث"
    },
    {
      english: "40 m/s",
      arabic: "40 م/ث"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0012",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Work and Energy",
  difficulty: "Medium",
  questionEnglish:
    "What is the kinetic energy of a 5 kg object moving at 8 m/s?",
  questionArabic:
    "ما الطاقة الحركية لجسم كتلته 5 كجم ويتحرك بسرعة 8 م/ث؟",
  options: [
    {
      english: "80 J",
      arabic: "80 جول"
    },
    {
      english: "160 J",
      arabic: "160 جول"
    },
    {
      english: "320 J",
      arabic: "320 جول"
    },
    {
      english: "200 J",
      arabic: "200 جول"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0013",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Electric Fields",
  difficulty: "Medium",
  questionEnglish:
    "What is the electric-field magnitude 0.30 m from a point charge of 2 μC? Use k = 9 × 10⁹ N·m²/C².",
  questionArabic:
    "ما مقدار المجال الكهربائي على مسافة 0.30 م من شحنة نقطية مقدارها 2 ميكروكولوم؟ استخدم k = 9 × 10⁹ نيوتن·م²/كولوم².",
  options: [
    {
      english: "2.0 × 10⁴ N/C",
      arabic: "2.0 × 10⁴ نيوتن/كولوم"
    },
    {
      english: "6.0 × 10⁴ N/C",
      arabic: "6.0 × 10⁴ نيوتن/كولوم"
    },
    {
      english: "2.0 × 10⁵ N/C",
      arabic: "2.0 × 10⁵ نيوتن/كولوم"
    },
    {
      english: "6.0 × 10⁵ N/C",
      arabic: "6.0 × 10⁵ نيوتن/كولوم"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0014",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Capacitance",
  difficulty: "Medium",
  questionEnglish:
    "A 20 μF capacitor is connected to a 12 V source. What charge is stored on the capacitor?",
  questionArabic:
    "مكثف سعته 20 ميكروفاراد متصل بمصدر جهد 12 فولت. ما مقدار الشحنة المخزنة على المكثف؟",
  options: [
    {
      english: "240 μC",
      arabic: "240 ميكروكولوم"
    },
    {
      english: "1.67 μC",
      arabic: "1.67 ميكروكولوم"
    },
    {
      english: "32 μC",
      arabic: "32 ميكروكولوم"
    },
    {
      english: "600 μC",
      arabic: "600 ميكروكولوم"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0015",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Series Circuits",
  difficulty: "Easy",
  questionEnglish:
    "A 24 V source is connected to 4 Ω and 8 Ω resistors in series. What is the circuit current?",
  questionArabic:
    "مصدر جهد 24 فولت متصل بمقاومتين 4 أوم و8 أوم على التوالي. ما تيار الدائرة؟",
  options: [
    {
      english: "1 A",
      arabic: "1 أمبير"
    },
    {
      english: "2 A",
      arabic: "2 أمبير"
    },
    {
      english: "3 A",
      arabic: "3 أمبير"
    },
    {
      english: "6 A",
      arabic: "6 أمبير"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0016",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Parallel Circuits",
  difficulty: "Medium",
  questionEnglish:
    "What is the equivalent resistance of 6 Ω and 3 Ω resistors connected in parallel?",
  questionArabic:
    "ما المقاومة المكافئة لمقاومتين 6 أوم و3 أوم متصلتين على التوازي؟",
  options: [
    {
      english: "9 Ω",
      arabic: "9 أوم"
    },
    {
      english: "4.5 Ω",
      arabic: "4.5 أوم"
    },
    {
      english: "2 Ω",
      arabic: "2 أوم"
    },
    {
      english: "3 Ω",
      arabic: "3 أوم"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0017",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Kirchhoff's Voltage Law",
  difficulty: "Medium",
  questionEnglish:
    "A single loop contains a 20 V source and two voltage drops of 7 V and Vx. Using Kirchhoff's Voltage Law, find Vx.",
  questionArabic:
    "تحتوي دائرة مغلقة واحدة على مصدر جهد 20 فولت وهبوطي جهد مقدارهما 7 فولت وVx. باستخدام قانون كيرشوف للجهد، أوجد Vx.",
  options: [
    {
      english: "27 V",
      arabic: "27 فولت"
    },
    {
      english: "13 V",
      arabic: "13 فولت"
    },
    {
      english: "7 V",
      arabic: "7 فولت"
    },
    {
      english: "20 V",
      arabic: "20 فولت"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0018",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Power",
  difficulty: "Medium",
  questionEnglish:
    "A resistor carries 3 A and has a resistance of 4 Ω. How much power does it dissipate?",
  questionArabic:
    "يمر تيار مقداره 3 أمبير في مقاومة قيمتها 4 أوم. ما القدرة التي تبددها؟",
  options: [
    {
      english: "12 W",
      arabic: "12 وات"
    },
    {
      english: "24 W",
      arabic: "24 وات"
    },
    {
      english: "36 W",
      arabic: "36 وات"
    },
    {
      english: "48 W",
      arabic: "48 وات"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0019",
  domain: "Electrical Engineering",
  course: "EEL 3120 Linear Systems",
  topic: "System Linearity",
  difficulty: "Medium",
  questionEnglish:
    "Which system is linear?",
  questionArabic:
    "أي من الأنظمة التالية نظام خطي؟",
  options: [
    {
      english: "y(t) = 3x(t) + 2",
      arabic: "y(t) = 3x(t) + 2"
    },
    {
      english: "y(t) = x²(t)",
      arabic: "y(t) = x²(t)"
    },
    {
      english: "y(t) = 4x(t)",
      arabic: "y(t) = 4x(t)"
    },
    {
      english: "y(t) = |x(t)|",
      arabic: "y(t) = |x(t)|"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0020",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Sinusoidal Signals",
  difficulty: "Medium",
  questionEnglish:
    "What is the period of x(t) = cos(100πt)?",
  questionArabic:
    "ما زمن الدورة للإشارة x(t) = cos(100πt)؟",
  options: [
    {
      english: "0.01 s",
      arabic: "0.01 ثانية"
    },
    {
      english: "0.02 s",
      arabic: "0.02 ثانية"
    },
    {
      english: "0.05 s",
      arabic: "0.05 ثانية"
    },
    {
      english: "100 s",
      arabic: "100 ثانية"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0021",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Logic Gates",
  difficulty: "Easy",
  questionEnglish:
    "What is the output of an AND gate when its inputs are A = 1 and B = 0?",
  questionArabic:
    "ما خرج بوابة AND عندما يكون المدخلان A = 1 وB = 0؟",
  options: [
    {
      english: "1",
      arabic: "1"
    },
    {
      english: "0",
      arabic: "0"
    },
    {
      english: "Undefined",
      arabic: "غير معرف"
    },
    {
      english: "The output alternates",
      arabic: "الخرج يتغير بالتناوب"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0022",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Boolean Algebra",
  difficulty: "Medium",
  questionEnglish:
    "Simplify the Boolean expression A + A·B.",
  questionArabic:
    "بسّط التعبير المنطقي A + A·B.",
  options: [
    {
      english: "A",
      arabic: "A"
    },
    {
      english: "B",
      arabic: "B"
    },
    {
      english: "A·B",
      arabic: "A·B"
    },
    {
      english: "A + B",
      arabic: "A + B"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0023",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Binary Arithmetic",
  difficulty: "Easy",
  questionEnglish:
    "What is the decimal value of the binary number 110101₂?",
  questionArabic:
    "ما القيمة العشرية للعدد الثنائي 110101₂؟",
  options: [
    {
      english: "51",
      arabic: "51"
    },
    {
      english: "53",
      arabic: "53"
    },
    {
      english: "55",
      arabic: "55"
    },
    {
      english: "49",
      arabic: "49"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0024",
  domain: "Programming",
  course: "COP 2210 Programming I",
  topic: "Loops",
  difficulty: "Medium",
  questionEnglish:
    "What value is printed by the following Java code? int sum = 0; for (int i = 1; i <= 4; i++) { sum += i; } System.out.print(sum);",
  questionArabic:
    "ما القيمة التي يطبعها كود Java التالي؟ int sum = 0; for (int i = 1; i <= 4; i++) { sum += i; } System.out.print(sum);",
  options: [
    {
      english: "4",
      arabic: "4"
    },
    {
      english: "6",
      arabic: "6"
    },
    {
      english: "10",
      arabic: "10"
    },
    {
      english: "16",
      arabic: "16"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0025",
  domain: "Computer Science",
  course: "COP 3530 Data Structures",
  topic: "Binary Search",
  difficulty: "Hard",
  questionEnglish:
    "A sorted array contains 1,024 elements. In the worst case, approximately how many comparisons are required by binary search to determine whether a target is present?",
  questionArabic:
    "تحتوي مصفوفة مرتبة على 1,024 عنصرًا. في أسوأ حالة، ما العدد التقريبي للمقارنات التي يحتاجها البحث الثنائي لتحديد وجود قيمة مستهدفة؟",
  options: [
    {
      english: "10 comparisons",
      arabic: "10 مقارنات"
    },
    {
      english: "32 comparisons",
      arabic: "32 مقارنة"
    },
    {
      english: "512 comparisons",
      arabic: "512 مقارنة"
    },
    {
      english: "1,024 comparisons",
      arabic: "1,024 مقارنة"
    }
  ],
  correctAnswer: 0
},
{
  id: "ENG0026",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Chain Rule",
  difficulty: "Medium",
  questionEnglish:
    "Find the derivative of f(x) = (2x³ + 1)⁵.",
  questionArabic:
    "أوجد مشتقة الدالة f(x) = (2x³ + 1)⁵.",
  options: [
    {
      english: "10x²(2x³ + 1)⁴",
      arabic: "10x²(2x³ + 1)⁴"
    },
    {
      english: "30x²(2x³ + 1)⁴",
      arabic: "30x²(2x³ + 1)⁴"
    },
    {
      english: "5(2x³ + 1)⁴",
      arabic: "5(2x³ + 1)⁴"
    },
    {
      english: "30x³(2x³ + 1)⁵",
      arabic: "30x³(2x³ + 1)⁵"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0027",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Related Rates",
  difficulty: "Hard",
  questionEnglish:
    "The radius of a sphere increases at 0.5 cm/s. At what rate is its volume increasing when the radius is 4 cm?",
  questionArabic:
    "يزداد نصف قطر كرة بمعدل 0.5 سم/ث. ما معدل زيادة حجمها عندما يكون نصف القطر 4 سم؟",
  options: [
    {
      english: "8π cm³/s",
      arabic: "8π سم³/ث"
    },
    {
      english: "16π cm³/s",
      arabic: "16π سم³/ث"
    },
    {
      english: "32π cm³/s",
      arabic: "32π سم³/ث"
    },
    {
      english: "64π cm³/s",
      arabic: "64π سم³/ث"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0028",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Trigonometric Integration",
  difficulty: "Medium",
  questionEnglish:
    "Evaluate ∫sin(x)cos(x) dx.",
  questionArabic:
    "احسب التكامل ∫sin(x)cos(x) dx.",
  options: [
    {
      english: "sin²(x) + C",
      arabic: "sin²(x) + C"
    },
    {
      english: "-cos²(x) + C",
      arabic: "-cos²(x) + C"
    },
    {
      english: "½sin²(x) + C",
      arabic: "½sin²(x) + C"
    },
    {
      english: "½cos²(x) + C",
      arabic: "½cos²(x) + C"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0029",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Convergence Tests",
  difficulty: "Hard",
  questionEnglish:
    "Which statement is correct for the series Σ(1/n²) from n = 1 to infinity?",
  questionArabic:
    "أي عبارة صحيحة للمتسلسلة Σ(1/n²) من n = 1 إلى ما لا نهاية؟",
  options: [
    {
      english: "It diverges by the harmonic-series test",
      arabic: "تتباعد وفق اختبار المتسلسلة التوافقية"
    },
    {
      english: "It converges because it is a p-series with p = 2",
      arabic: "تتقارب لأنها متسلسلة من نوع p وقيمة p = 2"
    },
    {
      english: "It diverges because the terms are positive",
      arabic: "تتباعد لأن حدودها موجبة"
    },
    {
      english: "It oscillates without approaching a limit",
      arabic: "تتذبذب دون الاقتراب من نهاية"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0030",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Double Integrals",
  difficulty: "Medium",
  questionEnglish:
    "Evaluate ∬R (x + y) dA over the rectangle 0 ≤ x ≤ 1 and 0 ≤ y ≤ 2.",
  questionArabic:
    "احسب ∬R (x + y) dA على المستطيل 0 ≤ x ≤ 1 و0 ≤ y ≤ 2.",
  options: [
    {
      english: "2",
      arabic: "2"
    },
    {
      english: "3",
      arabic: "3"
    },
    {
      english: "4",
      arabic: "4"
    },
    {
      english: "6",
      arabic: "6"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0031",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Separable Equations",
  difficulty: "Medium",
  questionEnglish:
    "Solve dy/dx = xy with the initial condition y(0) = 3.",
  questionArabic:
    "حل المعادلة dy/dx = xy مع الشرط الابتدائي y(0) = 3.",
  options: [
    {
      english: "y = 3e^(x²/2)",
      arabic: "y = 3e^(x²/2)"
    },
    {
      english: "y = 3eˣ",
      arabic: "y = 3eˣ"
    },
    {
      english: "y = e^(3x²)",
      arabic: "y = e^(3x²)"
    },
    {
      english: "y = 3 + x²/2",
      arabic: "y = 3 + x²/2"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0032",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Momentum",
  difficulty: "Medium",
  questionEnglish:
    "A 3 kg cart moving at 6 m/s collides with a stationary 1 kg cart. They stick together. What is their common velocity after impact?",
  questionArabic:
    "تصطدم عربة كتلتها 3 كجم وتتحرك بسرعة 6 م/ث بعربة ساكنة كتلتها 1 كجم، وتلتصقان معًا. ما سرعتهما المشتركة بعد التصادم؟",
  options: [
    {
      english: "3.0 m/s",
      arabic: "3.0 م/ث"
    },
    {
      english: "4.5 m/s",
      arabic: "4.5 م/ث"
    },
    {
      english: "6.0 m/s",
      arabic: "6.0 م/ث"
    },
    {
      english: "2.0 m/s",
      arabic: "2.0 م/ث"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0033",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Rotational Motion",
  difficulty: "Hard",
  questionEnglish:
    "A wheel starts from rest and has a constant angular acceleration of 4 rad/s². What is its angular velocity after 3 seconds?",
  questionArabic:
    "تبدأ عجلة من السكون وتتسارع زاويًا بمعدل ثابت مقداره 4 راديان/ث². ما سرعتها الزاوية بعد 3 ثوانٍ؟",
  options: [
    {
      english: "7 rad/s",
      arabic: "7 راديان/ث"
    },
    {
      english: "12 rad/s",
      arabic: "12 راديان/ث"
    },
    {
      english: "16 rad/s",
      arabic: "16 راديان/ث"
    },
    {
      english: "24 rad/s",
      arabic: "24 راديان/ث"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0034",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Magnetic Force",
  difficulty: "Medium",
  questionEnglish:
    "A charge of 2 μC moves perpendicular to a 0.5 T magnetic field at 3 × 10⁴ m/s. What is the magnetic-force magnitude?",
  questionArabic:
    "تتحرك شحنة مقدارها 2 ميكروكولوم عموديًا على مجال مغناطيسي شدته 0.5 تسلا بسرعة 3 × 10⁴ م/ث. ما مقدار القوة المغناطيسية؟",
  options: [
    {
      english: "0.003 N",
      arabic: "0.003 نيوتن"
    },
    {
      english: "0.03 N",
      arabic: "0.03 نيوتن"
    },
    {
      english: "3 N",
      arabic: "3 نيوتن"
    },
    {
      english: "30 N",
      arabic: "30 نيوتن"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0035",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Induction",
  difficulty: "Hard",
  questionEnglish:
    "The magnetic flux through a single-turn loop changes from 0.08 Wb to 0.02 Wb in 0.01 s. What is the magnitude of the induced emf?",
  questionArabic:
    "يتغير الفيض المغناطيسي خلال حلقة ذات لفة واحدة من 0.08 ويبر إلى 0.02 ويبر خلال 0.01 ثانية. ما مقدار القوة الدافعة الكهربائية المستحثة؟",
  options: [
    {
      english: "0.6 V",
      arabic: "0.6 فولت"
    },
    {
      english: "6 V",
      arabic: "6 فولت"
    },
    {
      english: "10 V",
      arabic: "10 فولت"
    },
    {
      english: "60 V",
      arabic: "60 فولت"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0036",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Expected Value",
  difficulty: "Medium",
  questionEnglish:
    "A sensor reports 0 with probability 0.3 and 10 with probability 0.7. What is the expected sensor reading?",
  questionArabic:
    "يعطي مستشعر القراءة 0 باحتمال 0.3 والقراءة 10 باحتمال 0.7. ما القيمة المتوقعة للقراءة؟",
  options: [
    {
      english: "3",
      arabic: "3"
    },
    {
      english: "5",
      arabic: "5"
    },
    {
      english: "7",
      arabic: "7"
    },
    {
      english: "10",
      arabic: "10"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0037",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Present Worth",
  difficulty: "Medium",
  questionEnglish:
    "What is the present value of $11,025 received two years from now at an annual interest rate of 5%?",
  questionArabic:
    "ما القيمة الحالية لمبلغ 11,025 دولار سيتم استلامه بعد سنتين عند معدل فائدة سنوي 5%؟",
  options: [
    {
      english: "$9,500",
      arabic: "9,500 دولار"
    },
    {
      english: "$10,000",
      arabic: "10,000 دولار"
    },
    {
      english: "$10,500",
      arabic: "10,500 دولار"
    },
    {
      english: "$11,000",
      arabic: "11,000 دولار"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0038",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Voltage Division",
  difficulty: "Medium",
  questionEnglish:
    "A 12 V source is connected to 2 kΩ and 4 kΩ resistors in series. What is the voltage across the 4 kΩ resistor?",
  questionArabic:
    "مصدر جهد 12 فولت متصل بمقاومتين 2 كيلوأوم و4 كيلوأوم على التوالي. ما الجهد عبر مقاومة 4 كيلوأوم؟",
  options: [
    {
      english: "2 V",
      arabic: "2 فولت"
    },
    {
      english: "4 V",
      arabic: "4 فولت"
    },
    {
      english: "8 V",
      arabic: "8 فولت"
    },
    {
      english: "12 V",
      arabic: "12 فولت"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0039",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Current Division",
  difficulty: "Hard",
  questionEnglish:
    "A total current of 6 A enters two parallel resistors of 3 Ω and 6 Ω. What current flows through the 6 Ω resistor?",
  questionArabic:
    "يدخل تيار كلي مقداره 6 أمبير إلى مقاومتين على التوازي قيمتهما 3 أوم و6 أوم. ما التيار المار في مقاومة 6 أوم؟",
  options: [
    {
      english: "1 A",
      arabic: "1 أمبير"
    },
    {
      english: "2 A",
      arabic: "2 أمبير"
    },
    {
      english: "3 A",
      arabic: "3 أمبير"
    },
    {
      english: "4 A",
      arabic: "4 أمبير"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0040",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Thevenin Equivalent",
  difficulty: "Hard",
  questionEnglish:
    "A Thevenin equivalent has Vth = 18 V and Rth = 3 Ω. If a 6 Ω load is connected, what current flows through the load?",
  questionArabic:
    "مكافئ ثيفينن له Vth = 18 فولت وRth = 3 أوم. إذا تم توصيل حمل مقاومته 6 أوم، فما التيار المار في الحمل؟",
  options: [
    {
      english: "1 A",
      arabic: "1 أمبير"
    },
    {
      english: "2 A",
      arabic: "2 أمبير"
    },
    {
      english: "3 A",
      arabic: "3 أمبير"
    },
    {
      english: "6 A",
      arabic: "6 أمبير"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0041",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "RC Circuits",
  difficulty: "Medium",
  questionEnglish:
    "What is the time constant of an RC circuit with R = 10 kΩ and C = 20 μF?",
  questionArabic:
    "ما ثابت الزمن لدائرة RC إذا كانت R = 10 كيلوأوم وC = 20 ميكروفاراد؟",
  options: [
    {
      english: "0.02 s",
      arabic: "0.02 ثانية"
    },
    {
      english: "0.2 s",
      arabic: "0.2 ثانية"
    },
    {
      english: "2 s",
      arabic: "2 ثانية"
    },
    {
      english: "200 s",
      arabic: "200 ثانية"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0042",
  domain: "Signals and Systems",
  course: "EEL 3120 Linear Systems",
  topic: "Time Invariance",
  difficulty: "Hard",
  questionEnglish:
    "Which system is time invariant?",
  questionArabic:
    "أي من الأنظمة التالية ثابت مع الزمن؟",
  options: [
    {
      english: "y(t) = t x(t)",
      arabic: "y(t) = t x(t)"
    },
    {
      english: "y(t) = x(t - 3)",
      arabic: "y(t) = x(t - 3)"
    },
    {
      english: "y(t) = x(2t)",
      arabic: "y(t) = x(2t)"
    },
    {
      english: "y(t) = x(t) + t",
      arabic: "y(t) = x(t) + t"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0043",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Convolution",
  difficulty: "Hard",
  questionEnglish:
    "For an LTI system with input x(t) and impulse response h(t), how is the output y(t) obtained?",
  questionArabic:
    "لنظام خطي ثابت مع الزمن له دخل x(t) واستجابة نبضية h(t)، كيف يتم إيجاد الخرج y(t)؟",
  options: [
    {
      english: "By multiplying x(t) and h(t) point by point",
      arabic: "بضرب x(t) وh(t) نقطة بنقطة"
    },
    {
      english: "By differentiating x(t)",
      arabic: "باشتقاق x(t)"
    },
    {
      english: "By convolving x(t) with h(t)",
      arabic: "بإجراء الالتفاف بين x(t) وh(t)"
    },
    {
      english: "By integrating only h(t)",
      arabic: "بتكامل h(t) فقط"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0044",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "De Morgan's Theorem",
  difficulty: "Medium",
  questionEnglish:
    "Using De Morgan's theorem, what is the complement of A + B?",
  questionArabic:
    "باستخدام نظرية دي مورغان، ما متممة A + B؟",
  options: [
    {
      english: "A' + B'",
      arabic: "A' + B'"
    },
    {
      english: "A'B'",
      arabic: "A'B'"
    },
    {
      english: "AB",
      arabic: "AB"
    },
    {
      english: "A + B'",
      arabic: "A + B'"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0045",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Multiplexers",
  difficulty: "Medium",
  questionEnglish:
    "How many select lines are required for an 8-to-1 multiplexer?",
  questionArabic:
    "كم عدد خطوط الاختيار المطلوبة لمُضاعِف إرسال 8 إلى 1؟",
  options: [
    {
      english: "2",
      arabic: "2"
    },
    {
      english: "3",
      arabic: "3"
    },
    {
      english: "4",
      arabic: "4"
    },
    {
      english: "8",
      arabic: "8"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0046",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Flip-Flops",
  difficulty: "Medium",
  questionEnglish:
    "What is the next output of a D flip-flop at the active clock edge if D = 1?",
  questionArabic:
    "ما الخرج التالي لقَلّاب D عند حافة الساعة الفعالة إذا كانت D = 1؟",
  options: [
    {
      english: "0",
      arabic: "0"
    },
    {
      english: "1",
      arabic: "1"
    },
    {
      english: "It toggles",
      arabic: "يتبدل"
    },
    {
      english: "It remains undefined",
      arabic: "يبقى غير معرف"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0047",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Two's Complement",
  difficulty: "Medium",
  questionEnglish:
    "What is the 8-bit two's-complement representation of -5?",
  questionArabic:
    "ما تمثيل العدد -5 باستخدام المتمم الثنائي من 8 بت؟",
  options: [
    {
      english: "00000101",
      arabic: "00000101"
    },
    {
      english: "11111010",
      arabic: "11111010"
    },
    {
      english: "11111011",
      arabic: "11111011"
    },
    {
      english: "10000101",
      arabic: "10000101"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0048",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Memory Addressing",
  difficulty: "Hard",
  questionEnglish:
    "A byte-addressable memory has a 16-bit address bus. What is its maximum directly addressable memory capacity?",
  questionArabic:
    "ذاكرة قابلة للعنونة بالبايت ولديها ناقل عناوين بعرض 16 بت. ما أقصى سعة ذاكرة يمكن عنونتها مباشرة؟",
  options: [
    {
      english: "16 KB",
      arabic: "16 كيلوبايت"
    },
    {
      english: "32 KB",
      arabic: "32 كيلوبايت"
    },
    {
      english: "64 KB",
      arabic: "64 كيلوبايت"
    },
    {
      english: "128 KB",
      arabic: "128 كيلوبايت"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0049",
  domain: "Programming",
  course: "COP 2210 Programming I",
  topic: "Conditional Statements",
  difficulty: "Easy",
  questionEnglish:
    "What is printed by this Java code? int x = 12; if (x % 2 == 0) System.out.print(\"Even\"); else System.out.print(\"Odd\");",
  questionArabic:
    "ما الناتج المطبوع من كود Java التالي؟ int x = 12; if (x % 2 == 0) System.out.print(\"Even\"); else System.out.print(\"Odd\");",
  options: [
    {
      english: "Odd",
      arabic: "فردي"
    },
    {
      english: "Even",
      arabic: "زوجي"
    },
    {
      english: "12",
      arabic: "12"
    },
    {
      english: "Nothing",
      arabic: "لا شيء"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0050",
  domain: "Computer Science",
  course: "COP 3530 Data Structures",
  topic: "Stacks",
  difficulty: "Medium",
  questionEnglish:
    "A stack initially contains [A, B, C], where C is on top. After one pop operation and then push(D), what element is on top?",
  questionArabic:
    "يحتوي مكدس في البداية على [A، B، C] حيث تكون C في الأعلى. بعد تنفيذ عملية pop واحدة ثم push(D)، ما العنصر الموجود في الأعلى؟",
  options: [
    {
      english: "A",
      arabic: "A"
    },
    {
      english: "B",
      arabic: "B"
    },
    {
      english: "C",
      arabic: "C"
    },
    {
      english: "D",
      arabic: "D"
    }
  ],
  correctAnswer: 3
},
{
  id: "ENG0051",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Implicit Differentiation",
  difficulty: "Medium",
  questionEnglish:
    "Given x² + y² = 25, find dy/dx.",
  questionArabic:
    "إذا كانت x² + y² = 25، فأوجد dy/dx.",
  options: [
    {
      english: "-x/y",
      arabic: "-x/y"
    },
    {
      english: "x/y",
      arabic: "x/y"
    },
    {
      english: "-y/x",
      arabic: "-y/x"
    },
    {
      english: "2x + 2y",
      arabic: "2x + 2y"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0052",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Critical Points",
  difficulty: "Medium",
  questionEnglish:
    "For f(x) = x³ - 3x² + 2, at which x-values does f have critical points?",
  questionArabic:
    "للدالة f(x) = x³ - 3x² + 2، عند أي قيم لـ x توجد نقاط حرجة؟",
  options: [
    {
      english: "x = 1 and x = 2",
      arabic: "x = 1 وx = 2"
    },
    {
      english: "x = 0 and x = 2",
      arabic: "x = 0 وx = 2"
    },
    {
      english: "x = -1 and x = 2",
      arabic: "x = -1 وx = 2"
    },
    {
      english: "x = 0 and x = 3",
      arabic: "x = 0 وx = 3"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0053",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Improper Integrals",
  difficulty: "Hard",
  questionEnglish:
    "Evaluate the improper integral ∫₁^∞ 1/x² dx.",
  questionArabic:
    "احسب التكامل غير المحدد ∫₁^∞ 1/x² dx.",
  options: [
    {
      english: "0",
      arabic: "0"
    },
    {
      english: "1",
      arabic: "1"
    },
    {
      english: "2",
      arabic: "2"
    },
    {
      english: "The integral diverges",
      arabic: "التكامل متباعد"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0054",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Taylor Series",
  difficulty: "Hard",
  questionEnglish:
    "What is the first three nonzero terms of the Maclaurin series for eˣ?",
  questionArabic:
    "ما أول ثلاثة حدود غير صفرية في متسلسلة ماكلوران للدالة eˣ؟",
  options: [
    {
      english: "1 + x + x²/2",
      arabic: "1 + x + x²/2"
    },
    {
      english: "x + x² + x³",
      arabic: "x + x² + x³"
    },
    {
      english: "1 + x²/2 + x⁴/24",
      arabic: "1 + x²/2 + x⁴/24"
    },
    {
      english: "1 - x + x²/2",
      arabic: "1 - x + x²/2"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0055",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Directional Derivatives",
  difficulty: "Hard",
  questionEnglish:
    "For f(x,y) = x² + y², find the directional derivative at (1,2) in the direction of the unit vector ⟨3/5, 4/5⟩.",
  questionArabic:
    "للدالة f(x,y) = x² + y²، أوجد المشتقة الاتجاهية عند النقطة (1,2) في اتجاه متجه الوحدة ⟨3/5، 4/5⟩.",
  options: [
    {
      english: "14/5",
      arabic: "14/5"
    },
    {
      english: "18/5",
      arabic: "18/5"
    },
    {
      english: "22/5",
      arabic: "22/5"
    },
    {
      english: "5",
      arabic: "5"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0056",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Exponential Growth",
  difficulty: "Medium",
  questionEnglish:
    "A population satisfies dP/dt = 0.04P with P(0) = 500. What is P(t)?",
  questionArabic:
    "يحقق عدد السكان المعادلة dP/dt = 0.04P مع P(0) = 500. ما قيمة P(t)؟",
  options: [
    {
      english: "P(t) = 500e^(0.04t)",
      arabic: "P(t) = 500e^(0.04t)"
    },
    {
      english: "P(t) = 500 + 0.04t",
      arabic: "P(t) = 500 + 0.04t"
    },
    {
      english: "P(t) = 0.04e^(500t)",
      arabic: "P(t) = 0.04e^(500t)"
    },
    {
      english: "P(t) = 500e^(-0.04t)",
      arabic: "P(t) = 500e^(-0.04t)"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0057",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Newton's Second Law",
  difficulty: "Easy",
  questionEnglish:
    "What net force is required to accelerate a 12 kg object at 3 m/s²?",
  questionArabic:
    "ما القوة المحصلة المطلوبة لتسريع جسم كتلته 12 كجم بمعدل 3 م/ث²؟",
  options: [
    {
      english: "4 N",
      arabic: "4 نيوتن"
    },
    {
      english: "15 N",
      arabic: "15 نيوتن"
    },
    {
      english: "36 N",
      arabic: "36 نيوتن"
    },
    {
      english: "48 N",
      arabic: "48 نيوتن"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0058",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Gravitational Potential Energy",
  difficulty: "Medium",
  questionEnglish:
    "A 4 kg object is lifted 5 m above the ground. Using g = 9.8 m/s², what is the increase in gravitational potential energy?",
  questionArabic:
    "تم رفع جسم كتلته 4 كجم إلى ارتفاع 5 م فوق سطح الأرض. باستخدام g = 9.8 م/ث²، ما الزيادة في طاقة الوضع الج gravitationalية؟",
  options: [
    {
      english: "49 J",
      arabic: "49 جول"
    },
    {
      english: "98 J",
      arabic: "98 جول"
    },
    {
      english: "196 J",
      arabic: "196 جول"
    },
    {
      english: "392 J",
      arabic: "392 جول"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0059",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Coulomb's Law",
  difficulty: "Medium",
  questionEnglish:
    "Two point charges of 2 μC and 3 μC are separated by 0.20 m. What is the electric-force magnitude between them? Use k = 9 × 10⁹ N·m²/C².",
  questionArabic:
    "تفصل مسافة 0.20 م بين شحنتين نقطيتين مقدارهما 2 ميكروكولوم و3 ميكروكولوم. ما مقدار القوة الكهربائية بينهما؟ استخدم k = 9 × 10⁹ نيوتن·م²/كولوم².",
  options: [
    {
      english: "0.135 N",
      arabic: "0.135 نيوتن"
    },
    {
      english: "1.35 N",
      arabic: "1.35 نيوتن"
    },
    {
      english: "13.5 N",
      arabic: "13.5 نيوتن"
    },
    {
      english: "135 N",
      arabic: "135 نيوتن"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0060",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Electromagnetic Waves",
  difficulty: "Easy",
  questionEnglish:
    "What is the wavelength of an electromagnetic wave with frequency 100 MHz in free space? Use c = 3 × 10⁸ m/s.",
  questionArabic:
    "ما الطول الموجي لموجة كهرومغناطيسية ترددها 100 ميجاهرتز في الفراغ؟ استخدم c = 3 × 10⁸ م/ث.",
  options: [
    {
      english: "0.3 m",
      arabic: "0.3 م"
    },
    {
      english: "3 m",
      arabic: "3 م"
    },
    {
      english: "30 m",
      arabic: "30 م"
    },
    {
      english: "300 m",
      arabic: "300 م"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0061",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Variance",
  difficulty: "Medium",
  questionEnglish:
    "If a random variable X has variance 9, what is the standard deviation of X?",
  questionArabic:
    "إذا كان تباين المتغير العشوائي X يساوي 9، فما الانحراف المعياري لـ X؟",
  options: [
    {
      english: "1.5",
      arabic: "1.5"
    },
    {
      english: "3",
      arabic: "3"
    },
    {
      english: "4.5",
      arabic: "4.5"
    },
    {
      english: "81",
      arabic: "81"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0062",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Future Worth",
  difficulty: "Medium",
  questionEnglish:
    "What is the future value of $2,000 invested for three years at 10% annual compound interest?",
  questionArabic:
    "ما القيمة المستقبلية لمبلغ 2,000 دولار تم استثماره لمدة ثلاث سنوات بفائدة مركبة سنوية قدرها 10%؟",
  options: [
    {
      english: "$2,600",
      arabic: "2,600 دولار"
    },
    {
      english: "$2,620",
      arabic: "2,620 دولار"
    },
    {
      english: "$2,662",
      arabic: "2,662 دولار"
    },
    {
      english: "$2,800",
      arabic: "2,800 دولار"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0063",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Node Voltage Analysis",
  difficulty: "Hard",
  questionEnglish:
    "A node is connected to ground through a 4 Ω resistor and receives 3 A from an ideal current source. What is the node voltage relative to ground?",
  questionArabic:
    "تتصل عقدة بالأرضي من خلال مقاومة 4 أوم ويصل إليها تيار مقداره 3 أمبير من مصدر تيار مثالي. ما جهد العقدة بالنسبة إلى الأرضي؟",
  options: [
    {
      english: "0.75 V",
      arabic: "0.75 فولت"
    },
    {
      english: "7 V",
      arabic: "7 فولت"
    },
    {
      english: "12 V",
      arabic: "12 فولت"
    },
    {
      english: "16 V",
      arabic: "16 فولت"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0064",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Maximum Power Transfer",
  difficulty: "Hard",
  questionEnglish:
    "A Thevenin source has Rth = 8 Ω. What load resistance provides maximum power transfer?",
  questionArabic:
    "مصدر ثيفينن له Rth = 8 أوم. ما مقاومة الحمل التي تحقق أقصى انتقال للقدرة؟",
  options: [
    {
      english: "2 Ω",
      arabic: "2 أوم"
    },
    {
      english: "4 Ω",
      arabic: "4 أوم"
    },
    {
      english: "8 Ω",
      arabic: "8 أوم"
    },
    {
      english: "16 Ω",
      arabic: "16 أوم"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0065",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "RL Circuits",
  difficulty: "Medium",
  questionEnglish:
    "What is the time constant of an RL circuit with L = 2 H and R = 10 Ω?",
  questionArabic:
    "ما ثابت الزمن لدائرة RL إذا كانت L = 2 هنري وR = 10 أوم؟",
  options: [
    {
      english: "0.02 s",
      arabic: "0.02 ثانية"
    },
    {
      english: "0.2 s",
      arabic: "0.2 ثانية"
    },
    {
      english: "5 s",
      arabic: "5 ثوانٍ"
    },
    {
      english: "20 s",
      arabic: "20 ثانية"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0066",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Diodes",
  difficulty: "Easy",
  questionEnglish:
    "In the constant-voltage-drop model, what forward voltage is commonly assumed for a silicon diode?",
  questionArabic:
    "في نموذج هبوط الجهد الثابت، ما جهد الانحياز الأمامي المفترض عادةً لدايود السيليكون؟",
  options: [
    {
      english: "0.1 V",
      arabic: "0.1 فولت"
    },
    {
      english: "0.3 V",
      arabic: "0.3 فولت"
    },
    {
      english: "0.7 V",
      arabic: "0.7 فولت"
    },
    {
      english: "1.5 V",
      arabic: "1.5 فولت"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0067",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Operational Amplifiers",
  difficulty: "Medium",
  questionEnglish:
    "An ideal inverting op-amp has Rin = 2 kΩ and Rf = 10 kΩ. What is its voltage gain?",
  questionArabic:
    "مضخم عمليات عاكس مثالي له Rin = 2 كيلوأوم وRf = 10 كيلوأوم. ما كسب الجهد؟",
  options: [
    {
      english: "-5",
      arabic: "-5"
    },
    {
      english: "5",
      arabic: "5"
    },
    {
      english: "-0.2",
      arabic: "-0.2"
    },
    {
      english: "0.2",
      arabic: "0.2"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0068",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Frequency",
  difficulty: "Easy",
  questionEnglish:
    "A sinusoidal signal has a period of 4 ms. What is its frequency?",
  questionArabic:
    "إشارة جيبية لها زمن دورة مقداره 4 مللي ثانية. ما ترددها؟",
  options: [
    {
      english: "40 Hz",
      arabic: "40 هرتز"
    },
    {
      english: "100 Hz",
      arabic: "100 هرتز"
    },
    {
      english: "250 Hz",
      arabic: "250 هرتز"
    },
    {
      english: "400 Hz",
      arabic: "400 هرتز"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0069",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Exclusive-OR Gate",
  difficulty: "Easy",
  questionEnglish:
    "What is the output of an XOR gate when both inputs are 1?",
  questionArabic:
    "ما خرج بوابة XOR عندما يكون كلا المدخلين يساوي 1؟",
  options: [
    {
      english: "0",
      arabic: "0"
    },
    {
      english: "1",
      arabic: "1"
    },
    {
      english: "Undefined",
      arabic: "غير معرف"
    },
    {
      english: "High impedance",
      arabic: "ممانعة عالية"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0070",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Karnaugh Maps",
  difficulty: "Hard",
  questionEnglish:
    "In a Karnaugh map, why are adjacent cells grouped in powers of two?",
  questionArabic:
    "في خريطة كارنوف، لماذا يتم تجميع الخلايا المتجاورة في مجموعات ذات أحجام تساوي قوى العدد 2؟",
  options: [
    {
      english: "To eliminate changing Boolean variables",
      arabic: "لإلغاء المتغيرات المنطقية التي تتغير داخل المجموعة"
    },
    {
      english: "To increase the number of literals",
      arabic: "لزيادة عدد المتغيرات في التعبير"
    },
    {
      english: "To convert binary values to decimal",
      arabic: "لتحويل القيم الثنائية إلى عشرية"
    },
    {
      english: "To generate clock signals",
      arabic: "لتوليد إشارات الساعة"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0071",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Instruction Cycle",
  difficulty: "Medium",
  questionEnglish:
    "Which sequence correctly represents the basic CPU instruction cycle?",
  questionArabic:
    "أي تسلسل يمثل دورة تنفيذ التعليمة الأساسية في وحدة المعالجة المركزية بصورة صحيحة؟",
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
      english: "Store, fetch, interrupt",
      arabic: "تخزين، جلب، مقاطعة"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0072",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Cache Memory",
  difficulty: "Hard",
  questionEnglish:
    "Which type of cache miss occurs when two frequently used memory blocks repeatedly map to the same cache line?",
  questionArabic:
    "ما نوع إخفاق الذاكرة المخبأة الذي يحدث عندما يتم تعيين كتلتين مستخدمتين بشكل متكرر إلى سطر الذاكرة المخبأة نفسه؟",
  options: [
    {
      english: "Compulsory miss",
      arabic: "إخفاق إجباري"
    },
    {
      english: "Capacity miss",
      arabic: "إخفاق السعة"
    },
    {
      english: "Conflict miss",
      arabic: "إخفاق التعارض"
    },
    {
      english: "Write miss",
      arabic: "إخفاق الكتابة"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0073",
  domain: "Programming",
  course: "COP 3337 Programming II",
  topic: "Object-Oriented Programming",
  difficulty: "Medium",
  questionEnglish:
    "Which object-oriented programming principle allows a subclass to provide its own implementation of a method defined in a superclass?",
  questionArabic:
    "أي مبدأ في البرمجة كائنية التوجه يسمح للفئة الفرعية بتوفير تنفيذ خاص بها لطريقة معرفة في الفئة الأساسية؟",
  options: [
    {
      english: "Encapsulation",
      arabic: "التغليف"
    },
    {
      english: "Method overriding",
      arabic: "إعادة تعريف الطريقة"
    },
    {
      english: "Method overloading",
      arabic: "التحميل الزائد للطريقة"
    },
    {
      english: "Data abstraction",
      arabic: "تجريد البيانات"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0074",
  domain: "Computer Science",
  course: "COP 3530 Data Structures",
  topic: "Queues",
  difficulty: "Easy",
  questionEnglish:
    "Which ordering principle is used by a standard queue?",
  questionArabic:
    "ما مبدأ الترتيب المستخدم في الطابور القياسي؟",
  options: [
    {
      english: "Last in, first out",
      arabic: "آخر داخل، أول خارج"
    },
    {
      english: "First in, first out",
      arabic: "أول داخل، أول خارج"
    },
    {
      english: "Highest value first",
      arabic: "أعلى قيمة أولًا"
    },
    {
      english: "Random order",
      arabic: "ترتيب عشوائي"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0075",
  domain: "Networking",
  course: "TCN 4211 Computer Communication Networks",
  topic: "IPv4 Addressing",
  difficulty: "Medium",
  questionEnglish:
    "How many usable host addresses are available in an IPv4 /26 subnet?",
  questionArabic:
    "كم عدد عناوين المضيف القابلة للاستخدام في شبكة IPv4 ذات البادئة /26؟",
  options: [
    {
      english: "30",
      arabic: "30"
    },
    {
      english: "62",
      arabic: "62"
    },
    {
      english: "64",
      arabic: "64"
    },
    {
      english: "126",
      arabic: "126"
    }
  ],
  correctAnswer: 1
},
{
  id: "ENG0076",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Product Rule",
  difficulty: "Easy",
  questionEnglish:
    "Find the derivative of f(x) = x²eˣ.",
  questionArabic:
    "أوجد مشتقة الدالة f(x) = x²eˣ.",
  options: [
    {
      english: "2xeˣ",
      arabic: "2xeˣ"
    },
    {
      english: "eˣ(x² + 2x)",
      arabic: "eˣ(x² + 2x)"
    },
    {
      english: "x²eˣ",
      arabic: "x²eˣ"
    },
    {
      english: "eˣ(x + 2)",
      arabic: "eˣ(x + 2)"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0077",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Linear Approximation",
  difficulty: "Medium",
  questionEnglish:
    "Use linear approximation at x = 4 to estimate √4.1.",
  questionArabic:
    "استخدم التقريب الخطي عند x = 4 لتقدير √4.1.",
  options: [
    {
      english: "2.025",
      arabic: "2.025"
    },
    {
      english: "2.050",
      arabic: "2.050"
    },
    {
      english: "2.100",
      arabic: "2.100"
    },
    {
      english: "2.200",
      arabic: "2.200"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0078",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Arc Length",
  difficulty: "Hard",
  questionEnglish:
    "Which integral gives the arc length of y = x² from x = 0 to x = 1?",
  questionArabic:
    "أي تكامل يمثل طول قوس المنحنى y = x² من x = 0 إلى x = 1؟",
  options: [
    {
      english: "∫₀¹ √(1 + 2x) dx",
      arabic: "∫₀¹ √(1 + 2x) dx"
    },
    {
      english: "∫₀¹ √(1 + 4x²) dx",
      arabic: "∫₀¹ √(1 + 4x²) dx"
    },
    {
      english: "∫₀¹ (1 + 4x²) dx",
      arabic: "∫₀¹ (1 + 4x²) dx"
    },
    {
      english: "∫₀¹ 2x dx",
      arabic: "∫₀¹ 2x dx"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0079",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Power Series",
  difficulty: "Hard",
  questionEnglish:
    "What is the radius of convergence of the power series Σ(xⁿ/3ⁿ) from n = 0 to infinity?",
  questionArabic:
    "ما نصف قطر تقارب متسلسلة القوى Σ(xⁿ/3ⁿ) من n = 0 إلى ما لا نهاية؟",
  options: [
    {
      english: "1/3",
      arabic: "1/3"
    },
    {
      english: "1",
      arabic: "1"
    },
    {
      english: "3",
      arabic: "3"
    },
    {
      english: "Infinity",
      arabic: "ما لا نهاية"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0080",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Triple Integrals",
  difficulty: "Medium",
  questionEnglish:
    "Evaluate ∭V 1 dV over the rectangular box 0 ≤ x ≤ 2, 0 ≤ y ≤ 3, and 0 ≤ z ≤ 4.",
  questionArabic:
    "احسب ∭V 1 dV على متوازي المستطيلات 0 ≤ x ≤ 2 و0 ≤ y ≤ 3 و0 ≤ z ≤ 4.",
  options: [
    {
      english: "9",
      arabic: "9"
    },
    {
      english: "12",
      arabic: "12"
    },
    {
      english: "18",
      arabic: "18"
    },
    {
      english: "24",
      arabic: "24"
    }
  ],
  correctAnswer: 3
},

{
  id: "ENG0081",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Laplace Transforms",
  difficulty: "Medium",
  questionEnglish:
    "What is the Laplace transform of f(t) = 1?",
  questionArabic:
    "ما تحويل لابلاس للدالة f(t) = 1؟",
  options: [
    {
      english: "1/s",
      arabic: "1/s"
    },
    {
      english: "s",
      arabic: "s"
    },
    {
      english: "1/s²",
      arabic: "1/s²"
    },
    {
      english: "e⁻ˢ",
      arabic: "e⁻ˢ"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0082",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Circular Motion",
  difficulty: "Medium",
  questionEnglish:
    "A 2 kg object moves in a circle of radius 4 m at a constant speed of 6 m/s. What is the centripetal force?",
  questionArabic:
    "يتحرك جسم كتلته 2 كجم في دائرة نصف قطرها 4 م بسرعة ثابتة مقدارها 6 م/ث. ما القوة المركزية؟",
  options: [
    {
      english: "9 N",
      arabic: "9 نيوتن"
    },
    {
      english: "18 N",
      arabic: "18 نيوتن"
    },
    {
      english: "24 N",
      arabic: "24 نيوتن"
    },
    {
      english: "36 N",
      arabic: "36 نيوتن"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0083",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Simple Harmonic Motion",
  difficulty: "Hard",
  questionEnglish:
    "A mass-spring system has mass m = 2 kg and spring constant k = 18 N/m. What is its angular frequency?",
  questionArabic:
    "لنظام كتلة ونابض كتلة m = 2 كجم وثابت نابض k = 18 نيوتن/م. ما تردده الزاوي؟",
  options: [
    {
      english: "2 rad/s",
      arabic: "2 راديان/ث"
    },
    {
      english: "3 rad/s",
      arabic: "3 راديان/ث"
    },
    {
      english: "6 rad/s",
      arabic: "6 راديان/ث"
    },
    {
      english: "9 rad/s",
      arabic: "9 راديان/ث"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0084",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Electric Potential",
  difficulty: "Medium",
  questionEnglish:
    "What is the electric potential 0.50 m from a point charge of 4 μC? Use k = 9 × 10⁹ N·m²/C².",
  questionArabic:
    "ما الجهد الكهربائي على مسافة 0.50 م من شحنة نقطية مقدارها 4 ميكروكولوم؟ استخدم k = 9 × 10⁹ نيوتن·م²/كولوم².",
  options: [
    {
      english: "18,000 V",
      arabic: "18,000 فولت"
    },
    {
      english: "36,000 V",
      arabic: "36,000 فولت"
    },
    {
      english: "72,000 V",
      arabic: "72,000 فولت"
    },
    {
      english: "144,000 V",
      arabic: "144,000 فولت"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0085",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Resistivity",
  difficulty: "Medium",
  questionEnglish:
    "If the length of a uniform wire is doubled while its cross-sectional area and material remain unchanged, what happens to its resistance?",
  questionArabic:
    "إذا تضاعف طول سلك منتظم بينما ظلت مساحة مقطعه ومادته دون تغيير، فماذا يحدث لمقاومته؟",
  options: [
    {
      english: "It is halved",
      arabic: "تنخفض إلى النصف"
    },
    {
      english: "It remains unchanged",
      arabic: "تظل دون تغيير"
    },
    {
      english: "It doubles",
      arabic: "تتضاعف"
    },
    {
      english: "It becomes four times larger",
      arabic: "تصبح أربعة أضعاف"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0086",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Normal Distribution",
  difficulty: "Medium",
  questionEnglish:
    "A measurement has mean 50 and standard deviation 5. What is the z-score of a value equal to 60?",
  questionArabic:
    "قياس له متوسط 50 وانحراف معياري 5. ما الدرجة المعيارية z لقيمة تساوي 60؟",
  options: [
    {
      english: "1",
      arabic: "1"
    },
    {
      english: "2",
      arabic: "2"
    },
    {
      english: "5",
      arabic: "5"
    },
    {
      english: "10",
      arabic: "10"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0087",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Payback Period",
  difficulty: "Easy",
  questionEnglish:
    "A project requires an initial investment of $40,000 and generates $10,000 per year. Ignoring interest, what is the simple payback period?",
  questionArabic:
    "يتطلب مشروع استثمارًا أوليًا قدره 40,000 دولار ويحقق 10,000 دولار سنويًا. مع تجاهل الفائدة، ما فترة الاسترداد البسيطة؟",
  options: [
    {
      english: "2 years",
      arabic: "سنتان"
    },
    {
      english: "3 years",
      arabic: "3 سنوات"
    },
    {
      english: "4 years",
      arabic: "4 سنوات"
    },
    {
      english: "5 years",
      arabic: "5 سنوات"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0088",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Mesh Analysis",
  difficulty: "Medium",
  questionEnglish:
    "A single mesh contains a 15 V source and resistors of 2 Ω and 3 Ω in series. What is the mesh current?",
  questionArabic:
    "تحتوي حلقة واحدة على مصدر جهد 15 فولت ومقاومتين 2 أوم و3 أوم على التوالي. ما تيار الحلقة؟",
  options: [
    {
      english: "2 A",
      arabic: "2 أمبير"
    },
    {
      english: "3 A",
      arabic: "3 أمبير"
    },
    {
      english: "5 A",
      arabic: "5 أمبير"
    },
    {
      english: "7.5 A",
      arabic: "7.5 أمبير"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0089",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Source Transformation",
  difficulty: "Medium",
  questionEnglish:
    "A 12 V ideal voltage source in series with a 4 Ω resistor is equivalent to which current source?",
  questionArabic:
    "مصدر جهد مثالي مقداره 12 فولت على التوالي مع مقاومة 4 أوم يكافئ أي مصدر تيار؟",
  options: [
    {
      english: "3 A in parallel with 4 Ω",
      arabic: "3 أمبير على التوازي مع 4 أوم"
    },
    {
      english: "3 A in series with 4 Ω",
      arabic: "3 أمبير على التوالي مع 4 أوم"
    },
    {
      english: "48 A in parallel with 4 Ω",
      arabic: "48 أمبير على التوازي مع 4 أوم"
    },
    {
      english: "0.33 A in parallel with 4 Ω",
      arabic: "0.33 أمبير على التوازي مع 4 أوم"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0090",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "AC Impedance",
  difficulty: "Hard",
  questionEnglish:
    "What is the impedance of an ideal inductor with L = 0.2 H at angular frequency ω = 50 rad/s?",
  questionArabic:
    "ما ممانعة ملف مثالي له L = 0.2 هنري عند تردد زاوي ω = 50 راديان/ث؟",
  options: [
    {
      english: "j10 Ω",
      arabic: "j10 أوم"
    },
    {
      english: "-j10 Ω",
      arabic: "-j10 أوم"
    },
    {
      english: "10 Ω",
      arabic: "10 أوم"
    },
    {
      english: "j250 Ω",
      arabic: "j250 أوم"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0091",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Bipolar Junction Transistors",
  difficulty: "Medium",
  questionEnglish:
    "A BJT has a current gain β = 100 and base current IB = 20 μA. Assuming active-region operation, what is the collector current?",
  questionArabic:
    "ترانزستور BJT له كسب تيار β = 100 وتيار قاعدة IB = 20 ميكروأمبير. بافتراض التشغيل في المنطقة الفعالة، ما تيار المجمع؟",
  options: [
    {
      english: "0.2 mA",
      arabic: "0.2 مللي أمبير"
    },
    {
      english: "2 mA",
      arabic: "2 مللي أمبير"
    },
    {
      english: "20 mA",
      arabic: "20 مللي أمبير"
    },
    {
      english: "200 mA",
      arabic: "200 مللي أمبير"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0092",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "MOSFET Operation",
  difficulty: "Medium",
  questionEnglish:
    "For an enhancement-mode n-channel MOSFET, what condition is generally required to form a conducting channel?",
  questionArabic:
    "بالنسبة إلى MOSFET من نوع n-channel يعمل بنمط التعزيز، ما الشرط المطلوب عادةً لتكوين قناة توصيل؟",
  options: [
    {
      english: "VGS must be greater than the threshold voltage",
      arabic: "يجب أن يكون VGS أكبر من جهد العتبة"
    },
    {
      english: "VGS must always equal zero",
      arabic: "يجب أن يساوي VGS صفرًا دائمًا"
    },
    {
      english: "VDS must be negative",
      arabic: "يجب أن يكون VDS سالبًا"
    },
    {
      english: "The gate current must be very large",
      arabic: "يجب أن يكون تيار البوابة كبيرًا جدًا"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0093",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Sampling",
  difficulty: "Hard",
  questionEnglish:
    "According to the Nyquist sampling criterion, what is the minimum sampling frequency required for a signal whose highest frequency component is 5 kHz?",
  questionArabic:
    "وفقًا لمعيار نايكويست لأخذ العينات، ما أقل تردد أخذ عينات مطلوب لإشارة أعلى مكون ترددي فيها يساوي 5 كيلوهرتز؟",
  options: [
    {
      english: "2.5 kHz",
      arabic: "2.5 كيلوهرتز"
    },
    {
      english: "5 kHz",
      arabic: "5 كيلوهرتز"
    },
    {
      english: "10 kHz",
      arabic: "10 كيلوهرتز"
    },
    {
      english: "20 kHz",
      arabic: "20 كيلوهرتز"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0094",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Decoders",
  difficulty: "Medium",
  questionEnglish:
    "How many output lines does a standard 3-to-8 decoder have?",
  questionArabic:
    "كم عدد خطوط الخرج في مفكك ترميز قياسي 3 إلى 8؟",
  options: [
    {
      english: "3",
      arabic: "3"
    },
    {
      english: "6",
      arabic: "6"
    },
    {
      english: "8",
      arabic: "8"
    },
    {
      english: "16",
      arabic: "16"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0095",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Counters",
  difficulty: "Medium",
  questionEnglish:
    "How many flip-flops are required for a binary counter that counts from 0 through 15?",
  questionArabic:
    "كم عدد القلابات المطلوبة لعداد ثنائي يعد من 0 إلى 15؟",
  options: [
    {
      english: "2",
      arabic: "2"
    },
    {
      english: "3",
      arabic: "3"
    },
    {
      english: "4",
      arabic: "4"
    },
    {
      english: "5",
      arabic: "5"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0096",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Pipelining",
  difficulty: "Hard",
  questionEnglish:
    "Which pipeline hazard occurs when one instruction depends on the result of a previous instruction that has not yet completed?",
  questionArabic:
    "ما نوع خطر خط الأنابيب الذي يحدث عندما تعتمد تعليمة على نتيجة تعليمة سابقة لم يكتمل تنفيذها بعد؟",
  options: [
    {
      english: "Structural hazard",
      arabic: "خطر هيكلي"
    },
    {
      english: "Data hazard",
      arabic: "خطر بيانات"
    },
    {
      english: "Control hazard",
      arabic: "خطر تحكم"
    },
    {
      english: "Memory overflow",
      arabic: "تجاوز سعة الذاكرة"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0097",
  domain: "Embedded Systems",
  course: "EEL 4730 Programming Embedded Systems",
  topic: "Interrupts",
  difficulty: "Medium",
  questionEnglish:
    "What is the primary advantage of using an interrupt instead of continuously polling an input device?",
  questionArabic:
    "ما الميزة الأساسية لاستخدام المقاطعة بدلًا من الاستطلاع المستمر لجهاز إدخال؟",
  options: [
    {
      english: "It allows the processor to perform other tasks until service is needed",
      arabic: "يسمح للمعالج بتنفيذ مهام أخرى حتى تصبح الخدمة مطلوبة"
    },
    {
      english: "It permanently disables the input device",
      arabic: "يعطل جهاز الإدخال بصورة دائمة"
    },
    {
      english: "It removes the need for software",
      arabic: "يلغي الحاجة إلى البرمجيات"
    },
    {
      english: "It guarantees zero execution time",
      arabic: "يضمن زمن تنفيذ يساوي صفرًا"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0098",
  domain: "Programming",
  course: "COP 3337 Programming II",
  topic: "Recursion",
  difficulty: "Medium",
  questionEnglish:
    "What is returned by factorial(4) if factorial(n) is defined recursively as n × factorial(n - 1), with factorial(0) = 1?",
  questionArabic:
    "ما القيمة التي تعيدها factorial(4) إذا عُرّفت factorial(n) تكراريًا على أنها n × factorial(n - 1)، مع factorial(0) = 1؟",
  options: [
    {
      english: "4",
      arabic: "4"
    },
    {
      english: "12",
      arabic: "12"
    },
    {
      english: "24",
      arabic: "24"
    },
    {
      english: "120",
      arabic: "120"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0099",
  domain: "Computer Science",
  course: "COP 3530 Data Structures",
  topic: "Linked Lists",
  difficulty: "Medium",
  questionEnglish:
    "In a singly linked list, which field allows a node to reference the following node?",
  questionArabic:
    "في القائمة المرتبطة أحادية الاتجاه، أي حقل يسمح للعقدة بالإشارة إلى العقدة التالية؟",
  options: [
    {
      english: "The data field",
      arabic: "حقل البيانات"
    },
    {
      english: "The next pointer",
      arabic: "المؤشر next"
    },
    {
      english: "The index field",
      arabic: "حقل الفهرس"
    },
    {
      english: "The root pointer",
      arabic: "مؤشر الجذر"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0100",
  domain: "Networking",
  course: "TCN 4211 Computer Communication Networks",
  topic: "OSI Model",
  difficulty: "Easy",
  questionEnglish:
    "At which OSI layer does IP routing primarily operate?",
  questionArabic:
    "في أي طبقة من نموذج OSI تعمل عملية توجيه IP بصورة أساسية؟",
  options: [
    {
      english: "Physical layer",
      arabic: "الطبقة الفيزيائية"
    },
    {
      english: "Data-link layer",
      arabic: "طبقة ربط البيانات"
    },
    {
      english: "Network layer",
      arabic: "طبقة الشبكة"
    },
    {
      english: "Transport layer",
      arabic: "طبقة النقل"
    }
  ],
  correctAnswer: 2
},
{
  id: "ENG0101",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Quotient Rule",
  difficulty: "Medium",
  questionEnglish:
    "Find the derivative of f(x) = (x² + 1)/x.",
  questionArabic:
    "أوجد مشتقة الدالة f(x) = (x² + 1)/x.",
  options: [
    {
      english: "1 - 1/x²",
      arabic: "1 - 1/x²"
    },
    {
      english: "1 + 1/x²",
      arabic: "1 + 1/x²"
    },
    {
      english: "2x/x",
      arabic: "2x/x"
    },
    {
      english: "(x² - 1)/x",
      arabic: "(x² - 1)/x"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0102",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Mean Value Theorem",
  difficulty: "Medium",
  questionEnglish:
    "For f(x) = x² on the interval [1,3], what value of c satisfies the Mean Value Theorem?",
  questionArabic:
    "للدالة f(x) = x² على الفترة [1,3]، ما قيمة c التي تحقق نظرية القيمة المتوسطة؟",
  options: [
    {
      english: "1",
      arabic: "1"
    },
    {
      english: "1.5",
      arabic: "1.5"
    },
    {
      english: "2",
      arabic: "2"
    },
    {
      english: "3",
      arabic: "3"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0103",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Volumes of Revolution",
  difficulty: "Medium",
  questionEnglish:
    "Using the disk method, what integral gives the volume generated by rotating y = x² from x = 0 to x = 1 about the x-axis?",
  questionArabic:
    "باستخدام طريقة الأقراص، أي تكامل يمثل الحجم الناتج عن تدوير y = x² من x = 0 إلى x = 1 حول محور x؟",
  options: [
    {
      english: "π∫₀¹ x² dx",
      arabic: "π∫₀¹ x² dx"
    },
    {
      english: "2π∫₀¹ x² dx",
      arabic: "2π∫₀¹ x² dx"
    },
    {
      english: "π∫₀¹ x⁴ dx",
      arabic: "π∫₀¹ x⁴ dx"
    },
    {
      english: "π∫₀¹ 2x dx",
      arabic: "π∫₀¹ 2x dx"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0104",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Alternating Series",
  difficulty: "Hard",
  questionEnglish:
    "Which condition is required for the alternating series Σ(-1)ⁿbₙ to converge by the Alternating Series Test?",
  questionArabic:
    "ما الشرط المطلوب لتقارب المتسلسلة المتناوبة Σ(-1)ⁿbₙ باستخدام اختبار المتسلسلة المتناوبة؟",
  options: [
    {
      english: "bₙ must increase without bound",
      arabic: "يجب أن تزداد bₙ دون حد"
    },
    {
      english: "bₙ must be decreasing and approach zero",
      arabic: "يجب أن تكون bₙ متناقصة وتقترب من الصفر"
    },
    {
      english: "bₙ must always be negative",
      arabic: "يجب أن تكون bₙ سالبة دائمًا"
    },
    {
      english: "The ratio bₙ₊₁/bₙ must equal one",
      arabic: "يجب أن تساوي النسبة bₙ₊₁/bₙ واحدًا"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0105",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Divergence",
  difficulty: "Hard",
  questionEnglish:
    "For the vector field F = ⟨x², 3y, 2z⟩, what is ∇·F?",
  questionArabic:
    "لمجال المتجهات F = ⟨x²، 3y، 2z⟩، ما قيمة ∇·F؟",
  options: [
    {
      english: "2x + 5",
      arabic: "2x + 5"
    },
    {
      english: "x² + 3y + 2z",
      arabic: "x² + 3y + 2z"
    },
    {
      english: "2x + 3y + 2z",
      arabic: "2x + 3y + 2z"
    },
    {
      english: "2x + 3",
      arabic: "2x + 3"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0106",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Characteristic Equations",
  difficulty: "Hard",
  questionEnglish:
    "What is the general solution of y'' - 4y = 0?",
  questionArabic:
    "ما الحل العام للمعادلة y'' - 4y = 0؟",
  options: [
    {
      english: "y = C₁cos(2x) + C₂sin(2x)",
      arabic: "y = C₁cos(2x) + C₂sin(2x)"
    },
    {
      english: "y = C₁e²ˣ + C₂e⁻²ˣ",
      arabic: "y = C₁e²ˣ + C₂e⁻²ˣ"
    },
    {
      english: "y = C₁e⁴ˣ + C₂e⁻⁴ˣ",
      arabic: "y = C₁e⁴ˣ + C₂e⁻⁴ˣ"
    },
    {
      english: "y = C₁ + C₂x",
      arabic: "y = C₁ + C₂x"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0107",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Impulse",
  difficulty: "Medium",
  questionEnglish:
    "A constant force of 10 N acts on an object for 0.4 s. What impulse is delivered?",
  questionArabic:
    "تؤثر قوة ثابتة مقدارها 10 نيوتن على جسم لمدة 0.4 ثانية. ما مقدار الدفع الناتج؟",
  options: [
    {
      english: "2 N·s",
      arabic: "2 نيوتن·ثانية"
    },
    {
      english: "4 N·s",
      arabic: "4 نيوتن·ثانية"
    },
    {
      english: "10 N·s",
      arabic: "10 نيوتن·ثانية"
    },
    {
      english: "25 N·s",
      arabic: "25 نيوتن·ثانية"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0108",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Torque",
  difficulty: "Medium",
  questionEnglish:
    "A 20 N force is applied perpendicular to a wrench 0.30 m from the pivot. What torque is produced?",
  questionArabic:
    "تؤثر قوة مقدارها 20 نيوتن عموديًا على مفتاح ربط على بعد 0.30 م من محور الدوران. ما عزم الدوران الناتج؟",
  options: [
    {
      english: "3 N·m",
      arabic: "3 نيوتن·متر"
    },
    {
      english: "6 N·m",
      arabic: "6 نيوتن·متر"
    },
    {
      english: "20 N·m",
      arabic: "20 نيوتن·متر"
    },
    {
      english: "66.7 N·m",
      arabic: "66.7 نيوتن·متر"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0109",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Capacitors in Series",
  difficulty: "Medium",
  questionEnglish:
    "What is the equivalent capacitance of 6 μF and 3 μF capacitors connected in series?",
  questionArabic:
    "ما السعة المكافئة لمكثفين سعتهما 6 ميكروفاراد و3 ميكروفاراد متصلين على التوالي؟",
  options: [
    {
      english: "2 μF",
      arabic: "2 ميكروفاراد"
    },
    {
      english: "3 μF",
      arabic: "3 ميكروفاراد"
    },
    {
      english: "4.5 μF",
      arabic: "4.5 ميكروفاراد"
    },
    {
      english: "9 μF",
      arabic: "9 ميكروفاراد"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0110",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Magnetic Fields",
  difficulty: "Medium",
  questionEnglish:
    "What is the magnetic-field magnitude 0.10 m from a long straight wire carrying 5 A? Use μ₀ = 4π × 10⁻⁷ T·m/A.",
  questionArabic:
    "ما مقدار المجال المغناطيسي على بعد 0.10 م من سلك مستقيم طويل يمر به تيار مقداره 5 أمبير؟ استخدم μ₀ = 4π × 10⁻⁷ تسلا·م/أمبير.",
  options: [
    {
      english: "1 × 10⁻⁶ T",
      arabic: "1 × 10⁻⁶ تسلا"
    },
    {
      english: "1 × 10⁻⁵ T",
      arabic: "1 × 10⁻⁵ تسلا"
    },
    {
      english: "5 × 10⁻⁵ T",
      arabic: "5 × 10⁻⁵ تسلا"
    },
    {
      english: "1 × 10⁻⁴ T",
      arabic: "1 × 10⁻⁴ تسلا"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0111",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Conditional Probability",
  difficulty: "Medium",
  questionEnglish:
    "If P(A ∩ B) = 0.20 and P(B) = 0.50, what is P(A|B)?",
  questionArabic:
    "إذا كانت P(A ∩ B) = 0.20 وP(B) = 0.50، فما قيمة P(A|B)؟",
  options: [
    {
      english: "0.10",
      arabic: "0.10"
    },
    {
      english: "0.20",
      arabic: "0.20"
    },
    {
      english: "0.40",
      arabic: "0.40"
    },
    {
      english: "0.70",
      arabic: "0.70"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0112",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Annual Worth",
  difficulty: "Medium",
  questionEnglish:
    "A machine costs $20,000 and has a useful life of five years with no salvage value. Ignoring interest, what is its equivalent uniform annual cost?",
  questionArabic:
    "تكلف آلة 20,000 دولار وعمرها التشغيلي خمس سنوات دون قيمة متبقية. مع تجاهل الفائدة، ما تكلفتها السنوية المنتظمة المكافئة؟",
  options: [
    {
      english: "$2,000 per year",
      arabic: "2,000 دولار سنويًا"
    },
    {
      english: "$4,000 per year",
      arabic: "4,000 دولار سنويًا"
    },
    {
      english: "$5,000 per year",
      arabic: "5,000 دولار سنويًا"
    },
    {
      english: "$10,000 per year",
      arabic: "10,000 دولار سنويًا"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0113",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Kirchhoff's Current Law",
  difficulty: "Easy",
  questionEnglish:
    "At a node, currents of 2 A and 5 A enter, while a current of 3 A leaves. What additional current must leave the node?",
  questionArabic:
    "عند عقدة، يدخل تياران مقدارهما 2 أمبير و5 أمبير، بينما يخرج تيار مقداره 3 أمبير. ما التيار الإضافي الذي يجب أن يخرج من العقدة؟",
  options: [
    {
      english: "2 A",
      arabic: "2 أمبير"
    },
    {
      english: "4 A",
      arabic: "4 أمبير"
    },
    {
      english: "7 A",
      arabic: "7 أمبير"
    },
    {
      english: "10 A",
      arabic: "10 أمبير"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0114",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Capacitor Energy",
  difficulty: "Medium",
  questionEnglish:
    "How much energy is stored in a 10 μF capacitor charged to 20 V?",
  questionArabic:
    "ما مقدار الطاقة المخزنة في مكثف سعته 10 ميكروفاراد ومشحون إلى جهد 20 فولت؟",
  options: [
    {
      english: "0.001 J",
      arabic: "0.001 جول"
    },
    {
      english: "0.002 J",
      arabic: "0.002 جول"
    },
    {
      english: "0.004 J",
      arabic: "0.004 جول"
    },
    {
      english: "0.020 J",
      arabic: "0.020 جول"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0115",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Inductor Energy",
  difficulty: "Medium",
  questionEnglish:
    "How much energy is stored in a 2 H inductor carrying 3 A?",
  questionArabic:
    "ما مقدار الطاقة المخزنة في ملف حث سعته 2 هنري ويمر به تيار مقداره 3 أمبير؟",
  options: [
    {
      english: "3 J",
      arabic: "3 جول"
    },
    {
      english: "6 J",
      arabic: "6 جول"
    },
    {
      english: "9 J",
      arabic: "9 جول"
    },
    {
      english: "18 J",
      arabic: "18 جول"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0116",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Rectifiers",
  difficulty: "Medium",
  questionEnglish:
    "What is the main function of a full-wave rectifier?",
  questionArabic:
    "ما الوظيفة الرئيسية لمقوم الموجة الكاملة؟",
  options: [
    {
      english: "Convert both halves of an AC waveform into a pulsating DC output",
      arabic: "تحويل نصفي موجة التيار المتردد إلى خرج تيار مستمر نابض"
    },
    {
      english: "Convert DC into a sinusoidal AC waveform",
      arabic: "تحويل التيار المستمر إلى موجة تيار متردد جيبية"
    },
    {
      english: "Increase the AC frequency",
      arabic: "زيادة تردد التيار المتردد"
    },
    {
      english: "Store electrical energy permanently",
      arabic: "تخزين الطاقة الكهربائية بصورة دائمة"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0117",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Non-Inverting Amplifiers",
  difficulty: "Medium",
  questionEnglish:
    "An ideal non-inverting op-amp has Rf = 9 kΩ and R1 = 1 kΩ. What is its closed-loop voltage gain?",
  questionArabic:
    "مضخم عمليات مثالي غير عاكس له Rf = 9 كيلوأوم وR1 = 1 كيلوأوم. ما كسب الجهد في الحلقة المغلقة؟",
  options: [
    {
      english: "9",
      arabic: "9"
    },
    {
      english: "10",
      arabic: "10"
    },
    {
      english: "-9",
      arabic: "-9"
    },
    {
      english: "-10",
      arabic: "-10"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0118",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Unit Step Signals",
  difficulty: "Medium",
  questionEnglish:
    "Which expression represents a unit step delayed by 3 seconds?",
  questionArabic:
    "أي تعبير يمثل دالة خطوة الوحدة المؤخرة بمقدار 3 ثوانٍ؟",
  options: [
    {
      english: "u(t + 3)",
      arabic: "u(t + 3)"
    },
    {
      english: "u(3t)",
      arabic: "u(3t)"
    },
    {
      english: "u(t - 3)",
      arabic: "u(t - 3)"
    },
    {
      english: "3u(t)",
      arabic: "3u(t)"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0119",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Half Adders",
  difficulty: "Medium",
  questionEnglish:
    "For a half adder with inputs A = 1 and B = 1, what are the Sum and Carry outputs?",
  questionArabic:
    "في نصف جامع بمدخلين A = 1 وB = 1، ما خرجا المجموع والحمل؟",
  options: [
    {
      english: "Sum = 0, Carry = 0",
      arabic: "المجموع = 0، الحمل = 0"
    },
    {
      english: "Sum = 0, Carry = 1",
      arabic: "المجموع = 0، الحمل = 1"
    },
    {
      english: "Sum = 1, Carry = 0",
      arabic: "المجموع = 1، الحمل = 0"
    },
    {
      english: "Sum = 1, Carry = 1",
      arabic: "المجموع = 1، الحمل = 1"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0120",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "State Machines",
  difficulty: "Hard",
  questionEnglish:
    "What is the main difference between a Moore machine and a Mealy machine?",
  questionArabic:
    "ما الفرق الرئيسي بين آلة Moore وآلة Mealy؟",
  options: [
    {
      english: "A Moore output depends only on the current state, while a Mealy output depends on the current state and inputs",
      arabic: "يعتمد خرج Moore على الحالة الحالية فقط، بينما يعتمد خرج Mealy على الحالة الحالية والمدخلات"
    },
    {
      english: "A Moore machine has no states",
      arabic: "لا تحتوي آلة Moore على حالات"
    },
    {
      english: "A Mealy machine cannot use clock signals",
      arabic: "لا يمكن لآلة Mealy استخدام إشارات الساعة"
    },
    {
      english: "A Moore machine is always asynchronous",
      arabic: "تكون آلة Moore دائمًا غير متزامنة"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0121",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Endianness",
  difficulty: "Hard",
  questionEnglish:
    "In a little-endian system, which byte of a multi-byte value is stored at the lowest memory address?",
  questionArabic:
    "في نظام little-endian، أي بايت من قيمة متعددة البايتات يُخزن عند أصغر عنوان في الذاكرة؟",
  options: [
    {
      english: "The most significant byte",
      arabic: "البايت الأعلى أهمية"
    },
    {
      english: "The least significant byte",
      arabic: "البايت الأقل أهمية"
    },
    {
      english: "The middle byte",
      arabic: "البايت الأوسط"
    },
    {
      english: "The parity byte",
      arabic: "بايت التماثل"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0122",
  domain: "Embedded Systems",
  course: "EEL 4730 Programming Embedded Systems",
  topic: "Timers",
  difficulty: "Medium",
  questionEnglish:
    "A microcontroller timer is commonly used to perform which task?",
  questionArabic:
    "في أي مهمة يُستخدم مؤقت المتحكم الدقيق عادةً؟",
  options: [
    {
      english: "Generate precise delays and periodic events",
      arabic: "توليد تأخيرات دقيقة وأحداث دورية"
    },
    {
      english: "Increase the physical memory size",
      arabic: "زيادة الحجم الفعلي للذاكرة"
    },
    {
      english: "Convert analog voltage directly into mechanical motion",
      arabic: "تحويل الجهد التماثلي مباشرة إلى حركة ميكانيكية"
    },
    {
      english: "Replace the processor instruction set",
      arabic: "استبدال مجموعة تعليمات المعالج"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0123",
  domain: "Programming",
  course: "COP 3337 Programming II",
  topic: "Exception Handling",
  difficulty: "Medium",
  questionEnglish:
    "In Java, which block is used to handle an exception thrown inside a try block?",
  questionArabic:
    "في Java، أي كتلة تُستخدم لمعالجة استثناء يحدث داخل كتلة try؟",
  options: [
    {
      english: "if",
      arabic: "if"
    },
    {
      english: "catch",
      arabic: "catch"
    },
    {
      english: "switch",
      arabic: "switch"
    },
    {
      english: "return",
      arabic: "return"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0124",
  domain: "Computer Science",
  course: "COP 3530 Data Structures",
  topic: "Binary Trees",
  difficulty: "Medium",
  questionEnglish:
    "In a binary search tree, where are values smaller than a node normally stored?",
  questionArabic:
    "في شجرة البحث الثنائية، أين تُخزن القيم الأصغر من قيمة العقدة عادةً؟",
  options: [
    {
      english: "In the left subtree",
      arabic: "في الشجرة الفرعية اليسرى"
    },
    {
      english: "In the right subtree",
      arabic: "في الشجرة الفرعية اليمنى"
    },
    {
      english: "Only at the root",
      arabic: "عند الجذر فقط"
    },
    {
      english: "In a separate queue",
      arabic: "في طابور منفصل"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0125",
  domain: "Networking",
  course: "TCN 4211 Computer Communication Networks",
  topic: "Transport Protocols",
  difficulty: "Medium",
  questionEnglish:
    "Which transport-layer protocol provides reliable, connection-oriented delivery?",
  questionArabic:
    "أي بروتوكول في طبقة النقل يوفر نقلًا موثوقًا وموجهًا بالاتصال؟",
  options: [
    {
      english: "IP",
      arabic: "IP"
    },
    {
      english: "UDP",
      arabic: "UDP"
    },
    {
      english: "TCP",
      arabic: "TCP"
    },
    {
      english: "ARP",
      arabic: "ARP"
    }
  ],
  correctAnswer: 2
},
{
  id: "ENG0126",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Logarithmic Differentiation",
  difficulty: "Medium",
  questionEnglish:
    "Find the derivative of f(x) = ln(x² + 1).",
  questionArabic:
    "أوجد مشتقة الدالة f(x) = ln(x² + 1).",
  options: [
    {
      english: "1/(x² + 1)",
      arabic: "1/(x² + 1)"
    },
    {
      english: "2x/(x² + 1)",
      arabic: "2x/(x² + 1)"
    },
    {
      english: "2/(x² + 1)",
      arabic: "2/(x² + 1)"
    },
    {
      english: "ln(2x)",
      arabic: "ln(2x)"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0127",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Concavity",
  difficulty: "Medium",
  questionEnglish:
    "For f(x) = x³ - 6x², at what x-value does the graph have an inflection point?",
  questionArabic:
    "للدالة f(x) = x³ - 6x²، عند أي قيمة لـ x توجد نقطة انعطاف؟",
  options: [
    {
      english: "x = 0",
      arabic: "x = 0"
    },
    {
      english: "x = 1",
      arabic: "x = 1"
    },
    {
      english: "x = 2",
      arabic: "x = 2"
    },
    {
      english: "x = 4",
      arabic: "x = 4"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0128",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Parametric Curves",
  difficulty: "Medium",
  questionEnglish:
    "For x = t² and y = t³, what is dy/dx when t = 2?",
  questionArabic:
    "إذا كانت x = t² وy = t³، فما قيمة dy/dx عندما t = 2؟",
  options: [
    {
      english: "2",
      arabic: "2"
    },
    {
      english: "3",
      arabic: "3"
    },
    {
      english: "4",
      arabic: "4"
    },
    {
      english: "6",
      arabic: "6"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0129",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Polar Coordinates",
  difficulty: "Hard",
  questionEnglish:
    "Which Cartesian equation corresponds to the polar equation r = 4cos(θ)?",
  questionArabic:
    "أي معادلة ديكارتية تقابل المعادلة القطبية r = 4cos(θ)؟",
  options: [
    {
      english: "x² + y² = 4",
      arabic: "x² + y² = 4"
    },
    {
      english: "x² + y² = 4x",
      arabic: "x² + y² = 4x"
    },
    {
      english: "x² + y² = 4y",
      arabic: "x² + y² = 4y"
    },
    {
      english: "x + y = 4",
      arabic: "x + y = 4"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0130",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Cross Products",
  difficulty: "Medium",
  questionEnglish:
    "What is the cross product ⟨1,0,0⟩ × ⟨0,1,0⟩?",
  questionArabic:
    "ما حاصل الضرب الاتجاهي ⟨1،0،0⟩ × ⟨0،1،0⟩؟",
  options: [
    {
      english: "⟨0,0,1⟩",
      arabic: "⟨0،0،1⟩"
    },
    {
      english: "⟨0,0,-1⟩",
      arabic: "⟨0،0،-1⟩"
    },
    {
      english: "⟨1,1,0⟩",
      arabic: "⟨1،1،0⟩"
    },
    {
      english: "⟨0,1,1⟩",
      arabic: "⟨0،1،1⟩"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0131",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Laplace Transforms",
  difficulty: "Hard",
  questionEnglish:
    "What is the Laplace transform of f(t) = e^(3t)?",
  questionArabic:
    "ما تحويل لابلاس للدالة f(t) = e^(3t)؟",
  options: [
    {
      english: "1/(s + 3)",
      arabic: "1/(s + 3)"
    },
    {
      english: "1/(s - 3)",
      arabic: "1/(s - 3)"
    },
    {
      english: "3/s",
      arabic: "3/s"
    },
    {
      english: "s/(s² + 9)",
      arabic: "s/(s² + 9)"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0132",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Mechanical Power",
  difficulty: "Easy",
  questionEnglish:
    "A machine performs 1,200 J of work in 6 seconds. What is its average power?",
  questionArabic:
    "تنجز آلة شغلًا مقداره 1,200 جول خلال 6 ثوانٍ. ما قدرتها المتوسطة؟",
  options: [
    {
      english: "100 W",
      arabic: "100 وات"
    },
    {
      english: "200 W",
      arabic: "200 وات"
    },
    {
      english: "600 W",
      arabic: "600 وات"
    },
    {
      english: "7,200 W",
      arabic: "7,200 وات"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0133",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Friction",
  difficulty: "Medium",
  questionEnglish:
    "A 10 kg block rests on a horizontal surface with coefficient of kinetic friction μk = 0.20. Using g = 9.8 m/s², what is the kinetic-friction force?",
  questionArabic:
    "توجد كتلة مقدارها 10 كجم على سطح أفقي ومعامل الاحتكاك الحركي μk = 0.20. باستخدام g = 9.8 م/ث²، ما قوة الاحتكاك الحركي؟",
  options: [
    {
      english: "9.8 N",
      arabic: "9.8 نيوتن"
    },
    {
      english: "19.6 N",
      arabic: "19.6 نيوتن"
    },
    {
      english: "49 N",
      arabic: "49 نيوتن"
    },
    {
      english: "98 N",
      arabic: "98 نيوتن"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0134",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Electric Current",
  difficulty: "Easy",
  questionEnglish:
    "A charge of 24 C passes through a conductor in 6 seconds. What is the average current?",
  questionArabic:
    "تمر شحنة مقدارها 24 كولوم خلال موصل في 6 ثوانٍ. ما متوسط التيار؟",
  options: [
    {
      english: "2 A",
      arabic: "2 أمبير"
    },
    {
      english: "4 A",
      arabic: "4 أمبير"
    },
    {
      english: "6 A",
      arabic: "6 أمبير"
    },
    {
      english: "144 A",
      arabic: "144 أمبير"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0135",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Electromagnetic Induction",
  difficulty: "Hard",
  questionEnglish:
    "A 50-turn coil experiences a magnetic-flux change of 0.004 Wb per turn in 0.20 s. What is the magnitude of the induced emf?",
  questionArabic:
    "يتعرض ملف مكون من 50 لفة لتغير في الفيض المغناطيسي مقداره 0.004 ويبر لكل لفة خلال 0.20 ثانية. ما مقدار القوة الدافعة الكهربائية المستحثة؟",
  options: [
    {
      english: "0.4 V",
      arabic: "0.4 فولت"
    },
    {
      english: "1 V",
      arabic: "1 فولت"
    },
    {
      english: "4 V",
      arabic: "4 فولت"
    },
    {
      english: "10 V",
      arabic: "10 فولت"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0136",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Binomial Probability",
  difficulty: "Medium",
  questionEnglish:
    "A component has a 0.10 probability of failure. For three independent components, what is the probability that none fail?",
  questionArabic:
    "احتمال فشل أحد المكونات يساوي 0.10. لثلاثة مكونات مستقلة، ما احتمال ألا يفشل أي منها؟",
  options: [
    {
      english: "0.001",
      arabic: "0.001"
    },
    {
      english: "0.270",
      arabic: "0.270"
    },
    {
      english: "0.729",
      arabic: "0.729"
    },
    {
      english: "0.900",
      arabic: "0.900"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0137",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Straight-Line Depreciation",
  difficulty: "Medium",
  questionEnglish:
    "A machine costs $50,000, has a salvage value of $5,000, and a useful life of nine years. What is its annual straight-line depreciation?",
  questionArabic:
    "تكلف آلة 50,000 دولار، ولها قيمة متبقية قدرها 5,000 دولار، وعمر تشغيلي تسع سنوات. ما قيمة الإهلاك السنوي بطريقة القسط الثابت؟",
  options: [
    {
      english: "$4,500",
      arabic: "4,500 دولار"
    },
    {
      english: "$5,000",
      arabic: "5,000 دولار"
    },
    {
      english: "$5,556",
      arabic: "5,556 دولار"
    },
    {
      english: "$6,111",
      arabic: "6,111 دولار"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0138",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Norton Equivalent",
  difficulty: "Medium",
  questionEnglish:
    "A Norton equivalent has a current source of 4 A in parallel with a 6 Ω resistor. What is the equivalent Thevenin voltage?",
  questionArabic:
    "يتكون مكافئ نورتن من مصدر تيار مقداره 4 أمبير على التوازي مع مقاومة 6 أوم. ما جهد ثيفينن المكافئ؟",
  options: [
    {
      english: "1.5 V",
      arabic: "1.5 فولت"
    },
    {
      english: "10 V",
      arabic: "10 فولت"
    },
    {
      english: "24 V",
      arabic: "24 فولت"
    },
    {
      english: "48 V",
      arabic: "48 فولت"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0139",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Capacitor Impedance",
  difficulty: "Hard",
  questionEnglish:
    "What is the impedance of an ideal capacitor with C = 100 μF at angular frequency ω = 100 rad/s?",
  questionArabic:
    "ما ممانعة مكثف مثالي سعته C = 100 ميكروفاراد عند تردد زاوي ω = 100 راديان/ث؟",
  options: [
    {
      english: "j100 Ω",
      arabic: "j100 أوم"
    },
    {
      english: "-j100 Ω",
      arabic: "-j100 أوم"
    },
    {
      english: "j10 Ω",
      arabic: "j10 أوم"
    },
    {
      english: "-j10 Ω",
      arabic: "-j10 أوم"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0140",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Resonance",
  difficulty: "Hard",
  questionEnglish:
    "At resonance in an ideal series RLC circuit, which statement is correct?",
  questionArabic:
    "عند الرنين في دائرة RLC مثالية متصلة على التوالي، أي عبارة صحيحة؟",
  options: [
    {
      english: "The inductive reactance equals the capacitive reactance",
      arabic: "تتساوى المفاعلة الحثية مع المفاعلة السعوية"
    },
    {
      english: "The circuit impedance becomes infinite",
      arabic: "تصبح ممانعة الدائرة لا نهائية"
    },
    {
      english: "The current becomes zero",
      arabic: "يصبح التيار صفرًا"
    },
    {
      english: "The resistance becomes zero",
      arabic: "تصبح المقاومة صفرًا"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0141",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Zener Diodes",
  difficulty: "Medium",
  questionEnglish:
    "What is a common application of a Zener diode operating in reverse breakdown?",
  questionArabic:
    "ما أحد الاستخدامات الشائعة لدايود زينر عند تشغيله في منطقة الانهيار العكسي؟",
  options: [
    {
      english: "Voltage regulation",
      arabic: "تنظيم الجهد"
    },
    {
      english: "Current amplification",
      arabic: "تضخيم التيار"
    },
    {
      english: "Frequency multiplication",
      arabic: "مضاعفة التردد"
    },
    {
      english: "Mechanical switching",
      arabic: "التبديل الميكانيكي"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0142",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Op-Amp Comparators",
  difficulty: "Medium",
  questionEnglish:
    "For an ideal op-amp used as a comparator, what happens when the non-inverting input voltage is greater than the inverting input voltage?",
  questionArabic:
    "في مضخم عمليات مثالي يستخدم كمقارن، ماذا يحدث عندما يكون جهد الدخل غير العاكس أكبر من جهد الدخل العاكس؟",
  options: [
    {
      english: "The output moves toward positive saturation",
      arabic: "يتجه الخرج نحو التشبع الموجب"
    },
    {
      english: "The output becomes exactly zero",
      arabic: "يصبح الخرج صفرًا تمامًا"
    },
    {
      english: "The output moves toward negative saturation",
      arabic: "يتجه الخرج نحو التشبع السالب"
    },
    {
      english: "The op-amp stops drawing power",
      arabic: "يتوقف مضخم العمليات عن استهلاك القدرة"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0143",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Even and Odd Signals",
  difficulty: "Medium",
  questionEnglish:
    "Which condition defines an even signal?",
  questionArabic:
    "أي شرط يعرّف الإشارة الزوجية؟",
  options: [
    {
      english: "x(-t) = -x(t)",
      arabic: "x(-t) = -x(t)"
    },
    {
      english: "x(-t) = x(t)",
      arabic: "x(-t) = x(t)"
    },
    {
      english: "x(t + T) = 0",
      arabic: "x(t + T) = 0"
    },
    {
      english: "x(t) = tx(t)",
      arabic: "x(t) = tx(t)"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0144",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Full Adders",
  difficulty: "Medium",
  questionEnglish:
    "For a full adder with A = 1, B = 0, and Cin = 1, what are the Sum and Cout outputs?",
  questionArabic:
    "في جامع كامل بمدخلات A = 1 وB = 0 وCin = 1، ما خرجا Sum وCout؟",
  options: [
    {
      english: "Sum = 0, Cout = 1",
      arabic: "Sum = 0، Cout = 1"
    },
    {
      english: "Sum = 1, Cout = 0",
      arabic: "Sum = 1، Cout = 0"
    },
    {
      english: "Sum = 1, Cout = 1",
      arabic: "Sum = 1، Cout = 1"
    },
    {
      english: "Sum = 0, Cout = 0",
      arabic: "Sum = 0، Cout = 0"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0145",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Shift Registers",
  difficulty: "Medium",
  questionEnglish:
    "What is the primary function of a serial-in, parallel-out shift register?",
  questionArabic:
    "ما الوظيفة الأساسية لمسجل إزاحة من نوع إدخال تسلسلي وخرج متوازي؟",
  options: [
    {
      english: "Convert serial data into parallel data",
      arabic: "تحويل البيانات التسلسلية إلى بيانات متوازية"
    },
    {
      english: "Convert analog data into digital data",
      arabic: "تحويل البيانات التماثلية إلى رقمية"
    },
    {
      english: "Store only one bit permanently",
      arabic: "تخزين بت واحد فقط بصورة دائمة"
    },
    {
      english: "Generate a sinusoidal waveform",
      arabic: "توليد موجة جيبية"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0146",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Virtual Memory",
  difficulty: "Hard",
  questionEnglish:
    "What is the primary purpose of a page table in a virtual-memory system?",
  questionArabic:
    "ما الغرض الأساسي من جدول الصفحات في نظام الذاكرة الافتراضية؟",
  options: [
    {
      english: "Translate virtual addresses into physical addresses",
      arabic: "ترجمة العناوين الافتراضية إلى عناوين فعلية"
    },
    {
      english: "Increase the CPU clock frequency",
      arabic: "زيادة تردد ساعة المعالج"
    },
    {
      english: "Store arithmetic instructions only",
      arabic: "تخزين التعليمات الحسابية فقط"
    },
    {
      english: "Convert binary values into decimal values",
      arabic: "تحويل القيم الثنائية إلى عشرية"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0147",
  domain: "Embedded Systems",
  course: "EEL 4730 Programming Embedded Systems",
  topic: "Analog-to-Digital Conversion",
  difficulty: "Medium",
  questionEnglish:
    "How many distinct digital output levels does a 10-bit ADC provide?",
  questionArabic:
    "كم عدد مستويات الخرج الرقمية المختلفة التي يوفرها محول ADC بدقة 10 بت؟",
  options: [
    {
      english: "10",
      arabic: "10"
    },
    {
      english: "100",
      arabic: "100"
    },
    {
      english: "512",
      arabic: "512"
    },
    {
      english: "1,024",
      arabic: "1,024"
    }
  ],
  correctAnswer: 3
},

{
  id: "ENG0148",
  domain: "Programming",
  course: "COP 2210 Programming I",
  topic: "Arrays",
  difficulty: "Medium",
  questionEnglish:
    "What is printed by the following Java code? int[] a = {2, 4, 6, 8}; System.out.print(a[2]);",
  questionArabic:
    "ما الناتج المطبوع من كود Java التالي؟ int[] a = {2, 4, 6, 8}; System.out.print(a[2]);",
  options: [
    {
      english: "2",
      arabic: "2"
    },
    {
      english: "4",
      arabic: "4"
    },
    {
      english: "6",
      arabic: "6"
    },
    {
      english: "8",
      arabic: "8"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0149",
  domain: "Computer Science",
  course: "COP 3530 Data Structures",
  topic: "Algorithm Complexity",
  difficulty: "Hard",
  questionEnglish:
    "What is the worst-case time complexity of searching for an element in an unsorted array of n elements?",
  questionArabic:
    "ما التعقيد الزمني في أسوأ حالة للبحث عن عنصر في مصفوفة غير مرتبة تحتوي على n عنصرًا؟",
  options: [
    {
      english: "O(1)",
      arabic: "O(1)"
    },
    {
      english: "O(log n)",
      arabic: "O(log n)"
    },
    {
      english: "O(n)",
      arabic: "O(n)"
    },
    {
      english: "O(n²)",
      arabic: "O(n²)"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0150",
  domain: "Networking",
  course: "TCN 4212 Telecommunications Networks",
  topic: "DNS",
  difficulty: "Easy",
  questionEnglish:
    "What is the primary function of the Domain Name System?",
  questionArabic:
    "ما الوظيفة الأساسية لنظام أسماء النطاقات DNS؟",
  options: [
    {
      english: "Translate domain names into IP addresses",
      arabic: "ترجمة أسماء النطاقات إلى عناوين IP"
    },
    {
      english: "Encrypt all internet traffic",
      arabic: "تشفير جميع حركة الإنترنت"
    },
    {
      english: "Assign MAC addresses to computers",
      arabic: "تعيين عناوين MAC لأجهزة الكمبيوتر"
    },
    {
      english: "Measure network cable length",
      arabic: "قياس طول كابل الشبكة"
    }
  ],
  correctAnswer: 0
},
{
  id: "ENG0151",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Exponential Derivatives",
  difficulty: "Easy",
  questionEnglish:
    "Find the derivative of f(x) = 5e^(2x).",
  questionArabic:
    "أوجد مشتقة الدالة f(x) = 5e^(2x).",
  options: [
    {
      english: "5e^(2x)",
      arabic: "5e^(2x)"
    },
    {
      english: "10e^(2x)",
      arabic: "10e^(2x)"
    },
    {
      english: "10e^x",
      arabic: "10e^x"
    },
    {
      english: "2e^(5x)",
      arabic: "2e^(5x)"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0152",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Absolute Extrema",
  difficulty: "Medium",
  questionEnglish:
    "What is the absolute maximum value of f(x) = x² - 4x + 5 on the interval [0,5]?",
  questionArabic:
    "ما القيمة العظمى المطلقة للدالة f(x) = x² - 4x + 5 على الفترة [0,5]؟",
  options: [
    {
      english: "1",
      arabic: "1"
    },
    {
      english: "5",
      arabic: "5"
    },
    {
      english: "10",
      arabic: "10"
    },
    {
      english: "15",
      arabic: "15"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0153",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Integration by Substitution",
  difficulty: "Medium",
  questionEnglish:
    "Evaluate ∫2x(x² + 1)³ dx.",
  questionArabic:
    "احسب التكامل ∫2x(x² + 1)³ dx.",
  options: [
    {
      english: "(x² + 1)⁴/4 + C",
      arabic: "(x² + 1)⁴/4 + C"
    },
    {
      english: "2(x² + 1)⁴ + C",
      arabic: "2(x² + 1)⁴ + C"
    },
    {
      english: "(x² + 1)³/3 + C",
      arabic: "(x² + 1)³/3 + C"
    },
    {
      english: "x²(x² + 1)³ + C",
      arabic: "x²(x² + 1)³ + C"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0154",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Ratio Test",
  difficulty: "Hard",
  questionEnglish:
    "For a series Σaₙ, the Ratio Test gives L = 0.6. What can be concluded?",
  questionArabic:
    "لمتسلسلة Σaₙ، أعطى اختبار النسبة القيمة L = 0.6. ماذا يمكن استنتاجه؟",
  options: [
    {
      english: "The series converges absolutely",
      arabic: "المتسلسلة تتقارب تقاربًا مطلقًا"
    },
    {
      english: "The series diverges",
      arabic: "المتسلسلة متباعدة"
    },
    {
      english: "The test is inconclusive",
      arabic: "الاختبار غير حاسم"
    },
    {
      english: "The series converges conditionally only",
      arabic: "المتسلسلة تتقارب تقاربًا شرطيًا فقط"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0155",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Tangent Planes",
  difficulty: "Hard",
  questionEnglish:
    "For z = x² + y², what is the tangent plane at the point (1,2,5)?",
  questionArabic:
    "للسطح z = x² + y²، ما معادلة المستوى المماس عند النقطة (1,2,5)؟",
  options: [
    {
      english: "z - 5 = 2(x - 1) + 4(y - 2)",
      arabic: "z - 5 = 2(x - 1) + 4(y - 2)"
    },
    {
      english: "z - 5 = (x - 1) + 2(y - 2)",
      arabic: "z - 5 = (x - 1) + 2(y - 2)"
    },
    {
      english: "z = 2x + 4y + 5",
      arabic: "z = 2x + 4y + 5"
    },
    {
      english: "z - 5 = 2(x + 1) + 4(y + 2)",
      arabic: "z - 5 = 2(x + 1) + 4(y + 2)"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0156",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "First-Order Linear Equations",
  difficulty: "Hard",
  questionEnglish:
    "What is the integrating factor for the differential equation y' + 3y = e^x?",
  questionArabic:
    "ما عامل التكامل للمعادلة التفاضلية y' + 3y = e^x؟",
  options: [
    {
      english: "e^(3x)",
      arabic: "e^(3x)"
    },
    {
      english: "e^(-3x)",
      arabic: "e^(-3x)"
    },
    {
      english: "3e^x",
      arabic: "3e^x"
    },
    {
      english: "x³",
      arabic: "x³"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0157",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Projectile Motion",
  difficulty: "Medium",
  questionEnglish:
    "A ball is launched horizontally at 10 m/s from a height of 19.6 m. Neglecting air resistance and using g = 9.8 m/s², how long does it take to reach the ground?",
  questionArabic:
    "تُقذف كرة أفقيًا بسرعة 10 م/ث من ارتفاع 19.6 م. مع إهمال مقاومة الهواء واستخدام g = 9.8 م/ث²، كم تستغرق للوصول إلى الأرض؟",
  options: [
    {
      english: "1 s",
      arabic: "1 ثانية"
    },
    {
      english: "2 s",
      arabic: "2 ثانية"
    },
    {
      english: "4 s",
      arabic: "4 ثوانٍ"
    },
    {
      english: "10 s",
      arabic: "10 ثوانٍ"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0158",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Conservation of Energy",
  difficulty: "Medium",
  questionEnglish:
    "An object falls from rest through a height of 20 m. Neglecting air resistance and using g = 10 m/s², what is its speed just before impact?",
  questionArabic:
    "يسقط جسم من السكون من ارتفاع 20 م. مع إهمال مقاومة الهواء واستخدام g = 10 م/ث²، ما سرعته قبل الاصطدام مباشرة؟",
  options: [
    {
      english: "10 m/s",
      arabic: "10 م/ث"
    },
    {
      english: "14.1 m/s",
      arabic: "14.1 م/ث"
    },
    {
      english: "20 m/s",
      arabic: "20 م/ث"
    },
    {
      english: "40 m/s",
      arabic: "40 م/ث"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0159",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Electric Potential Energy",
  difficulty: "Medium",
  questionEnglish:
    "What is the electric potential energy of a 2 μC charge placed at a point where the electric potential is 500 V?",
  questionArabic:
    "ما طاقة الوضع الكهربائية لشحنة مقدارها 2 ميكروكولوم موضوعة عند نقطة جهدها الكهربائي 500 فولت؟",
  options: [
    {
      english: "0.001 J",
      arabic: "0.001 جول"
    },
    {
      english: "0.01 J",
      arabic: "0.01 جول"
    },
    {
      english: "0.1 J",
      arabic: "0.1 جول"
    },
    {
      english: "1 J",
      arabic: "1 جول"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0160",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Lorentz Force",
  difficulty: "Hard",
  questionEnglish:
    "A positive charge moves in the same direction as a uniform magnetic field. What magnetic force acts on the charge?",
  questionArabic:
    "تتحرك شحنة موجبة في نفس اتجاه مجال مغناطيسي منتظم. ما القوة المغناطيسية المؤثرة على الشحنة؟",
  options: [
    {
      english: "Maximum force perpendicular to the field",
      arabic: "قوة عظمى عمودية على المجال"
    },
    {
      english: "Zero force",
      arabic: "قوة تساوي صفرًا"
    },
    {
      english: "A force opposite to the motion",
      arabic: "قوة عكس اتجاه الحركة"
    },
    {
      english: "A force in the direction of the field",
      arabic: "قوة في اتجاه المجال"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0161",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Confidence Intervals",
  difficulty: "Hard",
  questionEnglish:
    "If the sample size increases while the confidence level and population variability remain unchanged, what generally happens to the confidence-interval width?",
  questionArabic:
    "إذا زاد حجم العينة مع ثبات مستوى الثقة وتباين المجتمع، فماذا يحدث عادةً لعرض فترة الثقة؟",
  options: [
    {
      english: "It becomes narrower",
      arabic: "تصبح أضيق"
    },
    {
      english: "It becomes wider",
      arabic: "تصبح أوسع"
    },
    {
      english: "It remains unchanged",
      arabic: "تظل دون تغيير"
    },
    {
      english: "It always becomes zero",
      arabic: "تصبح صفرًا دائمًا"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0162",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Net Present Value",
  difficulty: "Hard",
  questionEnglish:
    "A project costs $10,000 now and returns $12,000 one year later. At a discount rate of 10%, what is its net present value?",
  questionArabic:
    "يكلف مشروع 10,000 دولار الآن ويحقق 12,000 دولار بعد سنة واحدة. عند معدل خصم 10%، ما صافي القيمة الحالية؟",
  options: [
    {
      english: "-$1,091",
      arabic: "-1,091 دولار"
    },
    {
      english: "$0",
      arabic: "0 دولار"
    },
    {
      english: "Approximately $909",
      arabic: "حوالي 909 دولارات"
    },
    {
      english: "$2,000",
      arabic: "2,000 دولار"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0163",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Superposition",
  difficulty: "Medium",
  questionEnglish:
    "When applying superposition to a linear circuit, how is an independent ideal voltage source deactivated?",
  questionArabic:
    "عند تطبيق مبدأ التراكب على دائرة خطية، كيف يتم تعطيل مصدر جهد مثالي مستقل؟",
  options: [
    {
      english: "Replace it with an open circuit",
      arabic: "يُستبدل بدائرة مفتوحة"
    },
    {
      english: "Replace it with a short circuit",
      arabic: "يُستبدل بقصر كهربائي"
    },
    {
      english: "Replace it with a capacitor",
      arabic: "يُستبدل بمكثف"
    },
    {
      english: "Reverse its polarity",
      arabic: "تُعكس قطبيته"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0164",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Phasors",
  difficulty: "Medium",
  questionEnglish:
    "What is the rectangular form of the phasor 10∠90°?",
  questionArabic:
    "ما الصورة الديكارتية للمتجه الطوري 10∠90°؟",
  options: [
    {
      english: "10 + j0",
      arabic: "10 + j0"
    },
    {
      english: "0 + j10",
      arabic: "0 + j10"
    },
    {
      english: "-10 + j0",
      arabic: "-10 + j0"
    },
    {
      english: "0 - j10",
      arabic: "0 - j10"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0165",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "AC Power",
  difficulty: "Hard",
  questionEnglish:
    "A load consumes 800 W of real power and 1,000 VA of apparent power. What is the power factor?",
  questionArabic:
    "يستهلك حمل قدرة فعلية مقدارها 800 وات وقدرة ظاهرية مقدارها 1,000 فولت-أمبير. ما معامل القدرة؟",
  options: [
    {
      english: "0.2",
      arabic: "0.2"
    },
    {
      english: "0.8",
      arabic: "0.8"
    },
    {
      english: "1.0",
      arabic: "1.0"
    },
    {
      english: "1.25",
      arabic: "1.25"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0166",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Diode Circuits",
  difficulty: "Medium",
  questionEnglish:
    "A 5 V source drives a forward-biased silicon diode in series with a 1 kΩ resistor. Using a 0.7 V diode drop, what is the current?",
  questionArabic:
    "يقود مصدر جهد 5 فولت دايود سيليكون منحازًا أماميًا على التوالي مع مقاومة 1 كيلوأوم. باستخدام هبوط جهد 0.7 فولت للدايود، ما التيار؟",
  options: [
    {
      english: "0.7 mA",
      arabic: "0.7 مللي أمبير"
    },
    {
      english: "4.3 mA",
      arabic: "4.3 مللي أمبير"
    },
    {
      english: "5.0 mA",
      arabic: "5.0 مللي أمبير"
    },
    {
      english: "7.1 mA",
      arabic: "7.1 مللي أمبير"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0167",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "BJT Regions of Operation",
  difficulty: "Hard",
  questionEnglish:
    "In which operating region are both the base-emitter and base-collector junctions of an NPN transistor forward biased?",
  questionArabic:
    "في أي منطقة تشغيل تكون وصلتا القاعدة-الباعث والقاعدة-المجمع في ترانزستور NPN منحازتين أماميًا؟",
  options: [
    {
      english: "Cutoff",
      arabic: "القطع"
    },
    {
      english: "Active",
      arabic: "المنطقة الفعالة"
    },
    {
      english: "Saturation",
      arabic: "التشبع"
    },
    {
      english: "Breakdown",
      arabic: "الانهيار"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0168",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Causality",
  difficulty: "Medium",
  questionEnglish:
    "Which system is causal?",
  questionArabic:
    "أي من الأنظمة التالية سببي؟",
  options: [
    {
      english: "y(t) = x(t + 2)",
      arabic: "y(t) = x(t + 2)"
    },
    {
      english: "y(t) = x(t - 2)",
      arabic: "y(t) = x(t - 2)"
    },
    {
      english: "y(t) = x(-t)",
      arabic: "y(t) = x(-t)"
    },
    {
      english: "y(t) = x(t + 1) + x(t)",
      arabic: "y(t) = x(t + 1) + x(t)"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0169",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Boolean Simplification",
  difficulty: "Medium",
  questionEnglish:
    "Simplify the Boolean expression A·1 + B·0.",
  questionArabic:
    "بسّط التعبير المنطقي A·1 + B·0.",
  options: [
    {
      english: "0",
      arabic: "0"
    },
    {
      english: "1",
      arabic: "1"
    },
    {
      english: "A",
      arabic: "A"
    },
    {
      english: "A + B",
      arabic: "A + B"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0170",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "JK Flip-Flops",
  difficulty: "Medium",
  questionEnglish:
    "What happens to a JK flip-flop at the active clock edge when J = 1 and K = 1?",
  questionArabic:
    "ماذا يحدث لقَلّاب JK عند حافة الساعة الفعالة عندما J = 1 وK = 1؟",
  options: [
    {
      english: "The output resets to 0",
      arabic: "يُعاد ضبط الخرج إلى 0"
    },
    {
      english: "The output sets to 1",
      arabic: "يُضبط الخرج إلى 1"
    },
    {
      english: "The output toggles",
      arabic: "يتبدل الخرج"
    },
    {
      english: "The output remains unchanged",
      arabic: "يبقى الخرج دون تغيير"
    }
  ],
  correctAnswer: 2
},

{
  id: "ENG0171",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Address Bus",
  difficulty: "Medium",
  questionEnglish:
    "How many unique memory locations can be addressed by a 20-bit address bus?",
  questionArabic:
    "كم عدد مواقع الذاكرة الفريدة التي يمكن عنونتها باستخدام ناقل عناوين بعرض 20 بت؟",
  options: [
    {
      english: "20",
      arabic: "20"
    },
    {
      english: "1,024",
      arabic: "1,024"
    },
    {
      english: "65,536",
      arabic: "65,536"
    },
    {
      english: "1,048,576",
      arabic: "1,048,576"
    }
  ],
  correctAnswer: 3
},

{
  id: "ENG0172",
  domain: "Embedded Systems",
  course: "EEL 4730 Programming Embedded Systems",
  topic: "Pulse-Width Modulation",
  difficulty: "Medium",
  questionEnglish:
    "What does the duty cycle of a PWM signal represent?",
  questionArabic:
    "ماذا تمثل نسبة التشغيل في إشارة PWM؟",
  options: [
    {
      english: "The percentage of each period during which the signal is high",
      arabic: "النسبة المئوية من كل دورة التي تكون خلالها الإشارة مرتفعة"
    },
    {
      english: "The number of ADC bits",
      arabic: "عدد بتات محول ADC"
    },
    {
      english: "The maximum memory address",
      arabic: "أكبر عنوان في الذاكرة"
    },
    {
      english: "The processor instruction count",
      arabic: "عدد تعليمات المعالج"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0173",
  domain: "Programming",
  course: "COP 2210 Programming I",
  topic: "Nested Loops",
  difficulty: "Medium",
  questionEnglish:
    "How many times is the statement inside these nested loops executed? for (int i = 0; i < 3; i++) for (int j = 0; j < 4; j++) statement;",
  questionArabic:
    "كم مرة يتم تنفيذ التعليمة داخل الحلقتين المتداخلتين التاليتين؟ for (int i = 0; i < 3; i++) for (int j = 0; j < 4; j++) statement;",
  options: [
    {
      english: "7",
      arabic: "7"
    },
    {
      english: "12",
      arabic: "12"
    },
    {
      english: "16",
      arabic: "16"
    },
    {
      english: "24",
      arabic: "24"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0174",
  domain: "Computer Science",
  course: "COP 3530 Data Structures",
  topic: "Hash Tables",
  difficulty: "Hard",
  questionEnglish:
    "What is a collision in a hash table?",
  questionArabic:
    "ما المقصود بالتصادم في جدول التجزئة؟",
  options: [
    {
      english: "Two different keys map to the same table index",
      arabic: "تُعيَّن قيمتان مفتاحيتان مختلفتان إلى الفهرس نفسه"
    },
    {
      english: "A key is larger than the table size",
      arabic: "يكون المفتاح أكبر من حجم الجدول"
    },
    {
      english: "The table contains no empty entries",
      arabic: "لا يحتوي الجدول على خانات فارغة"
    },
    {
      english: "The hash function returns a negative value only",
      arabic: "تعيد دالة التجزئة قيمة سالبة فقط"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0175",
  domain: "Networking",
  course: "TCN 4211 Computer Communication Networks",
  topic: "Subnet Masks",
  difficulty: "Medium",
  questionEnglish:
    "Which subnet mask corresponds to an IPv4 /24 prefix?",
  questionArabic:
    "أي قناع شبكة فرعية يقابل بادئة IPv4 من النوع /24؟",
  options: [
    {
      english: "255.0.0.0",
      arabic: "255.0.0.0"
    },
    {
      english: "255.255.0.0",
      arabic: "255.255.0.0"
    },
    {
      english: "255.255.255.0",
      arabic: "255.255.255.0"
    },
    {
      english: "255.255.255.252",
      arabic: "255.255.255.252"
    }
  ],
  correctAnswer: 2
},
{
  id: "ENG0176",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "L'Hôpital's Rule",
  difficulty: "Medium",
  questionEnglish:
    "Evaluate lim(x→0) sin(5x)/x.",
  questionArabic:
    "أوجد قيمة النهاية lim(x→0) sin(5x)/x.",
  options: [
    { english: "0", arabic: "0" },
    { english: "1", arabic: "1" },
    { english: "5", arabic: "5" },
    { english: "Infinity", arabic: "ما لا نهاية" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0177",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Optimization",
  difficulty: "Hard",
  questionEnglish:
    "A rectangle has a perimeter of 40 m. What dimensions maximize its area?",
  questionArabic:
    "مستطيل محيطه 40 مترًا. ما الأبعاد التي تحقق أكبر مساحة؟",
  options: [
    { english: "5 m by 15 m", arabic: "5 م × 15 م" },
    { english: "8 m by 12 m", arabic: "8 م × 12 م" },
    { english: "10 m by 10 m", arabic: "10 م × 10 م" },
    { english: "4 m by 16 m", arabic: "4 م × 16 م" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0178",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Integration by Parts",
  difficulty: "Medium",
  questionEnglish:
    "Evaluate ∫x eˣ dx.",
  questionArabic:
    "احسب التكامل ∫x eˣ dx.",
  options: [
    { english: "xeˣ + C", arabic: "xeˣ + C" },
    { english: "eˣ(x - 1) + C", arabic: "eˣ(x - 1) + C" },
    { english: "eˣ(x + 1) + C", arabic: "eˣ(x + 1) + C" },
    { english: "x²eˣ/2 + C", arabic: "x²eˣ/2 + C" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0179",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Geometric Series",
  difficulty: "Medium",
  questionEnglish:
    "What is the sum of the infinite geometric series 4 + 2 + 1 + 1/2 + ...?",
  questionArabic:
    "ما مجموع المتسلسلة الهندسية اللانهائية 4 + 2 + 1 + 1/2 + ...؟",
  options: [
    { english: "6", arabic: "6" },
    { english: "8", arabic: "8" },
    { english: "10", arabic: "10" },
    { english: "The series diverges", arabic: "المتسلسلة متباعدة" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0180",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Lagrange Multipliers",
  difficulty: "Hard",
  questionEnglish:
    "To optimize f(x,y) subject to g(x,y) = c, which equation is used in the method of Lagrange multipliers?",
  questionArabic:
    "لإيجاد القيم القصوى للدالة f(x,y) مع القيد g(x,y) = c، أي معادلة تُستخدم في طريقة مضاعفات لاغرانج؟",
  options: [
    { english: "∇f = λ∇g", arabic: "∇f = λ∇g" },
    { english: "∇f = ∇²g", arabic: "∇f = ∇²g" },
    { english: "f = λg²", arabic: "f = λg²" },
    { english: "∇f · ∇g = 0", arabic: "∇f · ∇g = 0" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0181",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Second-Order Differential Equations",
  difficulty: "Hard",
  questionEnglish:
    "What is the general solution of y'' + 9y = 0?",
  questionArabic:
    "ما الحل العام للمعادلة y'' + 9y = 0؟",
  options: [
    {
      english: "y = C₁e^(3x) + C₂e^(-3x)",
      arabic: "y = C₁e^(3x) + C₂e^(-3x)"
    },
    {
      english: "y = C₁cos(3x) + C₂sin(3x)",
      arabic: "y = C₁cos(3x) + C₂sin(3x)"
    },
    {
      english: "y = C₁cos(9x) + C₂sin(9x)",
      arabic: "y = C₁cos(9x) + C₂sin(9x)"
    },
    {
      english: "y = C₁ + C₂x",
      arabic: "y = C₁ + C₂x"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0182",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Work",
  difficulty: "Easy",
  questionEnglish:
    "A constant horizontal force of 15 N moves an object 4 m in the direction of the force. How much work is done?",
  questionArabic:
    "تحرك قوة أفقية ثابتة مقدارها 15 نيوتن جسمًا مسافة 4 أمتار في اتجاه القوة. ما مقدار الشغل المبذول؟",
  options: [
    { english: "3.75 J", arabic: "3.75 جول" },
    { english: "19 J", arabic: "19 جول" },
    { english: "60 J", arabic: "60 جول" },
    { english: "75 J", arabic: "75 جول" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0183",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Angular Momentum",
  difficulty: "Medium",
  questionEnglish:
    "A rotating system experiences zero external torque. What quantity is conserved?",
  questionArabic:
    "يتعرض نظام دوار لعزم خارجي يساوي صفرًا. ما الكمية المحفوظة؟",
  options: [
    { english: "Angular momentum", arabic: "الزخم الزاوي" },
    { english: "Angular acceleration", arabic: "التسارع الزاوي" },
    { english: "Moment of inertia", arabic: "عزم القصور الذاتي" },
    { english: "Rotational frequency", arabic: "التردد الدوراني" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0184",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Gauss's Law",
  difficulty: "Hard",
  questionEnglish:
    "According to Gauss's law, the net electric flux through a closed surface equals which quantity?",
  questionArabic:
    "وفقًا لقانون غاوس، يساوي صافي الفيض الكهربائي خلال سطح مغلق أي كمية؟",
  options: [
    {
      english: "The enclosed charge divided by ε₀",
      arabic: "الشحنة المحصورة مقسومة على ε₀"
    },
    {
      english: "The total surface area multiplied by ε₀",
      arabic: "المساحة الكلية مضروبة في ε₀"
    },
    {
      english: "The electric potential multiplied by charge",
      arabic: "الجهد الكهربائي مضروبًا في الشحنة"
    },
    {
      english: "The enclosed current divided by μ₀",
      arabic: "التيار المحصور مقسومًا على μ₀"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0185",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Capacitor Energy",
  difficulty: "Medium",
  questionEnglish:
    "If the voltage across a capacitor is doubled while its capacitance remains constant, how does its stored energy change?",
  questionArabic:
    "إذا تضاعف الجهد عبر مكثف مع ثبات سعته، فكيف تتغير الطاقة المخزنة؟",
  options: [
    { english: "It is halved", arabic: "تنخفض إلى النصف" },
    { english: "It doubles", arabic: "تتضاعف" },
    { english: "It becomes four times larger", arabic: "تصبح أربعة أضعاف" },
    { english: "It remains unchanged", arabic: "تظل دون تغيير" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0186",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Probability",
  difficulty: "Easy",
  questionEnglish:
    "A fair six-sided die is rolled once. What is the probability of obtaining an even number?",
  questionArabic:
    "يُرمى نرد عادل ذو ستة أوجه مرة واحدة. ما احتمال الحصول على عدد زوجي؟",
  options: [
    { english: "1/6", arabic: "1/6" },
    { english: "1/3", arabic: "1/3" },
    { english: "1/2", arabic: "1/2" },
    { english: "2/3", arabic: "2/3" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0187",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Compound Interest",
  difficulty: "Medium",
  questionEnglish:
    "How much will $5,000 grow to after two years at 8% annual compound interest?",
  questionArabic:
    "إلى كم سيزداد مبلغ 5,000 دولار بعد سنتين بفائدة مركبة سنوية قدرها 8%؟",
  options: [
    { english: "$5,400", arabic: "5,400 دولار" },
    { english: "$5,800", arabic: "5,800 دولار" },
    { english: "$5,832", arabic: "5,832 دولار" },
    { english: "$6,250", arabic: "6,250 دولار" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0188",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Equivalent Resistance",
  difficulty: "Easy",
  questionEnglish:
    "What is the equivalent resistance of 4 Ω and 8 Ω resistors connected in series?",
  questionArabic:
    "ما المقاومة المكافئة لمقاومتين 4 أوم و8 أوم متصلتين على التوالي؟",
  options: [
    { english: "2.67 Ω", arabic: "2.67 أوم" },
    { english: "4 Ω", arabic: "4 أوم" },
    { english: "8 Ω", arabic: "8 أوم" },
    { english: "12 Ω", arabic: "12 أوم" }
  ],
  correctAnswer: 3
},

{
  id: "ENG0189",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Parallel Resistance",
  difficulty: "Medium",
  questionEnglish:
    "What is the equivalent resistance of 4 Ω and 12 Ω resistors connected in parallel?",
  questionArabic:
    "ما المقاومة المكافئة لمقاومتين 4 أوم و12 أوم متصلتين على التوازي؟",
  options: [
    { english: "2 Ω", arabic: "2 أوم" },
    { english: "3 Ω", arabic: "3 أوم" },
    { english: "8 Ω", arabic: "8 أوم" },
    { english: "16 Ω", arabic: "16 أوم" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0190",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Complex Power",
  difficulty: "Hard",
  questionEnglish:
    "Which expression represents complex power in an AC circuit using RMS phasors?",
  questionArabic:
    "أي تعبير يمثل القدرة المركبة في دائرة تيار متردد باستخدام المتجهات الطورية للقيم الفعالة؟",
  options: [
    { english: "S = VI", arabic: "S = VI" },
    { english: "S = VI*", arabic: "S = VI*" },
    { english: "S = V/I", arabic: "S = V/I" },
    { english: "S = I/V*", arabic: "S = I/V*" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0191",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Operational Amplifiers",
  difficulty: "Medium",
  questionEnglish:
    "For an ideal op-amp operating with negative feedback, what is the input current at each input terminal?",
  questionArabic:
    "في مضخم عمليات مثالي يعمل بتغذية راجعة سالبة، ما تيار الدخل عند كل طرف إدخال؟",
  options: [
    { english: "Approximately zero", arabic: "يساوي صفرًا تقريبًا" },
    { english: "Equal to the output current", arabic: "يساوي تيار الخرج" },
    { english: "Always 1 A", arabic: "يساوي دائمًا 1 أمبير" },
    { english: "Infinite", arabic: "لا نهائي" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0192",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "MOSFETs",
  difficulty: "Hard",
  questionEnglish:
    "An ideal MOSFET gate draws approximately zero DC current primarily because the gate is:",
  questionArabic:
    "يسحب طرف بوابة MOSFET المثالي تيارًا مستمرًا يقارب الصفر أساسًا لأن البوابة:",
  options: [
    {
      english: "Insulated from the channel by an oxide layer",
      arabic: "معزولة عن القناة بطبقة أكسيد"
    },
    {
      english: "Short-circuited to the source",
      arabic: "مقصورة كهربائيًا مع المصدر"
    },
    {
      english: "Connected through a low resistance",
      arabic: "متصلة من خلال مقاومة منخفضة"
    },
    {
      english: "Made from a perfect conductor only",
      arabic: "مصنوعة من موصل مثالي فقط"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0193",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "System Stability",
  difficulty: "Hard",
  questionEnglish:
    "For a continuous-time LTI system, which condition guarantees BIBO stability?",
  questionArabic:
    "بالنسبة إلى نظام خطي ثابت مع الزمن في الزمن المستمر، أي شرط يضمن استقرار BIBO؟",
  options: [
    {
      english: "The impulse response is absolutely integrable",
      arabic: "أن تكون الاستجابة النبضية قابلة للتكامل المطلق"
    },
    {
      english: "The input is always sinusoidal",
      arabic: "أن يكون الدخل جيبيًا دائمًا"
    },
    {
      english: "The output is always periodic",
      arabic: "أن يكون الخرج دوريًا دائمًا"
    },
    {
      english: "The impulse response is always increasing",
      arabic: "أن تكون الاستجابة النبضية متزايدة دائمًا"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0194",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Number Systems",
  difficulty: "Easy",
  questionEnglish:
    "What is the decimal value of the binary number 10110₂?",
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
  id: "ENG0195",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Logic Gates",
  difficulty: "Medium",
  questionEnglish:
    "Which gate produces an output of 0 only when all of its inputs are 1?",
  questionArabic:
    "أي بوابة تنتج خرجًا يساوي 0 فقط عندما تكون جميع مدخلاتها تساوي 1؟",
  options: [
    { english: "AND", arabic: "AND" },
    { english: "OR", arabic: "OR" },
    { english: "NAND", arabic: "NAND" },
    { english: "NOR", arabic: "NOR" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0196",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "Cache Performance",
  difficulty: "Hard",
  questionEnglish:
    "A cache has a hit rate of 95%, a hit time of 2 ns, and a miss penalty of 50 ns. What is the approximate average memory access time?",
  questionArabic:
    "تملك ذاكرة مخبأة معدل إصابة 95% وزمن إصابة 2 نانوثانية وعقوبة إخفاق 50 نانوثانية. ما متوسط زمن الوصول التقريبي؟",
  options: [
    { english: "2.0 ns", arabic: "2.0 نانوثانية" },
    { english: "4.5 ns", arabic: "4.5 نانوثانية" },
    { english: "49.5 ns", arabic: "49.5 نانوثانية" },
    { english: "52 ns", arabic: "52 نانوثانية" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0197",
  domain: "Embedded Systems",
  course: "EEL 4730 Programming Embedded Systems",
  topic: "GPIO",
  difficulty: "Easy",
  questionEnglish:
    "What is the primary purpose of a general-purpose input/output pin on a microcontroller?",
  questionArabic:
    "ما الغرض الأساسي من طرف الإدخال والإخراج العام GPIO في المتحكم الدقيق؟",
  options: [
    {
      english: "Read or control external digital signals",
      arabic: "قراءة الإشارات الرقمية الخارجية أو التحكم بها"
    },
    {
      english: "Increase the CPU clock automatically",
      arabic: "زيادة تردد المعالج تلقائيًا"
    },
    {
      english: "Store the operating system",
      arabic: "تخزين نظام التشغيل"
    },
    {
      english: "Generate analog signals without additional hardware",
      arabic: "توليد إشارات تماثلية دون أي مكونات إضافية"
    }
  ],
  correctAnswer: 0
},

{
  id: "ENG0198",
  domain: "Programming",
  course: "COP 2210 Programming I",
  topic: "Loops",
  difficulty: "Medium",
  questionEnglish:
    "What is printed by this Java code? int sum = 0; for (int i = 1; i <= 4; i++) sum += i; System.out.print(sum);",
  questionArabic:
    "ما الناتج المطبوع من كود Java التالي؟ int sum = 0; for (int i = 1; i <= 4; i++) sum += i; System.out.print(sum);",
  options: [
    { english: "4", arabic: "4" },
    { english: "6", arabic: "6" },
    { english: "10", arabic: "10" },
    { english: "16", arabic: "16" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0199",
  domain: "Computer Science",
  course: "COP 3530 Data Structures",
  topic: "Sorting Algorithms",
  difficulty: "Hard",
  questionEnglish:
    "What is the average-case time complexity of merge sort?",
  questionArabic:
    "ما التعقيد الزمني في الحالة المتوسطة لخوارزمية الترتيب بالدمج؟",
  options: [
    { english: "O(1)", arabic: "O(1)" },
    { english: "O(log n)", arabic: "O(log n)" },
    { english: "O(n log n)", arabic: "O(n log n)" },
    { english: "O(n²)", arabic: "O(n²)" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0200",
  domain: "Networking",
  course: "TCN 4211 Computer Communication Networks",
  topic: "MAC Addresses",
  difficulty: "Easy",
  questionEnglish:
    "At which OSI layer are MAC addresses primarily used?",
  questionArabic:
    "في أي طبقة من نموذج OSI تُستخدم عناوين MAC بصورة أساسية؟",
  options: [
    { english: "Physical layer", arabic: "الطبقة الفيزيائية" },
    { english: "Data-link layer", arabic: "طبقة ربط البيانات" },
    { english: "Network layer", arabic: "طبقة الشبكة" },
    { english: "Application layer", arabic: "طبقة التطبيقات" }
  ],
  correctAnswer: 1
},
{
  id: "ENG0201",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Fundamental Theorem of Calculus",
  difficulty: "Medium",
  questionEnglish:
    "If F(x) = ∫₀ˣ (t² + 1) dt, what is F'(x)?",
  questionArabic:
    "إذا كانت F(x) = ∫₀ˣ (t² + 1) dt، فما قيمة F'(x)؟",
  options: [
    { english: "x² + 1", arabic: "x² + 1" },
    { english: "2x", arabic: "2x" },
    { english: "x³/3 + x", arabic: "x³/3 + x" },
    { english: "t² + 1", arabic: "t² + 1" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0202",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Derivative Applications",
  difficulty: "Medium",
  questionEnglish:
    "For f(x) = x² - 6x + 8, at what x-value does the function attain its minimum?",
  questionArabic:
    "للدالة f(x) = x² - 6x + 8، عند أي قيمة لـ x تحقق الدالة قيمتها الصغرى؟",
  options: [
    { english: "x = 2", arabic: "x = 2" },
    { english: "x = 3", arabic: "x = 3" },
    { english: "x = 4", arabic: "x = 4" },
    { english: "x = 6", arabic: "x = 6" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0203",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Partial Fractions",
  difficulty: "Hard",
  questionEnglish:
    "Which decomposition is correct for 1/[x(x + 1)]?",
  questionArabic:
    "أي تحليل إلى كسور جزئية صحيح للتعبير 1/[x(x + 1)]؟",
  options: [
    {
      english: "1/x + 1/(x + 1)",
      arabic: "1/x + 1/(x + 1)"
    },
    {
      english: "1/x - 1/(x + 1)",
      arabic: "1/x - 1/(x + 1)"
    },
    {
      english: "-1/x - 1/(x + 1)",
      arabic: "-1/x - 1/(x + 1)"
    },
    {
      english: "x + 1/x",
      arabic: "x + 1/x"
    }
  ],
  correctAnswer: 1
},

{
  id: "ENG0204",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Sequence Limits",
  difficulty: "Medium",
  questionEnglish:
    "What is lim(n→∞) (3n + 2)/(n + 5)?",
  questionArabic:
    "ما قيمة lim(n→∞) (3n + 2)/(n + 5)؟",
  options: [
    { english: "0", arabic: "0" },
    { english: "1", arabic: "1" },
    { english: "3", arabic: "3" },
    { english: "5", arabic: "5" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0205",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Gradient",
  difficulty: "Medium",
  questionEnglish:
    "For f(x,y) = 3x²y + y², what is ∂f/∂x?",
  questionArabic:
    "للدالة f(x,y) = 3x²y + y²، ما قيمة ∂f/∂x؟",
  options: [
    { english: "3x² + 2y", arabic: "3x² + 2y" },
    { english: "6xy", arabic: "6xy" },
    { english: "6xy + 2y", arabic: "6xy + 2y" },
    { english: "3x²y", arabic: "3x²y" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0206",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Initial-Value Problems",
  difficulty: "Medium",
  questionEnglish:
    "Solve y' = 2 with the initial condition y(0) = 5.",
  questionArabic:
    "حل المعادلة y' = 2 مع الشرط الابتدائي y(0) = 5.",
  options: [
    { english: "y = 2x", arabic: "y = 2x" },
    { english: "y = 2x + 5", arabic: "y = 2x + 5" },
    { english: "y = 5e^(2x)", arabic: "y = 5e^(2x)" },
    { english: "y = x² + 5", arabic: "y = x² + 5" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0207",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Kinetic Energy",
  difficulty: "Easy",
  questionEnglish:
    "What is the kinetic energy of a 5 kg object moving at 4 m/s?",
  questionArabic:
    "ما الطاقة الحركية لجسم كتلته 5 كجم ويتحرك بسرعة 4 م/ث؟",
  options: [
    { english: "10 J", arabic: "10 جول" },
    { english: "20 J", arabic: "20 جول" },
    { english: "40 J", arabic: "40 جول" },
    { english: "80 J", arabic: "80 جول" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0208",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Center of Mass",
  difficulty: "Medium",
  questionEnglish:
    "Two point masses, 2 kg at x = 0 m and 6 kg at x = 4 m, lie on the x-axis. Where is their center of mass?",
  questionArabic:
    "توجد كتلتان نقطيتان: 2 كجم عند x = 0 م و6 كجم عند x = 4 م على محور x. أين يقع مركز الكتلة؟",
  options: [
    { english: "1 m", arabic: "1 م" },
    { english: "2 m", arabic: "2 م" },
    { english: "3 m", arabic: "3 م" },
    { english: "4 m", arabic: "4 م" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0209",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Electric Fields",
  difficulty: "Medium",
  questionEnglish:
    "What electric force acts on a 3 C charge placed in a uniform electric field of 4 N/C?",
  questionArabic:
    "ما القوة الكهربائية المؤثرة على شحنة مقدارها 3 كولوم موضوعة في مجال كهربائي منتظم شدته 4 نيوتن/كولوم؟",
  options: [
    { english: "0.75 N", arabic: "0.75 نيوتن" },
    { english: "7 N", arabic: "7 نيوتن" },
    { english: "12 N", arabic: "12 نيوتن" },
    { english: "24 N", arabic: "24 نيوتن" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0210",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Inductance",
  difficulty: "Hard",
  questionEnglish:
    "What voltage is induced across a 2 H inductor when its current changes at a rate of 3 A/s?",
  questionArabic:
    "ما مقدار الجهد المستحث عبر ملف حث قيمته 2 هنري عندما يتغير تياره بمعدل 3 أمبير/ثانية؟",
  options: [
    { english: "1.5 V", arabic: "1.5 فولت" },
    { english: "5 V", arabic: "5 فولت" },
    { english: "6 V", arabic: "6 فولت" },
    { english: "12 V", arabic: "12 فولت" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0211",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Mean",
  difficulty: "Easy",
  questionEnglish:
    "What is the arithmetic mean of the values 4, 6, 8, and 10?",
  questionArabic:
    "ما المتوسط الحسابي للقيم 4 و6 و8 و10؟",
  options: [
    { english: "6", arabic: "6" },
    { english: "7", arabic: "7" },
    { english: "8", arabic: "8" },
    { english: "9", arabic: "9" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0212",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Benefit-Cost Ratio",
  difficulty: "Medium",
  questionEnglish:
    "A project has present-worth benefits of $150,000 and present-worth costs of $100,000. What is its benefit-cost ratio?",
  questionArabic:
    "لمشروع فوائد بقيمة حالية قدرها 150,000 دولار وتكاليف بقيمة حالية قدرها 100,000 دولار. ما نسبة الفائدة إلى التكلفة؟",
  options: [
    { english: "0.67", arabic: "0.67" },
    { english: "1.0", arabic: "1.0" },
    { english: "1.5", arabic: "1.5" },
    { english: "2.5", arabic: "2.5" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0213",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Ohm's Law",
  difficulty: "Easy",
  questionEnglish:
    "A 24 V source is connected across an 8 Ω resistor. What current flows through the resistor?",
  questionArabic:
    "يتصل مصدر جهد 24 فولت عبر مقاومة 8 أوم. ما التيار المار في المقاومة؟",
  options: [
    { english: "2 A", arabic: "2 أمبير" },
    { english: "3 A", arabic: "3 أمبير" },
    { english: "8 A", arabic: "8 أمبير" },
    { english: "192 A", arabic: "192 أمبير" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0214",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "Power",
  difficulty: "Medium",
  questionEnglish:
    "A 5 Ω resistor carries a current of 2 A. How much power does it dissipate?",
  questionArabic:
    "تمر شدة تيار مقدارها 2 أمبير في مقاومة قيمتها 5 أوم. ما القدرة المبددة؟",
  options: [
    { english: "5 W", arabic: "5 وات" },
    { english: "10 W", arabic: "10 وات" },
    { english: "20 W", arabic: "20 وات" },
    { english: "25 W", arabic: "25 وات" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0215",
  domain: "Electrical Engineering",
  course: "EEL 3110 Circuit Analysis",
  topic: "RLC Circuits",
  difficulty: "Hard",
  questionEnglish:
    "In a series RLC circuit, the inductive reactance is 30 Ω and the capacitive reactance is 10 Ω. What is the net reactance?",
  questionArabic:
    "في دائرة RLC متصلة على التوالي، المفاعلة الحثية 30 أوم والمفاعلة السعوية 10 أوم. ما المفاعلة الصافية؟",
  options: [
    { english: "-20 Ω", arabic: "-20 أوم" },
    { english: "20 Ω", arabic: "20 أوم" },
    { english: "40 Ω", arabic: "40 أوم" },
    { english: "300 Ω", arabic: "300 أوم" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0216",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "LED Circuits",
  difficulty: "Medium",
  questionEnglish:
    "A red LED has a forward voltage of 2 V and is connected to a 10 V source through a resistor. What resistor value provides approximately 20 mA?",
  questionArabic:
    "يمتلك LED أحمر جهدًا أماميًا مقداره 2 فولت ويتصل بمصدر 10 فولت من خلال مقاومة. ما قيمة المقاومة التي توفر تيارًا يقارب 20 مللي أمبير؟",
  options: [
    { english: "100 Ω", arabic: "100 أوم" },
    { english: "200 Ω", arabic: "200 أوم" },
    { english: "400 Ω", arabic: "400 أوم" },
    { english: "500 Ω", arabic: "500 أوم" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0217",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Amplifier Gain",
  difficulty: "Medium",
  questionEnglish:
    "An amplifier produces an output voltage of 8 V from an input voltage of 0.2 V. What is its voltage gain?",
  questionArabic:
    "ينتج مضخم جهد خرج مقداره 8 فولت من جهد دخل مقداره 0.2 فولت. ما كسب الجهد؟",
  options: [
    { english: "1.6", arabic: "1.6" },
    { english: "8", arabic: "8" },
    { english: "20", arabic: "20" },
    { english: "40", arabic: "40" }
  ],
  correctAnswer: 3
},

{
  id: "ENG0218",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Periodicity",
  difficulty: "Medium",
  questionEnglish:
    "What is the fundamental period of x(t) = cos(4πt)?",
  questionArabic:
    "ما الزمن الدوري الأساسي للإشارة x(t) = cos(4πt)؟",
  options: [
    { english: "0.25 s", arabic: "0.25 ثانية" },
    { english: "0.5 s", arabic: "0.5 ثانية" },
    { english: "2 s", arabic: "2 ثانية" },
    { english: "4 s", arabic: "4 ثوانٍ" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0219",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Binary Addition",
  difficulty: "Medium",
  questionEnglish:
    "What is the binary result of 1011₂ + 0101₂?",
  questionArabic:
    "ما ناتج الجمع الثنائي 1011₂ + 0101₂؟",
  options: [
    { english: "10000₂", arabic: "10000₂" },
    { english: "1110₂", arabic: "1110₂" },
    { english: "11000₂", arabic: "11000₂" },
    { english: "10100₂", arabic: "10100₂" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0220",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "T Flip-Flops",
  difficulty: "Medium",
  questionEnglish:
    "What happens to a T flip-flop at the active clock edge when T = 0?",
  questionArabic:
    "ماذا يحدث لقَلّاب T عند حافة الساعة الفعالة عندما T = 0؟",
  options: [
    { english: "The output toggles", arabic: "يتبدل الخرج" },
    { english: "The output resets", arabic: "يُعاد ضبط الخرج" },
    { english: "The output remains unchanged", arabic: "يبقى الخرج دون تغيير" },
    { english: "The output becomes undefined", arabic: "يصبح الخرج غير معرف" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0221",
  domain: "Computer Engineering",
  course: "EEL 4709C Computer Design",
  topic: "CPU Performance",
  difficulty: "Hard",
  questionEnglish:
    "A processor executes 1 billion instructions with an average CPI of 2 at a clock rate of 2 GHz. What is the execution time?",
  questionArabic:
    "ينفذ معالج مليار تعليمة بمتوسط CPI يساوي 2 وتردد ساعة 2 جيجاهرتز. ما زمن التنفيذ؟",
  options: [
    { english: "0.5 s", arabic: "0.5 ثانية" },
    { english: "1 s", arabic: "1 ثانية" },
    { english: "2 s", arabic: "2 ثانية" },
    { english: "4 s", arabic: "4 ثوانٍ" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0222",
  domain: "Embedded Systems",
  course: "EEL 4730 Programming Embedded Systems",
  topic: "Serial Communication",
  difficulty: "Medium",
  questionEnglish:
    "Which communication protocol commonly uses separate clock and data lines and supports multiple peripheral devices using chip-select signals?",
  questionArabic:
    "أي بروتوكول اتصال يستخدم عادةً خطوطًا منفصلة للساعة والبيانات ويدعم عدة أجهزة طرفية باستخدام إشارات اختيار الشرائح؟",
  options: [
    { english: "UART", arabic: "UART" },
    { english: "SPI", arabic: "SPI" },
    { english: "HTTP", arabic: "HTTP" },
    { english: "Ethernet", arabic: "Ethernet" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0223",
  domain: "Programming",
  course: "COP 3337 Programming II",
  topic: "Inheritance",
  difficulty: "Medium",
  questionEnglish:
    "In Java, which keyword is used when one class inherits from another class?",
  questionArabic:
    "في Java، ما الكلمة المفتاحية المستخدمة عندما ترث فئة من فئة أخرى؟",
  options: [
    { english: "implements", arabic: "implements" },
    { english: "extends", arabic: "extends" },
    { english: "imports", arabic: "imports" },
    { english: "inherits", arabic: "inherits" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0224",
  domain: "Computer Science",
  course: "COP 3530 Data Structures",
  topic: "Graph Traversal",
  difficulty: "Hard",
  questionEnglish:
    "Which data structure is normally used by breadth-first search?",
  questionArabic:
    "أي بنية بيانات تُستخدم عادةً في خوارزمية البحث بالعرض أولًا؟",
  options: [
    { english: "Stack", arabic: "مكدس" },
    { english: "Queue", arabic: "طابور" },
    { english: "Heap only", arabic: "كومة فقط" },
    { english: "Hash table only", arabic: "جدول تجزئة فقط" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0225",
  domain: "Networking",
  course: "TCN 4211 Computer Communication Networks",
  topic: "TCP/IP",
  difficulty: "Medium",
  questionEnglish:
    "Which device primarily forwards packets between different IP networks?",
  questionArabic:
    "أي جهاز يقوم بصورة أساسية بتمرير الحزم بين شبكات IP المختلفة؟",
  options: [
    { english: "Hub", arabic: "الموزع Hub" },
    { english: "Router", arabic: "الموجه Router" },
    { english: "Repeater", arabic: "المكرر Repeater" },
    { english: "Patch panel", arabic: "لوحة التوصيل" }
  ],
  correctAnswer: 1
},
{
  id: "ENG0251",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Continuity",
  difficulty: "Easy",
  questionEnglish: "Which condition is required for f(x) to be continuous at x = a?",
  questionArabic: "أي شرط مطلوب لكي تكون f(x) متصلة عند x = a؟",
  options: [
    { english: "f(a) must be zero", arabic: "يجب أن تكون f(a) مساوية للصفر" },
    { english: "lim(x→a) f(x) must exist and equal f(a)", arabic: "يجب أن توجد lim(x→a) f(x) وتساوي f(a)" },
    { english: "f'(a) must equal zero", arabic: "يجب أن تكون f'(a) مساوية للصفر" },
    { english: "f(x) must be linear", arabic: "يجب أن تكون f(x) خطية" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0252",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Antiderivatives",
  difficulty: "Medium",
  questionEnglish: "Find the general antiderivative of 6x² - 4.",
  questionArabic: "أوجد التكامل غير المحدد العام للتعبير 6x² - 4.",
  options: [
    { english: "2x³ - 4x + C", arabic: "2x³ - 4x + C" },
    { english: "6x³ - 4x + C", arabic: "6x³ - 4x + C" },
    { english: "3x² - 4 + C", arabic: "3x² - 4 + C" },
    { english: "2x³ - 4 + C", arabic: "2x³ - 4 + C" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0253",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Improper Integrals",
  difficulty: "Hard",
  questionEnglish: "Does the improper integral ∫₁^∞ 1/x² dx converge, and if so, to what value?",
  questionArabic: "هل يتقارب التكامل غير الصحيح ∫₁^∞ 1/x² dx، وإذا كان كذلك فما قيمته؟",
  options: [
    { english: "It diverges", arabic: "يتباعد" },
    { english: "It converges to 1/2", arabic: "يتقارب إلى 1/2" },
    { english: "It converges to 1", arabic: "يتقارب إلى 1" },
    { english: "It converges to 2", arabic: "يتقارب إلى 2" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0254",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Taylor Polynomials",
  difficulty: "Hard",
  questionEnglish: "What is the second-degree Maclaurin polynomial for e^x?",
  questionArabic: "ما كثيرة حدود ماكلورين من الدرجة الثانية للدالة e^x؟",
  options: [
    { english: "1 + x", arabic: "1 + x" },
    { english: "1 + x + x²/2", arabic: "1 + x + x²/2" },
    { english: "x + x²", arabic: "x + x²" },
    { english: "1 + x²/2", arabic: "1 + x²/2" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0255",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Directional Derivatives",
  difficulty: "Hard",
  questionEnglish: "For f(x,y) = x² + y², what is the directional derivative at (1,2) in the direction of the unit vector ⟨1,0⟩?",
  questionArabic: "للدالة f(x,y) = x² + y²، ما المشتقة الاتجاهية عند (1,2) في اتجاه متجه الوحدة ⟨1,0⟩؟",
  options: [
    { english: "1", arabic: "1" },
    { english: "2", arabic: "2" },
    { english: "4", arabic: "4" },
    { english: "5", arabic: "5" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0256",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Equilibrium Solutions",
  difficulty: "Medium",
  questionEnglish: "For dy/dt = y(4 - y), what are the equilibrium solutions?",
  questionArabic: "للمعادلة dy/dt = y(4 - y)، ما حلول الاتزان؟",
  options: [
    { english: "y = 0 only", arabic: "y = 0 فقط" },
    { english: "y = 4 only", arabic: "y = 4 فقط" },
    { english: "y = 0 and y = 4", arabic: "y = 0 وy = 4" },
    { english: "y = -4 and y = 4", arabic: "y = -4 وy = 4" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0257",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Gravitational Potential Energy",
  difficulty: "Easy",
  questionEnglish: "What is the gravitational potential energy of a 3 kg object raised 5 m above a reference level? Use g = 10 m/s².",
  questionArabic: "ما طاقة الوضع الجاذبية لجسم كتلته 3 كجم مرفوع 5 أمتار فوق مستوى مرجعي؟ استخدم g = 10 م/ث².",
  options: [
    { english: "15 J", arabic: "15 جول" },
    { english: "50 J", arabic: "50 جول" },
    { english: "150 J", arabic: "150 جول" },
    { english: "300 J", arabic: "300 جول" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0258",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Rotational Kinematics",
  difficulty: "Medium",
  questionEnglish: "A wheel starts from rest and accelerates uniformly at 4 rad/s² for 3 s. What is its final angular speed?",
  questionArabic: "تبدأ عجلة من السكون وتتسارع زاويًا بانتظام بمعدل 4 راديان/ث² لمدة 3 ثوانٍ. ما سرعتها الزاوية النهائية؟",
  options: [
    { english: "4 rad/s", arabic: "4 راديان/ث" },
    { english: "7 rad/s", arabic: "7 راديان/ث" },
    { english: "12 rad/s", arabic: "12 راديان/ث" },
    { english: "36 rad/s", arabic: "36 راديان/ث" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0259",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Parallel Capacitors",
  difficulty: "Easy",
  questionEnglish: "What is the equivalent capacitance of 2 μF, 3 μF, and 5 μF capacitors connected in parallel?",
  questionArabic: "ما السعة المكافئة لمكثفات سعتها 2 و3 و5 ميكروفاراد متصلة على التوازي؟",
  options: [
    { english: "1 μF", arabic: "1 ميكروفاراد" },
    { english: "5 μF", arabic: "5 ميكروفاراد" },
    { english: "10 μF", arabic: "10 ميكروفاراد" },
    { english: "30 μF", arabic: "30 ميكروفاراد" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0260",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Faraday's Law",
  difficulty: "Hard",
  questionEnglish: "Which change can induce an emf in a conducting loop?",
  questionArabic: "أي تغير يمكن أن يستحث قوة دافعة كهربائية في حلقة موصلة؟",
  options: [
    { english: "A constant magnetic flux", arabic: "فيض مغناطيسي ثابت" },
    { english: "A changing magnetic flux", arabic: "فيض مغناطيسي متغير" },
    { english: "A constant electric charge only", arabic: "شحنة كهربائية ثابتة فقط" },
    { english: "A constant resistance", arabic: "مقاومة ثابتة" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0261",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Variance",
  difficulty: "Medium",
  questionEnglish: "What does a larger variance indicate about a dataset?",
  questionArabic: "إلى ماذا يشير التباين الأكبر في مجموعة بيانات؟",
  options: [
    { english: "The values are more tightly clustered around the mean", arabic: "القيم أكثر تقاربًا حول المتوسط" },
    { english: "The values are more widely dispersed", arabic: "القيم أكثر تشتتًا" },
    { english: "The mean must be larger", arabic: "يجب أن يكون المتوسط أكبر" },
    { english: "The dataset contains no outliers", arabic: "لا تحتوي البيانات على قيم شاذة" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0262",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Future Worth",
  difficulty: "Medium",
  questionEnglish: "What is the future value of $2,000 invested for three years at 5% annual compound interest?",
  questionArabic: "ما القيمة المستقبلية لمبلغ 2,000 دولار يُستثمر لمدة ثلاث سنوات بفائدة مركبة سنوية قدرها 5%؟",
  options: [
    { english: "$2,100.00", arabic: "2,100.00 دولار" },
    { english: "$2,205.00", arabic: "2,205.00 دولار" },
    { english: "$2,315.25", arabic: "2,315.25 دولار" },
    { english: "$2,500.00", arabic: "2,500.00 دولار" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0263",
  domain: "Circuit Analysis",
  course: "EEL 3110 Circuit Analysis",
  topic: "Kirchhoff's Voltage Law",
  difficulty: "Easy",
  questionEnglish: "According to Kirchhoff's Voltage Law, what is the algebraic sum of all voltages around a closed loop?",
  questionArabic: "وفقًا لقانون كيرشوف للجهد، ما المجموع الجبري لجميع الجهود حول حلقة مغلقة؟",
  options: [
    { english: "Zero", arabic: "صفر" },
    { english: "Equal to the total resistance", arabic: "يساوي المقاومة الكلية" },
    { english: "Equal to the largest source voltage", arabic: "يساوي أكبر جهد مصدر" },
    { english: "Infinite", arabic: "لا نهائي" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0264",
  domain: "Circuit Analysis",
  course: "EEL 3110 Circuit Analysis",
  topic: "RL Time Constant",
  difficulty: "Medium",
  questionEnglish: "What is the time constant of an RL circuit with L = 6 H and R = 3 Ω?",
  questionArabic: "ما ثابت الزمن لدائرة RL فيها L = 6 هنري وR = 3 أوم؟",
  options: [
    { english: "0.5 s", arabic: "0.5 ثانية" },
    { english: "2 s", arabic: "2 ثانية" },
    { english: "3 s", arabic: "3 ثوانٍ" },
    { english: "18 s", arabic: "18 ثانية" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0265",
  domain: "Circuit Analysis",
  course: "EEL 3110 Circuit Analysis",
  topic: "Thevenin Resistance",
  difficulty: "Hard",
  questionEnglish: "When finding Thevenin resistance in a circuit containing only independent sources, what is done to independent current sources?",
  questionArabic: "عند إيجاد مقاومة ثيفينن في دائرة تحتوي فقط على مصادر مستقلة، ماذا يُفعل بمصادر التيار المستقلة؟",
  options: [
    { english: "They are replaced by short circuits", arabic: "تُستبدل بقصر كهربائي" },
    { english: "They are replaced by open circuits", arabic: "تُستبدل بدوائر مفتوحة" },
    { english: "Their current is doubled", arabic: "يُضاعف تيارها" },
    { english: "Their direction is reversed", arabic: "يُعكس اتجاهها" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0266",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Diode Biasing",
  difficulty: "Medium",
  questionEnglish: "An ideal diode is forward biased. How does it behave?",
  questionArabic: "يكون الدايود المثالي منحازًا أماميًا. كيف يتصرف؟",
  options: [
    { english: "As an open circuit", arabic: "كدائرة مفتوحة" },
    { english: "As a short circuit", arabic: "كقصر كهربائي" },
    { english: "As a current source", arabic: "كمصدر تيار" },
    { english: "As a capacitor", arabic: "كمكثف" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0267",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Op-Amp Saturation",
  difficulty: "Hard",
  questionEnglish: "An op-amp powered by ±12 V supplies cannot normally produce an output of:",
  questionArabic: "مضخم عمليات يعمل بمصدري تغذية ±12 فولت لا يمكنه عادةً إنتاج خرج مقداره:",
  options: [
    { english: "5 V", arabic: "5 فولت" },
    { english: "-8 V", arabic: "-8 فولت" },
    { english: "10 V", arabic: "10 فولت" },
    { english: "20 V", arabic: "20 فولت" }
  ],
  correctAnswer: 3
},

{
  id: "ENG0268",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Time Invariance",
  difficulty: "Hard",
  questionEnglish: "Which system is time invariant?",
  questionArabic: "أي نظام من الأنظمة التالية ثابت مع الزمن؟",
  options: [
    { english: "y(t) = tx(t)", arabic: "y(t) = tx(t)" },
    { english: "y(t) = x(t - 3)", arabic: "y(t) = x(t - 3)" },
    { english: "y(t) = x(2t)", arabic: "y(t) = x(2t)" },
    { english: "y(t) = t + x(t)", arabic: "y(t) = t + x(t)" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0269",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "De Morgan's Laws",
  difficulty: "Medium",
  questionEnglish: "According to De Morgan's law, what is the complement of A + B?",
  questionArabic: "وفقًا لقانون دي مورغان، ما متمم A + B؟",
  options: [
    { english: "A' + B'", arabic: "A' + B'" },
    { english: "A'B'", arabic: "A'B'" },
    { english: "AB", arabic: "AB" },
    { english: "A + B'", arabic: "A + B'" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0270",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "D Flip-Flops",
  difficulty: "Easy",
  questionEnglish: "At the active clock edge, what value does a D flip-flop store?",
  questionArabic: "عند حافة الساعة الفعالة، ما القيمة التي يخزنها قلاب D؟",
  options: [
    { english: "The complement of D", arabic: "متمم D" },
    { english: "The previous output only", arabic: "الخرج السابق فقط" },
    { english: "The current value of D", arabic: "القيمة الحالية لـ D" },
    { english: "Always zero", arabic: "صفر دائمًا" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0271",
  domain: "Computer Architecture",
  course: "EEL 4709C Computer Design",
  topic: "Memory Hierarchy",
  difficulty: "Medium",
  questionEnglish: "Which memory type is generally the fastest?",
  questionArabic: "أي نوع من الذاكرة يكون الأسرع عادةً؟",
  options: [
    { english: "Hard disk drive", arabic: "القرص الصلب" },
    { english: "Main memory", arabic: "الذاكرة الرئيسية" },
    { english: "Cache memory", arabic: "الذاكرة المخبأة" },
    { english: "Optical disk", arabic: "القرص الضوئي" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0272",
  domain: "Embedded Systems",
  course: "EEL 4730 Programming Embedded Systems",
  topic: "I2C Communication",
  difficulty: "Medium",
  questionEnglish: "Which two signal lines are commonly used by the I2C protocol?",
  questionArabic: "ما خطا الإشارة المستخدمان عادةً في بروتوكول I2C؟",
  options: [
    { english: "TX and RX", arabic: "TX وRX" },
    { english: "MOSI and MISO", arabic: "MOSI وMISO" },
    { english: "SDA and SCL", arabic: "SDA وSCL" },
    { english: "CLK and CS only", arabic: "CLK وCS فقط" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0273",
  domain: "Programming",
  course: "COP 3337 Programming II",
  topic: "Polymorphism",
  difficulty: "Hard",
  questionEnglish: "In object-oriented programming, what does runtime polymorphism commonly depend on?",
  questionArabic: "في البرمجة كائنية التوجه، على ماذا يعتمد تعدد الأشكال وقت التشغيل عادةً؟",
  options: [
    { english: "Method overriding", arabic: "إعادة تعريف الطرق" },
    { english: "Variable declaration only", arabic: "تعريف المتغيرات فقط" },
    { english: "Method overloading only", arabic: "تحميل الطرق فقط" },
    { english: "Constant folding", arabic: "طي الثوابت" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0274",
  domain: "Data Structures",
  course: "COP 3530 Data Structures",
  topic: "Heaps",
  difficulty: "Hard",
  questionEnglish: "In a max heap, which value is stored at the root?",
  questionArabic: "في الكومة العظمى، أي قيمة تُخزن عند الجذر؟",
  options: [
    { english: "The smallest value", arabic: "أصغر قيمة" },
    { english: "The largest value", arabic: "أكبر قيمة" },
    { english: "The newest value", arabic: "أحدث قيمة" },
    { english: "The median value", arabic: "القيمة الوسيطة" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0275",
  domain: "Networking",
  course: "TCN 4211 Computer Communication Networks",
  topic: "IPv4 Addressing",
  difficulty: "Medium",
  questionEnglish: "How many usable host addresses are available in a standard IPv4 /29 subnet?",
  questionArabic: "كم عدد عناوين الأجهزة القابلة للاستخدام في شبكة IPv4 فرعية قياسية من النوع /29؟",
  options: [
    { english: "4", arabic: "4" },
    { english: "6", arabic: "6" },
    { english: "8", arabic: "8" },
    { english: "14", arabic: "14" }
  ],
  correctAnswer: 1
},
{
  id: "ENG0276",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Implicit Differentiation",
  difficulty: "Medium",
  questionEnglish: "Find dy/dx if x² + y² = 25.",
  questionArabic: "أوجد dy/dx إذا كانت x² + y² = 25.",
  options: [
    { english: "-x/y", arabic: "-x/y" },
    { english: "-y/x", arabic: "-y/x" },
    { english: "x/y", arabic: "x/y" },
    { english: "y/x", arabic: "y/x" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0277",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Linear Approximation",
  difficulty: "Medium",
  questionEnglish: "Using linear approximation, estimate √4.1.",
  questionArabic: "باستخدام التقريب الخطي، قدر قيمة √4.1.",
  options: [
    { english: "2.025", arabic: "2.025" },
    { english: "2.050", arabic: "2.050" },
    { english: "2.100", arabic: "2.100" },
    { english: "2.250", arabic: "2.250" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0278",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Arc Length",
  difficulty: "Hard",
  questionEnglish: "Which formula gives the arc length of y = f(x) from x=a to x=b?",
  questionArabic: "أي صيغة تعطي طول القوس للدالة y=f(x) من x=a إلى x=b؟",
  options: [
    { english: "∫ₐᵇ √(1+(dy/dx)²) dx", arabic: "∫ₐᵇ √(1+(dy/dx)²) dx" },
    { english: "∫ₐᵇ y dx", arabic: "∫ₐᵇ y dx" },
    { english: "∫ₐᵇ x² dx", arabic: "∫ₐᵇ x² dx" },
    { english: "π∫ₐᵇ y² dx", arabic: "π∫ₐᵇ y² dx" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0279",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Power Series",
  difficulty: "Hard",
  questionEnglish: "The power series Σxⁿ converges for which values of x?",
  questionArabic: "تتقارب متسلسلة القوى Σxⁿ لأي قيم لـ x؟",
  options: [
    { english: "|x| < 1", arabic: "|x| < 1" },
    { english: "|x| ≤ 1", arabic: "|x| ≤ 1" },
    { english: "|x| > 1", arabic: "|x| > 1" },
    { english: "All real x", arabic: "جميع الأعداد الحقيقية" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0280",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Partial Derivatives",
  difficulty: "Medium",
  questionEnglish: "Find ∂/∂y of f(x,y)=x²y³.",
  questionArabic: "أوجد ∂/∂y للدالة f(x,y)=x²y³.",
  options: [
    { english: "3x²y²", arabic: "3x²y²" },
    { english: "2xy³", arabic: "2xy³" },
    { english: "x²y²", arabic: "x²y²" },
    { english: "6xy²", arabic: "6xy²" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0281",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Euler Method",
  difficulty: "Hard",
  questionEnglish: "Euler's method is primarily used to:",
  questionArabic: "تستخدم طريقة أويلر بشكل أساسي من أجل:",
  options: [
    { english: "Approximate numerical solutions of ODEs", arabic: "إيجاد حلول عددية تقريبية للمعادلات التفاضلية" },
    { english: "Solve linear algebra systems", arabic: "حل أنظمة الجبر الخطي" },
    { english: "Evaluate definite integrals", arabic: "حساب التكاملات المحددة" },
    { english: "Find eigenvalues", arabic: "إيجاد القيم الذاتية" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0282",
  domain: "Physics",
  course: "PHY 2048",
  topic: "Uniform Acceleration",
  difficulty: "Easy",
  questionEnglish: "A car accelerates uniformly from 10 m/s to 20 m/s in 5 s. What is its acceleration?",
  questionArabic: "تتسارع سيارة بانتظام من 10 م/ث إلى 20 م/ث خلال 5 ثوانٍ. ما مقدار تسارعها؟",
  options: [
    { english: "1 m/s²", arabic: "1 م/ث²" },
    { english: "2 m/s²", arabic: "2 م/ث²" },
    { english: "3 m/s²", arabic: "3 م/ث²" },
    { english: "5 m/s²", arabic: "5 م/ث²" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0283",
  domain: "Physics",
  course: "PHY 2048",
  topic: "Newton's Third Law",
  difficulty: "Easy",
  questionEnglish: "Newton's Third Law states that:",
  questionArabic: "ينص قانون نيوتن الثالث على أن:",
  options: [
    { english: "Every action has an equal and opposite reaction.", arabic: "لكل فعل رد فعل مساوٍ له في المقدار ومعاكس له في الاتجاه." },
    { english: "Force equals mass times acceleration.", arabic: "القوة تساوي الكتلة × التسارع." },
    { english: "Energy is always conserved.", arabic: "الطاقة محفوظة دائمًا." },
    { english: "Momentum is proportional to force.", arabic: "الزخم يتناسب مع القوة." }
  ],
  correctAnswer: 0
},

{
  id: "ENG0284",
  domain: "Physics",
  course: "PHY 2049",
  topic: "Ohm's Law",
  difficulty: "Easy",
  questionEnglish: "A resistor has 5 Ω resistance and carries 2 A. What is the voltage?",
  questionArabic: "مقاومة قيمتها 5 أوم يمر بها تيار مقداره 2 أمبير. ما الجهد؟",
  options: [
    { english: "5 V", arabic: "5 فولت" },
    { english: "7 V", arabic: "7 فولت" },
    { english: "10 V", arabic: "10 فولت" },
    { english: "20 V", arabic: "20 فولت" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0285",
  domain: "Physics",
  course: "PHY 2049",
  topic: "Resistance",
  difficulty: "Medium",
  questionEnglish: "Which material generally has the lowest electrical resistance?",
  questionArabic: "أي مادة تمتلك عادةً أقل مقاومة كهربائية؟",
  options: [
    { english: "Copper", arabic: "النحاس" },
    { english: "Glass", arabic: "الزجاج" },
    { english: "Rubber", arabic: "المطاط" },
    { english: "Wood", arabic: "الخشب" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0286",
  domain: "Statistics",
  course: "STA 3111",
  topic: "Standard Deviation",
  difficulty: "Medium",
  questionEnglish: "Standard deviation measures:",
  questionArabic: "الانحراف المعياري يقيس:",
  options: [
    { english: "Data spread around the mean", arabic: "تشتت البيانات حول المتوسط" },
    { english: "The maximum value", arabic: "القيمة العظمى" },
    { english: "The sample size", arabic: "حجم العينة" },
    { english: "The probability of success", arabic: "احتمال النجاح" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0287",
  domain: "Engineering Economy",
  course: "EGN 3613",
  topic: "Simple Interest",
  difficulty: "Easy",
  questionEnglish: "What is the simple interest on $1,000 invested at 5% for 2 years?",
  questionArabic: "ما قيمة الفائدة البسيطة لمبلغ 1,000 دولار بمعدل 5% لمدة سنتين؟",
  options: [
    { english: "$50", arabic: "50 دولارًا" },
    { english: "$100", arabic: "100 دولار" },
    { english: "$150", arabic: "150 دولارًا" },
    { english: "$200", arabic: "200 دولار" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0288",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Series Circuits",
  difficulty: "Easy",
  questionEnglish: "In a series circuit, the current is:",
  questionArabic: "في دائرة التوالي يكون التيار:",
  options: [
    { english: "The same through all components", arabic: "متساويًا في جميع العناصر" },
    { english: "Different through every resistor", arabic: "مختلفًا في كل مقاومة" },
    { english: "Always zero", arabic: "يساوي صفرًا دائمًا" },
    { english: "Equal to the voltage", arabic: "يساوي الجهد" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0289",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Parallel Circuits",
  difficulty: "Easy",
  questionEnglish: "In a parallel circuit, the voltage across each branch is:",
  questionArabic: "في دائرة التوازي يكون الجهد عبر كل فرع:",
  options: [
    { english: "The same", arabic: "متساويًا" },
    { english: "Always different", arabic: "مختلفًا دائمًا" },
    { english: "Zero", arabic: "صفرًا" },
    { english: "Equal to the current", arabic: "يساوي التيار" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0290",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "AC Frequency",
  difficulty: "Medium",
  questionEnglish: "If the frequency is 60 Hz, what is the period?",
  questionArabic: "إذا كان التردد 60 هرتز، فما الزمن الدوري؟",
  options: [
    { english: "0.0167 s", arabic: "0.0167 ثانية" },
    { english: "0.06 s", arabic: "0.06 ثانية" },
    { english: "60 s", arabic: "60 ثانية" },
    { english: "6 s", arabic: "6 ثوانٍ" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0291",
  domain: "Electronics",
  course: "EEL 3370",
  topic: "PN Junction",
  difficulty: "Easy",
  questionEnglish: "A PN junction diode primarily allows current to flow:",
  questionArabic: "يسمح دايود الوصلة PN بمرور التيار بشكل أساسي:",
  options: [
    { english: "In one direction", arabic: "في اتجاه واحد" },
    { english: "In both directions equally", arabic: "في الاتجاهين بالتساوي" },
    { english: "Only under AC", arabic: "فقط مع التيار المتردد" },
    { english: "Never", arabic: "أبدًا" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0292",
  domain: "Electronics",
  course: "EEL 3370",
  topic: "MOSFET",
  difficulty: "Medium",
  questionEnglish: "MOSFET stands for:",
  questionArabic: "يرمز MOSFET إلى:",
  options: [
    { english: "Metal Oxide Semiconductor Field Effect Transistor", arabic: "ترانزستور تأثير المجال شبه الموصل ذو أكسيد المعدن" },
    { english: "Magnetic Output Semiconductor Field Transistor", arabic: "ترانزستور المجال المغناطيسي" },
    { english: "Metal Output Switching Field Transistor", arabic: "ترانزستور تبديل معدني" },
    { english: "None of the above", arabic: "لا شيء مما سبق" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0293",
  domain: "Signals & Systems",
  course: "EEL 3135",
  topic: "Signal Energy",
  difficulty: "Hard",
  questionEnglish: "An energy signal has:",
  questionArabic: "إشارة الطاقة تمتلك:",
  options: [
    { english: "Finite energy", arabic: "طاقة محدودة" },
    { english: "Infinite energy", arabic: "طاقة لا نهائية" },
    { english: "Zero power only", arabic: "قدرة صفرية فقط" },
    { english: "Infinite frequency", arabic: "تردد لا نهائي" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0294",
  domain: "Digital Logic",
  course: "EEL 3712",
  topic: "Logic Gates",
  difficulty: "Easy",
  questionEnglish: "An XOR gate outputs 1 when:",
  questionArabic: "تعطي بوابة XOR خرجًا يساوي 1 عندما:",
  options: [
    { english: "Inputs are different", arabic: "تكون المدخلات مختلفة" },
    { english: "Inputs are the same", arabic: "تكون المدخلات متساوية" },
    { english: "Both inputs are 0", arabic: "كلا المدخلين صفر" },
    { english: "Both inputs are 1", arabic: "كلا المدخلين واحد" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0295",
  domain: "Digital Logic",
  course: "EEL 3712",
  topic: "Binary Numbers",
  difficulty: "Easy",
  questionEnglish: "Convert binary 1111₂ to decimal.",
  questionArabic: "حول العدد الثنائي 1111₂ إلى النظام العشري.",
  options: [
    { english: "12", arabic: "12" },
    { english: "14", arabic: "14" },
    { english: "15", arabic: "15" },
    { english: "16", arabic: "16" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0296",
  domain: "Computer Architecture",
  course: "EEL 4709C",
  topic: "Registers",
  difficulty: "Medium",
  questionEnglish: "CPU registers are primarily used to:",
  questionArabic: "تستخدم سجلات المعالج بشكل أساسي من أجل:",
  options: [
    { english: "Store temporary data for fast access", arabic: "تخزين البيانات المؤقتة للوصول السريع" },
    { english: "Store files permanently", arabic: "تخزين الملفات بصورة دائمة" },
    { english: "Replace RAM", arabic: "استبدال ذاكرة RAM" },
    { english: "Store operating systems", arabic: "تخزين أنظمة التشغيل" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0297",
  domain: "Embedded Systems",
  course: "EEL 4730",
  topic: "Interrupts",
  difficulty: "Medium",
  questionEnglish: "An interrupt is used to:",
  questionArabic: "تستخدم المقاطعة (Interrupt) من أجل:",
  options: [
    { english: "Temporarily stop normal execution to handle an event", arabic: "إيقاف التنفيذ مؤقتًا لمعالجة حدث" },
    { english: "Increase memory size", arabic: "زيادة حجم الذاكرة" },
    { english: "Reduce CPU frequency", arabic: "خفض تردد المعالج" },
    { english: "Disable peripherals permanently", arabic: "تعطيل الأجهزة الطرفية نهائيًا" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0298",
  domain: "Programming",
  course: "COP 3337",
  topic: "Interfaces",
  difficulty: "Medium",
  questionEnglish: "Which Java keyword is used to implement an interface?",
  questionArabic: "ما الكلمة المفتاحية المستخدمة في Java لتطبيق واجهة (Interface)؟",
  options: [
    { english: "extends", arabic: "extends" },
    { english: "implements", arabic: "implements" },
    { english: "inherits", arabic: "inherits" },
    { english: "instanceof", arabic: "instanceof" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0299",
  domain: "Data Structures",
  course: "COP 3530",
  topic: "Queues",
  difficulty: "Easy",
  questionEnglish: "A queue follows which principle?",
  questionArabic: "يتبع الطابور (Queue) أي مبدأ؟",
  options: [
    { english: "FIFO", arabic: "الأول دخولًا هو الأول خروجًا" },
    { english: "LIFO", arabic: "الأخير دخولًا هو الأول خروجًا" },
    { english: "Random access", arabic: "وصول عشوائي" },
    { english: "Priority only", arabic: "الأولوية فقط" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0300",
  domain: "Networking",
  course: "TCN 4211",
  topic: "OSI Model",
  difficulty: "Medium",
  questionEnglish: "Which OSI layer is responsible for routing packets between networks?",
  questionArabic: "أي طبقة في نموذج OSI مسؤولة عن توجيه الحزم بين الشبكات؟",
  options: [
    { english: "Data Link Layer", arabic: "طبقة ربط البيانات" },
    { english: "Transport Layer", arabic: "طبقة النقل" },
    { english: "Network Layer", arabic: "طبقة الشبكة" },
    { english: "Application Layer", arabic: "طبقة التطبيقات" }
  ],
  correctAnswer: 2
},
{
  id: "ENG0301",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Exponential Functions",
  difficulty: "Easy",
  questionEnglish: "Evaluate e⁰.",
  questionArabic: "احسب قيمة e⁰.",
  options: [
    { english: "0", arabic: "0" },
    { english: "1", arabic: "1" },
    { english: "e", arabic: "e" },
    { english: "Undefined", arabic: "غير معرف" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0302",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Natural Logarithms",
  difficulty: "Easy",
  questionEnglish: "What is ln(e³)?",
  questionArabic: "ما قيمة ln(e³)؟",
  options: [
    { english: "1", arabic: "1" },
    { english: "3", arabic: "3" },
    { english: "e", arabic: "e" },
    { english: "9", arabic: "9" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0303",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Integration",
  difficulty: "Medium",
  questionEnglish: "Evaluate ∫₀² x dx.",
  questionArabic: "احسب ∫₀² x dx.",
  options: [
    { english: "1", arabic: "1" },
    { english: "2", arabic: "2" },
    { english: "4", arabic: "4" },
    { english: "8", arabic: "8" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0304",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Improper Integrals",
  difficulty: "Hard",
  questionEnglish: "The integral ∫₁∞ 1/x dx is:",
  questionArabic: "التكامل ∫₁∞ 1/x dx هو:",
  options: [
    { english: "Convergent", arabic: "متقارب" },
    { english: "Divergent", arabic: "متباعد" },
    { english: "Equal to 1", arabic: "يساوي 1" },
    { english: "Equal to π", arabic: "يساوي π" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0305",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Gradient",
  difficulty: "Medium",
  questionEnglish: "The gradient vector always points in which direction?",
  questionArabic: "يشير متجه التدرج دائمًا إلى أي اتجاه؟",
  options: [
    { english: "Maximum increase", arabic: "أكبر معدل زيادة" },
    { english: "Maximum decrease", arabic: "أكبر معدل نقصان" },
    { english: "Perpendicular to the surface", arabic: "عموديًا على السطح دائمًا" },
    { english: "Toward the origin", arabic: "باتجاه الأصل" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0306",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Linear ODEs",
  difficulty: "Medium",
  questionEnglish: "The order of the equation y''' + y = 0 is:",
  questionArabic: "رتبة المعادلة y''' + y = 0 هي:",
  options: [
    { english: "First", arabic: "الأولى" },
    { english: "Second", arabic: "الثانية" },
    { english: "Third", arabic: "الثالثة" },
    { english: "Fourth", arabic: "الرابعة" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0307",
  domain: "Physics",
  course: "PHY 2048",
  topic: "Velocity",
  difficulty: "Easy",
  questionEnglish: "Velocity is the rate of change of:",
  questionArabic: "السرعة المتجهة هي معدل تغير:",
  options: [
    { english: "Acceleration", arabic: "التسارع" },
    { english: "Displacement", arabic: "الإزاحة" },
    { english: "Force", arabic: "القوة" },
    { english: "Momentum", arabic: "الزخم" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0308",
  domain: "Physics",
  course: "PHY 2048",
  topic: "Momentum",
  difficulty: "Easy",
  questionEnglish: "Momentum equals:",
  questionArabic: "الزخم يساوي:",
  options: [
    { english: "Mass × Velocity", arabic: "الكتلة × السرعة" },
    { english: "Force × Time", arabic: "القوة × الزمن" },
    { english: "Mass × Acceleration", arabic: "الكتلة × التسارع" },
    { english: "Work / Time", arabic: "الشغل ÷ الزمن" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0309",
  domain: "Physics",
  course: "PHY 2049",
  topic: "Electric Charge",
  difficulty: "Easy",
  questionEnglish: "The SI unit of electric charge is:",
  questionArabic: "وحدة الشحنة الكهربائية في النظام الدولي هي:",
  options: [
    { english: "Volt", arabic: "فولت" },
    { english: "Ampere", arabic: "أمبير" },
    { english: "Coulomb", arabic: "كولوم" },
    { english: "Ohm", arabic: "أوم" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0310",
  domain: "Physics",
  course: "PHY 2049",
  topic: "Electric Current",
  difficulty: "Easy",
  questionEnglish: "Electric current is measured in:",
  questionArabic: "يقاس التيار الكهربائي بوحدة:",
  options: [
    { english: "Volt", arabic: "فولت" },
    { english: "Ampere", arabic: "أمبير" },
    { english: "Watt", arabic: "وات" },
    { english: "Farad", arabic: "فاراد" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0311",
  domain: "Statistics",
  course: "STA 3111",
  topic: "Probability",
  difficulty: "Easy",
  questionEnglish: "The probability of an impossible event is:",
  questionArabic: "احتمال الحدث المستحيل يساوي:",
  options: [
    { english: "0", arabic: "0" },
    { english: "0.5", arabic: "0.5" },
    { english: "1", arabic: "1" },
    { english: "-1", arabic: "-1" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0312",
  domain: "Engineering Economy",
  course: "EGN 3613",
  topic: "Cash Flow",
  difficulty: "Easy",
  questionEnglish: "Money received is called:",
  questionArabic: "يطلق على الأموال المستلمة:",
  options: [
    { english: "Cash inflow", arabic: "تدفق نقدي داخل" },
    { english: "Cash outflow", arabic: "تدفق نقدي خارج" },
    { english: "Depreciation", arabic: "إهلاك" },
    { english: "Liability", arabic: "التزام" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0313",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Power",
  difficulty: "Easy",
  questionEnglish: "Electrical power equals:",
  questionArabic: "القدرة الكهربائية تساوي:",
  options: [
    { english: "VI", arabic: "VI" },
    { english: "V/I", arabic: "V/I" },
    { english: "I/R", arabic: "I/R" },
    { english: "R/V", arabic: "R/V" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0314",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Kirchhoff's Laws",
  difficulty: "Medium",
  questionEnglish: "Kirchhoff's Current Law is based on conservation of:",
  questionArabic: "يعتمد قانون كيرشوف للتيار على حفظ:",
  options: [
    { english: "Charge", arabic: "الشحنة" },
    { english: "Energy", arabic: "الطاقة" },
    { english: "Momentum", arabic: "الزخم" },
    { english: "Voltage", arabic: "الجهد" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0315",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Capacitance",
  difficulty: "Medium",
  questionEnglish: "The SI unit of capacitance is:",
  questionArabic: "وحدة السعة الكهربائية هي:",
  options: [
    { english: "Henry", arabic: "هنري" },
    { english: "Farad", arabic: "فاراد" },
    { english: "Tesla", arabic: "تسلا" },
    { english: "Weber", arabic: "ويبر" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0316",
  domain: "Electronics",
  course: "EEL 3370",
  topic: "Rectifiers",
  difficulty: "Medium",
  questionEnglish: "A bridge rectifier uses how many diodes?",
  questionArabic: "يستخدم مقوم الجسر كم عدد من الدايودات؟",
  options: [
    { english: "2", arabic: "2" },
    { english: "3", arabic: "3" },
    { english: "4", arabic: "4" },
    { english: "6", arabic: "6" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0317",
  domain: "Electronics",
  course: "EEL 3370",
  topic: "BJT",
  difficulty: "Medium",
  questionEnglish: "BJT stands for:",
  questionArabic: "يرمز BJT إلى:",
  options: [
    { english: "Bipolar Junction Transistor", arabic: "ترانزستور الوصلة ثنائي القطبية" },
    { english: "Binary Junction Terminal", arabic: "طرف وصلة ثنائي" },
    { english: "Basic Junction Transistor", arabic: "ترانزستور وصلة أساسي" },
    { english: "Biased Junction Technology", arabic: "تقنية الوصلة المنحازة" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0318",
  domain: "Signals & Systems",
  course: "EEL 3135",
  topic: "Periodic Signals",
  difficulty: "Easy",
  questionEnglish: "A periodic signal repeats after:",
  questionArabic: "الإشارة الدورية تتكرر بعد:",
  options: [
    { english: "A fixed interval", arabic: "فترة زمنية ثابتة" },
    { english: "A random interval", arabic: "فترة عشوائية" },
    { english: "One second only", arabic: "ثانية واحدة فقط" },
    { english: "Never", arabic: "أبدًا" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0319",
  domain: "Digital Logic",
  course: "EEL 3712",
  topic: "Logic Gates",
  difficulty: "Easy",
  questionEnglish: "Which gate outputs the complement of the AND gate?",
  questionArabic: "أي بوابة تعطي متمم خرج بوابة AND؟",
  options: [
    { english: "NOR", arabic: "NOR" },
    { english: "NAND", arabic: "NAND" },
    { english: "XOR", arabic: "XOR" },
    { english: "OR", arabic: "OR" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0320",
  domain: "Digital Logic",
  course: "EEL 3712",
  topic: "Boolean Algebra",
  difficulty: "Medium",
  questionEnglish: "What is A + A ?",
  questionArabic: "ما قيمة A + A ؟",
  options: [
    { english: "0", arabic: "0" },
    { english: "1", arabic: "1" },
    { english: "A", arabic: "A" },
    { english: "A'", arabic: "A'" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0321",
  domain: "Computer Architecture",
  course: "EEL 4709C",
  topic: "CPU",
  difficulty: "Easy",
  questionEnglish: "The CPU is often called the:",
  questionArabic: "يطلق على وحدة المعالجة المركزية غالبًا:",
  options: [
    { english: "Brain of the computer", arabic: "عقل الحاسوب" },
    { english: "Main storage", arabic: "وحدة التخزين الرئيسية" },
    { english: "Power supply", arabic: "مزود الطاقة" },
    { english: "Input device", arabic: "جهاز إدخال" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0322",
  domain: "Embedded Systems",
  course: "EEL 4730",
  topic: "Microcontrollers",
  difficulty: "Easy",
  questionEnglish: "A microcontroller typically integrates CPU, memory, and:",
  questionArabic: "يحتوي المتحكم الدقيق عادةً على المعالج والذاكرة و:",
  options: [
    { english: "Input/Output peripherals", arabic: "الأجهزة الطرفية للإدخال والإخراج" },
    { english: "Monitor", arabic: "شاشة" },
    { english: "Printer", arabic: "طابعة" },
    { english: "Keyboard", arabic: "لوحة مفاتيح" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0323",
  domain: "Programming",
  course: "COP 3337",
  topic: "Objects",
  difficulty: "Easy",
  questionEnglish: "An object is an instance of a:",
  questionArabic: "الكائن (Object) هو نسخة من:",
  options: [
    { english: "Method", arabic: "دالة" },
    { english: "Class", arabic: "فئة" },
    { english: "Loop", arabic: "حلقة" },
    { english: "Variable", arabic: "متغير" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0324",
  domain: "Data Structures",
  course: "COP 3530",
  topic: "Binary Search",
  difficulty: "Medium",
  questionEnglish: "Binary search requires the array to be:",
  questionArabic: "يتطلب البحث الثنائي أن تكون المصفوفة:",
  options: [
    { english: "Sorted", arabic: "مرتبة" },
    { english: "Random", arabic: "عشوائية" },
    { english: "Circular", arabic: "دائرية" },
    { english: "Empty", arabic: "فارغة" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0325",
  domain: "Networking",
  course: "TCN 4211",
  topic: "TCP",
  difficulty: "Medium",
  questionEnglish: "TCP provides:",
  questionArabic: "يوفر بروتوكول TCP:",
  options: [
    { english: "Reliable connection-oriented communication", arabic: "اتصالًا موثوقًا موجهًا بالاتصال" },
    { english: "Connectionless communication only", arabic: "اتصالًا غير موجه بالاتصال فقط" },
    { english: "Physical transmission only", arabic: "الإرسال الفيزيائي فقط" },
    { english: "IP addressing", arabic: "عنونة IP" }
  ],
  correctAnswer: 0
},
{
  id: "ENG0326",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Product Rule",
  difficulty: "Easy",
  questionEnglish: "Find the derivative of f(x) = x²eˣ.",
  questionArabic: "أوجد مشتقة الدالة f(x) = x²eˣ.",
  options: [
    { english: "2xeˣ", arabic: "2xeˣ" },
    { english: "eˣ(x² + 2x)", arabic: "eˣ(x² + 2x)" },
    { english: "x²eˣ", arabic: "x²eˣ" },
    { english: "eˣ(x² - 2x)", arabic: "eˣ(x² - 2x)" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0327",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Mean Value Theorem",
  difficulty: "Medium",
  questionEnglish: "For f(x) = x² on [1,3], what value of c satisfies the Mean Value Theorem?",
  questionArabic: "للدالة f(x) = x² على الفترة [1,3]، ما قيمة c التي تحقق نظرية القيمة المتوسطة؟",
  options: [
    { english: "1", arabic: "1" },
    { english: "2", arabic: "2" },
    { english: "2.5", arabic: "2.5" },
    { english: "3", arabic: "3" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0328",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Volumes of Revolution",
  difficulty: "Medium",
  questionEnglish: "Which integral gives the volume obtained by rotating y = x, 0 ≤ x ≤ 2, about the x-axis?",
  questionArabic: "أي تكامل يعطي حجم الجسم الناتج عن تدوير y = x، حيث 0 ≤ x ≤ 2، حول محور x؟",
  options: [
    { english: "π∫₀² x² dx", arabic: "π∫₀² x² dx" },
    { english: "2π∫₀² x dx", arabic: "2π∫₀² x dx" },
    { english: "π∫₀² x dx", arabic: "π∫₀² x dx" },
    { english: "∫₀² x³ dx", arabic: "∫₀² x³ dx" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0329",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Alternating Series",
  difficulty: "Hard",
  questionEnglish: "Which condition is required by the Alternating Series Test?",
  questionArabic: "أي شرط مطلوب في اختبار المتسلسلة المتناوبة؟",
  options: [
    { english: "The terms must increase without bound", arabic: "يجب أن تزداد الحدود دون حد" },
    { english: "The term magnitudes must decrease to zero", arabic: "يجب أن تتناقص مقادير الحدود إلى الصفر" },
    { english: "Every term must be positive", arabic: "يجب أن تكون جميع الحدود موجبة" },
    { english: "The ratio of consecutive terms must exceed 1", arabic: "يجب أن تكون نسبة الحدود المتتالية أكبر من 1" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0330",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Triple Integrals",
  difficulty: "Hard",
  questionEnglish: "What does the triple integral ∭V 1 dV represent?",
  questionArabic: "ماذا يمثل التكامل الثلاثي ∭V 1 dV؟",
  options: [
    { english: "The surface area of V", arabic: "مساحة سطح V" },
    { english: "The volume of V", arabic: "حجم V" },
    { english: "The perimeter of V", arabic: "محيط V" },
    { english: "The gradient of V", arabic: "تدرج V" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0331",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Characteristic Equations",
  difficulty: "Hard",
  questionEnglish: "What is the general solution of y'' - 5y' + 6y = 0?",
  questionArabic: "ما الحل العام للمعادلة y'' - 5y' + 6y = 0؟",
  options: [
    { english: "y = C₁e²ˣ + C₂e³ˣ", arabic: "y = C₁e²ˣ + C₂e³ˣ" },
    { english: "y = C₁cos(2x) + C₂sin(3x)", arabic: "y = C₁cos(2x) + C₂sin(3x)" },
    { english: "y = C₁e⁻²ˣ + C₂e⁻³ˣ", arabic: "y = C₁e⁻²ˣ + C₂e⁻³ˣ" },
    { english: "y = C₁ + C₂x", arabic: "y = C₁ + C₂x" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0332",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Impulse",
  difficulty: "Medium",
  questionEnglish: "A constant force of 10 N acts on an object for 3 s. What impulse is delivered?",
  questionArabic: "تؤثر قوة ثابتة مقدارها 10 نيوتن على جسم لمدة 3 ثوانٍ. ما مقدار الدفع؟",
  options: [
    { english: "3 N·s", arabic: "3 نيوتن·ثانية" },
    { english: "10 N·s", arabic: "10 نيوتن·ثانية" },
    { english: "30 N·s", arabic: "30 نيوتن·ثانية" },
    { english: "300 N·s", arabic: "300 نيوتن·ثانية" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0333",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Circular Motion",
  difficulty: "Medium",
  questionEnglish: "What is the centripetal acceleration of an object moving at 8 m/s in a circle of radius 4 m?",
  questionArabic: "ما التسارع المركزي لجسم يتحرك بسرعة 8 م/ث في دائرة نصف قطرها 4 م؟",
  options: [
    { english: "2 m/s²", arabic: "2 م/ث²" },
    { english: "8 m/s²", arabic: "8 م/ث²" },
    { english: "16 m/s²", arabic: "16 م/ث²" },
    { english: "32 m/s²", arabic: "32 م/ث²" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0334",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Coulomb's Law",
  difficulty: "Medium",
  questionEnglish: "If the distance between two point charges is doubled, how does the electrostatic force change?",
  questionArabic: "إذا تضاعفت المسافة بين شحنتين نقطيتين، فكيف تتغير القوة الكهروستاتيكية؟",
  options: [
    { english: "It doubles", arabic: "تتضاعف" },
    { english: "It becomes one-half", arabic: "تصبح النصف" },
    { english: "It becomes one-fourth", arabic: "تصبح الربع" },
    { english: "It remains unchanged", arabic: "تظل دون تغيير" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0335",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Electromagnetic Waves",
  difficulty: "Hard",
  questionEnglish: "In a vacuum, the electric and magnetic fields of an electromagnetic wave are:",
  questionArabic: "في الفراغ، يكون المجالان الكهربائي والمغناطيسي للموجة الكهرومغناطيسية:",
  options: [
    { english: "Parallel to each other", arabic: "متوازيين معًا" },
    { english: "Perpendicular to each other and to the direction of propagation", arabic: "متعامدين معًا ومع اتجاه الانتشار" },
    { english: "Opposite in direction but parallel", arabic: "متعاكسين في الاتجاه ولكنهما متوازيان" },
    { english: "Independent of the propagation direction", arabic: "غير مرتبطين باتجاه الانتشار" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0336",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Normal Distribution",
  difficulty: "Medium",
  questionEnglish: "In a normal distribution, approximately what percentage of observations lie within one standard deviation of the mean?",
  questionArabic: "في التوزيع الطبيعي، ما النسبة التقريبية للمشاهدات الواقعة ضمن انحراف معياري واحد من المتوسط؟",
  options: [
    { english: "50%", arabic: "50%" },
    { english: "68%", arabic: "68%" },
    { english: "95%", arabic: "95%" },
    { english: "99.7%", arabic: "99.7%" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0337",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Payback Period",
  difficulty: "Medium",
  questionEnglish: "A project costs $60,000 and generates uniform annual savings of $15,000. What is its simple payback period?",
  questionArabic: "يكلف مشروع 60,000 دولار ويحقق وفورات سنوية منتظمة قدرها 15,000 دولار. ما فترة الاسترداد البسيطة؟",
  options: [
    { english: "2 years", arabic: "سنتان" },
    { english: "3 years", arabic: "3 سنوات" },
    { english: "4 years", arabic: "4 سنوات" },
    { english: "5 years", arabic: "5 سنوات" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0338",
  domain: "Circuit Analysis",
  course: "EEL 3110 Circuit Analysis",
  topic: "Nodal Analysis",
  difficulty: "Medium",
  questionEnglish: "In nodal analysis, Kirchhoff's Current Law is normally applied at:",
  questionArabic: "في تحليل العقد، يطبق قانون كيرشوف للتيار عادةً عند:",
  options: [
    { english: "Each essential node", arabic: "كل عقدة أساسية" },
    { english: "Each closed loop", arabic: "كل حلقة مغلقة" },
    { english: "Only voltage sources", arabic: "مصادر الجهد فقط" },
    { english: "Only ground", arabic: "الأرضي فقط" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0339",
  domain: "Circuit Analysis",
  course: "EEL 3110 Circuit Analysis",
  topic: "Inductive Reactance",
  difficulty: "Medium",
  questionEnglish: "What is the inductive reactance of a 0.5 H inductor at an angular frequency of 20 rad/s?",
  questionArabic: "ما المفاعلة الحثية لملف حث قيمته 0.5 هنري عند تردد زاوي 20 راديان/ث؟",
  options: [
    { english: "2.5 Ω", arabic: "2.5 أوم" },
    { english: "10 Ω", arabic: "10 أوم" },
    { english: "20 Ω", arabic: "20 أوم" },
    { english: "40 Ω", arabic: "40 أوم" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0340",
  domain: "Circuit Analysis",
  course: "EEL 3110 Circuit Analysis",
  topic: "Maximum Power Transfer",
  difficulty: "Hard",
  questionEnglish: "For maximum power transfer in a DC resistive circuit, the load resistance should equal:",
  questionArabic: "لتحقيق أقصى نقل للقدرة في دائرة مقاومية للتيار المستمر، يجب أن تساوي مقاومة الحمل:",
  options: [
    { english: "Zero", arabic: "صفرًا" },
    { english: "The Thevenin resistance", arabic: "مقاومة ثيفينن" },
    { english: "Twice the Thevenin resistance", arabic: "ضعف مقاومة ثيفينن" },
    { english: "The source voltage", arabic: "جهد المصدر" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0341",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Zener Diodes",
  difficulty: "Medium",
  questionEnglish: "A Zener diode is commonly used for:",
  questionArabic: "يستخدم دايود زينر عادةً من أجل:",
  options: [
    { english: "Voltage regulation", arabic: "تنظيم الجهد" },
    { english: "Current amplification", arabic: "تضخيم التيار" },
    { english: "Digital storage", arabic: "التخزين الرقمي" },
    { english: "Frequency modulation", arabic: "تعديل التردد" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0342",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Non-Inverting Amplifiers",
  difficulty: "Hard",
  questionEnglish: "An ideal non-inverting op-amp has Rf = 9 kΩ and R1 = 1 kΩ. What is its closed-loop voltage gain?",
  questionArabic: "مضخم عمليات مثالي غير عاكس له Rf = 9 كيلوأوم وR1 = 1 كيلوأوم. ما كسب الجهد ذي الحلقة المغلقة؟",
  options: [
    { english: "9", arabic: "9" },
    { english: "10", arabic: "10" },
    { english: "-9", arabic: "-9" },
    { english: "-10", arabic: "-10" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0343",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Linearity",
  difficulty: "Hard",
  questionEnglish: "Which system is linear?",
  questionArabic: "أي نظام من الأنظمة التالية خطي؟",
  options: [
    { english: "y(t) = 3x(t)", arabic: "y(t) = 3x(t)" },
    { english: "y(t) = x²(t)", arabic: "y(t) = x²(t)" },
    { english: "y(t) = x(t) + 5", arabic: "y(t) = x(t) + 5" },
    { english: "y(t) = |x(t)|", arabic: "y(t) = |x(t)|" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0344",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Decoders",
  difficulty: "Medium",
  questionEnglish: "How many output lines does a standard 3-to-8 decoder have?",
  questionArabic: "كم عدد خطوط الخرج في مفكك ترميز قياسي 3 إلى 8؟",
  options: [
    { english: "3", arabic: "3" },
    { english: "6", arabic: "6" },
    { english: "8", arabic: "8" },
    { english: "16", arabic: "16" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0345",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Karnaugh Maps",
  difficulty: "Hard",
  questionEnglish: "What is the primary purpose of a Karnaugh map?",
  questionArabic: "ما الغرض الأساسي من خريطة كارنوف؟",
  options: [
    { english: "Simplify Boolean expressions", arabic: "تبسيط التعبيرات المنطقية" },
    { english: "Convert analog signals to digital signals", arabic: "تحويل الإشارات التماثلية إلى رقمية" },
    { english: "Store binary data", arabic: "تخزين البيانات الثنائية" },
    { english: "Measure propagation delay", arabic: "قياس تأخير الانتشار" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0346",
  domain: "Computer Architecture",
  course: "EEL 4709C Computer Design",
  topic: "Pipelining",
  difficulty: "Hard",
  questionEnglish: "What is the main performance benefit of instruction pipelining?",
  questionArabic: "ما الفائدة الرئيسية من ناحية الأداء لخط أنابيب التعليمات؟",
  options: [
    { english: "It increases instruction throughput", arabic: "يزيد معدل تنفيذ التعليمات" },
    { english: "It eliminates all hazards", arabic: "يلغي جميع المخاطر" },
    { english: "It reduces memory capacity", arabic: "يقلل سعة الذاكرة" },
    { english: "It makes every instruction complete in one clock cycle", arabic: "يجعل كل تعليمة تكتمل في دورة ساعة واحدة" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0347",
  domain: "Embedded Systems",
  course: "EEL 4730 Programming Embedded Systems",
  topic: "Analog-to-Digital Conversion",
  difficulty: "Medium",
  questionEnglish: "How many discrete output levels does an 8-bit ADC provide?",
  questionArabic: "كم عدد مستويات الخرج المنفصلة التي يوفرها محول ADC بدقة 8 بت؟",
  options: [
    { english: "8", arabic: "8" },
    { english: "16", arabic: "16" },
    { english: "128", arabic: "128" },
    { english: "256", arabic: "256" }
  ],
  correctAnswer: 3
},

{
  id: "ENG0348",
  domain: "Programming",
  course: "COP 3337 Programming II",
  topic: "Exception Handling",
  difficulty: "Medium",
  questionEnglish: "Which Java block is used to handle an exception thrown inside a try block?",
  questionArabic: "أي كتلة في Java تستخدم لمعالجة استثناء يحدث داخل كتلة try؟",
  options: [
    { english: "catch", arabic: "catch" },
    { english: "class", arabic: "class" },
    { english: "switch", arabic: "switch" },
    { english: "return", arabic: "return" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0349",
  domain: "Data Structures",
  course: "COP 3530 Data Structures",
  topic: "Linked Lists",
  difficulty: "Medium",
  questionEnglish: "What is the typical time complexity of inserting a node at the beginning of a singly linked list?",
  questionArabic: "ما التعقيد الزمني المعتاد لإدراج عقدة في بداية قائمة مرتبطة أحادية؟",
  options: [
    { english: "O(1)", arabic: "O(1)" },
    { english: "O(log n)", arabic: "O(log n)" },
    { english: "O(n)", arabic: "O(n)" },
    { english: "O(n²)", arabic: "O(n²)" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0350",
  domain: "Networking",
  course: "TCN 4211 Computer Communication Networks",
  topic: "UDP",
  difficulty: "Medium",
  questionEnglish: "Which statement best describes UDP?",
  questionArabic: "أي عبارة تصف بروتوكول UDP بشكل أفضل؟",
  options: [
    { english: "It is connectionless and does not guarantee delivery", arabic: "هو بروتوكول غير موجه بالاتصال ولا يضمن التسليم" },
    { english: "It guarantees ordered delivery", arabic: "يضمن التسليم بالترتيب" },
    { english: "It establishes a connection using a three-way handshake", arabic: "ينشئ اتصالًا باستخدام المصافحة الثلاثية" },
    { english: "It operates only at the physical layer", arabic: "يعمل فقط في الطبقة الفيزيائية" }
  ],
  correctAnswer: 0
},
{
  id: "ENG0351",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Quotient Rule",
  difficulty: "Medium",
  questionEnglish: "Find the derivative of f(x) = x/(x + 1).",
  questionArabic: "أوجد مشتقة الدالة f(x) = x/(x + 1).",
  options: [
    { english: "1/(x + 1)", arabic: "1/(x + 1)" },
    { english: "1/(x + 1)²", arabic: "1/(x + 1)²" },
    { english: "x/(x + 1)²", arabic: "x/(x + 1)²" },
    { english: "-1/(x + 1)²", arabic: "-1/(x + 1)²" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0352",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Critical Points",
  difficulty: "Medium",
  questionEnglish: "What are the critical numbers of f(x) = x³ - 3x?",
  questionArabic: "ما الأعداد الحرجة للدالة f(x) = x³ - 3x؟",
  options: [
    { english: "x = 0 only", arabic: "x = 0 فقط" },
    { english: "x = -1 and x = 1", arabic: "x = -1 وx = 1" },
    { english: "x = -3 and x = 3", arabic: "x = -3 وx = 3" },
    { english: "There are no critical numbers", arabic: "لا توجد أعداد حرجة" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0353",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Polar Coordinates",
  difficulty: "Medium",
  questionEnglish: "In polar coordinates, which expression equals x² + y²?",
  questionArabic: "في الإحداثيات القطبية، أي تعبير يساوي x² + y²؟",
  options: [
    { english: "r", arabic: "r" },
    { english: "r²", arabic: "r²" },
    { english: "2r", arabic: "2r" },
    { english: "θ²", arabic: "θ²" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0354",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Ratio Test",
  difficulty: "Hard",
  questionEnglish: "If the Ratio Test gives a limit L = 0.6 for a positive-term series, what can be concluded?",
  questionArabic: "إذا أعطى اختبار النسبة النهاية L = 0.6 لمتسلسلة ذات حدود موجبة، فما الاستنتاج؟",
  options: [
    { english: "The series diverges", arabic: "المتسلسلة متباعدة" },
    { english: "The test is inconclusive", arabic: "الاختبار غير حاسم" },
    { english: "The series converges absolutely", arabic: "المتسلسلة متقاربة تقاربًا مطلقًا" },
    { english: "The series is conditionally convergent", arabic: "المتسلسلة متقاربة تقاربًا شرطيًا" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0355",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Divergence",
  difficulty: "Hard",
  questionEnglish: "For the vector field F = ⟨x², y², z²⟩, what is ∇·F?",
  questionArabic: "لمجال المتجهات F = ⟨x², y², z²⟩، ما قيمة ∇·F؟",
  options: [
    { english: "x + y + z", arabic: "x + y + z" },
    { english: "2x + 2y + 2z", arabic: "2x + 2y + 2z" },
    { english: "x² + y² + z²", arabic: "x² + y² + z²" },
    { english: "2xyz", arabic: "2xyz" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0356",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Laplace Transforms",
  difficulty: "Hard",
  questionEnglish: "What is the Laplace transform of the constant function f(t) = 1?",
  questionArabic: "ما تحويل لابلاس للدالة الثابتة f(t) = 1؟",
  options: [
    { english: "1", arabic: "1" },
    { english: "s", arabic: "s" },
    { english: "1/s", arabic: "1/s" },
    { english: "1/s²", arabic: "1/s²" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0357",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Power",
  difficulty: "Easy",
  questionEnglish: "A machine performs 600 J of work in 3 s. What is its average power?",
  questionArabic: "تنجز آلة شغلًا مقداره 600 جول خلال 3 ثوانٍ. ما قدرتها المتوسطة؟",
  options: [
    { english: "100 W", arabic: "100 وات" },
    { english: "200 W", arabic: "200 وات" },
    { english: "300 W", arabic: "300 وات" },
    { english: "1800 W", arabic: "1800 وات" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0358",
  domain: "Physics",
  course: "PHY 2048 Physics with Calculus I",
  topic: "Torque",
  difficulty: "Medium",
  questionEnglish: "A 10 N force acts perpendicular to a lever arm 0.4 m long. What torque is produced?",
  questionArabic: "تؤثر قوة مقدارها 10 نيوتن عموديًا على ذراع طوله 0.4 متر. ما العزم الناتج؟",
  options: [
    { english: "2 N·m", arabic: "2 نيوتن·متر" },
    { english: "4 N·m", arabic: "4 نيوتن·متر" },
    { english: "10 N·m", arabic: "10 نيوتن·متر" },
    { english: "25 N·m", arabic: "25 نيوتن·متر" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0359",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Electric Potential",
  difficulty: "Medium",
  questionEnglish: "How much electric potential energy does a 2 C charge have at a potential of 6 V?",
  questionArabic: "ما مقدار طاقة الوضع الكهربائية لشحنة مقدارها 2 كولوم عند جهد 6 فولت؟",
  options: [
    { english: "3 J", arabic: "3 جول" },
    { english: "8 J", arabic: "8 جول" },
    { english: "12 J", arabic: "12 جول" },
    { english: "24 J", arabic: "24 جول" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0360",
  domain: "Physics",
  course: "PHY 2049 Physics with Calculus II",
  topic: "Series Capacitors",
  difficulty: "Hard",
  questionEnglish: "What is the equivalent capacitance of 6 μF and 3 μF capacitors connected in series?",
  questionArabic: "ما السعة المكافئة لمكثفين سعتهما 6 و3 ميكروفاراد متصلين على التوالي؟",
  options: [
    { english: "1 μF", arabic: "1 ميكروفاراد" },
    { english: "2 μF", arabic: "2 ميكروفاراد" },
    { english: "3 μF", arabic: "3 ميكروفاراد" },
    { english: "9 μF", arabic: "9 ميكروفاراد" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0361",
  domain: "Statistics",
  course: "STA 3111 Statistics",
  topic: "Conditional Probability",
  difficulty: "Medium",
  questionEnglish: "If P(A ∩ B) = 0.2 and P(B) = 0.5, what is P(A|B)?",
  questionArabic: "إذا كان P(A ∩ B) = 0.2 وP(B) = 0.5، فما قيمة P(A|B)؟",
  options: [
    { english: "0.1", arabic: "0.1" },
    { english: "0.4", arabic: "0.4" },
    { english: "0.5", arabic: "0.5" },
    { english: "0.7", arabic: "0.7" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0362",
  domain: "Engineering Economy",
  course: "EGN 3613 Engineering Economy",
  topic: "Net Present Value",
  difficulty: "Medium",
  questionEnglish: "A project has a present value of benefits equal to $80,000 and an initial cost of $65,000. What is its net present value?",
  questionArabic: "لمشروع قيمة حالية للفوائد مقدارها 80,000 دولار وتكلفة أولية قدرها 65,000 دولار. ما صافي القيمة الحالية؟",
  options: [
    { english: "-$15,000", arabic: "-15,000 دولار" },
    { english: "$15,000", arabic: "15,000 دولار" },
    { english: "$65,000", arabic: "65,000 دولار" },
    { english: "$145,000", arabic: "145,000 دولار" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0363",
  domain: "Circuit Analysis",
  course: "EEL 3110 Circuit Analysis",
  topic: "Kirchhoff's Current Law",
  difficulty: "Easy",
  questionEnglish: "If 5 A enters a node and two currents of 2 A and 1 A leave, what is the third current leaving the node?",
  questionArabic: "إذا دخل تيار مقداره 5 أمبير إلى عقدة وخرج منها تياران مقدارهما 2 أمبير و1 أمبير، فما التيار الثالث الخارج؟",
  options: [
    { english: "1 A", arabic: "1 أمبير" },
    { english: "2 A", arabic: "2 أمبير" },
    { english: "3 A", arabic: "3 أمبير" },
    { english: "8 A", arabic: "8 أمبير" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0364",
  domain: "Circuit Analysis",
  course: "EEL 3110 Circuit Analysis",
  topic: "Capacitive Reactance",
  difficulty: "Medium",
  questionEnglish: "What happens to capacitive reactance when frequency increases?",
  questionArabic: "ماذا يحدث للمفاعلة السعوية عندما يزداد التردد؟",
  options: [
    { english: "It increases", arabic: "تزداد" },
    { english: "It decreases", arabic: "تنخفض" },
    { english: "It remains constant", arabic: "تبقى ثابتة" },
    { english: "It becomes negative resistance", arabic: "تصبح مقاومة سالبة" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0365",
  domain: "Circuit Analysis",
  course: "EEL 3110 Circuit Analysis",
  topic: "Resonance",
  difficulty: "Hard",
  questionEnglish: "At resonance in an ideal series RLC circuit, the circuit impedance is:",
  questionArabic: "عند الرنين في دائرة RLC مثالية متصلة على التوالي، تكون ممانعة الدائرة:",
  options: [
    { english: "Purely resistive", arabic: "مقاومية بحتة" },
    { english: "Purely inductive", arabic: "حثية بحتة" },
    { english: "Purely capacitive", arabic: "سعوية بحتة" },
    { english: "Infinite", arabic: "لا نهائية" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0366",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Voltage Followers",
  difficulty: "Easy",
  questionEnglish: "What is the ideal voltage gain of an op-amp voltage follower?",
  questionArabic: "ما كسب الجهد المثالي لمتابع الجهد باستخدام مضخم العمليات؟",
  options: [
    { english: "-1", arabic: "-1" },
    { english: "0", arabic: "0" },
    { english: "1", arabic: "1" },
    { english: "Infinite", arabic: "لا نهائي" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0367",
  domain: "Electronics",
  course: "EEL 3370 Electronics",
  topic: "Transistor Current Gain",
  difficulty: "Medium",
  questionEnglish: "A BJT has a current gain β = 100 and a base current of 20 μA. What is the collector current?",
  questionArabic: "يمتلك ترانزستور BJT كسب تيار β = 100 وتيار قاعدة مقداره 20 ميكروأمبير. ما تيار المجمع؟",
  options: [
    { english: "0.2 mA", arabic: "0.2 مللي أمبير" },
    { english: "2 mA", arabic: "2 مللي أمبير" },
    { english: "20 mA", arabic: "20 مللي أمبير" },
    { english: "200 mA", arabic: "200 مللي أمبير" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0368",
  domain: "Signals and Systems",
  course: "EEL 3135 Signals and Systems",
  topic: "Unit Step Signal",
  difficulty: "Easy",
  questionEnglish: "For the continuous-time unit step u(t), what is u(t) for t < 0?",
  questionArabic: "لإشارة الخطوة الواحدة في الزمن المستمر u(t)، ما قيمة u(t) عندما t < 0؟",
  options: [
    { english: "-1", arabic: "-1" },
    { english: "0", arabic: "0" },
    { english: "1", arabic: "1" },
    { english: "Infinity", arabic: "ما لا نهاية" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0369",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Half Adders",
  difficulty: "Medium",
  questionEnglish: "Which gates are typically used to construct a half adder?",
  questionArabic: "ما البوابات المستخدمة عادةً لبناء جامع نصفي؟",
  options: [
    { english: "XOR and AND", arabic: "XOR وAND" },
    { english: "OR and NAND", arabic: "OR وNAND" },
    { english: "NOR and NOT", arabic: "NOR وNOT" },
    { english: "XNOR and OR", arabic: "XNOR وOR" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0370",
  domain: "Digital Logic",
  course: "EEL 3712 Logic Design",
  topic: "Counters",
  difficulty: "Hard",
  questionEnglish: "What is the minimum number of flip-flops required to build a binary counter that counts from 0 to 15?",
  questionArabic: "ما أقل عدد من القلابات المطلوبة لبناء عداد ثنائي يعد من 0 إلى 15؟",
  options: [
    { english: "2", arabic: "2" },
    { english: "3", arabic: "3" },
    { english: "4", arabic: "4" },
    { english: "5", arabic: "5" }
  ],
  correctAnswer: 2
},

{
  id: "ENG0371",
  domain: "Computer Architecture",
  course: "EEL 4709C Computer Design",
  topic: "Cache Mapping",
  difficulty: "Hard",
  questionEnglish: "In a direct-mapped cache, a main-memory block can be placed in:",
  questionArabic: "في الذاكرة المخبأة ذات التعيين المباشر، يمكن وضع كتلة من الذاكرة الرئيسية في:",
  options: [
    { english: "Any cache line", arabic: "أي سطر في الذاكرة المخبأة" },
    { english: "Exactly one cache line", arabic: "سطر واحد محدد فقط" },
    { english: "Two cache lines only", arabic: "سطرين فقط" },
    { english: "Every cache line simultaneously", arabic: "جميع الأسطر في الوقت نفسه" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0372",
  domain: "Embedded Systems",
  course: "EEL 4730 Programming Embedded Systems",
  topic: "Pulse-Width Modulation",
  difficulty: "Medium",
  questionEnglish: "A PWM signal has a high time of 3 ms and a total period of 10 ms. What is its duty cycle?",
  questionArabic: "تمتلك إشارة PWM زمنًا مرتفعًا مقداره 3 مللي ثانية وزمنًا دوريًا كليًا مقداره 10 مللي ثانية. ما دورة التشغيل؟",
  options: [
    { english: "3%", arabic: "3%" },
    { english: "30%", arabic: "30%" },
    { english: "70%", arabic: "70%" },
    { english: "300%", arabic: "300%" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0373",
  domain: "Programming",
  course: "COP 2210 Programming I",
  topic: "Arrays",
  difficulty: "Easy",
  questionEnglish: "What is the index of the first element in a Java array?",
  questionArabic: "ما فهرس أول عنصر في مصفوفة Java؟",
  options: [
    { english: "-1", arabic: "-1" },
    { english: "0", arabic: "0" },
    { english: "1", arabic: "1" },
    { english: "It depends on the array size", arabic: "يعتمد على حجم المصفوفة" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0374",
  domain: "Data Structures",
  course: "COP 3530 Data Structures",
  topic: "Binary Search Trees",
  difficulty: "Medium",
  questionEnglish: "In a binary search tree, values smaller than a node are normally stored in its:",
  questionArabic: "في شجرة البحث الثنائية، تخزن القيم الأصغر من قيمة العقدة عادةً في:",
  options: [
    { english: "Right subtree", arabic: "الشجرة الفرعية اليمنى" },
    { english: "Left subtree", arabic: "الشجرة الفرعية اليسرى" },
    { english: "Parent node", arabic: "العقدة الأم" },
    { english: "Root only", arabic: "الجذر فقط" }
  ],
  correctAnswer: 1
},

{
  id: "ENG0375",
  domain: "Networking",
  course: "TCN 4211 Computer Communication Networks",
  topic: "Domain Name System",
  difficulty: "Medium",
  questionEnglish: "What is the primary function of DNS?",
  questionArabic: "ما الوظيفة الأساسية لنظام DNS؟",
  options: [
    { english: "Encrypt network traffic", arabic: "تشفير حركة الشبكة" },
    { english: "Translate domain names into IP addresses", arabic: "ترجمة أسماء النطاقات إلى عناوين IP" },
    { english: "Assign MAC addresses", arabic: "تعيين عناوين MAC" },
    { english: "Measure network bandwidth", arabic: "قياس عرض نطاق الشبكة" }
  ],
  correctAnswer: 1
},
{
  id: "ENG0376",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Chain Rule",
  difficulty: "Medium",
  questionEnglish: "Find the derivative of f(x) = (3x² + 1)⁵.",
  questionArabic: "أوجد مشتقة الدالة f(x) = (3x² + 1)⁵.",
  options: [
    { english: "30x(3x²+1)⁴", arabic: "30x(3x²+1)⁴" },
    { english: "15x(3x²+1)⁵", arabic: "15x(3x²+1)⁵" },
    { english: "5(3x²+1)⁴", arabic: "5(3x²+1)⁴" },
    { english: "6x(3x²+1)⁵", arabic: "6x(3x²+1)⁵" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0377",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Optimization",
  difficulty: "Medium",
  questionEnglish: "Optimization problems are solved by finding:",
  questionArabic: "يتم حل مسائل الأمثلية من خلال إيجاد:",
  options: [
    { english: "Critical points", arabic: "النقاط الحرجة" },
    { english: "Intercepts only", arabic: "نقاط التقاطع فقط" },
    { english: "Domain only", arabic: "المجال فقط" },
    { english: "Integrals only", arabic: "التكاملات فقط" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0378",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Integration by Parts",
  difficulty: "Medium",
  questionEnglish: "Which formula represents integration by parts?",
  questionArabic: "أي صيغة تمثل التكامل بالتجزئة؟",
  options: [
    { english: "∫u dv = uv − ∫v du", arabic: "∫u dv = uv − ∫v du" },
    { english: "∫f'g = fg", arabic: "∫f'g = fg" },
    { english: "∫u/v = ln(v)", arabic: "∫u/v = ln(v)" },
    { english: "∫dx = x²", arabic: "∫dx = x²" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0379",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Sequences",
  difficulty: "Easy",
  questionEnglish: "A sequence converges if:",
  questionArabic: "تكون المتتالية متقاربة إذا:",
  options: [
    { english: "Its limit exists", arabic: "كان لها نهاية موجودة" },
    { english: "It always increases", arabic: "كانت تزداد دائمًا" },
    { english: "It always decreases", arabic: "كانت تتناقص دائمًا" },
    { english: "It contains only integers", arabic: "كانت تحتوي على أعداد صحيحة فقط" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0380",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Directional Derivatives",
  difficulty: "Hard",
  questionEnglish: "A directional derivative measures:",
  questionArabic: "المشتقة الاتجاهية تقيس:",
  options: [
    { english: "Rate of change in a specified direction", arabic: "معدل التغير في اتجاه محدد" },
    { english: "Surface area", arabic: "المساحة السطحية" },
    { english: "Volume", arabic: "الحجم" },
    { english: "Average value", arabic: "المتوسط" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0381",
  domain: "Mathematics",
  course: "MAP 2302",
  topic: "Homogeneous ODE",
  difficulty: "Hard",
  questionEnglish: "A homogeneous differential equation can often be solved using:",
  questionArabic: "يمكن غالبًا حل المعادلة التفاضلية المتجانسة باستخدام:",
  options: [
    { english: "Substitution y=vx", arabic: "التعويض y=vx" },
    { english: "Fourier transform", arabic: "تحويل فورييه" },
    { english: "Gaussian elimination", arabic: "الحذف الغاوسي" },
    { english: "L'Hospital's Rule", arabic: "قاعدة لوبيتال" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0382",
  domain: "Physics",
  course: "PHY 2048",
  topic: "Kinetic Energy",
  difficulty: "Easy",
  questionEnglish: "What is the kinetic energy of a 2 kg object moving at 5 m/s?",
  questionArabic: "ما طاقة الحركة لجسم كتلته 2 كجم يتحرك بسرعة 5 م/ث؟",
  options: [
    { english: "25 J", arabic: "25 جول" },
    { english: "10 J", arabic: "10 جول" },
    { english: "50 J", arabic: "50 جول" },
    { english: "5 J", arabic: "5 جول" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0383",
  domain: "Physics",
  course: "PHY 2048",
  topic: "Conservation of Energy",
  difficulty: "Easy",
  questionEnglish: "Mechanical energy is conserved when:",
  questionArabic: "تكون الطاقة الميكانيكية محفوظة عندما:",
  options: [
    { english: "Only conservative forces act", arabic: "تؤثر فقط القوى المحافظة" },
    { english: "Friction is maximum", arabic: "يكون الاحتكاك في أقصى قيمة" },
    { english: "Velocity is zero", arabic: "تكون السرعة صفرًا" },
    { english: "Mass changes", arabic: "تتغير الكتلة" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0384",
  domain: "Physics",
  course: "PHY 2049",
  topic: "Magnetic Field",
  difficulty: "Medium",
  questionEnglish: "The SI unit of magnetic flux density is:",
  questionArabic: "ما وحدة كثافة الفيض المغناطيسي في النظام الدولي؟",
  options: [
    { english: "Tesla", arabic: "تسلا" },
    { english: "Weber", arabic: "ويبر" },
    { english: "Henry", arabic: "هنري" },
    { english: "Farad", arabic: "فاراد" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0385",
  domain: "Physics",
  course: "PHY 2049",
  topic: "Inductance",
  difficulty: "Medium",
  questionEnglish: "The SI unit of inductance is:",
  questionArabic: "ما وحدة الحث في النظام الدولي؟",
  options: [
    { english: "Henry", arabic: "هنري" },
    { english: "Tesla", arabic: "تسلا" },
    { english: "Farad", arabic: "فاراد" },
    { english: "Volt", arabic: "فولت" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0386",
  domain: "Statistics",
  course: "STA 3111",
  topic: "Median",
  difficulty: "Easy",
  questionEnglish: "The median is:",
  questionArabic: "الوسيط هو:",
  options: [
    { english: "The middle value of an ordered dataset", arabic: "القيمة الوسطى بعد ترتيب البيانات" },
    { english: "The largest value", arabic: "أكبر قيمة" },
    { english: "The arithmetic average", arabic: "المتوسط الحسابي" },
    { english: "The smallest value", arabic: "أصغر قيمة" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0387",
  domain: "Engineering Economy",
  course: "EGN 3613",
  topic: "Depreciation",
  difficulty: "Medium",
  questionEnglish: "Straight-line depreciation assumes:",
  questionArabic: "يفترض الإهلاك بطريقة القسط الثابت:",
  options: [
    { english: "Equal depreciation each year", arabic: "إهلاكًا متساويًا كل سنة" },
    { english: "Increasing depreciation", arabic: "إهلاكًا متزايدًا" },
    { english: "No depreciation", arabic: "عدم وجود إهلاك" },
    { english: "Random depreciation", arabic: "إهلاكًا عشوائيًا" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0388",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Resistors",
  difficulty: "Easy",
  questionEnglish: "The equivalent resistance of two 10 Ω resistors in series is:",
  questionArabic: "المقاومة المكافئة لمقاومتين قيمة كل منهما 10 أوم على التوالي هي:",
  options: [
    { english: "20 Ω", arabic: "20 أوم" },
    { english: "10 Ω", arabic: "10 أوم" },
    { english: "5 Ω", arabic: "5 أوم" },
    { english: "100 Ω", arabic: "100 أوم" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0389",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Parallel Resistance",
  difficulty: "Easy",
  questionEnglish: "The equivalent resistance of two identical resistors in parallel is:",
  questionArabic: "المقاومة المكافئة لمقاومتين متماثلتين على التوازي هي:",
  options: [
    { english: "Half the value of one resistor", arabic: "نصف قيمة إحدى المقاومتين" },
    { english: "Double the value", arabic: "ضعف القيمة" },
    { english: "The same value", arabic: "نفس القيمة" },
    { english: "Zero", arabic: "صفر" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0390",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Power Dissipation",
  difficulty: "Medium",
  questionEnglish: "Which equation calculates electrical power?",
  questionArabic: "أي معادلة تحسب القدرة الكهربائية؟",
  options: [
    { english: "P = VI", arabic: "P = VI" },
    { english: "P = V/I", arabic: "P = V/I" },
    { english: "P = I/R", arabic: "P = I/R" },
    { english: "P = R/I", arabic: "P = R/I" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0391",
  domain: "Electronics",
  course: "EEL 3370",
  topic: "LED",
  difficulty: "Easy",
  questionEnglish: "LED stands for:",
  questionArabic: "يرمز LED إلى:",
  options: [
    { english: "Light Emitting Diode", arabic: "الصمام الثنائي الباعث للضوء" },
    { english: "Low Energy Device", arabic: "جهاز منخفض الطاقة" },
    { english: "Linear Electronic Device", arabic: "جهاز إلكتروني خطي" },
    { english: "Light Energy Driver", arabic: "مشغل الطاقة الضوئية" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0392",
  domain: "Electronics",
  course: "EEL 3370",
  topic: "Operational Amplifiers",
  difficulty: "Medium",
  questionEnglish: "An ideal operational amplifier has:",
  questionArabic: "يمتلك مضخم العمليات المثالي:",
  options: [
    { english: "Infinite open-loop gain", arabic: "كسبًا مفتوح الحلقة لا نهائيًا" },
    { english: "Zero input resistance", arabic: "مقاومة دخل صفرية" },
    { english: "Infinite output resistance", arabic: "مقاومة خرج لا نهائية" },
    { english: "Gain equal to 1", arabic: "كسبًا يساوي 1" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0393",
  domain: "Signals & Systems",
  course: "EEL 3135",
  topic: "Frequency",
  difficulty: "Easy",
  questionEnglish: "Frequency is measured in:",
  questionArabic: "يقاس التردد بوحدة:",
  options: [
    { english: "Hertz", arabic: "هرتز" },
    { english: "Volt", arabic: "فولت" },
    { english: "Joule", arabic: "جول" },
    { english: "Tesla", arabic: "تسلا" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0394",
  domain: "Digital Logic",
  course: "EEL 3712",
  topic: "Flip-Flops",
  difficulty: "Medium",
  questionEnglish: "Which flip-flop toggles its output when J = K = 1?",
  questionArabic: "أي قلاب يبدل خرجه عندما J = K = 1؟",
  options: [
    { english: "JK Flip-Flop", arabic: "قلاب JK" },
    { english: "SR Flip-Flop", arabic: "قلاب SR" },
    { english: "D Flip-Flop", arabic: "قلاب D" },
    { english: "T Flip-Flop", arabic: "قلاب T" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0395",
  domain: "Digital Logic",
  course: "EEL 3712",
  topic: "Multiplexers",
  difficulty: "Medium",
  questionEnglish: "A 4-to-1 multiplexer requires how many select lines?",
  questionArabic: "يحتاج المبدل 4 إلى 1 إلى كم خط اختيار؟",
  options: [
    { english: "2", arabic: "2" },
    { english: "4", arabic: "4" },
    { english: "1", arabic: "1" },
    { english: "3", arabic: "3" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0396",
  domain: "Computer Architecture",
  course: "EEL 4709C",
  topic: "RAM",
  difficulty: "Easy",
  questionEnglish: "RAM is:",
  questionArabic: "ذاكرة RAM هي:",
  options: [
    { english: "Volatile memory", arabic: "ذاكرة متطايرة" },
    { english: "Permanent storage", arabic: "تخزين دائم" },
    { english: "Read-only memory", arabic: "ذاكرة للقراءة فقط" },
    { english: "Optical storage", arabic: "تخزين ضوئي" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0397",
  domain: "Embedded Systems",
  course: "EEL 4730",
  topic: "Timers",
  difficulty: "Medium",
  questionEnglish: "Microcontroller timers are mainly used for:",
  questionArabic: "تستخدم المؤقتات في المتحكمات الدقيقة بشكل أساسي من أجل:",
  options: [
    { english: "Time measurement and event generation", arabic: "قياس الزمن وتوليد الأحداث" },
    { english: "Increasing memory", arabic: "زيادة الذاكرة" },
    { english: "Cooling the processor", arabic: "تبريد المعالج" },
    { english: "Wireless communication only", arabic: "الاتصالات اللاسلكية فقط" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0398",
  domain: "Programming",
  course: "COP 3337",
  topic: "Inheritance",
  difficulty: "Easy",
  questionEnglish: "Which Java keyword is used for class inheritance?",
  questionArabic: "ما الكلمة المفتاحية المستخدمة للوراثة في Java؟",
  options: [
    { english: "extends", arabic: "extends" },
    { english: "implements", arabic: "implements" },
    { english: "super", arabic: "super" },
    { english: "this", arabic: "this" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0399",
  domain: "Data Structures",
  course: "COP 3530",
  topic: "Stacks",
  difficulty: "Easy",
  questionEnglish: "A stack follows which principle?",
  questionArabic: "تتبع المكدسة (Stack) أي مبدأ؟",
  options: [
    { english: "LIFO", arabic: "الأخير دخولًا أولًا خروجًا" },
    { english: "FIFO", arabic: "الأول دخولًا أولًا خروجًا" },
    { english: "Random", arabic: "عشوائي" },
    { english: "Priority", arabic: "الأولوية" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0400",
  domain: "Networking",
  course: "TCN 4211",
  topic: "IP Addressing",
  difficulty: "Easy",
  questionEnglish: "IPv4 addresses are ____ bits long.",
  questionArabic: "يتكون عنوان IPv4 من ____ بت.",
  options: [
    { english: "32", arabic: "32" },
    { english: "64", arabic: "64" },
    { english: "48", arabic: "48" },
    { english: "128", arabic: "128" }
  ],
  correctAnswer: 0
},
{
  id: "ENG0401",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Limits",
  difficulty: "Easy",
  questionEnglish: "Evaluate lim(x→2) (3x + 1).",
  questionArabic: "احسب النهاية lim(x→2) (3x + 1).",
  options: [
    { english: "7", arabic: "7" },
    { english: "6", arabic: "6" },
    { english: "5", arabic: "5" },
    { english: "Undefined", arabic: "غير معرفة" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0402",
  domain: "Mathematics",
  course: "MAC 2311 Calculus I",
  topic: "Derivatives",
  difficulty: "Easy",
  questionEnglish: "What is the derivative of sin(x)?",
  questionArabic: "ما مشتقة sin(x)؟",
  options: [
    { english: "cos(x)", arabic: "cos(x)" },
    { english: "-cos(x)", arabic: "-cos(x)" },
    { english: "-sin(x)", arabic: "-sin(x)" },
    { english: "tan(x)", arabic: "tan(x)" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0403",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Improper Integrals",
  difficulty: "Hard",
  questionEnglish: "The integral ∫₁∞ 1/x² dx is:",
  questionArabic: "التكامل ∫₁∞ 1/x² dx هو:",
  options: [
    { english: "Convergent", arabic: "متقارب" },
    { english: "Divergent", arabic: "متباعد" },
    { english: "Equal to 0", arabic: "يساوي صفرًا" },
    { english: "Undefined", arabic: "غير معرف" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0404",
  domain: "Mathematics",
  course: "MAC 2312 Calculus II",
  topic: "Taylor Series",
  difficulty: "Hard",
  questionEnglish: "The Taylor series of eˣ is:",
  questionArabic: "متسلسلة تايلور للدالة eˣ هي:",
  options: [
    { english: "1 + x + x²/2! + x³/3! + ...", arabic: "1 + x + x²/2! + x³/3! + ..." },
    { english: "1 - x + x² - x³ + ...", arabic: "1 - x + x² - x³ + ..." },
    { english: "x + x² + x³ + ...", arabic: "x + x² + x³ + ..." },
    { english: "1 + x² + x⁴ + ...", arabic: "1 + x² + x⁴ + ..." }
  ],
  correctAnswer: 0
},

{
  id: "ENG0405",
  domain: "Mathematics",
  course: "MAC 2313 Multivariable Calculus",
  topic: "Gradient",
  difficulty: "Medium",
  questionEnglish: "The gradient of a scalar field is a:",
  questionArabic: "تدرج المجال القياسي هو:",
  options: [
    { english: "Vector", arabic: "متجه" },
    { english: "Scalar", arabic: "كمية قياسية" },
    { english: "Matrix", arabic: "مصفوفة" },
    { english: "Constant", arabic: "ثابت" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0406",
  domain: "Mathematics",
  course: "MAP 2302 Differential Equations",
  topic: "Initial Value Problems",
  difficulty: "Medium",
  questionEnglish: "An initial value problem requires:",
  questionArabic: "تتطلب مسألة القيمة الابتدائية:",
  options: [
    { english: "A differential equation and initial condition", arabic: "معادلة تفاضلية وشرطًا ابتدائيًا" },
    { english: "Only an integral", arabic: "تكاملًا فقط" },
    { english: "A matrix", arabic: "مصفوفة" },
    { english: "Only boundary conditions", arabic: "شروطًا حدية فقط" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0407",
  domain: "Physics",
  course: "PHY 2048",
  topic: "Work",
  difficulty: "Easy",
  questionEnglish: "What is the SI unit of work?",
  questionArabic: "ما وحدة الشغل في النظام الدولي؟",
  options: [
    { english: "Joule", arabic: "جول" },
    { english: "Newton", arabic: "نيوتن" },
    { english: "Watt", arabic: "وات" },
    { english: "Pascal", arabic: "باسكال" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0408",
  domain: "Physics",
  course: "PHY 2048",
  topic: "Potential Energy",
  difficulty: "Easy",
  questionEnglish: "Gravitational potential energy equals:",
  questionArabic: "طاقة الوضع الجاذبية تساوي:",
  options: [
    { english: "mgh", arabic: "mgh" },
    { english: "mv", arabic: "mv" },
    { english: "½mv²", arabic: "½mv²" },
    { english: "ma", arabic: "ma" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0409",
  domain: "Physics",
  course: "PHY 2049",
  topic: "Faraday's Law",
  difficulty: "Hard",
  questionEnglish: "Faraday's Law relates induced EMF to:",
  questionArabic: "يربط قانون فاراداي القوة الدافعة الكهربائية المستحثة بـ:",
  options: [
    { english: "Rate of change of magnetic flux", arabic: "معدل تغير الفيض المغناطيسي" },
    { english: "Electric charge", arabic: "الشحنة الكهربائية" },
    { english: "Resistance", arabic: "المقاومة" },
    { english: "Electric field strength", arabic: "شدة المجال الكهربائي" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0410",
  domain: "Physics",
  course: "PHY 2049",
  topic: "Transformers",
  difficulty: "Medium",
  questionEnglish: "An ideal transformer operates using:",
  questionArabic: "يعمل المحول المثالي باستخدام:",
  options: [
    { english: "Electromagnetic induction", arabic: "الحث الكهرومغناطيسي" },
    { english: "Static electricity", arabic: "الكهرباء الساكنة" },
    { english: "Chemical reactions", arabic: "التفاعلات الكيميائية" },
    { english: "Thermal expansion", arabic: "التمدد الحراري" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0411",
  domain: "Statistics",
  course: "STA 3111",
  topic: "Variance",
  difficulty: "Medium",
  questionEnglish: "Variance is the square of the:",
  questionArabic: "التباين هو مربع:",
  options: [
    { english: "Standard deviation", arabic: "الانحراف المعياري" },
    { english: "Mean", arabic: "المتوسط" },
    { english: "Median", arabic: "الوسيط" },
    { english: "Mode", arabic: "المنوال" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0412",
  domain: "Engineering Economy",
  course: "EGN 3613",
  topic: "Interest",
  difficulty: "Easy",
  questionEnglish: "Compound interest differs from simple interest because:",
  questionArabic: "تختلف الفائدة المركبة عن الفائدة البسيطة لأنها:",
  options: [
    { english: "Interest is earned on previous interest", arabic: "يتم احتساب الفائدة على الفائدة السابقة" },
    { english: "It uses lower rates", arabic: "تستخدم معدلات أقل" },
    { english: "It ignores time", arabic: "تتجاهل الزمن" },
    { english: "It cannot be annual", arabic: "لا يمكن أن تكون سنوية" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0413",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Ohm's Law",
  difficulty: "Easy",
  questionEnglish: "Which equation represents Ohm's Law?",
  questionArabic: "أي معادلة تمثل قانون أوم؟",
  options: [
    { english: "V = IR", arabic: "V = IR" },
    { english: "P = VI", arabic: "P = VI" },
    { english: "Q = CV", arabic: "Q = CV" },
    { english: "F = ma", arabic: "F = ma" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0414",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Inductors",
  difficulty: "Medium",
  questionEnglish: "An ideal inductor opposes changes in:",
  questionArabic: "يقاوم الملف المثالي التغير في:",
  options: [
    { english: "Current", arabic: "التيار" },
    { english: "Voltage", arabic: "الجهد" },
    { english: "Resistance", arabic: "المقاومة" },
    { english: "Power", arabic: "القدرة" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0415",
  domain: "Circuit Analysis",
  course: "EEL 3110",
  topic: "Capacitors",
  difficulty: "Medium",
  questionEnglish: "An ideal capacitor opposes changes in:",
  questionArabic: "يقاوم المكثف المثالي التغير في:",
  options: [
    { english: "Voltage", arabic: "الجهد" },
    { english: "Current", arabic: "التيار" },
    { english: "Resistance", arabic: "المقاومة" },
    { english: "Frequency", arabic: "التردد" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0416",
  domain: "Electronics",
  course: "EEL 3370",
  topic: "Rectifiers",
  difficulty: "Easy",
  questionEnglish: "A rectifier converts:",
  questionArabic: "يقوم المقوم بتحويل:",
  options: [
    { english: "AC to DC", arabic: "تيار متردد إلى تيار مستمر" },
    { english: "DC to AC", arabic: "تيار مستمر إلى تيار متردد" },
    { english: "Heat to electricity", arabic: "حرارة إلى كهرباء" },
    { english: "Light to sound", arabic: "ضوء إلى صوت" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0417",
  domain: "Electronics",
  course: "EEL 3370",
  topic: "Semiconductors",
  difficulty: "Easy",
  questionEnglish: "Silicon is classified as a:",
  questionArabic: "يصنف السيليكون على أنه:",
  options: [
    { english: "Semiconductor", arabic: "شبه موصل" },
    { english: "Insulator", arabic: "عازل" },
    { english: "Superconductor", arabic: "موصل فائق" },
    { english: "Conductor", arabic: "موصل" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0418",
  domain: "Signals & Systems",
  course: "EEL 3135",
  topic: "Continuous-Time Signals",
  difficulty: "Easy",
  questionEnglish: "A continuous-time signal is defined:",
  questionArabic: "تعرف الإشارة المستمرة زمنيًا:",
  options: [
    { english: "For every value of time", arabic: "لكل قيمة للزمن" },
    { english: "Only at integer times", arabic: "عند الأزمنة الصحيحة فقط" },
    { english: "Only once", arabic: "مرة واحدة فقط" },
    { english: "Only at sampling instants", arabic: "عند لحظات أخذ العينات فقط" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0419",
  domain: "Digital Logic",
  course: "EEL 3712",
  topic: "Boolean Algebra",
  difficulty: "Easy",
  questionEnglish: "What is A · 1 equal to?",
  questionArabic: "ما قيمة A · 1 ؟",
  options: [
    { english: "A", arabic: "A" },
    { english: "0", arabic: "0" },
    { english: "1", arabic: "1" },
    { english: "A'", arabic: "A'" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0420",
  domain: "Digital Logic",
  course: "EEL 3712",
  topic: "Shift Registers",
  difficulty: "Medium",
  questionEnglish: "A shift register is primarily used to:",
  questionArabic: "يستخدم سجل الإزاحة بشكل أساسي من أجل:",
  options: [
    { english: "Store and shift binary data", arabic: "تخزين وإزاحة البيانات الثنائية" },
    { english: "Amplify signals", arabic: "تضخيم الإشارات" },
    { english: "Measure voltage", arabic: "قياس الجهد" },
    { english: "Generate power", arabic: "توليد القدرة" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0421",
  domain: "Computer Architecture",
  course: "EEL 4709C",
  topic: "Instruction Set",
  difficulty: "Medium",
  questionEnglish: "ISA stands for:",
  questionArabic: "يرمز ISA إلى:",
  options: [
    { english: "Instruction Set Architecture", arabic: "معمارية مجموعة التعليمات" },
    { english: "Integrated System Array", arabic: "مصفوفة النظام المتكامل" },
    { english: "Internal Storage Access", arabic: "الوصول الداخلي للتخزين" },
    { english: "Instruction Storage Algorithm", arabic: "خوارزمية تخزين التعليمات" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0422",
  domain: "Embedded Systems",
  course: "EEL 4730",
  topic: "GPIO",
  difficulty: "Easy",
  questionEnglish: "GPIO stands for:",
  questionArabic: "يرمز GPIO إلى:",
  options: [
    { english: "General Purpose Input/Output", arabic: "إدخال/إخراج للأغراض العامة" },
    { english: "General Processor Interface Output", arabic: "واجهة خرج المعالج العامة" },
    { english: "Ground Power Input Output", arabic: "إدخال وإخراج القدرة الأرضية" },
    { english: "Global Peripheral Input Option", arabic: "خيار إدخال الأجهزة الطرفية العام" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0423",
  domain: "Programming",
  course: "COP 3337",
  topic: "Polymorphism",
  difficulty: "Medium",
  questionEnglish: "Polymorphism allows:",
  questionArabic: "يسمح تعدد الأشكال (Polymorphism) بـ:",
  options: [
    { english: "One interface with multiple implementations", arabic: "واجهة واحدة مع عدة تطبيقات" },
    { english: "Only one object in memory", arabic: "وجود كائن واحد فقط في الذاكرة" },
    { english: "Removing inheritance", arabic: "إزالة الوراثة" },
    { english: "Declaring variables only", arabic: "تعريف المتغيرات فقط" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0424",
  domain: "Data Structures",
  course: "COP 3530",
  topic: "Hash Tables",
  difficulty: "Medium",
  questionEnglish: "The average search time of a well-designed hash table is:",
  questionArabic: "متوسط زمن البحث في جدول تجزئة مصمم جيدًا هو:",
  options: [
    { english: "O(1)", arabic: "O(1)" },
    { english: "O(n)", arabic: "O(n)" },
    { english: "O(n²)", arabic: "O(n²)" },
    { english: "O(log n²)", arabic: "O(log n²)" }
  ],
  correctAnswer: 0
},

{
  id: "ENG0425",
  domain: "Networking",
  course: "TCN 4211",
  topic: "Routers",
  difficulty: "Easy",
  questionEnglish: "A router primarily operates at which OSI layer?",
  questionArabic: "يعمل الموجه (Router) بشكل أساسي في أي طبقة من نموذج OSI؟",
  options: [
    { english: "Network Layer", arabic: "طبقة الشبكة" },
    { english: "Physical Layer", arabic: "الطبقة الفيزيائية" },
    { english: "Application Layer", arabic: "طبقة التطبيقات" },
    { english: "Session Layer", arabic: "طبقة الجلسة" }
  ],
  correctAnswer: 0
},

];

export default engineeringQuestions;