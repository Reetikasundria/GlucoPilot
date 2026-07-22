import {
    Settings as SettingsIcon,
  } from "lucide-react";
  
  import AccountSettings from "@/features/settings/components/AccountSettings";
  import DangerZone from "@/features/settings/components/DangerZone";
  import NotificationSettings from "@/features/settings/components/NotificationSettings";
  import PrivacySettings from "@/features/settings/components/PrivacySettings";
  
  export default function SettingsPage() {
    return (
      <main className="min-h-screen bg-muted/20 px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl space-y-6">
          <div className="flex items-center gap-3">
            <SettingsIcon className="h-6 w-6" />
  
            <div>
              <h1 className="text-2xl font-semibold">
                Settings
              </h1>
  
              <p className="mt-1 text-sm text-muted-foreground">
                Manage your account, notifications and privacy preferences.
              </p>
            </div>
          </div>
  
          <AccountSettings />
  
          <NotificationSettings />
  
          <PrivacySettings />
  
          <DangerZone />
        </div>
      </main>
    );
  }