import { useState } from "react";
import "./members.css";

import adel from "../assets/Adel.jpeg";
import fahmy from "../assets/Fahmy.jpeg";
import hamed from "../assets/hamed.jpg";
import hussien from "../assets/hussien.jpg";

function Members() {
  const [selectedMember, setSelectedMember] = useState(null);

  const members = [
    {
      name: "Adel",
      image: adel,
      description: "عادل بتاع التعدد",
      details:
        "عادل عامل نفسه مهندس الكون ومرجع البشرية فى أى حاجة، مع إنه فى الحقيقة مسّاح ملوش لازمة ومحدش فاهم هو بيشتغل إيه أصلًا. طول الوقت بيتكلم عن التعدد ونفسه يتجوز ٤ رغم إنه متجوز بالفعل، وكل شوية تلاقيه فاتح موضوع الجواز كأنه مشروع قومى. بخيل فشخ وممكن يبيع الشلة كلها علشان يوفر ٢٠ جنيه، وعنده كره تاريخى لفهمى أبو جلابية مقطعة. بيحب يعمل نفسه شيخ وينزل حكم ومواعظ على الناس، لكن أول ما حامد يتكلم بيقلب حمل وديع ويخاف يفتح بقه كأنه طالب فى لجنة.",
    },
    {
      name: "Fahmy",
      image: fahmy,
      description: "فهمى ابو جلابية مقطعة",
      details:
        "فهمى أكتر واحد فى الشلة بيقرأ وعنده معلومات غريبة عن التاريخ والحروب والحاجات اللى محدش سأل عنها أصلًا. عنده هواية يعمل علاقات أونلاين مع أى بنت تقابله حتى لو عندها ١٨ سنة بالعافية، وكل مرة مراته تمسكه يعمل نفسه مخترق إلكترونى ومظلوم من المجتمع. غبى بشكل يخلى أى خطة يعملها تنتهى بكارثة، وفوق كل ده معفن وعمره ما يدفع حق أى حاجة، لازم ندوّر على حد يدفع بداله. عنده قضية نصب مفتوحة فى الشلة بسبب الـ١١ ألف جنيه بتوع العمارة، وكمان بيكره عادل بتاع التعدد كره العمى، لكن الاتنين أول ما يشوفوا حامد بيعملوا نفسهم محترمين وبيخافوا منه كأنه المدير العام.",
    },
    {
      name: "Hamed",
      image: hamed,
      description: "حامد الجامد ازكى واحد فى الشلة و كلنا بنخاف منه",
      details:
        "حامد هو الزعيم الحقيقى للشلة وأغنى واحد فيهم، وحرفيًا محدش يقدر يفتح بقه قدامه. ذكى بشكل مرعب وفاهم فى أى حاجة حتى الحاجات اللى متخصوش، وعنده رد على أى كلام فى ثانية. كسول بطريقة مستفزة وممكن يقعد اليوم كله مبيعملش أى حاجة غير إنه يعرف أخبار الناس ويتابع الدنيا كأنه جهاز مخابرات. مبيعرفش يضرب وأول ما الجو يقلب خناقة يعمل نفسه من بنها، لكن محدش أصلًا يجرؤ يقربله لأن الكل بيخاف منه حتى الناس اللى متعرفوش. عنده مشكلة أزلية مع ابنه سليم ودايمًا بيشتكى منه، مع إنه بيصرف عليه كل فلوسه وبرضه الواد فشخه فى أفكاره. وحتى الذكاء الاصطناعى نفسه بيخاف من حامد وبيحسب كلامه ألف حساب.",
    },
    {
      name: "Hussien",
      image: hussien,
      description: "حسين بتاع النسوان الى بتطرى القعدة و يخلو عادل يدفع فلوس",
      details:
        "حسين عايش دور رجل الأعمال العالمى رغم إنه غالبًا مفلس آخر الشهر، وطول الوقت يحكيلك عن مناصب ومعارف وهمية محدش شافها. لسانه طويل وأى جملة لازم يدخل فيها شتيمة أو سيرة نسوان حتى لو الموضوع عن الطقس. بيعشق الكفتة بشكل مرضى ومستحيل ياكل أى حاجة غيرها كأنه واخد عقد مع محل كفتة. بيكره عادل وبيستمتع إنه يورطه فى أى خروجة علشان يخليه يدفع الحساب، لكن أول ما حامد يدخل القعدة حسين بيهدى فجأة ويبطل هزار كأنه موظف جديد فى أول يوم شغل.",
    },
  ];

  if (selectedMember) {
    return (
      <div className="members-page detail-view">
        <div className="detail-content">
          <img
            src={selectedMember.image}
            alt={selectedMember.name}
            className="detail-image"
          />

          <div className="testing-box" dir="rtl">
            <p>{selectedMember.details}</p>
          </div>
        </div>

        <button
          className="back-arrow"
          onClick={() => setSelectedMember(null)}
        >
          ←
        </button>
      </div>
    );
  }

  return (
    <div className="members-page">
      <h1 className="members-title">الشلة</h1>

      <div className="members-grid">
        {members.map((member) => (
          <div
            className="member-card"
            key={member.name}
            onClick={() => setSelectedMember(member)}
          >
            <img src={member.image} alt={member.name} className="member-image" />

            <div className="member-description" dir="rtl">
              {member.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Members;