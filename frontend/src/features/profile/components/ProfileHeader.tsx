"use client";

import { useRef, useState } from "react";
import {
  Camera,
  Check,
  Pencil,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function ProfileHeader() {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
  };

  return (
    <section className="rounded-2xl border bg-card p-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <div className="relative">
            <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border bg-muted">
              {image ? (
                <img
                  src={image}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              ) : (
                <UserRound className="h-10 w-10 text-muted-foreground" />
              )}
            </div>

            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full border bg-background shadow-sm transition hover:bg-muted"
              aria-label="Change profile picture"
            >
              <Camera className="h-4 w-4" />
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          <div>
            <h1 className="text-2xl font-semibold">
              Reetika Sundria
            </h1>

            <p className="mt-1 text-sm text-muted-foreground">
              B.Tech Student
            </p>

            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-green-600" />

              Profile information is up to date
            </div>
          </div>
        </div>

        <Button variant="outline">
          <Pencil className="mr-2 h-4 w-4" />

          Edit Profile
        </Button>
      </div>
    </section>
  );
}