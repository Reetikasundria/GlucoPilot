import ProfileHeader from "@/features/profile/components/ProfileHeader";
import PersonalInfoCard from "@/features/profile/components/PersonalInfoCard";
import DiabetesInfoCard from "@/features/profile/components/DiabetesInfoCard";
import HealthPreferencesCard from "@/features/profile/components/HealthPreferencesCard";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-muted/20 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">
            Profile
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage your personal information and health preferences.
          </p>
        </div>

        <ProfileHeader />

        <div className="grid gap-6 lg:grid-cols-2">
          <PersonalInfoCard />

          <DiabetesInfoCard />

          <HealthPreferencesCard />
        </div>
      </div>
    </main>
  );
}