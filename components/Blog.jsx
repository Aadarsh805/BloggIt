import { PlusOneTwoTone } from "@mui/icons-material";
import moment from "moment";
import Image from "next/image";
import React from "react";
import featured from "../public/featured.png";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Blog = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      case "heading-one":
        return (
          <h2 key={index} className="text-2xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h2>
        );
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => {
              return <React.Fragment key={i}>{item}</React.Fragment>;
            })}
          </h4>
        );
      case "code-block":
        return (
          <div
            key={index}
            className="text-md font-medium bg-[#f2f4ff] rounded p-6"
          >
            {modifiedText.map((item, i) => {
              return <code key={i}>{item}</code>;
            })}
          </div>
        );

      default:
        return modifiedText;
    }
  };

  return (
    <div className="h-auto w-full pr-6">
      <div className="w-full flex items-center justify-center">
        <Image
          src={post?.image?.url}
          width={900}
          height={420}
          className="align-center object-cover border-1 border-black"
        />
      </div>
      <h1 className="text-center text-5xl font-semibold text-gray-900 opacity-80 mt-12">
        {post.title}
      </h1>
      <p className="text-center text-xl mt-8">{post.description}</p>

      <div className="flex gap-8 items-center mt-8 w-full justify-center">
        <div className="object-cover border-2 flex items-center justify-center border-black rounded-full w-14 h-14">
          <Image
            src={post.admin?.photo?.url}
            width={48}
            height={48}
            className="rounded-full object-cover"
          />
        </div>
        <span className="w-1 h-1 rounded-full bg-black"></span>
        <div className="flex flex-col">
          <p className="text-lg font-medium">{post.admin?.name}</p>
          <p className="text-md text-gray-500">{post.admin.bio}</p>
        </div>
        <span className="w-1 h-1 rounded-full bg-black"></span>
        <p className="text-md text-gray-500">
          {moment(post.createdAt).format("MMM DD, YYYY")}
        </p>
        {post.starred && (
          <div className="flex items-center">
            <span className="w-1 h-1 rounded-full bg-black mr-8"></span>
            <Image src={featured} width={40} height={40} />
          </div>
        )}
      </div>

      <div className="w-full bg-[#f2f4ff] rounded-lg p-8 mt-12">
        <div className="flex items-center gap-4">
          <FormatListBulletedIcon />
          <p className="text-xl ">Table of contents</p>
        </div>
        <div className="mt-4 flex flex-col gap-3 pl-8">
          {post.content.raw.children
            .filter((child) => child.type === "heading-one")
            .map((children) =>
              children.children.map((child) => (
                <li className="text-lg font-medium">{child.text}</li>
              ))
            )}
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4">
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );

          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default Blog;
