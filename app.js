'use strict';

/*
  «یک دقیقه جای من باش»
  نسخه‌ی کاملاً ایستا: بدون API، بدون حساب کاربری و بدون ارسال داده به سرور.
  برای افزودن داستان، یک شیء تازه با همین ساختار به آرایه‌ی stories اضافه کنید.
*/

const stories = [
  {
    id: 'new-student',
    title: 'روزای اول دانشگاه',
    short: 'دانشجوی تازه‌واردی که هنوز توی جمع کسی رو نمی‌شناسه.',
    intro: 'ترم تازه شروع شده. سارا چند روزیه اومده دانشگاه، اما هنوز با کسی صمیمی نشده.',
    icon: '🎓',
    symbol: '🫂',
    color: '#287c75', tint: '#e5f1ed',
    scenes: [
      {
        title: 'تنهایی در حیاط دانشگاه',
        description: 'زنگ تفریحه. سارا یه کم اون‌طرف‌تر روی نیمکت نشسته و با گوشیش ور می‌ره. چند نفر از هم‌کلاسی‌هات هم کنارت وایسادن.',
        question: 'تو چه کار می‌کنی؟',
        choices: [
          { text: 'می‌رم سمتش و دوستانه سلام می‌کنم.', tag: 'connect', feedback: 'یک شروع ساده می‌تونه فشار شروع رابطه رو کمتر کند. شاید سارا هنوز آماده‌ی گفت‌وگوی طولانی نباشه، اما همین سلام کوتاه راه ارتباط رو باز می‌کنه.' },
          { text: 'از دور نگاه می‌کنم؛ شاید خودش دوست داره تنها باشه.', tag: 'observe', feedback: 'این احتمال وجود داره که سارا به کمی خلوت نیاز داشته باشه. از دور نگاه کردن خوبه، به شرطی که از روی ظاهرش راجع به حس واقعیش مطمئن نشویم.' },
          { text: 'کاری نمی‌کنم؛ بالاخره خودش با کسی آشنا می‌شه.', tag: 'wait', feedback: 'گاهی آشنایی خودبه‌خود اتفاق می‌افته، اما برای کسی که تازه وارد یک جمع شده، شروع کردن ممکنه دشوار باشه. یک دعوت ساده می‌تونه تفاوت ایجاد کند.' }
        ]
      },
      {
        title: 'یک شوخی ناراحت‌کننده',
        description: 'توی کلاس، یکی از دانشجوها لهجه‌ی سارا رو تقلید می‌کنه. چند نفر می‌خندن. سارا لبخند کوتاهی می‌زند، اما دیگر حرفی نمی‌زند.',
        question: 'واکنش تو چیست؟',
        choices: [
          { text: 'آرام می‌گم که این شوخی شاید براش خوشایند نباشه.', tag: 'support', feedback: 'اعتراض آرام و محترمانه می‌تونه فضای امن‌تری بسازد، بدون اینکه ماجرا رو به دعوا تبدیل کند.' },
          { text: 'بعد از کلاس، خصوصی از سارا می‌پرسم که حالش خوبه یا نه.', tag: 'listen', feedback: 'گفت‌وگوی خصوصی بهش فرصت می‌ده بدون فشار جمع راجع به احساسش حرف بزند. مهمه که به جوابش گوش بدهی، نه اینکه به‌جایش تصمیم بگیری.' },
          { text: 'چیزی نمی‌گم؛ نمی‌خوام وارد بحث شوم.', tag: 'silent', feedback: 'نگرانی از تنش قابل درکه. ولی، سکوت جمع گاهی باعث می‌شه فرد احساس کند تنها مانده؛ حتی یک تغییر موضوع محترمانه هم می‌تونه کمک‌کننده باشه.' }
        ]
      },
      {
        title: 'دعوتی که رد می‌شه',
        description: 'چند روز بعد از سارا دعوت می‌کنی با شما بره ناهار. او تشکر می‌کنه، اما می‌گه امروز ترجیح می‌ده تنها باشه.',
        question: 'حالا چه می‌کنی؟',
        choices: [
          { text: 'به تصمیمش احترام می‌ذارم و می‌گم هر وقت خواست خوشحال می‌شویم همراهمون باشه.', tag: 'respect', feedback: 'احترام به مرزهای فردی بخش مهمی از ارتباط سالمه. دعوت دوباره در فرصتی مناسب، بدون اصرار، می‌تونه حس پذیرفته‌شدن رو حفظ کند.' },
          { text: 'اصرار می‌کنم که تنها نماند؛ شاید بعداً خوشحال شود.', tag: 'insist', feedback: 'نیتت ممکنه حمایت باشه، اما اصرار می‌تونه حس انتخاب رو ازش بگیرد. حمایت وقتی مؤثرتره که حق انتخاب طرف مقابل حفظ شود.' },
          { text: 'دیگر دعوتش نمی‌کنم تا خودش پیش‌قدم شود.', tag: 'withdraw', feedback: 'عقب‌نشینی کامل شاید از ترس مزاحمت باشه، اما ممکنه فرصت ارتباط رو هم از بین ببرد. می‌شه هم به خواسته‌اش احترام گذاشت و هم راه ارتباط رو باز نگه داشت.' }
        ]
      }
    ],
    endings: {
      connect: 'از انتخاب‌هات بیشتر به شروع ارتباط و نزدیک شدن پیش‌قدم شدی. این رویکرد می‌تونه فرصت آشنایی بسازد؛ در کنار آن، توجه به تمایل و مرزهای طرف مقابل هم مهمه.',
      observe: 'از انتخاب‌هات بیشتر مکث کردی و تلاش کردی موقعیت رو از بیرون ببینی. مشاهده ارزشمنده؛ گاهی یک سؤال محترمانه کمک می‌کنه برداشتت رو با واقعیت اشتباه نگیری.',
      support: 'از انتخاب‌هات بیشتر به حمایت و امن‌تر کردن فضا توجه داشتی. حمایت مؤثر معمولاً با احترام، آرامش و شنیدن صدای خود فرد همراه.',
      respect: 'از انتخاب‌هات بیشتر به حق انتخاب و مرزهای فرد مقابل توجه کردی. این توجه می‌تونه به شکل‌گیری رابطه‌ای امن و بدون فشار کمک کند.',
      balanced: 'در مسیرت بین نزدیک شدن، گوش دادن و احترام به انتخاب فرد حرکت کردی. در موقعیت‌های اجتماعی، گاهی همین انعطاف و توجه به شرایط از هر پاسخ آماده‌ای مفیدتره.'
    },
    insight: 'از بیرون ممکنه تنهایی یک نفر رو انتخاب شخصی او بدانیم؛ اما گاهی شروع ارتباط برایش سخته. به‌جای حدس زدن، می‌تونیم راهی محترمانه برای پرسیدن و نزدیک شدن پیدا کنیم.'
  },
  {
    id: 'unanswered-message',
    title: 'پیامی که بی‌جواب ماند',
    short: 'دوستی که پیام تو رو دیده، اما هنوز پاسخی نداده.',
    intro: 'برای دوستت یه پیام مهم فرستادی. پیام رو دیده، اما چند ساعت گذشته و هنوز جوابی نداده.',
    icon: '💌', symbol: '💬', color: '#8c6d9f', tint: '#eee8f3',
    scenes: [
      {
        title: 'سکوت بعد از پیام',
        description: 'چند ساعت از ارسال پیام گذشته. می‌بینی دوستت آنلاین شده و حتی یک استوری هم گذاشته، اما جوابی به تو نداده.',
        question: 'اولین واکنشت چیست؟',
        choices: [
          { text: 'فکر می‌کنم شاید گرفتار باشه و کمی صبر می‌کنم.', tag: 'patient', feedback: 'صبر کردن می‌تونه جلوی نتیجه‌گیری عجولانه رو بگیرد. آنلاین بودن همیشه به معنی آماده بودن برای گفت‌وگو نیست.' },
          { text: 'با خودم می‌گم شاید از من ناراحت شده؛ مستقیم و آرام می‌پرسم.', tag: 'ask', feedback: 'پرسیدن محترمانه می‌تونه ابهام رو کمتر کند. بهتره سؤال باز باشه و طرف مقابل رو متهم نکند.' },
          { text: 'از اینکه جواب نداده ناراحت می‌شوم و پیام تندی می‌فرستم.', tag: 'react', feedback: 'ناراحتی‌ات قابل فهمه، اما پیام تند ممکنه گفت‌وگو رو دشوارتر کند. کمی فاصله گرفتن قبل از پاسخ دادن می‌تونه کمک کند.' }
        ]
      },
      {
        title: 'بالاخره جواب می‌ده',
        description: 'دوستت می‌نویسه: «ببخشید، امروز ذهنم خیلی درگیر بود.» اما توضیح بیشتری نمی‌ده.',
        question: 'چه پاسخی می‌دی؟',
        choices: [
          { text: 'می‌گم اشکالی نداره؛ اگر دوست داشتی درباره‌اش حرف بزنیم.', tag: 'listen', feedback: 'این پاسخ هم ناراحتی تو رو پنهان نمی‌کنه و هم به دوستت فرصت می‌ده در صورت تمایل بیشتر توضیح بدهد.' },
          { text: 'می‌گم من هم از بی‌جواب ماندن پیام ناراحت شدم.', tag: 'honest', feedback: 'بیان حس خودت به شکل روشن و بدون سرزنش، می‌تونه به درک متقابل کمک کند.' },
          { text: 'می‌گم مهم نیست، در حالی که هنوز ناراحتم.', tag: 'hide', feedback: 'گاهی برای جلوگیری از تنش احساسمان رو پنهان می‌کنیم. اما اگر موضوع برایت مهمه، می‌تونی یه وقت مناسب و آرام درباره‌اش حرف بزنی.' }
        ]
      },
      {
        title: 'نیازهای دو طرف',
        description: 'بعداً متوجه می‌شوی دوستت در روزهای شلوغ کمتر به پیام‌ها پاسخ می‌ده. تو هم دوست داری در رابطه‌ها بی‌خبر نمانی.',
        question: 'برای دفعات بعد چه کاری بهتره؟',
        choices: [
          { text: 'راجع به انتظارمان از ارتباط با هم صحبت می‌کنیم.', tag: 'communicate', feedback: 'شفاف کردن انتظارها کمک می‌کنه هر دو نفر بدانند چه چیزی برای دیگری مهمه؛ بدون اینکه قرار باشه همیشه و فوری پاسخ بدهند.' },
          { text: 'تلاش می‌کنم تأخیر در پاسخ رو همیشه شخصی برداشت نکنم.', tag: 'patient', feedback: 'این کار می‌تونه از سوءتفاهم جلوگیری کند. در عین حال، حق داری نیازت به ارتباط روشن و قابل اتکا رو بیان کنی.' },
          { text: 'تصمیم می‌گیرم دیگر هیچ وقت پیام اول رو ندهم.', tag: 'withdraw', feedback: 'این تصمیم شاید در لحظه حس کنترل بدهد، اما ممکنه رابطه رو به رقابت تبدیل کند. بیان نیازها معمولاً راه روشن‌تریه.' }
        ]
      }
    ],
    endings: {
      patient: 'از انتخاب‌هات بیشتر به مکث و در نظر گرفتن احتمال‌های مختلف توجه داشتی. این کار می‌تونه جلوی برداشت‌های عجولانه رو بگیرد؛ البته نیازهای خودت هم مهم‌اند.',
      ask: 'از انتخاب‌هات بیشتر سراغ پرسیدن و روشن کردن ابهام رفتی. گفت‌وگوی مستقیم وقتی با احترام همراه باشه، می‌تونه از حدس و سوءتفاهم کم کند.',
      honest: 'از انتخاب‌هات به بیان صادقانه‌ی احساسات توجه کردی. گفتن ناراحتی بدون حمله یا سرزنش، راهی برای حفظ رابطه و احترام به خوده.',
      communicate: 'از انتخاب‌هات بیشتر به روشن کردن انتظارهای دوطرفه توجه داشتی. رابطه‌ها با گفت‌وگو راجع به نیازها و محدودیت‌های هر دو نفر سالم‌تر می‌شن.',
      balanced: 'در مسیرت هم حس خودت رو دیدی و هم شرایط طرف مقابل رو. ارتباط سالم معمولاً به ترکیبی از صراحت، صبر و احترام نیاز داره.'
    },
    insight: 'یک پیام بی‌جواب می‌تونه ده‌ها معنی داشته باشه. ذهن ما گاهی سریع‌ترین توضیح رو انتخاب می‌کنه، اما پرسیدن محترمانه و بیان احساسات معمولاً از حدس زدن مفیدتره.'
  },
  {
    id: 'hidden-pressure',
    title: 'پشت لبخند همیشگی',
    short: 'کسی که همیشه شوخی می‌کنه، اما این روزها ساکت‌تر شده.',
    intro: 'یکی از هم‌کلاسی‌هات همیشه جمع رو می‌خنداند. چند روزیه کمتر شوخی می‌کنه و بیشتر تنهـه.',
    icon: '🎭', symbol: '💛', color: '#c17e4f', tint: '#f6ebdf',
    scenes: [
      {
        title: 'تغییری کوچک',
        description: 'امروز هم‌کلاسی‌ات برخلاف همیشه ساکته. وقتی از کنارش رد می‌شوی، لبخند کوتاهی می‌زند و می‌گه: «چیزی نیست، خوبم.»',
        question: 'چه واکنشی نشان می‌دی؟',
        choices: [
          { text: 'یه وقت مناسب و خلوت، حالش رو می‌پرسم.', tag: 'checkin', feedback: 'پرسیدن در فضای خلوت می‌تونه فشار پاسخ دادن توی جمع رو کمتر کند. مهمه که برای شنیدن آماده باشی، نه فقط گرفتن یک جواب کوتاه.' },
          { text: 'حرفش رو می‌پذیرم و فعلاً بهش فضا می‌دم.', tag: 'space', feedback: 'احترام به حریم شخصی مهمه. می‌تونی بدون اصرار، نشان بدهی که اگر خواست حرف بزند هستی و می‌تونی کنارش باشی.' },
          { text: 'برای عوض شدن حالش دوباره باهاش شوخی می‌کنم.', tag: 'joke', feedback: 'شوخی گاهی فضا رو سبک می‌کنه، اما همیشه پاسخ مناسبی نیست. بهتره اول ببینی خودش چه نوع همراهی‌ای می‌خواد.' }
        ]
      },
      {
        title: 'یک جمله‌ی نگران‌کننده',
        description: 'توی یه گفت‌وگوی کوتاه می‌گه: «همه فکر می‌کنن چون می‌خندونمشون، هیچ مشکلی ندارم.» بعد مکث می‌کنه.',
        question: 'چه می‌گویی؟',
        choices: [
          { text: 'می‌گم لازم نیست همیشه نقش آدم خوشحال رو بازی کنی.', tag: 'validate', feedback: 'این جمله می‌تونه بهش نشان دهد که برای پذیرفته شدن مجبور نیست همیشه شاد و سرگرم‌کننده باشه.' },
          { text: 'می‌پرسم دوست داره فقط گوش بدهم یا دنبال راه‌حل بگردیم.', tag: 'listen', feedback: 'این سؤال بهش حق انتخاب می‌ده؛ بعضی وقت‌ها فرد به راه‌حل نیاز نداره و فقط می‌خواد شنیده شود.' },
          { text: 'می‌گم همه مشکل دارن و نباید زیادی حساس بود.', tag: 'minimize', feedback: 'مقایسه کردن مشکلات ممکنه احساس او رو کوچک جلوه دهد. حتی اگر قصد دلداری داشته باشیم، شنیدن بدون قضاوت معمولاً کمک‌کننده‌تره.' }
        ]
      },
      {
        title: 'قدم بعدی',
        description: 'او می‌گه مدتیه فشار زیادی رو تجربه می‌کنه، اما هنوز نمی‌دونه می‌خواد درباره‌اش با چه کسی صحبت کند.',
        question: 'چطور همراهی می‌کنی؟',
        choices: [
          { text: 'می‌پرسم چه نوع کمکی برایش مناسب‌تره و به انتخابش احترام می‌ذارم.', tag: 'respect', feedback: 'پرسیدن راجع به نوع کمک، استقلال او رو حفظ می‌کنه. لازم نیست همه چیز رو به تنهایی حل کنی.' },
          { text: 'پیشنهاد می‌دم با یک فرد قابل اعتماد یا متخصص صحبت کند.', tag: 'support', feedback: 'پیشنهاد کمک تخصصی می‌تونه مفید باشه، به‌خصوص وقتی فشار ادامه‌داره. بهتره پیشنهاد رو بدون اجبار مطرح کنی.' },
          { text: 'قول می‌دم همه چیز رو برایش درست می‌کنم.', tag: 'rescue', feedback: 'همدلی ارزشمنده، اما قولی که در توان ما نیست می‌تونه فشار بیشتری ایجاد کند. همراهی صادقانه بهتر از وعده‌ی حل همه‌چیزه.' }
        ]
      }
    ],
    endings: {
      checkin: 'از انتخاب‌هات به توجه و پیگیری محترمانه نزدیک شدی. گاهی یک احوال‌پرسی ساده و بدون فشار، فرصتی برای حرف زدن ایجاد می‌کنه.',
      listen: 'از انتخاب‌هات بیشتر به شنیدن و فهمیدن نیاز فرد توجه داشتی. گوش دادن فعال یعنی اجازه بدهیم فرد تجربه‌اش رو با کلمات خودش بیان کند.',
      validate: 'از انتخاب‌هات تلاش کردی احساس فرد رو معتبر بشماری. لازم نیست برای هر احساسی سریع راه‌حل پیدا کنیم؛ گاهی فهمیده شدن خودش مهمه.',
      respect: 'از انتخاب‌هات به حق انتخاب فرد توجه کردی. همراهی سالم به معنی تصمیم گرفتن به‌جای دیگری نیست.',
      balanced: 'در مسیرت ترکیبی از توجه، شنیدن و احترام به مرزها دیده شد. همراهی مؤثر معمولاً از همین قدم‌های کوچک و واقع‌بینانه شروع می‌شه.'
    },
    insight: 'آدم‌ها همیشه احساسشان رو به شکل واضح نشان نمی‌دن. شوخی، سکوت یا لبخند به‌تنهایی نمی‌تونه حال درونی کسی رو توضیح دهد؛ بهتره با احترام بپرسیم و گوش بدهیم.'
  },
  {
    id: 'financial-stress',
    title: 'فشاری که دیده نمی‌شه',
    short: 'دانشجویی که به خاطر شرایط مالی، از جمع دوستان فاصله می‌گیره.',
    intro: 'یکی از هم‌دانشگاهی‌هات مدتیه در برنامه‌های گروهی شرکت نمی‌کنه و بهانه میاره که سرش شلوغه.',
    icon: '💸', symbol: '🤝', color: '#64806c', tint: '#e8eee6',
    scenes: [
      {
        title: 'دعوت به یک برنامه',
        description: 'دوستان تصمیم گرفته‌اند بعد از کلاس به کافه بروند. هم‌کلاسی‌ات می‌گه: «این بار نمیام، خوش بگذره.»',
        question: 'چه پیشنهادی می‌دی؟',
        choices: [
          { text: 'یک برنامه‌ی کم‌هزینه‌تر مثل قدم زدن پیشنهاد می‌دم.', tag: 'include', feedback: 'پیشنهاد جایگزین می‌تونه امکان حضور رو بیشتر کند، بدون اینکه کسی مجبور شود راجع به شرایط مالی‌اش توضیح بدهد.' },
          { text: 'می‌پرسم دلیل نیامدنش چیست.', tag: 'ask', feedback: 'پرسیدن می‌تونه راه گفت‌وگو رو باز کند، اما بهتره لحن سؤال کنجکاوانه و بدون بازخواست باشه.' },
          { text: 'می‌گم همیشه همین‌طوری برنامه‌ها رو کنسل می‌کنی.', tag: 'blame', feedback: 'سرزنش ممکنه او رو بیشتر از جمع دور کند. شاید مانعی وجود داشته باشه که هنوز درباره‌اش حرف نزده.' }
        ]
      },
      {
        title: 'حرفی که سخت گفته می‌شه',
        description: 'در گفت‌وگویی دونفره می‌گه این روزها هزینه‌های رفت‌وآمد و خوراک برایش سنگین شده و نمی‌خواد کسی متوجه شود.',
        question: 'چه واکنشی نشان می‌دی؟',
        choices: [
          { text: 'از اینکه بهم اعتماد کرده تشکر می‌کنم و بدون قضاوت گوش می‌دم.', tag: 'listen', feedback: 'تشکر از اعتمادش و حفظ محرمانگی می‌تونه احساس امنیت ایجاد کند. لازم نیست برای اثبات همدلی، سؤال‌های زیادی بپرسی.' },
          { text: 'فوراً پیشنهاد می‌دم برایش پول جمع کنیم.', tag: 'help', feedback: 'کمک عملی ممکنه مفید باشه، اما بهتره قبل از هر اقدامی از خودش بپرسی چه کمکی رو می‌پذیره تا احساس شرمندگی یا بی‌اختیاری نکند.' },
          { text: 'می‌گم نباید این موضوع رو از ما پنهان می‌کرد.', tag: 'pressure', feedback: 'ممکنه گفتن این جمله او رو بابت نگفتن موضوع سرزنش‌شده احساس کند. هر کسی زمان و شیوه‌ی خودش رو برای مطرح کردن مسائل شخصی داره.' }
        ]
      },
      {
        title: 'کمکی که محترمانه باشه',
        description: 'او می‌گه شاید بتونه از خدمات حمایتی دانشگاه استفاده کند، اما نمی‌دونه از کجا باید شروع کند.',
        question: 'قدم بعدی چیست؟',
        choices: [
          { text: 'با اجازه‌ی او، کمک می‌کنم مسیرهای رسمی دانشگاه رو پیدا کند.', tag: 'resource', feedback: 'اطلاعات روشن راجع به منابع حمایتی می‌تونه دسترسی رو آسان‌تر کند. بهتره انتخاب نهایی و تصمیم‌گیری در اختیار خودش بماند.' },
          { text: 'بدون اجازه‌اش موضوع رو با چند نفر پیش می‌کشم تا کمکش کنند.', tag: 'privacy', feedback: 'نیت کمک ممکنه خوب باشه، اما انتشار مسئله‌ی شخصی بدون رضایت او می‌تونه اعتمادش رو از بین ببرد.' },
          { text: 'می‌گم هر وقت خودش خواست درباره‌اش حرف بزند، من هستم.', tag: 'respect', feedback: 'این جمله فشار رو کم می‌کنه و اختیار رو به خودش می‌ده. در کنار آن می‌تونی اطلاعات منابع حمایتی رو آماده داشته باشی.' }
        ]
      }
    ],
    endings: {
      include: 'از انتخاب‌هات به فراهم کردن فرصت مشارکت توجه داشتی. گاهی تغییر کوچک در شکل یک برنامه، می‌تونه افراد بیشتری رو توی جمع نگه داره.',
      listen: 'از انتخاب‌هات بیشتر به شنیدن بدون قضاوت توجه کردی. حفظ کرامت و حریم خصوصی، بخش مهمی از هر نوع حمایته.',
      resource: 'از انتخاب‌هات به وصل کردن فرد به منابع کمک توجه داشتی. حمایت مؤثر فقط دلسوزی نیست؛ دسترسی به اطلاعات و خدمات مناسب هم اهمیت داره.',
      respect: 'از انتخاب‌هات به اختیار و زمان‌بندی خود فرد احترام گذاشتی. کمک زمانی محترمانه‌تره که با رضایت و نیاز واقعی فرد هماهنگ باشه.',
      balanced: 'در مسیرت تلاش کردی هم مسئله رو ببینی و هم کرامت و اختیار فرد رو حفظ کنی. حمایت خوب قرار نیست تصمیم رو از فرد بگیرد؛ باید امکان انتخاب‌های بیشتر رو فراهم کند.'
    },
    insight: 'فشار مالی همیشه از ظاهر افراد معلوم نیست. گاهی حذف کردن هزینه‌های کوچک، نرفتن به جمع یا بهانه آوردن می‌تونه راهی برای پنهان کردن شرایط دشوار باشه؛ بدون اینکه لازم باشه راجع به کسی حدس قطعی بزنیم.'
  },
  {
    id: 'group-project',
    title: 'سهمی در کار گروهی',
    short: 'هم‌گروهی‌ای که کمتر مشارکت می‌کنه و بقیه ازش ناراضی‌اند.',
    intro: 'برای یک پروژه‌ی دانشگاهی گروهی انتخاب شده‌اید. یکی از اعضا در جلسه‌ها کم‌حرفه و بخشی از کارها رو دیر تحویل می‌ده.',
    icon: '🧩', symbol: '👥', color: '#987d55', tint: '#f1eddf',
    scenes: [
      {
        title: 'جلسه‌ی پرتنش',
        description: 'دو نفر از اعضای گروه می‌گن: «باید کارهایش رو ازش بگیریم؛ فقط کار رو عقب می‌اندازد.»',
        question: 'تو چه پیشنهادی می‌دی؟',
        choices: [
          { text: 'قبل از تصمیم، در خلوت دلیلش رو می‌پرسم.', tag: 'ask', feedback: 'گفت‌وگوی مستقیم کمک می‌کنه به‌جای حدس زدن، از شرایط واقعی باخبر شوید. بهتره راجع به رفتار مشخص صحبت کنی، نه برچسب زدن.' },
          { text: 'با گروه موافقت می‌کنم تا پروژه عقب نیفتد.', tag: 'speed', feedback: 'نگرانی راجع به زمان پروژه واقعیه، اما حذف کردن یک عضو بدون گفت‌وگو شاید مسئله‌ی اصلی رو حل نکند.' },
          { text: 'از گروه می‌خوام بهش فرصت بیشتری بدهیم.', tag: 'patience', feedback: 'فرصت دادن می‌تونه منصفانه باشه، اما بهتره همراه با توافق روشن راجع به مسئولیت‌ها و زمان تحویل باشه.' }
        ]
      },
      {
        title: 'دلیلی پشت تأخیر',
        description: 'او می‌گه به خاطر کار پاره‌وقت و مسئولیت‌های خونواده، زمان آزاد کمی داره؛ اما از گفتن این موضوع توی جمع خجالت کشیده.',
        question: 'چطور جلو می‌رید؟',
        choices: [
          { text: 'وظایف رو با توجه به زمان واقعی هر نفر دوباره تقسیم می‌کنیم.', tag: 'adapt', feedback: 'بازتنظیم منصفانه‌ی وظایف می‌تونه هم فشار رو کمتر کند و هم مسئولیت گروهی رو حفظ کند.' },
          { text: 'می‌گم همه مشکل دارن؛ باید مثل بقیه کار کند.', tag: 'demand', feedback: 'توجه به مسئولیت مشترک مهمه، اما نادیده گرفتن تفاوت شرایط می‌تونه همکاری رو دشوارتر کند.' },
          { text: 'همه‌ی کارهایش رو خودم انجام می‌دم.', tag: 'rescue', feedback: 'کمک کردن ارزشمنده، اما برداشتن همه‌ی مسئولیت‌ها از دوش یک نفر ممکنه در بلندمدت به خودت و گروه فشار بیاورد.' }
        ]
      },
      {
        title: 'توافق تازه',
        description: 'گروه تصمیم گرفته وظایف رو دوباره تقسیم کند. حالا باید مطمئن شوید همه می‌دونن چه کاری و تا چه زمانی بر عهده دارن.',
        question: 'چه کاری به نظرت مناسب‌تره؟',
        choices: [
          { text: 'وظایف و زمان تحویل رو شفاف و مکتوب می‌کنیم.', tag: 'clarity', feedback: 'شفافیت باعث می‌شه انتظارها برای همه یکسان باشه و اختلاف‌ها کمتر بر پایه‌ی برداشت شخصی شکل بگیرد.' },
          { text: 'فقط به توافق شفاهی اکتفا می‌کنیم.', tag: 'trust', feedback: 'اعتماد مهمه، اما در کار گروهی ثبت توافق‌ها کمک می‌کنه کسی دچار ابهام یا فراموشی نشود.' },
          { text: 'از این به بعد فقط خودم کارها رو مدیریت می‌کنم.', tag: 'control', feedback: 'مدیریت متمرکز شاید کوتاه‌مدت سریع‌تر باشه، اما مشارکت و مسئولیت‌پذیری دیگر اعضا رو کم‌رنگ می‌کنه.' }
        ]
      }
    ],
    endings: {
      ask: 'از انتخاب‌هات قبل از قضاوت، گفت‌وگو رو انتخاب کردی. شنیدن شرایط افراد می‌تونه تصمیم گروه رو دقیق‌تر و منصفانه‌تر کند.',
      adapt: 'از انتخاب‌هات به هماهنگ کردن مسئولیت‌ها با شرایط واقعی توجه داشتی. انعطاف به معنی نادیده گرفتن مسئولیت نیست؛ یعنی پیدا کردن راهی عملی و منصفانه.',
      clarity: 'از انتخاب‌هات به شفافیت و توافق روشن توجه کردی. ارتباط روشن می‌تونه از سوءتفاهم و فشارهای بعدی پیشگیری کند.',
      patience: 'از انتخاب‌هات به فرصت دادن توجه داشتی. صبر وقتی سازنده که همراه با گفت‌وگو و مسئولیت‌های مشخص باشه.',
      balanced: 'در مسیرت سعی کردی هم شرایط فرد رو ببینی و هم نیاز گروه به همکاری و نظم رو حفظ کنی. در کار جمعی، انصاف و شفافیت باید کنار هم باشن.'
    },
    insight: 'کم مشارکت کردن همیشه به معنی بی‌مسئولیتی نیست؛ همان‌طور که داشتن مشکل هم مسئولیت مشترک رو از بین نمی‌برد. گفت‌وگوی روشن و تقسیم منصفانه‌ی کار می‌تونه هر دو موضوع رو جدی بگیرد.'
  }
];

const $ = (selector) => document.querySelector(selector);
const homeScreen = $('#homeScreen');
const storyScreen = $('#storyScreen');
const resultScreen = $('#resultScreen');
let activeStory = null;
let currentStep = 0;
let chosen = [];
let selectedChoice = null;

function showScreen(screen) {
  [homeScreen, storyScreen, resultScreen].forEach((item) => {
    item.classList.remove('active');
    item.hidden = item !== screen;
  });
  screen.hidden = false;
  requestAnimationFrame(() => screen.classList.add('active'));
  $('#app').focus({ preventScroll: true });
}

function renderStoryCards() {
  const grid = $('#storyGrid');
  grid.innerHTML = stories.map((story, index) => `
    <button class="story-card" type="button" data-story="${story.id}" style="--card-color:${story.color};--card-tint:${story.tint}" aria-label="شروع داستان ${story.title}">
      <span class="story-card-top"><span class="story-icon" aria-hidden="true">${story.icon}</span><span class="story-duration">۱ تا ۳ دقیقه</span></span>
      <div class="story-card-copy"><h3>${story.title}</h3><p>${story.short}</p></div>
      <span class="story-card-bottom"><span>ورود به داستان</span><span class="story-arrow" aria-hidden="true">←</span></span>
    </button>
  `).join('');
  grid.querySelectorAll('[data-story]').forEach((button) => {
    button.addEventListener('click', () => startStory(button.dataset.story));
  });
}

function startStory(storyId) {
  activeStory = stories.find((story) => story.id === storyId);
  if (!activeStory) return;
  currentStep = 0;
  chosen = [];
  selectedChoice = null;
  $('#storyTitle').textContent = activeStory.title;
  $('#storyIntro').textContent = activeStory.intro;
  $('#storyIllustration').style.background = activeStory.tint;
  $('#storyIllustration').querySelector('.illustration-symbol').textContent = activeStory.symbol;
  $('#storyIllustration').querySelector('.illustration-symbol').style.color = activeStory.color;
  $('#storyCounter').textContent = `داستان ${stories.indexOf(activeStory) + 1} از ${stories.length}`;
  renderScene();
  showScreen(storyScreen);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderScene() {
  const scene = activeStory.scenes[currentStep];
  const total = activeStory.scenes.length;
  selectedChoice = null;
  $('#stepLabel').textContent = `موقعیت ${['اول', 'دوم', 'سوم', 'چهارم'][currentStep] || currentStep + 1}`;
  $('#progressText').textContent = `${currentStep + 1} از ${total}`;
  $('#progressBar').style.width = `${((currentStep + 1) / total) * 100}%`;
  $('#sceneTitle').textContent = scene.title;
  $('#sceneDescription').textContent = scene.description;
  $('#decisionQuestion').textContent = scene.question;
  $('#feedbackPanel').hidden = true;
  $('#choiceList').hidden = false;
  $('#choiceList').innerHTML = scene.choices.map((choice, index) => `
    <button class="choice-button" type="button" data-choice="${index}">
      <span class="choice-letter">${['الف', 'ب', 'پ'][index]}</span><span>${choice.text}</span>
    </button>
  `).join('');
  $('#choiceList').querySelectorAll('[data-choice]').forEach((button) => {
    button.addEventListener('click', () => selectChoice(Number(button.dataset.choice)));
  });
}

function selectChoice(index) {
  if (selectedChoice !== null) return;
  const scene = activeStory.scenes[currentStep];
  const choice = scene.choices[index];
  if (!choice) return;
  selectedChoice = index;
  chosen.push({ scene: scene.title, text: choice.text, tag: choice.tag });
  $('#choiceList').querySelectorAll('button').forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === index) button.classList.add('selected');
  });
  $('#feedbackText').textContent = choice.feedback;
  $('#feedbackPanel').hidden = false;
  $('#continueBtn').textContent = currentStep === activeStory.scenes.length - 1 ? 'دیدن جمع‌بندی داستان' : 'ادامه داستان';
  $('#feedbackPanel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function getEnding() {
  const counts = {};
  chosen.forEach((choice) => { counts[choice.tag] = (counts[choice.tag] || 0) + 1; });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (!sorted.length || sorted[0][1] === 1) return activeStory.endings.balanced;
  return activeStory.endings[sorted[0][0]] || activeStory.endings.balanced;
}

function showResult() {
  $('#resultTitle').textContent = 'حالا یه کم بهتر می‌تونی دنیای اون رو ببینی.';
  $('#resultIntro').textContent = `تو داستان «${activeStory.title}» رو با ${chosen.length} تصمیم به پایان رساندی. در هر موقعیت، یک زاویه‌ی تازه برای نگاه کردن وجود داشت.`;
  $('#resultInsight').textContent = `${getEnding()} ${activeStory.insight}`;
  $('#choiceRecap').innerHTML = chosen.map((choice, index) => `
    <div class="recap-row"><span>تصمیم ${index + 1}: ${choice.scene}</span><b>${choice.text}</b></div>
  `).join('');
  showScreen(resultScreen);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
  showScreen(homeScreen);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('#continueBtn').addEventListener('click', () => {
  if (currentStep < activeStory.scenes.length - 1) {
    currentStep += 1;
    renderScene();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    showResult();
  }
});
$('#backHome').addEventListener('click', goHome);
$('#allStoriesBtn').addEventListener('click', goHome);
$('#replayBtn').addEventListener('click', () => startStory(activeStory.id));
$('#brandHome').addEventListener('click', (event) => { event.preventDefault(); goHome(); });
$('#footerHome').addEventListener('click', (event) => { event.preventDefault(); goHome(); });
$('#exploreBtn').addEventListener('click', (event) => {
  event.preventDefault();
  $('#stories').scrollIntoView({ behavior: 'smooth' });
});

// حالت روشن و تاریک؛ انتخاب کاربر روی همین دستگاه ذخیره می‌شود.
const themeToggle = $('#themeToggle');
const themeIcon = $('#themeIcon');
const themeLabel = $('#themeLabel');
const themeColorMeta = $('#themeColorMeta');

function applyTheme(theme, save = true) {
  const isDark = theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  if (themeIcon) themeIcon.textContent = isDark ? '☀️' : '🌙';
  if (themeLabel) themeLabel.textContent = isDark ? 'حالت روز' : 'حالت شب';
  if (themeToggle) {
    themeToggle.setAttribute('aria-pressed', String(isDark));
    themeToggle.setAttribute('aria-label', isDark ? 'روشن کردن حالت روشن' : 'روشن کردن حالت تاریک');
  }
  if (themeColorMeta) themeColorMeta.setAttribute('content', isDark ? '#101a20' : '#f5f4ef');
  if (save) {
    try { localStorage.setItem('yek-daghighe-theme', isDark ? 'dark' : 'light'); } catch (error) { /* ذخیره‌سازی اختیاریه */ }
  }
}

let initialTheme = document.documentElement.dataset.theme;
if (initialTheme !== 'dark' && initialTheme !== 'light') {
  try { initialTheme = localStorage.getItem('yek-daghighe-theme'); } catch (error) { initialTheme = null; }
}
if (initialTheme !== 'dark' && initialTheme !== 'light') {
  initialTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
applyTheme(initialTheme, false);
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

renderStoryCards();
