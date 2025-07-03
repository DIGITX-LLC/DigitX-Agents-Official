"use client";
import React, { useEffect, useRef, useCallback, useMemo } from "react";
import Image from "next/image";
import "./ProfileCard.css";

interface ProfileCardProps {
  avatarUrl?: string;
  className?: string;
  miniAvatarUrl?: string;
  name?: string;
  title?: string;
  handle?: string;
  status?: string;
  showUserInfo?: boolean;
}

const ProfileCardComponent: React.FC<ProfileCardProps> = ({
  avatarUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  className = "",
  miniAvatarUrl,
  name = "Team Member",
  title = "Role",
  handle = "digitx",
  status = "Online",
  showUserInfo = true,
}) => {
  return (
    <div className={`pc-card-wrapper ${className}`.trim()}>
      <section className="pc-card">
        <div className="pc-inside">
          <div className="pc-shine" />
          <div className="pc-glare" />
          <div className="pc-avatar-content">
            <Image
              className="avatar"
              src={avatarUrl}
              alt={`${name || "User"} avatar`}
              width={400}
              height={400}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
            {showUserInfo && (
              <div className="pc-user-info">
                <div className="pc-user-details">
                  <div className="pc-mini-avatar">
                    <Image
                      src={miniAvatarUrl || avatarUrl}
                      alt={`${name || "User"} mini avatar`}
                      width={40}
                      height={40}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.opacity = "0.5";
                        target.src = avatarUrl || "";
                      }}
                    />
                  </div>
                  <div className="pc-user-text">
                    <div className="pc-handle">@{handle}</div>
                    <div className="pc-status">{status}</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="pc-content">
            <div className="pc-details">
              <h3>{name}</h3>
              <p>{title}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProfileCard = React.memo(ProfileCardComponent);

export default ProfileCard; 