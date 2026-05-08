import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Library,
  Mail,
  Menu,
  MessageCircle,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Trophy,
  Users,
  X,
} from "lucide-react";

const routes = ["/", "/about", "/facilities", "/academics", "/teachers", "/fees", "/admission", "/contact"];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Facilities", href: "/facilities" },
  { label: "Academics", href: "/academics" },
  { label: "Teachers", href: "/teachers" },
  { label: "Fees", href: "/fees" },
  { label: "Admission", href: "/admission" },
  { label: "Contact", href: "/contact" },
];

const stats = [
  { label: "CBSE Affiliation", value: "1130757" },
  { label: "School Code", value: "30660" },
  { label: "Campus", value: "2.29 Acres" },
  { label: "Classrooms", value: "60" },
];

const teacherStats = [
  { label: "Total Teachers", value: "88", note: "Teaching staff strength" },
  { label: "TGT", value: "32", note: "Trained Graduate Teachers" },
  { label: "PRT", value: "38", note: "Primary Teachers" },
  { label: "NTT", value: "15", note: "Nursery Teachers" },
  { label: "PET", value: "3", note: "Physical Education Teachers" },
  { label: "Section Ratio", value: "1:1.5", note: "Teacher-section ratio" },
];

const teacherProfiles = [
  {
    name: "Rupali Mahesh Hajare",
    role: "Principal",
    qualification: "M.Sc., B.Ed., SET",
    focus: "Academic leadership, school operations, CBSE compliance, and student growth.",
    icon: GraduationCap,
  },
  {
    name: "Dr. Padmaja Virendrakumar Gandhi",
    role: "Counsellor",
    qualification: "M.S. in Psychological Counseling & Psychotherapy",
    focus: "Student emotional support, counselling, and wellness guidance at NKOSS since 2012.",
    icon: HeartHandshake,
  },
  {
    name: "Kavita Purushottam Shrigadi",
    role: "Wellness Teacher",
    qualification: "M.A., B.Lib., M.Lib., MSCIT",
    focus: "Library, reading culture, student support, and learning resource guidance.",
    icon: Library,
  },
];

const infrastructure = [
  { label: "Campus area", value: "9,290.24 sq. m" },
  { label: "Built-up area", value: "5,263.35 sq. m" },
  { label: "Playground", value: "10,000 sq. m" },
  { label: "Science labs", value: "Composite, Physics, Chemistry, Biology" },
];

const facilityCards = [
  {
    title: "Digital Classrooms",
    copy: "Technology-enabled classrooms support concept clarity, practice, and visual learning.",
    image: "/school-images/data2-images-digital_clasroom.jpg",
    icon: BookOpen,
  },
  {
    title: "Robotics Lab",
    copy: "Hands-on robotics exposure encourages design thinking and practical problem solving.",
    image: "/school-images/images-pic12.jpg",
    icon: Sparkles,
  },
  {
    title: "Talking Tree Classroom",
    copy: "Interactive classroom space for younger learners with playful visual learning aids.",
    image: "/school-images/images-pic13.jpg",
    icon: Users,
  },
  {
    title: "Library & Labs",
    copy: "Dedicated library, science labs, computer labs, and activity spaces support daily learning.",
    image: "/school-images/data2-images-library.jpg",
    icon: Library,
  },
];

const academicItems = [
  {
    title: "CBSE Pattern",
    copy: "Assessment and academic planning follow the CBSE framework with class-wise progress tracking.",
    icon: ClipboardCheck,
  },
  {
    title: "Co-Scholastic Development",
    copy: "Daily schedule gives space to activities, arts, events, sports, and confidence building.",
    icon: Trophy,
  },
  {
    title: "Technology Partnership",
    copy: "The school highlights digital learning and Cambridge University Press as a knowledge partner.",
    icon: Award,
  },
];

const admissionSteps = [
  "Collect prospectus and admission form from the administrative office on working days.",
  "Submit the filled form with attested photocopies before the notified last date.",
  "Administrative office verifies submitted documents and originals.",
  "After confirmation, parents complete the remaining admission formalities.",
];

const requiredDocs = [
  "Birth certificate for Nursery to U.K.G.",
  "Passport-size photographs of the child.",
  "Proof of residence.",
  "Previous year report card for Class I to IX.",
  "Original transfer or leaving certificate from the previous school.",
];

const feeClasses = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

const feeRows = [
  { label: "Tuition Fees", values: [30000, 31500, 31500, 33750, 36000, 38400, 40400, 40400, 41200, 41200] },
  { label: "Term Fees", values: [4000, 4200, 4200, 4500, 4800, 5760, 6060, 6060, 6180, 6180] },
  { label: "Computer Lab Fee", values: [3200, 3360, 3360, 3600, 3840, 2400, 2525, 2525, 2575, 2575] },
  { label: "Library Fee", values: [2000, 2100, 2100, 2250, 2400, 1440, 1515, 1515, 1545, 1545] },
  { label: "Other Fee", values: [800, 840, 840, 900, 960, 0, 0, 0, 0, 0] },
];

const totalFees = [40000, 42000, 42000, 45000, 48000, 48000, 50500, 50500, 51500, 51500];

const WHATSAPP_NUMBER = "917709341331";

const money = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

function App() {
  const [path, setPath] = useState(getRoutePath());

  useEffect(() => {
    const handlePopState = () => setPath(getRoutePath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (href) => {
    if (window.location.pathname !== href) {
      window.history.pushState({}, "", href);
    }
    setPath(getRoutePath());
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Page = pageByPath[path] || NotFoundPage;

  return (
    <main className="min-h-screen bg-[#fffaf3] text-ink">
      <Header path={path} navigate={navigate} />
      <Page navigate={navigate} />
      {path !== "/contact" && <AdmissionCTA navigate={navigate} />}
      <Footer navigate={navigate} />
    </main>
  );
}

function getRoutePath() {
  const pathname = window.location.pathname;
  return routes.includes(pathname) ? pathname : pathname;
}

function Header({ path, navigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-[#fffaf3]/95 backdrop-blur">
      <div className="section-shell">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            className="focus-ring flex min-w-0 flex-1 items-center gap-3 rounded-md"
            href="/"
            navigate={navigate}
            ariaLabel="NKOSS home"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-ink text-white">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate text-sm font-bold sm:text-base">Nagesh Karajagi Orchid School</span>
              <span className="block truncate text-xs font-semibold text-slate-600">Solapur | CBSE Affiliation 1130757</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={`focus-ring rounded-md px-3 py-2 text-sm font-semibold transition ${
                  path === item.href ? "bg-orange-100 text-ink" : "text-slate-700 hover:bg-orange-100 hover:text-ink"
                }`}
                href={item.href}
                navigate={navigate}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            className="focus-ring hidden items-center gap-2 rounded-md bg-ink px-3 py-2 text-sm font-bold text-white transition hover:bg-slate-700 xl:inline-flex"
            href="/fees"
            navigate={navigate}
          >
            <CalendarCheck className="h-4 w-4" />
            View Fees
          </Link>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Open navigation menu"
            className="focus-ring inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-orange-200 bg-white text-ink shadow-sm lg:hidden"
            type="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <button
            aria-label="Close navigation menu"
            className="absolute inset-0 bg-ink/55"
            type="button"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="absolute right-0 top-0 flex h-screen w-[min(20rem,calc(100vw-2rem))] flex-col overflow-y-auto bg-[#fffaf3] p-5 shadow-2xl">
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink text-white">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-black text-ink">NKOSS</p>
                  <p className="truncate text-xs font-semibold text-slate-600">Solapur CBSE School</p>
                </div>
              </div>
              <button
                aria-label="Close navigation menu"
                className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-orange-200 bg-white text-ink"
                type="button"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="mt-6 grid gap-2" aria-label="Mobile navigation links">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className={`focus-ring flex items-center justify-between rounded-md border px-4 py-3 text-sm font-black transition ${
                    path === item.href
                      ? "border-ink bg-ink text-white"
                      : "border-orange-100 bg-white text-slate-700 hover:border-orange-200 hover:bg-orange-50"
                  }`}
                  href={item.href}
                  navigate={navigate}
                  onNavigate={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </nav>

            <Link
              className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-orchid-500 px-4 py-3 text-sm font-black text-white transition hover:bg-orchid-600"
              href="/admission"
              navigate={navigate}
              onNavigate={() => setIsMenuOpen(false)}
            >
              Admission Process
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </aside>
        </div>
      )}
    </header>
  );
}

function Link({ href, navigate, children, className, ariaLabel, onNavigate }) {
  return (
    <a
      aria-label={ariaLabel}
      className={className}
      href={href}
      onClick={(event) => {
        event.preventDefault();
        navigate(href);
        onNavigate?.();
      }}
    >
      {children}
    </a>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <img
          className="absolute inset-0 h-full w-full object-cover object-center"
          src="/school-images/data2-images-sl5.jpg"
          alt="Nagesh Karajagi Orchid School campus building"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-ink to-transparent" />
        <div className="section-shell relative grid min-h-[calc(100svh-5rem)] gap-8 py-12 sm:gap-10 sm:py-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-20">
          <div className="min-w-0 max-w-3xl">
            <p className="mb-4 inline-flex max-w-full items-center gap-2 rounded-md bg-white/12 px-3 py-2 text-xs font-bold text-orange-100 ring-1 ring-white/20 sm:text-sm">
              <GraduationCap className="h-4 w-4" />
              <span className="min-w-0 break-words">SonaShankar Dnyanvikas Trust's</span>
            </p>
            <h1 className="max-w-full text-3xl font-black leading-tight sm:max-w-[34rem] sm:text-5xl lg:max-w-[44rem] lg:text-6xl xl:text-7xl">
              Future-ready CBSE learning in Solapur.
            </h1>
            <p className="mt-5 max-w-full text-sm leading-7 text-orange-50 sm:max-w-2xl sm:text-lg sm:leading-8">
              Nagesh Karajagi Orchid School combines strong academics, robotics exposure,
              digital classrooms, arts, sports, and value-based learning.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                className="focus-ring inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-md bg-orchid-500 px-4 py-3 text-sm font-black text-white transition hover:bg-orchid-600 sm:w-auto sm:px-5"
                type="button"
                onClick={() => navigate("/admission")}
              >
                Admission Process
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                className="focus-ring inline-flex w-full min-w-0 items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-black text-ink transition hover:bg-orange-50 sm:w-auto sm:px-5"
                type="button"
                onClick={() => navigate("/teachers")}
              >
                Meet Teachers
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="min-w-0 rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur sm:p-4">
                  <p className="whitespace-nowrap text-xl font-black">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase text-orange-100">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid min-w-0 gap-4 lg:self-end">
            <div className="min-w-0 rounded-lg border border-white/15 bg-white/12 p-3 shadow-soft backdrop-blur sm:p-4">
              <img
                className="aspect-[16/9] h-auto w-full rounded-md object-cover"
                src="/school-images/images-pic12.jpg"
                alt="Robotics lab at NKOSS"
              />
              <div className="mt-4 flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-orchid-500 text-white">
                  <Cpu className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h2 className="text-xl font-black">Robotics Lab</h2>
                  <p className="mt-1 text-sm leading-6 text-orange-50">
                    Hands-on STEM learning for design, building, testing, and problem solving.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <MiniImageCard image="/school-images/images-pic13.jpg" title="Talking Tree Classroom" />
              <MiniImageCard image="/school-images/data2-images-library.jpg" title="Library & Reading" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="max-w-3xl">
            <p className="eyebrow">Explore The School</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Multiple screens for parents to scan quickly.
            </h2>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-4">
            <HomeFeature
              icon={ShieldCheck}
              title="Vision and Values"
              copy="World-class education, responsible citizenship, and overall development."
              href="/about"
              navigate={navigate}
            />
            <HomeFeature
              icon={Sparkles}
              title="Modern Facilities"
              copy="Digital classrooms, robotics lab, library, science labs, sports, arts, and activity spaces."
              href="/facilities"
              navigate={navigate}
            />
            <HomeFeature
              icon={UserCheck}
              title="Teacher Details"
              copy="Principal details, teacher counts, section ratio, counsellor, and wellness support."
              href="/teachers"
              navigate={navigate}
            />
            <HomeFeature
              icon={CalendarCheck}
              title="Clear Fee Analysis"
              copy="Class-wise official fee table with annual totals, monthly estimate, and key observations."
              href="/fees"
              navigate={navigate}
            />
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <PageShell
      eyebrow="About NKOSS"
      title="A school built around academics, character, and confidence."
      copy="The school positions itself as a Solapur institution where students grow through classroom learning, co-curricular participation, technology exposure, and value-based education."
      image="/school-images/images-pic01.jpg"
      imageAlt="Nagesh Karajagi Orchid School campus building"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <div className="grid gap-4 sm:grid-cols-2">
            <InfoRow icon={ShieldCheck} title="Vision" copy="Build visionary pupils who can excel across life paths." />
            <InfoRow icon={Users} title="Mission" copy="Nurture young minds to strive for excellence and responsible citizenship." />
            <InfoRow icon={CheckCircle2} title="Values" copy="Moral ethics, confidence, patriotism, and broad outlook toward life." />
            <InfoRow icon={Award} title="Focus" copy="Overall development through academics, activities, sports, and arts." />
          </div>
        </div>
        <div className="grid gap-4">
          {infrastructure.map((item) => (
            <div key={item.label} className="rounded-lg border border-orange-100 bg-orange-50 p-4">
              <p className="text-sm font-bold text-slate-500">{item.label}</p>
              <p className="mt-1 text-lg font-black text-ink">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function FacilitiesPage() {
  return (
    <PageShell
      eyebrow="Facilities"
      title="Robotics Lab & Digital Learning Spaces."
      copy="NKOSS presents a multi-faceted campus with classrooms, labs, activity rooms, library, playground, transport, yoga, karate, and co-curricular spaces."
      image="/school-images/images-pic12.jpg"
      imageAlt="Robotics lab"
    >
      <RoboticsSpotlight />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {facilityCards.map((card) => {
          const Icon = card.icon;
          return (
            <article key={card.title} className="overflow-hidden rounded-lg border border-emerald-100 bg-white shadow-soft">
              <img className="h-44 w-full object-cover" src={card.image} alt={card.title} />
              <div className="p-5">
                <Icon className="h-6 w-6 text-leaf" />
                <h3 className="mt-4 text-xl font-black">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{card.copy}</p>
              </div>
            </article>
          );
        })}
      </div>
    </PageShell>
  );
}

function AcademicsPage() {
  return (
    <PageShell
      eyebrow="Academics"
      title="Structured CBSE learning with room for co-scholastic growth."
      copy="Academics, assessment, digital learning, arts, sports, and activity participation are presented as one connected student experience."
      image="/school-images/data2-images-digital_clasroom.jpg"
      imageAlt="Digital classroom"
    >
      <div className="grid gap-4">
        {academicItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-skydeep text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-lg font-black">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.copy}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}

function TeachersPage() {
  return (
    <PageShell
      eyebrow="Teacher Details"
      title="Teacher Details & Support Team."
      copy="The current public disclosure lists 88 teachers, including TGT, PRT, PET, and NTT staff, led by the principal and supported by counselling and wellness roles."
      image="/school-images/data2-images-art__craft_room.jpg"
      imageAlt="Arts and activity room"
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {teacherStats.map((item) => (
          <div key={item.label} className="rounded-lg border border-orange-100 bg-orange-50 p-5">
            <p className="text-sm font-black uppercase tracking-[0.12em] text-orchid-700">{item.label}</p>
            <p className="mt-2 text-4xl font-black text-ink">{item.value}</p>
            <p className="mt-2 text-sm font-semibold text-slate-600">{item.note}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {teacherProfiles.map((teacher) => {
          const Icon = teacher.icon;
          return (
            <article key={teacher.name} className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-ink text-white">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs font-black uppercase tracking-[0.16em] text-orchid-700">{teacher.role}</p>
              <h2 className="mt-2 text-2xl font-black">{teacher.name}</h2>
              <p className="mt-2 text-sm font-bold text-slate-500">{teacher.qualification}</p>
              <p className="mt-4 text-sm leading-7 text-slate-700">{teacher.focus}</p>
            </article>
          );
        })}
      </div>

      <div className="mt-12 rounded-lg border border-sky-200 bg-[#edf7ff] p-6">
        <h2 className="text-2xl font-black">Teaching Sections</h2>
        <p className="mt-3 max-w-3xl text-base leading-8 text-slate-700">
          The disclosed staff structure includes trained graduate teachers, primary teachers,
          nursery teachers, physical education teachers, counselling support, and wellness support.
          This screen intentionally avoids publishing personal phone numbers or addresses.
        </p>
      </div>
    </PageShell>
  );
}

function FeesPage() {
  const [selectedClass, setSelectedClass] = useState("I");
  const selectedIndex = feeClasses.indexOf(selectedClass);
  const selectedTotal = totalFees[selectedIndex];
  const monthlyEquivalent = Math.round(selectedTotal / 12);
  const minFee = Math.min(...totalFees);
  const maxFee = Math.max(...totalFees);
  const yearlyGap = maxFee - minFee;

  const feeBreakdown = useMemo(
    () =>
      feeRows.map((row) => ({
        ...row,
        amount: row.values[selectedIndex],
        share: Math.round((row.values[selectedIndex] / selectedTotal) * 100),
      })),
    [selectedIndex, selectedTotal],
  );

  return (
    <PageShell
      eyebrow="Pricing Analysis"
      title="A.Y. 2026-27 fee structure for Classes I-X."
      copy="The official table is converted into a parent-readable analysis with class selection, monthly equivalent, component split, and class-wise comparison."
      image="/school-images/data2-images-aw1.jpg"
      imageAlt="School awards"
    >
      <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-orange-200 bg-white p-5 shadow-soft">
          <p className="text-sm font-bold text-slate-500">Select class</p>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {feeClasses.map((grade) => (
              <button
                key={grade}
                className={`focus-ring rounded-md border px-3 py-2 text-sm font-black transition ${
                  selectedClass === grade
                    ? "border-ink bg-ink text-white"
                    : "border-orange-200 bg-orange-50 text-ink hover:bg-orange-100"
                }`}
                type="button"
                onClick={() => setSelectedClass(grade)}
              >
                {grade}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-ink p-5 text-white">
            <p className="text-sm font-bold text-orange-100">Class {selectedClass} annual total</p>
            <p className="mt-2 text-4xl font-black">{money.format(selectedTotal)}</p>
            <p className="mt-2 text-sm text-orange-100">Approx. {money.format(monthlyEquivalent)} per month over 12 months.</p>
          </div>

          <div className="mt-6 space-y-4">
            {feeBreakdown.map((row) => (
              <div key={row.label}>
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-bold text-slate-700">{row.label}</span>
                  <span className="font-black">{money.format(row.amount)}</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-md bg-orange-100">
                  <div className="h-full rounded-md bg-orchid-600" style={{ width: `${row.share}%` }} />
                </div>
                <p className="mt-1 text-xs font-semibold text-slate-500">{row.share}% of total</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-orange-200 bg-white p-5 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-3">
            <PriceMetric label="Lowest annual fee" value={money.format(minFee)} note="Class I" />
            <PriceMetric label="Highest annual fee" value={money.format(maxFee)} note="Classes IX-X" />
            <PriceMetric label="Total spread" value={money.format(yearlyGap)} note="I to IX/X" />
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-sm">
              <thead>
                <tr className="bg-orange-50 text-left">
                  <th className="border border-orange-200 px-3 py-3 font-black">Particulars</th>
                  {feeClasses.map((grade) => (
                    <th key={grade} className="border border-orange-200 px-3 py-3 text-center font-black">
                      {grade}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {feeRows.map((row) => (
                  <tr key={row.label}>
                    <td className="border border-orange-200 px-3 py-3 font-bold">{row.label}</td>
                    {row.values.map((value, index) => (
                      <td key={`${row.label}-${feeClasses[index]}`} className="border border-orange-200 px-3 py-3 text-center">
                        {money.format(value)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr className="bg-ink text-white">
                  <td className="border border-ink px-3 py-3 font-black">Total</td>
                  {totalFees.map((value, index) => (
                    <td key={feeClasses[index]} className="border border-ink px-3 py-3 text-center font-black">
                      {money.format(value)}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <AnalysisCard title="Stable lower grades" copy="Classes II-III share the same total at ₹42,000, while Class V and VI both sit at ₹48,000." />
            <AnalysisCard title="Major jump points" copy="The largest rise is ₹3,000 between III-IV and IV-V. Later increases are smaller." />
            <AnalysisCard title="Fee composition" copy="Tuition is the main cost. From Class VI upward, other fee becomes zero and tuition rises to 80% of total." />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function AdmissionPage() {
  return (
    <PageShell
      eyebrow="Admission"
      title="Simple admission flow with document verification."
      copy="The existing admission process is made scannable for parents, with steps and required documents grouped clearly."
      image="/school-images/data2-images-aw99.jpg"
      imageAlt="Save water school campaign"
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h3 className="flex items-center gap-2 text-xl font-black">
            <CalendarCheck className="h-5 w-5 text-leaf" />
            Process
          </h3>
          <ol className="mt-5 space-y-4">
            {admissionSteps.map((step, index) => (
              <li key={step} className="flex gap-3 text-sm leading-6 text-slate-700">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-ink text-xs font-black text-white">
                  {index + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h3 className="flex items-center gap-2 text-xl font-black">
            <ClipboardCheck className="h-5 w-5 text-leaf" />
            Documents
          </h3>
          <ul className="mt-5 space-y-3">
            {requiredDocs.map((doc) => (
              <li key={doc} className="flex gap-3 text-sm leading-6 text-slate-700">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" />
                {doc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}

function ContactPage() {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    studentName: "",
    className: "Class I",
    enquiryType: "Admission enquiry",
    message: "",
  });

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const sendWhatsAppMessage = (event) => {
    event.preventDefault();
    const lines = [
      "Hello Nagesh Karajagi Orchid School,",
      "",
      `Enquiry type: ${form.enquiryType}`,
      `Parent name: ${form.parentName}`,
      `Mobile number: ${form.phone}`,
      `Student name: ${form.studentName || "Not provided"}`,
      `Class interested: ${form.className}`,
      "",
      `Message: ${form.message || "Please share admission details."}`,
    ];
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <PageShell
      eyebrow="Contact"
      title="Visit the administrative office in Murarji Peth, Solapur."
      copy="Parents can contact the school office for admission form availability, document verification, and fee-related questions."
      image="/school-images/data2-images-library.jpg"
      imageAlt="School library"
    >
      <div className="grid min-w-0 gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="min-w-0 rounded-lg border border-sky-200 bg-white p-6 shadow-soft">
          <h2 className="text-2xl font-black">School Office</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Use the form to prepare a WhatsApp enquiry, or contact the office directly.
          </p>
          <div className="mt-6 space-y-4">
            <ContactLine icon={MapPin} text="125/2, Juni Mill Compound, Murarji Peth, Solapur" />
            <ContactLine icon={Phone} text="+91 7709341331 | 0217-2720886" />
            <ContactLine icon={Mail} text="nkorchidschool@gmail.com" />
          </div>
          <a
            className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-leaf px-4 py-3 text-sm font-black text-white transition hover:bg-emerald-800"
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-4 w-4" />
            Open WhatsApp
          </a>
        </div>

        <form className="min-w-0 rounded-lg border border-orange-200 bg-white p-6 shadow-soft" onSubmit={sendWhatsAppMessage}>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-ink text-white">
              <MessageCircle className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <h2 className="text-xl font-black leading-tight sm:text-2xl">Send Enquiry on WhatsApp</h2>
              <p className="mt-1 text-sm font-semibold text-slate-500">Form submits to the school WhatsApp number.</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <FormField label="Parent name" required>
              <input
                className="form-input"
                value={form.parentName}
                onChange={(event) => updateField("parentName", event.target.value)}
                placeholder="Enter parent name"
                required
              />
            </FormField>
            <FormField label="Mobile number" required>
              <input
                className="form-input"
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Enter mobile number"
                required
                type="tel"
              />
            </FormField>
            <FormField label="Student name">
              <input
                className="form-input"
                value={form.studentName}
                onChange={(event) => updateField("studentName", event.target.value)}
                placeholder="Enter student name"
              />
            </FormField>
            <FormField label="Class interested">
              <select
                className="form-input"
                value={form.className}
                onChange={(event) => updateField("className", event.target.value)}
              >
                {["Nursery", "L.K.G.", "U.K.G.", ...feeClasses.map((grade) => `Class ${grade}`)].map((grade) => (
                  <option key={grade} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
            </FormField>
            <FormField label="Enquiry type">
              <select
                className="form-input"
                value={form.enquiryType}
                onChange={(event) => updateField("enquiryType", event.target.value)}
              >
                <option>Admission enquiry</option>
                <option>Fee enquiry</option>
                <option>Campus visit</option>
                <option>Document verification</option>
              </select>
            </FormField>
            <FormField label="Message" className="sm:col-span-2">
              <textarea
                className="form-input min-h-32 resize-y"
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                placeholder="Write your question"
              />
            </FormField>
          </div>

          <button
            className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orchid-600 px-5 py-3 text-sm font-black text-white transition hover:bg-orchid-700"
            type="submit"
          >
            <Send className="h-4 w-4" />
            Send on WhatsApp
          </button>
        </form>
      </div>

      <div className="mt-10 overflow-hidden rounded-lg border border-sky-200 bg-white shadow-soft">
        <iframe
          title="Nagesh Karajagi Orchid School location"
          className="h-[420px] w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1900.746412249663!2d75.89718199171398!3d17.674164307721778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5d080f8b80009%3A0xb0781dd9b951fca8!2sNagesh+Karajagi+Orchid+School!5e0!3m2!1sen!2sin!4v1492766285662"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </PageShell>
  );
}

function NotFoundPage({ navigate }) {
  return (
    <section className="bg-white py-24">
      <div className="section-shell max-w-3xl text-center">
        <p className="eyebrow">Page Not Found</p>
        <h1 className="mt-3 text-4xl font-black">This page is not available.</h1>
        <button
          className="focus-ring mt-8 rounded-md bg-ink px-5 py-3 text-sm font-black text-white"
          type="button"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </section>
  );
}

const pageByPath = {
  "/": HomePage,
  "/about": AboutPage,
  "/facilities": FacilitiesPage,
  "/academics": AcademicsPage,
  "/teachers": TeachersPage,
  "/fees": FeesPage,
  "/admission": AdmissionPage,
  "/contact": ContactPage,
};

function PageShell({ eyebrow, title, copy, image, imageAlt, children }) {
  return (
    <>
      <section className="bg-ink py-16 text-white sm:py-20">
        <div className="section-shell grid min-w-0 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="min-w-0 max-w-[calc(100vw-2rem)] lg:max-w-none">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-100">{eyebrow}</p>
            <h1 className="mobile-readable mt-3 break-words text-3xl font-black leading-tight sm:text-5xl">
              {title}
            </h1>
            <p className="mobile-readable mt-5 break-words text-base leading-8 text-orange-50">
              {copy}
            </p>
          </div>
          <img className="h-72 w-full min-w-0 max-w-full rounded-lg object-cover shadow-soft" src={image} alt={imageAlt} />
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="section-shell">{children}</div>
      </section>
    </>
  );
}

function HomeFeature({ icon: Icon, title, copy, href, navigate }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-slate-50 p-6">
      <Icon className="h-7 w-7 text-orchid-600" />
      <h2 className="mt-4 text-xl font-black">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{copy}</p>
      <button
        className="focus-ring mt-5 inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-black text-ink ring-1 ring-slate-200"
        type="button"
        onClick={() => navigate(href)}
      >
        Open Page
        <ArrowRight className="h-4 w-4" />
      </button>
    </article>
  );
}

function MiniImageCard({ image, title }) {
  return (
    <div className="min-w-0 overflow-hidden rounded-lg border border-white/15 bg-white/10 p-3 backdrop-blur">
      <img className="aspect-[16/9] h-auto w-full rounded-md object-cover" src={image} alt={title} />
      <p className="mt-3 break-words text-sm font-black text-white">{title}</p>
    </div>
  );
}

function RoboticsSpotlight() {
  return (
    <section className="mb-10 grid overflow-hidden rounded-lg border border-emerald-100 bg-[#f5fbf7] shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
      <div className="min-w-0 max-w-[calc(100vw-4rem)] p-6 sm:max-w-none sm:p-8">
        <p className="eyebrow">Robotics Lab</p>
        <h2 className="mobile-readable mt-3 break-words text-3xl font-black leading-tight">
          Hands-on STEM practice beyond the textbook.
        </h2>
        <p className="mobile-readable mt-4 break-words text-base leading-8 text-slate-700">
          The robotics lab introduces students to building, testing, logical thinking, and
          collaborative problem solving. It is presented as a major feature of the redesigned site.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["Design", "Build", "Test"].map((step) => (
            <div key={step} className="rounded-md bg-white p-4 text-center ring-1 ring-emerald-100">
              <Cpu className="mx-auto h-5 w-5 text-leaf" />
              <p className="mt-2 text-sm font-black">{step}</p>
            </div>
          ))}
        </div>
      </div>
      <img className="h-full min-h-80 w-full object-cover" src="/school-images/images-pic12.jpg" alt="Robotics lab wall" />
    </section>
  );
}

function AdmissionCTA({ navigate }) {
  return (
    <section className="bg-[#fff4e6] py-16">
      <div className="section-shell">
        <div className="grid gap-8 rounded-lg border border-orange-200 bg-white p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Admission Help</p>
            <h2 className="mt-3 text-3xl font-black leading-tight">Ready to ask about admission or fees?</h2>
            <p className="mt-3 max-w-2xl text-base leading-8 text-slate-700">
              Send a WhatsApp enquiry to the school office with class, parent contact, and visit details.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md bg-leaf px-5 py-3 text-sm font-black text-white transition hover:bg-emerald-800"
              type="button"
              onClick={() => navigate("/contact")}
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Enquiry
            </button>
            <button
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-md border border-orange-300 bg-orange-50 px-5 py-3 text-sm font-black text-ink transition hover:bg-orange-100"
              type="button"
              onClick={() => navigate("/fees")}
            >
              View Fee Analysis
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon: Icon, title, copy }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <Icon className="h-5 w-5 text-orchid-600" />
      <h3 className="mt-3 text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
    </div>
  );
}

function PriceMetric({ label, value, note }) {
  return (
    <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-orange-700">{label}</p>
      <p className="mt-2 text-2xl font-black text-ink">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-600">{note}</p>
    </div>
  );
}

function AnalysisCard({ title, copy }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
      <h3 className="text-base font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
    </div>
  );
}

function ContactLine({ icon: Icon, text }) {
  return (
    <p className="flex items-start gap-3 text-base font-bold text-slate-700">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-skydeep" />
      <span className="min-w-0 break-words">{text}</span>
    </p>
  );
}

function FormField({ label, required, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-black text-slate-700">
        {label}
        {required && <span className="text-orchid-700"> *</span>}
      </span>
      <span className="mt-2 block">{children}</span>
    </label>
  );
}

function Footer({ navigate }) {
  return (
    <footer className="bg-ink py-8 text-white">
      <div className="section-shell flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold">NKOSS static React and Tailwind website.</p>
        <button
          className="focus-ring rounded-md px-2 py-1 text-left text-sm font-bold text-orange-100 hover:text-white"
          type="button"
          onClick={() => navigate("/")}
        >
          Back to home
        </button>
      </div>
    </footer>
  );
}

export default App;
