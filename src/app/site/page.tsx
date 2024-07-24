import Image from "next/image";
import preview from "@/../public/assets/preview.png";
import { pricingCards } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <section className="relative flex h-full w-full flex-col items-center justify-center pt-4 md:pt-36">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <p className="text-center lg:mt-48">Run your agency, in one place</p>
        <div className="relative bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
          <h1 className="text-center text-9xl font-bold md:text-[300px]">
            {" "}
            Plural
          </h1>
        </div>
        <div className="relative flex items-center justify-center md:mt-[-70px]">
          <Image
            src={"/assets/preview.png"}
            alt="preview"
            width={1200}
            height={1200}
            className="rounded-tl-2xl rounded-tr-2xl border-muted"
          />
          <div className="absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t dark:from-background"></div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 md:mt-[18rem]">
        <h2 className="text-center text-4xl">Choose what fits right</h2>
        <p className="text-center text-muted-foreground">
          Our straightforward pricing plans are tailored to meet your needs. If{" "}
          {"you're"} not <br />
          ready to commit you can get started for free
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {pricingCards.map((card) => (
            //WIP: wire free product from stripe
            <Card
              key={card.title}
              className={clsx("flex w-[300px] flex-col justify-between", {
                "border-2 border-primary": card.title == "Unlimited Saas",
              })}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-start gap-4">
                <div className="">
                  {card.features.map((feature) => {
                    return (
                      <div key={feature} className="flex items-center gap-2">
                        <Check className="text-muted-foreground" />
                        <p>{feature}</p>
                      </div>
                    );
                  })}
                </div>
                <Link
                  href={`/agency?plan=${card.priceId}`}
                  className={clsx(
                    "w-full rounded-md bg-primary p-2 text-center",
                    { "!bg-muted-foreground": card.title !== "Unlimited Saas" },
                  )}
                >
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
