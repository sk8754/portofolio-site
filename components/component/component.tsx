import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import photo01 from "@/public/imgs/29329469_s.jpg";
import photo02 from "@/public/imgs/化粧品バナー.png";
import photo03 from "@/public/imgs/横浜旅行.png";
import photo04 from "@/public/imgs/バイク　京都.png";
import photo05 from "@/public/imgs/バイク旅　夏.png";
import photo06 from "@/public/imgs/北海道旅行.png";
import photo07 from "@/public/imgs/ホラー.png";
import photo08 from "@/public/imgs/あくぺこの絆.jpg";
import photo09 from "@/public/imgs/ブライダル.png";
import photo10 from "@/public/imgs/アパレル.png";
import photo11 from "@/public/imgs/バイク旅京都2.png";
import photo12 from "@/public/imgs/プログラマ.png";
import photo13 from "@/public/imgs/ecサイト.png";
import photo14 from "@/public/imgs/京都.png";
import Image from "next/image";
import ContactForm from "./ContactForm";

export function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex justify-between items-center">
        <Link href="#" className="text-xl font-bold" prefetch={false}>
          sk8754&apos;s
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="#"
            className="hover:text-accent transition-colors"
            prefetch={false}
          >
            design
          </Link>
          <Link
            href="#"
            className="hover:text-accent transition-colors"
            prefetch={false}
          >
            program
          </Link>
          <Link
            href="#"
            className="hover:text-accent transition-colors"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Button variant="outline" size="icon" className="md:hidden">
          <MenuIcon className="h-6 w-6" />
          <span className="sr-only">Toggle navigation</span>
        </Button>
      </header>
      <main className="flex-1 py-12 px-6 md:px-12 lg:px-20">
        <section className="grid md:grid-cols-2 gap-12 sm:items-center">
          <div className="flex justify-center">
            <Image
              src={photo01}
              alt="Profile"
              className="rounded-full object-cover"
              style={{ aspectRatio: "16/9", objectFit: "cover" }}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">About Me</h1>
            <p className="text-muted-foreground mb-6">
              初めまして。私は四国地方在住の駆け出しエンジニアでございます。
              個人開発にてデザイン業務やアプリ開発をしています。デザインはLP用、広告用バナーの制作から
              Youtubeサムネイルの制作ができます。
              <br />
              また小規模なアプリ開発、システム開発であればフルスタックで開発ができます。
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                デザイン
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                プログラム
              </Link>
            </div>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">アプリ開発・システム開発</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3  gap-6 mb-[3rem]">
            <Card>
              <CardHeader>
                <CardTitle>Amazon風ECサイト</CardTitle>
                <CardDescription>
                  認証機能、商品表示、カート機能の一部まで実装済み。システム開発に注力しているためにUI設計
                  が少しおざなりです。現在全体の60%程完成済みです。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo13}
                  width="400"
                  height="225"
                  alt="Project 1"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
              <CardFooter>
                <Link
                  href="https://amazon-like-ec.vercel.app/"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>作成中</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
                <CardDescription>作成中</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src="/placeholder.svg"
                  width="400"
                  height="225"
                  alt="Project 3"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
              <CardFooter>
                <Link
                  href="#"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  View Project
                </Link>
              </CardFooter>
            </Card>
          </div>

          <h2 className="text-2xl font-bold mb-6">デザインポートフォリオ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3  gap-6">
            <Card>
              <CardHeader>
                <CardTitle>instagram広告 化粧品</CardTitle>
                <CardDescription>
                  架空の化粧品を題材にinstagram広告のイメージを作りました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo02}
                  alt="Project 1"
                  className="rounded-md object-cover"
                  style={{ objectFit: "cover" }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>instagram広告 ブライダル系</CardTitle>
                <CardDescription>
                  ブライダル業界を題材に作成しました。落ち着いた雰囲気をデザインしました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo09}
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ objectFit: "cover" }}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>instagram広告 アパレル系</CardTitle>
                <CardDescription>
                  instagram広告用に作成しました。シンプルに服のセールが伝わるデザインにしました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo10}
                  alt="Project 3"
                  className="rounded-md object-cover"
                  style={{ objectFit: "cover" }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youtubeサムネイル 旅系</CardTitle>
                <CardDescription>
                  横浜旅行をする女性を題材にしました。2×2のレイアウトを採用しシンプルに旅行のイメージをさせるデザインにしました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo03}
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youtubeサムネイル 旅系</CardTitle>
                <CardDescription>
                  バイク旅をするyoutuberをイメージしました。走りと景観を期待させるデザインにしました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo04}
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youtubeサムネイル 旅系</CardTitle>
                <CardDescription>
                  バイク系youtuberを題材にしました。タイトルを柔らかめなテイストにし、綺麗な画像を使うことで少しセンチメンタルな雰囲気をデザインしました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo05}
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youtubeサムネイル 旅系</CardTitle>
                <CardDescription>
                  モトブログ系youtuberを題材にしました。シネマチックなレイアウトにしてみました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo11}
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youtubeサムネイル 旅系</CardTitle>
                <CardDescription>
                  北海道旅行をする女性を題材にしました。テキストの傾きと配置を敢えてアンバランスにしました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo06}
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youtubeサムネイル 旅系</CardTitle>
                <CardDescription>。 京都旅行を題材にしました。</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo14}
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youtubeサムネイル 解説系</CardTitle>
                <CardDescription>
                  解説系youtuberを題材にしました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo12}
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youtubeサムネイル ホラー系</CardTitle>
                <CardDescription>
                  ホラー系の動画を題材にしました。赤色と黒をアクセントにし、恐怖をイメージさせるデザインにしました。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo07}
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Youtubeサムネイル 切り抜き動画系</CardTitle>
                <CardDescription>
                  趣味で大手vtuber事務所の切り抜き動画を作っています。ユーモアのあるデザインを意識して作っています。
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={photo08}
                  width="400"
                  height="225"
                  alt="Project 2"
                  className="rounded-md object-cover"
                  style={{ aspectRatio: "400/225", objectFit: "cover" }}
                />
              </CardContent>
            </Card>
          </div>

          <button className="mx-auto w-full mt-[2rem]">
            <Link
              href="/"
              className="bg-[#2bc3e9] p-3 rounded-[1rem] font-bold"
            >
              デザインポートフォリオ一覧
            </Link>
          </button>
        </section>
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <ContactForm />
        </section>
      </main>
      <footer className="bg-muted text-muted-foreground py-6 px-6 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <p>&copy; 2024 sk8754&apos;s All rights reserved.</p>
          <nav className="flex gap-4">
            <Link
              href="#"
              className="hover:text-accent transition-colors"
              prefetch={false}
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="hover:text-accent transition-colors"
              prefetch={false}
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
