export function getDatabaseStatusParsed(status: number ): String {
  let states = {
    0: 'disconnected',
    1: 'connected',
    2: 'connecting',
    3: 'disconnecting'
  };
  return states[status];
}