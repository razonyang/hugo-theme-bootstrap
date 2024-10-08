+++
author = "Hugo Authors"
title = "دليل الكتابة باستخدام ماركداون"
date = "2020-11-09"
description = "نموذج لمقالة توضح الكتابة بلغة ماركداون والتنسيق باستخدام HTML."
featured = true
categories = [
]
tags = [
  "ماركداون",
  "CSS",
  "HTML",
]
series = [
  "التوثيق"
]
aliases = ["migrate-from-jekyl"]
images = [
  "images/markdown.png"
]
authors = ["Hugo"]
# toc = false
[menu.footer]
  parent = "docs"
  weight = 4
  [menu.footer.params]
    icon = '<i class="fab fa-markdown fa-fw text-success"></i>'
+++

تعرض هذه المقالة أساسيات الكتابة بلغة ماركداون والتي يمكن استخدامها في ملفات المحتوى داخل هوجو، كما تعرض أيضا تنسيق عناصر HTML الأساسية باستخدام CSS في الثيم.
<!--more-->

## العناوين

تمثل عناصر HTML التالية `<h1>`—`<h6>` ستة مستويات من العناوين. الوسم `<h1>` هو اﻷكبر بينما الوسم `<h6>` هو الأصغر.

# H1
## H2
### H3
#### H4
##### H5
###### H6

## النص العادي

هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من [مولد النص العربى](https://colorslab.com/textgator/)، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.

إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.

ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا يليق.

هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً.

## الاقتباس

يمثل هذا العنصر النصوص المقتبسة من مصادر أخرى، ويمكن أن يحتوى على مرجع هذا الاقتباس والذي يوضع بين عنصر `footer` أة `cite`اختياريًا مع التغييرات المضمنة مثل التعليقات التوضيحية والاختصارات.


### اقتباس بدون مصدر

> هذا عبارة عن نص مقتبس
> **لاحظ** أنه يمكنك استخدام *صياغة ماركداون* داخل الاقتباس.

### اقتباس مع المصدر

> هذا عبارة عن نص مقتبس<br>
> — <cite>المصدر[^1]</cite>

[^1]: هذا النص مقتبس من لا شيء.

### Blockquote Alerts

```markdown
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

> [!QUESTION]+ Can alerts be foldable?
> Yes, they can, you just need to append the `+` or `-` sign to the type.
>
> Click the heading to preview.
```

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

> [!QUESTION]+ Can alerts be foldable?
> Yes, they can, you just need to append the `+` or `-` sign to the type.
>
> Click the heading to preview.

## الجداول

يدعم هوجو كتابة الجداول على الرغم من أنها ليست جزءًا من المواصفات القياسية للغة ماركداون.


   الاسم | السن
--------|------
    عمر | 27
  أسماء | 23

### استخدام ماركداون داخل الجداول

| مائل   | سميك     | كود   |
| --------  | -------- | ------ |
| *مائل* | **سميك** | `كود` |

## الأكواد

### كتابة كتلة أكواد باستخدام الفاصلة العليا المائلة

```html
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>مستند HTML5</title>
</head>
<body>
  <p>تجربة</p>
</body>
</html>
```

### كتابة كتلة أكواد باستخدام الرمز المختصر ضمن هوجو
{{< highlight html >}}
<!doctype html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>مستند HTML5 آخر</title>
</head>
<body>
  <p>نص طوييييييييييييييييييييييييييييييييييييييييييييييييييييييييييييل</p>
</body>
</html>
{{< /highlight >}}

## القوائم

### القوائم المرتبة

1. العنصر اﻷول
2. العنصر الثاني
3. العنصر الثالث

### القوائم غير المرتبة

* عنصر قائمة
* عنصر قائمة آخر
* عنصر قائمة ثالث

### القوائم المتداخلة

* الفواكهة
  * التفاح
  * البرتقال
  * الموز
* الألبان
  * الحليب
  * الجبن

### قائمة المهام

- [x] مكتمل
- [ ] مهمة

## عناصر أخرى — abbr - sub - sup - kbd - mark

<abbr title="نسق الرسومات المتبادلة">GIF</abbr> هو تنسيق صورة نقطية.

H<sub>2</sub>O

س<sup>أ</sup> + ص<sup>أ</sup> = ع<sup>أ</sup>

اضغط <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> ﻹنهاء الجلسة.

ينشط معظم <mark>السمندل</mark> في الليل ويصطاد الحشرات والديدان وغيرها من الكائنات الصغيرة.
