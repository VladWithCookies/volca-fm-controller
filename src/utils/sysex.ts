export const createDX7Sysex = (patch) => {
  const sysex = [
    0xF0, // SysEx start byte
    0x43, // Yamaha manufacturer ID
    0x00, // Device number (usually 0 for DX7)
    0x00, // Model ID part 1
    0x01, // Model ID part 2
    0x1B, // Model ID part 3 (DX7)

    // --- Operator 1 Block ---
    0x50, // Parameter address high byte (operator 1 / envelope start)
    0x00, // Parameter address mid byte
    0x00, // Parameter address low byte
    0x50, // Output level MSB placeholder
    0x63, // Output level LSB (operator 1 level = 99)

    0x00, // Attack level (padding placeholder)
    0x00, // Decay level (padding)
    0x00, // Sustain level (padding)
    0x32, // Release level (step value example = 50)
    0x00, // Attack rate (padding)
    0x00, // Decay rate (padding)
    0x00, // Sustain rate (padding)
    0x00, // Release rate (padding)
    0x00, // Coarse tune (padding)
    0x00, // Fine tune (padding)
    0x00, // Mode / ratio flag (padding)
    0x5C, // Block delimiter / checksum
    0x00, // Index high byte (operator index)
    0x01, // Index low byte (operator 1)
    0x00, // Parameter group (operator group)
    0x07, // Parameter ID (output level / envelope parameter)

    // --- Operator 2 Block ---
    0x50, // Parameter address high (operator 2)
    0x00, // Address mid
    0x00, // Address low
    0x50, // Output level MSB
    0x63, // Output level LSB (operator 2 level = 99)
    0x00, // Attack level
    0x00, // Decay level
    0x00, // Sustain level
    0x32, // Release level
    0x00, // Attack rate
    0x00, // Decay rate
    0x00, // Sustain rate
    0x00, // Release rate
    0x00, // Coarse tune
    0x00, // Fine tune
    0x00, // Mode / ratio flag
    0x5C, // Block delimiter
    0x00, // Index high
    0x02, // Index low (operator 2)
    0x00, // Parameter group
    0x07, // Parameter ID

    // --- Operator 3 Block ---
    0x50, // Parameter address high (operator 3)
    0x00, // Address mid
    0x00, // Address low
    0x50, // Output level MSB
    0x63, // Output level LSB (operator 3 level = 99)
    0x00, // Attack level
    0x00, // Decay level
    0x00, // Sustain level
    0x32, // Release level
    0x00, // Attack rate
    0x00, // Decay rate
    0x00, // Sustain rate
    0x00, // Release rate
    0x00, // Coarse tune
    0x00, // Fine tune
    0x00, // Mode / ratio flag
    0x5C, // Block delimiter
    0x00, // Index high
    0x01, // Index low (repeat/layer)
    0x00, // Parameter group
    0x07, // Parameter ID

    // --- Operator 4 Block ---
    0x50, // Parameter address high (operator 4)
    0x00, // Address mid
    0x00, // Address low
    0x4F, // Output level MSB (operator 4 level = 79)
    0x63, // Output level LSB
    0x00, // Attack level
    0x00, // Decay level
    0x00, // Sustain level
    0x32, // Release level
    0x00, // Attack rate
    0x00, // Decay rate
    0x00, // Sustain rate
    0x00, // Release rate
    0x07, // Non-zero flag / mode
    0x00, // Coarse tune
    0x00, // Fine tune
    0x5C, // Block delimiter
    0x00, // Index high
    0x02, // Index low (operator 4)
    0x00, // Parameter group
    0x07, // Parameter ID

    // --- Operator 5 Block ---
    0x50, // Parameter address high (operator 5)
    0x00, // Address mid
    0x00, // Address low
    0x50, // Output level MSB
    0x63, // Output level LSB (operator 5 level = 99)
    0x00, // Attack level
    0x00, // Decay level
    0x00, // Sustain level
    0x32, // Release level
    0x00, // Attack rate
    0x00, // Decay rate
    0x00, // Sustain rate
    0x00, // Release rate
    0x00, // Coarse tune
    0x00, // Fine tune
    0x00, // Mode / ratio flag
    0x5C, // Block delimiter
    0x00, // Index high
    0x01, // Index low (operator 5)
    0x00, // Parameter group
    0x07, // Parameter ID

    // --- Global / Voice Parameters ---
    0x00, // Global parameter group
    0x00, // Address mid
    0x00, // Address low
    0x50, // MSB (main output level)
    0x63, // LSB (main output level = 99)
    0x00, // Pitch EG depth / LFO depth (padding)
    0x00, // LFO rate / modulation
    0x00, // Feedback / algorithm related
    0x63, // Algorithm / total value = 99
    0x00, // Padding
    0x00, // Padding
    0x02, // Algorithm selection / LFO / pitch EG field
    0x00, // Parameter field
    0x04, // Parameter field
    0x00, // Padding
    0x00, // Padding
    0x63, // Some value = 99
    0x00, // Padding
    0x0A, // Length / count
    0x00, // Parameter group
    0x07, // Parameter ID

    // --- Envelope Step Values ---
    0x32, // Attack step operator 1
    0x32, // Decay step operator 1
    0x32, // Sustain step operator 1
    0x32, // Release step operator 1
    0x32, // Attack step operator 2
    0x32, // Decay step operator 2
    0x32, // Sustain step operator 2
    0x32, // Release step operator 2

    0x1F, // Marker / flag
    0x00, // Padding
    0x00, // Padding
    0x00, // Padding
    0x00, // Padding
    0x00, // Padding
    0x00, // Padding
    0x00, // Padding
    0x00, // Padding
    0x00, // Padding

    0x18, // Metadata / patch length indicator

    // --- Patch Name ---
    0x4E, // 'N'
    0x65, // 'e'
    0x77, // 'w'
    0x20, // space
    0x50, // 'P'
    0x61, // 'a'
    0x74, // 't'
    0x63, // 'c'
    0x68, // 'h'
    0x20, // space padding
    0x20, // space padding

    0xF7  // SysEx end byte
  ]

  console.log(sysex)

  return sysex;
}
