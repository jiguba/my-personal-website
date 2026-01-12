import { motion, useReducedMotion } from "framer-motion";

const VIEWBOX = "0 0 2035 1338"; // <-- use whatever your SVG exported

const CTA_LINE_PATHS = [
  { d: "M1522 -100L1522 1334", stroke: "#C60C30", name: "red" },
  { d: "M-20 1172H1320C1331.05 1172 1340 1163.05 1340 1152V616C1340 604.954 1331.05 596 1320 596H-20", stroke: "#00A1DE", name: "blue" },
  { d: "M-20 288H1792C1847.23 288 1892 332.772 1892 388V518V882V1030.77C1892 1057.17 1881.51 1082.49 1862.85 1101.15C1860.95 1103.05 1858.91 1104.79 1856.73 1106.35L1810 1140L1770 1164L1762.26 1169.16C1748.36 1178.43 1740 1194.04 1740 1210.76V1400", stroke: "#009B3A", name: "green" },
  { d: "M-100 340H1790C1817.61 340 1840 362.386 1840 390V1028C1840 1055.61 1817.61 1078 1790 1078H1366H1092C1036.77 1078 992 1033.23 992 978V704V492C992 436.772 947.228 392 892 392H558H-50", stroke: "#E27EA6", name: "pink" },
  { d: "M1098 -20V948C1098 959.046 1106.95 968 1118 968H1722C1733.05 968 1742 959.046 1742 948V462C1742 450.954 1733.05 442 1722 442H1118C1106.95 442 1098 433.046 1098 422V0Z", stroke: "#522398", name: "purple" },
  { d: "M1046 -100V394M1046 -100V972C1046 999.614 1068.39 1022 1096 1022H1406H1768C1779.05 1022 1788 1013.05 1788 1002V630V414C1788 402.954 1779.05 394 1768 394H1660H1046Z", stroke: "#62361B", name: "brown" },
  { d: "M1688 1375V512C1688 500.954 1679.05 492 1668 492H1166C1154.95 492 1146 500.954 1146 512V894C1146 905.046 1154.95 914 1166 914H1688Z", stroke: "#F9461C", name: "orange" }
];

export function LoopBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="bg-layer" aria-hidden="true">
      <svg
        className="bg-svg"
        viewBox={VIEWBOX}
        preserveAspectRatio="none"
      >
        {/* Faint base layer */}
        {CTA_LINE_PATHS.map((path, i) => (
          <path
            key={`base-${i}`}
            d={path.d}
            fill="none"
            stroke={path.stroke}
            strokeWidth={10}
            opacity={0.03}
            strokeLinecap="round"
          />
        ))}

        {/* Animated or static paths */}
        {reduceMotion ? (
          CTA_LINE_PATHS.map((path, i) => (
            <path
              key={`static-${i}`}
              d={path.d}
              fill="none"
              stroke={path.stroke}
              strokeWidth={10}
              opacity={0.35}
              strokeLinecap="round"
            />
          ))
        ) : (
          CTA_LINE_PATHS.map((path, i) => (
            <motion.path
              key={`animated-${i}`}
              d={path.d}
              fill="none"
              stroke={path.stroke}
              strokeWidth={30}
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0.66 }}
              animate={{ pathLength: 1, opacity: 0.97 }}
              transition={{
                duration: 2.8,
                ease: "easeInOut",
                delay: path.delay,
                repeat: Infinity,
                repeatType: "reverse" as const,
                repeatDelay: 0.4,
              }}
            />
          ))
        )}
      </svg>
    </div>
  );
}