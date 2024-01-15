import React, { useEffect, useRef, useState } from "react";
import { PillsInputContainer } from "./pills-input-container";
import { USERS } from "@/constants";
import { Pill } from "./pill";
import { PillsInput } from ".";
import { Popover } from "./popover";
import { UserOption } from "./user-option";
export const UserInput = () => {
  const [selectedUsers, setSelectedUsers] = useState<typeof USERS>([]);
  const [inputValue, setInputValue] = useState("");
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [options, setOptions] = useState(USERS);
  const [highlightedPillId, setHighlightedPillId] = useState<number | null>(
    null
  );

  const pillInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    /* return if inputValue is empty and selectedUsers is empty */

    if (!selectedUsers?.length && inputValue === "") {
      setOptions(USERS);
    }
    /* remove all the selected user and unmatched options from options */

    let tempOptions: typeof USERS = USERS;

    tempOptions = tempOptions.filter((option) => {
      if (selectedUsers?.length) {
        if (
          selectedUsers?.find(
            (selectedUser) => selectedUser?._id === option?._id
          )
        )
          return false;

        if (inputValue !== "") {
          if (!option?.name?.includes(inputValue)) return false;
        }
        return true;
      } else {
        if (inputValue !== "") {
          if (!option?.name?.includes(inputValue)) return false;
        }
        return true;
      }
    });

    setOptions(tempOptions);
  }, [selectedUsers, inputValue]);

  const handleBackSpace = () => {
    if (highlightedPillId === null) {
      setHighlightedPillId(selectedUsers?.[selectedUsers.length - 1]?._id);
    } else {
      setSelectedUsers(
        selectedUsers.filter(
          (selectedUser) => selectedUser?._id !== highlightedPillId
        )
      );
      setHighlightedPillId(null);
    }
  };

  return (
    <PillsInputContainer>
      {selectedUsers?.map((selectedUser, index) => (
        <Pill
          highlighted={selectedUser?._id === highlightedPillId}
          key={selectedUser?._id}
          _id={selectedUser?._id}
          imageUrl={selectedUser?.imageUrl}
          label={selectedUser?.name}
          imageAlt={selectedUser?.name}
          onDelete={() => {
            setSelectedUsers(
              selectedUsers?.filter((user) => selectedUser?._id !== user?._id)
            );
          }}
        />
      ))}

      <PillsInput
        ref={pillInputRef}
        placeholder="Enter a name"
        id="user-input"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e?.key === "Backspace") handleBackSpace();
        }}
        onFocus={() => {
          setIsPopoverOpen(true);
        }}
        onBlur={() => {
          setIsPopoverOpen(false);
        }}
      />

      {isPopoverOpen && (
        <Popover targetId="user-input">
          {options?.map((user) => (
            <UserOption
              imageUrl={user?.imageUrl}
              imageAlt={user?.name}
              label={user?.name}
              key={user?._id}
              onSelect={() => {
                if (
                  selectedUsers.find(
                    (selectedUser) => selectedUser?._id === user?._id
                  )
                ) {
                  setSelectedUsers(
                    selectedUsers?.filter(
                      (selectedUser) => selectedUser?._id !== user?._id
                    )
                  );
                } else {
                  setSelectedUsers((prevUsers) => [...prevUsers, user]);
                }

                pillInputRef.current?.focus();
              }}
            />
          ))}
        </Popover>
      )}
    </PillsInputContainer>
  );
};
