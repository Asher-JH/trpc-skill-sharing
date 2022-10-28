export type ProcedureMeta = {
  allowedRoles?: string[];
  /**
   * And any other custom values, middleware conditions etc.
   * - can be accessed in resolver, middelware
   */
};
