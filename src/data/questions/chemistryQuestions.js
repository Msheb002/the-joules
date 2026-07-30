const chemistryQuestions = [
  // Questions will be added here//
  {
  id: "CHEM0001",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Atomic Structure",
  difficulty: "Easy",
  questionEnglish: "Which subatomic particle determines the atomic number of an element?",
  questionArabic: "أي جسيم دون ذري يحدد العدد الذري للعنصر؟",
  options: [
    { english: "Neutron", arabic: "النيوترون" },
    { english: "Electron", arabic: "الإلكترون" },
    { english: "Proton", arabic: "البروتون" },
    { english: "Photon", arabic: "الفوتون" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0002",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Atomic Structure",
  difficulty: "Easy",
  questionEnglish: "What is the electrical charge of an electron?",
  questionArabic: "ما الشحنة الكهربائية للإلكترون؟",
  options: [
    { english: "Negative", arabic: "سالبة" },
    { english: "Positive", arabic: "موجبة" },
    { english: "Neutral", arabic: "متعادل" },
    { english: "Variable", arabic: "متغيرة" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0003",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Isotopes",
  difficulty: "Medium",
  questionEnglish: "Isotopes of the same element have the same number of:",
  questionArabic: "تحتوي نظائر العنصر نفسه على العدد نفسه من:",
  options: [
    { english: "Neutrons", arabic: "النيوترونات" },
    { english: "Mass units", arabic: "وحدات الكتلة" },
    { english: "Nucleons", arabic: "النيوكليونات" },
    { english: "Protons", arabic: "البروتونات" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0004",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Mass Number",
  difficulty: "Medium",
  questionEnglish: "An atom contains 17 protons and 18 neutrons. What is its mass number?",
  questionArabic: "تحتوي ذرة على 17 بروتونًا و18 نيوترونًا. ما عددها الكتلي؟",
  options: [
    { english: "17", arabic: "17" },
    { english: "35", arabic: "35" },
    { english: "18", arabic: "18" },
    { english: "1", arabic: "1" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0005",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Ions",
  difficulty: "Medium",
  questionEnglish: "An atom with 12 protons and 10 electrons has a net charge of:",
  questionArabic: "ذرة تحتوي على 12 بروتونًا و10 إلكترونات تكون شحنتها الصافية:",
  options: [
    { english: "2−", arabic: "2−" },
    { english: "1+", arabic: "1+" },
    { english: "2+", arabic: "2+" },
    { english: "Neutral", arabic: "متعادلة" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0006",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Periodic Table",
  difficulty: "Easy",
  questionEnglish: "Elements in the same vertical column of the periodic table generally have similar:",
  questionArabic: "تمتلك العناصر الموجودة في العمود الرأسي نفسه في الجدول الدوري عادةً خصائص متشابهة من حيث:",
  options: [
    { english: "Chemical properties", arabic: "الخصائص الكيميائية" },
    { english: "Atomic masses", arabic: "الكتل الذرية" },
    { english: "Numbers of electron shells", arabic: "أعداد أغلفة الإلكترونات" },
    { english: "Numbers of neutrons", arabic: "أعداد النيوترونات" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0007",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Periodic Trends",
  difficulty: "Medium",
  questionEnglish: "Across a period from left to right, atomic radius generally:",
  questionArabic: "عبر الدورة من اليسار إلى اليمين، فإن نصف القطر الذري عمومًا:",
  options: [
    { english: "Increases", arabic: "يزداد" },
    { english: "Remains constant", arabic: "يبقى ثابتًا" },
    { english: "Changes randomly", arabic: "يتغير عشوائيًا" },
    { english: "Decreases", arabic: "يتناقص" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0008",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Electron Configuration",
  difficulty: "Hard",
  questionEnglish: "What is the ground-state electron configuration of sodium, atomic number 11?",
  questionArabic: "ما التوزيع الإلكتروني في الحالة الأرضية للصوديوم ذي العدد الذري 11؟",
  options: [
    { english: "1s² 2s² 2p⁶ 3s¹", arabic: "1s² 2s² 2p⁶ 3s¹" },
    { english: "1s² 2s² 2p⁵ 3s²", arabic: "1s² 2s² 2p⁵ 3s²" },
    { english: "1s² 2s² 2p⁶ 3p¹", arabic: "1s² 2s² 2p⁶ 3p¹" },
    { english: "1s² 2s² 2p⁶", arabic: "1s² 2s² 2p⁶" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0009",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Valence Electrons",
  difficulty: "Easy",
  questionEnglish: "How many valence electrons does an element in Group 17 generally have?",
  questionArabic: "كم عدد إلكترونات التكافؤ التي يمتلكها عادةً عنصر في المجموعة 17؟",
  options: [
    { english: "5", arabic: "5" },
    { english: "7", arabic: "7" },
    { english: "8", arabic: "8" },
    { english: "17", arabic: "17" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0010",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Chemical Bonding",
  difficulty: "Easy",
  questionEnglish: "An ionic bond is primarily formed by:",
  questionArabic: "تتكون الرابطة الأيونية بشكل أساسي من خلال:",
  options: [
    { english: "Sharing neutrons", arabic: "مشاركة النيوترونات" },
    { english: "Sharing protons", arabic: "مشاركة البروتونات" },
    { english: "Transfer of electrons", arabic: "انتقال الإلكترونات" },
    { english: "Transfer of nuclei", arabic: "انتقال الأنوية" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0011",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Covalent Bonding",
  difficulty: "Easy",
  questionEnglish: "A covalent bond involves:",
  questionArabic: "تتضمن الرابطة التساهمية:",
  options: [
    { english: "Sharing electron pairs", arabic: "مشاركة أزواج الإلكترونات" },
    { english: "Transferring neutrons", arabic: "نقل النيوترونات" },
    { english: "Destroying electrons", arabic: "تدمير الإلكترونات" },
    { english: "Sharing atomic nuclei", arabic: "مشاركة الأنوية الذرية" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0012",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Ionic Compounds",
  difficulty: "Medium",
  questionEnglish: "What is the correct chemical formula for magnesium chloride?",
  questionArabic: "ما الصيغة الكيميائية الصحيحة لكلوريد المغنيسيوم؟",
  options: [
    { english: "MgCl", arabic: "MgCl" },
    { english: "Mg₂Cl", arabic: "Mg₂Cl" },
    { english: "Mg₂Cl₂", arabic: "Mg₂Cl₂" },
    { english: "MgCl₂", arabic: "MgCl₂" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0013",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Molecular Geometry",
  difficulty: "Medium",
  questionEnglish: "According to VSEPR theory, what is the molecular geometry of methane, CH₄?",
  questionArabic: "وفقًا لنظرية تنافر أزواج إلكترونات التكافؤ، ما الشكل الجزيئي للميثان CH₄؟",
  options: [
    { english: "Linear", arabic: "خطي" },
    { english: "Tetrahedral", arabic: "رباعي السطوح" },
    { english: "Bent", arabic: "منحني" },
    { english: "Trigonal planar", arabic: "مثلثي مستوٍ" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0014",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Molecular Polarity",
  difficulty: "Hard",
  questionEnglish: "Why is carbon dioxide, CO₂, a nonpolar molecule despite having polar C=O bonds?",
  questionArabic: "لماذا يعد ثاني أكسيد الكربون CO₂ جزيئًا غير قطبي رغم احتوائه على روابط C=O قطبية؟",
  options: [
    { english: "Carbon and oxygen have equal electronegativities", arabic: "للكربون والأكسجين السالبية الكهربائية نفسها" },
    { english: "CO₂ contains ionic bonds", arabic: "يحتوي CO₂ على روابط أيونية" },
    { english: "Its bond dipoles cancel because the molecule is linear", arabic: "تتلاشى عزوم الروابط لأن الجزيء خطي" },
    { english: "The molecule has no valence electrons", arabic: "لا يحتوي الجزيء على إلكترونات تكافؤ" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0015",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Moles",
  difficulty: "Easy",
  questionEnglish: "One mole of any substance contains approximately:",
  questionArabic: "يحتوي مول واحد من أي مادة تقريبًا على:",
  options: [
    { english: "6.022 × 10²³ particles", arabic: "6.022 × 10²³ جسيمًا" },
    { english: "3.00 × 10⁸ particles", arabic: "3.00 × 10⁸ جسيمات" },
    { english: "9.81 × 10² particles", arabic: "9.81 × 10² جسيم" },
    { english: "1.602 × 10⁻¹⁹ particles", arabic: "1.602 × 10⁻¹⁹ جسيمًا" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0016",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Molar Mass",
  difficulty: "Medium",
  questionEnglish: "What is the approximate molar mass of water, H₂O?",
  questionArabic: "ما الكتلة المولية التقريبية للماء H₂O؟",
  options: [
    { english: "16 g/mol", arabic: "16 جم/مول" },
    { english: "18 g/mol", arabic: "18 جم/مول" },
    { english: "20 g/mol", arabic: "20 جم/مول" },
    { english: "34 g/mol", arabic: "34 جم/مول" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0017",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Stoichiometry",
  difficulty: "Medium",
  questionEnglish: "For the balanced equation 2H₂ + O₂ → 2H₂O, how many moles of water are produced from 3 moles of O₂ when hydrogen is in excess?",
  questionArabic: "في المعادلة الموزونة 2H₂ + O₂ → 2H₂O، كم مولًا من الماء ينتج من 3 مولات من O₂ عند وجود الهيدروجين بكمية فائضة؟",
  options: [
    { english: "2 mol", arabic: "2 مول" },
    { english: "3 mol", arabic: "3 مول" },
    { english: "6 mol", arabic: "6 مول" },
    { english: "9 mol", arabic: "9 مول" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0018",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Balancing Equations",
  difficulty: "Medium",
  questionEnglish: "Which set of coefficients correctly balances the equation H₂ + O₂ → H₂O?",
  questionArabic: "أي مجموعة من المعاملات توازن المعادلة H₂ + O₂ → H₂O بصورة صحيحة؟",
  options: [
    { english: "1, 1, 1", arabic: "1، 1، 1" },
    { english: "2, 1, 2", arabic: "2، 1، 2" },
    { english: "1, 2, 1", arabic: "1، 2، 1" },
    { english: "2, 2, 1", arabic: "2، 2، 1" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0019",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Limiting Reactants",
  difficulty: "Hard",
  questionEnglish: "The limiting reactant in a chemical reaction is the reactant that:",
  questionArabic: "المتفاعل المحدد في التفاعل الكيميائي هو المتفاعل الذي:",
  options: [
    { english: "Has the greatest molar mass", arabic: "يمتلك أكبر كتلة مولية" },
    { english: "Is always a gas", arabic: "يكون دائمًا غازًا" },
    { english: "Remains after the reaction is complete", arabic: "يبقى بعد اكتمال التفاعل" },
    { english: "Is consumed first and limits the amount of product", arabic: "يُستهلك أولًا ويحدد كمية الناتج" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0020",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "States of Matter",
  difficulty: "Easy",
  questionEnglish: "Which state of matter has a definite volume but takes the shape of its container?",
  questionArabic: "أي حالة من حالات المادة لها حجم ثابت ولكنها تأخذ شكل الوعاء؟",
  options: [
    { english: "Liquid", arabic: "السائل" },
    { english: "Solid", arabic: "الصلب" },
    { english: "Gas", arabic: "الغاز" },
    { english: "Plasma only", arabic: "البلازما فقط" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0021",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Gas Laws",
  difficulty: "Medium",
  questionEnglish: "According to Boyle's law, when temperature is constant, increasing the pressure of a gas causes its volume to:",
  questionArabic: "وفقًا لقانون بويل، عند ثبات درجة الحرارة، تؤدي زيادة ضغط الغاز إلى أن حجمه:",
  options: [
    { english: "Increase", arabic: "يزداد" },
    { english: "Decrease", arabic: "يتناقص" },
    { english: "Remain constant", arabic: "يبقى ثابتًا" },
    { english: "Become zero immediately", arabic: "يصبح صفرًا فورًا" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0022",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Ideal Gas Law",
  difficulty: "Medium",
  questionEnglish: "Which equation represents the ideal gas law?",
  questionArabic: "أي معادلة تمثل قانون الغاز المثالي؟",
  options: [
    { english: "P = IV", arabic: "P = IV" },
    { english: "E = mc²", arabic: "E = mc²" },
    { english: "PV = nRT", arabic: "PV = nRT" },
    { english: "F = ma", arabic: "F = ma" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0023",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Solutions",
  difficulty: "Easy",
  questionEnglish: "In a solution, the substance present in the greater amount is usually called the:",
  questionArabic: "في المحلول، تسمى المادة الموجودة عادةً بالكمية الأكبر:",
  options: [
    { english: "Solute", arabic: "المذاب" },
    { english: "Precipitate", arabic: "الراسب" },
    { english: "Catalyst", arabic: "العامل الحفاز" },
    { english: "Solvent", arabic: "المذيب" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0024",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Molarity",
  difficulty: "Medium",
  questionEnglish: "What is the molarity of a solution containing 2 moles of solute in 4 liters of solution?",
  questionArabic: "ما مولارية محلول يحتوي على مولين من المذاب في 4 لترات من المحلول؟",
  options: [
    { english: "0.50 M", arabic: "0.50 مولاري" },
    { english: "2.0 M", arabic: "2.0 مولاري" },
    { english: "4.0 M", arabic: "4.0 مولاري" },
    { english: "8.0 M", arabic: "8.0 مولاري" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0025",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Acids and Bases",
  difficulty: "Easy",
  questionEnglish: "A solution with a pH of 3 is classified as:",
  questionArabic: "يصنف المحلول الذي قيمة الرقم الهيدروجيني له تساوي 3 على أنه:",
  options: [
    { english: "Neutral", arabic: "متعادل" },
    { english: "Acidic", arabic: "حمضي" },
    { english: "Basic", arabic: "قاعدي" },
    { english: "Saturated", arabic: "مشبع" }
  ],
  correctAnswer: 1
},
{
  id: "CHEM0026",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Acids and Bases",
  difficulty: "Easy",
  questionEnglish: "Which ion is produced by an Arrhenius acid in aqueous solution?",
  questionArabic: "أي أيون ينتجه حمض أرهينيوس في المحلول المائي؟",
  options: [
    { english: "OH⁻", arabic: "OH⁻" },
    { english: "H⁺", arabic: "H⁺" },
    { english: "Na⁺", arabic: "Na⁺" },
    { english: "Cl⁻", arabic: "Cl⁻" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0027",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Acids and Bases",
  difficulty: "Medium",
  questionEnglish: "What is the conjugate base of H₂CO₃?",
  questionArabic: "ما القاعدة المرافقة لـ H₂CO₃؟",
  options: [
    { english: "HCO₃⁻", arabic: "HCO₃⁻" },
    { english: "CO₃²⁻", arabic: "CO₃²⁻" },
    { english: "H₃CO₃⁺", arabic: "H₃CO₃⁺" },
    { english: "OH⁻", arabic: "OH⁻" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0028",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "pH Calculations",
  difficulty: "Medium",
  questionEnglish: "What is the pH of a solution with [H⁺] = 1.0 × 10⁻⁴ M?",
  questionArabic: "ما الرقم الهيدروجيني لمحلول تركيز +H فيه يساوي 1.0 × 10⁻⁴ مولاري؟",
  options: [
    { english: "10", arabic: "10" },
    { english: "4", arabic: "4" },
    { english: "7", arabic: "7" },
    { english: "14", arabic: "14" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0029",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Neutralization",
  difficulty: "Easy",
  questionEnglish: "A neutralization reaction between an acid and a base typically produces:",
  questionArabic: "ينتج تفاعل التعادل بين الحمض والقاعدة عادةً:",
  options: [
    { english: "A metal and hydrogen gas", arabic: "فلز وغاز الهيدروجين" },
    { english: "Only oxygen gas", arabic: "غاز الأكسجين فقط" },
    { english: "Salt and water", arabic: "ملح وماء" },
    { english: "A hydrocarbon", arabic: "هيدروكربون" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0030",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Buffers",
  difficulty: "Hard",
  questionEnglish: "A buffer solution resists changes in pH because it contains:",
  questionArabic: "يقاوم المحلول المنظم التغيرات في الرقم الهيدروجيني لأنه يحتوي على:",
  options: [
    { english: "Only a strong acid", arabic: "حمض قوي فقط" },
    { english: "A weak acid and its conjugate base", arabic: "حمض ضعيف وقاعدته المرافقة" },
    { english: "Only distilled water", arabic: "ماء مقطر فقط" },
    { english: "A strong acid and a strong base in equal amounts", arabic: "حمض قوي وقاعدة قوية بكميات متساوية" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0031",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Thermochemistry",
  difficulty: "Easy",
  questionEnglish: "An exothermic reaction:",
  questionArabic: "التفاعل الطارد للحرارة:",
  options: [
    { english: "Absorbs heat from the surroundings", arabic: "يمتص الحرارة من الوسط المحيط" },
    { english: "Has no energy change", arabic: "لا يحدث فيه تغير في الطاقة" },
    { english: "Releases heat to the surroundings", arabic: "يطلق الحرارة إلى الوسط المحيط" },
    { english: "Always requires light", arabic: "يتطلب الضوء دائمًا" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0032",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Enthalpy",
  difficulty: "Medium",
  questionEnglish: "For an exothermic reaction, the enthalpy change ΔH is generally:",
  questionArabic: "في التفاعل الطارد للحرارة، تكون قيمة التغير في الإنثالبي ΔH عادةً:",
  options: [
    { english: "Positive", arabic: "موجبة" },
    { english: "Negative", arabic: "سالبة" },
    { english: "Zero", arabic: "صفرًا" },
    { english: "Infinite", arabic: "لا نهائية" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0033",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Calorimetry",
  difficulty: "Medium",
  questionEnglish: "How much heat is required to raise 100 g of water by 10°C if the specific heat of water is 4.18 J/(g·°C)?",
  questionArabic: "كمية الحرارة اللازمة لرفع درجة حرارة 100 جم من الماء بمقدار 10 درجات مئوية، إذا كانت الحرارة النوعية للماء 4.18 جول/(جم·°م)؟",
  options: [
    { english: "418 J", arabic: "418 جول" },
    { english: "41.8 J", arabic: "41.8 جول" },
    { english: "41,800 J", arabic: "41,800 جول" },
    { english: "4,180 J", arabic: "4,180 جول" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0034",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Hess's Law",
  difficulty: "Hard",
  questionEnglish: "Hess's law is valid because enthalpy is:",
  questionArabic: "يصح قانون هس لأن الإنثالبي هو:",
  options: [
    { english: "A state function", arabic: "دالة حالة" },
    { english: "Dependent on reaction rate", arabic: "يعتمد على سرعة التفاعل" },
    { english: "Always positive", arabic: "موجب دائمًا" },
    { english: "Equal to activation energy", arabic: "يساوي طاقة التنشيط" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0035",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Reaction Rates",
  difficulty: "Easy",
  questionEnglish: "Increasing temperature usually causes the rate of a chemical reaction to:",
  questionArabic: "تؤدي زيادة درجة الحرارة عادةً إلى أن سرعة التفاعل الكيميائي:",
  options: [
    { english: "Decrease", arabic: "تتناقص" },
    { english: "Remain unchanged", arabic: "تبقى دون تغيير" },
    { english: "Become zero", arabic: "تصبح صفرًا" },
    { english: "Increase", arabic: "تزداد" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0036",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Catalysts",
  difficulty: "Medium",
  questionEnglish: "A catalyst increases reaction rate by:",
  questionArabic: "يزيد العامل الحفاز سرعة التفاعل من خلال:",
  options: [
    { english: "Increasing the reaction enthalpy", arabic: "زيادة إنثالبي التفاعل" },
    { english: "Lowering the activation energy", arabic: "خفض طاقة التنشيط" },
    { english: "Increasing the amount of products at equilibrium", arabic: "زيادة كمية النواتج عند الاتزان" },
    { english: "Changing the balanced equation", arabic: "تغيير المعادلة الموزونة" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0037",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Collision Theory",
  difficulty: "Medium",
  questionEnglish: "According to collision theory, particles must collide with sufficient energy and:",
  questionArabic: "وفقًا لنظرية التصادم، يجب أن تتصادم الجسيمات بطاقة كافية وبـ:",
  options: [
    { english: "A suitable orientation", arabic: "اتجاه مناسب" },
    { english: "Equal masses", arabic: "كتل متساوية" },
    { english: "Identical charges", arabic: "شحنات متطابقة" },
    { english: "Zero velocity", arabic: "سرعة تساوي صفرًا" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0038",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Chemical Equilibrium",
  difficulty: "Medium",
  questionEnglish: "At dynamic equilibrium:",
  questionArabic: "عند الاتزان الديناميكي:",
  options: [
    { english: "The forward reaction stops", arabic: "يتوقف التفاعل الأمامي" },
    { english: "Reactant and product concentrations must be equal", arabic: "يجب أن تتساوى تراكيز المتفاعلات والنواتج" },
    { english: "The forward and reverse reaction rates are equal", arabic: "تتساوى سرعتا التفاعل الأمامي والعكسي" },
    { english: "All reactants are consumed", arabic: "تُستهلك جميع المتفاعلات" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0039",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Le Chatelier's Principle",
  difficulty: "Hard",
  questionEnglish: "For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g), increasing the pressure shifts equilibrium toward:",
  questionArabic: "في الاتزان N₂(g) + 3H₂(g) ⇌ 2NH₃(g)، تؤدي زيادة الضغط إلى إزاحة الاتزان نحو:",
  options: [
    { english: "The reactants because they have fewer gas moles", arabic: "المتفاعلات لأنها تحتوي على عدد أقل من مولات الغاز" },
    { english: "The products because they have fewer gas moles", arabic: "النواتج لأنها تحتوي على عدد أقل من مولات الغاز" },
    { english: "Neither side", arabic: "لا أحد الجانبين" },
    { english: "The reactants because ammonia decomposes", arabic: "المتفاعلات لأن الأمونيا تتحلل" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0040",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Equilibrium Constant",
  difficulty: "Hard",
  questionEnglish: "If Kc is much greater than 1 for a reaction, the equilibrium mixture generally contains:",
  questionArabic: "إذا كانت قيمة Kc أكبر كثيرًا من 1 لتفاعل ما، فإن خليط الاتزان يحتوي عادةً على:",
  options: [
    { english: "Mostly reactants", arabic: "معظمها متفاعلات" },
    { english: "Equal amounts of reactants and products", arabic: "كميات متساوية من المتفاعلات والنواتج" },
    { english: "No molecules", arabic: "لا يحتوي على جزيئات" },
    { english: "Mostly products", arabic: "معظمها نواتج" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0041",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Oxidation and Reduction",
  difficulty: "Easy",
  questionEnglish: "Oxidation is defined as the:",
  questionArabic: "تُعرَّف الأكسدة بأنها:",
  options: [
    { english: "Gain of electrons", arabic: "اكتساب الإلكترونات" },
    { english: "Loss of electrons", arabic: "فقد الإلكترونات" },
    { english: "Gain of neutrons", arabic: "اكتساب النيوترونات" },
    { english: "Loss of protons only", arabic: "فقد البروتونات فقط" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0042",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Oxidation Numbers",
  difficulty: "Medium",
  questionEnglish: "What is the oxidation number of sulfur in SO₄²⁻?",
  questionArabic: "ما عدد تأكسد الكبريت في SO₄²⁻؟",
  options: [
    { english: "+4", arabic: "+4" },
    { english: "−2", arabic: "−2" },
    { english: "+6", arabic: "+6" },
    { english: "+8", arabic: "+8" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0043",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Redox Agents",
  difficulty: "Medium",
  questionEnglish: "The oxidizing agent in a redox reaction is the species that:",
  questionArabic: "العامل المؤكسد في تفاعل الأكسدة والاختزال هو المادة التي:",
  options: [
    { english: "Gains electrons and is reduced", arabic: "تكتسب الإلكترونات وتُختزل" },
    { english: "Loses electrons and is oxidized", arabic: "تفقد الإلكترونات وتتأكسد" },
    { english: "Does not change oxidation state", arabic: "لا يتغير عدد تأكسدها" },
    { english: "Always contains oxygen", arabic: "تحتوي دائمًا على الأكسجين" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0044",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Electrochemistry",
  difficulty: "Medium",
  questionEnglish: "In a galvanic cell, oxidation occurs at the:",
  questionArabic: "في الخلية الجلفانية، تحدث الأكسدة عند:",
  options: [
    { english: "Cathode", arabic: "الكاثود" },
    { english: "Salt bridge", arabic: "القنطرة الملحية" },
    { english: "Anode", arabic: "الأنود" },
    { english: "Electrolyte only", arabic: "الإلكتروليت فقط" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0045",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Electrochemical Cells",
  difficulty: "Hard",
  questionEnglish: "In a spontaneous galvanic cell, electrons flow through the external circuit from:",
  questionArabic: "في الخلية الجلفانية التلقائية، تتدفق الإلكترونات عبر الدائرة الخارجية من:",
  options: [
    { english: "Cathode to anode", arabic: "الكاثود إلى الأنود" },
    { english: "Anode to cathode", arabic: "الأنود إلى الكاثود" },
    { english: "Salt bridge to anode", arabic: "القنطرة الملحية إلى الأنود" },
    { english: "Electrolyte to salt bridge", arabic: "الإلكتروليت إلى القنطرة الملحية" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0046",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Solubility",
  difficulty: "Easy",
  questionEnglish: "A saturated solution contains:",
  questionArabic: "يحتوي المحلول المشبع على:",
  options: [
    { english: "No dissolved solute", arabic: "لا يحتوي على مذاب" },
    { english: "Only solvent", arabic: "مذيب فقط" },
    { english: "The maximum amount of dissolved solute at a given temperature", arabic: "أقصى كمية من المذاب يمكن إذابتها عند درجة حرارة معينة" },
    { english: "An unlimited amount of solute", arabic: "كمية غير محدودة من المذاب" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0047",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Dilution",
  difficulty: "Medium",
  questionEnglish: "What volume of 2.0 M solution is needed to prepare 500 mL of a 0.50 M solution?",
  questionArabic: "ما حجم محلول تركيزه 2.0 مولاري اللازم لتحضير 500 مل من محلول تركيزه 0.50 مولاري؟",
  options: [
    { english: "125 mL", arabic: "125 مل" },
    { english: "250 mL", arabic: "250 مل" },
    { english: "500 mL", arabic: "500 مل" },
    { english: "1,000 mL", arabic: "1,000 مل" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0048",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Precipitation Reactions",
  difficulty: "Medium",
  questionEnglish: "A precipitate is:",
  questionArabic: "الراسب هو:",
  options: [
    { english: "A gas released from a solution", arabic: "غاز ينطلق من المحلول" },
    { english: "An insoluble solid formed in a solution", arabic: "مادة صلبة غير قابلة للذوبان تتكون في المحلول" },
    { english: "A dissolved ion", arabic: "أيون مذاب" },
    { english: "A liquid solvent", arabic: "مذيب سائل" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0049",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Intermolecular Forces",
  difficulty: "Hard",
  questionEnglish: "Which substance can form hydrogen bonds between its molecules?",
  questionArabic: "أي مادة يمكنها تكوين روابط هيدروجينية بين جزيئاتها؟",
  options: [
    { english: "CH₄", arabic: "CH₄" },
    { english: "CO₂", arabic: "CO₂" },
    { english: "H₂S", arabic: "H₂S" },
    { english: "NH₃", arabic: "NH₃" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0050",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Phase Changes",
  difficulty: "Easy",
  questionEnglish: "The change of a substance directly from a solid to a gas is called:",
  questionArabic: "يسمى تحول المادة مباشرةً من الحالة الصلبة إلى الحالة الغازية:",
  options: [
    { english: "Condensation", arabic: "التكاثف" },
    { english: "Freezing", arabic: "التجمد" },
    { english: "Sublimation", arabic: "التسامي" },
    { english: "Melting", arabic: "الانصهار" }
  ],
  correctAnswer: 2
},
{
  id: "CHEM0051",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Intermolecular Forces",
  difficulty: "Medium",
  questionEnglish: "Which intermolecular force is present in all atoms and molecules?",
  questionArabic: "أي قوة بين جزيئية توجد في جميع الذرات والجزيئات؟",
  options: [
    { english: "Hydrogen bonding", arabic: "الترابط الهيدروجيني" },
    { english: "Ion-dipole attraction", arabic: "تجاذب الأيون مع ثنائي القطب" },
    { english: "London dispersion forces", arabic: "قوى تشتت لندن" },
    { english: "Dipole-dipole attraction only", arabic: "تجاذب ثنائي القطب فقط" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0052",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Boiling Point",
  difficulty: "Medium",
  questionEnglish: "Stronger intermolecular forces generally cause a substance to have a:",
  questionArabic: "تؤدي القوى الأقوى بين الجزيئات عمومًا إلى أن تكون للمادة:",
  options: [
    { english: "Lower boiling point", arabic: "درجة غليان أقل" },
    { english: "Higher boiling point", arabic: "درجة غليان أعلى" },
    { english: "Lower molar mass", arabic: "كتلة مولية أقل" },
    { english: "Smaller atomic number", arabic: "عدد ذري أصغر" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0053",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Vapor Pressure",
  difficulty: "Hard",
  questionEnglish: "At the same temperature, a liquid with weaker intermolecular forces usually has:",
  questionArabic: "عند درجة الحرارة نفسها، يكون للسائل ذي القوى الأضعف بين الجزيئات عادةً:",
  options: [
    { english: "Lower vapor pressure", arabic: "ضغط بخار أقل" },
    { english: "Zero vapor pressure", arabic: "ضغط بخار يساوي صفرًا" },
    { english: "Higher vapor pressure", arabic: "ضغط بخار أعلى" },
    { english: "A higher freezing point in all cases", arabic: "درجة تجمد أعلى في جميع الحالات" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0054",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Phase Diagrams",
  difficulty: "Hard",
  questionEnglish: "The triple point on a phase diagram represents conditions where:",
  questionArabic: "تمثل النقطة الثلاثية في مخطط الأطوار الظروف التي:",
  options: [
    { english: "Only the liquid phase exists", arabic: "يوجد فيها الطور السائل فقط" },
    { english: "Solid, liquid, and gas coexist in equilibrium", arabic: "تتواجد فيها الحالات الصلبة والسائلة والغازية معًا عند الاتزان" },
    { english: "The substance becomes a plasma", arabic: "تتحول فيها المادة إلى بلازما" },
    { english: "The pressure is always zero", arabic: "يكون فيها الضغط صفرًا دائمًا" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0055",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Critical Point",
  difficulty: "Hard",
  questionEnglish: "Above the critical temperature, a gas cannot be liquefied by:",
  questionArabic: "فوق درجة الحرارة الحرجة، لا يمكن تسييل الغاز عن طريق:",
  options: [
    { english: "Increasing pressure alone", arabic: "زيادة الضغط فقط" },
    { english: "Reducing its mass", arabic: "تقليل كتلته" },
    { english: "Increasing its volume", arabic: "زيادة حجمه" },
    { english: "Adding another gas", arabic: "إضافة غاز آخر" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0056",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Gas Laws",
  difficulty: "Medium",
  questionEnglish: "A gas occupies 2.0 L at 300 K. At constant pressure, what volume will it occupy at 450 K?",
  questionArabic: "يشغل غاز حجمًا قدره 2.0 لتر عند 300 كلفن. عند ثبات الضغط، ما الحجم الذي سيشغله عند 450 كلفن؟",
  options: [
    { english: "1.0 L", arabic: "1.0 لتر" },
    { english: "2.5 L", arabic: "2.5 لتر" },
    { english: "3.0 L", arabic: "3.0 لتر" },
    { english: "4.5 L", arabic: "4.5 لتر" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0057",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Dalton's Law",
  difficulty: "Medium",
  questionEnglish: "A gas mixture contains gases with partial pressures of 0.30 atm, 0.45 atm, and 0.25 atm. What is the total pressure?",
  questionArabic: "يحتوي خليط غازي على غازات ضغوطها الجزئية 0.30 ضغط جوي و0.45 ضغط جوي و0.25 ضغط جوي. ما الضغط الكلي؟",
  options: [
    { english: "0.75 atm", arabic: "0.75 ضغط جوي" },
    { english: "1.00 atm", arabic: "1.00 ضغط جوي" },
    { english: "0.34 atm", arabic: "0.34 ضغط جوي" },
    { english: "1.30 atm", arabic: "1.30 ضغط جوي" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0058",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Kinetic Molecular Theory",
  difficulty: "Easy",
  questionEnglish: "According to kinetic molecular theory, the average kinetic energy of gas particles depends on:",
  questionArabic: "وفقًا للنظرية الحركية الجزيئية، تعتمد الطاقة الحركية المتوسطة لجسيمات الغاز على:",
  options: [
    { english: "Absolute temperature", arabic: "درجة الحرارة المطلقة" },
    { english: "Container shape only", arabic: "شكل الوعاء فقط" },
    { english: "Gas color", arabic: "لون الغاز" },
    { english: "Number of neutrons", arabic: "عدد النيوترونات" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0059",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Real Gases",
  difficulty: "Hard",
  questionEnglish: "Real gases deviate most from ideal behavior under conditions of:",
  questionArabic: "تنحرف الغازات الحقيقية أكثر عن السلوك المثالي تحت ظروف:",
  options: [
    { english: "Low pressure and high temperature", arabic: "ضغط منخفض ودرجة حرارة مرتفعة" },
    { english: "High pressure and low temperature", arabic: "ضغط مرتفع ودرجة حرارة منخفضة" },
    { english: "Low pressure and low density", arabic: "ضغط منخفض وكثافة منخفضة" },
    { english: "High temperature and large volume", arabic: "درجة حرارة مرتفعة وحجم كبير" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0060",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Colligative Properties",
  difficulty: "Medium",
  questionEnglish: "Adding a nonvolatile solute to a solvent generally causes the solvent's freezing point to:",
  questionArabic: "تؤدي إضافة مذاب غير متطاير إلى مذيب عمومًا إلى أن درجة تجمد المذيب:",
  options: [
    { english: "Increase", arabic: "ترتفع" },
    { english: "Remain unchanged", arabic: "تبقى دون تغيير" },
    { english: "Decrease", arabic: "تنخفض" },
    { english: "Become equal to its boiling point", arabic: "تصبح مساوية لدرجة غليانه" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0061",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Osmosis",
  difficulty: "Medium",
  questionEnglish: "Osmosis is the net movement of solvent through a semipermeable membrane from:",
  questionArabic: "التناضح هو الحركة الصافية للمذيب عبر غشاء شبه منفذ من:",
  options: [
    { english: "Higher solute concentration to lower solute concentration", arabic: "تركيز مذاب أعلى إلى تركيز مذاب أقل" },
    { english: "Lower solute concentration to higher solute concentration", arabic: "تركيز مذاب أقل إلى تركيز مذاب أعلى" },
    { english: "Higher pressure to lower pressure only", arabic: "ضغط أعلى إلى ضغط أقل فقط" },
    { english: "A gas directly into a solid", arabic: "غاز مباشرةً إلى مادة صلبة" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0062",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Solubility Rules",
  difficulty: "Medium",
  questionEnglish: "Which compound is generally soluble in water?",
  questionArabic: "أي مركب يكون قابلًا للذوبان في الماء عمومًا؟",
  options: [
    { english: "AgCl", arabic: "AgCl" },
    { english: "BaSO₄", arabic: "BaSO₄" },
    { english: "NaNO₃", arabic: "NaNO₃" },
    { english: "CaCO₃", arabic: "CaCO₃" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0063",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Net Ionic Equations",
  difficulty: "Hard",
  questionEnglish: "What is the net ionic equation for the reaction between AgNO₃(aq) and NaCl(aq)?",
  questionArabic: "ما المعادلة الأيونية الصافية للتفاعل بين AgNO₃(aq) وNaCl(aq)؟",
  options: [
    { english: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)", arabic: "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)" },
    { english: "Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)", arabic: "Na⁺(aq) + NO₃⁻(aq) → NaNO₃(s)" },
    { english: "Ag(s) + Cl₂(g) → AgCl(aq)", arabic: "Ag(s) + Cl₂(g) → AgCl(aq)" },
    { english: "AgNO₃(s) → Ag⁺(aq) + NO₃⁻(aq)", arabic: "AgNO₃(s) → Ag⁺(aq) + NO₃⁻(aq)" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0064",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Chemical Equilibrium",
  difficulty: "Medium",
  questionEnglish: "Which change does not alter the numerical value of an equilibrium constant at a fixed temperature?",
  questionArabic: "أي تغيير لا يغير القيمة العددية لثابت الاتزان عند درجة حرارة ثابتة؟",
  options: [
    { english: "Changing temperature", arabic: "تغيير درجة الحرارة" },
    { english: "Adding a catalyst", arabic: "إضافة عامل حفاز" },
    { english: "Reversing the reaction", arabic: "عكس التفاعل" },
    { english: "Multiplying the equation coefficients", arabic: "مضاعفة معاملات المعادلة" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0065",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Reaction Quotient",
  difficulty: "Hard",
  questionEnglish: "If the reaction quotient Q is less than the equilibrium constant K, the reaction will proceed:",
  questionArabic: "إذا كان حاصل التفاعل Q أقل من ثابت الاتزان K، فإن التفاعل سيتجه:",
  options: [
    { english: "Toward reactants", arabic: "نحو المتفاعلات" },
    { english: "Toward products", arabic: "نحو النواتج" },
    { english: "In neither direction", arabic: "لا يتجه إلى أي جانب" },
    { english: "Only if a catalyst is added", arabic: "فقط عند إضافة عامل حفاز" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0066",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Solubility Product",
  difficulty: "Hard",
  questionEnglish: "For the dissolution AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq), the solubility-product expression is:",
  questionArabic: "لذوبان AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)، يكون تعبير حاصل الإذابة:",
  options: [
    { english: "Ksp = [AgCl]", arabic: "Ksp = [AgCl]" },
    { english: "Ksp = [Ag⁺] + [Cl⁻]", arabic: "Ksp = [Ag⁺] + [Cl⁻]" },
    { english: "Ksp = [Ag⁺][Cl⁻]", arabic: "Ksp = [Ag⁺][Cl⁻]" },
    { english: "Ksp = [Ag⁺]/[Cl⁻]", arabic: "Ksp = [Ag⁺]/[Cl⁻]" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0067",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Acid Strength",
  difficulty: "Medium",
  questionEnglish: "A strong acid in water:",
  questionArabic: "الحمض القوي في الماء:",
  options: [
    { english: "Ionizes almost completely", arabic: "يتأين تقريبًا بالكامل" },
    { english: "Does not ionize", arabic: "لا يتأين" },
    { english: "Always has a high concentration", arabic: "يكون دائمًا عالي التركيز" },
    { english: "Must contain oxygen", arabic: "يجب أن يحتوي على الأكسجين" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0068",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Acid Dissociation Constant",
  difficulty: "Hard",
  questionEnglish: "A larger value of Ka generally indicates:",
  questionArabic: "تشير القيمة الأكبر لثابت تأين الحمض Ka عمومًا إلى:",
  options: [
    { english: "A weaker acid", arabic: "حمض أضعف" },
    { english: "A stronger acid", arabic: "حمض أقوى" },
    { english: "A stronger conjugate base", arabic: "قاعدة مرافقة أقوى" },
    { english: "A neutral compound", arabic: "مركب متعادل" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0069",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Titration",
  difficulty: "Medium",
  questionEnglish: "At the equivalence point of a strong acid-strong base titration, the moles of acid and base have reacted in:",
  questionArabic: "عند نقطة التكافؤ في معايرة حمض قوي بقاعدة قوية، تكون مولات الحمض والقاعدة قد تفاعلت وفق:",
  options: [
    { english: "The stoichiometric ratio from the balanced equation", arabic: "النسبة الستوكيومترية في المعادلة الموزونة" },
    { english: "A random ratio", arabic: "نسبة عشوائية" },
    { english: "A mass ratio of exactly 1:1", arabic: "نسبة كتلية تساوي دائمًا 1:1" },
    { english: "A volume ratio of exactly 2:1", arabic: "نسبة حجمية تساوي دائمًا 2:1" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0070",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Organic Chemistry",
  difficulty: "Easy",
  questionEnglish: "Which element forms the backbone of most organic compounds?",
  questionArabic: "أي عنصر يشكل الهيكل الأساسي لمعظم المركبات العضوية؟",
  options: [
    { english: "Oxygen", arabic: "الأكسجين" },
    { english: "Nitrogen", arabic: "النيتروجين" },
    { english: "Carbon", arabic: "الكربون" },
    { english: "Sodium", arabic: "الصوديوم" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0071",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Hydrocarbons",
  difficulty: "Easy",
  questionEnglish: "A hydrocarbon containing only single carbon-carbon bonds is classified as an:",
  questionArabic: "يصنف الهيدروكربون الذي يحتوي فقط على روابط أحادية بين ذرات الكربون على أنه:",
  options: [
    { english: "Alkene", arabic: "ألكين" },
    { english: "Alkyne", arabic: "ألكاين" },
    { english: "Alcohol", arabic: "كحول" },
    { english: "Alkane", arabic: "ألكان" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0072",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Functional Groups",
  difficulty: "Medium",
  questionEnglish: "Which functional group characterizes an alcohol?",
  questionArabic: "أي مجموعة وظيفية تميز الكحول؟",
  options: [
    { english: "−COOH", arabic: "−COOH" },
    { english: "−OH", arabic: "−OH" },
    { english: "−NH₂", arabic: "−NH₂" },
    { english: "−CHO", arabic: "−CHO" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0073",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Isomers",
  difficulty: "Medium",
  questionEnglish: "Structural isomers have:",
  questionArabic: "تمتلك المتماكبات البنائية:",
  options: [
    { english: "Different molecular formulas and identical structures", arabic: "صيغًا جزيئية مختلفة وتراكيب متطابقة" },
    { english: "The same molecular formula but different atom connectivity", arabic: "الصيغة الجزيئية نفسها مع اختلاف ترابط الذرات" },
    { english: "The same structure but different numbers of neutrons", arabic: "التركيب نفسه مع اختلاف أعداد النيوترونات" },
    { english: "Identical physical and chemical properties in all cases", arabic: "خصائص فيزيائية وكيميائية متطابقة في جميع الحالات" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0074",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Polymers",
  difficulty: "Medium",
  questionEnglish: "A polymer is a large molecule composed of repeating units called:",
  questionArabic: "البوليمر هو جزيء كبير مكون من وحدات متكررة تسمى:",
  options: [
    { english: "Isotopes", arabic: "نظائر" },
    { english: "Ions", arabic: "أيونات" },
    { english: "Monomers", arabic: "مونومرات" },
    { english: "Catalysts", arabic: "عوامل حفازة" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0075",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Laboratory Safety",
  difficulty: "Easy",
  questionEnglish: "When diluting a concentrated acid, the safest standard procedure is to:",
  questionArabic: "عند تخفيف حمض مركز، فإن الإجراء القياسي الأكثر أمانًا هو:",
  options: [
    { english: "Add water rapidly to the acid", arabic: "إضافة الماء بسرعة إلى الحمض" },
    { english: "Add acid slowly to water", arabic: "إضافة الحمض ببطء إلى الماء" },
    { english: "Mix the acid with a flammable solvent", arabic: "خلط الحمض بمذيب قابل للاشتعال" },
    { english: "Heat the acid before adding water", arabic: "تسخين الحمض قبل إضافة الماء" }
  ],
  correctAnswer: 1
},
{
  id: "CHEM0076",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Laboratory Safety",
  difficulty: "Easy",
  questionEnglish: "Which piece of personal protective equipment should always be worn when handling chemicals in a laboratory?",
  questionArabic: "ما معدات الوقاية الشخصية التي يجب ارتداؤها دائمًا عند التعامل مع المواد الكيميائية في المختبر؟",
  options: [
    { english: "Safety goggles", arabic: "نظارات السلامة" },
    { english: "Sandals", arabic: "الصنادل" },
    { english: "Headphones", arabic: "سماعات الرأس" },
    { english: "Baseball cap", arabic: "قبعة رياضية" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0077",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Laboratory Safety",
  difficulty: "Easy",
  questionEnglish: "If a chemical spills on your skin, the first action should be to:",
  questionArabic: "إذا انسكبت مادة كيميائية على الجلد، فإن أول إجراء يجب القيام به هو:",
  options: [
    { english: "Wash the area thoroughly with water", arabic: "غسل المنطقة جيدًا بالماء" },
    { english: "Cover it with paper towels", arabic: "تغطيتها بمناشف ورقية" },
    { english: "Ignore it", arabic: "تجاهل الأمر" },
    { english: "Apply another chemical", arabic: "وضع مادة كيميائية أخرى" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0078",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Chemical Symbols",
  difficulty: "Easy",
  questionEnglish: "What is the chemical symbol for sodium?",
  questionArabic: "ما الرمز الكيميائي للصوديوم؟",
  options: [
    { english: "S", arabic: "S" },
    { english: "Na", arabic: "Na" },
    { english: "So", arabic: "So" },
    { english: "Sd", arabic: "Sd" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0079",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Periodic Table",
  difficulty: "Easy",
  questionEnglish: "Which element has the chemical symbol Fe?",
  questionArabic: "أي عنصر يحمل الرمز الكيميائي Fe؟",
  options: [
    { english: "Fluorine", arabic: "الفلور" },
    { english: "Iron", arabic: "الحديد" },
    { english: "Francium", arabic: "الفرانسيوم" },
    { english: "Fermium", arabic: "الفرميوم" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0080",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Periodic Trends",
  difficulty: "Medium",
  questionEnglish: "Which group of the periodic table contains the noble gases?",
  questionArabic: "أي مجموعة في الجدول الدوري تحتوي على الغازات النبيلة؟",
  options: [
    { english: "Group 1", arabic: "المجموعة 1" },
    { english: "Group 2", arabic: "المجموعة 2" },
    { english: "Group 17", arabic: "المجموعة 17" },
    { english: "Group 18", arabic: "المجموعة 18" }
  ],
  correctAnswer: 3
},

{
  id: "CHEM0081",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Periodic Trends",
  difficulty: "Medium",
  questionEnglish: "Which element has the highest electronegativity?",
  questionArabic: "أي عنصر يمتلك أعلى قيمة للسالبية الكهربائية؟",
  options: [
    { english: "Oxygen", arabic: "الأكسجين" },
    { english: "Nitrogen", arabic: "النيتروجين" },
    { english: "Fluorine", arabic: "الفلور" },
    { english: "Chlorine", arabic: "الكلور" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0082",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Periodic Trends",
  difficulty: "Medium",
  questionEnglish: "Ionization energy generally increases across a period because:",
  questionArabic: "تزداد طاقة التأين عمومًا عبر الدورة لأن:",
  options: [
    { english: "Atomic radius increases", arabic: "يزداد نصف القطر الذري" },
    { english: "Nuclear attraction becomes stronger", arabic: "تزداد قوة جذب النواة للإلكترونات" },
    { english: "More neutrons are added", arabic: "يتم إضافة نيوترونات أكثر" },
    { english: "Atoms become larger", arabic: "تصبح الذرات أكبر" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0083",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Chemical Bonding",
  difficulty: "Medium",
  questionEnglish: "Which bond is the most polar?",
  questionArabic: "أي الروابط التالية هي الأكثر قطبية؟",
  options: [
    { english: "H-H", arabic: "H-H" },
    { english: "C-C", arabic: "C-C" },
    { english: "H-F", arabic: "H-F" },
    { english: "N-N", arabic: "N-N" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0084",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Lewis Structures",
  difficulty: "Medium",
  questionEnglish: "The octet rule states that atoms tend to:",
  questionArabic: "تنص قاعدة الثمانية على أن الذرات تميل إلى:",
  options: [
    { english: "Lose all electrons", arabic: "فقد جميع الإلكترونات" },
    { english: "Have eight electrons in their valence shell", arabic: "امتلاك ثمانية إلكترونات في غلاف التكافؤ" },
    { english: "Gain eight protons", arabic: "اكتساب ثمانية بروتونات" },
    { english: "Contain eight neutrons", arabic: "احتواء ثمانية نيوترونات" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0085",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Molecular Geometry",
  difficulty: "Hard",
  questionEnglish: "What is the molecular geometry of NH₃?",
  questionArabic: "ما الشكل الجزيئي للأمونيا NH₃؟",
  options: [
    { english: "Linear", arabic: "خطي" },
    { english: "Trigonal planar", arabic: "مثلثي مستوٍ" },
    { english: "Trigonal pyramidal", arabic: "هرمي ثلاثي" },
    { english: "Tetrahedral", arabic: "رباعي السطوح" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0086",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Oxidation Numbers",
  difficulty: "Medium",
  questionEnglish: "The oxidation number of oxygen in most compounds is:",
  questionArabic: "عدد تأكسد الأكسجين في معظم المركبات هو:",
  options: [
    { english: "+2", arabic: "+2" },
    { english: "-2", arabic: "-2" },
    { english: "0", arabic: "0" },
    { english: "+1", arabic: "+1" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0087",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Electrochemistry",
  difficulty: "Hard",
  questionEnglish: "In an electrolytic cell, electrical energy is converted into:",
  questionArabic: "في الخلية الإلكتروليتية، تتحول الطاقة الكهربائية إلى:",
  options: [
    { english: "Chemical energy", arabic: "طاقة كيميائية" },
    { english: "Mechanical energy", arabic: "طاقة ميكانيكية" },
    { english: "Light energy only", arabic: "طاقة ضوئية فقط" },
    { english: "Nuclear energy", arabic: "طاقة نووية" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0088",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Organic Chemistry",
  difficulty: "Easy",
  questionEnglish: "Methane belongs to which family of hydrocarbons?",
  questionArabic: "إلى أي عائلة من الهيدروكربونات ينتمي الميثان؟",
  options: [
    { english: "Alkenes", arabic: "الألكينات" },
    { english: "Alkanes", arabic: "الألكانات" },
    { english: "Alkynes", arabic: "الألكاينات" },
    { english: "Aromatic compounds", arabic: "المركبات العطرية" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0089",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Organic Chemistry",
  difficulty: "Medium",
  questionEnglish: "Ethene contains which type of carbon-carbon bond?",
  questionArabic: "يحتوي الإيثين على أي نوع من الروابط بين ذرتي الكربون؟",
  options: [
    { english: "Single bond", arabic: "رابطة أحادية" },
    { english: "Double bond", arabic: "رابطة مزدوجة" },
    { english: "Triple bond", arabic: "رابطة ثلاثية" },
    { english: "Ionic bond", arabic: "رابطة أيونية" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0090",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Organic Chemistry",
  difficulty: "Medium",
  questionEnglish: "The suffix '-ol' in an organic compound name usually indicates the presence of:",
  questionArabic: "تشير اللاحقة '-ol' في اسم المركب العضوي عادةً إلى وجود:",
  options: [
    { english: "Alcohol group", arabic: "مجموعة كحول" },
    { english: "Carboxylic acid", arabic: "حمض كربوكسيلي" },
    { english: "Ketone", arabic: "كيتون" },
    { english: "Aldehyde", arabic: "ألدهيد" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0091",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Biochemistry",
  difficulty: "Medium",
  questionEnglish: "Proteins are primarily composed of:",
  questionArabic: "تتكون البروتينات بشكل أساسي من:",
  options: [
    { english: "Fatty acids", arabic: "الأحماض الدهنية" },
    { english: "Monosaccharides", arabic: "السكريات الأحادية" },
    { english: "Amino acids", arabic: "الأحماض الأمينية" },
    { english: "Nucleotides", arabic: "النيوكليوتيدات" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0092",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Biochemistry",
  difficulty: "Easy",
  questionEnglish: "DNA is composed of repeating units called:",
  questionArabic: "يتكون الحمض النووي DNA من وحدات متكررة تسمى:",
  options: [
    { english: "Proteins", arabic: "البروتينات" },
    { english: "Nucleotides", arabic: "النيوكليوتيدات" },
    { english: "Lipids", arabic: "الدهون" },
    { english: "Monomers of glucose", arabic: "وحدات الجلوكوز" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0093",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Environmental Chemistry",
  difficulty: "Easy",
  questionEnglish: "Which gas is the primary contributor to the greenhouse effect due to human activities?",
  questionArabic: "أي غاز يعد المساهم الرئيسي في ظاهرة الاحتباس الحراري الناتجة عن الأنشطة البشرية؟",
  options: [
    { english: "Carbon dioxide", arabic: "ثاني أكسيد الكربون" },
    { english: "Helium", arabic: "الهيليوم" },
    { english: "Argon", arabic: "الأرجون" },
    { english: "Neon", arabic: "النيون" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0094",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Environmental Chemistry",
  difficulty: "Medium",
  questionEnglish: "Acid rain is mainly caused by emissions of:",
  questionArabic: "ينتج المطر الحمضي بشكل رئيسي عن انبعاثات:",
  options: [
    { english: "Nitrogen and sulfur oxides", arabic: "أكاسيد النيتروجين والكبريت" },
    { english: "Hydrogen gas", arabic: "غاز الهيدروجين" },
    { english: "Helium", arabic: "الهيليوم" },
    { english: "Water vapor only", arabic: "بخار الماء فقط" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0095",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Nuclear Chemistry",
  difficulty: "Medium",
  questionEnglish: "Beta-minus decay results in the emission of:",
  questionArabic: "ينتج عن اضمحلال بيتا السالب انبعاث:",
  options: [
    { english: "An electron", arabic: "إلكترون" },
    { english: "A proton", arabic: "بروتون" },
    { english: "A neutron", arabic: "نيوترون" },
    { english: "An alpha particle", arabic: "جسيم ألفا" }
  ],
  correctAnswer: 0
},

{
  id: "CHEM0096",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Nuclear Chemistry",
  difficulty: "Hard",
  questionEnglish: "Alpha decay decreases the atomic number of an atom by:",
  questionArabic: "يؤدي اضمحلال ألفا إلى تقليل العدد الذري للذرة بمقدار:",
  options: [
    { english: "1", arabic: "1" },
    { english: "2", arabic: "2" },
    { english: "4", arabic: "4" },
    { english: "8", arabic: "8" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0097",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Radioactivity",
  difficulty: "Hard",
  questionEnglish: "The half-life of a radioactive isotope is the time required for:",
  questionArabic: "العمر النصفي للنظير المشع هو الزمن اللازم لـ:",
  options: [
    { english: "All nuclei to decay", arabic: "تحلل جميع الأنوية" },
    { english: "Half of the radioactive nuclei to decay", arabic: "تحلل نصف الأنوية المشعة" },
    { english: "The mass to double", arabic: "تضاعف الكتلة" },
    { english: "The temperature to decrease by half", arabic: "انخفاض درجة الحرارة إلى النصف" }
  ],
  correctAnswer: 1
},

{
  id: "CHEM0098",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Analytical Chemistry",
  difficulty: "Medium",
  questionEnglish: "Which instrument is commonly used to accurately measure the pH of a solution?",
  questionArabic: "أي جهاز يستخدم عادةً لقياس الرقم الهيدروجيني للمحلول بدقة؟",
  options: [
    { english: "Thermometer", arabic: "ميزان حرارة" },
    { english: "Barometer", arabic: "بارومتر" },
    { english: "pH meter", arabic: "جهاز قياس الرقم الهيدروجيني" },
    { english: "Spectroscope", arabic: "مطياف" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0099",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "Analytical Chemistry",
  difficulty: "Hard",
  questionEnglish: "Which laboratory glassware provides the highest accuracy for preparing a solution of a specific volume?",
  questionArabic: "أي من أدوات الزجاج المخبرية يوفر أعلى دقة لتحضير محلول بحجم محدد؟",
  options: [
    { english: "Beaker", arabic: "البيكر" },
    { english: "Erlenmeyer flask", arabic: "دورق إرلنماير" },
    { english: "Volumetric flask", arabic: "الدورق الحجمي" },
    { english: "Test tube", arabic: "أنبوب اختبار" }
  ],
  correctAnswer: 2
},

{
  id: "CHEM0100",
  domain: "Chemistry",
  course: "General Chemistry",
  topic: "General Chemistry",
  difficulty: "Medium",
  questionEnglish: "Which branch of chemistry primarily studies compounds containing carbon?",
  questionArabic: "أي فرع من فروع الكيمياء يختص بشكل رئيسي بدراسة المركبات المحتوية على الكربون؟",
  options: [
    { english: "Physical Chemistry", arabic: "الكيمياء الفيزيائية" },
    { english: "Organic Chemistry", arabic: "الكيمياء العضوية" },
    { english: "Analytical Chemistry", arabic: "الكيمياء التحليلية" },
    { english: "Inorganic Chemistry", arabic: "الكيمياء غير العضوية" }
  ],
  correctAnswer: 1
},
  ];
export default chemistryQuestions;