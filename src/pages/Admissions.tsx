import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronRight, ChevronLeft, Upload, User, BookOpen, FileText, Eye } from "lucide-react";
import Layout from "@/components/Layout";

const steps = [
  { label: "Personal Details", icon: User },
  { label: "Academic Details", icon: BookOpen },
  { label: "Documents", icon: FileText },
  { label: "Review & Submit", icon: Eye },
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
  tenthPercent: string;
  twelfthPercent: string;
  entranceExam: string;
  entranceScore: string;
  preferredProgram: string;
  preferredBranch: string;
  documents: { [key: string]: string };
}

const initialForm: FormData = {
  firstName: "", lastName: "", email: "", phone: "", dob: "", gender: "", address: "",
  tenthPercent: "", twelfthPercent: "", entranceExam: "", entranceScore: "",
  preferredProgram: "", preferredBranch: "",
  documents: {},
};

const Admissions = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validateStep = (s: number) => {
    const errs: { [key: string]: string } = {};
    if (s === 0) {
      if (!form.firstName.trim()) errs.firstName = "Required";
      if (!form.lastName.trim()) errs.lastName = "Required";
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
      if (!form.phone.trim() || form.phone.length < 10) errs.phone = "Valid phone required";
      if (!form.dob) errs.dob = "Required";
      if (!form.gender) errs.gender = "Required";
    } else if (s === 1) {
      if (!form.tenthPercent) errs.tenthPercent = "Required";
      if (!form.twelfthPercent) errs.twelfthPercent = "Required";
      if (!form.preferredProgram) errs.preferredProgram = "Required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep(step + 1);
  };
  const prev = () => setStep(step - 1);
  const submit = () => {
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center bg-surface rounded-xl p-12 shadow-lg max-w-md"
          >
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-royal" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-foreground mb-3">Application Submitted!</h2>
            <p className="text-muted-foreground">
              Thank you for applying to MITS. You will receive a confirmation email shortly with your application reference number.
            </p>
          </motion.div>
        </div>
      </Layout>
    );
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border ${errors[field] ? "border-destructive" : "border-border"} bg-surface text-foreground focus:outline-none focus:ring-2 focus:ring-royal/50 transition-all text-sm`;

  const labelClass = "block text-sm font-medium text-foreground mb-1.5";

  return (
    <Layout>
      {/* Hero banner */}
      <div className="gradient-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-surface mb-3">
            Admissions <span className="text-gradient-gold">2026</span>
          </h1>
          <p className="text-gold-light/70">Complete the application form below to begin your journey at MITS.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Progress bar */}
        <div className="flex items-center justify-between mb-10">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center flex-1 last:flex-none">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                    i <= step
                      ? "bg-royal text-surface"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {i < step ? <Check className="w-5 h-5" /> : <s.icon className="w-5 h-5" />}
                </div>
                <span className={`text-[10px] mt-1.5 hidden sm:block ${i <= step ? "text-royal font-medium" : "text-muted-foreground"}`}>
                  {s.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${i < step ? "bg-royal" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-surface rounded-xl p-8 shadow-md"
          >
            {step === 0 && (
              <div className="space-y-5">
                <h2 className="font-heading font-semibold text-xl text-foreground mb-4">Personal Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input className={inputClass("firstName")} value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="Enter first name" />
                    {errors.firstName && <p className="text-destructive text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Last Name *</label>
                    <input className={inputClass("lastName")} value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Enter last name" />
                    {errors.lastName && <p className="text-destructive text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input type="email" className={inputClass("email")} value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="email@example.com" />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Phone *</label>
                    <input className={inputClass("phone")} value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" />
                    {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Date of Birth *</label>
                    <input type="date" className={inputClass("dob")} value={form.dob} onChange={(e) => update("dob", e.target.value)} />
                    {errors.dob && <p className="text-destructive text-xs mt-1">{errors.dob}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Gender *</label>
                    <select className={inputClass("gender")} value={form.gender} onChange={(e) => update("gender", e.target.value)}>
                      <option value="">Select</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && <p className="text-destructive text-xs mt-1">{errors.gender}</p>}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Address</label>
                  <textarea className={inputClass("address")} rows={3} value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Full address" />
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-heading font-semibold text-xl text-foreground mb-4">Academic Details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>10th Percentage *</label>
                    <input className={inputClass("tenthPercent")} value={form.tenthPercent} onChange={(e) => update("tenthPercent", e.target.value)} placeholder="e.g. 92%" />
                    {errors.tenthPercent && <p className="text-destructive text-xs mt-1">{errors.tenthPercent}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>12th Percentage *</label>
                    <input className={inputClass("twelfthPercent")} value={form.twelfthPercent} onChange={(e) => update("twelfthPercent", e.target.value)} placeholder="e.g. 88%" />
                    {errors.twelfthPercent && <p className="text-destructive text-xs mt-1">{errors.twelfthPercent}</p>}
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Entrance Exam</label>
                    <select className={inputClass("entranceExam")} value={form.entranceExam} onChange={(e) => update("entranceExam", e.target.value)}>
                      <option value="">Select</option>
                      <option value="jee">JEE Main</option>
                      <option value="eamcet">EAMCET</option>
                      <option value="gate">GATE</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>Entrance Score</label>
                    <input className={inputClass("entranceScore")} value={form.entranceScore} onChange={(e) => update("entranceScore", e.target.value)} placeholder="Score / Rank" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Preferred Program *</label>
                    <select className={inputClass("preferredProgram")} value={form.preferredProgram} onChange={(e) => update("preferredProgram", e.target.value)}>
                      <option value="">Select</option>
                      <option value="btech">B.Tech</option>
                      <option value="mtech">M.Tech</option>
                      <option value="mba">MBA</option>
                      <option value="phd">PhD</option>
                    </select>
                    {errors.preferredProgram && <p className="text-destructive text-xs mt-1">{errors.preferredProgram}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Preferred Branch</label>
                    <select className={inputClass("preferredBranch")} value={form.preferredBranch} onChange={(e) => update("preferredBranch", e.target.value)}>
                      <option value="">Select</option>
                      <option value="cse">Computer Science</option>
                      <option value="ece">Electronics & Communication</option>
                      <option value="eee">Electrical Engineering</option>
                      <option value="me">Mechanical Engineering</option>
                      <option value="civil">Civil Engineering</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-heading font-semibold text-xl text-foreground mb-4">Document Upload</h2>
                <p className="text-sm text-muted-foreground mb-4">Upload scanned copies of the required documents (PDF, JPG, PNG — max 5MB each).</p>
                {["10th Marksheet", "12th Marksheet", "Entrance Exam Scorecard", "Photo ID", "Passport Photo"].map((doc) => (
                  <div key={doc} className="flex items-center gap-4 p-4 border border-border rounded-lg bg-cream">
                    <Upload className="w-5 h-5 text-muted-foreground shrink-0" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{doc}</p>
                      <p className="text-xs text-muted-foreground">PDF, JPG, PNG (max 5MB)</p>
                    </div>
                    <label className="cursor-pointer bg-navy text-gold text-xs font-semibold px-4 py-2 rounded-md hover:bg-navy-light transition-all">
                      Choose File
                      <input type="file" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
                    </label>
                  </div>
                ))}
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="font-heading font-semibold text-xl text-foreground mb-4">Review Your Application</h2>
                <div className="space-y-4">
                  <div className="bg-cream rounded-lg p-5">
                    <h3 className="font-semibold text-foreground text-sm mb-3">Personal Details</h3>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      <p><span className="text-muted-foreground">Name:</span> {form.firstName} {form.lastName}</p>
                      <p><span className="text-muted-foreground">Email:</span> {form.email}</p>
                      <p><span className="text-muted-foreground">Phone:</span> {form.phone}</p>
                      <p><span className="text-muted-foreground">DOB:</span> {form.dob}</p>
                      <p><span className="text-muted-foreground">Gender:</span> {form.gender}</p>
                    </div>
                  </div>
                  <div className="bg-cream rounded-lg p-5">
                    <h3 className="font-semibold text-foreground text-sm mb-3">Academic Details</h3>
                    <div className="grid sm:grid-cols-2 gap-2 text-sm">
                      <p><span className="text-muted-foreground">10th:</span> {form.tenthPercent}</p>
                      <p><span className="text-muted-foreground">12th:</span> {form.twelfthPercent}</p>
                      <p><span className="text-muted-foreground">Program:</span> {form.preferredProgram}</p>
                      <p><span className="text-muted-foreground">Branch:</span> {form.preferredBranch}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-royal/10 rounded-lg">
                  <p className="text-sm text-foreground">
                    By submitting this application, I confirm that all information provided is accurate and complete.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-border">
              {step > 0 ? (
                <button
                  onClick={prev}
                  className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>
              ) : <div />}
              {step < 3 ? (
                <button
                  onClick={next}
                  className="flex items-center gap-2 bg-royal hover:bg-royal-light text-surface font-semibold px-6 py-2.5 rounded-md transition-all text-sm"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={submit}
                  className="flex items-center gap-2 bg-gold hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-2.5 rounded-md transition-all text-sm hover:shadow-gold"
                >
                  Submit Application <Check className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
};

export default Admissions;
