import { Card, CardContent, CardHeader, CardTitle  } from "@/components/ui/card";
import { motion, useReducedMotion } from "framer-motion";
import headShot from "../assets/jigHeadshot.jpeg"

const imageUrl : string = headShot
const description : string = "Software engineer specializing in backend systems and APIs, translating business requirements into scalable, maintainable software solutions."

export function AboutMe() {
  const reduce = useReducedMotion();

  return (
    <div>

        <motion.div
            initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
                delay: 0.22,
                // duration: 1.4,
                type: "spring",
                stiffness: 80,
                damping: 30,
                mass: 0.9,
        }}>
            <Card className="p-4 w-full min-h-[40dvh] shadow-xl">
        
                <CardHeader className="mt-6">
                    <CardTitle className="text-md font-bold">Jason Guba | Software Engineer | Chicago, IL</CardTitle>
                </CardHeader>
                <CardContent className="">
                    <div className="grid grid-cols-3">
                        {/* Left column */}
                        <div className="grid space-y-2 col-span-2">
                            <p className="text-sm font-semibold text-left">2 years of experience</p>
                            <p className="text-sm leading-6 text-muted-foreground text-left">{description}</p>
                            {/* <p className="text-sm leading-6 text-muted-foreground text-left">I focus on practical tradeoffs, readability, and shipping projects
            end-to-end. Feel free to reach out if you’d like to collaborate.</p> */}
                        </div>

                        <div className="col-span-1 justify-self-end">
                            <div className="overflow-hidden rounded-xl border bg-muted">
                                {imageUrl ? (
                                <img
                                    src={imageUrl}
                                />
                                ) : (
                                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                                    Image
                                </div>
                        )}
                            {/* <h3 className="text-xl font-semibold">2 years of experience</h3> */}
                            </div>
                        </div>
                    </div>
                </CardContent>
              {/* <h2 className="text-xl font-bold font-serif">Jason Guba | Software Engineer | Chicago, IL</h2>
              <h3 className="font-serif text-left">2 years of experience</h3>
              <p className="mb-2 font-serif text-left">
  v
              </p>

              <p className="mb-2 font-serif text-left">
              I focus on practical tradeoffs, readability, and shipping projects
              end-to-end. Feel free to reach out if you’d like to collaborate.
              </p> */}
          </Card>
        </motion.div>
    </div>
  );
}
