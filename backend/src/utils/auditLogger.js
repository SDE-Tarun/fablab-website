const auditLogger =
  (
    action,
    userId,
    entity
  ) => {

    console.log({
      action,
      userId,
      entity,
      time:
        new Date(),
    });

  };

module.exports =
  auditLogger;