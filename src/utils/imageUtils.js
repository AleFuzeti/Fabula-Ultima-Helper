// Utilitário para gerenciar URLs de imagens
const getImageUrl = (imagePath) => {
  const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL || '/assets';
  const publicUrl = process.env.PUBLIC_URL || '';
  
  // Remove barras duplicadas e garante que o caminho seja correto
  const cleanPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  return `${publicUrl}${baseUrl}${cleanPath}`;
};

// Função específica para imagens do diário
export const getDiaryImageUrl = (imageName) => {
  return getImageUrl(`/Diario/${imageName}`);
};

// Função específica para imagens de personagens
export const getCharacterImageUrl = (imageName) => {
  return getImageUrl(`/Char/${imageName}`);
};

// Função específica para imagens de artefatos
export const getArtifactImageUrl = (imageName) => {
  return getImageUrl(`/Artifacts/${imageName}`);
};

// Função específica para imagens de equipamentos
export const getEquipmentImageUrl = (imageName) => {
  return getImageUrl(`/Equips/${imageName}`);
};

// Função genérica para qualquer imagem
export const getAssetUrl = (imagePath) => {
  return getImageUrl(imagePath);
};

export default getImageUrl;
