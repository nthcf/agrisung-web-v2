/* eslint-disable @next/next/no-img-element */

"use client";

import { Trigger } from "@radix-ui/react-dialog";
import { useSession } from "next-auth/react";

import { type Media, type Supplier } from "@/libs/cms";

import { trackSupplierMediaView } from "@/analytics";
import Lightbox from "../common/Lightbox";

type DetailSupplierMediaItemProps = {
  data: Media | string;
  supplier: Supplier;
};

export default function DetailSupplierMediaItem({
  data,
  supplier,
}: DetailSupplierMediaItemProps) {
  const { data: session } = useSession();

  if (typeof data === "string") {
    return (
      <div>
        <Lightbox
          data={data}
          trigger={
            <Trigger
              className="flex outline-0"
              onClick={() => {
                trackSupplierMediaView(supplier, session, {
                  media_type: "video",
                  media_video_type: "youtube",
                  media_video_id: data,
                });
              }}
            >
              <div className="border-fg-border-main relative aspect-square cursor-pointer overflow-hidden rounded-sm border">
                <img
                  className="h-full w-full object-cover"
                  src={`https://i.ytimg.com/vi/${data}/hqdefault.jpg`}
                  alt="Video"
                />
              </div>
            </Trigger>
          }
        />
      </div>
    );
  }

  return (
    <div>
      <Lightbox
        data={data}
        trigger={
          <Trigger
            className="flex outline-0"
            onClick={() => {
              trackSupplierMediaView(supplier, session, {
                media_type: "image",
                media_image_url: data.url,
              });
            }}
          >
            <div className="border-fg-border-main relative aspect-square cursor-pointer overflow-hidden rounded-sm border">
              <img
                className="h-full w-full object-cover"
                src={data.url}
                alt={data.name}
              />
            </div>
          </Trigger>
        }
      />
    </div>
  );
}
