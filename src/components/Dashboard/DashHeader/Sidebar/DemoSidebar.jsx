import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Settings,
  School,
  BookOpen,
  Users,
  IdCard,
  Wallet,
  Receipt,
  Banknote,
  CheckSquare,
  Calendar,
  ClipboardList,
  SmilePlus,
  Store,
  MessagesSquare,
  Video,
  FileQuestion,
  GraduationCap,
  ClipboardCheck,
  BarChart2,
  Award,
  ChevronDown,
} from "lucide-react";
import { nav_menu } from "../../../../shared/constant/menu.constant";
import { Link, useLocation, useNavigate } from "react-router-dom";

// Utility: join class names
const cx = (...classes) => classes.filter(Boolean).join(" ");

// Optional: map string icon tokens from your JSON to Lucide icons
const ICONS = {
  "lucide:layout-dashboard": LayoutDashboard,
  "lucide:settings": Settings,
  "lucide:school": School,
  "lucide:book-open": BookOpen,
  "lucide:users": Users,
  "lucide:id-card": IdCard,
  "lucide:wallet": Wallet,
  "lucide:receipt": Receipt,
  "lucide:banknote": Banknote,
  "lucide:check-square": CheckSquare,
  "lucide:calendar": Calendar,
  "lucide:clipboard-list": ClipboardList,
  "lucide:smile-plus": SmilePlus,
  "lucide:store": Store,
  "lucide:messages-square": MessagesSquare,
  "lucide:video": Video,
  "lucide:file-question": FileQuestion,
  "lucide:graduation-cap": GraduationCap,
  "lucide:clipboard-check": ClipboardCheck,
  "lucide:bar-chart-2": BarChart2,
  "lucide:award": Award,
};

function IconFromToken({ token, className }) {
  const Cmp = ICONS[token] || LayoutDashboard;
  return <Cmp className={className} aria-hidden="true" />;
}

function SectionHeader({ label, icon, open, onToggle, className }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={open}
      className={cx(
        "group border-2 flex w-[150px] md:w-[100%] items-center gap-3 rounded-xl px-3 py-2 text-left",
        "hover:bg-zinc-100 theme-text theme-bg",
        open ? "border-2 text-purple-500" : " text-purple-700",
        className
      )}
    >
      {icon &&
        (typeof icon === "string" ? (
          <IconFromToken token={icon} className="h-5 w-5 shrink-0" />
        ) : (
          <span className="h-5 w-5 shrink-0">{icon}</span>
        ))}
      <span className="flex-1 truncate text-sm font-medium">{label}</span>
      <ChevronDown
        className={cx(
          "h-4 w-4 transition-transform duration-200",
          open ? "rotate-180" : "rotate-0"
        )}
        aria-hidden
      />
    </button>
  );
}

function SectionBody({ children, open }) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ type: "tween", duration: 0.18 }}
          className="overflow-hidden"
        >
          <div className=" text-center">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function LeafItem({ item, active, onClick, activeClass = "" }) {
  return (
    <button
      type="button"
      onClick={() => onClick?.(item)}
      className={cx(
        "flex w-[150px] md:w-[90%] items-center py-2 text-sm",
        " mx-2 border-l-2 border-l-zinc-700",
        active ? activeClass : " "
      )}
      aria-current={active ? "page" : undefined}
    >
      <Link
        to={item.to}
        className={`block relative w-full text-left mx-2 hover:text-primary ${
          active && "text-primary font-normal transition-colors duration-500"
        }`}
      >
        {active && (
          <motion.div
            layoutId="activeBall"
            className="absolute -left-2 top-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
        )}
        {item.label}
      </Link>
    </button>
  );
}

function Section({
  section,
  open,
  onToggle,
  activeId,
  onNavigate,
  activeClass,
}) {
  const hasChildren =
    Array.isArray(section.children) && section.children.length > 0;

  // Render leaf-only items as immediate navigable buttons
  if (!hasChildren && section.to) {
    const active = section.id === activeId;
    return (
      <div className=" w-full px-0">
        <LeafItem
          item={section}
          active={active}
          onClick={onNavigate}
          activeClass={activeClass}
        />
      </div>
    );
  }

  return (
    <div className="w-full px-0">
      <SectionHeader
        label={section.label}
        icon={section.icon}
        open={open}
        onToggle={onToggle}
      />
      <SectionBody open={open}>
        <div className="py-1 w-full overflow-x-hidden">
          {section.children?.map((child) => (
            <LeafItem
              key={child.id}
              item={child}
              active={activeId === child.id}
              onClick={onNavigate}
              activeClass={activeClass}
            />
          ))}
        </div>
      </SectionBody>
    </div>
  );
}

export function Sidebar({
  items = [],
  activeId,
  onNavigate,
  accordion = true,
  activeClass = "theme-text theme-bg font-semibold",
  className,
}) {
  // Determine which section should be open initially based on activeId
  const initialOpenId = useMemo(() => {
    const match =
      items.find((s) => s.children?.some((c) => c.id === activeId)) ||
      items.find((s) => s.id === activeId);
    return match?.id || null;
  }, [items, activeId]);

  const [openId, setOpenId] = useState(initialOpenId);

  useEffect(() => {
    setOpenId(initialOpenId);
  }, [initialOpenId]);

  const toggle = (id) => {
    setOpenId((prev) =>
      accordion ? (prev === id ? null : id) : prev === id ? null : id
    );
  };

  return (
    <nav
      className={`w-full h-[100vh] overflow-scroll backdrop-blur shadow-md px-2`}
    >
      <div className="space-y-1 rounded-ms">
        {items.map((section) => (
          <Section
            key={section.id}
            section={section}
            open={openId === section.id}
            onToggle={() => toggle(section.id)}
            activeId={activeId}
            onNavigate={onNavigate}
            activeClass={activeClass}
          />
        ))}
      </div>
    </nav>
  );
}
export default function DemoSidebar({ openSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const allItems = nav_menu[0].items.flatMap((section) =>
      section.children ? section.children : section
    );

    const matched = allItems.find((item) => item.to === location.pathname);
    if (matched) {
      setActiveId(matched.id);
    }
  }, [location.pathname]);

  const handleNavigate = (item) => {
    setActiveId(item.id);
    navigate(item.to);
  };

  return (
    <div
      className={`theme-text theme-bg space-y-4 transform transition-transform duration-300
      ${openSidebar ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0 lg:static fixed left-0 z-[999]
     h-[90vh] pb-3 overflow-x-auto`}
    >
      <Sidebar
        items={nav_menu[0].items}
        activeId={activeId}
        onNavigate={handleNavigate}
        accordion={nav_menu[0].accordion}
        activeClass={nav_menu[0].activeClass}
      />
    </div>
  );
}
