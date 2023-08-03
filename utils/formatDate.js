function formatDate(timestamp) {
  return new Date(timestamp).toISOString();
}

module.exports = formatDate;
