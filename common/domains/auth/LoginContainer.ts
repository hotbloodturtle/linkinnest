"use client";
import { createContainer } from "unstated-next";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";

const LoginContainer = createContainer(() => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // 초기 인증 상태 확인
  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // 인증 상태 변화 감지
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Google 로그인
  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/`,
        },
      });

      if (error) {
        console.error("Google 로그인 에러:", error.message);
        throw error;
      }
    } catch (error) {
      console.error("로그인 실패:", error);
      setLoading(false);
    }
  };

  // 로그아웃
  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("로그아웃 에러:", error.message);
        throw error;
      }
    } catch (error) {
      console.error("로그아웃 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  // 사용자 프로필 생성/업데이트
  const upsertUserProfile = async (user: User) => {
    try {
      const { error } = await supabase.from("user_profiles").upsert({
        id: user.id,
        username: user.user_metadata.full_name || user.email?.split("@")[0] || "Unknown",
        avatar_url: user.user_metadata.avatar_url,
        bio: null,
      });

      if (error) {
        console.error("프로필 업데이트 에러:", error.message);
        throw error;
      }
    } catch (error) {
      console.error("프로필 업데이트 실패:", error);
    }
  };

  // 사용자가 로그인했을 때 프로필 자동 생성/업데이트
  useEffect(() => {
    if (user) {
      upsertUserProfile(user);
    }
  }, [user]);

  return {
    user,
    loading,
    signInWithGoogle,
    signOut,
    isAuthenticated: !!user,
  };
});

export default LoginContainer;
