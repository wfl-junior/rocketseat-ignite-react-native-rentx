export interface CarSyncPullDTO {
  latestVersion: number;
  changes: {
    cars: {
      created: any[];
      updated: any[];
      deleted: any[];
    };
  };
}
