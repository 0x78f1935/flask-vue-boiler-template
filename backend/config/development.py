class Development(object):
    """
    All values in this class will overwrite the values available in __init__ and the system config.
    This provide the advantage to create a test environment but also a production environment.

    This class represents the development environment.
    """
    def __init__(self) -> None:
        super().__init__()

        self.ENVIRONMENT = "Development"
