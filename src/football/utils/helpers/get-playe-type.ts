// Function to get the abbreviated player type
export function getPlayerTypeAbbreviation(playerType: string): string {
  switch (playerType) {
    case 'Forwards':
      return 'FW';
    case 'Defenders':
      return 'DF';
    case 'Goalkeepers':
      return 'GK';
    case 'Midfielders':
      return 'MD';
    default:
      return playerType;
  }
}
