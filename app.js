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
        title: 'تنهایی توی حیاط دانشگاه',
        description: 'زنگ تفریحه. سارا یه کم اون‌طرف‌تر روی نیمکت نشسته و با گوشیش ور می‌ره. چند نفر از هم‌کلاسی‌هات هم کنارت وایسادن.',
        question: 'تو چه کار می‌کنی؟',
        choices: [
          { text: 'می‌رم سمتش و دوستانه سلام می‌کنم.', tag: 'connect', feedback: 'یه سلام ساده می‌تونه شروع آشنایی رو براش راحت‌تر کنه. شاید سارا هنوز حوصله‌ی یه گفت‌وگوی طولانی رو نداشته باشه، اما همین سلام کوتاه می‌تونه راه رو برای آشنایی باز کنه.' },
          { text: 'از دور نگاه می‌کنم؛ شاید خودش دوست داره تنها باشه.', tag: 'observe', feedback: 'شاید سارا واقعاً دلش بخواد یه کم تنها باشه. اشکالی نداره بهش فضا بدی، فقط یادت باشه از روی ظاهرش نمی‌تونی مطمئن بشی چه حسی داره.' },
          { text: 'کاری نمی‌کنم؛ بالاخره خودش با کسی آشنا می‌شه.', tag: 'wait', feedback: 'گاهی آشنایی خودش اتفاق می‌افته، اما برای کسی که تازه وارد یه جمع شده، شروع کردن آسون نیست. یه دعوت ساده از طرف تو شاید کلی فرق ایجاد کنه.' }
        ]
      },
      {
        title: 'یه شوخی ناراحت‌کننده',
        description: 'توی کلاس، یکی از بچه‌ها لهجه‌ی سارا رو تقلید می‌کنه و چند نفر می‌خندن. سارا یه لبخند زورکی می‌زنه، اما دیگه چیزی نمی‌گه.',
        question: 'تو چه واکنشی نشون می‌دی؟',
        choices: [
          { text: 'آرام می‌گم که این شوخی شاید براش خوشایند نباشه.', tag: 'support', feedback: 'اگه آروم و محترمانه بگی این شوخی شاید ناراحتش کرده، هم ازش حمایت کردی هم نذاشتی ماجرا به دعوا بکشه.' },
          { text: 'بعد از کلاس، خصوصی از سارا می‌پرسم که حالش خوبه یا نه.', tag: 'listen', feedback: 'وقتی خلوت ازش می‌پرسی حالش چطوره، راحت‌تر می‌تونه از حسش بگه. فقط حواست باشه واقعاً به حرفش گوش بدی، نه اینکه خودت به جاش تصمیم بگیری.' },
          { text: 'چیزی نمی‌گم؛ نمی‌خوام بحث درست بشه.', tag: 'silent', feedback: 'می‌فهمم که شاید نخوای بحث راه بیفته، اما سکوت جمع ممکنه باعث بشه سارا حس کنه تنها مونده. حتی عوض کردن محترمانه‌ی بحث هم می‌تونه کمکش کنه.' }
        ]
      },
      {
        title: 'دعوتی که رد می‌شه',
        description: 'چند روز بعد از سارا دعوت می‌کنی باهاتون ناهار بیاد. تشکر می‌کنه، اما می‌گه امروز دلش می‌خواد تنها باشه.',
        question: 'حالا چه می‌کنی؟',
        choices: [
          { text: 'به تصمیمش احترام می‌ذارم و می‌گم هر وقت دلش خواست، خوشحال می‌شیم باهامون بیاد.', tag: 'respect', feedback: 'این‌طوری به خواسته‌اش احترام گذاشتی و در عین حال بهش فهموندی که هنوز جاش توی جمع شما خالیه. می‌تونی یه وقت دیگه، بدون اصرار، دوباره دعوتش کنی.' },
          { text: 'اصرار می‌کنم تنها نمونه؛ شاید بعداً خوشش بیاد.', tag: 'insist', feedback: 'شاید نیتت کمک کردن باشه، اما اصرار ممکنه حس کنه حق انتخاب نداره. حمایت وقتی بهتر جواب می‌ده که بذاری خودش هم تصمیم بگیره.' },
          { text: 'دیگه دعوتش نمی‌کنم تا خودش پیش‌قدم بشه.', tag: 'withdraw', feedback: 'اینکه دیگه دعوتش نکنی شاید از این باشه که نمی‌خوای مزاحمش بشی، اما ممکنه فرصت آشنایی رو هم از بین ببره. می‌تونی به خواسته‌اش احترام بذاری و در عین حال راه ارتباط رو باز نگه داری.' }
        ]
      }
    ],
    endings: {
      connect: 'از انتخاب‌هات معلومه که دوست داری برای شروع ارتباط پیش‌قدم بشی. این کار می‌تونه فرصت آشنایی رو بیشتر کنه؛ فقط یادت نره به خواسته و حد و مرز طرف مقابل هم توجه کنی.',
      observe: 'از انتخاب‌هات معلومه قبل از واکنش، یه کم مکث می‌کنی و سعی می‌کنی ماجرا رو از بیرون ببینی. این خوبه؛ فقط گاهی بهتره به‌جای حدس زدن، محترمانه سؤال هم بپرسی.',
      support: 'از انتخاب‌هات معلومه برات مهمه از بقیه حمایت کنی و فضا رو براشون امن‌تر کنی. بهترین حمایت همونیه که با احترام و گوش دادن همراه باشه.',
      respect: 'از انتخاب‌هات معلومه به حق انتخاب و حد و مرز بقیه احترام می‌ذاری. همین رفتار کمک می‌کنه رابطه‌ها بدون فشار و سالم‌تر پیش برن.',
      balanced: 'تو این داستان سعی کردی هم به طرف نزدیک بشی، هم به حرفش گوش بدی و هم به انتخابش احترام بذاری. خیلی وقت‌ها همین انعطاف از هر جواب آماده‌ای بهتره.'
    },
    insight: 'از بیرون شاید فکر کنیم یکی خودش تنهایی رو انتخاب کرده، اما گاهی فقط بلد نیست چطور سر صحبت رو باز کنه. به‌جای حدس زدن، می‌تونیم با احترام از خودش بپرسیم و راهی برای نزدیک شدن پیدا کنیم.'
  },
  {
    id: 'unanswered-message',
    title: 'پیامی که بی‌جواب موند',
    short: 'دوستی که پیامت رو دیده، اما هنوز جوابت رو نداده.',
    intro: 'برای دوستت یه پیام مهم فرستادی. پیام رو دیده، اما چند ساعته گذشته و هنوز جوابی نداده.',
    icon: '💌', symbol: '💬', color: '#8c6d9f', tint: '#eee8f3',
    scenes: [
      {
        title: 'سکوت بعد از پیام',
        description: 'چند ساعت از ارسال پیام گذشته. می‌بینی دوستت آنلاین شده و حتی یه استوری هم گذاشته، اما جوابی به تو نداده.',
        question: 'اولین واکنشت چیه؟',
        choices: [
          { text: 'فکر می‌کنم شاید گرفتار باشه و کمی صبر می‌کنم.', tag: 'patient', feedback: 'یه کم صبر کردن کمک می‌کنه زود قضاوت نکنی. اینکه دوستت آنلاینه، لزوماً یعنی وقت و حوصله‌ی جواب دادن داره؟ نه همیشه.' },
          { text: 'با خودم می‌گم شاید از من ناراحت شده؛ مستقیم و آرام می‌پرسم.', tag: 'ask', feedback: 'اگه آروم و محترمانه بپرسی، شاید سوءتفاهم برطرف بشه. فقط جوری سؤال کن که طرف مقابل حس نکنه داری متهمش می‌کنی.' },
          { text: 'از اینکه جواب نداده ناراحت می‌شم و یه پیام تند می‌فرستم.', tag: 'react', feedback: 'حق داری ناراحت بشی، اما پیام تند ممکنه اوضاع رو بدتر کنه. بهتره قبل از جواب دادن یه کم آروم بشی و بعد تصمیم بگیری چی بگی.' }
        ]
      },
      {
        title: 'بالاخره جواب می‌ده',
        description: 'دوستت می‌نویسه: «ببخشید، امروز ذهنم خیلی درگیر بود.» اما توضیح بیشتری نمی‌ده.',
        question: 'چه پاسخی می‌دی؟',
        choices: [
          { text: 'می‌گم اشکالی نداره؛ اگر دوست داشتی درباره‌اش حرف بزنیم.', tag: 'listen', feedback: 'با این جواب نه احساست رو پنهون کردی، نه به دوستت فشار آوردی. اگه خودش بخواد، فرصت داره بیشتر توضیح بده.' },
          { text: 'می‌گم منم از اینکه جوابم رو ندادی ناراحت شدم.', tag: 'honest', feedback: 'وقتی بدون سرزنش از حس خودت می‌گی، دوستت هم راحت‌تر می‌فهمه چه چیزی ناراحتت کرده.' },
          { text: 'می‌گم مهم نیست، در حالی که هنوز ناراحتم.', tag: 'hide', feedback: 'گاهی برای اینکه بحث نشه، ناراحتی‌مون رو پنهون می‌کنیم. اما اگه این موضوع برات مهمه، یه وقت آروم و مناسب درباره‌اش حرف بزن.' }
        ]
      },
      {
        title: 'نیازهای دو طرف',
        description: 'بعداً می‌فهمی دوستت وقتی سرش شلوغه، کمتر جواب پیام‌ها رو می‌ده. از اون طرف، تو هم دوست نداری توی رابطه‌ها بی‌خبر بمونی.',
        question: 'دفعه‌ی بعد چی کار می‌کنی؟',
        choices: [
          { text: 'درباره‌ی چیزی که از ارتباطمون انتظار داریم با هم حرف می‌زنیم.', tag: 'communicate', feedback: 'وقتی درباره‌ی انتظار‌هامون حرف می‌زنیم، هر دومون می‌فهمیم چی برامون مهمه؛ بدون اینکه از هم انتظار داشته باشیم همیشه و فوری جواب بدیم.' },
          { text: 'سعی می‌کنم هر بار دیر جواب دادن رو به خودم نگیرم.', tag: 'patient', feedback: 'این کار جلوی خیلی از سوءتفاهم‌ها رو می‌گیره. البته تو هم حق داری درباره‌ی چیزی که از رابطه می‌خوای حرف بزنی.' },
          { text: 'تصمیم می‌گیرم دیگه هیچ‌وقت من اول پیام ندم.', tag: 'withdraw', feedback: 'شاید این تصمیم همون لحظه بهت حس خوبی بده، اما ممکنه رابطه رو تبدیل به یه جور لجبازی کنه. بهتره به‌جاش درباره‌ی چیزی که ناراحتت کرده حرف بزنی.' }
        ]
      }
    ],
    endings: {
      patient: 'از انتخاب‌هات معلومه قبل از قضاوت، به احتمال‌های دیگه هم فکر می‌کنی. این کار جلوی خیلی از برداشت‌های عجولانه رو می‌گیره؛ فقط یادت نره نیازهای خودت هم مهمن.',
      ask: 'از انتخاب‌هات معلومه ترجیح می‌دی به‌جای حدس زدن، سؤال کنی و موضوع رو روشن کنی. گفت‌وگوی مستقیم و محترمانه معمولاً خیلی بهتر از سوءتفاهمه.',
      honest: 'از انتخاب‌هات معلومه برات مهمه احساست رو صادقانه بگی. می‌شه ناراحتیت رو گفت، بدون اینکه به طرف مقابل حمله کنی یا سرزنشش کنی.',
      communicate: 'از انتخاب‌هات معلومه دوست داری هر دو طرف بدونن از هم چی می‌خوان و چه محدودیت‌هایی دارن. رابطه با همین گفت‌وگوها سالم‌تر می‌شه.',
      balanced: 'تو این داستان هم حواست به احساس خودت بود، هم شرایط دوستت. رابطه‌ی خوب به همین سه چیز نیاز داره: رک بودن، صبر و احترام.'
    },
    insight: 'یه پیام بی‌جواب می‌تونه کلی دلیل داشته باشه. ذهن ما سریع می‌ره سراغ بدترین احتمال، اما خیلی وقت‌ها بهتره محترمانه بپرسیم و از حس خودمون بگیم، نه اینکه حدس بزنیم.'
  },
  {
    id: 'hidden-pressure',
    title: 'پشت اون لبخند همیشگی',
    short: 'کسی که همیشه شوخی می‌کنه، اما این روزها ساکت‌تر شده.',
    intro: 'یکی از هم‌کلاسی‌هات همیشه جمع رو می‌خندونه، اما چند روزیه کمتر شوخی می‌کنه و بیشتر تنهاست.',
    icon: '🎭', symbol: '💛', color: '#c17e4f', tint: '#f6ebdf',
    scenes: [
      {
        title: 'یه تغییر کوچیک',
        description: 'امروز هم‌کلاسی‌ات برخلاف همیشه ساکته. وقتی از کنارش رد می‌شی، یه لبخند کوچیک می‌زنه و می‌گه: «چیزی نیست، خوبم.»',
        question: 'چه واکنشی نشون می‌دی؟',
        choices: [
          { text: 'یه وقت مناسب و خلوت، حالش رو می‌پرسم.', tag: 'checkin', feedback: 'وقتی خلوت حالش رو می‌پرسی، مجبور نیست جلوی بقیه جواب بده. مهم‌تر از سؤال پرسیدن اینه که واقعاً آماده باشی به حرفش گوش بدی.' },
          { text: 'حرفش رو می‌پذیرم و فعلاً بهش فضا می‌دم.', tag: 'space', feedback: 'احترام گذاشتن به حریمش خیلی مهمه. می‌تونی بدون اصرار بهش بگی هر وقت خواست حرف بزنه، تو هستی و می‌تونه روت حساب کنه.' },
          { text: 'برای عوض شدن حالش دوباره باهاش شوخی می‌کنم.', tag: 'joke', feedback: 'شوخی گاهی حال آدم رو بهتر می‌کنه، اما نه همیشه. اول ببین خودش دوست داره چطور کنارش باشی.' }
        ]
      },
      {
        title: 'یه جمله که آدم رو نگران می‌کنه',
        description: 'توی یه گفت‌وگوی کوتاه می‌گه: «همه فکر می‌کنن چون می‌خندونمشون، هیچ مشکلی ندارم.» بعد مکث می‌کنه.',
        question: 'چی بهش می‌گی؟',
        choices: [
          { text: 'می‌گم لازم نیست همیشه نقش آدم خوشحال رو بازی کنی.', tag: 'validate', feedback: 'با این حرف بهش می‌فهمونی لازم نیست برای دوست‌داشتنی بودن، همیشه بقیه رو بخندونه و نقش آدم خوشحال رو بازی کنه.' },
          { text: 'می‌پرسم دوست داره فقط به حرفاش گوش بدم یا با هم دنبال راه‌حل بگردیم.', tag: 'listen', feedback: 'با این سؤال حق انتخاب رو به خودش می‌دی. بعضی وقت‌ها آدم دنبال راه‌حل نیست؛ فقط می‌خواد یکی به حرفاش گوش بده.' },
          { text: 'می‌گم همه مشکل دارن و نباید زیادی حساس بود.', tag: 'minimize', feedback: 'وقتی مشکلش رو با بقیه مقایسه می‌کنی، ممکنه حس کنه داری ناراحتیش رو بی‌اهمیت می‌دونی. حتی وقتی قصد دلداری داری، بهتره اول بدون قضاوت به حرفش گوش بدی.' }
        ]
      },
      {
        title: 'قدم بعدی',
        description: 'می‌گه یه مدته فشار زیادی رو تحمل می‌کنه، اما هنوز نمی‌دونه با کی درباره‌اش حرف بزنه.',
        question: 'چطور همراهی می‌کنی؟',
        choices: [
          { text: 'ازش می‌پرسم چه کمکی از دستم برمیاد و به انتخابش احترام می‌ذارم.', tag: 'respect', feedback: 'وقتی ازش می‌پرسی چه کمکی می‌خواد، بهش اجازه می‌دی خودش هم تصمیم بگیره. قرار نیست همه‌چیز رو تنهایی حل کنی.' },
          { text: 'پیشنهاد می‌دم با یه آدم قابل اعتماد یا مشاور حرف بزنه.', tag: 'support', feedback: 'اگه این فشار مدتیه ادامه داره، صحبت با یه آدم قابل اعتماد یا متخصص می‌تونه کمک‌کننده باشه. فقط پیشنهادت رو بهش تحمیل نکن.' },
          { text: 'قول می‌دم همه‌چی رو براش درست می‌کنم.', tag: 'rescue', feedback: 'همدلی خیلی خوبه، اما وقتی قولی می‌دی که از عهده‌اش برنمیای، ممکنه فشار بیشتری درست کنی. بهتره صادقانه کنارش باشی تا اینکه قول حل همه‌چی رو بدی.' }
        ]
      }
    ],
    endings: {
      checkin: 'از انتخاب‌هات معلومه حواست به حال بقیه هست و می‌خوای محترمانه پیگیرشون باشی. گاهی یه احوال‌پرسی ساده، بدون هیچ فشاری، فرصت حرف زدن رو فراهم می‌کنه.',
      listen: 'از انتخاب‌هات معلومه خوب گوش دادن برات مهمه. یعنی به طرف فرصت بدی با زبون خودش از چیزی که تجربه کرده حرف بزنه، بدون اینکه وسط حرفش بپری یا قضاوتش کنی.',
      validate: 'از انتخاب‌هات معلومه سعی کردی احساسش رو جدی بگیری. لازم نیست برای هر مشکلی فوری راه‌حل پیدا کنی؛ بعضی وقت‌ها همین که آدم حس کنه درکش می‌کنن، خیلی ارزش داره.',
      respect: 'از انتخاب‌هات معلومه به حق انتخاب طرف مقابل احترام می‌ذاری. همراه بودن یعنی کنارش باشی، نه اینکه به‌جاش تصمیم بگیری.',
      balanced: 'تو این داستان هم حواست به حالش بود، هم به حرفاش گوش دادی و هم به حد و مرزش احترام گذاشتی. همراهی خوب معمولاً از همین کارای کوچیک شروع می‌شه.'
    },
    insight: 'آدما همیشه حال واقعیشون رو نشون نمی‌دن. نه شوخی کردن، نه ساکت بودن و نه حتی لبخند زدن، به‌تنهایی نمی‌گه توی دل یه نفر چه خبره. بهتره به‌جای حدس زدن، با احترام حالش رو بپرسیم و به حرفش گوش بدیم.'
  },
  {
    id: 'financial-stress',
    title: 'فشاری که دیده نمی‌شه',
    short: 'دانشجویی که به خاطر پول و مخارج، کم‌کم از جمع دوستاش فاصله می‌گیره.',
    intro: 'یکی از هم‌دانشگاهی‌هات یه مدته توی برنامه‌های گروهی نمیاد و هر بار می‌گه سرش شلوغه.',
    icon: '💸', symbol: '🤝', color: '#64806c', tint: '#e8eee6',
    scenes: [
      {
        title: 'دعوت برای یه دورهمی',
        description: 'بچه‌ها تصمیم می‌گیرن بعد از کلاس برن کافه. هم‌کلاسی‌ات می‌گه: «این بار نمیام، خوش بگذره.»',
        question: 'چه پیشنهادی می‌دی؟',
        choices: [
          { text: 'یه برنامه‌ی کم‌خرج‌تر، مثلاً قدم زدن، پیشنهاد می‌دم.', tag: 'include', feedback: 'با این کار می‌تونه کنار جمع باشه، بدون اینکه مجبور بشه درباره‌ی وضعیت مالی‌اش توضیح بده یا خجالت بکشه.' },
          { text: 'ازش می‌پرسم چرا نمیاد.', tag: 'ask', feedback: 'پرسیدن می‌تونه سر صحبت رو باز کنه، فقط حواست باشه لحن سؤال‌هات شبیه بازخواست نباشه.' },
          { text: 'می‌گم همیشه همین‌طوری برنامه‌ها رو کنسل می‌کنی.', tag: 'blame', feedback: 'سرزنش کردن ممکنه بیشتر از جمع دورش کنه. شاید دلیلی داره که هنوز نتونسته درباره‌اش حرف بزنه.' }
        ]
      },
      {
        title: 'حرفی که سخت گفته می‌شه',
        description: 'وقتی دوتایی حرف می‌زنید، می‌گه این روزها خرج رفت‌وآمد و غذا براش خیلی زیاد شده و دوست نداره کسی از این موضوع باخبر بشه.',
        question: 'چه واکنشی نشون می‌دی؟',
        choices: [
          { text: 'از اینکه بهم اعتماد کرده تشکر می‌کنم و بدون قضاوت گوش می‌دم.', tag: 'listen', feedback: 'وقتی از اعتمادش تشکر می‌کنی و حرفش رو پیش کسی نمی‌زنی، بهش حس امنیت می‌دی. لازم نیست برای نشون دادن همدلیت کلی سؤال ازش بپرسی.' },
          { text: 'همون اول پیشنهاد می‌دم براش پول جمع کنیم.', tag: 'help', feedback: 'کمک مالی شاید به دردش بخوره، اما قبلش از خودش بپرس اصلاً چه کمکی رو قبول می‌کنه. شاید این‌طوری کمتر معذب بشه و حس کنه هنوز اختیار دست خودشه.' },
          { text: 'می‌گم نباید این موضوع رو از ما قایم می‌کردی.', tag: 'pressure', feedback: 'این حرف ممکنه باعث بشه بابت نگفتن موضوع بیشتر خجالت بکشه. هر کسی برای گفتن مسائل شخصی، زمان و روش خودش رو داره.' }
        ]
      },
      {
        title: 'کمکی که محترمانه باشه',
        description: 'می‌گه شاید بتونه از کمک‌های دانشگاه استفاده کنه، اما نمی‌دونه باید از کجا شروع کنه.',
        question: 'قدم بعدی چیه؟',
        choices: [
          { text: 'با اجازه‌ی خودش، کمک می‌کنم ببینیم دانشگاه چه کمک‌هایی براش داره.', tag: 'resource', feedback: 'وقتی راه‌های کمک گرفتن رو بهش نشون بدی، پیدا کردنشون براش راحت‌تر می‌شه. فقط تصمیم آخر رو بذار خودش بگیره.' },
          { text: 'بدون اجازه‌اش به چند نفر می‌گم تا شاید بتونن کمکش کنن.', tag: 'privacy', feedback: 'شاید قصدت کمک باشه، اما وقتی بدون اجازه‌اش موضوع شخصی‌ش رو برای بقیه تعریف می‌کنی، ممکنه اعتمادش رو از دست بدی.' },
          { text: 'بهش می‌گم هر وقت خواست درباره‌اش حرف بزنه، من هستم.', tag: 'respect', feedback: 'با این حرف بهش فشار نمیاری و تصمیم رو به خودش می‌سپری. در کنارش می‌تونی اطلاعات کمک‌های دانشگاه رو هم براش پیدا کنی.' }
        ]
      }
    ],
    endings: {
      include: 'از انتخاب‌هات معلومه دوست داری همه بتونن توی جمع حضور داشته باشن. گاهی با یه تغییر کوچیک توی برنامه، می‌شه کاری کرد که هیچ‌کس به خاطر هزینه‌ها از جمع جا نمونه.',
      listen: 'از انتخاب‌هات معلومه به‌جای قضاوت، سعی کردی حرفش رو بشنوی. احترام به حریم شخصی و عزت نفس آدم‌ها، بخش مهم هر نوع کمکیه.',
      resource: 'از انتخاب‌هات معلومه فقط به دلسوزی اکتفا نکردی و دنبال راه واقعی کمک گشتی. گاهی نشون دادن مسیر درستِ کمک گرفتن، از هر حرفی مفیدتره.',
      respect: 'از انتخاب‌هات معلومه به خواسته و زمان خودش احترام گذاشتی. کمک وقتی ارزشمندتره که طرف مقابل هم بخواد و بهش نیاز داشته باشه.',
      balanced: 'تو این داستان سعی کردی هم مشکلش رو ببینی و هم احترام و اختیارش رو حفظ کنی. کمک کردن یعنی راه رو براش بازتر کنی، نه اینکه به‌جاش تصمیم بگیری.'
    },
    insight: 'از ظاهر آدما همیشه نمی‌شه فهمید از نظر مالی چه شرایطی دارن. گاهی نرفتن به جمع یا بهونه آوردن فقط راهیه برای اینکه کسی متوجه سختی‌هاشون نشه. پس بهتره زود قضاوت نکنیم و به‌جاش با احترام سؤال کنیم.'
  },
  {
    id: 'group-project',
    title: 'وقتی کار گروهی گره می‌خوره',
    short: 'یکی از هم‌گروهی‌هات کمتر کار می‌کنه و بقیه از دستش ناراضی‌ان.',
    intro: 'برای یه پروژه‌ی دانشگاهی گروهی انتخاب شدین. یکی از بچه‌های گروه توی جلسه‌ها کم‌حرفه و بعضی از کارهاش رو هم دیر تحویل می‌ده.',
    icon: '🧩', symbol: '👥', color: '#987d55', tint: '#f1eddf',
    scenes: [
      {
        title: 'جلسه‌ی پرتنش',
        description: 'دو نفر از بچه‌های گروه می‌گن: «باید کارهاش رو ازش بگیریم؛ فقط پروژه رو عقب می‌ندازه.»',
        question: 'تو چه پیشنهادی می‌دی؟',
        choices: [
          { text: 'قبل از تصمیم، در خلوت دلیلش رو می‌پرسم.', tag: 'ask', feedback: 'اگه مستقیم و آروم باهاش حرف بزنی، به‌جای حدس زدن می‌فهمی واقعاً چه خبره. بهتره درباره‌ی کاری که انجام نداده حرف بزنی، نه اینکه بهش برچسب بزنی.' },
          { text: 'با گروه موافقت می‌کنم تا پروژه عقب نیفتد.', tag: 'speed', feedback: 'نگرانی بابت عقب افتادن پروژه طبیعیه، اما کنار گذاشتن یه نفر بدون اینکه دلیلش رو بدونین، شاید مشکل اصلی رو حل نکنه.' },
          { text: 'از گروه می‌خوام بهش فرصت بیشتری بدهیم.', tag: 'patience', feedback: 'فرصت دادن کار خوبیه، اما بهتره دقیق مشخص کنین هرکس چه کاری رو تا چه زمانی باید تحویل بده.' }
        ]
      },
      {
        title: 'دلیلی پشت تأخیر',
        description: 'توضیح می‌ده که به خاطر کار نیمه‌وقت و مسئولیت‌های خونواده، وقت آزاد زیادی نداره و از گفتن این موضوع جلوی بقیه خجالت می‌کشیده.',
        question: 'حالا چی کار می‌کنین؟',
        choices: [
          { text: 'کارها رو با توجه به وقتی که هرکدوم داریم، دوباره تقسیم می‌کنیم.', tag: 'adapt', feedback: 'اگه کارها رو منصفانه‌تر تقسیم کنین، هم فشار از روی دوشش کمتر می‌شه، هم مسئولیتش توی گروه سر جاش می‌مونه.' },
          { text: 'می‌گم همه مشکل دارن؛ اونم باید مثل بقیه کارش رو انجام بده.', tag: 'demand', feedback: 'درسته که همه باید مسئولیتشون رو انجام بدن، اما اگه شرایط متفاوت آدما رو نبینی، همکاری سخت‌تر می‌شه.' },
          { text: 'همه‌ی کاراش رو خودم انجام می‌دم.', tag: 'rescue', feedback: 'کمک کردن خوبه، اما اگه همه‌ی کارهاش رو خودت انجام بدی، هم خودت خسته می‌شی هم اون هیچ فرصتی برای انجام مسئولیتش پیدا نمی‌کنه.' }
        ]
      },
      {
        title: 'توافق تازه',
        description: 'گروه تصمیم گرفته کارها رو دوباره تقسیم کنه. حالا باید مشخص بشه هرکس دقیقاً چه کاری رو تا چه زمانی انجام می‌ده.',
        question: 'به نظرت کدوم کار بهتره؟',
        choices: [
          { text: 'مشخص می‌کنیم هرکس چه کاری رو تا چه تاریخی تحویل بده و همه‌چیز رو می‌نویسیم.', tag: 'clarity', feedback: 'وقتی همه‌چیز روشن و نوشته شده باشه، هرکس می‌دونه مسئول چه کاریه و بعداً هم سوءتفاهم کمتری پیش میاد.' },
          { text: 'فقط شفاهی با هم توافق می‌کنیم و چیزی نمی‌نویسیم.', tag: 'trust', feedback: 'اعتماد بین اعضای گروه مهمه، اما نوشتن توافق‌ها کمک می‌کنه چیزی از قلم نیفته و بعداً کسی برداشت متفاوتی نداشته باشه.' },
          { text: 'از این به بعد فقط خودم کارها رو مدیریت می‌کنم.', tag: 'control', feedback: 'شاید اولش راحت‌تر باشه که همه‌چیز دست خودت باشه، اما این‌طوری بقیه کمتر مشارکت می‌کنن و مسئولیت‌پذیری‌شون هم کم می‌شه.' }
        ]
      }
    ],
    endings: {
      ask: 'از انتخاب‌هات معلومه قبل از قضاوت، ترجیح دادی حرف بزنی و دلیل ماجرا رو بفهمی. این کار کمک می‌کنه تصمیم گروه منصفانه‌تر بشه.',
      adapt: 'از انتخاب‌هات معلومه سعی کردی کارها با شرایط واقعی هرکس جور دربیاد. انعطاف یعنی یه راه منصفانه پیدا کنی، نه اینکه مسئولیت‌ها رو نادیده بگیری.',
      clarity: 'از انتخاب‌هات معلومه برات مهمه همه‌چیز روشن و مشخص باشه. همین شفافیت جلوی خیلی از سوءتفاهم‌ها و دردسرهای بعدی رو می‌گیره.',
      patience: 'از انتخاب‌هات معلومه به بقیه فرصت می‌دی. البته صبر وقتی جواب می‌ده که کنارش گفت‌وگو و مسئولیت‌های مشخص هم باشه.',
      balanced: 'تو این داستان سعی کردی هم شرایط هم‌گروهی‌ات رو درک کنی و هم نظم و مسئولیت گروه رو نگه داری. توی کار گروهی، هم انصاف مهمه هم شفافیت.'
    },
    insight: 'کم‌کاری همیشه از بی‌مسئولیتی نیست؛ از اون طرف، مشکل داشتن هم باعث نمی‌شه مسئولیت آدم کلاً از بین بره. بهتره حرف بزنین و کارها رو طوری تقسیم کنین که هم منصفانه باشه هم همه مسئولیتشون رو انجام بدن.'
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
      <span class="story-card-top"><span class="story-icon" aria-hidden="true">${story.icon}</span><span class="story-duration">۱ تا ۳ دقیقه · تجربه‌ی تعاملی</span></span>
      <div class="story-card-copy"><h3>${story.title}</h3><p>${story.short}</p></div>
      <span class="story-card-bottom"><span>بزن بریم</span><span class="story-arrow" aria-hidden="true">←</span></span>
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
  const savedChoice = chosen[currentStep] || null;
  selectedChoice = savedChoice ? savedChoice.index : null;
  $('#stepLabel').textContent = `موقعیت ${['اول', 'دوم', 'سوم', 'چهارم'][currentStep] || currentStep + 1}`;
  $('#progressText').textContent = `${currentStep + 1} از ${total}`;
  $('#progressBar').style.width = `${((currentStep + 1) / total) * 100}%`;
  $('#backStep').hidden = currentStep === 0;
  $('#sceneTitle').textContent = scene.title;
  $('#sceneDescription').textContent = scene.description;
  $('#decisionQuestion').textContent = scene.question;
  $('#choiceList').hidden = false;
  $('#choiceList').innerHTML = scene.choices.map((choice, index) => `
    <button class="choice-button${savedChoice && savedChoice.index === index ? ' selected' : ''}" type="button" data-choice="${index}" aria-pressed="${savedChoice && savedChoice.index === index ? 'true' : 'false'}">
      <span class="choice-letter">${['الف', 'ب', 'پ'][index]}</span><span>${choice.text}</span>
    </button>
  `).join('');
  $('#choiceList').querySelectorAll('[data-choice]').forEach((button) => {
    button.addEventListener('click', () => selectChoice(Number(button.dataset.choice)));
  });
  if (savedChoice) {
    $('#feedbackText').textContent = scene.choices[savedChoice.index].feedback;
    $('#feedbackPanel').hidden = false;
    $('#continueBtn').textContent = currentStep === total - 1 ? 'ببینیم چی از این داستان درمیاد' : 'ادامه‌ش بدیم';
  } else {
    $('#feedbackPanel').hidden = true;
  }
}

function selectChoice(index) {
  const scene = activeStory.scenes[currentStep];
  const choice = scene.choices[index];
  if (!choice) return;
  selectedChoice = index;
  // انتخاب هر مرحله با شماره‌ی همان مرحله نگه داشته می‌شود تا برگشت و ویرایش جواب‌ها ممکن باشد.
  chosen[currentStep] = { scene: scene.title, text: choice.text, tag: choice.tag, index };
  $('#choiceList').querySelectorAll('button').forEach((button, buttonIndex) => {
    const isSelected = buttonIndex === index;
    button.classList.toggle('selected', isSelected);
    button.setAttribute('aria-pressed', String(isSelected));
  });
  $('#feedbackText').textContent = choice.feedback;
  $('#feedbackPanel').hidden = false;
  $('#continueBtn').textContent = currentStep === activeStory.scenes.length - 1 ? 'ببینیم چی از این داستان درمیاد' : 'ادامه‌ش بدیم';
}

function getEnding() {
  const counts = {};
  chosen.forEach((choice) => { counts[choice.tag] = (counts[choice.tag] || 0) + 1; });
  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (!sorted.length || sorted[0][1] === 1) return activeStory.endings.balanced;
  return activeStory.endings[sorted[0][0]] || activeStory.endings.balanced;
}

function showResult() {
  $('#resultTitle').textContent = 'حالا یه کم بهتر می‌تونی از نگاه اون به دنیا نگاه کنی.';
  $('#resultIntro').textContent = `داستان «${activeStory.title}» رو با ${chosen.length} تا انتخاب جلو بردی. هر بار هم یه فرصت داشتی از یه زاویه‌ی تازه به ماجرا نگاه کنی.`;
  $('#resultInsight').textContent = `${getEnding()} ${activeStory.insight}`;
  $('#choiceRecap').innerHTML = chosen.filter(Boolean).map((choice, index) => `
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
$('#backStep').addEventListener('click', () => {
  if (!activeStory || currentStep === 0) return;
  currentStep -= 1;
  renderScene();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
$('#backToLastStep').addEventListener('click', () => {
  if (!activeStory) return;
  currentStep = activeStory.scenes.length - 1;
  renderScene();
  showScreen(storyScreen);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
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
    themeToggle.setAttribute('aria-label', isDark ? 'حالت روشن رو فعال کن' : 'حالت شب رو روشن کن');
  }
  if (themeColorMeta) themeColorMeta.setAttribute('content', isDark ? '#101a20' : '#f5f4ef');
  if (save) {
    try { localStorage.setItem('yek-daghighe-theme-v2', isDark ? 'dark' : 'light'); } catch (error) { /* ذخیره‌سازی اختیاریه */ }
  }
}

let initialTheme = document.documentElement.dataset.theme;
if (initialTheme !== 'dark' && initialTheme !== 'light') {
  try { initialTheme = localStorage.getItem('yek-daghighe-theme-v2'); } catch (error) { initialTheme = null; }
}
// حالت شب برای بازدیدکننده‌های جدید پیش‌فرضه؛ انتخاب بعدی خود کاربر روی دستگاهش می‌مونه.
if (initialTheme !== 'dark' && initialTheme !== 'light') initialTheme = 'dark';
applyTheme(initialTheme, false);
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  });
}

renderStoryCards();
