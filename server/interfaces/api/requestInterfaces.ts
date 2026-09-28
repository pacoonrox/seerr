import type { MediaType } from '@server/constants/media';
import type { MediaRequest } from '@server/entity/MediaRequest';
import type { NonFunctionProperties, PaginatedResponse } from './common';

export interface RequestResultsResponse extends PaginatedResponse {
  results: (NonFunctionProperties<MediaRequest> & {
    profileName?: string;
    canRemove?: boolean;
  })[];
  serviceErrors: {
    radarr: { id: number; name: string }[];
    sonarr: { id: number; name: string }[];
  };
}

export type MediaRequestBody = {
  mediaType: MediaType;
  mediaId: number;
  tvdbId?: number;
  seasons?: number[] | 'all';
  is4k?: boolean;
  serverId?: number;
  profileId?: number;
  profileName?: string;
  rootFolder?: string;
  languageProfileId?: number;
  userId?: number;
  tags?: number[];
  ignoreQuota?: boolean;
  /**
   * Set by callers (e.g. SeerrFin's interactive search) that already grabbed a specific
   * release directly through Radarr/Sonarr before creating this request purely so it's
   * tracked/visible like a normal request. Without this, Radarr/Sonarr's own "add" call
   * still fires its automatic search for a release, which can grab a second, competing
   * one for the same title while the first is still downloading.
   */
  skipSearch?: boolean;
};
