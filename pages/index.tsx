import { NextPage } from "next";
import { useEffect, useState } from "react";
const IndexPage: NextPage = () => {
  // useStateを使って状態を定義する
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  // 初期化時に画像を読み込む宣言
  useEffect(() => {
    fetchImage().then((newImage) => {
      setImageUrl(newImage.url); // 画像URLの状態を更新する
      setLoading(false); // ローディング状態を更新する
    });
  }, []);
  // ローディングでなければ、画像を表示する
  return <div>{loading || <img src={imageUrl} />}</div>;
};
export default IndexPage;
type Image = {
  url: string;
};
const fetchImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images = await res.json();
  console.log(images);
  return images[0];
};
