declare namespace App.Models {
    export interface Membership {
        id: number;
        team_id: number;
        user_id: number;
        role: string | null;
        created_at: string | null;
        updated_at: string | null;
    }
    export interface Team {
        id: number;
        user_id: number;
        name: string;
        personal_team: boolean;
        created_at: string | null;
        updated_at: string | null;
        owner?: App.Models.User | null;
        users?: Array<App.Models.User> | null;
        teamInvitations?: Array<App.Models.TeamInvitation> | null;
    }
    export interface TeamInvitation {
        id: number;
        team_id: number;
        email: string;
        role: string | null;
        created_at: string | null;
        updated_at: string | null;
        team?: App.Models.Team | null;
    }
    export interface User {
        id: number;
        name: string;
        email: string;
        email_verified_at: string | null;
        password: string;
        two_factor_secret: string | null;
        two_factor_recovery_codes: string | null;
        remember_token: string | null;
        current_team_id: number | null;
        profile_photo_path: string | null;
        created_at: string | null;
        updated_at: string | null;
        readonly profile_photo_url?: any;
    }
}