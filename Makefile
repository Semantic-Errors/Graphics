CC = gcc

CFLAGS = -Wall -Werror -Wextra -pedantic -std=c89
LDFLAGS = -lSDL2


SRC = main.c src/*.c
BIN_DIR = bin

TARGET = $(BIN_DIR)/graphics

all: $(TARGET)

$(TARGET): $(SRC)
	@mkdir -p $(BIN_DIR)
	$(CC) $(CFLAGS) $(SRC) -o $@ $(LDFLAGS)

clean:
	@rm -f $(TARGET)

.PHONY: all clean